import { auth, signIn } from "@/auth";

export default async function SignIn() {
  const session = await auth();
  return (
    <form
      action={async () => {
        "use server";
        await signIn("discord");
      }}
    >
      <p>you are {session ? "signed in" : "not signed in"}</p>
      <button type="submit">Signin with Discord</button>
    </form>
  );
}
