$script = @'
<!DOCTYPE html>
<html>
<head>
<base href="http://localhost:5500/">
<link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
<div id="game-cursor" class="is-hidden">
  <div class="cursor-ring"></div>
  <div class="cursor-dot"></div>
  <div class="cursor-arm cursor-top"></div>
  <div class="cursor-arm cursor-bottom"></div>
  <div class="cursor-arm cursor-left"></div>
  <div class="cursor-arm cursor-right"></div>
  <div class="cursor-label"></div>
</div>
<script src="assets/js/main.js"></script>
<script>
window.addEventListener('load', () => {
  const log = [];
  log.push('cursorEl: ' + !!document.getElementById('game-cursor'));
  log.push('before move html class: ' + document.documentElement.className);
  
  window.dispatchEvent(new MouseEvent('mousemove', { clientX: 200, clientY: 300, bubbles: true }));
  log.push('after move html class: ' + document.documentElement.className);
  log.push('after move cursor class: ' + document.getElementById('game-cursor').className);

  const out = document.createElement('div');
  out.id = 'debug-log';
  out.textContent = log.join(' | ');
  document.body.appendChild(out);
});
</script>
</body>
</html>
'@

Set-Content "scratch\debug_runner.html" $script
$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$proc = Start-Process -FilePath $chrome -ArgumentList "--headless=new", "--disable-gpu", "--dump-dom", "http://localhost:5500/scratch/debug_runner.html" -NoNewWindow -PassThru -RedirectStandardOutput "scratch\debug_out.txt"
$proc.WaitForExit(5000)

Get-Content "scratch\debug_out.txt" | Select-String "debug-log"
