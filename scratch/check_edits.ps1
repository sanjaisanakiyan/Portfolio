$logPath = "C:\Users\ADMIN\.gemini\antigravity-ide\brain\490661b2-209a-4238-ad1f-bafae7e49166\.system_generated\logs\transcript_full.jsonl"
$reader = [System.IO.File]::OpenText($logPath)
$step = 0
while (($line = $reader.ReadLine()) -ne $null) {
    $step++
    if ($line.Contains("replace_file_content") -or $line.Contains("write_to_file")) {
        $json = $line | ConvertFrom-Json
        if ($json.tool_calls) {
            foreach ($tc in $json.tool_calls) {
                if ($tc.name -eq "replace_file_content" -or $tc.name -eq "write_to_file" -or $tc.name -eq "multi_replace_file_content") {
                    $tf = $tc.args.TargetFile
                    $desc = $tc.args.Description
                    Write-Host "Step ${step}: tool=$($tc.name) file=$tf desc=$desc"
                }
            }
        }
    }
}
$reader.Close()
