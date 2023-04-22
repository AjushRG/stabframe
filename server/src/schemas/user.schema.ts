import { object, string, TypeOf } from "zod";

export const createUserSchema = object({
  body: object({
    name: string({
      required_error: "Name is required",
    })
      .min(3)
      .max(50),
    email: string({
      required_error: "Email is required",
    }).email({
      message: "Email is not valid",
    }),
    password: string({
      required_error: "Password is required",
    }).min(6, {
      message: "Password must be at least 6 characters",
    }),
    confirmPassword: string({
      required_error: "Confirm Password is required",
    }),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  }),
});

export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  "body.confirmPassword"
>;
