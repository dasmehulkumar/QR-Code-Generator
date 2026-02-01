const form = document.getElementById("qrForm");
const result = document.getElementById("result");
const qrImage = document.getElementById("qrImage");
const download = document.getElementById("download");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const url = document.getElementById("url").value;

  const response = await fetch("/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url })
  });

  const data = await response.json();

  qrImage.src = data.qrUrl;
  download.href = data.qrUrl;
  download.setAttribute("download", "qr.png");

  result.classList.remove("hidden");
});
