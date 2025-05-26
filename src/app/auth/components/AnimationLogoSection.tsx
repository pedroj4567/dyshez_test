import { LanguageSwitcher } from "@/ui/components";
import Image from "next/image";
import { Circle, Dyamonds, SmallCircle, Waves } from "./shapes";

const AnimationLogoSection = () => {
  return (
    <div className="w-full lg:w-[40vw] md:w-[60vw] flex items-center justify-center relative bg-gray-50 overflow-hidden min-h-[400px] md:min-h-[500px] h-full">
      <div className="absolute top-5 right-5 md:right-10 lg:right-15 z-10">
        <LanguageSwitcher />
      </div>

      <div className="w-[80%] md:w-[70%] lg:w-[60%] relative">
        <Image
          src="/logoSectionAuth.gif"
          alt="Ilustración de autenticación"
          width={420}
          height={420}
          className="w-full h-auto object-contain"
          priority
          unoptimized
        />
      </div>

      <Waves className="absolute top-10 md:top-20 left-2 md:left-5 scale-100 md:scale-125" />
      <Dyamonds className="absolute -top-2 md:-top-5 scale-100 md:scale-150 left-40  md:left-55 lg:left-77 rotate-270" />
      <Dyamonds className="absolute left-2 md:left-0 rotate-360 bottom-10 md:bottom-21 scale-75 md:scale-100" />
      <Waves className="absolute scale-100 md:scale-150 right-2 md:right-9 bottom-20 md:bottom-50" />
      <Circle className="absolute right-10 md:right-30 top-20 md:top-40 scale-100 md:scale-125" />
      <SmallCircle className="absolute scale-100 md:scale-150 left-10 md:left-25 top-40 md:top-76" />
    </div>
  );
};

export default AnimationLogoSection;
