param(
    [string]$Repo = "ardalis/DevIQ-gatsby",
    [string]$OutputDir = "_issues",
    [int]$Limit = 200
)

$ErrorActionPreference = "Stop"

# Ensure external command output is interpreted as UTF-8.
$utf8NoBom = [System.Text.UTF8Encoding]::new($false)
$OutputEncoding = $utf8NoBom
[Console]::InputEncoding = $utf8NoBom
[Console]::OutputEncoding = $utf8NoBom

if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
    throw "The GitHub CLI (gh) is required but was not found on PATH."
}

if (-not (Test-Path -Path $OutputDir)) {
    New-Item -Path $OutputDir -ItemType Directory | Out-Null
}

Write-Host "Fetching open issues from $Repo..."
$issuesJson = gh issue list --repo $Repo --state open --limit $Limit --json number, title, body
$issues = $issuesJson | ConvertFrom-Json

if (-not $issues) {
    Write-Host "No open issues found."
    exit 0
}

$count = 0
foreach ($issue in $issues) {
    $issueNumber = [int]$issue.number
    $title = [string]$issue.title
    $body = [string]$issue.body

    if ($null -eq $body) {
        $body = ""
    }

    $safeTitle = $title -replace '"', '\"'
    $content = @(
        "---",
        "title: `"$safeTitle`"",
        "---",
        "",
        $body
    ) -join "`r`n"

    $fileName = "{0}.md" -f $issueNumber
    $path = Join-Path $OutputDir $fileName
    Set-Content -Path $path -Value $content -Encoding UTF8
    $count++
}

Write-Host "Wrote $count issue file(s) to $OutputDir."