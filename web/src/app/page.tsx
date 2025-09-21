import { MainLayout } from '@/components/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome to your Viral App dashboard
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-card rounded-lg border border-border">
            <h3 className="text-lg font-semibold mb-2">Total Users</h3>
            <p className="text-3xl font-bold text-primary">1,234</p>
            <p className="text-sm text-muted-foreground">+12% from last month</p>
          </div>
          
          <div className="p-6 bg-card rounded-lg border border-border">
            <h3 className="text-lg font-semibold mb-2">Revenue</h3>
            <p className="text-3xl font-bold text-primary">$12,345</p>
            <p className="text-sm text-muted-foreground">+8% from last month</p>
          </div>
          
          <div className="p-6 bg-card rounded-lg border border-border">
            <h3 className="text-lg font-semibold mb-2">Active Sessions</h3>
            <p className="text-3xl font-bold text-primary">567</p>
            <p className="text-sm text-muted-foreground">+23% from last month</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
