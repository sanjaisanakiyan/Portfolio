$css = Get-Content "C:\Users\ADMIN\Downloads\Portfolio\scratch\cfe37_style.css"
$inProjects = $false
$count = 0
for ($i = 0; $i -lt $css.Length; $i++) {
    $line = $css[$i]
    if ($line -match "FEATURED PROJECTS" -or $line -match "projects-section") {
        $inProjects = $true
    }
    if ($inProjects) {
        Write-Host "$($i+1): $line"
        $count++
        if ($count -ge 120) { break }
    }
}
