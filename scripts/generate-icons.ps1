$ErrorActionPreference = 'Stop'

Add-Type -AssemblyName System.Drawing

$projectRoot = Split-Path -Parent $PSScriptRoot
$sourcePath = Join-Path $projectRoot 'public\logo.png'
$source = [System.Drawing.Bitmap]::FromFile($sourcePath)

try {
  # Tighten the generous source artwork margins so the mark remains legible in a browser tab.
  $cropSize = [Math]::Min(320, [Math]::Min($source.Width, $source.Height))
  $cropX = [Math]::Floor(($source.Width - $cropSize) / 2)
  $cropY = [Math]::Floor(($source.Height - $cropSize) / 2)
  $sourceRectangle = [System.Drawing.Rectangle]::new($cropX, $cropY, $cropSize, $cropSize)

  $targets = @(
    @{ Name = 'favicon.png'; Size = 192 },
    @{ Name = 'apple-touch-icon.png'; Size = 180 },
    @{ Name = 'icon-512.png'; Size = 512 }
  )

  foreach ($target in $targets) {
    $size = [int]$target.Size
    $output = [System.Drawing.Bitmap]::new($size, $size)

    try {
      $graphics = [System.Drawing.Graphics]::FromImage($output)
      try {
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $graphics.DrawImage(
          $source,
          [System.Drawing.Rectangle]::new(0, 0, $size, $size),
          $sourceRectangle,
          [System.Drawing.GraphicsUnit]::Pixel
        )
      }
      finally {
        $graphics.Dispose()
      }

      $output.Save(
        (Join-Path $projectRoot "public\$($target.Name)"),
        [System.Drawing.Imaging.ImageFormat]::Png
      )
    }
    finally {
      $output.Dispose()
    }
  }
}
finally {
  $source.Dispose()
}
