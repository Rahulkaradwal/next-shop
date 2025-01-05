"use client";
import Image from "next/image";
import Link from "next/link";
import React, { use, useState } from "react";
import CartModel from "./CartModel";
import NotificationIcon from "./NotificationIcon";
import useWixClient from "@/hooks/useWixClient";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";

function NavIcons() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const pathName = usePathname();

  const router = useRouter();
  const wixClient = useWixClient();
  const isLoggedIn = wixClient.auth.loggedIn();

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setIsProfileOpen((pre) => !pre);
    }
  };

  const handleLogout = async () => {
    setIsLoading(true);
    Cookies.remove("refreshToken");
    const { logoutUrl } = await wixClient.auth.logout(window.location.href);
    setIsLoading(false);
    setIsProfileOpen(false);
    router.push(logoutUrl);
  };

  return (
    <div className="flex gap-4 xl:gap-6 items-center relative ">
      <Image
        src="/profile.png"
        alt="profile"
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={() => {
          // setIsProfileOpen((pre) => !pre);
          // setIsCartOpen(false);
          handleProfile();
        }}
      />
      {isProfileOpen && (
        <div className="absolute top-12 bg-white w-32 px-4 py-2 left-0 text-sm rounded-md shadow-md z-20 ">
          <Link href="/">Profile</Link>
          <div className="cursor-pointer mt-2" onClick={handleLogout}>
            {isLoading ? "Logging out..." : "Logout"}
          </div>
        </div>
      )}
      <Image
        src="/notification.png"
        alt="notification icon"
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div
        className="cursor-pointer relative"
        onClick={() => {
          setIsCartOpen((pre) => !pre);
          setIsProfileOpen(false);
        }}
      >
        <Image src="/cart.png" alt="cart icon" width={22} height={22} />
        <NotificationIcon />
      </div>

      {isCartOpen && <CartModel />}
    </div>
  );
}

export default NavIcons;
