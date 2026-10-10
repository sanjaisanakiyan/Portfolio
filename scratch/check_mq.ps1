$test = @'
<!DOCTYPE html>
<html><body>
<div id="res"></div>
<script>
document.getElementById('res').textContent = JSON.stringify({
  fine: window.matchMedia('(pointer: fine)').matches,
  hover: window.matchMedia('(hover: hover)').matches,
  both: window.matchMedia('(hover: hover) and (pointer: fine)').matches,
  touchOnly: window.matchMedia('(hover: none) and (pointer: coarse)').matches
});
</script>
</body></html>
'@
Set-Content "scratch\test_mq.html" $test
$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$p = Start-Process -FilePath $chrome -ArgumentList "--headless=new", "--disable-gpu", "--dump-dom", "http://localhost:5500/scratch/test_mq.html" -NoNewWindow -PassThru -RedirectStandardOutput "scratch\mq_dump.txt"
$p.WaitForExit(5000)
Get-Content "scratch\mq_dump.txt" | Select-String "res"
