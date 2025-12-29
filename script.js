function decide() {
const text = document.getElementById("options").value;
if (!text) return;

const arr = text.split(",").map(x => x.trim());
const random = arr[Math.floor(Math.random() * arr.length)];

document.getElementById("result").textContent =
"👉 Таңдау: " + random;
}
