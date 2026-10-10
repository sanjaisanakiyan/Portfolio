$fullTranscript = "C:\Users\ADMIN\.gemini\antigravity-ide\brain\490661b2-209a-4238-ad1f-bafae7e49166\.system_generated\logs\transcript_full.jsonl"
$reader = [System.IO.File]::OpenText($fullTranscript)
$current = 0
while (($line = $reader.ReadLine()) -ne $null) {
    $current++
    $json = $line | ConvertFrom-Json
    if ($json.type -eq "USER_INPUT") {
        Write-Host "USER_INPUT at step $current :"
        if ($json.content) {
            $preview = $json.content.Substring(0, [Math]::Min(200, $json.content.Length))
            Write-Host "  $preview"
        }
    }
}
$reader.Close()
