import React from "react";
import Field from "../common/Field";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const SubmitForm = (formData) => {
    console.log(formData);
  };
  return (
    <form
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
      onSubmit={handleSubmit(SubmitForm)}
    >
      {/* email */}
      <Field label="Email" error={errors.email}>
        <input
          className={`auth-input  ${
            errors.email ? "border-red-500" : "border-gray-200"
          }`}
          name="email"
          type="email"
          id="email"
          {...register("email", { required: "Email is Required" })}
        />
      </Field>
      {/* password */}
      <Field label="Password" error={errors.password}>
        <input
          className={`auth-input  ${
            errors.password ? "border-red-500" : "border-gray-200"
          }`}
          name="password"
          type="password"
          id="password"
          {...register("password", {
            required: "Password is Required",
            minLength: {
              value: 8,
              message: "Your password must be at least 8 characters",
            },
          })}
        />
      </Field>

      {/* Submit */}
      <Field>
        <button
          className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90 cursor-pointer"
          type="submit"
        >
          Login
        </button>
      </Field>
    </form>
  );
}
