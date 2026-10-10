$filePath = 'assets\js\main.js'
$lines = Get-Content $filePath -Encoding UTF8
$before = $lines[0..1935]
$after = $lines[2213..($lines.Count - 1)]

$newJs = @'

// ============================================================================
// 11. GAMING HUD RETICLE CURSOR SYSTEM (#58D9FF)
// ============================================================================
function initGamingCursor() {
  // Mobile & Touch Protection: Only activate if pointer is fine and hover is supported
  const pointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
  if (!pointerQuery.matches && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return;
  }

  // Find or create dedicated #game-cursor element
  let cursorEl = document.getElementById('game-cursor');
  if (!cursorEl) {
    cursorEl = document.createElement('div');
    cursorEl.id = 'game-cursor';
    cursorEl.className = 'is-hidden';
    cursorEl.setAttribute('aria-hidden', 'true');
    cursorEl.innerHTML = `
      <div class="cursor-ring"></div>
      <div class="cursor-dot"></div>
      <div class="cursor-arm cursor-top"></div>
      <div class="cursor-arm cursor-bottom"></div>
      <div class="cursor-arm cursor-left"></div>
      <div class="cursor-arm cursor-right"></div>
      <div class="cursor-label"></div>
    `;
    document.body.appendChild(cursorEl);
  }

  const labelEl = cursorEl.querySelector('.cursor-label');

  // Mouse coordinate state (centered around 44px box)
  let mouseX = -100;
  let mouseY = -100;
  let isVisible = false;
  let isClicking = false;
  let currentState = 'default';
  let currentLabel = '';

  function enableCustomCursor() {
    document.documentElement.classList.add('has-gaming-cursor');
    document.body.classList.add('has-gaming-cursor');
  }

  function disableCustomCursor() {
    document.documentElement.classList.remove('has-gaming-cursor');
    document.body.classList.remove('has-gaming-cursor');
  }

  // Pointer position update with minimal latency
  function onPointerMove(e) {
    if (e.pointerType && e.pointerType === 'touch') return;
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!isVisible) {
      isVisible = true;
      enableCustomCursor();
      cursorEl.classList.remove('is-hidden');
    }
  }

  window.addEventListener('mousemove', onPointerMove, { passive: true });
  window.addEventListener('pointermove', onPointerMove, { passive: true });

  // Viewport and focus boundaries
  document.addEventListener('mouseleave', () => {
    cursorEl.classList.add('is-hidden');
    isVisible = false;
  });

  document.addEventListener('mouseenter', (e) => {
    if (e && typeof e.clientX === 'number' && e.clientX >= 0) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }
    cursorEl.classList.remove('is-hidden');
    isVisible = true;
    enableCustomCursor();
  });

  window.addEventListener('blur', () => {
    cursorEl.classList.add('is-hidden');
    isVisible = false;
  });

  window.addEventListener('focus', () => {
    cursorEl.classList.remove('is-hidden');
    isVisible = true;
    enableCustomCursor();
  });

  // Touch listener: deactivate if touch is used
  window.addEventListener('touchstart', () => {
    disableCustomCursor();
    cursorEl.classList.add('is-hidden');
    isVisible = false;
  }, { passive: true });

  // Click animation: 200-240ms targeting pulse (TARGET LOCK -> CONFIRMED)
  window.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return; // Left click only
    isClicking = true;
    cursorEl.classList.add('is-clicking');

    setTimeout(() => {
      isClicking = false;
      cursorEl.classList.remove('is-clicking');
    }, 240);
  });

  // State switching helper
  function setCursorState(state, text = '') {
    if (state === currentState && text === currentLabel) return;

    cursorEl.classList.remove(
      'state-project',
      'state-case',
      'state-archive',
      'state-button',
      'state-text',
      'state-input'
    );

    if (state && state !== 'default') {
      cursorEl.classList.add(`state-${state}`);
    }

    currentState = state;
    currentLabel = text;

    if (labelEl) {
      labelEl.textContent = text;
    }
  }

  // Interactive element detection handler using event delegation
  function evaluateTarget(target) {
    if (!target || !(target instanceof Element)) {
      setCursorState('default');
      return;
    }

    // 1. Text Inputs & Form Fields (preserve text selection & caret)
    if (target.closest('input, textarea, select, [contenteditable="true"]')) {
      setCursorState('input', '');
      return;
    }

    // 2. Case Study buttons ("OPEN CASE")
    const caseBtn = target.closest(
      '.btn-view-project, [data-open-case], button[onclick*="openProjectModal"], a[onclick*="openProjectModal"], .project-quick-view-prompt'
    );
    if (caseBtn) {
      setCursorState('case', 'OPEN CASE');
      return;
    }

    // 3. Project Archive & Google Drive buttons ("ACCESS")
    const archiveBtn = target.closest(
      'a[href*="drive.google.com"], .btn-external-link, [title*="Archive" i], [aria-label*="Archive" i]'
    );
    if (archiveBtn) {
      setCursorState('archive', 'ACCESS');
      return;
    }

    // 4. Project Cards & Project Media Previews ("TARGET")
    const projectCard = target.closest(
      '.project-card-large, .project-card, .project-media-col, [data-project], [data-project-card], .project, .project-item'
    );
    if (projectCard) {
      const interactiveInside = target.closest('a, button, [role="button"]');
      if (!interactiveInside || interactiveInside === projectCard) {
        setCursorState('project', 'TARGET');
        return;
      }
    }

    // 5. Navigation Links & Brand Monogram
    const navItem = target.closest('.nav-link, .nav-cta-btn, .mobile-nav-link, .nav-brand, .footer-nav a');
    if (navItem) {
      if (navItem.classList.contains('nav-brand')) {
        setCursorState('button', 'HOME');
        return;
      }
      setCursorState('button', 'SELECT');
      return;
    }

    // 6. Generic Interactive Elements: Buttons, Tabs, Filters, Lightbox controls ("OPEN" / "SELECT")
    const interactive = target.closest(
      'button, a, [role="button"], .project-filter-btn, .skill-tab-btn, .modal-tab-btn, .modal-close-btn, .lightbox-control-btn, .lightbox-close-btn, .lightbox-nav-btn, .btn-audio-toggle, .btn-send-message, .hero-scroll-indicator, .clickable, [onclick]'
    );
    if (interactive) {
      let label = 'SELECT';
      if (interactive.classList.contains('project-filter-btn') || interactive.classList.contains('skill-tab-btn')) {
        label = 'SELECT';
      } else if (interactive.classList.contains('btn-primary-cinematic') || interactive.classList.contains('btn-secondary-cinematic')) {
        label = 'OPEN';
      } else if (interactive.classList.contains('modal-close-btn') || interactive.classList.contains('lightbox-close-btn')) {
        label = 'CLOSE';
      } else if (interactive.classList.contains('lightbox-nav-btn')) {
        label = interactive.classList.contains('prev') ? 'PREV' : 'NEXT';
      } else if (interactive.classList.contains('btn-audio-toggle')) {
        label = 'AUDIO';
      } else if (interactive.classList.contains('btn-send-message')) {
        label = 'TRANSMIT';
      } else if (interactive.classList.contains('hero-scroll-indicator')) {
        label = 'SCROLL';
      }
      setCursorState('button', label);
      return;
    }

    // 7. Interactive Highlight Cards & Steppers
    const cardItem = target.closest(
      '.about-highlight-card, .process-step-card, .timeline-card, .skill-category-card, .skill-item'
    );
    if (cardItem) {
      setCursorState('button', 'SELECT');
      return;
    }

    // 8. Selectable reading text (dim reticle so text is easily readable)
    const textEl = target.closest(
      'p, .about-body-text, .section-subtitle, .project-description, .experience-overview, blockquote'
    );
    if (textEl && !target.closest('a, button, [role="button"]')) {
      setCursorState('text', '');
      return;
    }

    // Default Crosshair Reticle State (No text)
    setCursorState('default', '');
  }

  // Mouseover event delegation
  document.addEventListener('mouseover', (e) => {
    evaluateTarget(e.target);
  });

  // Re-evaluate element under cursor when page scrolls
  window.addEventListener('scroll', () => {
    if (isVisible && mouseX >= 0 && mouseY >= 0) {
      const el = document.elementFromPoint(mouseX, mouseY);
      if (el) evaluateTarget(el);
    }
  }, { passive: true });

  // GPU-accelerated RAF loop: center-anchored around mouse coordinates
  function render() {
    if (isVisible) {
      cursorEl.style.transform = `translate3d(${mouseX - 22}px, ${mouseY - 22}px, 0)`;
    }
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}
'@

$combined = ($before -join "`n") + "`n" + $newJs + "`n" + ($after -join "`n")
[System.IO.File]::WriteAllText($filePath, $combined, [System.Text.Encoding]::UTF8)
Write-Host "main.js updated successfully. Total lines: $((Get-Content $filePath).Count)"
