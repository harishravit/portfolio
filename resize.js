import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const input = path.join(__dirname, "src/assets/my_pic.webp");
const output = path.join(__dirname, "src/assets/my_pic_optimized.webp");

sharp(input)
  .resize(200, 200, { fit: "cover" })
  .webp({ quality: 80 })
  .toFile(output)
  .then((info) => {
    console.log("✅ Done!");
    console.log(`New size: ${(info.size / 1024).toFixed(2)} KB`);
    console.log(`Dimensions: ${info.width}x${info.height}`);
  })
  .catch((err) => console.error("❌ Error:", err));
