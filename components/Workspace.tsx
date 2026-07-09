import UploadArea from "./UploadArea";
import PropertiesPanel from "./PropertiesPanel";
import AnalysisPanel from "./AnalysisPanel";
import FabricCanvas from "./FabricCanvas";

import { ImageInfo } from "@/engine/imageAnalyzer";
import { ForgeAnalysis } from "@/engine/forgeEngine";

type WorkspaceProps = {
  image: string | null;
  info: ImageInfo | null;
  analysis: ForgeAnalysis | null;
  dimensions: {
    width: number;
    height: number;
  };
  onSelect: (file: File) => void;
};

export default function Workspace({
  image,
  info,
  analysis,
  dimensions,
  onSelect,
}: WorkspaceProps) {
  return (
    <div className="grid grid-cols-12 gap-6 mt-8">

      {/* Sidebar sinistra */}
      <div className="col-span-3">
        <UploadArea onSelect={onSelect} />
      </div>

      {/* Canvas Fabric */}
      <div className="col-span-6">
        <FabricCanvas image={image} />
      </div>

      {/* Sidebar destra */}
      <div className="col-span-3 space-y-6">
        <PropertiesPanel
          fileName={info?.name}
          fileSize={info?.size}
          width={dimensions.width}
          height={dimensions.height}
        />

        <AnalysisPanel analysis={analysis} />
      </div>

    </div>
  );
}