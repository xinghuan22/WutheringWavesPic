// 使用全局变量
const gallery = document.getElementById("gallery");
const base = `https://raw.githubusercontent.com/${location.hostname.split('.')[0]}/${location.pathname.split('/')[1]}/gh-pages/${window.currentFolder}/`;

fetch(`${base}index.json`)
  .then(r => r.json())
  .then(images => {
    images.forEach(img => {
      const el = document.createElement("img");
      el.src = base + img;
      el.alt = img;
      el.style = "max-width:200px;margin:10px;border:1px solid #ccc;";
      gallery.appendChild(el);
    });
  });
