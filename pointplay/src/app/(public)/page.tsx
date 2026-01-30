import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <Card className="w-full max-w-xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
          Phase 1A
        </p>
        <h1 className="mt-4 text-4xl font-bold text-white">PointPlay</h1>
        <p className="mt-3 text-base text-slate-300">
          Your foundation build is ready. Choose a portal to continue.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/auth/login">User Login</ButtonLink>
          <ButtonLink href="/admin/login" variant="outline">
            Admin Login
          </ButtonLink>
        </div>
      </Card>
    </main>
  );
}
