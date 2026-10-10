$content = Get-Content "C:\Users\ADMIN\Downloads\Portfolio\scratch\cfe42_code.txt"
$inProjects = $false
$projectsLines = @()
$lineIdx = 0
foreach ($line in $content) {
    $lineIdx++
    if ($line -match '<section class="projects-section"') {
        $inProjects = $true
    }
    if ($inProjects) {
        $projectsLines += "$lineIdx : $line"
        if ($line -match '</section>') {
            $inProjects = $false
            break
        }
    }
}
$projectsLines | Out-File "C:\Users\ADMIN\Downloads\Portfolio\scratch\cfe42_projects_section.html" -Encoding utf8
Write-Host "Found $($projectsLines.Count) lines in cfe42 projects section."
