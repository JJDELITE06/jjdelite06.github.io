// Direct release links work without JavaScript. This only adds platform advice.
if (navigator.userAgentData?.getHighEntropyValues) {
  navigator.userAgentData.getHighEntropyValues(['architecture', 'bitness']).then(info => {
    if (navigator.userAgentData.platform === 'Windows' && info.architecture === 'arm') {
      document.getElementById('platform-hint').textContent = 'This device reports Windows on ARM. Choose ARM64 if you are running Windows 11.';
    }
  }).catch(() => {});
}
fetch('release.json').then(response => { if (!response.ok) throw Error('Release metadata unavailable'); return response.json(); }).then(release => {
  for (const architecture of ['x64', 'arm64']) {
    const asset = release.assets[architecture];
    for (const label of document.querySelectorAll(`[data-size="${architecture}"]`)) label.textContent = `${(asset.bytes / 1024 / 1024).toFixed(1)} MiB`;
  }
}).catch(() => {});
