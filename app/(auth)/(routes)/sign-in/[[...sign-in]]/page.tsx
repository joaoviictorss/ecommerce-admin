import { SignIn } from "@clerk/nextjs";

export default function Home() {
  return <SignIn path="/sign-in" />;
}
