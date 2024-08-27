const container = document.querySelector("div");
const containerSize = container.getBoundingClientRect();

let imagePosition = { x: 50, y: 50 };
let cursorPosBefore = { x: 0, y: 0 };
let imagePosBefore = null;
let imagePosAfter = imagePosition;

// Helpers
const minMax = (pos) => (pos < 0 ? 0 : pos > 100 ? 100 : pos);
const setNewCenter = (x, y) => {
  imagePosAfter = { x: x, y: y };
  container.style.backgroundPosition = `${x}% ${y}%`;
};

const getImageZoom = () => {
  return new Promise((resolve, reject) => {
    let actualImage = new Image();

    actualImage.src = $("#img")
      .css("background-image")
      .replace(/"/g, "")
      .replace(/url\(|\)$/gi, "");
    actualImage.onload = function () {
      const imgW = this.width,
        imgH = this.height,
        conW = containerSize.width,
        conH = containerSize.height,
        ratioW = imgW / conW,
        ratioH = imgH / conH;

      // Stretched to Height
      if (ratioH < ratioW) {
        resolve({
          x: imgW / (conW * ratioH) - 1,
          y: imgH / (conH * ratioH) - 1,
        });
      } else {
        // Stretched to Width
        resolve({
          x: imgW / (conW * ratioW) - 1,
          y: imgH / (conH * ratioW) - 1,
        });
      }
    };
  });
};

const addEventListeners = (zoomLevels) => {
  container.addEventListener("mousedown", function (event) {
    cursorPosBefore = { x: event.clientX, y: event.clientY };
    imagePosBefore = imagePosAfter; // Get current image position
  });

  container.addEventListener("mousemove", function (event) {
    event.preventDefault();

    if (event.buttons === 0) return;

    let newXPos =
      imagePosBefore.x +
      (((cursorPosBefore.x - event.clientX) / containerSize.width) * 100) /
        zoomLevels.x;
    let newYPos =
      imagePosBefore.y +
      (((cursorPosBefore.y - event.clientY) / containerSize.height) * 100) /
        zoomLevels.y;

    setNewCenter(minMax(newXPos), minMax(newYPos));
  });
};

getImageZoom().then((zoom) => addEventListeners(zoom));