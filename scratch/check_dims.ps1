Add-Type -AssemblyName System.Drawing
Get-ChildItem 'assets\images\Snowball*.png' | ForEach-Object {
    $img = [System.Drawing.Image]::FromFile($_.FullName)
    $ratio = [math]::Round($img.Width / $img.Height, 2)
    Write-Host "$($_.Name) : $($img.Width) x $($img.Height) (ratio: $ratio)"
    $img.Dispose()
}

$otherImages = @(
    'assets\images\portfolio\arcade-driving\driving-cover-cinematic.jpg',
    'assets\images\portfolio\third-person-maze\maze-cover-cinematic.jpg',
    'assets\images\portfolio\cinematic-environment\hangar-cover-cinematic.jpg'
)
foreach ($f in $otherImages) {
    if (Test-Path $f) {
        $img = [System.Drawing.Image]::FromFile((Resolve-Path $f))
        $ratio = [math]::Round($img.Width / $img.Height, 2)
        Write-Host "$f : $($img.Width) x $($img.Height) (ratio: $ratio)"
        $img.Dispose()
    }
}
