$path = "C:\Users\josea\OneDrive\Documents\GitHub\LakesOfWillogate\community-events.html"
$f = [System.IO.File]::ReadAllText($path,[System.Text.Encoding]::UTF8)
$bI = $f.IndexOf('<div class="hero-buttons">')
$sI = $f.IndexOf('<div class="scroll-indicator">')
Write-Host "bI=$bI sI=$sI"
$sEnd = $f.IndexOf('</div>', $f.IndexOf('</div>', $f.IndexOf('</div>', $sI)+1)+1)+6
$lineStart = $f.LastIndexOf("`n",$bI)+1
$siLineStart = $f.LastIndexOf("`n",$sI)+1
Write-Host "lineStart=$lineStart siLineStart=$siLineStart diff=$($siLineStart - $lineStart)"
$btnBlock = $f.Substring($lineStart, $siLineStart - $lineStart)
$siBlock = $f.Substring($siLineStart, $sEnd - $siLineStart)
$newContent = $f.Substring(0, $lineStart) + $siBlock + "`n" + $btnBlock.TrimEnd() + $f.Substring($sEnd)
[System.IO.File]::WriteAllText($path, $newContent, [System.Text.Encoding]::UTF8)
$fv = [System.IO.File]::ReadAllText($path,[System.Text.Encoding]::UTF8)
$bI2 = $fv.IndexOf('<div class="hero-buttons">')
$sI2 = $fv.IndexOf('<div class="scroll-indicator">')
Write-Output "scroll-indicator now before buttons: $($sI2 -lt $bI2)"
