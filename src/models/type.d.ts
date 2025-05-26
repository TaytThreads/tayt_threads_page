export type SignUpFormValues = {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
};
export interface LoginFormValues {
    email: string;
    password: string;
    rememberMe?: boolean;
}
export interface FieldError {
    type: string;
    message: string;
}
