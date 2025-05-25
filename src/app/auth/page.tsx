import AuthLayout from "./AuthLayout";
import AuthCard from "./components/AuthCard";
import AuthTabs from "./components/AuthTabs";
import LoginForm from "./components/LoginForm";
import SocialLoginButtons from "./components/SocialLoginButtons";
import InfoMessages from "./components/InfoMessages";

export default function AuthPage() {
  return (
    <AuthLayout>
      <AuthCard>
        <AuthTabs />
        <div className="my-5">
          <InfoMessages
            message="Ingresa con tu correo electrónico o tu número de teléfono"
            textClassName="text-center"
          />
        </div>
        <LoginForm />
        <SocialLoginButtons />
      </AuthCard>
    </AuthLayout>
  );
}
