import { PropertyProps } from "../interfaces";
export const HERO_IMAGE = "/assets/images/HeroImage.jpg";
export const HERO_IMAGE_MOBILE = "/assets/images/HeroImageMobile.png";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    id: "1",
    name: "Villa Ocean Breeze",
    description:
      "A luxurious villa with a private pool and stunning ocean views, perfect for a relaxing getaway.",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia",
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6",
    },
    image: "/assets/images/image 2.png",
    discount: "",
    reviews: [
      {
        avatar: "/assets/avatars/user1.png",
        name: "John Doe",
        rating: 5,
        comment: "Amazing place with breathtaking views! Highly recommend.",
      },
      {
        avatar: "/assets/avatars/user2.png",
        name: "Jane Smith",
        rating: 4.7,
        comment: "Beautiful villa, but the WiFi was a bit slow.",
      },
    ],
  },
  {
    id: "2",
    name: "Mountain Escape Chalet",
    description:
      "A cozy mountain retreat with a fireplace, perfect for winter getaways and nature lovers.",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA",
    },
    rating: 4.7,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7",
    },
    image: "/assets/images/image 3.png",
    discount: "30",
    reviews: [
      {
        avatar: "/assets/avatars/user1.png",
        name: "Michael Johnson",
        rating: 4.8,
        comment: "Cozy and well-maintained, perfect for a ski trip.",
      },
      {
        avatar: "/assets/avatars/user2.png",
        name: "Emily Davis",
        rating: 4.5,
        comment: "Great location but wished there was better heating.",
      },
    ],
  },
  {
    id: "3",
    name: "Cozy Desert Retreat",
    description:
      "An intimate desert retreat surrounded by scenic landscapes, ideal for stargazing and relaxation.",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA",
    },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3",
    },
    image: "/assets/images/image 4.png",
    discount: "",
    reviews: [
      {
        avatar: "/assets/avatars/user1.png",
        name: "Chris Walker",
        rating: 4.9,
        comment: "Peaceful and stunning, a hidden gem in the desert.",
      },
      {
        avatar: "/assets/avatars/user2.png",
        name: "Sophia Lee",
        rating: 4.8,
        comment: "Loved the atmosphere and the privacy.",
      },
    ],
  },
  {
    id: "4",
    name: "City Lights Penthouse",
    description:
      "A stylish penthouse in the heart of New York with breathtaking cityscape views.",
    address: {
      state: "New York",
      city: "New York",
      country: "USA",
    },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4",
    },
    image: "/assets/images/image 5.png",
    discount: "15",
    reviews: [
      {
        avatar: "/assets/avatars/user1.png",
        name: "David Kim",
        rating: 4.9,
        comment: "Absolutely stunning penthouse, worth every penny.",
      },
      {
        avatar: "/assets/avatars/user2.png",
        name: "Laura Bennett",
        rating: 4.7,
        comment: "Great location but a bit noisy at night.",
      },
    ],
  },
  // More properties with descriptions and reviews can be added in a similar format
];
