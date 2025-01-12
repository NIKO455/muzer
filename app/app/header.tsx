import Link from "next/link";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Header() {
  const session = useSession();
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
        <Link href="#" className="mr-6 flex">
          <span className="font-semibold text-xl">Muzer</span>
        </Link>
        <div className="ml-auto flex gap-2">
          {session?.status === "unauthenticated" && session?.data === null && (
            <Button
              onClick={() => signIn()}
              variant="outline"
              className="justify-self-end px-2 py-1 text-xs"
            >
              Sign in
            </Button>
          )}
          {session?.status === "authenticated" && session?.data !== null && (
            <Button
              onClick={() => signOut()}
              className="justify-self-end px-2 py-1 text-xs"
            >
              Sign out
            </Button>
          )}
        </div>
      </header>
    </div>
  );
}
