import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ComponentCard from "@/components/component-card";
import { featuredComponents } from "@/data/components";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-violet-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6 animate-fade-in">
              Beautiful UI Components
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                {" "}Ready to Use
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto animate-fade-in">
              Discover, preview, and copy modern components built with HTML, CSS, JS.
              Save hours of development time with our curated collection of production-ready components.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link href="/components">
                <Button size="lg" className="px-8 py-3 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Browse Components
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="px-8 py-3 transition-all duration-200">
                  View Documentation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Components */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">Featured Components</h2>
            <p className="text-slate-600">Popular and recently added components</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredComponents.map((component) => (
              <ComponentCard key={component.id} component={component} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/components">
              <Button variant="outline" size="lg" className="px-8 py-3">
                Load More Components
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Trusted by Developers</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Join thousands of developers who are building faster with our component library</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1,200+</div>
              <div className="text-slate-600">Components</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">25K+</div>
              <div className="text-slate-600">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-slate-600">Contributors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-slate-600">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
