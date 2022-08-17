import React, { FC, useEffect, useState } from "react";

const useCheckMobileScreen = (screenWidth = 639) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < screenWidth);

  useEffect(() => {
    const handleChangeMobileScreen = (e: any) => {
      if (e.target?.innerWidth >= screenWidth) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };
    window.addEventListener("resize", handleChangeMobileScreen);

    return () => {
      window.removeEventListener("resize", handleChangeMobileScreen);
    };
  }, []);

  return {
    isMobileScreen: isMobile,
  };
};

export default useCheckMobileScreen;
