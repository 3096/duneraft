import { auth } from "@/auth";

export const middleware = auth;

export const config = {
  runtime: "nodejs",
};
