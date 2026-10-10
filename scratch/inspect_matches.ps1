$b5 = Get-Content "C:\Users\ADMIN\Downloads\Portfolio\scratch\match_5b57c226-b933-4bb2-95ea-9265072d84c2_27.txt" -Raw | ConvertFrom-Json
Write-Host "5b57 type: $($b5.type) source: $($b5.source)"
if ($b5.content) {
    Write-Host "5b57 content preview:"
    Write-Host $b5.content.Substring(0, [Math]::Min(1500, $b5.content.Length))
}
$cfe = Get-Content "C:\Users\ADMIN\Downloads\Portfolio\scratch\match_cfe0ebec-24b1-475f-be74-0484a2e06c1f_37.txt" -Raw | ConvertFrom-Json
Write-Host "`ncfe0 type: $($cfe.type) source: $($cfe.source)"
if ($cfe.content) {
    Write-Host "cfe0 content preview:"
    Write-Host $cfe.content.Substring(0, [Math]::Min(1500, $cfe.content.Length))
}
