import { ForgeAnalysis } from "@/engine/forgeEngine";

type AnalysisPanelProps = {
  analysis: ForgeAnalysis | null;
};

export default function AnalysisPanel({
  analysis,
}: AnalysisPanelProps) {
  if (!analysis) {
    return (
      <div className="rounded-xl border border-zinc-700 bg-[#181b23] p-6">
        <h2 className="mb-4 text-xl font-bold text-cyan-400">
          Analisi
        </h2>

        <p className="text-zinc-500">
          Nessuna analisi disponibile.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-zinc-700 bg-[#181b23] p-6">
      <h2 className="mb-6 text-xl font-bold text-cyan-400">
        Analisi Forge Engine
      </h2>

      <div className="space-y-3 text-sm">

        <p>
          <strong>Logo:</strong>{" "}
          {analysis.logo.isLikelyLogo ? "✅ Sì" : "❌ No"}
        </p>

        <p>
          <strong>Affidabilità:</strong>{" "}
          {analysis.logo.score}%
        </p>

        <p>
          <strong>Motivo:</strong>{" "}
          {analysis.logo.reason}
        </p>

        <hr className="border-zinc-700" />

        <p>
          <strong>Colori stimati:</strong>{" "}
          {analysis.pixels.estimatedColors}
        </p>

        <p>
          <strong>Trasparenza:</strong>{" "}
          {analysis.pixels.hasTransparency ? "✅ Sì" : "❌ No"}
        </p>

        <p>
          <strong>Complessità:</strong>{" "}
          {analysis.colors.complexity}
        </p>

      </div>
    </div>
  );
}