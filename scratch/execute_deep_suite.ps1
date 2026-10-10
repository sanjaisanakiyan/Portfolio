$indexContent = Get-Content "index.html" -Raw
$indexContent = $indexContent.Replace("<head>", "<head><base href=""http://localhost:5500/"">")

$deepTestScript = @'
<div id="deep-test-results" style="display:none"></div>
<script>
window.addEventListener('load', () => {
  const results = [];
  function assert(condition, message) {
    results.push({ pass: !!condition, message });
  }

  const cursor = document.getElementById('gaming-cursor');
  const labelText = cursor.querySelector('#crosshair-label-text');

  // Test 1: Navigation link hover states for each section
  const sections = ['home', 'about', 'skills', 'projects', 'process', 'experience', 'philosophy', 'contact'];
  for (const s of sections) {
    const link = document.querySelector(`.nav-link[href="#${s}"]`);
    if (link) {
      link.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
      assert(cursor.classList.contains('state-button'), `Nav link to #${s} sets state-button`);
    }
  }

  // Test 2: Audio toggle button
  const audioBtn = document.querySelector('.btn-audio-toggle');
  if (audioBtn) {
    audioBtn.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    assert(cursor.classList.contains('state-button'), 'Audio toggle button sets state-button');
    assert(labelText.textContent === 'AUDIO', 'Audio button shows AUDIO label');
  }

  // Test 3: Hero CTA buttons
  const heroCta = document.querySelector('.hero-actions .btn-primary-cinematic');
  if (heroCta) {
    heroCta.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    assert(cursor.classList.contains('state-button'), 'Hero primary CTA sets state-button');
  }

  // Test 4: Skills filter pills
  const skillTab = document.querySelector('.skill-tab-btn');
  if (skillTab) {
    skillTab.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    assert(cursor.classList.contains('state-button'), 'Skill tab sets state-button');
    assert(labelText.textContent === 'FILTER', 'Skill tab shows FILTER label');
  }

  // Test 5: Project filter pills
  const projFilter = document.querySelector('.project-filter-btn');
  if (projFilter) {
    projFilter.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    assert(cursor.classList.contains('state-button'), 'Project filter button sets state-button');
    assert(labelText.textContent === 'FILTER', 'Project filter button shows FILTER label');
  }

  // Test 6: Experience timeline cards
  const timelineCard = document.querySelector('.timeline-card');
  if (timelineCard) {
    timelineCard.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    assert(cursor.classList.contains('state-button'), 'Timeline card sets state-button (inspect)');
    assert(labelText.textContent === 'INSPECT', 'Timeline card shows INSPECT label');
  }

  // Test 7: Process step cards
  const processCard = document.querySelector('.process-step-card');
  if (processCard) {
    processCard.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    assert(cursor.classList.contains('state-button'), 'Process step card sets state-button');
  }

  // Test 8: Contact form inputs and textarea
  const contactName = document.getElementById('contact-name');
  const contactMsg = document.getElementById('contact-message');
  if (contactName) {
    contactName.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    assert(cursor.classList.contains('state-input'), 'Contact name input sets state-input');
    assert(window.getComputedStyle(contactName).cursor === 'text', 'Contact name cursor is text');
  }
  if (contactMsg) {
    contactMsg.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    assert(cursor.classList.contains('state-input'), 'Contact message textarea sets state-input');
    assert(window.getComputedStyle(contactMsg).cursor === 'text', 'Contact message cursor is text');
  }

  // Test 9: Contact submit button
  const submitBtn = document.querySelector('.btn-send-message');
  if (submitBtn) {
    submitBtn.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    assert(cursor.classList.contains('state-button'), 'Submit button sets state-button');
    assert(labelText.textContent === 'TRANSMIT', 'Submit button shows TRANSMIT label');
  }

  // Test 10: Modal Open & Cursor inside modal
  if (typeof openProjectModal === 'function') {
    openProjectModal('driving');
    const modal = document.getElementById('project-modal');
    assert(modal && modal.classList.contains('active'), 'Project modal is active');

    // Check modal close button
    const closeBtn = modal ? modal.querySelector('.modal-close-btn') : null;
    if (closeBtn) {
      closeBtn.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
      assert(cursor.classList.contains('state-button'), 'Modal close button sets state-button');
      assert(labelText.textContent === 'CLOSE', 'Modal close button shows CLOSE label');
    }

    // Check modal tabs
    const modalTab = modal ? modal.querySelector('.modal-tab-btn') : null;
    if (modalTab) {
      modalTab.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
      assert(cursor.classList.contains('state-button'), 'Modal tab sets state-button');
      assert(labelText.textContent === 'SELECT', 'Modal tab shows SELECT label');
    }

    // Close modal
    if (typeof closeProjectModal === 'function') {
      closeProjectModal();
      assert(!modal.classList.contains('active'), 'Modal is closed');
    }
  }

  // Test 11: Viewport leave and enter
  document.dispatchEvent(new Event('mouseleave'));
  assert(cursor.classList.contains('is-hidden'), 'Document mouseleave adds is-hidden');

  document.dispatchEvent(new Event('mouseenter'));
  assert(!cursor.classList.contains('is-hidden'), 'Document mouseenter removes is-hidden');

  // Test 12: Touch start disables cursor
  window.dispatchEvent(new Event('touchstart'));
  assert(cursor.classList.contains('is-hidden'), 'Touchstart hides custom cursor');
  assert(!document.documentElement.classList.contains('has-gaming-cursor'), 'Touchstart removes has-gaming-cursor');

  // Test 13: Mouse movement restores custom cursor after touch
  window.dispatchEvent(new MouseEvent('mousemove', { clientX: 200, clientY: 200, bubbles: true }));
  assert(!cursor.classList.contains('is-hidden'), 'Mousemove restores custom cursor');
  assert(document.documentElement.classList.contains('has-gaming-cursor'), 'Mousemove restores has-gaming-cursor');

  const container = document.getElementById('deep-test-results');
  const passed = results.filter(r => r.pass).length;
  container.setAttribute('data-summary', JSON.stringify({ total: results.length, passed, failed: results.length - passed, results }));
});
</script>
</body>
'@

$deepPage = $indexContent.Replace("</body>", $deepTestScript)
[System.IO.File]::WriteAllText("scratch\deep_test_runner.html", $deepPage, [System.Text.Encoding]::UTF8)

# Run Chrome headless and dump DOM
$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$proc = Start-Process -FilePath $chrome -ArgumentList "--headless=new", "--disable-gpu", "--dump-dom", "http://localhost:5500/scratch/deep_test_runner.html" -NoNewWindow -PassThru -RedirectStandardOutput "scratch\deep_output.txt" -RedirectStandardError "scratch\deep_err.txt"
$proc.WaitForExit(10000)

$res = Get-Content "scratch\deep_output.txt" -Raw
if ($res -match 'data-summary="([^"]+)"') {
    $encoded = $matches[1]
    $json = [System.Net.WebUtility]::HtmlDecode($encoded)
    Write-Host "================ DEEP TEST RESULTS ================"
    $obj = $json | ConvertFrom-Json
    Write-Host "Total Tests: " $obj.total
    Write-Host "Passed:      " $obj.passed
    Write-Host "Failed:      " $obj.failed
    Write-Host "---------------------------------------------------"
    foreach ($r in $obj.results) {
        $status = if ($r.pass) { "[PASS]" } else { "[FAIL]" }
        Write-Host "$status $($r.message)"
    }
    Write-Host "==================================================="
} else {
    Write-Host "data-summary not found in deep test output."
}
