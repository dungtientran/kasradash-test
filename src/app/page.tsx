import { redirect } from "next/navigation";

export default function Page() {
  const user = true;

  if (!user) {
    return redirect("/auth/sign-in");
  } else {
    redirect("/dashboard");
  }
}
