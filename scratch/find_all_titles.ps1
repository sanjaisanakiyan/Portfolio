$brains = Get-ChildItem "C:\Users\ADMIN\.gemini\antigravity-ide\brain" -Directory
foreach ($b in $brains) {
    $logPath = Join-Path $b.FullName ".system_generated\logs\transcript_full.jsonl"
    if (Test-Path $logPath) {
        $reader = [System.IO.File]::OpenText($logPath)
        $lineNum = 0
        while (($line = $reader.ReadLine()) -ne $null) {
            $lineNum++
            if ($line.Contains('project-title')) {
                $matches = [regex]::Matches($line, 'class=[\\"]*project-title[\\"]*>([^<\\"]*)<')
                foreach ($m in $matches) {
                    Write-Host "$($b.Name) line $lineNum : $($m.Groups[1].Value.Trim())"
                }
            }
        }
        $reader.Close()
    }
}
Write-Host "Done finding all project-title headings."
