import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Github, Heart, Zap, Code, Palette, Smartphone } from "lucide-react";

export default function About() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">About UIXO</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Your go-to destination for modern, accessible, and beautiful components
            built with HTML, CSS, JS.
          </p>
        </div>

        {/* Mission */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 leading-relaxed">
              UIXO was created to solve a common problem developers face: spending countless hours 
              building the same UI components over and over again. We believe that beautiful, accessible, 
              and well-coded components should be readily available to everyone, allowing developers to 
              focus on what matters most - building great products.
            </p>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                Lightning Fast
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Copy and paste components in seconds. No complex installations or configurations required.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-blue-500" />
                Production Ready
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                All components are thoroughly tested and optimized for production use with best practices.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-purple-500" />
                Customizable
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Built with HTML, CSS, JS, making customization and theming incredibly easy and flexible.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-green-500" />
                Mobile First
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Every component is designed with mobile-first approach, ensuring great user experience across all devices.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Tech Stack */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Built With</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">Vite</Badge>
              <Badge variant="secondary">Radix UI</Badge>
              <Badge variant="secondary">Lucide Icons</Badge>
              <Badge variant="secondary">Framer Motion</Badge>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Ready to Get Started?</h2>
          <p className="text-slate-600 mb-6">
            Explore our component library and start building beautiful interfaces today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/components">
              <Button size="lg">Browse Components</Button>
            </Link>
            <Button variant="outline" size="lg">
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
