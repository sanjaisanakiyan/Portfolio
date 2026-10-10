$path = "C:\Users\ADMIN\.gemini\antigravity-ide\brain\490661b2-209a-4238-ad1f-bafae7e49166\.system_generated\logs\transcript.jsonl"
$reader = [System.IO.File]::OpenText($path)
$lineNum = 0
while (($line = $reader.ReadLine()) -ne $null) {
    $lineNum++
    if ($line.Contains("projects-section") -or $line.Contains("project-card") -or $line.Contains("BURNOUT BLITZ") -or $line.Contains("projects-grid")) {
        Write-Host "Match on line $lineNum length $($line.Length)"
        # Let's save the first 5 matches to files
        $line | Out-File "C:\Users\ADMIN\Downloads\Portfolio\scratch\match_$lineNum.txt" -Encoding utf8
    }
}
$reader.Close()
Write-Host "Done scanning transcript."
