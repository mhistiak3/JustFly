export const SelectTravelList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A solo traveles for exploration.",
    icon: "✈️",
    people: "1",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Tow travels in tandem.",
    icon: "🧑‍🤝‍🧑",
    people: "2",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun loving adventurers.",
    icon: "👩‍👧‍👦",
    people: "3 to many",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seekes.",
    icon: "👯",
    people: "5 to many",
  },
];
export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of costs",
    icon: "🧧",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on average side",
    icon: "💷",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Don't worry about cost",
    icon: "💵",
  },
];

export const AI_PROMPT =
  "Generate Travel Plan for Location: {location}, for {day} Days and for {traveler} people with a {budget} budget,Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for {day} days with each day plan with best time to visit in JSON format. and also remember when you give image URL for hotel and places make sure those image URL is valid please not provide invalid image url.";
