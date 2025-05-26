import {
  Button,
  InputField,
  PhoneInputField,
  TermsCheckbox,
} from "@/ui/components";
import AuthLayout from "../AuthLayout";
import AuthCard from "../components/AuthCard";
import AuthTabs from "../components/AuthTabs";
import InfoMessages from "../components/InfoMessages";
import { LuUserRound } from "react-icons/lu";
import { FiSmartphone, FiPhone } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import { MdOutlineMailOutline } from "react-icons/md";
import { RxLockClosed } from "react-icons/rx";
import { Arrow } from "@/ui/components/icons";

const page = () => {
  return (
    <AuthLayout>
      <AuthCard>
        <AuthTabs />
        <InfoMessages
          textClassName="text-center text-md "
          message="Únete a la revolución, para comenzar a utilizar la plataforma ingresa los siguientes datos y se parte del movimiento de Dyshez."
        />

        <form className="flex flex-col gap-2 md:gap-5 ">
          <div className="flex  justify-center gap-15">
            <InputField
              type="text"
              placeholder="Nombre(s) *"
              icon={LuUserRound}
              containerWidth="w-90"
            />
            <InputField
              type="text"
              placeholder="Apellido(s) *"
              icon={LuUserRound}
              containerWidth="w-90"
            />
          </div>

          <div className="flex  justify-center gap-15">
            <PhoneInputField
              type="text"
              className="font-bold"
              placeholder="123 456 7890 *"
              icon={FiSmartphone}
              containerWidth="w-90"
            />
            <PhoneInputField
              type="text"
              className="font-bold"
              placeholder="123 456 7890 *"
              icon={FiPhone}
              containerWidth="w-90"
            />
          </div>
          <div className="flex  justify-center gap-15">
            <InputField
              type="text"
              placeholder="Sitio Web"
              icon={TbWorld}
              containerWidth="w-90"
            />
            <InputField
              type="text"
              placeholder="Email *"
              icon={MdOutlineMailOutline}
              containerWidth="w-90"
            />
          </div>

          <div className="flex  justify-center gap-15">
            <InputField
              type="password"
              placeholder="Contraseña *"
              // onChange={(e) => setPassword(e.target.value)}
              icon={RxLockClosed}
              containerWidth="w-90"
            />

            <InputField
              type="password"
              placeholder="Verificar contraseña *"
              // onChange={(e) => setPassword(e.target.value)}
              icon={RxLockClosed}
              containerWidth="w-90"
            />
          </div>

          <div className="flex  justify-center mt-2">
            <TermsCheckbox />
          </div>

          <div className="flex justify-center items-center gap-3 flex-col">
            <Button type="submit" className="w-40 ">
              Continuar <Arrow />
            </Button>
            <p className="text-sm text-center text-gray-500">
              Si ya tienes un restaurante en Dyshez y quieres agregar una{" "}
              <span className="text-center text-gray-500 font-bold">
                nueva sucursal
              </span>
              , conoce cómo hacerlo
            </p>
          </div>
        </form>
      </AuthCard>
    </AuthLayout>
  );
};

export default page;
