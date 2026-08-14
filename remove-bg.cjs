const { Jimp } = require('jimp');

async function removeWhiteBg() {
  try {
    const image = await Jimp.read('public/logo.png');
    
    // Iterate over all pixels
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const red   = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue  = this.bitmap.data[idx + 2];
      const alpha = this.bitmap.data[idx + 3];

      // Check if pixel is white or very close to white (e.g. > 240)
      if (red > 240 && green > 240 && blue > 240) {
        // Set alpha to 0 for pure transparent
        this.bitmap.data[idx + 3] = 0;
      }
    });

    // Write the output as a PNG with transparent background
    await image.write('public/logo-transparent.png');
    console.log('Background removed successfully! Saved to public/logo-transparent.png');
  } catch (error) {
    console.error('Error processing image:', error);
  }
}

removeWhiteBg();
