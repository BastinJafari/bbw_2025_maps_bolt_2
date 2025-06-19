import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

export default function DashboardPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dashboard</CardTitle>
        <CardDescription>
          Welcome to your dashboard! This is your starting point.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <p>You can start building your application here.</p>
          <p>
            Modify this page in{' '}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              app/(dashboard)/page.tsx
            </code>
            .
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
