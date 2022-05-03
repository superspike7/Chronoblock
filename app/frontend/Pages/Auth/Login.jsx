import React from "react";

const Login = () => {
  return (
    <div class="h-screen w-screen flex justify-center items-center">
      <div class="form-control gap-3 w-full max-w-md bg-neutral text-neutral-content rounded-xl p-8">
        <h2 class="text-4xl text-center font-bold">Log in</h2>
        <form className="flex flex-col gap-2">
          <div className="w-full">
            <label htmlFor="email">Email:</label>
            <input type="email" className="input w-full text-gray-900" />
          </div>
          <div className="w-full">
            <label htmlFor="email">Password:</label>
            <input type="password" className="input w-full text-gray-900" />
          </div>
          <div className="flex items-center gap-2 mt-4">
            <input type="checkbox" className="checkbox checkbox-primary" />
            <label>Remember Me</label>
          </div>
          <button className="mt-5 w-full btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
