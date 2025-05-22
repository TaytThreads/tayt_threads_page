import type { Resolver } from "react-hook-form";
import type { SignUpFormValues, LoginFormValues, FieldError } from "./type";

export const RegisterResolver: Resolver<SignUpFormValues> = async (values) => {
  const errors: Record<string, FieldError> = {};

  if (!values.fullName) {
    errors.fullName = {
      type: "required",
      message: "Fullname is required.",
    };
  }

  if (!values.email) {
    errors.email = {
      type: "required",
      message: "Email is required.",
    };
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values.email)) {
      errors.email = {
        type: "pattern",
        message: "Invalid email format.",
      };
    }
  }

  if (!values.password) {
    errors.password = {
      type: "required",
      message: "Password is required.",
    };
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = {
      type: "required",
      message: "Confirm Password is required.",
    };
  } else if (values.password && values.confirmPassword !== values.password) {
    errors.confirmPassword = {
      type: "validate",
      message: "Passwords do not match.",
    };
  }

  return {
    values: Object.keys(errors).length === 0 ? values : {},
    errors,
  };
};

export const LoginResolver: Resolver<LoginFormValues> = async (values) => {
  const errors: Record<string, FieldError> = {};

  if (!values.email) {
    errors.email = {
      type: "required",
      message: "Email is required.",
    };
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values.email)) {
      errors.email = {
        type: "pattern",
        message: "Invalid email format.",
      };
    }
  }

  if (!values.password) {
    errors.password = {
      type: "required",
      message: "Password is required.",
    };
  } else if (values.password.length < 8) {
    errors.password = {
      type: "minLength",
      message: "Password must be at least 8 characters.",
    };
  }

  return {
    values: Object.keys(errors).length === 0 ? values : {},
    errors,
  };
};
