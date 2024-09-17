/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";


const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction:
    "\nGenerate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget,Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format.\n",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {
          text: "\nGenerate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget,Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format.\n",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{"hotels": [{"HotelName": "The D Las Vegas", "Hotel address": "301 Fremont Street, Las Vegas, NV 89101", "Price": "$60 - $100 per night", "hotel image url": "https://www.thed.com/images/default-source/hotel-images/hero-images/the-d-hero-desktop.jpg?sfvrsn=6", "geo coordinates": "36.1699° N, 115.1422° W", "rating": "4.0 stars", "descriptions": "A retro-themed hotel with a casino, restaurants, and a pool. It\'s known for its affordable rates and its location in the heart of Fremont Street."}, {"HotelName": "Golden Nugget", "Hotel address": "129 E Fremont Street, Las Vegas, NV 89101", "Price": "$70 - $150 per night", "hotel image url": "https://www.goldennugget.com/las-vegas/media/images/hero-images/hero-golden-nugget-las-vegas-desktop.jpg", "geo coordinates": "36.1696° N, 115.1418° W", "rating": "4.5 stars", "descriptions": "A luxurious hotel with a casino, restaurants, a pool, and a world-famous shark tank. It\'s located on Fremont Street, close to the action."}, {"HotelName": "The Orleans Hotel & Casino", "Hotel address": "4500 W Tropicana Ave, Las Vegas, NV 89103", "Price": "$50 - $100 per night", "hotel image url": "https://www.orleanscasino.com/media/images/hero-images/hero-orleans-las-vegas-desktop.jpg", "geo coordinates": "36.0986° N, 115.1741° W", "rating": "4.0 stars", "descriptions": "A large hotel with a casino, restaurants, a pool, and a golf course. It\'s located off the Strip, but offers affordable rates and free shuttle service to the Strip."}, {"HotelName": "Circus Circus Hotel & Casino", "Hotel address": "2880 S Las Vegas Blvd, Las Vegas, NV 89109", "Price": "$40 - $80 per night", "hotel image url": "https://www.circuscircus.com/media/images/hero-images/hero-circus-circus-las-vegas-desktop.jpg", "geo coordinates": "36.0996° N, 115.1732° W", "rating": "3.5 stars", "descriptions": "A family-friendly hotel with a circus theme, a casino, restaurants, and a pool. It\'s known for its budget-friendly rates and its location on the Strip."}, {"HotelName": "Excalibur Hotel & Casino", "Hotel address": "3850 S Las Vegas Blvd, Las Vegas, NV 89109", "Price": "$50 - $100 per night", "hotel image url": "https://www.excalibur.com/media/images/hero-images/hero-excalibur-las-vegas-desktop.jpg", "geo coordinates": "36.0972° N, 115.1709° W", "rating": "3.5 stars", "descriptions": "A medieval-themed hotel with a casino, restaurants, a pool, and a theme park. It\'s located on the Strip and offers affordable rates."}], "itinerary": [{"Day": 1, "Day Plan": "Explore Fremont Street Experience", "Places": [{"PlaceName": "Fremont Street Experience", "Place Details": "A pedestrian-friendly street with a canopy of lights, live music, and street performers. You can also see the iconic Slotzilla zipline.", "Place Image Url": "https://www.visitlasvegas.com/sites/default/files/styles/hero_mobile/public/2019-06/Fremont_Street_Experience_Hero_Image.jpg", "Geo Coordinates": "36.1699° N, 115.1422° W", "ticket Pricing": "Free", "rating": "4.5 stars", "Time travel": "2-3 hours"}, {"PlaceName": "The D Las Vegas", "Place Details": "A retro-themed hotel with a casino, restaurants, and a pool. It\'s known for its affordable rates and its location in the heart of Fremont Street.", "Place Image Url": "https://www.thed.com/images/default-source/hotel-images/hero-images/the-d-hero-desktop.jpg?sfvrsn=6", "Geo Coordinates": "36.1699° N, 115.1422° W", "ticket Pricing": "Free", "rating": "4.0 stars", "Time travel": "1 hour"}, {"PlaceName": "Golden Nugget", "Place Details": "A luxurious hotel with a casino, restaurants, a pool, and a world-famous shark tank. It\'s located on Fremont Street, close to the action.", "Place Image Url": "https://www.goldennugget.com/las-vegas/media/images/hero-images/hero-golden-nugget-las-vegas-desktop.jpg", "Geo Coordinates": "36.1696° N, 115.1418° W", "ticket Pricing": "Free", "rating": "4.5 stars", "Time travel": "1 hour"}]}, {"Day": 2, "Day Plan": "Visit the Strip", "Places": [{"PlaceName": "Bellagio Fountains", "Place Details": "A spectacular water and light show that takes place in front of the Bellagio Hotel. It\'s a must-see for any visitor to Las Vegas.", "Place Image Url": "https://www.bellagio.com/content/dam/mgmresorts/bellagio/images/bellagio-fountains/fountains-hero-desktop.jpg", "Geo Coordinates": "36.1113° N, 115.1732° W", "ticket Pricing": "Free", "rating": "4.5 stars", "Time travel": "1 hour"}, {"PlaceName": "The Venetian and The Palazzo", "Place Details": "A luxurious resort complex with a casino, restaurants, shopping, and a replica of Venice, Italy, complete with canals and gondolas.", "Place Image Url": "https://www.venetian.com/content/dam/mgmresorts/venetian/images/venetian-hero-desktop.jpg", "Geo Coordinates": "36.1126° N, 115.1748° W", "ticket Pricing": "Free", "rating": "4.5 stars", "Time travel": "2-3 hours"}, {"PlaceName": "The LINQ Promenade", "Place Details": "An outdoor shopping and dining district with an observation wheel, a zipline, and a variety of restaurants and bars.", "Place Image Url": "https://www.linq.com/content/dam/caesarsentertainment/linq/images/linq-hero-desktop.jpg", "Geo Coordinates": "36.1023° N, 115.1719° W", "ticket Pricing": "Free", "rating": "4.0 stars", "Time travel": "1 hour"}]}, {"Day": 3, "Day Plan": "Experience the Arts and Culture", "Places": [{"PlaceName": "The Neon Museum", "Place Details": "A museum that showcases historic neon signs from Las Vegas. It\'s a great place to learn about the city\'s history and see some iconic signs.", "Place Image Url": "https://www.neonmuseum.org/wp-content/uploads/2017/10/Neon-Museum-Hero-Image-2-1200x600.jpg", "Geo Coordinates": "36.1505° N, 115.1369° W", "ticket Pricing": "$20 - $30", "rating": "4.5 stars", "Time travel": "2 hours"}, {"PlaceName": "The Mob Museum", "Place Details": "A museum that explores the history of organized crime in Las Vegas. It\'s a fascinating look at the dark side of the city\'s history.", "Place Image Url": "https://www.themobmuseum.org/media/images/hero-images/hero-mob-museum-las-vegas-desktop.jpg", "Geo Coordinates": "36.1677° N, 115.1445° W", "ticket Pricing": "$25 - $35", "rating": "4.0 stars", "Time travel": "2 hours"}, {"PlaceName": "The Smith Center for the Performing Arts", "Place Details": "A performing arts center that hosts a variety of shows, concerts, and events. It\'s a great place to experience the cultural side of Las Vegas.", "Place Image Url": "https://www.thesmithcenter.com/media/images/hero-images/hero-smith-center-las-vegas-desktop.jpg", "Geo Coordinates": "36.1626° N, 115.1408° W", "ticket Pricing": "Varies by show", "rating": "4.5 stars", "Time travel": "2 hours"}]}]}\n\n```',
        },
      ],
    },
  ],
});
