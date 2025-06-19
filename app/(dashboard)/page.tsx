import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { File, PlusCircle, Zap, Code, Palette, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function HomePage() {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg p-8 border">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="h-6 w-6 text-blue-600" />
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              Hackathon Ready
            </Badge>
          </div>
          <h1 className="text-3xl font-bold mb-4">
            Welcome to Your Hackathon Template! 🚀
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Everything you need to build amazing web apps is already set up. 
            Focus on your idea, not the boilerplate.
          </p>
          <div className="flex gap-3">
            <Button size="lg" className="gap-2">
              <Code className="h-4 w-4" />
              Start Building
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Palette className="h-4 w-4" />
              Customize Theme
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Start Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/20">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                <Zap className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-lg">Ready to Go</CardTitle>
            </div>
            <CardDescription>
              No setup required. Start coding immediately with pre-configured tools.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-950/20">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <Code className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-lg">Modern Stack</CardTitle>
            </div>
            <CardDescription>
              Next.js 15, TypeScript, Tailwind CSS, and Shadcn/ui components.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-purple-200 bg-purple-50/50 dark:border-purple-800 dark:bg-purple-950/20">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                <Rocket className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              </div>
              <CardTitle className="text-lg">Deploy Ready</CardTitle>
            </div>
            <CardDescription>
              Production-ready code that scales from prototype to product.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Features Tabs */}
      <Tabs defaultValue="components" className="space-y-4">
        <div className="flex items-center justify-between">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
            <TabsTrigger value="tips">Tips</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="gap-1">
              <File className="h-3.5 w-3.5" />
              Docs
            </Button>
            <Button size="sm" className="gap-1">
              <PlusCircle className="h-3.5 w-3.5" />
              New Project
            </Button>
          </div>
        </div>

        <TabsContent value="components" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pre-built Components</CardTitle>
              <CardDescription>
                Beautiful, accessible components ready to use in your project.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  'Buttons', 'Forms', 'Tables', 'Cards',
                  'Modals', 'Navigation', 'Dropdowns', 'Badges'
                ].map((component) => (
                  <div key={component} className="p-3 border rounded-lg text-center hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="font-medium">{component}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="examples" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Example Implementations</CardTitle>
              <CardDescription>
                See how to build common patterns with this template.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: 'User Dashboard', desc: 'Complete user management interface' },
                  { name: 'Data Tables', desc: 'Sortable, searchable, paginated tables' },
                  { name: 'Authentication', desc: 'Login/logout with GitHub OAuth' },
                  { name: 'Responsive Layout', desc: 'Mobile-first design patterns' }
                ].map((example) => (
                  <div key={example.name} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">{example.name}</div>
                      <div className="text-sm text-muted-foreground">{example.desc}</div>
                    </div>
                    <Button variant="ghost" size="sm">View</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tips" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Hackathon Success Tips</CardTitle>
              <CardDescription>
                Make the most of your hackathon experience with these proven strategies.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: 'Start with the layout',
                    desc: 'Modify navigation and basic structure first to match your vision.'
                  },
                  {
                    title: 'Use mock data',
                    desc: 'Don\'t waste time on database setup. Focus on your core features.'
                  },
                  {
                    title: 'Leverage existing components',
                    desc: 'Remix and reuse what\'s already built. Customize as needed.'
                  },
                  {
                    title: 'Mobile-first approach',
                    desc: 'The responsive design is ready. Test on mobile early and often.'
                  }
                ].map((tip, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium">{tip.title}</div>
                      <div className="text-sm text-muted-foreground">{tip.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}