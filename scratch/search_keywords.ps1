$emdash = [char]0x2014
$brains = Get-ChildItem "C:\Users\ADMIN\.gemini\antigravity-ide\brain" -Directory
foreach ($b in $brains) {
    $logPath = Join-Path $b.FullName ".system_generated\logs\transcript_full.jsonl"
    if (Test-Path $logPath) {
        $reader = [System.IO.File]::OpenText($logPath)
        $lineNum = 0
        while (($line = $reader.ReadLine()) -ne $null) {
            $lineNum++
            if ($line.Contains("ARCADE DRIVING") -or $line.Contains("projects-grid") -or $line.Contains("project-number")) {
                Write-Host "Match in $($b.Name) at line $lineNum"
                $line.Substring(0, [Math]::Min(300, $line.Length)) | Out-Host
            }
        }
        $reader.Close()
    }
}
Write-Host "Search finished."
