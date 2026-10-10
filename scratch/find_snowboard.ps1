$files = @('index.html', 'assets\css\style.css', 'assets\js\main.js')
foreach ($f in $files) {
    if (Test-Path $f) {
        $m = Select-String -Path $f -Pattern 'scroller|snowboard'
        foreach ($match in $m) {
            Write-Host "$f : $($match.LineNumber) : $($match.Line.Trim())"
        }
    }
}
