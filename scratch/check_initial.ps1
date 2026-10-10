$conversations = @("c8c75f6a-7a33-4d0d-9cee-4ef21282bbdc", "cfe0ebec-24b1-475f-be74-0484a2e06c1f")
foreach ($cid in $conversations) {
    $logPath = "C:\Users\ADMIN\.gemini\antigravity-ide\brain\$cid\.system_generated\logs\transcript_full.jsonl"
    if (Test-Path $logPath) {
        Write-Host "=== $cid ==="
        $reader = [System.IO.File]::OpenText($logPath)
        for ($i = 1; $i -le 15; $i++) {
            $line = $reader.ReadLine()
            if ($line -eq $null) { break }
            $json = $line | ConvertFrom-Json
            Write-Host "Step ${i}: type=$($json.type) source=$($json.source)"
            if ($json.tool_calls) {
                foreach ($tc in $json.tool_calls) {
                    Write-Host "   tool=$($tc.name) args=$($tc.args | ConvertTo-Json -Compress)"
                }
            }
        }
        $reader.Close()
    }
}
