import { fetchAPI } from "utils/axiosBaseQuery";
import Cookies from "js-cookie";

export const logout = () => {
  localStorage.clear();
  Object.keys(Cookies.get()).forEach(function (cookieName) {
    Cookies.remove(cookieName);
  });
};

export const getLetterAvatar = (name: string) => {
  const splitData = name.split(" ");
  return `${splitData[splitData.length - 1][0]}${splitData[0][0]}`;
};

export const formatSortOrder = (order: "ascend" | "descend") => {
  if (order === "ascend") {
    return "asc";
  }

  if (order === "descend") {
    return "desc";
  }
};

// Go through images and check if they are uploaded to s3,
// if not upload them to s3 and return the url
export const uploadImages = async (imageURLs: string[]) => {
  const formattedImages = await Promise.all(
    imageURLs.map(async (imageURL) => {
      let picture = "";
      let imgData: any = imageURL;

      if (!imageURL.startsWith("http")) {
        imgData = new FormData();
        const blob = await fetch(imageURL).then((res) => res.blob());
        imgData.append("file", blob, "test.png");

        const { data } = await fetchAPI({
          url: "/upload/images",
          method: "POST",
          body: imgData,
        });
        picture = data?.url;
      } else {
        picture = imageURL;
      }
      return picture;
    })
  );

  return formattedImages;
};


export const formatNumber = (number: number | undefined) => {
  if (number == null) return 0;
  return new Intl.NumberFormat().format(number || 0);
};


export const getBase64 = (file: any) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = (error) => reject(error);
  });
