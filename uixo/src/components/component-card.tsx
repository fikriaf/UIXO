import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, Eye } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import ComponentDetailModal from "./component-detail-modal";
import ComponentPreview from "./component-preview";
import { categories } from "@/data/components";

interface ComponentCardProps {
  component: {
    id: string;
    name: string;
    category: string;
    description: string;
    code: string;
    preview?: string;
    tags?: string[];
  };
}

export default function ComponentCard({ component }: ComponentCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  const categoryInfo = categories.find(
    cat => cat.id.toLowerCase() === component.category.toLowerCase()
  );

  const handleCopyCode = () => {
    copyToClipboard(component.code);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all duration-300 group">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-800">{component.name}</h3>
            <Badge 
              variant="secondary" 
              className={categoryInfo?.color || "bg-slate-100 text-slate-600"}
            >
              {component.category}
            </Badge>
          </div>
          
          {/* Component Preview */}
          <div className="bg-slate-50 rounded-lg p-8 mb-4 flex items-center justify-center min-h-[120px]">
            <ComponentPreview component={component} />
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 hover:bg-blue-600 hover:text-white transition-all duration-200 group-hover:bg-blue-50"
              onClick={handleCopyCode}
            >
              <Copy className="mr-2 h-4 w-4" />
              {isCopied ? "Copied!" : "Copy Code"}
            </Button>
            <Button
              size="sm"
              onClick={() => setIsModalOpen(true)}
            >
              <Eye className="mr-2 h-4 w-4" />
              View
            </Button>
          </div>
        </div>
      </div>

      <ComponentDetailModal
        component={component}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
