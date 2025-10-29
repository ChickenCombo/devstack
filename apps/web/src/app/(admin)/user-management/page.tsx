import { authClient } from "@/lib/auth-client";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function UserManagement() {
  const session = await authClient.getSession({
    fetchOptions: {
      headers: await headers(),
      throw: true,
    },
  });

  if (!session) {
    redirect("/dashboard");
  }

  return (
    <div>
      <h1>User Management</h1>
    </div>
  );
}
