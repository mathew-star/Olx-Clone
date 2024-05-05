const nameRegex = /^[A-Z][a-zA-Z'-]+$/;
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const mobileRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
const passwordRegex =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

export { nameRegex, emailRegex, mobileRegex, passwordRegex };

export const popularLocations = ["Kolkata", "Mumbai", "Chennai", "Pune"];

export const trendingLocations = [
  "Bhubaneshwar",
  "Hydrabad",
  "Chandigrah",
  "Nashik",
];

export const aboutUS = ["Contact Us"];

export const olx = [
  "Help",
  "Sitemap",
  "Legal & Privacy Information",
  "Vulnerability Disclosure Program",
];

export const subMenu = [
  "Cars",
  "MotorCycles",
  "Mobile",
  "For Sale: House & Apartments",
  "Scooters",
  "Commercial: & other Vehicles",
  "For Rent: House & Apartments",
];
