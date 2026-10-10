$c42 = Get-Content "C:\Users\ADMIN\Downloads\Portfolio\scratch\early_cfe0ebec-24b1-475f-be74-0484a2e06c1f_42.txt" -Raw | ConvertFrom-Json
Write-Host "cfe 42 type: $($c42.type) source: $($c42.source)"
if ($c42.tool_calls) {
    foreach ($call in $c42.tool_calls) {
        Write-Host "Tool call: $($call.name)"
        if ($call.args.ReplacementContent) {
            Write-Host "ReplacementContent preview: "
            Write-Host $call.args.ReplacementContent.Substring(0, [Math]::Min(1500, $call.args.ReplacementContent.Length))
        }
        if ($call.args.TargetContent) {
            Write-Host "TargetContent preview: "
            Write-Host $call.args.TargetContent.Substring(0, [Math]::Min(1500, $call.args.TargetContent.Length))
        }
    }
}
if ($c42.content) {
    Write-Host "Content preview: "
    Write-Host $c42.content.Substring(0, [Math]::Min(1500, $c42.content.Length))
}
