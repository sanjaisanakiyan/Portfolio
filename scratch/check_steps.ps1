$logPath = "C:\Users\ADMIN\.gemini\antigravity-ide\brain\490661b2-209a-4238-ad1f-bafae7e49166\.system_generated\logs\transcript_full.jsonl"
$reader = [System.IO.File]::OpenText($logPath)
$step = 0
while (($line = $reader.ReadLine()) -ne $null) {
    $step++
    if ($step -eq 30 -or $step -eq 54 -or $step -eq 139) {
        $json = $line | ConvertFrom-Json
        $tc = $json.tool_calls[0]
        Write-Host "Step $step : tool = $($tc.name) target = $($tc.args.TargetFile) $($tc.args.AbsolutePath)"
    }
}
$reader.Close()
