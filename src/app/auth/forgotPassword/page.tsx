import React from "react";
import AuthLayout from "../AuthLayout";
import AuthCard from "../components/AuthCard";
import InfoMessages from "../components/InfoMessages";
import { ForgotPasswordForm } from "./components";

const page = () => {
  return (
    <AuthLayout>
      <AuthCard>
        <div className="text-lg font-bold p-3">
          <h2 className="">Forgot Password</h2>
        </div>
        <div className="mb-10">
          <InfoMessages
            message="Enter the email associated with your account and we will send you an email with instructions for forgetting your password"
            defaultContainerClasses="px-3 mb-4"
          />
        </div>
        <ForgotPasswordForm />
      </AuthCard>
    </AuthLayout>
  );
};

export default page;
