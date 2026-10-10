$css = Get-Content "C:\Users\ADMIN\Downloads\Portfolio\scratch\cfe37_style.css"
for ($i = 1398; $i -lt 1480; $i++) {
    Write-Host "$($i+1): $($css[$i])"
}
