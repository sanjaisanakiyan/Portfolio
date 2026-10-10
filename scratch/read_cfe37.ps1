$logPath = "C:\Users\ADMIN\.gemini\antigravity-ide\brain\cfe0ebec-24b1-475f-be74-0484a2e06c1f\.system_generated\logs\transcript_full.jsonl"
$reader = [System.IO.File]::OpenText($logPath)
$lineNum = 0
while (($line = $reader.ReadLine()) -ne $null) {
    $lineNum++
    if ($lineNum -eq 37) {
        $json = $line | ConvertFrom-Json
        Write-Host "Line 37 type: $($json.type) source: $($json.source)"
        if ($json.content) {
            $json.content | Out-File "C:\Users\ADMIN\Downloads\Portfolio\scratch\cfe37_content.txt" -Encoding utf8
            Write-Host "Wrote cfe37_content.txt length: $($json.content.Length)"
        }
        break
    }
}
$reader.Close()
