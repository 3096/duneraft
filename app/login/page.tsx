"use client";

import { createClient } from "@/utils/supabase/client";

export default function LoginPage() {
  const supabase = createClient();

  const loginWithDiscord = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "discord",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
        scopes: "identify",
      },
    });
  };

  return (
    <button type="button" onClick={loginWithDiscord}>
      Log in with Discord
    </button>
  );
}
