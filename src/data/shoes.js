const shoes = [
  {
    id: 1,
    name: 'Boreal Ninja',
    size: [39.5, 40.0, 41.0, 41.5, 42.0, 42.5, 43.0],
    price: 180,
    image: '/Boreal_ninja.jpg',
    sale:20,
    details: {
      aggressiveness: 'Aggressive',
      durability: 'Medium',
      bestFor: 'Bouldering, steep sport climbing',
      description: 'A slipper-style shoe offering extreme sensitivity and precision on overhangs.',
    },
  },
  {
    id: 2,
    name: 'Black Diamond Zone LV',
    size: [37.0, 37.5, 38.0, 38.5, 39.0, 39.5, 40.0],
    price: 150,
    sale:15,
    image: '/BlackDiamond_zoneLV.jpg',
    details: {
      aggressiveness: 'Moderate',
      durability: 'High',
      bestFor: 'Indoor lead and bouldering',
      description: 'A balance of performance and comfort with a breathable knit upper and firm toe.',
    },
  },
  {
    id: 3,
    name: 'Boreal Joker',
    size: [40.0, 40.5, 41.0, 41.5, 42.0, 42.5, 43.0],
    price: 115,
    image: '/Boreal_joker.jpg',
    details: {
      aggressiveness: 'Neutral',
      durability: 'Very High',
      bestFor: 'Beginner climbers, long sessions',
      description: 'All-day comfort with a flat profile and a soft forgiving fit.',
    },
  },
  {
    id: 5,
    name: 'Evolv Shaman',
    size: [40.5, 41.0, 41.5, 42.0, 42.5, 43.0, 43.5],
    price: 170,
    image: '/EVOLV_shaman.jpg',
    details: {
      aggressiveness: 'Aggressive',
      durability: 'High',
      bestFor: 'Sport and bouldering',
      description: 'Downturned toe and molded heel for precision and heel hooking.',
    },
  },
  {
    id: 7,
    name: 'La Sportiva Finales',
    size: [36.0, 36.5, 37.0, 37.5, 38.0, 38.5, 39.0],
    price: 99,
    sale:15,
    image: '/LaSportiva_finales.jpg',
    details: {
      aggressiveness: 'Neutral',
      durability: 'Very High',
      bestFor: 'Trad, multi-pitch, beginner lead',
      description: 'A great entry-level shoe offering comfort and solid edging for long days.',
    },
  },
  {
    id: 8,
    name: 'La Sportiva Helix',
    size: [39.0, 39.5, 40.0, 40.5, 41.0, 41.5, 42.0],
    price: 120,
    image: '/laSportiva_helix.jpg',
    details: {
      aggressiveness: 'Neutral',
      durability: 'High',
      bestFor: 'All-around climbing, multi-pitch',
      description: 'Classic lace-up with a flat last, perfect for comfort and edging on long routes.',
    },
  },
  {
    id: 9,
    name: 'La Sportiva Ondras',
    size: [40.5, 41.0, 41.5, 42.0, 42.5, 43.0, 43.5],
    price: 199,
    image: '/LaSportiva_Ondras.jpg',
    details: {
      aggressiveness: 'Aggressive',
      durability: 'Medium',
      bestFor: 'High-performance sport',
      description: 'Named after Adam Ondra, this shoe is built for top-tier competition climbing.',
    },
  },
  {
    id: 10,
    name: 'La Sportiva Otaki',
    size: [39.5, 40.0, 40.5, 41.0, 41.5, 42.0, 42.5],
    price: 185,
    image: '/laSportiva_otaki.jpg',
    details: {
      aggressiveness: 'Aggressive',
      durability: 'High',
      bestFor: 'Sport, overhangs',
      description: 'Powerful and precise, Otaki combines edging strength with toe power.',
    },
  },
  {
    id: 11,
    name: 'La Sportiva Skwama',
    size: [38.0, 38.5, 39.0, 39.5, 40.0, 40.5, 41.0],
    price: 190,
    image: '/LaSportiva_skwama.jpg',
    details: {
      aggressiveness: 'Aggressive',
      durability: 'Medium',
      bestFor: 'Bouldering, competition',
      description: 'Sensitive slipper with flexible sole and split-sole construction for precision.',
    },
  },
  {
    id: 6,
    name: 'Evolv V6',
    size: [36.5, 37.0, 37.5, 38.0, 38.5, 39.0, 39.5],
    price: 145,
    sale:25,
    image: '/EVOLV_V6.jpg',
    details: {
      aggressiveness: 'Moderate',
      durability: 'High',
      bestFor: 'Indoor, gym-to-crag transitions',
      description: 'Comfortable fit with just enough downturn for performance and support.',
    },
  },
  {
    id: 12,
    name: 'La Sportiva Solutions',
    size: [43.0, 43.5, 44.0, 44.5, 45.0, 45.5, 46.0],
    price: 195,
    image: '/LaSportiva_solutions.jpg',
    details: {
      aggressiveness: 'Very Aggressive',
      durability: 'High',
      bestFor: 'Steep sport, bouldering',
      description: 'Iconic performance shoe with P3 platform for powerful toeing on overhangs.',
    },
  },
  {
    id: 13,
    name: 'La Sportiva Tarantula',
    size: [41.0, 41.5, 42.0, 42.5, 43.0, 43.5, 44.0],
    price: 110,
    sale:15,
    image: '/LaSportiva_tarantula.jpg',
    details: {
      aggressiveness: 'Neutral',
      durability: 'Very High',
      bestFor: 'Beginner, gym climbing',
      description: 'Velcro closure and comfort-driven design for new climbers and casual routes.',
    },
  },
  {
    id: 14,
    name: 'Scarpa Booster',
    size: [38.5, 39.0, 39.5, 40.0, 40.5, 41.0, 41.5],
    price: 195,
    image: '/scarpa_booster.jpg',
    details: {
      aggressiveness: 'Very Aggressive',
      durability: 'Medium',
      bestFor: 'Hard sport routes, precision footwork',
      description: 'Ultra-performance shoe with asymmetry and power for small footholds.',
    },
  },
  {
    id: 15,
    name: 'Scarpa Helix',
    size: [36.5, 37.0, 37.5, 38.0, 38.5, 39.0, 39.5],
    price: 120,
    image: '/BlackDiamond_zoneLV.jpg', // Possibly incorrect image
    details: {
      aggressiveness: 'Neutral',
      durability: 'High',
      bestFor: 'Beginner to intermediate trad',
      description: 'Classic comfort and technical edging with a leather upper and lace design.',
    },
  },
  {
    id: 16,
    name: 'Scarpa Vapor V',
    size: [39.5, 40.0, 40.5, 41.0, 41.5, 42.0, 42.5],
    sale:30,
    price: 165,
    image: '/Scarpa_vaporV.jpg',
    details: {
      aggressiveness: 'Moderate',
      durability: 'High',
      bestFor: 'Sport, gym, multipitch',
      description: 'A great balance between comfort and aggression for versatile performance.',
    },
  },
  {
    id: 17,
    name: 'Scarpa VSR',
    size: [42.0, 42.5, 43.0, 43.5, 44.0, 44.5, 45.0],
    price: 185,
    image: '/scarpa_VSR.jpg',
    details: {
      aggressiveness: 'Aggressive',
      durability: 'Medium',
      bestFor: 'Powerful bouldering, comp style',
      description: 'Soft and sensitive bouldering shoe with a focus on dynamic movement.',
    },
  },
];

export default shoes;
