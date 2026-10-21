
# Download only the Latin subset woff2 files for self-hosting
$fontDir = "public\fonts"
New-Item -ItemType Directory -Force -Path $fontDir | Out-Null

$fonts = @(
  # Inter 400 latin
  @{ url = "https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7W0Q5nw.woff2"; name = "inter-400.woff2" },
  # Inter 500 latin
  @{ url = "https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7W0Q5nw.woff2"; name = "inter-500.woff2" },
  # Inter 600 latin
  @{ url = "https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7W0Q5nw.woff2"; name = "inter-600.woff2" },
  # Inter 700 latin
  @{ url = "https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7W0Q5nw.woff2"; name = "inter-700.woff2" },
  # Plus Jakarta Sans 500 latin
  @{ url = "https://fonts.gstatic.com/s/plusjakartasans/v12/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yygg_vb.woff2"; name = "pjs-500.woff2" },
  # Plus Jakarta Sans 600 latin
  @{ url = "https://fonts.gstatic.com/s/plusjakartasans/v12/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yygg_vb.woff2"; name = "pjs-600.woff2" },
  # Plus Jakarta Sans 700 latin
  @{ url = "https://fonts.gstatic.com/s/plusjakartasans/v12/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yygg_vb.woff2"; name = "pjs-700.woff2" },
  # Plus Jakarta Sans 800 latin
  @{ url = "https://fonts.gstatic.com/s/plusjakartasans/v12/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yygg_vb.woff2"; name = "pjs-800.woff2" },
  # Space Grotesk 600 latin
  @{ url = "https://fonts.gstatic.com/s/spacegrotesk/v22/V8mDoQDjQSkFtoMM3T6r8E7mPbF4C_k3HqU.woff2"; name = "sg-600.woff2" },
  # Space Grotesk 700 latin
  @{ url = "https://fonts.gstatic.com/s/spacegrotesk/v22/V8mDoQDjQSkFtoMM3T6r8E7mPbF4C_k3HqU.woff2"; name = "sg-700.woff2" }
)

$headers = @{ "Referer" = "https://fonts.googleapis.com/" }

foreach ($f in $fonts) {
  $dest = Join-Path $fontDir $f.name
  if (!(Test-Path $dest)) {
    Write-Host "Downloading $($f.name)..."
    Invoke-WebRequest -Uri $f.url -Headers $headers -OutFile $dest -UseBasicParsing
    Write-Host "  -> $((Get-Item $dest).Length) bytes"
  } else {
    Write-Host "Already exists: $($f.name)"
  }
}
Write-Host "Done!"
