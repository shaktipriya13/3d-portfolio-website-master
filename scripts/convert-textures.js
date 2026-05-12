const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const texturesDir = path.join(__dirname, "../public/planet/textures");

async function convert() {
  const files = ["Clouds_baseColor.png", "Planet_baseColor.png"];

  for (const file of files) {
    const input = path.join(texturesDir, file);
    const output = path.join(texturesDir, file.replace(".png", ".webp"));

    await sharp(input).webp({ quality: 85 }).toFile(output);

    const inputKB = Math.round(fs.statSync(input).size / 1024);
    const outputKB = Math.round(fs.statSync(output).size / 1024);
    const saved = Math.round((1 - outputKB / inputKB) * 100);
    console.log(`${file}: ${inputKB}KB → ${outputKB}KB (${saved}% smaller)`);
  }

  console.log("\nDone! Now update scene.gltf to use .webp extensions.");
}

convert().catch(console.error);
