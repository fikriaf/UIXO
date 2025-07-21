import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, X } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import ComponentPreview from "./component-preview";
import { categories } from "@/data/components";

interface ComponentDetailModalProps {
  component: {
    id: string;
    name: string;
    category: string;
    description: string;
    code: string;
    preview?: string;
    tags?: string[];
  };
  isOpen: boolean;
  onClose: () => void;
}

export default function ComponentDetailModal({
  component,
  isOpen,
  onClose,
}: ComponentDetailModalProps) {
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  const categoryInfo = categories.find(
    cat => cat.id.toLowerCase() === component.category.toLowerCase()
  );

  const handleCopyCode = () => {
    copyToClipboard(component.code);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <DialogTitle className="text-2xl font-bold text-slate-800">
                {component.name}
              </DialogTitle>
              <Badge 
                variant="secondary" 
                className={categoryInfo?.color || "bg-slate-100 text-slate-600"}
              >
                {component.category}
              </Badge>
            </div>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Component Preview */}
          <div className="bg-slate-50 rounded-lg p-8 flex items-center justify-center min-h-[200px]">
            <ComponentPreview component={component} />
          </div>
          
          {/* Component Description */}
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-3">Description</h3>
            <p className="text-slate-600">{component.description}</p>
          </div>

          {/* Tags */}
          {component.tags && component.tags.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {component.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          
          {/* Source Code */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-slate-800">Source Code</h3>
              <Button onClick={handleCopyCode} size="sm">
                <Copy className="mr-2 h-4 w-4" />
                {isCopied ? "Copied!" : "Copy Code"}
              </Button>
            </div>
            <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-slate-300">
                <code>{component.code}</code>
              </pre>
            </div>
          </div>
          
          {/* Usage Instructions */}
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-3">Usage</h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                <strong>1.</strong> Copy the component code above<br />
                <strong>2.</strong> Make sure you have the required dependencies installed<br />
                <strong>3.</strong> Import and use the component in your React application
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
