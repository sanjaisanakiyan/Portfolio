$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$proc = Start-Process -FilePath $chrome -ArgumentList "--headless=new", "--disable-gpu", "--dump-dom", "http://localhost:5500/" -NoNewWindow -PassThru -RedirectStandardOutput "scratch\chrome_dom.txt" -RedirectStandardError "scratch\chrome_err.txt"
$proc.WaitForExit(10000)

$dom = Get-Content "scratch\chrome_dom.txt" -Raw
Write-Host "DOM captured. Length: $($dom.Length)"

$match = $dom -match "gaming-cursor"
Write-Host "Contains gaming-cursor element: $match"

$cursorLines = Get-Content "scratch\chrome_dom.txt" | Select-String "gaming-cursor"
foreach ($l in $cursorLines) {
    Write-Host "Matched line: $($l.Line.Trim())"
}

$errors = Get-Content "scratch\chrome_err.txt" -Raw
Write-Host "Chrome stderr: $errors"
