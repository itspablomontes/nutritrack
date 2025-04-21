import RegisterForm from "@/components/auth/RegisterForm";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Register() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white shadow-md  p-8 rounded-md w-full flex flex-col gap-5 md:max-w-lg items-center">
        <Icon
          icon="tabler:leaf"
          width="35"
          height="35"
          style={{ color: "var(--accent)" }}
        />
        <h1 className="text-2xl font-bold">Join NutriTrack!</h1>
        <p className="text-accent-primary">
          Start your journey to a healthier life
        </p>
        <RegisterForm />
      </div>
    </main>
  );
}
