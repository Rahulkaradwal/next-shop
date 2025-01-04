import { createClient, OAuthStrategy } from "@wix/sdk";
import { products } from "@wix/stores";
import { cookies } from "next/headers";

export const wixClientServer = () => {
  const accessToken = cookies().get("accessToken")?.value || "";
  const refreshToken = (() => {
    try {
      const token = cookies().get("refreshToken")?.value;
      return token ? JSON.parse(token) : null;
    } catch (e) {
      console.error("Invalid refresh token in cookies", e);
      return null;
    }
  })();

  if (!refreshToken) {
    console.error("Missing or invalid refresh token");
  }

  try {
    return createClient({
      modules: {
        products,
      },
      auth: OAuthStrategy({
        clientId: process.env.WIX_AUTH_CLIENT_ID!, // Use server-side env variable
        tokens: {
          refreshToken,
          accessToken: {
            value: accessToken,
            expiresAt: 0, // Add token expiry handling here
          },
        },
      }),
    });
  } catch (e) {
    console.error("Failed to create Wix client:", e);
    throw new Error("Failed to initialize Wix client");
  }
};
