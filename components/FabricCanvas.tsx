"use client";

import { useEffect, useRef } from "react";
import { Canvas, FabricImage, Point } from "fabric";

type FabricCanvasProps = {
  image: string | null;
};

export default function FabricCanvas({
  image,
}: FabricCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = 650;

    const canvas = new Canvas(canvasRef.current, {
      width,
      height,
      backgroundColor: "#181b23",
    });

    // 🔍 Zoom con la rotella del mouse
    canvas.on("mouse:wheel", (opt) => {
      const delta = opt.e.deltaY;

      let zoom = canvas.getZoom();

      zoom *= 0.999 ** delta;

      if (zoom > 10) zoom = 10;
      if (zoom < 0.2) zoom = 0.2;

      const point = new Point(
        opt.e.offsetX,
        opt.e.offsetY
      );

      canvas.zoomToPoint(point, zoom);

      opt.e.preventDefault();
      opt.e.stopPropagation();
    });

    if (image) {
      FabricImage.fromURL(image).then((img) => {
        img.scaleToWidth(width * 0.9);

        canvas.centerObject(img);
        canvas.add(img);
        canvas.renderAll();
      });
    }

    return () => {
      canvas.dispose();
    };
  }, [image]);

  return (
    <div
      ref={containerRef}
      className="w-full rounded-xl border border-zinc-700 bg-[#181b23] p-2"
    >
      <canvas ref={canvasRef} />
    </div>
  );
}