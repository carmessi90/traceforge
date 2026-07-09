type CanvasViewerProps = {
  image: string | null;
};

export default function CanvasViewer({
  image,
}: CanvasViewerProps) {
  return (
    <div className="rounded-xl border border-zinc-700 bg-[#181b23] p-6 h-[700px] flex items-center justify-center">

      {!image ? (
        <p className="text-zinc-500 text-lg">
          Carica un'immagine per iniziare
        </p>
      ) : (
        <img
          src={image}
          alt="Preview"
          className="max-h-full max-w-full object-contain"
        />
      )}

    </div>
  );
}