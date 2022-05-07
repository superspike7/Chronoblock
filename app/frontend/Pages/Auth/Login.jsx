import React, { useEffect, useState } from "react";
import AlertError from "../../components/utils/AlertError";
import { Inertia } from "@inertiajs/inertia";
import { Link, usePage } from "@inertiajs/inertia-react";

const Login = () => {
  const { flash } = usePage().props;
  const [error, setError] = useState({});
  const [inputVals, setInputVals] = useState({
    email: "",
    password: "",
    remember_me: null,
  });

  useEffect(() => {
    if (flash.alert) {
      setError({ Error: flash.alert });
    }
  }, [flash]);

  function handleChange(e) {
    const { value, id } = e.target;
    setInputVals({
      ...inputVals,
      [id]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const userData = { user: { ...inputVals } };
    Inertia.post("/login", userData);
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="form-control gap-3 w-full max-w-md bg-neutral text-neutral-content rounded-xl p-8">
        <h2 className="text-4xl text-center font-bold">Log in</h2>
        <AlertError errors={error} />
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div className="w-full">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              value={inputVals.email}
              onChange={handleChange}
              id="email"
              className="input w-full text-gray-900"
            />
          </div>
          <div className="w-full">
            <label htmlFor="email">Password:</label>
            <input
              type="password"
              value={inputVals.password}
              onChange={handleChange}
              id="password"
              className="input w-full text-gray-900"
            />
          </div>
          <div className="flex items-center gap-2 mt-4">
            <input type="checkbox" className="checkbox checkbox-primary" />
            <label>Remember Me</label>
          </div>
          <button className="mt-5 w-full btn btn-primary">Login</button>
          <Link
            href="/register"
            className="btn btn-outline btn-primary w-full mt-2"
          >
            Register
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
