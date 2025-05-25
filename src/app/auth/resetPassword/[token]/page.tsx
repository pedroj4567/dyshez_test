import React from "react";
import AuthLayout from "../../AuthLayout";
import AuthCard from "../../components/AuthCard";
import InfoMessages from "../../components/InfoMessages";
import ResetPasswordForm from "../components/ResetPasswordForm";

function page() {
  return (
    <AuthLayout>
      <AuthCard>
        <div className="text-lg font-bold p-3">
          <h2 className="">Reset Password</h2>
        </div>

        <div className="mb-10">
          <InfoMessages
            message="Enter new password"
            defaultContainerClasses="px-3 mb-4"
            textClassName="text-slate-500 text-sm"
          />
        </div>
        <ResetPasswordForm />
      </AuthCard>
    </AuthLayout>
  );
}

export default page;
