import { WixClientContext } from "@/context/WixContext";
import { useContext } from "react";

function useWixClient() {
  return useContext(WixClientContext);
}

export default useWixClient;
