import { SignOutButton } from "@/components/sign-out-button";
import { authClient } from "@/lib/auth-client";
import { headers } from "next/headers";

export default async function DashboardPage() {
  const session = await authClient.getSession({
    fetchOptions: {
      headers: await headers(),
      throw: true,
    },
  });

  if (!session) {
    return <div>You are not logged in</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-6">
        <p className="text-xl font-semibold">You are logged in</p>
        <div className="p-4 rounded-lg max-w-2xl">
          <pre className="text-sm text-left overflow-auto">
            {JSON.stringify(session, null, 2)}
          </pre>
        </div>
        <SignOutButton />
      </div>
    </div>
  );
}
