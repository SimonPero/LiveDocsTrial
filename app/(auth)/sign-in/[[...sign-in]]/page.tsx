import { SignIn } from "@clerk/nextjs";
const SigInPage = () => {
  return (
    <main className="auth-page">
      <SignIn />
    </main>
  );
};

export default SigInPage;
