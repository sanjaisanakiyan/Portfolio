$test = @'
<!DOCTYPE html>
<html>
<head>
<base href="http://localhost:5500/">
</head>
<body>
<div id="err-log"></div>
<script>
window.onerror = function(msg, url, line, col, error) {
  document.getElementById('err-log').textContent = 'ERROR: ' + msg + ' at line ' + line + ':' + col;
};
</script>
<script src="assets/js/main.js"></script>
<script>
window.addEventListener('load', () => {
  const el = document.getElementById('err-log');
  if (!el.textContent) {
    el.textContent = 'NO_ERROR | initGamingCursor: ' + (typeof initGamingCursor);
  }
});
</script>
</body>
</html>
'@
Set-Content "scratch\syntax_check.html" $test
$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$p = Start-Process -FilePath $chrome -ArgumentList "--headless=new", "--disable-gpu", "--dump-dom", "http://localhost:5500/scratch/syntax_check.html" -NoNewWindow -PassThru -RedirectStandardOutput "scratch\syntax_out.txt"
$p.WaitForExit(5000)
Get-Content "scratch\syntax_out.txt" | Select-String "err-log"
