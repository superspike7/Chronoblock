import React from "react";
import { Link, useForm } from "@inertiajs/inertia-react";
import AlertError from "../../components/utils/AlertError";

const Register = () => {
  const { data, setData, errors, post, progress } = useForm({
    user: {
      email: "",
      name: "",
      password: "",
      password_confirmation: "",
    },
  });

  function handleChange(e) {
    const { value, id } = e.target;
    setData({
      user: {
        ...data.user,
        [id]: value,
      },
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    post("/register");
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="form-control gap-3 w-full max-w-md bg-neutral text-neutral-content rounded-xl p-8">
        <h2 className="text-4xl text-center font-bold">Register</h2>
        <AlertError errors={errors} />
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div className="w-full">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              value={data.email}
              onChange={handleChange}
              id="email"
              className="input w-full text-gray-900"
            />
          </div>

          <div className="w-full">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              value={data.name}
              onChange={handleChange}
              id="name"
              className="input w-full text-gray-900"
            />
          </div>

          <div className="w-full">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              value={data.password}
              onChange={handleChange}
              id="password"
              className="input w-full text-gray-900"
            />
          </div>

          <div className="w-full">
            <label htmlFor="password_confirmation">
              Password Confirmation:
            </label>
            <input
              type="password"
              value={data.password_confirmation}
              onChange={handleChange}
              id="password_confirmation"
              className="input w-full text-gray-900"
            />
          </div>
          <button className="mt-5 w-full btn btn-primary">Register</button>
          <Link
            href="/login"
            className="btn btn-outline btn-primary w-full mt-2"
            disabled={progress}
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
