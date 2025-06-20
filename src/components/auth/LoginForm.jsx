import React from "react";
import Field from "../common/Field";

export default function LoginForm() {
  return (
    <form className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]">
      {/* email */}
      <Field label="Email">
        <input className="auth-input" name="email" type="email" id="email" />
      </Field>
      {/* password */}
      <Field label="Password">
        <input
          className="auth-input"
          name="password"
          type="password"
          id="password"
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
