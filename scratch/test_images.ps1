$paths = @(
  'assets/images/portfolio/arcade-driving/driving-cover-cinematic.jpg',
  'assets/images/portfolio/third-person-maze/maze-cover-cinematic.jpg',
  'assets/images/portfolio/2d-side-scroller/scroller-cover-cinematic.jpg',
  'assets/images/portfolio/cinematic-environment/hangar-cover-cinematic.jpg',
  'assets/images/Screenshot 2026-09-26 145138-enhanced.png',
  'assets/images/project-driving.jpg',
  'assets/images/project-maze.jpg',
  'assets/images/project-scroller.jpg',
  'assets/images/project-environment.jpg'
)
foreach ($p in $paths) {
  $full = Join-Path 'c:\Users\ADMIN\Downloads\Portfolio' $p
  $exists = Test-Path $full
  Write-Host "$p Exists: $exists"
  try {
    $res = Invoke-WebRequest -Uri ("http://localhost:5500/" + $p) -UseBasicParsing -TimeoutSec 3
    Write-Host "  HTTP Status: $($res.StatusCode)"
  } catch {
    Write-Host "  HTTP Error: $($_.Exception.Message)"
  }
}
