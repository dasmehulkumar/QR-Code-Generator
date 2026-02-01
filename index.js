import express from "express";
import qr from "qr-image";
import fs from "fs";
import path from "path";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

app.post("/generate", (req, res) => {
  const { url } = req.body;

  const fileName = `qr_${Date.now()}.png`;
  const filePath = path.join("public", fileName);

  const qr_png = qr.image(url, { type: "png" });
  qr_png.pipe(fs.createWriteStream(filePath));

fs.appendFileSync("URL.txt", url + "\n");

  res.json({
    qrUrl: `/${fileName}`
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
