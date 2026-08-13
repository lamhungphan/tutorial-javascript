$ErrorActionPreference = 'Stop'

$root = $PSScriptRoot
$jsDir = Join-Path $root 'javascript'
$backupDir = Join-Path $root '_html_backup'
New-Item -ItemType Directory -Force -Path $jsDir | Out-Null
New-Item -ItemType Directory -Force -Path $backupDir | Out-Null

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
$scriptBlock = [regex]'(?is)<script\b[^>]*>(?<body>.*?)</script\s*>\s*'

$processed = 0
$skipped = 0

Get-ChildItem -Path $root -Filter '*.html' -File | ForEach-Object {
    $file = $_
    $content = [System.IO.File]::ReadAllText($file.FullName)

    if ($content -notmatch '<script\b') {
        $skipped++
        return
    }

    $matches = $scriptBlock.Matches($content)
    $inlineBodies = New-Object System.Collections.Generic.List[string]
    $inlineFound = $false

    foreach ($m in $matches) {
        if ($m.Value -match '<script\b[^>]*\bsrc\s*=') {
            continue
        }
        $inlineFound = $true
        $inlineBodies.Add($m.Groups['body'].Value)
    }

    if (-not $inlineFound) {
        $skipped++
        return
    }

    $scriptName = $file.BaseName + '.js'
    $jsPath = Join-Path $jsDir $scriptName
    $jsContent = ($inlineBodies -join "`n`n") + "`n"
    [System.IO.File]::WriteAllText($jsPath, $jsContent, $utf8NoBom)

    $newContent = $content
    foreach ($m in $matches) {
        if ($m.Value -match '<script\b[^>]*\bsrc\s*=') {
            continue
        }
        $newContent = $newContent.Remove($m.Index, $m.Length)
    }

    $scriptTag = '<script src="javascript/' + $scriptName + '"></script>'
    if ($newContent -match '(?i)</body>') {
        $newContent = [regex]::Replace($newContent, '(?i)</body>', $scriptTag + "`n`n</body>", 1)
    } elseif ($newContent -match '(?i)</html>') {
        $newContent = [regex]::Replace($newContent, '(?i)</html>', $scriptTag + "`n</html>", 1)
    } else {
        $newContent = $newContent.TrimEnd() + "`n" + $scriptTag + "`n"
    }

    Copy-Item -LiteralPath $file.FullName -Destination (Join-Path $backupDir $file.Name) -Force
    [System.IO.File]::WriteAllText($file.FullName, $newContent, $utf8NoBom)

    Write-Output ("extracted: " + $file.Name + " -> javascript/" + $scriptName)
    $processed++
}

Write-Output ("")
Write-Output ("Done. Processed: " + $processed + " HTML file(s), skipped: " + $skipped)
Write-Output ("Backup saved in: " + $backupDir)