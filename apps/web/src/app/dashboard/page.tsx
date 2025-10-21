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
    <div>
      <p>You are logged in</p>
      <SignOutButton />
    </div>
  );
}
