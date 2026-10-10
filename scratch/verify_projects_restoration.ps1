# Comprehensive verification script
$html = Get-Content "c:\Users\ADMIN\Downloads\Portfolio\index.html" -Raw
$js = Get-Content "c:\Users\ADMIN\Downloads\Portfolio\assets\js\main.js" -Raw
$css = Get-Content "c:\Users\ADMIN\Downloads\Portfolio\assets\css\style.css" -Raw

Write-Host "=== 1. Checking Projects Cards in HTML ==="
$requiredCards = @("card-project-driving", "card-project-maze", "card-project-scroller", "card-project-environment")
foreach ($c in $requiredCards) {
  if ($html.Contains($c)) {
    Write-Host "Card $c present: OK"
  } else {
    Write-Host "Card $c MISSING: ERROR"
  }
}

Write-Host "`n=== 2. Checking Case Study Trigger Calls ==="
$triggers = @("openProjectModal('driving')", "openProjectModal('maze')", "openProjectModal('scroller')", "openProjectModal('environment')")
foreach ($t in $triggers) {
  $count = ([regex]::Matches($html, [regex]::Escape($t))).Count
  Write-Host "Trigger '$t' count: $count (should be at least 2: media col and button)"
}

Write-Host "`n=== 3. Checking Projects Section Headings ==="
$titles = @("ARCADE DRIVING", "THIRD-PERSON MAZE", "SNOWBOARD DASH", "CINEMATIC 3D ENVIRONMENT")
foreach ($t in $titles) {
  if ($html.Contains("<h3 class=`"project-title`">$t</h3>")) {
    Write-Host "Heading '$t': OK"
  } else {
    Write-Host "Heading '$t': NOT FOUND"
  }
}

Write-Host "`n=== 4. Checking Navigation Order ==="
$navRegex = '(?s)<ul class="nav-links" id="nav-links">(.*?)</ul>'
if ($html -match $navRegex) {
  $navContent = $matches[1]
  $links = [regex]::Matches($navContent, 'data-nav="([^"]+)"')
  $navOrder = ($links | ForEach-Object { $_.Groups[1].Value }) -join " -> "
  Write-Host "Main Nav Order: $navOrder"
}

Write-Host "`n=== 5. Checking Filter Buttons ==="
$filters = @("all", "unity", "unreal", "level-design", "cinematic")
foreach ($f in $filters) {
  if ($html.Contains("data-filter=`"$f`"")) {
    Write-Host "Filter '$f': OK"
  } else {
    Write-Host "Filter '$f': MISSING"
  }
}

Write-Host "`n=== 6. Checking HTTP status on local server ==="
try {
  $res = Invoke-WebRequest -Uri "http://localhost:5500/" -UseBasicParsing -TimeoutSec 3
  Write-Host "HTTP Status: $($res.StatusCode)"
} catch {
  Write-Host "Server HTTP Error: $($_.Exception.Message)"
}
