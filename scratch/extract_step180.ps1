$json = Get-Content "C:\Users\ADMIN\Downloads\Portfolio\scratch\full_line_180.json" -Raw | ConvertFrom-Json
$tc = $json.tool_calls[0]
Write-Host "TargetFile: $($tc.args.TargetFile)"
Write-Host "StartLine: $($tc.args.StartLine) EndLine: $($tc.args.EndLine)"
Write-Host "TargetContent length: $($tc.args.TargetContent.Length)"
$tc.args.TargetContent | Out-File "C:\Users\ADMIN\Downloads\Portfolio\scratch\step180_target_content.html" -Encoding utf8
Write-Host "ReplacementContent length: $($tc.args.ReplacementContent.Length)"
$tc.args.ReplacementContent | Out-File "C:\Users\ADMIN\Downloads\Portfolio\scratch\step180_replacement_content.html" -Encoding utf8
Write-Host "Done saving step 180 content."
