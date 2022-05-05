import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link, useForm } from "@inertiajs/inertia-react";

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

const AlertError = ({ errors }) => {
  const errs = Object.entries(errors);
  if (errs.length === 0) return null;
  return (
    <>
      {errs.map(([key, val]) => (
        <div key={key} className="alert alert-error shadow-lg flex flex-col">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{key + " " + val}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Register;
