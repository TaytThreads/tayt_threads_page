export declare const handleSignIn: (email: string, password: string) => Promise<{
    isSignedIn: boolean;
    nextStep: import("node_modules/@aws-amplify/auth/dist/esm/types").AuthNextSignInStep<import("node_modules/@aws-amplify/auth/dist/esm/types").AuthUserAttributeKey>;
}>;
export declare const handleSignUp: (fullName: string, email: string, password: string) => Promise<{
    isSignUpComplete: boolean;
    userId: string | undefined;
    nextStep: import("node_modules/@aws-amplify/auth/dist/esm/types").AuthNextSignUpStep<import("@aws-amplify/core/internals/utils").AuthVerifiableAttributeKey>;
}>;
export declare const handleConfirmSignUp: (email: string, confirmationCode: string) => Promise<void>;
export declare const handleSignOut: () => Promise<void>;
export declare const getSession: () => Promise<import("@aws-amplify/core").AuthTokens | null | undefined>;
export declare const getUser: () => Promise<import("@aws-amplify/auth").AuthUser | null>;
