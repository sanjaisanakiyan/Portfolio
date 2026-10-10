$fullTranscript = "C:\Users\ADMIN\.gemini\antigravity-ide\brain\490661b2-209a-4238-ad1f-bafae7e49166\.system_generated\logs\transcript_full.jsonl"
$targetLines = @(30, 54, 139, 151, 165, 177, 180)

$reader = [System.IO.File]::OpenText($fullTranscript)
$current = 0
while (($line = $reader.ReadLine()) -ne $null) {
    $current++
    if ($targetLines -contains $current) {
        Write-Host "Extracting full line $current (length $($line.Length))"
        $line | Out-File "C:\Users\ADMIN\Downloads\Portfolio\scratch\full_line_$current.json" -Encoding utf8
    }
    if ($current -gt 200) { break }
}
$reader.Close()
Write-Host "Done extracting."
