import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { signInWithGitHub } from './actions';
import { Zap, Github } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex justify-center items-start md:items-center p-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-950">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
              <Zap className="h-6 w-6 text-primary-foreground" />
            </div>
          </div>
          <CardTitle className="text-2xl">Welcome Back!</CardTitle>
          <CardDescription>
            Sign in to access your hackathon template and start building amazing projects.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <form action={signInWithGitHub} className="w-full">
            <Button className="w-full gap-2" size="lg">
              <Github className="h-4 w-4" />
              Continue with GitHub
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}