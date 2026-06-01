const IMAGES = [
  { src: "img/exemples/Tooooools.png", link: "https://www.tooooools.app/", name: "Tooooools" },
  { src: "img/exemples/Alfio.png", link: "https://www.fabiofidanza.com/alfio/", name: "Alfio" },
  { src: "img/exemples/Accidental-Graphics.png", link: "https://overgrootoma.github.io/Accidental-Graphics/apps/IMAGEine.html", name: "Accidental Graphics" },
  { src: "img/exemples/Glyphtrix.png", link: "https://glyphtrix.art/", name: "Glyphtrix" },
  { src: "img/exemples/Glitch-text-generator.png", link: "https://animalswithinanimals.com/generator/generator.html#", name: "Glitch text generator" },
  { src: "img/exemples/Image-Stripe-Cutter.png", link: "https://www.stripecutter.com/", name: "Image Stripe Cutter" },
  { src: "img/exemples/Image-Ditherlicious.png", link: "https://29a.ch/ditherlicious/", name: "Ditherlicious" },
  { src: "img/exemples/Image-BDFM.png", link: "https://bitmap.designfamilymarket.com/#/", name: "BDFM" },
  { src: "img/exemples/Image-Color-Range-Lab.png", link: "https://overgrootoma.github.io/Accidental-Graphics/apps/ColorRangeLab.html", name: "Color Range Lab" },
  { src: "img/exemples/Image-Gridpaint.png", link: "https://schultzschultz.com/gridpaint/?_gl=1*18pc61q*_up*MQ..*_ga*NTM4MjM0OTMxLjE3Nzk4NzA4NzY.*_ga_WDJ692MVNP*czE3Nzk4NzA4NzYkbzEkZzEkdDE3Nzk4NzA4ODMkajUzJGwwJGgxNjY1MzgwOTY.", name: "Gridpaint" },
  { src: "img/exemples/Image-Scriptscript.png", link: "https://schultzschultz.com/scriptscript/?_gl=1*hozebn*_up*MQ..*_ga*Mjg3ODAxMTc2LjE3Nzk4NzA4NzY.*_ga_WDJ692MVNP*czE3Nzk4NzA4NzYkbzEkZzAkdDE3Nzk4NzA4NzYkajYwJGwwJGg5NDI0MDMxMDY.", name: "Scriptscript" },
  { src: "img/exemples/Image-Smudge.png", link: "https://schultzschultz.com/smudge/?_gl=1*1ms5wip*_up*MQ..*_ga*Mjg3ODAxMTc2LjE3Nzk4NzAxNTg.*_ga_WDJ692MVNP*czE3Nzk4NzAxNTYkbzEkZzAkdDE3Nzk4NzAxNTYkajYwJGwwJGg5NDI0MDMxMDY.", name: "Smudge" },
  { src: "img/exemples/Image-Tangents.png", link: "https://schultzschultz.com/tangents/?_gl=1*1nb5qjx*_up*MQ..*_ga*Mjg3ODAxMTc2LjE3Nzk4NzAxNTg.*_ga_WDJ692MVNP*czE3Nzk4NzAxNTYkbzEkZzAkdDE3Nzk4NzAxNTYkajYwJGwwJGg5NDI0MDMxMDY.", name: "Tangents" },
  { src: "img/exemples/Image-Calligraphy.png", link: "https://schultzschultz.com/calligraphy/?_gl=1*1o59lfr*_up*MQ..*_ga*Mjg3ODAxMTc2LjE3Nzk4NzAxNTg.*_ga_WDJ692MVNP*czE3Nzk4NzAxNTYkbzEkZzAkdDE3Nzk4NzAxNTYkajYwJGwwJGg5NDI0MDMxMDY.", name: "Calligraphy" },
  { src: "img/exemples/Image-Vector-Halftone-Maker.png", link: "https://halftone.xoihazard.com/", name: "Vector Halftone Maker" },
  { src: "img/exemples/Image-Bitmap-Sorter.png", link: "https://larixk.nl/experiments/sort/", name: "Bitmap Sorter" },
  { src: "img/exemples/Image-Sift.png", link: "https://sift.constraint.systems/", name: "Sift" },
  { src: "img/exemples/Image-Rutt-Etra-Izer.png", link: "https://airtightinteractive.com/demos/js/ruttetra/", name: "Rutt Etra Izer" },
  { src: "img/exemples/Image-Image-Glitch-Tool.png", link: "https://snorpey.github.io/jpg-glitch/", name: "Image Glitch Tool" },
  { src: "img/exemples/Image-JPEGKrusher.png", link: "https://ajxs.github.io/jpk/", name: "JPEGKrusher" },
  { src: "img/exemples/Image-Glitch-Image.png", link: "https://glitchyimage.com/", name: "Glitch Image" },
  { src: "img/exemples/Image-Pixel-Sorter.png", link: "https://pixel-sorter.com/", name: "Pixel Sorter" },
  { src: "img/exemples/Image-Pixel-Sorter.png", link: "https://pixel-sorter.com/", name: "Pixel Sorter" },
  { src: "img/exemples/Image-Chromata.png", link: "https://www.michaelbromley.co.uk/experiments/chromata/#", name: "Chromata" },
  { src: "img/exemples/Image-ZzArt.png", link: "https://zzart.3d2k.com/", name: "ZzArt" },
  { src: "img/exemples/Image-ThreeJS.png", link: "https://pavellaptev.github.io/kinetik-typography-three-js/#/spiral", name: "ThreeJS" },
  { src: "img/exemples/Image-UJI.png", link: "https://ghpages.noahdoersing.com/uji/", name: "UJI" },
  { src: "img/exemples/Image-Moving-dots-animation-generator.png", link: "https://dominik.ws/art/movingdots/", name: "Moving dots animation-generator" },
  { src: "img/exemples/Image-Pattern-Generator.png", link: "https://doodad.dev/pattern-generator/", name: "Pattern Generator" },
  { src: "img/exemples/Image-Gradient-Generator.png", link: "https://doodad.dev/gradient-generator/", name: "Gradient Generator" },
  { src: "img/exemples/Image-Dither-Me-This.png", link: "https://doodad.dev/dither-me-this/", name: "Dither Me This" },
  { src: "img/exemples/Image-Cloudpaint.png", link: "https://cloudpaint.com/classic", name: "Cloudpaint" },
  { src: "img/exemples/Image-Bit-Vision.png", link: "https://landonbrand.github.io/Bit-Vision/", name: "Bit Vision" },
  { src: "img/exemples/Patternico.png", link: "https://patternico.com/", name: "Patternico" },
  { src: "img/exemples/Tylify.png", link: "https://tylify.app/", name: "Tylify" },
  { src: "img/exemples/Truchet-Generator.png", link: "https://swazara.github.io/truchet-web-generator/", name: "Truchet Generator" },
  { src: "img/exemples/Glyph-Drawing-Club.png", link: "https://glyphdrawing.club/", name: "Glyph Drawing Club" },
  { src: "img/exemples/Fracture.png", link: "https://fracture.vdvm.be/", name: "Fracture" },
  { src: "img/exemples/Space-Type-Generator.png", link: "https://spacetypegenerator.com/", name: "Space Type Generator" },
  { src: "img/exemples/Particles-Attract-Repel.png", link: "https://b2renger.github.io/p5js_typo/particles_attract_repel/index.html", name: "Particles Attract Repel" },
  { src: "img/exemples/P5-t00ls.png", link: "https://ffd8.github.io/p5-t00ls//#", name: "p5-t00ls" },
  { src: "img/exemples/Machine.png", link: "https://notwk.london/machine", name: "Machine" },
  { src: "img/exemples/Epaf.png", link: "https://raphaelbastide.com/epaf/", name: "Epaf" },
  { src: "img/exemples/Neon-Flames.png", link: "https://29a.ch/sandbox/2011/neonflames/#", name: "Neon Flames" },
  { src: "img/exemples/Swing.png", link: "https://overgrootoma.github.io/Accidental-Graphics/apps/Swing.html", name: "Swing" },
  { src: "img/exemples/Harmony.png", link: "https://mrdoob.github.io/harmony/", name: "Harmony" },
  { src: "img/exemples/Asciii.png", link: "https://www.asciii.com/", name: "Asciii" },
  { src: "img/exemples/MotionStills.png", link: "https://overgrootoma.github.io/Accidental-Graphics/apps/MotionStills.html", name: "MotionStills" },
  { src: "img/exemples/PhotoGrid.png", link: "https://overgrootoma.github.io/Accidental-Graphics/apps/fotogrid.html", name: "PhotoGrid" },
  { src: "img/exemples/Effect.png", link: "https://effect.app/", name: "Effect" },
  { src: "img/exemples/Gradients.png", link: "https://gradients.juangarcia.ch/", name: "Gradients" },
  { src: "img/exemples/Tympanus.png", link: "https://tympanus.net/Tutorials/RisoPrinting/", name: "Tympanus" },
  { src: "img/exemples/Mono-Tool.png", link: "https://www.aspektedesrasters.de/", name: "Mono-Tool" },
  { src: "img/exemples/Hofmann.png", link: "https://bbtgnn.github.io/hofmann-1.0.0/index.html", name: "Hofmann" },
  { src: "img/exemples/Gradientor.png", link: "https://gradientor.afterimage.cc/", name: "Gradientor" },
  { src: "img/exemples/Dice-Mosaic-Generator.png", link: "https://adrianomoura.github.io/MosaicDiceGenerator/", name: "Dice Mosaic Generator" },
  { src: "img/exemples/Riiso.png", link: "https://riso.lfesp.me/", name: "Riiso" },
  { src: "img/exemples/Risoseparator.png", link: "https://www.risoseparator.tools/", name: "Risoseparator" },
  { src: "img/exemples/Mandelbrot.png", link: "https://codepen.io/Dillo/pen/WNqMYrP", name: "Mandelbrot" },
  { src: "img/exemples/Grainrad.png", link: "https://grainrad.com/", name: "Grainrad" },
  { src: "img/exemples/Kidpix.png", link: "https://kidpix.app/", name: "Kidpix" },
  { src: "img/exemples/Halftone-Maker.png", link: "https://halftonemaker.com/", name: "Halftone-Maker" },
  { src: "img/exemples/Ascii-Automata.png", link: "https://hlnet.neocities.org/ascii-automata/", name: "Ascii Automata" },
  { src: "img/exemples/RD-Tool.png", link: "https://karlsims.com/rdtool.html", name: "RD Tool" },
  { src: "img/exemples/Il-Verse.png", link: "https://hlnet.neocities.org/il-verse/", name: "Il-Verse" },
  { src: "img/exemples/Gridolyno.png", link: "https://www.fabiofidanza.com/gridolyno/", name: "Gridolyno" },
  { src: "img/exemples/Flow.png", link: "https://flow.constraint.systems/", name: "FLow" },
  { src: "img/exemples/Type.png", link: "https://type.constraint.systems/", name: "Grid" },
  { src: "img/exemples/Grid.png", link: "https://collapse.constraint.systems/", name: "Grid" },
  { src: "img/exemples/Collapse.png", link: "https://collapse.constraint.systems/", name: "Collapse" },
  { src: "img/exemples/Glitch-Art.png", link: "https://glitchart.io/", name: "Glitch Art" },
  { src: "img/exemples/Blob-Sketch.png", link: "https://cpreid2.github.io/blobSketch/", name: "Blob Sketch" },
  { src: "img/exemples/Generative-Knitting.png", link: "https://generativeknitting.rosieloraine.xyz/", name: "Generative Knitting" },
];

