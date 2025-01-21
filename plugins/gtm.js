export default ({ app }) => {
  if (process.client) {
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M3H3QLVW"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `;
    document.body.prepend(noscript);
  }
};
