$json = Get-Content "C:\Users\ADMIN\Downloads\Portfolio\scratch\full_line_30.json" -Raw | ConvertFrom-Json
$content = $json.content
$lines = $content -split "`n"
foreach ($l in $lines) {
    if ($l -match "^\s*4[5-9][0-9]:" -or $l -match "^\s*500:") {
        Write-Host $l
    }
}