const CONFIG = {
  COLS: 6,
  ROWS: 6,
  easingFactor: 0.1,
  scaleEasing: 0.08,
  maxScaleEffect: 0.2,
  tileOverscan: 1,
  rotationStrength: 0.05,
  rotationEasing: 0.06
};

// Bouton curseur
const cursorBtn = document.createElement("div");
cursorBtn.id = "cursor-btn";
cursorBtn.innerText = "Essayer l'outil";
document.body.appendChild(cursorBtn);

const imageFor = (baseX, baseY) => {
  const i = (baseX + baseY * CONFIG.COLS) % IMAGES.length;
  return IMAGES[(i + IMAGES.length) % IMAGES.length];
};

const state = {
  gridItems: [],
  cameraOffset: { x: 0, y: 0 },
  targetOffset: { x: 0, y: 0 },
  isDragging: false,
  previousMousePosition: { x: 0, y: 0 },
  containerRotationX: 0,
  containerRotationY: 0,
  targetRotationX: 0,
  targetRotationY: 0,
  containerScale: 1,
  targetScale: 1,
  scrollSpeed: 0
};

const viewport = document.getElementById("viewport");
const container = document.getElementById("container");
const grid = document.getElementById("grid");

let cellWidth = 0;
let cellHeight = 0;
let tilesX = 1;
let tilesY = 1;

