$html = Get-Content -Raw -Path "index.html"
$js = Get-Content -Raw -Path "assets/js/main.js"
$css = Get-Content -Raw -Path "assets/css/style.css"

Write-Host "--- TEST 1: Main Navigation in index.html ---"
if ($html -match '(?s)<ul class="nav-links" id="nav-links">(.*?)</ul>') {
    $navContent = $matches[1]
    Write-Host "Found nav-links:"
    $links = [regex]::Matches($navContent, '<a\s+href="([^"]+)"[^>]*>([^<]+)</a>')
    $order = @()
    foreach ($m in $links) {
        $order += "$($m.Groups[2].Value.Trim()) -> $($m.Groups[1].Value.Trim())"
    }
    $order | ForEach-Object { Write-Host "  $_" }

    $expected = @(
        "HOME -> #home",
        "ABOUT -> #about",
        "METHODOLOGY -> #methodology",
        "SKILLS -> #skills",
        "PROJECTS -> #projects",
        "EXPERIENCE -> #experience",
        "EDUCATION -> #education",
        "CONTACT -> #contact"
    )
    $pass = $true
    for ($i = 0; $i -lt $expected.Length; $i++) {
        if ($order[$i] -ne $expected[$i]) {
            Write-Host "MISMATCH at index $i : Expected '$($expected[$i])', Got '$($order[$i])'" -ForegroundColor Red
            $pass = $false
        }
    }
    if ($pass) {
        Write-Host "PASS: Main navigation order matches exactly (HOME -> ABOUT -> METHODOLOGY -> SKILLS -> PROJECTS -> EXPERIENCE -> EDUCATION -> CONTACT)!" -ForegroundColor Green
    }
} else {
    Write-Host "FAIL: Could not extract nav-links" -ForegroundColor Red
}

Write-Host "`n--- TEST 2: Footer Navigation in index.html ---"
if ($html -match '(?s)<ul class="footer-nav">(.*?)</ul>') {
    $footerContent = $matches[1]
    $footerLinks = [regex]::Matches($footerContent, '<a\s+href="([^"]+)"[^>]*>([^<]+)</a>')
    $fOrder = @()
    foreach ($m in $footerLinks) {
        $fOrder += "$($m.Groups[2].Value.Trim()) -> $($m.Groups[1].Value.Trim())"
    }
    $fOrder | ForEach-Object { Write-Host "  $_" }
    $fPass = $true
    for ($i = 0; $i -lt $expected.Length; $i++) {
        if ($fOrder[$i] -ne $expected[$i]) {
            Write-Host "FOOTER MISMATCH at index $i : Expected '$($expected[$i])', Got '$($fOrder[$i])'" -ForegroundColor Red
            $fPass = $false
        }
    }
    if ($fPass) {
        Write-Host "PASS: Footer nav order matches exactly!" -ForegroundColor Green
    }
}

Write-Host "`n--- TEST 3: Methodology Section ID and Content ---"
if ($html -match 'id="methodology"') {
    Write-Host "PASS: id='methodology' found on Methodology section!" -ForegroundColor Green
} else {
    Write-Host "FAIL: id='methodology' missing!" -ForegroundColor Red
}

$steps = @("IDEA", "PROTOTYPE", "BUILD", "TEST", "POLISH")
foreach ($s in $steps) {
    if ($html -match "<h3 class=`"step-title`">$s</h3>") {
        Write-Host "PASS: Step $s found!" -ForegroundColor Green
    } else {
        Write-Host "FAIL: Step $s missing!" -ForegroundColor Red
    }
}

Write-Host "`n--- TEST 4: Style & JS checks ---"
if ($css -match '#methodology') {
    Write-Host "PASS: #methodology found in style.css!" -ForegroundColor Green
} else {
    Write-Host "FAIL: #methodology missing in style.css!" -ForegroundColor Red
}

if ($js -match "'methodology'") {
    Write-Host "PASS: 'methodology' found in main.js targetSectionIds!" -ForegroundColor Green
} else {
    Write-Host "FAIL: 'methodology' missing in main.js!" -ForegroundColor Red
}

Write-Host "`n--- TEST 5: HTTP Server Check ---"
try {
    $resp = Invoke-WebRequest -Uri "http://localhost:5500/" -UseBasicParsing -TimeoutSec 5
    Write-Host "PASS: Server returned HTTP $($resp.StatusCode)" -ForegroundColor Green
} catch {
    Write-Host "FAIL: Server error $_" -ForegroundColor Red
}
