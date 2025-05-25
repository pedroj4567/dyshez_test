"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "../ui/components";
import AnimationLogoSection from "./components/AnimationLogoSection";
import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isSignUpPage = pathname === "/auth/singup";

  return (
    <div className="min-h-screen flex bg-white ">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center w-2xl md:pt-20 lg:pt-25"
        >
          <Logo />
          <span className="text-pink-600 font-semibold text-xl mt-2">
            ¡Bienvenido de vuelta!
          </span>
        </motion.div>
      </AnimatePresence>
      <div className=" w-full flex  justify-center items-center pr-20  ">
        <div className="flex  shadow-2xl">
          <div
            className={`${
              isSignUpPage ? "w-5xl" : "w-md"
            } z-20 shadow-[10px_0_25px_-5px_rgba(0,0,0,0.1)]`}
          >
            {children}
          </div>

          <AnimatePresence>
            {!isSignUpPage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <AnimationLogoSection />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
