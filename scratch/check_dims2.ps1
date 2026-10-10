Add-Type -AssemblyName System.Drawing
Get-ChildItem 'assets\images\project-*.jpg' | ForEach-Object {
    $img = [System.Drawing.Image]::FromFile($_.FullName)
    Write-Host "$($_.Name) : $($img.Width) x $($img.Height)"
    $img.Dispose()
}

Get-ChildItem 'assets\images\Screenshot*.png' | ForEach-Object {
    $img = [System.Drawing.Image]::FromFile($_.FullName)
    Write-Host "$($_.Name) : $($img.Width) x $($img.Height)"
    $img.Dispose()
}
