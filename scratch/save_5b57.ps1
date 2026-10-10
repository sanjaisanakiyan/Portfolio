$b5 = Get-Content "C:\Users\ADMIN\Downloads\Portfolio\scratch\match_5b57c226-b933-4bb2-95ea-9265072d84c2_27.txt" -Raw | ConvertFrom-Json
$b5.content | Out-File "C:\Users\ADMIN\Downloads\Portfolio\scratch\5b57_view_file_27.txt" -Encoding utf8
Write-Host "Written 5b57_view_file_27.txt, length: $($b5.content.Length)"
