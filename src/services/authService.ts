import {
  signIn,
  signUp,
  confirmSignUp,
  signOut,
  fetchAuthSession,
  getCurrentUser,
  autoSignIn,
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
  fullName: string,
  email: string,
  password: string
) => {
  try {
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username: email,
      password,
      options: {
        userAttributes: {
          name: fullName,
          email: email,
        },
        autoSignIn: {
          authFlowType: "USER_AUTH",
        },
      },
    });

    console.log(isSignUpComplete);
    console.log(userId);
    console.log();
    // TODO: store data to Database
    return { isSignUpComplete, userId, nextStep };
  } catch (error: unknown) {
    console.error("Error signing up: ", error);
    throw error;
  }
};

export const handleConfirmSignUp = async (
  email: string,
  confirmationCode: string
) => {
  try {
    const { nextStep: confirmSignUpNextStep } = await confirmSignUp({
      username: email,
      confirmationCode,
    });

    if (confirmSignUpNextStep.signUpStep === "COMPLETE_AUTO_SIGN_IN") {
      const { nextStep } = await autoSignIn();

      if (nextStep.signInStep === "DONE") {
        console.log("Successfully signed in.");
      }
    }
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
