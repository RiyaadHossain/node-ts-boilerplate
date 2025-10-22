import type { LoginPayload } from "@modules/auth/auth.interface.js";

const login = async (payload: LoginPayload) => {
  // Simulate user authentication logic
  console.log(payload);
  return { token: "fake-jwt-token", user: { id: 1, name: "John Doe" } };
};

export const AuthService = {
  login,
};
