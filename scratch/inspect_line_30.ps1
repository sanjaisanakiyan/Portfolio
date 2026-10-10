$json = Get-Content "C:\Users\ADMIN\Downloads\Portfolio\scratch\full_line_30.json" -Raw | ConvertFrom-Json
Write-Host "Type: $($json.type) Source: $($json.source)"
if ($json.tool_calls) {
    foreach ($call in $json.tool_calls) {
        Write-Host "Tool: $($call.name)"
        if ($call.args) {
            Write-Host "Args: $($call.args | Out-String)"
        }
    }
}
if ($json.content) {
    Write-Host "Content preview:"
    Write-Host $json.content.Substring(0, [Math]::Min(1000, $json.content.Length))
}
