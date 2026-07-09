export type PixelAnalysis = {
  estimatedColors: number;
  hasTransparency: boolean;
};

export async function analyzePixels(
  imageUrl: string
): Promise<PixelAnalysis> {
  return new Promise((resolve) => {
    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        resolve({
          estimatedColors: 0,
          hasTransparency: false,
        });
        return;
      }

      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);

      const data = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      ).data;

      const colors = new Set<string>();
      let transparency = false;

      // Campioniamo un pixel ogni 10 per velocità
      for (let i = 0; i < data.length; i += 40) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];

        if (a < 255) {
          transparency = true;
        }

        colors.add(`${r}-${g}-${b}`);
      }

      resolve({
        estimatedColors: colors.size,
        hasTransparency: transparency,
      });
    };

    img.src = imageUrl;
  });
}