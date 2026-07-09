import { analyzeImage } from "./imageAnalyzer";
import { detectLogo } from "./logoDetector";
import { analyzeColors } from "./colorAnalyzer";
import { analyzePixels, PixelAnalysis } from "./pixelAnalyzer";

export type ForgeAnalysis = {
  image: ReturnType<typeof analyzeImage>;
  logo: ReturnType<typeof detectLogo>;
  colors: ReturnType<typeof analyzeColors>;
  pixels: PixelAnalysis;
};

export async function analyzeFile(
  file: File,
  width: number,
  height: number,
  imageUrl: string
): Promise<ForgeAnalysis> {

  const pixelAnalysis = await analyzePixels(imageUrl);

  return {
    image: analyzeImage(file),
    logo: detectLogo(file),
    colors: analyzeColors(width, height),
    pixels: pixelAnalysis,
  };
}