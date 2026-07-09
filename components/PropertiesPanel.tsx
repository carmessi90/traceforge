type PropertiesPanelProps = {
  fileName?: string;
  fileSize?: number;
  width?: number;
  height?: number;
};

export default function PropertiesPanel({
  fileName,
  fileSize,
  width,
  height,
}: PropertiesPanelProps) {
  return (
    <div className="rounded-xl border border-zinc-700 bg-[#181b23] p-6">
      <h2 className="mb-6 text-xl font-bold text-cyan-400">
        Proprietà
      </h2>

      <div className="space-y-3 text-sm">
        <p><strong>File:</strong> {fileName ?? "-"}</p>
        <p><strong>Dimensione:</strong> {fileSize ? `${(fileSize / 1024).toFixed(1)} KB` : "-"}</p>
        <p><strong>Risoluzione:</strong> {width && height ? `${width} × ${height}` : "-"}</p>
      </div>
    </div>
  );
}