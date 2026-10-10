$content = Get-Content "C:\Users\ADMIN\Downloads\Portfolio\scratch\cfe42_code.txt"
$idx = 0
foreach ($line in $content) {
    $idx++
    if ($line -match '01' -or $line -match '02' -or $line -match '03' -or $line -match '04') {
        Write-Host "$idx : $line"
    }
}
