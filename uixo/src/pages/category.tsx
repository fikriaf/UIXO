import { useParams } from "wouter";
import ComponentCard from "@/components/component-card";
import { allComponents, categories } from "@/data/components";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Category() {
  const { category } = useParams<{ category: string }>();
  
  const categoryComponents = allComponents.filter(
    component => component.category.toLowerCase() === category?.toLowerCase()
  );

  const categoryInfo = categories.find(
    cat => cat.id.toLowerCase() === category?.toLowerCase()
  );

  if (!categoryInfo) {
    return (
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Category not found</h1>
          <Link href="/components">
            <Button variant="outline">Back to Components</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link href="/components">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Components
            </Button>
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${categoryInfo.color}`}>
              <categoryInfo.icon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-800">{categoryInfo.name}</h1>
              <p className="text-slate-600">{categoryInfo.description}</p>
            </div>
          </div>
          <p className="text-sm text-slate-500">{categoryComponents.length} components</p>
        </div>

        {categoryComponents.length === 0 ? (
          <div className="text-center py-12">
            <categoryInfo.icon className="mx-auto h-12 w-12 text-slate-400 mb-4" />
            <h3 className="text-lg font-medium text-slate-900 mb-2">No components yet</h3>
            <p className="text-slate-600">Components for this category are coming soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryComponents.map((component) => (
              <ComponentCard key={component.id} component={component} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
