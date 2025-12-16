// Navbar
export const navbarItems = [
  {
    id: 1,
    title: "Home",
    href: "/#home",
  },
  {
    id: 2,
    title: "About Muskan",
    href: "/#about",
  },
  {
    id: 3,
    title: "Work",
    href: "/#portfolio",
  },
  {
    id: 4,
    title: "Offerings",
    href: "/#services",
  },
];

export const services = [
  {
    title: "Product Campaign",
    slug: "product-campaign",
    description:
      "Conceptualized and launched a new product under an existing brand, Pilgrim. From product ideation to social media visuals, the campaign focuses on positioning, storytelling, and how the brand would realistically introduce the product to its audience.",
    imageUrl: "/images/product-campaign.webp",
    images: Array.from(
      { length: 25 },
      (_, i) => `/images/product-campaign/img${i}.png`
    ),
  },
  {
    title: "Brand Identity",
    slug: "brand-identity",
    description:
      "Built a brand from scratch - from raw sketches to a fully functional visual system. Defined the logo, variations, stationery, and packaging to ensure the brand looks consistent, intentional, and scalable across every touchpoint.",
    imageUrl: "/images/brand-identity.webp",
    images: Array.from(
      { length: 11 },
      (_, i) => `/images/brand-identity/img${i}.png`
    ),
  },
  {
    title: "Wedding Invite",
    slug: "wedding-invite",
    description:
      "Designed a complete wedding identity, starting with a custom couple logo and extending to all wedding stationery. Every element - invites, banners, standees, itineraries, and signage - followed one cohesive visual language.",
    imageUrl: "/images/wedding-invite.webp",
    images: Array.from(
      { length: 11 },
      (_, i) => `/images/wedding-invite-portfolio/img${i}.png`
    ),
  },
  {
    title: "Event Planning",
    slug: "event-planning",
    description:
      "Created a hypothetical event campaign for a local train concept, covering both offline and digital assets. Designed banners, standees, and social media content to show how an event can be visually promoted end-to-end.",
    imageUrl: "/images/event-portfolio.webp",
    images: Array.from(
      { length: 13 },
      (_, i) => `/images/event-portfolio/img${i}.png`
    ),
  },
];
