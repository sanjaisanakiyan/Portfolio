$brains = Get-ChildItem "C:\Users\ADMIN\.gemini\antigravity-ide\brain" -Directory
foreach ($b in $brains) {
    $logPath = Join-Path $b.FullName ".system_generated\logs\transcript_full.jsonl"
    if (Test-Path $logPath) {
        Write-Host "================== Conversation $($b.Name) =================="
        $reader = [System.IO.File]::OpenText($logPath)
        $lineNum = 0
        while (($line = $reader.ReadLine()) -ne $null) {
            $lineNum++
            if ($line.Contains('"type":"USER_INPUT"')) {
                $json = $line | ConvertFrom-Json
                Write-Host "Line $lineNum :"
                $preview = $json.content.Substring(0, [Math]::Min(300, $json.content.Length))
                Write-Host $preview
            }
        }
        $reader.Close()
    }
}
