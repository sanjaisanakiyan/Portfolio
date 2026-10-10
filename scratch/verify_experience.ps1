$html = Get-Content -Raw -Path 'index.html'
$hasLink = $html.Contains('href="assets/experience-letter.pdf"') -and $html.Contains('target="_blank"') -and $html.Contains('rel="noopener noreferrer"') -and $html.Contains('class="timeline-card-link"')
$hasPrompt = $html.Contains('VIEW EXPERIENCE LETTER')
$pdfExists = Test-Path 'assets/experience-letter.pdf'
$css = Get-Content -Raw -Path 'assets/css/style.css'
$hasLinkCss = $css.Contains('.timeline-card-link') -and $css.Contains('.experience-view-prompt')
$js = Get-Content -Raw -Path 'assets/js/main.js'
$hasJsCursor = $js.Contains('VIEW LETTER')

Write-Host "Link in HTML: $hasLink"
Write-Host "Prompt in HTML: $hasPrompt"
Write-Host "PDF Exists in assets: $pdfExists"
Write-Host "CSS styles added: $hasLinkCss"
Write-Host "JS cursor updated: $hasJsCursor"
