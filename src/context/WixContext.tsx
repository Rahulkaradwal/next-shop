"use client";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { products } from "@wix/stores";

const refreshToken = (() => {
  try {
    const token = Cookies.get("refreshToken");
    return token ? JSON.parse(token) : {};
  } catch (e) {
    console.error("Invalid refresh token in cookies", e);
    return {};
  }
})();

const accessToken = Cookies.get("accessToken") || "";

const wixClient = createClient({
  modules: {
    products,
  },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_AUTH_CLIENT_ID!,
    tokens: {
      refreshToken,
      accessToken: {
        value: accessToken,
        expiresAt: 0, // Dynamically update if you have expiry information
      },
    },
  }),
});

export type WixClient = typeof wixClient;

export const WixClientContext = createContext<WixClient>(wixClient);

export const WixClientContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [client, setClient] = useState(wixClient);

  useEffect(() => {
    // Add dynamic token refresh logic here if needed
  }, []);

  return (
    <WixClientContext.Provider value={client}>
      {children}
    </WixClientContext.Provider>
  );
};

export default wixClient;
