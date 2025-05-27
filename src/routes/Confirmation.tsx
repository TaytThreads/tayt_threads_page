import { Link, useParams, useNavigate } from "react-router-dom";

import { handleConfirmSignUp } from "../services/authService";
import { TaytThreadsEmail } from "../assets/images";

const Confirmation = () => {
  const { email } = useParams<{ email: string }>();
  const navigate = useNavigate();

  if (!email) {
    return (
      <div className="bg-confirm-email min-h-screen bg-white flex items-center justify-center bg-cover bg-center">
        <div className="w-full max-w-2xl h-auto flex md:rounded-[3.125rem] md:border-8 border-white md:p-6">
          <div className="w-full flex flex-col items-center bg-white rounded-3xl pb-10">
            <div className="text-red-500">
              Email is required for confirmation.
            </div>
          </div>
        </div>
      </div>
    );
  }

  const handleConfirmation = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const code = formData.get("code");
    try {
      await handleConfirmSignUp(email, code as string);

      navigate("/auth/login", { replace: true });
    } catch (error) {
      console.error("Error during confirmation:", error);
      alert(
        `An error occurred during confirmation. Please try again later. ${error}`
      );
    }
  };

  return (
    <div className="bg-confirm-email min-h-screen bg-white flex items-center justify-center bg-cover bg-center">
      <div className="w-full max-w-2xl h-auto flex md:rounded-[3.125rem] md:border-8 border-white md:p-6">
        <div className="w-full flex flex-col items-center bg-white rounded-3xl pb-10">
          <div className="w-full">
            <img
              src={TaytThreadsEmail}
              alt="Tayt Threads Email Logo"
              className="w-40 mx-auto mt-10 mb-5"
            />
          </div>
          <div className="max-w-md mx-auto text-center mb-4">
            <h2 className="text-3xl font-light text-gray-800 custom-heading">
              Enter confirmation code
            </h2>
            <p className="text-gray-500 mt-2 text-sm custom-paragraph">
              Enter the confirmation code we send to
            </p>
            <p>{email}</p>
          </div>
          <form
            onSubmit={handleConfirmation}
            className="flex flex-col items-center"
          >
            <input
              type="text"
              id="code"
              name="code"
              autoComplete="off"
              placeholder="Enter your confirmation code"
              className="min-w-xs md:min-w-sm px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              required
            />
            <button
              type="submit"
              className="min-w-xs md:min-w-sm px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 mt-4"
            >
              Confirm
            </button>
          </form>
          <div className="w-52 md:min-w-xs bg-black h-[2px] rounded-4xl my-10"></div>
          <p className="text-center text-sm text-gray-600">
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
    </div>
  );
};

export default Confirmation;
