export type LogoAnalysis = {
  isLikelyLogo: boolean;
  score: number;
  reason: string;
};

export function detectLogo(file: File): LogoAnalysis {
  const extension = file.name.split(".").pop()?.toLowerCase() ?? "";

  const vectorFriendly = ["png", "svg", "eps", "pdf"];

  if (vectorFriendly.includes(extension)) {
    return {
      isLikelyLogo: true,
      score: 80,
      reason: "Formato compatibile con loghi",
    };
  }

  return {
    isLikelyLogo: false,
    score: 30,
    reason: "Probabile fotografia",
  };
}