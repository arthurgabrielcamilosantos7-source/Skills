# Copia skills desta biblioteca para ~/.claude/skills (todos os projetos) ou para <projeto>\.claude\skills.
# Uso:
#   powershell -ExecutionPolicy Bypass -File scripts\install.ps1                      (todas, global)
#   powershell -ExecutionPolicy Bypass -File scripts\install.ps1 -Only a,b            (algumas, global)
#   powershell -ExecutionPolicy Bypass -File scripts\install.ps1 -Only a,b -Project "C:\caminho\do\projeto"
# Também copia references\ (usado pelas skills ig-*) para o destino ..\references.
param([string[]]$Only, [string]$Project)

$root = Split-Path -Parent $PSScriptRoot
$src = Join-Path $root "skills"
if ($Project) { $base = Join-Path $Project ".claude" } else { $base = Join-Path $HOME ".claude" }
$dest = Join-Path $base "skills"
New-Item -ItemType Directory -Force $dest | Out-Null

Get-ChildItem $src -Directory | Where-Object { -not $Only -or $Only -contains $_.Name } | ForEach-Object {
    $target = Join-Path $dest $_.Name
    if (Test-Path $target) { Remove-Item -Recurse -Force $target }
    Copy-Item -Recurse $_.FullName $target
    Write-Host "instalada: $($_.Name) -> $dest"
}

$refs = Join-Path $root "references"
if (Test-Path $refs) {
    $refDest = Join-Path $base "references"
    New-Item -ItemType Directory -Force $refDest | Out-Null
    Get-ChildItem $refs -File | ForEach-Object {
        $t = Join-Path $refDest $_.Name
        if (-not (Test-Path $t)) { Copy-Item $_.FullName $t }   # não sobrescreve perfis já preenchidos
    }
}
