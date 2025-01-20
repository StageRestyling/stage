export default ({ app }) => {
  if (process.client) {
    const iframe = document.createElement('noscript');
    iframe.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M3H3QLVW"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `;
    document.body.insertAdjacentElement('afterbegin', iframe);
  }};
