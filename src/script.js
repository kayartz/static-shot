/* ============================================================
   Exp 3 — Specialty Shots · STATIC SHOT
   Each card links to one YouTube clip and opens it on YouTube
   (new tab) when clicked. Edit the YT_ID* constants below.
   Caption types:
     - normal : model + (with/without camera movement term "term" in prompt)
     - preset : model + (preset: <preset> )       ← e.g. Higgsfield
   Flags:
     - without: true  → caption reads "without" (red) instead of "with"
     - fail: true     → red FAIL marker after the caption
   ============================================================ */

const YT_ID1 = "bKgwwBEr6WE";   // CSV noStatic
const YT_ID2 = "ZgYoKmJOK64";  // 
const YT_ID3 = "0gg2A3yOm4w";   // Higgsfield DoP
const YT_ID4 = "Iw9auuXcjsM";   // Kling2.6
const YT_ID5 = "z2FKpuoznOI";   // Veo 3.1
const YT_ID6 = "lXcMOKZXpM0";   // Seedance 1.5
const YT_ID7 = "wae7SYm8p1M";   // Minimax Hailuo 2.3

const videos = [
  { title: "CSV noStatic",  model: "Cinematic Studio Video_V1.5",  term: "static shot", without: true, fail: true, id: YT_ID1 },
  { title: "CSV withStaticShot",  model: "Cinematic Studio Video_V1.5",  term: "static shot",  id: YT_ID2 },
  { title: "Higgsfield DoP StaticModelOnly",  model: "Higgsfield DoP_",  preset: "Static Model", id: YT_ID3 },
  { title: "Kling2 6 static", model: "Kling2.6_General Model", term: "static shot",      id: YT_ID4 },

  { title: "Veo 3 1 static",  model: "Veo 3.1 _General Model",   term: "static shot",   id: YT_ID5 },
  { title: "Seedance1 5 static",   model: "Seedance 1.5 _General Model",  term: "static shot", id: YT_ID6 },
  { title: "Minimax Hailuo2 3 static", model: "Minimax Hailuo 2.3 _General Model", term: "static shot",  id: YT_ID7 },
];

const grid = document.getElementById("grid");

videos.forEach((v) => {
  const card = document.createElement("article");
  card.className = "vcard";

  const watchUrl = `https://www.youtube.com/watch?v=${v.id}`;
  const thumbUrl = `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`;
  const failMark = v.fail ? ` <span class="failmark">FAIL</span>` : ``;

  // build the caption: preset style vs camera-movement-term style
  let caption;
  if (v.preset) {
    caption = `${v.model} (preset: ${v.preset} )${failMark}`;
  } else {
    const word = v.without ? "without" : "with";
    caption =
      `${v.model}(<span class="redhint">${word}</span> camera movement term ` +
      `"<span class="term">${v.term}</span>" in prompt )${failMark}`;
  }

  card.innerHTML = `
    <a class="vthumb" href="${watchUrl}" target="_blank" rel="noopener"
       style="background-image:url('${thumbUrl}');background-size:cover;background-position:center;"
       aria-label="Open on YouTube: ${v.title}">
      <div class="vbar">
        <span class="vavatar">k</span>
        <span class="vtitle">${v.title}</span>
      </div>
      <span class="vchannel">kayAI</span>
      <span class="vplay" aria-hidden="true"></span>
    </a>
    <p class="vcap">${caption}</p>
  `;

  grid.appendChild(card);
});