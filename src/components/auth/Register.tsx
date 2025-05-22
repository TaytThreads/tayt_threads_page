import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { RegisterResolver } from "../../models/resolver";

import type { SubmitHandler } from "react-hook-form";
import type { SignUpFormValues } from "../../models/type";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>({ resolver: RegisterResolver });

  const onSubmit: SubmitHandler<SignUpFormValues> = (data) => console.log(data);

  const handleSocialSignIn = (provider: string) => {
    alert(`Signing in with ${provider} is not implemented yet.`);
  };

  return (
    <div className="bg-sign-up min-h-screen bg-white flex items-center justify-center bg-cover bg-center">
      <div className="md:rounded-[3.125rem] w-full max-w-7xl flex flex-col-reverse md:flex-row overflow-hidden bg-white">
        {/* Left Box */}

        <div className="w-full md:w-1/2 p-6 bg-white rounded-3xl md:rounded-l-none">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block">
                <div className="h-20 w-auto bg-center mb-2">
                  <img
                    src="/public/images/tt-logo-black.png"
                    alt="Logo"
                    className="h-full w-auto"
                  />
                </div>
              </div>
              <h2 className="text-3xl font-light text-gray-800 custom-heading ">
                Hello User !
              </h2>
              <p className="text-gray-500 mt-2 text-sm custom-paragraph">
                Enter below details to create an account
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-5">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>

                <input
                  type="text"
                  {...register("fullName", {
                    required: "Full Name is required",
                  })}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="mb-5">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                  })}
                  placeholder="Confirm your password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
              >
                Sign Up
              </button>
            </form>
            <div className="my-6 flex items-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-sm text-gray-500">Or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <div className="flex items-center justify-center space-x-10">
              <button
                type="button"
                onClick={() => handleSocialSignIn("Google")}
              >
                <img
                  src="/public/icons/google-icon.png"
                  alt="google-sign-in"
                  width={26}
                  height={26}
                />
              </button>
              <button
                type="button"
                onClick={() => handleSocialSignIn("Facebook")}
              >
                <img
                  src="/public/icons/facebook-icon.png"
                  alt="facebook-sign-in"
                  width={24}
                  height={24}
                />
              </button>
              <button
                type="button"
                onClick={() => handleSocialSignIn("Twitter")}
              >
                <img
                  src="/public/icons/twitter-icon.png"
                  alt="twitter-sign-in"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              </button>
            </div>
            <p className="mt-8 text-center text-sm text-gray-600">
              Already have an account ?{" "}
              <Link
                to="/auth/login"
                className="font-medium text-blue-600 hover:text-blue-500 pe-1"
              >
                Login
              </Link>
              Here
            </p>
          </div>
        </div>

        {/* Right Box */}

        <div className="w-full md:w-1/2 p-12 flex flex-col justify-end items-start relative bg-white">
          <div className="bg-sign-up absolute inset-0 bg-cover bg-center rounded-[2.875rem] m-2 bg-white"></div>
          <div className="relative z-10 text-white w-full">
            <h1 className="md:text-end text-4xl sm:text-5xl font-bold mb-6 leading-tight custom-heading">
              Unleash Your
              <br />
              Shopping Spirit!
            </h1>
            <p className="md:text-end text-base sm:text-lg leading-relaxed custom-paragraph max-w-lg">
              Unleash Your Shopping Spirit! and discover a world filled with
              exciting products and exclusive deals that transform shopping from
              a chore into a joyful adventure, tailored just for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
