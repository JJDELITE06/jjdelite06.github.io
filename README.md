# ClipVault

A focused Windows replay recorder. Choose a monitor, set a shortcut, start the rolling buffer, and save the last 15, 30, 60 or 120 seconds as a local MP4. No account is needed for desktop recording.

## Download the preview

- [Windows 10/11 x64 — Intel/AMD PCs](https://github.com/Lilmonkey318/clipvault/releases/download/v0.4.0/ClipVault-0.4.0-Setup-x64.exe)
- [Windows 11 ARM64](https://github.com/Lilmonkey318/clipvault/releases/download/v0.4.0/ClipVault-0.4.0-Setup-arm64.exe)
- [Download website](https://lilmonkey318.github.io/clipvault/)
- [Release notes and checksums](https://github.com/Lilmonkey318/clipvault/releases/tag/v0.4.0)

Installers are unsigned, so Windows may show a publisher warning. First launch automatically downloads and verifies the recording engine (about 88 MiB); recording then works offline. Windows 10 ARM is unsupported.

Choose **Recorder settings → Screen to record → Apply settings**, then start the buffer. Ctrl+Shift+F8 saves a clip by default; the keyboard shortcut and controller binding are editable. Closing the window leaves the recorder in the tray; choose Quit ClipVault to exit.

## Preview scope and testing

This is an early local recorder, not a finished hosted sharing platform. ClipVault-web desktop login/feed upload, built-in trimming, game detection, automatic game capture and crash recovery are not included. Local-only saving remains the default. Optional built-in Google Drive supports manual or automatic uploads of new clips, retaining every local MP4. Connect your own Google account under Your clips. Your storage. Uploads pause while recording is active by default, with a separate 1-50 Mbps upload limit (5 default). Google storage limits apply.

97 project tests pass. The recorder includes independent 1440p and 120 FPS options, an 80 Mbps Quality preset, up to 120 Mbps, improved H.264 export quality and continuous audio timing. Real production FFmpeg arguments retained 357 distinct frames in a three-second 1440p/120 FPS capture/export, with no silent gaps across 280 interior 10 ms audio blocks despite deliberately jittered packet arrival. Engine provisioning, offline cache reuse, installer checks, monitor preference persistence and an installed Windows ARM64 exact 15-second H.264/AAC save/decode were exercised. Recording continued during saving. The unchanged audio pipeline passed a prior 0.3.0 installed-app check within 104 ms. A 0.3.1 installed save/decode succeeded, but fresh sync verification was inconclusive because the expected visual/audio pattern could not be isolated. One cold start hit the bounded audio backlog guard; a subsequent start succeeded. Device-specific timing still varies. Physical Xbox Share, two-monitor and native x64 gaming checks remain pending. Fortnite FPS/frame times have not been benchmarked, including against Medal. Recording consumes CPU/GPU/disk; heavy load can stop it if audio falls behind.

The site’s Medal comparison is based on [Medal’s Windows guide](https://support.medal.tv/support/solutions/articles/48000959661-getting-started-with-medal-on-windows), checked October 2026. Monitor selection, local clips and keyboard shortcuts are shared capabilities. ClipVault’s positioning is its account-free, focused desktop recording workflow; no superior performance benchmark is claimed. Independent project, no Medal affiliation.

## Website

Original branding, code-native illustrations, responsive HTML/CSS and a small progressive-enhancement script. No build dependency, analytics, tracking or external fonts. GitHub Pages serves the repository root; installers are GitHub Release assets, not Git blobs. `release.json` and `SHA256SUMS.txt` describe the actual downloads.

For local preview, serve this folder with a static HTTP server. Publishing preparation scripts live in the private ClipVault development workspace; this public repository contains only the website, release metadata, setup guide and notices, not private configuration, recordings or desktop application source.

Read [third-party notices](THIRD_PARTY_NOTICES.md). The installer does not redistribute FFmpeg; the verified engine is downloaded separately from its public upstream release.

Real Google browser sign-in and a synthetic MP4 upload passed, including pause/resume while recording was marked active, exact cloud MD5/size verification and local file retention. Google OAuth is configured for external production use with only drive.file scope; Google currently does not show verified custom ClipVault consent branding. Each user must consent to their own connection. No paid service was added.
