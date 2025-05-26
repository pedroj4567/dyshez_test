import AuthLayout from "../AuthLayout";
import AuthCard from "../components/AuthCard";
import AuthTabs from "../components/AuthTabs";
import InfoMessages from "../components/InfoMessages";
import { SignupForm } from "./components";

const page = () => {
  return (
    <AuthLayout>
      <AuthCard>
        <AuthTabs />
        <InfoMessages
          textClassName="text-center text-md "
          message="Únete a la revolución, para comenzar a utilizar la plataforma ingresa los siguientes datos y se parte del movimiento de Dyshez."
        />
        <SignupForm />
      </AuthCard>
    </AuthLayout>
  );
};

export default page;
