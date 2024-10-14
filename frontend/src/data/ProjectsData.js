import Avatar1 from "../assets/images/Avatar 1.png";
import Avatar2 from "../assets/images/Avatar 2.png";
import Avatar3 from "../assets/images/Avatar 3.png";
import Avatar4 from "../assets/images/Avatar 4.png";
import Avatar5 from "../assets/images/Avatar 5.png";

import xd from "../assets/images/xd.png";
import a from "../assets/images/a.png";
import slack from "../assets/images/slack.png";
import spotify from "../assets/images/spotify.png";
import idk from "../assets/images/idk.png";
import inLogo from "../assets/images/inLogo.png";
import bell from "../assets/images/bell.png";
import htmlLogo from "../assets/images/htmlLogo.png";
import cart from "../assets/images/cart.png";
import card from "../assets/images/card.png";

const projectData = [
  {
    name: "Chakra Soft UI Version",
    logo: xd,
    alt: "Adobe Xd",
    members: [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5],
    budget: "14000",
    completion: 60,
  },
  {
    name: "Add Progess Track",
    logo: a,
    alt: "Azure",
    members: [Avatar1, Avatar2],
    budget: "3000",
    completion: 10,
  },
  {
    name: "Fix Platfrom Errors",
    logo: slack,
    alt: "Slack",
    members: [Avatar1, Avatar2],
    budget: "NOT SET",
    completion: 100,
  },
  {
    name: "Launch our Mobile App",
    logo: spotify,
    alt: "Spotify",
    members: [Avatar1, Avatar2, Avatar3, Avatar4],
    budget: "32000",
    completion: 100,
  },
  {
    name: "Add the New Pricing Page",
    logo: idk,
    alt: "Box",
    members: [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5],
    budget: "400",
    completion: 25,
  },
  {
    name: "Redesign New Online Shop",
    logo: inLogo,
    alt: "In",
    members: [Avatar1, Avatar2],
    budget: "7600",
    completion: 40,
  },
];

const orderOverview = [
  {
    logo: bell,
    detail: "$2400, Design changes",
    time: "22 DEC 7:20 PM",
  },
  {
    logo: htmlLogo,
    detail: "New order #4219423",
    time: "21 DEC 11:21 PM",
  },
  {
    logo: cart,
    detail: "Server Payments for April",
    time: "21 DEC 3:52 PM",
  },
  {
    logo: card,
    detail: "New card added for order #3210145",
    time: "20 DEC 3:52 PM",
  },
  {
    logo: slack,
    detail: "Unlock package for Development",
    time: "19 DEC 11:35 PM",
  },
  {
    logo: xd,
    detail: "New order #9851258",
    time: "18 DEC 4:41 PM",
  },
];

export { projectData, orderOverview };
