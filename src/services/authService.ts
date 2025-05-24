import {
  signIn,
  signUp,
  confirmSignUp,
  signOut,
  fetchAuthSession,
  getCurrentUser,
} from "aws-amplify/auth";

export const handleSignIn = async (email: string, password: string) => {
  try {
    const { isSignedIn, nextStep } = await signIn({
      username: email,
      password,
    });

    return { isSignedIn, nextStep };
  } catch (error: unknown) {
    console.error("Error signing in: ", error);
    throw error;
  }
};

export const handleSignUp = async (
  _fullName: string,
  email: string,
  password: string
) => {
  const { isSignUpComplete, userId, nextStep } = await signUp({
    username: email,
    password,
  });

  // TODO: store data to Database
  return { isSignUpComplete, userId, nextStep };
};

export const handleConfirmSignUp = async (
  email: string,
  confirmationCode: string
) => {
  try {
    const { isSignUpComplete, nextStep } = await confirmSignUp({
      username: email,
      confirmationCode,
    });
    return { isSignUpComplete, nextStep };
  } catch (error) {
    console.error("Error confirming sign up:", error);
    throw error;
  }
};

export const handleSignOut = async () => {
  try {
    await signOut();
  } catch (error) {
    console.error("Error signing out: ", error);
    throw error;
  }
};

export const getSession = async () => {
  try {
    const session = await fetchAuthSession();
    return session.tokens;
  } catch (error: unknown) {
    console.error("Error confirming sign up:", error);
    return null;
  }
};

export const getUser = async () => {
  try {
    return await getCurrentUser();
  } catch (error: unknown) {
    console.error("Error confirming sign up:", error);
    return null;
  }
};