const calculateCellSizeAndTiling = () => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const minScale = 1 - CONFIG.maxScaleEffect;
  const requiredCoverFactor = 1 / minScale;

  const size = Math.max(vw / CONFIG.COLS, vh / CONFIG.ROWS) * requiredCoverFactor;

  cellWidth = size;
  cellHeight = size;

  const totalWidth = cellWidth * CONFIG.COLS;
  const totalHeight = cellHeight * CONFIG.ROWS;

  tilesX = Math.ceil((vw * requiredCoverFactor) / totalWidth) + CONFIG.tileOverscan;
  tilesY = Math.ceil((vh * requiredCoverFactor) / totalHeight) + CONFIG.tileOverscan;
};

const createGridItems = () => {
  grid.innerHTML = "";
  state.gridItems = [];

  for (let tileY = -tilesY; tileY <= tilesY; tileY++) {
    for (let tileX = -tilesX; tileX <= tilesX; tileX++) {
      for (let y = 0; y < CONFIG.ROWS; y++) {
        for (let x = 0; x < CONFIG.COLS; x++) {

          const element = document.createElement("div");
          element.className = "grid-item";

          element.style.width = `${cellWidth}px`;
          element.style.height = `${cellHeight}px`;

          const baseX = x;
          const baseY = y;
          const yOffset = x * cellHeight * 0.5;

          const tool = imageFor(baseX, baseY);

          element.innerHTML = `
            <a href="${tool.link}" target="_blank" rel="noopener noreferrer" class="card-link">
              <div class="img-wrapper">
                <img src="${tool.src}" alt="${tool.name}">
                <div class="hover-label">Réalisé avec <span class="tool-name">${tool.name}</span></div>
              </div>
            </a>
          `;

          const img = element.querySelector("img");

          // CURSEUR UNIQUEMENT SUR IMAGE
          img.addEventListener("mouseenter", () => {
            cursorBtn.style.display = "flex";
          });

          img.addEventListener("mouseleave", () => {
            cursorBtn.style.display = "none";
          });

          img.addEventListener("mousemove", (e) => {
            cursorBtn.style.left = e.clientX + "px";
            cursorBtn.style.top = e.clientY + "px";
          });

          // Empêcher clic pendant drag
          element.querySelector("a").addEventListener("click", (e) => {
            if (state.isDragging) e.preventDefault();
          });

          grid.appendChild(element);
          state.gridItems.push({ element, baseX, baseY, tileX, tileY, yOffset });
        }
      }
    }
  }
};

