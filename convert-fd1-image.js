import convert from 'heic-convert';
import fs from 'fs/promises';
import path from 'path';

async function convertHeic(inputPath, outputPath) {
  try {
    const inputBuffer = await fs.readFile(inputPath);
    const outputBuffer = await convert({
      buffer: inputBuffer,
      format: 'JPEG',
      quality: 0.8
    });
    await fs.writeFile(outputPath, outputBuffer);
    console.log(`Converted ${inputPath} to ${outputPath}`);
  } catch (error) {
    console.error(`Error converting ${inputPath}:`, error);
  }
}

const assetsDir = 'src/assets';
const files = ['fd1.HEIC'];

async function main() {
  for (const file of files) {
    const inputPath = path.join(assetsDir, file);
    const outputPath = path.join(assetsDir, file.replace(/\.HEIC$/i, '.jpg'));
    await convertHeic(inputPath, outputPath);
  }
}

main();
