"use client"

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 h-screen items-center justify-center">
      <Button
        onClick={() => signIn("github", { callbackUrl: "http://localhost:3000/dashboard" })}
      >Login com Github</Button>
      <Button
        onClick={() => signIn("google", { callbackUrl: "http://localhost:3000/dashboard" })}
      >Login com Google</Button>
    </div>
  );
}
