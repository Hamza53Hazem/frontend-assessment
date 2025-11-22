import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users } from "lucide-react";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
            <Users className="w-10 h-10 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold text-slate-800">
            NOVALEXI Assessment
          </CardTitle>
          <CardDescription className="text-lg">
            Frontend Developer Technical Task
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="text-center text-muted-foreground">
            Select a language to view the Team Directory:
          </div>

          <div className="grid gap-4">
            <Link href="/en/team-directory" className="w-full">
              <Button className="w-full h-12 text-lg" variant={locale === 'en' ? 'default' : 'outline'}>
                🇺🇸 English Interface
              </Button>
            </Link>

            <Link href="/ar/team-directory" className="w-full">
              <Button className="w-full h-12 text-lg font-bold" variant={locale === 'ar' ? 'default' : 'outline'}>
                🇯🇴 الواجهة العربية
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}