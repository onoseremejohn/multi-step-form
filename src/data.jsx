import arcade from "./assets/images/icon-arcade.svg";
import advanced from "./assets/images/icon-advanced.svg";
import pro from "./assets/images/icon-pro.svg";

export const plans = [
  { id: 1, name: "Arcade", monthly: "$9/mo", yearly: "$90/yr", icon: arcade },
  {
    id: 2,
    name: "Advanced",
    monthly: "$12/mo",
    yearly: "$120/yr",
    icon: advanced,
  },
  { id: 3, name: "Pro", monthly: "$15/mo", yearly: "$150/yr", icon: pro },
];

export const addOns = [
  {
    id: 1,
    name: "Online service",
    text: "Access to multiplayer games",
    yearly: "+$10/yr",
    monthly: "+$1/mo",
  },
  {
    id: 2,
    name: "Larger Storage",
    text: "Extra 1TB of cloud save",
    yearly: "+$20/yr",
    monthly: "+$2/mo",
  },
  {
    id: 3,
    name: "Customizale profile",
    text: "Custom theme on your profile",
    yearly: "+$20/yr",
    monthly: "+$2/mo",
  },
];
