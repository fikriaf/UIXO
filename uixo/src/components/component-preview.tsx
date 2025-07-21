import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, AlertTriangle, Info, X } from "lucide-react";

interface ComponentPreviewProps {
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

export default function ComponentPreview({ component }: ComponentPreviewProps) {
  // Simple component preview renderer based on component name
  switch (component.id) {
    case "loader-vortex":
      return (
        <div className="relative">
          <div className="w-12 h-12 border-4 border-blue-200 rounded-full animate-spin"></div>
          <div className="absolute top-0 left-0 w-12 h-12 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
        </div>
      );

    case "button-primary":
      return (
        <Button className="transform hover:scale-105 transition-all duration-200 shadow-lg">
          Get Started
        </Button>
      );

    case "input-field":
      return (
        <div className="w-full max-w-xs space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
          />
        </div>
      );

    case "product-card":
      return (
        <Card className="w-full max-w-xs">
          <CardHeader className="p-4">
            <div className="w-full h-24 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg mb-3 flex items-center justify-center">
              <span className="text-slate-500 text-sm">Product Image</span>
            </div>
            <CardTitle className="text-sm">MacBook Pro</CardTitle>
            <CardDescription className="text-blue-600 font-bold">$1,999</CardDescription>
          </CardHeader>
        </Card>
      );

    case "alert-success":
      return (
        <Alert className="w-full max-w-xs bg-green-50 border-green-200 text-green-800">
          <CheckCircle className="h-4 w-4" />
          <AlertDescription>
            Success! Your changes have been saved.
          </AlertDescription>
        </Alert>
      );

    case "confirmation-modal":
      return (
        <Card className="w-full max-w-xs">
          <CardHeader>
            <CardTitle className="text-lg">Delete Item</CardTitle>
            <CardDescription>
              Are you sure you want to delete this item?
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1">
              Cancel
            </Button>
            <Button variant="destructive" size="sm" className="flex-1">
              Delete
            </Button>
          </CardContent>
        </Card>
      );

    case "button-secondary":
      return (
        <Button variant="outline">
          Learn More
        </Button>
      );

    case "button-destructive":
      return (
        <Button variant="destructive">
          Delete Account
        </Button>
      );

    case "checkbox-form":
      return (
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="terms" className="rounded" defaultChecked />
          <Label htmlFor="terms" className="text-sm">
            I agree to the terms and conditions
          </Label>
        </div>
      );

    case "user-card":
      return (
        <Card className="w-full max-w-xs">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                JD
              </div>
              <div>
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-slate-500">Software Engineer</p>
              </div>
            </div>
          </CardContent>
        </Card>
      );

    case "alert-error":
      return (
        <Alert className="w-full max-w-xs bg-red-50 border-red-200 text-red-800">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            Error! Something went wrong.
          </AlertDescription>
        </Alert>
      );

    case "alert-warning":
      return (
        <Alert className="w-full max-w-xs bg-yellow-50 border-yellow-200 text-yellow-800">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            Warning! Please check your input.
          </AlertDescription>
        </Alert>
      );

    case "alert-info":
      return (
        <Alert className="w-full max-w-xs bg-blue-50 border-blue-200 text-blue-800">
          <Info className="h-4 w-4" />
          <AlertDescription>
            Info! Here's some helpful information.
          </AlertDescription>
        </Alert>
      );

    case "simple-navbar":
      return (
        <div className="w-full max-w-md bg-white border border-slate-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-blue-500 rounded"></div>
              <span className="font-semibold text-sm">Brand</span>
            </div>
            <nav className="flex space-x-4 text-sm">
              <a href="#" className="text-slate-600 hover:text-blue-600">Home</a>
              <a href="#" className="text-slate-600 hover:text-blue-600">About</a>
            </nav>
          </div>
        </div>
      );

    case "basic-tabs":
      return (
        <Tabs defaultValue="account" className="w-full max-w-sm">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="p-4 text-center text-sm text-slate-600">
            Account settings
          </TabsContent>
          <TabsContent value="password" className="p-4 text-center text-sm text-slate-600">
            Password settings
          </TabsContent>
        </Tabs>
      );

    case "tooltip-hover":
      return (
        <div className="relative group">
          <Button variant="outline" size="sm">
            Hover me
          </Button>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Tooltip text
          </div>
        </div>
      );

    case "data-table":
      return (
        <div className="w-full max-w-md bg-white border border-slate-200 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Role</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">John Doe</td>
                <td className="px-4 py-2">Developer</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Jane Smith</td>
                <td className="px-4 py-2">Designer</td>
              </tr>
            </tbody>
          </table>
        </div>
      );

    default:
      return (
        <div className="text-slate-400 text-sm">
          Component preview not available
        </div>
      );
  }
}
