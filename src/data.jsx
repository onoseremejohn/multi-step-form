import arcade from "./assets/images/icon-arcade.svg";
import advanced from "./assets/images/icon-advanced.svg";
import pro from "./assets/images/icon-pro.svg";

export const plans = [
  { id: 1, name: "Arcade", monthly: 9, yearly: 90, icon: arcade },
  {
    id: 2,
    name: "Advanced",
    monthly: 12,
    yearly: 120,
    icon: advanced,
  },
  { id: 3, name: "Pro", monthly: 15, yearly: 150, icon: pro },
];

export const addOns = [
  {
    id: 1,
    name: "Online service",
    text: "Access to multiplayer games",
    yearly: 10,
    monthly: 1,
  },
  {
    id: 2,
    name: "Larger storage",
    text: "Extra 1TB of cloud save",
    yearly: 20,
    monthly: 2,
  },
  {
    id: 3,
    name: "Customizable profile",
    text: "Custom theme on your profile",
    yearly: 20,
    monthly: 2,
  },
];
