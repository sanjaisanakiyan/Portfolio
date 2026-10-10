$filePath = 'assets\css\style.css'
$lines = Get-Content $filePath -Encoding UTF8
$keep = $lines[0..3238]
$newCss = @'

/* ==========================================================================
   11. GAMING HUD RETICLE CURSOR SYSTEM
   Theme: Cyan Gaming HUD Targeting Reticle (#58D9FF)
   ========================================================================== */

/* Critical: Hide default OS/browser cursor across the entire document on desktop */
@media (hover: hover) and (pointer: fine), (min-width: 992px) {
  html.has-gaming-cursor,
  html.has-gaming-cursor body,
  html.has-gaming-cursor body * {
    cursor: none !important;
  }

  /* Accessibility & Usability: Restore native text caret for form inputs & textareas */
  html.has-gaming-cursor input,
  html.has-gaming-cursor textarea,
  html.has-gaming-cursor select,
  html.has-gaming-cursor [contenteditable="true"] {
    cursor: text !important;
  }

  html.has-gaming-cursor input[type="button"],
  html.has-gaming-cursor input[type="submit"],
  html.has-gaming-cursor input[type="reset"],
  html.has-gaming-cursor input[type="checkbox"],
  html.has-gaming-cursor input[type="radio"],
  html.has-gaming-cursor input[type="file"] {
    cursor: pointer !important;
  }
}

/* Touch & coarse devices: completely hide and disable custom cursor */
@media (hover: none) or (pointer: coarse) {
  #game-cursor {
    display: none !important;
  }
}

/* Master Fixed Reticle Container (44px x 44px) */
#game-cursor {
  position: fixed;
  left: 0;
  top: 0;
  width: 44px;
  height: 44px;
  pointer-events: none !important;
  z-index: 2147483647 !important;
  transform: translate3d(-100px, -100px, 0);
  will-change: transform;
  user-select: none;
  box-sizing: border-box;
  opacity: 1;
  transition: opacity 0.15s ease;
}

#game-cursor.is-hidden {
  opacity: 0 !important;
  visibility: hidden;
}

/* 1. Center Precision Dot (3-4px diameter) */
.cursor-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #58D9FF;
  transform: translate(-50%, -50%);
  box-shadow:
    0 0 6px rgba(88, 217, 255, 0.75),
    0 0 14px rgba(88, 217, 255, 0.2);
  pointer-events: none;
  transition: transform 0.18s cubic-bezier(0.16, 1, 0.3, 1),
              background-color 0.18s ease,
              box-shadow 0.18s ease;
}

/* 2. Outer Ring (28-32px diameter, 1px stroke) */
.cursor-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid rgba(88, 217, 255, 0.45);
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  pointer-events: none;
  box-shadow: 0 0 6px rgba(88, 217, 255, 0.2);
  transition: width 0.18s cubic-bezier(0.16, 1, 0.3, 1),
              height 0.18s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.18s ease,
              box-shadow 0.18s ease,
              transform 0.18s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Click Target-Lock Pulse Ring (Nested in Ring) */
.cursor-ring::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1.5px solid #58D9FF;
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  pointer-events: none;
  box-sizing: border-box;
}

/* 3. Four Directional Crosshair Arms */
.cursor-arm {
  position: absolute;
  background-color: #58D9FF;
  box-shadow: 0 0 4px rgba(88, 217, 255, 0.65);
  pointer-events: none;
  transition: transform 0.18s cubic-bezier(0.16, 1, 0.3, 1),
              opacity 0.18s ease,
              background-color 0.18s ease;
}

/* Top Arm with gap from center dot */
.cursor-top {
  width: 1px;
  height: 11px;
  left: 50%;
  bottom: calc(50% + 5px);
  transform: translateX(-50%);
}

/* Bottom Arm with gap from center dot */
.cursor-bottom {
  width: 1px;
  height: 11px;
  left: 50%;
  top: calc(50% + 5px);
  transform: translateX(-50%);
}

/* Left Arm with gap from center dot */
.cursor-left {
  width: 11px;
  height: 1px;
  top: 50%;
  right: calc(50% + 5px);
  transform: translateY(-50%);
}

/* Right Arm with gap from center dot */
.cursor-right {
  width: 11px;
  height: 1px;
  top: 50%;
  left: calc(50% + 5px);
  transform: translateY(-50%);
}

/* 4. Contextual HUD Interaction Label */
.cursor-label {
  position: absolute;
  top: calc(100% - 2px);
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #58D9FF;
  background: rgba(8, 10, 16, 0.92);
  border: 1px solid rgba(88, 217, 255, 0.6);
  padding: 2px 6px;
  border-radius: 2px;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  box-shadow: 0 0 8px rgba(88, 217, 255, 0.25), 0 4px 10px rgba(0, 0, 0, 0.7);
  transition: opacity 0.15s ease,
              transform 0.15s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.15s ease,
              color 0.15s ease;
}

/* ==========================================================================
   STATE-SPECIFIC HUD RETICLE STYLES
   ========================================================================== */

