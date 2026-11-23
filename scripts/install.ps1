# Copia todas as skills desta biblioteca para ~/.claude/skills (valem em todos os projetos).
# Uso: powershell -ExecutionPolicy Bypass -File scripts\install.ps1
# Opcional: -Only nome1,nome2 para instalar apenas algumas.
param([string[]]$Only)
# Com -File, "a,b" chega como um único texto; separa por vírgula.
if ($Only) { $Only = $Only | ForEach-Object { $_ -split "," } | ForEach-Object { $_.Trim() } | Where-Object { $_ } }

$root = Split-Path -Parent $PSScriptRoot
$src = Join-Path $root "skills"
$dest = Join-Path $HOME ".claude\skills"
New-Item -ItemType Directory -Force $dest | Out-Null

Get-ChildItem $src -Directory | Where-Object { -not $Only -or $Only -contains $_.Name } | ForEach-Object {
    $target = Join-Path $dest $_.Name
    if (Test-Path $target) { Remove-Item -Recurse -Force $target }
    Copy-Item -Recurse $_.FullName $target
    Write-Host "instalada: $($_.Name)"
}
