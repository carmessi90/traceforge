export type ImageInfo = {
  name: string;
  size: number;
  type: string;
  extension: string;
};

export function analyzeImage(file: File): ImageInfo {
  const extension = file.name.split(".").pop()?.toLowerCase() || "";

  return {
    name: file.name,
    size: file.size,
    type: file.type,
    extension,
  };
}

export function isSupportedFormat(file: File): boolean {
  const supported = [
    "image/png",
    "image/jpeg",
    "image/tiff",
    "image/webp",
  ];

  return supported.includes(file.type);
}