const updateItemPositions = () => {
  const totalWidth = cellWidth * CONFIG.COLS;
  const totalHeight = cellHeight * CONFIG.ROWS;

  state.gridItems.forEach(({ element, baseX, baseY, tileX, tileY, yOffset }) => {
    const x = baseX * cellWidth + tileX * totalWidth - (state.cameraOffset.x % totalWidth);
    const y = baseY * cellHeight + tileY * totalHeight - (state.cameraOffset.y % totalHeight) + yOffset;

    element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });
};

const onMouseDown = (e) => {
  state.isDragging = true;
  viewport.classList.add("grabbing");
  state.previousMousePosition = { x: e.clientX, y: e.clientY };
};

const onMouseMove = (e) => {
  if (!state.isDragging) return;

  const dx = e.clientX - state.previousMousePosition.x;
  const dy = e.clientY - state.previousMousePosition.y;

  state.targetOffset.x -= dx;
  state.targetOffset.y -= dy;

  state.scrollSpeed = Math.hypot(dx, dy);

  state.targetRotationY = dx * CONFIG.rotationStrength;
  state.targetRotationX = -dy * CONFIG.rotationStrength;

  state.previousMousePosition = { x: e.clientX, y: e.clientY };
};

const onMouseUp = () => {
  state.isDragging = false;
  viewport.classList.remove("grabbing");
  state.targetRotationX = 0;
  state.targetRotationY = 0;
};

const onWheel = (e) => {
  e.preventDefault();
  state.targetOffset.x += e.deltaX;
  state.targetOffset.y += e.deltaY;
  state.scrollSpeed = Math.hypot(e.deltaX, e.deltaY);
};

const animate = () => {
  requestAnimationFrame(animate);

  state.cameraOffset.x += (state.targetOffset.x - state.cameraOffset.x) * CONFIG.easingFactor;
  state.cameraOffset.y += (state.targetOffset.y - state.cameraOffset.y) * CONFIG.easingFactor;

  updateItemPositions();

  const speedFactor = Math.min(state.scrollSpeed * 0.01, 1);
  state.targetScale = 1 - speedFactor * CONFIG.maxScaleEffect;
  state.scrollSpeed *= 0.85;

  state.containerScale += (state.targetScale - state.containerScale) * CONFIG.scaleEasing;
  state.containerRotationX += (state.targetRotationX - state.containerRotationX) * CONFIG.rotationEasing;
  state.containerRotationY += (state.targetRotationY - state.containerRotationY) * CONFIG.rotationEasing;

  container.style.transform =
    `scale(${state.containerScale}) skewY(${state.containerRotationX}deg) skewX(${state.containerRotationY}deg)`;
};

const init = () => {
  calculateCellSizeAndTiling();
  createGridItems();
  updateItemPositions();

  container.parentElement.style.perspective = "1000px";

  viewport.addEventListener("mousedown", onMouseDown);
  viewport.addEventListener("mousemove", onMouseMove);
  viewport.addEventListener("mouseup", onMouseUp);
  viewport.addEventListener("mouseleave", onMouseUp);
  viewport.addEventListener("wheel", onWheel, { passive: false });
  window.addEventListener("resize", init);

  animate();
};

init();