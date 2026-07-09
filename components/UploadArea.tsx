"use client";

import { useRef } from "react";

type UploadAreaProps = {
  onSelect: (file: File) => void;
};

export default function UploadArea({ onSelect }: UploadAreaProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function openPicker() {
    inputRef.current?.click();
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  const file = e.target.files?.[0];

  if (file) {
    console.log(file);
    onSelect(file);
  }
}

  return (
    <div className="w-full max-w-4xl rounded-2xl border-2 border-dashed border-cyan-500 bg-[#181b23] p-14 text-center">

      <div className="text-6xl mb-6">📁</div>

      <h2 className="text-2xl font-bold mb-2">
        Trascina o seleziona un'immagine
      </h2>

      <p className="text-zinc-400 mb-8">
        PNG • JPG • TIFF • PDF
      </p>

      <button
        onClick={openPicker}
        className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold hover:bg-cyan-600"
      >
        Seleziona File
      </button>

      <input
        ref={inputRef}
        hidden
        type="file"
        accept=".png,.jpg,.jpeg,.tif,.tiff"
        onChange={handleChange}
      />
    </div>
  );
}