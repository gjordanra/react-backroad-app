import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "Home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.squarespace.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    icon: "fas fa-wallet fa-fw",
  },
  {
    id: 2,
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    icon: "fas fa-tree fa-fw",
  },
  {
    id: 3,
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    icon: "fas fa-socks fa-fw",
  },
];

export const tours = [
  {
    id: 1,
    title: "Tibet Adventure",
    date: "august 26th, 2020",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    img: tour1,
    location: "china",
    duration: "6",
    cost: "$2100",
  },
  {
    id: 2,
    title: "best of java",
    date: "october 1th, 2020",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    img: tour2,
    location: "indonesia",
    duration: "11",
    cost: "$1400",
  },
  {
    id: 3,
    title: "explore hong kong",
    date: "september 15th, 2020",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    img: tour3,
    location: "hong kong",
    duration: "8",
    cost: "$5000",
  },
  {
    id: 4,
    title: "kenya highlights",
    date: "december 5th, 2019",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    img: tour4,
    location: "kenya",
    duration: "20",
    cost: "$3300",
  },
];
