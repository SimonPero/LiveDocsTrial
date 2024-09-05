import { SignUp } from "@clerk/nextjs";
const SigUpPage = () => {
  return (
    <main className="auth-page">
      <SignUp />
    </main>
  );
};

export default SigUpPage;
