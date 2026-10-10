# Lightweight .NET HttpListener static server for Sanjai Sanakiyan Portfolio
param([int]$Port = 5500)

$baseDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
$listener = New-Object System.Net.HttpListener
$prefix = "http://localhost:$Port/"
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
    Write-Host "Studio Portfolio HTTP Server running at $prefix"
    Write-Host "Serving files from $baseDir"
} catch {
    # If 5500 is in use, try 8080
    $Port = 8080
    $prefix = "http://localhost:$Port/"
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add($prefix)
    $listener.Start()
    Write-Host "Studio Portfolio HTTP Server running at $prefix"
    Write-Host "Serving files from $baseDir"
}

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8";
    ".css"  = "text/css; charset=utf-8";
    ".js"   = "application/javascript; charset=utf-8";
    ".json" = "application/json; charset=utf-8";
    ".pdf"  = "application/pdf";
    ".jpg"  = "image/jpeg";
    ".jpeg" = "image/jpeg";
    ".png"  = "image/png";
    ".webp" = "image/webp";
    ".avif" = "image/avif";
    ".svg"  = "image/svg+xml";
    ".ico"  = "image/x-icon";
    ".woff2"= "font/woff2";
    ".ttf"  = "font/ttf"
}

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $rawUrl = $request.RawUrl
        if ($rawUrl -eq "/" -or [string]::IsNullOrEmpty($rawUrl)) {
            $rawUrl = "/index.html"
        }

        # Remove query parameters if present
        if ($rawUrl.Contains("?")) {
            $rawUrl = $rawUrl.Substring(0, $rawUrl.IndexOf("?"))
        }

        $decodedUrl = [System.Uri]::UnescapeDataString($rawUrl)
        $relativePath = $decodedUrl.TrimStart("/").Replace("/", "\")
        $localPath = Join-Path $baseDir $relativePath

        if (Test-Path $localPath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($localPath).ToLower()
            $mime = "application/octet-stream"
            if ($mimeTypes.ContainsKey($ext)) {
                $mime = $mimeTypes[$ext]
            }

            $response.ContentType = $mime
            $bytes = [System.IO.File]::ReadAllBytes($localPath)
            $response.ContentLength64 = $bytes.Length
            $response.StatusCode = 200
            if ($request.HttpMethod -ne "HEAD") {
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            }
        } else {
            $response.StatusCode = 404
            $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $decodedUrl")
            $response.ContentType = "text/plain"
            if ($request.HttpMethod -ne "HEAD") {
                $response.OutputStream.Write($msg, 0, $msg.Length)
            }
        }
        $response.OutputStream.Close()
    } catch {
        # continue handling requests
    }
}
