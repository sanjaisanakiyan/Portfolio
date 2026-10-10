$css = Get-Content "C:\Users\ADMIN\Downloads\Portfolio\scratch\cfe37_style.css"
$matches = @()
$lineIdx = 0
foreach ($line in $css) {
    $lineIdx++
    if ($line -match '^\.[a-zA-Z0-9_-]*project[a-zA-Z0-9_-]*') {
        $matches += "$lineIdx : $line"
    }
}
$matches | Out-Host
