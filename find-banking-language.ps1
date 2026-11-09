# Read-only: lists lines in the site code that mention banking / money-holding language.
$words = 'bank','wallet','escrow','virtual account','settlement','custod','hold funds','holding funds','licen','regulat','CBN','PSP','payment service','remit','trade finance','lend','loan','credit','FX','exchange rate','naira','RMB','yuan','fee','1\.6','VAT','info@','@kya'
$pattern = ($words -join '|')
$files = Get-ChildItem -Recurse -File -Include '*.tsx','*.ts','*.jsx','*.js','*.md','*.mdx','*.html','*.json' |
  Where-Object { $_.FullName -notmatch 'node_modules|\\.next\\|\\.git\\|package-lock' }
$out = foreach ($f in $files) {
  Select-String -Path $f.FullName -Pattern $pattern -CaseSensitive:$false |
    ForEach-Object { '{0}:{1}: {2}' -f ($_.Path.Replace((Get-Location).Path + '\','')), $_.LineNumber, $_.Line.Trim() }
}
$out | Out-File -Encoding utf8 banking-language.txt
"Found $(@($out).Count) lines. Saved to banking-language.txt"
