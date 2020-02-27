const getMainHeader = (rootElement, url) => {
  document.querySelector(rootElement).innerHTML += `
    <header class="mainHeader">
      <a href="${url}" class="nameLink">
        Bamm Hetrakul
        <br />
        <span class="namePost">photography</span>
      </a>
      <div class="menuSection">
        <details class="contactDetails">
          <summary>contact</summary>
          banana@gmail.com
        </details>
      </div>
    </header>
  `
}