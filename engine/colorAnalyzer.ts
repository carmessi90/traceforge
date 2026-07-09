export type ColorAnalysis = {
  estimatedColors: number;
  complexity: "Low" | "Medium" | "High";
};

export function analyzeColors(width: number, height: number): ColorAnalysis {
  const pixels = width * height;

  if (pixels < 500000) {
    return {
      estimatedColors: 16,
      complexity: "Low",
    };
  }

  if (pixels < 2000000) {
    return {
      estimatedColors: 64,
      complexity: "Medium",
    };
  }

  return {
    estimatedColors: 256,
    complexity: "High",
  };
}