export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL as string;
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const NAME = process.env.NEXT_PUBLIC_NAME;
export const GOOGLE_ID = process.env.NEXT_PUBLIC_GOOGLE_ID as string;
export const GOOGLE_SECRET = process.env.NEXT_PUBLIC_GOOGLE_SECRET as string;

export const GOOGLE_CALLBACK_URL = process.env
  .NEXT_PUBLIC_GOOGLE_CALLBACK_URL as string;
export const DESCRIPTION = process.env.NEXT_PUBLIC_DESCRIPTION;


export const SEO = {
  title: NAME || "wiki admin",
  description: DESCRIPTION || "wiki admin",
  url: BASE_URL || "https://admin.wikiblock.pro",
  image: "/favicon/logo.png",
  favicon: "/favicon/logo.png",
};

export const STRAPI_API_URL = "";
