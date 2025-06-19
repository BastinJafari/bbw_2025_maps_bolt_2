import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Palette,
  Code,
  Zap,
  Sparkles,
  Rocket,
  Heart
} from 'lucide-react';

export default function PlaygroundPage() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg p-8 border">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-purple-600" />
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              Experimental
            </Badge>
          </div>
          <h1 className="text-3xl font-bold mb-4">
            Playground & Experiments 🎨
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            This is your creative space! Try new ideas, experiment with components, 
            and build something amazing.
          </p>
          <div className="flex gap-3">
            <Button size="lg" className="gap-2">
              <Rocket className="h-4 w-4" />
              Start Experimenting
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Code className="h-4 w-4" />
              View Code
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="colors" className="space-y-4">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="colors">Colors</TabsTrigger>
          <TabsTrigger value="layouts">Layouts</TabsTrigger>
          <TabsTrigger value="ideas">Ideas</TabsTrigger>
        </TabsList>

        <TabsContent value="colors" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Color Palette Playground</CardTitle>
              <CardDescription>
                Experiment with different color combinations and themes.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Primary Colors */}
              <div>
                <h3 className="font-semibold mb-3">Primary Colors</h3>
                <div className="grid grid-cols-6 gap-2">
                  {[
                    'bg-blue-500', 'bg-purple-500', 'bg-green-500', 
                    'bg-red-500', 'bg-yellow-500', 'bg-pink-500'
                  ].map((color, index) => (
                    <div key={index} className={`h-16 rounded-lg ${color} cursor-pointer hover:scale-105 transition-transform`} />
                  ))}
                </div>
              </div>

              {/* Gradient Examples */}
              <div>
                <h3 className="font-semibold mb-3">Gradient Examples</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-24 rounded-lg bg-gradient-to-r from-blue-400 to-purple-600 flex items-center justify-center text-white font-medium">
                    Blue → Purple
                  </div>
                  <div className="h-24 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-white font-medium">
                    Green → Blue
                  </div>
                  <div className="h-24 rounded-lg bg-gradient-to-r from-pink-400 to-red-500 flex items-center justify-center text-white font-medium">
                    Pink → Red
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="layouts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Layout Experiments</CardTitle>
              <CardDescription>
                Try different layout patterns and component arrangements.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Card Grid */}
              <div>
                <h3 className="font-semibold mb-3">Card Grid Layout</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">Card {i}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          This is a sample card with some content to demonstrate the layout.
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Feature List */}
              <div>
                <h3 className="font-semibold mb-3">Feature List Layout</h3>
                <div className="space-y-3">
                  {[
                    { icon: Zap, title: 'Lightning Fast', desc: 'Built for speed and performance' },
                    { icon: Heart, title: 'Made with Love', desc: 'Crafted with attention to detail' },
                    { icon: Rocket, title: 'Ready to Launch', desc: 'Deploy anywhere, anytime' }
                  ].map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div key={index} className="flex items-start gap-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground">{feature.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ideas" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Project Ideas & Inspiration</CardTitle>
              <CardDescription>
                Get inspired with these hackathon project ideas you can build with this template.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Social Dashboard',
                    desc: 'Build a social media management tool with analytics and scheduling.',
                    tags: ['Social', 'Analytics', 'Scheduling']
                  },
                  {
                    title: 'Project Tracker',
                    desc: 'Create a project management app with tasks, timelines, and collaboration.',
                    tags: ['Productivity', 'Teams', 'Planning']
                  },
                  {
                    title: 'Learning Platform',
                    desc: 'Develop an educational platform with courses, progress tracking, and quizzes.',
                    tags: ['Education', 'Progress', 'Interactive']
                  },
                  {
                    title: 'Event Organizer',
                    desc: 'Build an event management system with RSVPs, schedules, and notifications.',
                    tags: ['Events', 'Calendar', 'Notifications']
                  },
                  {
                    title: 'Health Tracker',
                    desc: 'Create a wellness app with habit tracking, goals, and progress visualization.',
                    tags: ['Health', 'Habits', 'Goals']
                  },
                  {
                    title: 'Finance Manager',
                    desc: 'Develop a personal finance tool with budgeting, expense tracking, and insights.',
                    tags: ['Finance', 'Budgeting', 'Analytics']
                  }
                ].map((idea, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{idea.title}</CardTitle>
                      <CardDescription>{idea.desc}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1">
                        {idea.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}