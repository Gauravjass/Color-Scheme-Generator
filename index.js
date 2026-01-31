const getColorBtn = document.getElementById("get-color-btn");
const colorPicker = document.getElementById("color-picker");
const container = document.getElementById("container");
const theme = document.getElementById("theme");
const toast = document.getElementById("toast");

// intital state of the app
getColorScheme("F55A5A", "monochrome");

getColorBtn.addEventListener("click", () => {
  const colorValue = colorPicker.value.substring(1);
  const selectedtheme = theme.value;
  getColorScheme(colorValue, selectedtheme);
});

function getColorScheme(hex, mode) {
  const url = `https://www.thecolorapi.com/scheme?hex=${hex}&format=json&mode=${mode}&count=5`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => renderColorScheme(data.colors))
    .catch((err) => console.error(err));
}

function renderColorScheme(colors) {
  container.innerHTML = colors
    .map(
      (color) =>
        `<button class="box" style = "background-color:${color.hex.value}" data-color = ${color.hex.value}>
                <span class="hex-code">${color.hex.value}</span>
            </button>
        `,
    )
    .join("");
}

container.addEventListener("click", async (event) => {
  const box = event.target.closest(".box");
  if (!box) return;

  const color = box.dataset.color;

  try {
    await navigator.clipboard.writeText(color);
    showToast("Color code successfully copied to clipboard");
  } catch (err) {
    console.error(err);
  }
});

// toast a message
let toastTimeout;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}
