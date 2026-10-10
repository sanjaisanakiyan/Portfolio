$logPath = "C:\Users\ADMIN\.gemini\antigravity-ide\brain\cfe0ebec-24b1-475f-be74-0484a2e06c1f\.system_generated\logs\transcript_full.jsonl"
$reader = [System.IO.File]::OpenText($logPath)
$step = 0
while (($line = $reader.ReadLine()) -ne $null) {
    $step++
    if ($step -eq 37) {
        $json = $line | ConvertFrom-Json
        $code = $json.tool_calls[0].args.CodeContent
        $code | Out-File "C:\Users\ADMIN\Downloads\Portfolio\scratch\cfe37_style.css" -Encoding utf8
        Write-Host "Wrote cfe37_style.css length: $($code.Length)"
        break
    }
}
$reader.Close()
