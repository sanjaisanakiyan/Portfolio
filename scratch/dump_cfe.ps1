$c42 = Get-Content "C:\Users\ADMIN\Downloads\Portfolio\scratch\early_cfe0ebec-24b1-475f-be74-0484a2e06c1f_42.txt" -Raw | ConvertFrom-Json
foreach ($call in $c42.tool_calls) {
    Write-Host "TargetFile: $($call.args.TargetFile)"
    if ($call.args.CodeContent) {
        $call.args.CodeContent | Out-File "C:\Users\ADMIN\Downloads\Portfolio\scratch\cfe42_code.txt" -Encoding utf8
        Write-Host "Wrote cfe42_code.txt length: $($call.args.CodeContent.Length)"
    }
}
$c54 = Get-Content "C:\Users\ADMIN\Downloads\Portfolio\scratch\early_cfe0ebec-24b1-475f-be74-0484a2e06c1f_54.txt" -Raw | ConvertFrom-Json
foreach ($call in $c54.tool_calls) {
    Write-Host "c54 TargetFile: $($call.args.TargetFile)"
    if ($call.args.CodeContent) {
        $call.args.CodeContent | Out-File "C:\Users\ADMIN\Downloads\Portfolio\scratch\cfe54_code.txt" -Encoding utf8
        Write-Host "Wrote cfe54_code.txt length: $($call.args.CodeContent.Length)"
    }
}
