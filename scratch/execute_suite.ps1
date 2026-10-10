$indexContent = Get-Content "index.html" -Raw
$indexContent = $indexContent.Replace("<head>", "<head><base href=""http://localhost:5500/"">")

$testScript = @'
<div id="test-results-container" style="display:none"></div>
<script>
window.addEventListener('load', () => {
  const results = [];
  function assert(condition, message) {
    results.push({ pass: !!condition, message });
  }

  try {
    const cursor = document.getElementById('game-cursor');
    assert(cursor !== null, '#game-cursor element exists');

    const dot = cursor ? cursor.querySelector('.cursor-dot') : null;
    assert(dot !== null, 'center dot (.cursor-dot) exists');

    const ring = cursor ? cursor.querySelector('.cursor-ring') : null;
    assert(ring !== null, 'outer ring (.cursor-ring) exists');

    const armTop = cursor ? cursor.querySelector('.cursor-arm.cursor-top') : null;
    assert(armTop !== null, 'top arm (.cursor-arm.cursor-top) exists');

    const armBottom = cursor ? cursor.querySelector('.cursor-arm.cursor-bottom') : null;
    assert(armBottom !== null, 'bottom arm (.cursor-arm.cursor-bottom) exists');

    const armLeft = cursor ? cursor.querySelector('.cursor-arm.cursor-left') : null;
    assert(armLeft !== null, 'left arm (.cursor-arm.cursor-left) exists');

    const armRight = cursor ? cursor.querySelector('.cursor-arm.cursor-right') : null;
    assert(armRight !== null, 'right arm (.cursor-arm.cursor-right) exists');

    const label = cursor ? cursor.querySelector('.cursor-label') : null;
    assert(label !== null, 'label (.cursor-label) exists');

    // 1. Mousemove activation
    document.dispatchEvent(new MouseEvent('mousemove', { clientX: 300, clientY: 400, bubbles: true }));
    window.dispatchEvent(new MouseEvent('mousemove', { clientX: 300, clientY: 400, bubbles: true }));
    assert(document.documentElement.classList.contains('has-gaming-cursor'), 'html has has-gaming-cursor class');
    assert(document.body.classList.contains('has-gaming-cursor'), 'body has has-gaming-cursor class');
    assert(cursor && !cursor.classList.contains('is-hidden'), 'cursor is not hidden after mousemove');

    // 2. Computed cursor styles
    const sheetsInfo = Array.from(document.styleSheets).map(s => {
      try { return { href: s.href, count: s.cssRules ? s.cssRules.length : 0 }; }
      catch(e) { return { href: s.href, err: e.message }; }
    });
    const bodyCursor = window.getComputedStyle(document.body).cursor;
    assert(bodyCursor === 'none', 'body cursor is none (got: ' + bodyCursor + ', sheets: ' + JSON.stringify(sheetsInfo) + ')');

    const h1 = document.querySelector('h1');
    if (h1) {
      const h1Cursor = window.getComputedStyle(h1).cursor;
      assert(h1Cursor === 'none', 'h1 cursor is none (got: ' + h1Cursor + ')');
    }

    const btn = document.querySelector('button');
    if (btn) {
      const btnCursor = window.getComputedStyle(btn).cursor;
      assert(btnCursor === 'none', 'button cursor is none (got: ' + btnCursor + ')');
    }

    const a = document.querySelector('a');
    if (a) {
      const aCursor = window.getComputedStyle(a).cursor;
      assert(aCursor === 'none', 'link cursor is none (got: ' + aCursor + ')');
    }

    const input = document.querySelector('input');
    if (input) {
      assert(window.getComputedStyle(input).cursor === 'text', 'input cursor is text');
    }

    // 3. Project card hover state (TARGET)
    const projectCard = document.querySelector('.project-card-large');
    if (projectCard && cursor && label) {
      projectCard.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
      assert(cursor.classList.contains('state-project'), 'project card hover adds state-project');
      assert(label.textContent === 'TARGET', 'project card label is TARGET (got: ' + label.textContent + ')');
    }

    // 4. Case study button hover state (OPEN CASE)
    const caseBtn = document.querySelector('.btn-view-project');
    if (caseBtn && cursor && label) {
      caseBtn.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
      assert(cursor.classList.contains('state-case'), 'case button hover adds state-case');
      assert(label.textContent === 'OPEN CASE', 'case button label is OPEN CASE (got: ' + label.textContent + ')');
    }

    // 5. External Drive link hover state (ACCESS)
    const driveLink = document.querySelector('.btn-external-link');
    if (driveLink && cursor && label) {
      driveLink.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
      assert(cursor.classList.contains('state-archive'), 'archive link hover adds state-archive');
      assert(label.textContent === 'ACCESS', 'archive link label is ACCESS (got: ' + label.textContent + ')');
    }

    // 6. Nav link hover state (SELECT)
    const navLink = document.querySelector('.nav-link');
    if (navLink && cursor && label) {
      navLink.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
      assert(cursor.classList.contains('state-button'), 'nav link hover adds state-button');
      assert(label.textContent === 'SELECT', 'nav link label is SELECT (got: ' + label.textContent + ')');
    }

    // 7. Form input hover state
    if (input && cursor) {
      input.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
      assert(cursor.classList.contains('state-input'), 'form input hover adds state-input');
    }

    // 8. Click state
    window.dispatchEvent(new MouseEvent('mousedown', { button: 0, bubbles: true }));
    assert(cursor && cursor.classList.contains('is-clicking'), 'mousedown adds is-clicking');

    const container = document.getElementById('test-results-container');
    const passed = results.filter(r => r.pass).length;
    container.setAttribute('data-summary', JSON.stringify({ total: results.length, passed, failed: results.length - passed, results }));
  } catch (err) {
    const container = document.getElementById('test-results-container');
    container.setAttribute('data-summary', JSON.stringify({ error: err.message, stack: err.stack }));
  }
});
</script>
</body>
'@

$testPage = $indexContent.Replace("</body>", $testScript)
[System.IO.File]::WriteAllText("scratch\test_runner.html", $testPage, [System.Text.Encoding]::UTF8)

# Run Chrome headless and dump DOM
$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$proc = Start-Process -FilePath $chrome -ArgumentList "--headless=new", "--disable-gpu", "--window-size=1920,1080", "--dump-dom", "http://localhost:5500/scratch/test_runner.html" -NoNewWindow -PassThru -RedirectStandardOutput "scratch\suite_output.txt" -RedirectStandardError "scratch\suite_err.txt"
$proc.WaitForExit(10000)

$res = Get-Content "scratch\suite_output.txt" -Raw
if ($res -match 'data-summary="([^"]+)"') {
    $encoded = $matches[1]
    $json = [System.Net.WebUtility]::HtmlDecode($encoded)
    Write-Host "================ TEST RESULTS ================"
    $obj = $json | ConvertFrom-Json
    Write-Host "Total Tests: " $obj.total
    Write-Host "Passed:      " $obj.passed
    Write-Host "Failed:      " $obj.failed
    Write-Host "----------------------------------------------"
    foreach ($r in $obj.results) {
        $status = if ($r.pass) { "[PASS]" } else { "[FAIL]" }
        Write-Host "$status $($r.message)"
    }
    Write-Host "=============================================="
} else {
    Write-Host "data-summary not found in output."
}
