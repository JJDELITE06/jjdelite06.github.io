# ClipVault

A focused Windows replay recorder. Choose a monitor, set a shortcut, start the rolling buffer, and save the last 15, 30, 60 or 120 seconds as a local MP4. No account is needed for desktop recording.

## Download the preview

- [Windows 10/11 x64 — Intel/AMD PCs](https://github.com/Lilmonkey318/clipvault/releases/download/v0.2.0/ClipVault-0.2.0-Setup-x64.exe)
- [Windows 11 ARM64](https://github.com/Lilmonkey318/clipvault/releases/download/v0.2.0/ClipVault-0.2.0-Setup-arm64.exe)
- [Download website](https://lilmonkey318.github.io/clipvault/)
- [Release notes and checksums](https://github.com/Lilmonkey318/clipvault/releases/tag/v0.2.0)

Installers are unsigned, so Windows may show a publisher warning. First launch automatically downloads and verifies the recording engine (about 88 MiB); recording then works offline. Windows 10 ARM is unsupported.

Choose **Recorder settings → Screen to record → Apply settings**, then start the buffer. Ctrl+Shift+F8 saves a clip by default; the keyboard shortcut and controller binding are editable. Closing the window leaves the recorder in the tray; choose Quit ClipVault to exit.

## Preview scope and testing

This is an early local recorder, not a finished hosted sharing platform. Desktop web login/upload, built-in trimming, game detection, automatic game capture and crash recovery are not included. No footage is uploaded automatically. Save MP4s and share them manually.

79 project tests pass. Engine provisioning, offline cache reuse, installer checks, monitor preference persistence and an installed Windows ARM64 exact 15-second H.264/AAC save/decode were exercised. Recording continued during saving. A fresh packaged synchronization test detected audio pulses but no visual pattern, so packaged A/V timing remains inconclusive. Physical Xbox Share, two-monitor and native x64 gaming checks remain pending. Fortnite FPS/frame times have not been benchmarked, including against Medal. Recording consumes CPU/GPU/disk; heavy load can stop it if audio falls behind.

The site’s Medal comparison is based on [Medal’s Windows guide](https://support.medal.tv/support/solutions/articles/48000959661-getting-started-with-medal-on-windows), checked October 2026. Monitor selection, local clips and keyboard shortcuts are shared capabilities. ClipVault’s positioning is its account-free, focused desktop recording workflow; no superior performance benchmark is claimed. Independent project, no Medal affiliation.

## Website

Original branding, code-native illustrations, responsive HTML/CSS and a small progressive-enhancement script. No build dependency, analytics, tracking or external fonts. GitHub Pages serves the repository root; installers are GitHub Release assets, not Git blobs. `release.json` and `SHA256SUMS.txt` describe the actual downloads.

For local preview, serve this folder with a static HTTP server. Publishing preparation scripts live in the private ClipVault development workspace; this public repository contains only the website, release metadata, setup guide and notices, not private configuration, recordings or desktop application source.

Read [third-party notices](THIRD_PARTY_NOTICES.md). The installer does not redistribute FFmpeg; the verified engine is downloaded separately from its public upstream release.
