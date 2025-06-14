const params = new URLSearchParams(location.search);
const folder = params.get("folder");
document.getElementById("title").innerText = `📁 ${folder}`;
const gallery = document.getElementById("gallery");

const base = `https://raw.githubusercontent.com/xinghuan22/WutheringWavesPic/main/${folder}/`;

fetch(`${base}index.json`)
  .then(r => r.json())
  .then(images => {
    images.forEach(img => {
      const el = document.createElement("img");
      el.src = base + img;
      el.alt = img;
      gallery.appendChild(el);
    });
  });
