$brains = Get-ChildItem "C:\Users\ADMIN\.gemini\antigravity-ide\brain" -Directory
foreach ($b in $brains) {
    $logPath = Join-Path $b.FullName ".system_generated\logs\transcript_full.jsonl"
    if (Test-Path $logPath) {
        Write-Host "Checking $($b.Name)..."
        $reader = [System.IO.File]::OpenText($logPath)
        $lineNum = 0
        while (($line = $reader.ReadLine()) -ne $null) {
            $lineNum++
            if ($line.Contains("projects-section") -or $line.Contains("project-card")) {
                Write-Host "  Found match in $($b.Name) line $lineNum"
                # Save first match snippet
                $line | Out-File "C:\Users\ADMIN\Downloads\Portfolio\scratch\match_$($b.Name)_$lineNum.txt" -Encoding utf8
                break
            }
        }
        $reader.Close()
    }
}
Write-Host "Done scanning all conversations."
