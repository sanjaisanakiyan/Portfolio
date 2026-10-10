$conversations = @("cfe0ebec-24b1-475f-be74-0484a2e06c1f", "5b57c226-b933-4bb2-95ea-9265072d84c2", "490661b2-209a-4238-ad1f-bafae7e49166")
foreach ($cid in $conversations) {
    $logPath = "C:\Users\ADMIN\.gemini\antigravity-ide\brain\$cid\.system_generated\logs\transcript_full.jsonl"
    if (Test-Path $logPath) {
        $reader = [System.IO.File]::OpenText($logPath)
        $step = 0
        while (($line = $reader.ReadLine()) -ne $null) {
            $step++
            if ($line.Contains("style.css")) {
                $json = $line | ConvertFrom-Json
                if ($json.tool_calls) {
                    foreach ($tc in $json.tool_calls) {
                        if ($tc.args.TargetFile -like "*style.css") {
                            Write-Host "$cid Step ${step}: tool=$($tc.name) desc=$($tc.args.Description)"
                        }
                    }
                }
            }
        }
        $reader.Close()
    }
}
