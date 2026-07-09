"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Workspace from "@/components/Workspace";

import { analyzeImage, ImageInfo } from "@/engine/imageAnalyzer";
import { analyzeFile, ForgeAnalysis } from "@/engine/forgeEngine";
import { vectorize } from "@/lib/api";

export default function Home() {
  const [image, setImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [info, setInfo] = useState<ImageInfo | null>(null);
  const [analysis, setAnalysis] = useState<ForgeAnalysis | null>(null);

  const [svg, setSvg] = useState<string | null>(null);

  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  async function handleVectorize() {
    if (!selectedFile) {
      alert("Carica prima un'immagine.");
      return;
    }

    try {
      const result = await vectorize(selectedFile);

      console.log(result);

      setSvg(result.svg);

      alert("✅ SVG ricevuto dal backend!");
    } catch (error) {
      console.error(error);
      alert("Errore durante la vettorizzazione.");
    }
  }

  function handleFile(file: File) {
    setSelectedFile(file);

    const url = URL.createObjectURL(file);

    setImage(url);

    const imageInfo = analyzeImage(file);
    setInfo(imageInfo);

    const img = new Image();

    img.onload = async () => {
      const width = img.width;
      const height = img.height;

      setDimensions({
        width,
        height,
      });

      const forgeResult = await analyzeFile(
        file,
        width,
        height,
        url
      );

      setAnalysis(forgeResult);
    };

    img.src = url;
  }

  return (
    <main className="min-h-screen bg-[#0f1117] text-white">
      <Header />

      <section className="mx-auto max-w-7xl p-8">

        <div className="mb-6">
          <button
            onClick={handleVectorize}
            className="rounded-lg bg-green-600 px-5 py-3 font-semibold hover:bg-green-500 transition"
          >
            ✨ Vectorize
          </button>
        </div>

        <Workspace
          image={image}
          info={info}
          analysis={analysis}
          dimensions={dimensions}
          onSelect={handleFile}
        />

      </section>
    </main>
  );
}