/* A. PROJECT CARD HOVER: TARGET STATE */
#game-cursor.state-project .cursor-ring {
  width: 36px;
  height: 36px;
  border-color: rgba(88, 217, 255, 0.85);
  box-shadow: 0 0 10px rgba(88, 217, 255, 0.45);
}

#game-cursor.state-project .cursor-top {
  transform: translateX(-50%) translateY(-2px);
}

#game-cursor.state-project .cursor-bottom {
  transform: translateX(-50%) translateY(2px);
}

#game-cursor.state-project .cursor-left {
  transform: translateY(-50%) translateX(-2px);
}

#game-cursor.state-project .cursor-right {
  transform: translateY(-50%) translateX(2px);
}

#game-cursor.state-project .cursor-label {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

/* B. BUTTON & NAVIGATION HOVER: COMPACT INTERACTION (OPEN / SELECT) */
#game-cursor.state-button .cursor-ring {
  width: 24px;
  height: 24px;
  border-color: #58D9FF;
  box-shadow: 0 0 8px rgba(88, 217, 255, 0.5);
}

#game-cursor.state-button .cursor-dot {
  transform: translate(-50%, -50%) scale(1.25);
  box-shadow: 0 0 8px rgba(88, 217, 255, 0.9), 0 0 16px rgba(88, 217, 255, 0.4);
}

#game-cursor.state-button .cursor-top {
  transform: translateX(-50%) translateY(2px);
}

#game-cursor.state-button .cursor-bottom {
  transform: translateX(-50%) translateY(-2px);
}

#game-cursor.state-button .cursor-left {
  transform: translateY(-50%) translateX(2px);
}

#game-cursor.state-button .cursor-right {
  transform: translateY(-50%) translateX(-2px);
}

#game-cursor.state-button .cursor-label {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

/* C. CASE STUDY BUTTON: "OPEN CASE" */
#game-cursor.state-case .cursor-ring {
  width: 26px;
  height: 26px;
  border-color: #58D9FF;
  box-shadow: 0 0 10px rgba(88, 217, 255, 0.6);
}

#game-cursor.state-case .cursor-dot {
  transform: translate(-50%, -50%) scale(1.3);
  box-shadow: 0 0 10px rgba(88, 217, 255, 0.95);
}

#game-cursor.state-case .cursor-top {
  transform: translateX(-50%) translateY(2px);
}

#game-cursor.state-case .cursor-bottom {
  transform: translateX(-50%) translateY(-2px);
}

#game-cursor.state-case .cursor-left {
  transform: translateY(-50%) translateX(2px);
}

#game-cursor.state-case .cursor-right {
  transform: translateY(-50%) translateX(-2px);
}

#game-cursor.state-case .cursor-label {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

/* D. PROJECT ARCHIVE / GOOGLE DRIVE: "ACCESS" */
#game-cursor.state-archive .cursor-ring {
  width: 26px;
  height: 26px;
  border-color: #58D9FF;
  box-shadow: 0 0 8px rgba(88, 217, 255, 0.5);
}

#game-cursor.state-archive .cursor-label {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

/* E. CLICK ANIMATION: TARGET LOCK (200-240ms duration) */
#game-cursor.is-clicking .cursor-ring {
  transform: translate(-50%, -50%) scale(0.85);
  border-color: #58D9FF;
  box-shadow: 0 0 12px rgba(88, 217, 255, 0.85);
}

#game-cursor.is-clicking .cursor-ring::after {
  animation: click-target-lock 0.24s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

#game-cursor.is-clicking .cursor-dot {
  transform: translate(-50%, -50%) scale(0.65);
}

@keyframes click-target-lock {
  0% {
    transform: translate(-50%, -50%) scale(0.3);
    opacity: 0.95;
    box-shadow: 0 0 8px #58D9FF;
  }
  50% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.65);
    opacity: 0;
  }
}

/* F. SELECTABLE CONTENT TEXT: GENTLE FADE FOR READABILITY */
#game-cursor.state-text {
  opacity: 0.28;
}

#game-cursor.state-text .cursor-ring {
  transform: translate(-50%, -50%) scale(0.8);
}

#game-cursor.state-text .cursor-label {
  opacity: 0 !important;
}

/* G. FORM INPUTS / TEXTAREAS: HIDDEN TO PRESERVE NATIVE TEXT CARET */
#game-cursor.state-input {
  opacity: 0 !important;
  visibility: hidden;
}

/* H. REDUCED MOTION PREFERENCE */
@media (prefers-reduced-motion: reduce) {
  #game-cursor,
  .cursor-ring,
  .cursor-dot,
  .cursor-arm,
  .cursor-label {
    transition: none !important;
    animation: none !important;
  }
  .cursor-ring::after {
    display: none !important;
  }
}
'@

$combined = ($keep -join "`n") + "`n" + $newCss
[System.IO.File]::WriteAllText($filePath, $combined, [System.Text.Encoding]::UTF8)
Write-Host "style.css updated successfully. Total lines: $((Get-Content $filePath).Count)"
