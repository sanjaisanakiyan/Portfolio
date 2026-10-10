$html = Get-Content -Raw -Path "index.html"
$js = Get-Content -Raw -Path "assets/js/main.js"
$css = Get-Content -Raw -Path "assets/css/style.css"

Write-Host "=== TEST 1: Project 02 Card in index.html ==="
if ($html -match '(?s)id="card-project-maze".*?<h3 class="project-title">([^<]+)</h3>') {
    $cardTitle = $matches[1].Trim()
    Write-Host "Card Title: $cardTitle"
    if ($cardTitle -eq "THIRD-PERSON MAZE") {
        Write-Host "PASS: Project title is THIRD-PERSON MAZE" -ForegroundColor Green
    } else {
        Write-Host "FAIL: Expected THIRD-PERSON MAZE, got $cardTitle" -ForegroundColor Red
    }
} else {
    Write-Host "FAIL: Could not find card-project-maze title" -ForegroundColor Red
}

if ($html -match 'LEVEL DESIGN &bull; UNREAL ENGINE 5 &bull; ENVIRONMENT') {
    Write-Host "PASS: Card category badge contains LEVEL DESIGN • UNREAL ENGINE 5 • ENVIRONMENT" -ForegroundColor Green
} else {
    Write-Host "FAIL: Card category badge mismatch" -ForegroundColor Red
}

if ($html -match 'GALLERY \(5\)') {
    Write-Host "PASS: Card gallery button displays GALLERY (5)" -ForegroundColor Green
} else {
    Write-Host "FAIL: Card gallery button does not display GALLERY (5)" -ForegroundColor Red
}

Write-Host "`n=== TEST 2: PROJECTS_DATA in main.js ==="
$requiredProjects = @("driving", "maze", "scroller", "environment")
foreach ($p in $requiredProjects) {
    if ($js -match "${p}:\s*\{") {
        Write-Host "PASS: Project '$p' found in PROJECTS_DATA" -ForegroundColor Green
    } else {
        Write-Host "FAIL: Project '$p' missing from PROJECTS_DATA" -ForegroundColor Red
    }
}

if ($js -match "title:\s*'THIRD-PERSON MAZE'") {
    Write-Host "PASS: PROJECTS_DATA.maze title is 'THIRD-PERSON MAZE'" -ForegroundColor Green
} else {
    Write-Host "FAIL: PROJECTS_DATA.maze title mismatch" -ForegroundColor Red
}

if ($js -match "category:\s*'LEVEL DESIGN • UNREAL ENGINE 5 • ENVIRONMENT'") {
    Write-Host "PASS: PROJECTS_DATA.maze category matches" -ForegroundColor Green
} else {
    Write-Host "FAIL: PROJECTS_DATA.maze category mismatch" -ForegroundColor Red
}

if ($js -match "role:\s*'Game Design / Level Design'") {
    Write-Host "PASS: PROJECTS_DATA.maze role matches" -ForegroundColor Green
} else {
    Write-Host "FAIL: PROJECTS_DATA.maze role mismatch" -ForegroundColor Red
}

Write-Host "`n=== TEST 3: Navigation Tabs for Maze ==="
$expectedTabs = @(
    "OVERVIEW & ROLE",
    "METHODOLOGY",
    "LEVEL DESIGN & MECHANICS",
    "DEEP DIVE & ITERATION",
    "PROJECT GALLERY",
    "WHAT I LEARNED"
)
foreach ($t in $expectedTabs) {
    if ($js -match [regex]::Escape($t)) {
        Write-Host "PASS: Tab '$t' found in main.js" -ForegroundColor Green
    } else {
        Write-Host "FAIL: Tab '$t' missing in main.js" -ForegroundColor Red
    }
}

Write-Host "`n=== TEST 4: Methodology 6 Steps ==="
$expectedSteps = @(
    "RESEARCH & PLANNING",
    "BLOCKOUT / GRAYBOX",
    "PLAYER & CAMERA",
    "ENVIRONMENT DEVELOPMENT",
    "ITERATION & DEBUGGING",
    "FINAL PRESENTATION"
)
foreach ($s in $expectedSteps) {
    if ($js -match "title:\s*'$s'") {
        Write-Host "PASS: Methodology step '$s' found" -ForegroundColor Green
    } else {
        Write-Host "FAIL: Methodology step '$s' missing" -ForegroundColor Red
    }
}

Write-Host "`n=== TEST 5: Image Assets Verification on Disk ==="
$mazeImages = @(
    "assets/images/portfolio/third-person-maze/maze-cover-cinematic.jpg",
    "assets/images/portfolio/third-person-maze/maze-gameplay.jpg",
    "assets/images/portfolio/third-person-maze/maze-map-editor.jpg",
    "assets/images/portfolio/third-person-maze/maze-map.jpg",
    "assets/images/portfolio/third-person-maze/maze-editor.jpg"
)
foreach ($img in $mazeImages) {
    if (Test-Path $img) {
        $size = (Get-Item $img).Length
        Write-Host "PASS: Image exists: $img ($size bytes)" -ForegroundColor Green
    } else {
        Write-Host "FAIL: Image missing: $img" -ForegroundColor Red
    }
}

Write-Host "`n=== TEST 6: Previous / Next Project Navigation ==="
if ($js -match "modal-project-nav-footer") {
    Write-Host "PASS: modal-project-nav-footer component found in main.js" -ForegroundColor Green
} else {
    Write-Host "FAIL: modal-project-nav-footer missing in main.js" -ForegroundColor Red
}

if ($css -match "\.modal-project-nav-footer") {
    Write-Host "PASS: .modal-project-nav-footer styled in style.css" -ForegroundColor Green
} else {
    Write-Host "FAIL: .modal-project-nav-footer missing in style.css" -ForegroundColor Red
}

if ($css -match "\.learnings-pillars-grid") {
    Write-Host "PASS: .learnings-pillars-grid styled in style.css" -ForegroundColor Green
} else {
    Write-Host "FAIL: .learnings-pillars-grid missing in style.css" -ForegroundColor Red
}

Write-Host "`n=== TEST 7: HTTP Server Response ==="
try {
    $resp = Invoke-WebRequest -Uri "http://localhost:5500/" -UseBasicParsing -TimeoutSec 5
    Write-Host "PASS: Server returned HTTP $($resp.StatusCode)" -ForegroundColor Green
} catch {
    Write-Host "FAIL: Server error $_" -ForegroundColor Red
}
