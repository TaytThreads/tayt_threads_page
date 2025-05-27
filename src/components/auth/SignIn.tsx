import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { LoginResolver } from "../../models/resolver";
import { handleSignIn } from "../../services/authService";
import {
  GoogleIcon,
  FacebookIcon,
  TwitterIcon,
} from "../../assets/icons/index.ts";
import { TaytThreadsLogo } from "../../assets/images/index.ts";
import type { SubmitHandler } from "react-hook-form";
import type { LoginFormValues } from "../../models/type";

const SignIn = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({ resolver: LoginResolver });

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    const { isSignedIn } = await handleSignIn(data.email, data.password);

    if (isSignedIn || nextStep.signInStep === "DONE") {
      console.log("Successfully signed in.");
      navigate("/", { replace: true });
    }
  };

  const handleSocialSignIn = (provider: string) => {
    alert(`Signing in with ${provider} is not implemented yet.`);
  };

  return (
    <div className="bg-sign-in min-h-screen bg-white flex items-center justify-center bg-cover bg-center">
      <div className="md:rounded-[3.125rem] w-full max-w-7xl flex flex-col md:flex-row overflow-hidden bg-white">
        {/* Left Box */}
        <div className="w-full md:w-1/2 p-12 flex flex-col justify-end items-start relative bg-white">
          <div className="bg-sign-in absolute inset-0 bg-cover bg-center rounded-[2.875rem] m-2 bg-white"></div>
          <div className="relative z-10 text-white w-full">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight custom-heading">
              Everyday <br />
              Must-Haves
            </h1>
            <p className="text-base sm:text-lg leading-relaxed custom-paragraph max-w-md">
              With just one click access all the custom items you need for your
              day-to-day life.
            </p>
          </div>
        </div>

        {/* Right Box */}
        <div className="w-full md:w-1/2 p-6 bg-white rounded-3xl md:rounded-l-none">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block">
                <div className="h-20 w-auto bg-center mb-2">
                  <Link to="/">
                    <img
                      src={TaytThreadsLogo}
                      alt="Logo"
                      className="h-full w-auto"
                    />
                  </Link>
                </div>
              </div>
              <h2 className="text-3xl font-light text-gray-800 custom-heading ">
                Welcome Back
              </h2>
              <p className="text-gray-500 mt-2 text-sm custom-paragraph">
                Enter your email and password to access your account
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
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
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    {...register("rememberMe")}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Remember Me
                  </label>
                </div>
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:text-blue-500"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Forgot Password is not implemented yet.");
                  }}
                >
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
              >
                Sign In
              </button>
            </form>
            <div className="my-6 flex items-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-sm text-gray-500">Or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <div className="space-y-3 custom-paragraph font-medium text-md md:text-sm">
              <button
                type="button"
                className="social-auth space-x-4 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition duration-200"
                onClick={() => handleSocialSignIn("Google")}
              >
                <img
                  src={GoogleIcon}
                  alt="google-sign-in"
                  width={24}
                  height={24}
                />
                <p>Sign in with Google</p>
              </button>
              <button
                type="button"
                className="social-auth space-x-4 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition duration-200"
                onClick={() => handleSocialSignIn("Facebook")}
              >
                <img
                  src={FacebookIcon}
                  alt="facebook-sign-in"
                  width={24}
                  height={24}
                />
                <p>Sign in with Facebook</p>
              </button>
              <button
                type="button"
                className="social-auth space-x-4 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition duration-200"
                onClick={() => handleSocialSignIn("Twitter")}
              >
                <img
                  src={TwitterIcon}
                  alt="twitter-sign-in"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <p>Sign in with Twitter</p>
              </button>
            </div>
            <p className="mt-8 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/auth/register"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
