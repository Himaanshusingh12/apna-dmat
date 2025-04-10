import { useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../Constant";

const AccountSettingLoader = () => {
  useEffect(() => {
    const fetchAccountSetting = async () => {
      try {
        const res = await axios.get(
          `${BACKEND_URL}/api/account-settings/get-setting`
        );

        if (res.status === 200 && res.data.data.length > 0) {
          const faviconUrl = res.data.data[0]?.favicon;
          // console.log("Fetched Account Setting:", res.data.data);

          if (faviconUrl) {
            const existingFavicon = document.querySelector("link[rel='icon']");
            if (existingFavicon) {
              existingFavicon.href = faviconUrl;
            } else {
              const link = document.createElement("link");
              link.rel = "icon";
              link.href = faviconUrl;
              document.head.appendChild(link);
            }
          }
        }
      } catch (error) {
        // console.error("Error fetching account setting:", error);
      }
    };

    fetchAccountSetting();
  }, []);

  return null;
};

export default AccountSettingLoader;
