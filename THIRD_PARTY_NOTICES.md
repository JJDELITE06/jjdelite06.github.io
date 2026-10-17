# ClipVault third-party notices

ClipVault uses Electron. Electron's MIT license and Chromium's third-party notices
are included in the installed program directory as LICENSE.electron.txt and
LICENSES.chromium.html. Node.js is provided by Electron; its notices are included
in Electron's distribution.

The controller helper uses the Windows-provided XInput and GameInput APIs and
the existing Microsoft .NET Framework. Those Windows components are not bundled.

## Capture engine

This installer does not contain FFmpeg. On first launch, ClipVault downloads the
unmodified FFmpeg 7.1 essentials Windows build directly from Gyan's public
GitHub release. ClipVault checks the executable's pinned SHA-256 before use.
First setup requires internet access; recording then works offline.

- Publisher/build: https://github.com/GyanD/codexffmpeg/releases/tag/7.1
- FFmpeg source revision: https://github.com/FFmpeg/FFmpeg/commit/b08d7969c5
- Build information and library list: https://www.gyan.dev/ffmpeg/builds/
- FFmpeg licensing: https://ffmpeg.org/legal.html

That separately downloaded build includes GPL components (GPL version 3). Its
original license is preserved beside the downloaded executable in ClipVault's
local application-data components directory. FFmpeg is a separate command-line
process; it is not linked into ClipVault. This notice does not replace or modify
the licenses applying to any third-party component.
