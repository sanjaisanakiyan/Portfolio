$conversations = @("cfe0ebec-24b1-475f-be74-0484a2e06c1f", "c8c75f6a-7a33-4d0d-9cee-4ef21282bbdc")
foreach ($cid in $conversations) {
    $logPath = "C:\Users\ADMIN\.gemini\antigravity-ide\brain\$cid\.system_generated\logs\transcript_full.jsonl"
    if (Test-Path $logPath) {
        Write-Host "=== Conversation $cid ==="
        $reader = [System.IO.File]::OpenText($logPath)
        $lineNum = 0
        while (($line = $reader.ReadLine()) -ne $null) {
            $lineNum++
            if ($line.Contains("<section") -and ($line.Contains("projects") -or $line.Contains("work"))) {
                Write-Host "Match in $cid at line $lineNum"
                $line | Out-File "C:\Users\ADMIN\Downloads\Portfolio\scratch\early_$($cid)_$lineNum.txt" -Encoding utf8
            }
        }
        $reader.Close()
    }
}
Write-Host "Done early scan."
