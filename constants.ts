import { Metadata } from "next";

export const socials = [
  {
    id: 1,
    name: "Github",
    url: "https://github.com/JSO2/",
    handle: "@J0",
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jakuboh/",
    handle: "@ JO",
  },
];

const title = "Newsletter";
const description = "Software Engineer"
// const image = ""

export const metaData: Metadata = {
    title: title,
    description: description,
    openGraph: {
      title,
      description,
      url: "https://portfolio-next-pink-five.vercel.app/",
      siteName: "JO",
    //   images: [{ url: image }],
      locale: "en-US",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
    },
},
twitter: {
  title: title,
  description: description,
  card: "summary_large_image",
  creator: "@JO",
},
};