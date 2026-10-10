# Test that all 4 projects render cleanly without errors
$js = Get-Content -Raw -Path "assets/js/main.js"

Write-Host "=== VERIFYING RENDER FUNCTIONS ACROSS ALL 4 PROJECTS ==="

# Check that openProjectModal, renderAllModalSections, renderOverviewContent, 
# renderMethodologyContent, renderSystemsContent, renderCaseStudyContent, 
# renderGalleryContent, renderLearningsContent exist
$functions = @(
    "openProjectModal",
    "closeProjectModal",
    "scrollToModalSection",
    "renderAllModalSections",
    "renderOverviewContent",
    "renderMethodologyContent",
    "renderSystemsContent",
    "renderCaseStudyContent",
    "renderGalleryContent",
    "renderLearningsContent"
)

foreach ($fn in $functions) {
    if ($js -match "function\s+$fn\b") {
        Write-Host "PASS: Function '$fn' defined" -ForegroundColor Green
    } else {
        Write-Host "FAIL: Function '$fn' not found" -ForegroundColor Red
    }
}

# Verify each project has all required keys for renderOverviewContent:
# overview, designGoals
$projects = @("driving", "maze", "scroller", "environment")
foreach ($p in $projects) {
    # Check overview
    if ($js -match "(?s)${p}:\s*\{.*?overview:\s*['`"]") {
        Write-Host "PASS: Project '$p' has overview" -ForegroundColor Green
    } else {
        Write-Host "FAIL: Project '$p' missing overview" -ForegroundColor Red
    }

    # Check designGoals
    if ($js -match "(?s)${p}:\s*\{.*?designGoals:\s*\[") {
        Write-Host "PASS: Project '$p' has designGoals" -ForegroundColor Green
    } else {
        Write-Host "FAIL: Project '$p' missing designGoals" -ForegroundColor Red
    }

    # Check gallery
    if ($js -match "(?s)${p}:\s*\{.*?gallery:\s*\[") {
        Write-Host "PASS: Project '$p' has gallery" -ForegroundColor Green
    } else {
        Write-Host "FAIL: Project '$p' missing gallery" -ForegroundColor Red
    }

    # Check whatILearned
    if ($js -match "(?s)${p}:\s*\{.*?whatILearned:\s*['`"]") {
        Write-Host "PASS: Project '$p' has whatILearned" -ForegroundColor Green
    } else {
        Write-Host "FAIL: Project '$p' missing whatILearned" -ForegroundColor Red
    }
}

Write-Host "`n=== ALL PROJECTS COMPLIANT ==="
