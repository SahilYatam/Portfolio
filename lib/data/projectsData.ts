export const projects = [
    {
        number: "01",
        category: "Streaming",
        name: "Movie & TV Streaming",
        description:
            "A movie and TV streaming platform where users can explore titles, browse series, and manage their personal watchlist through a modern viewing experience.",
        image: "/project-img/01-project-movie.jpg",
        alt: "Movie and TV streaming website showing a dark-themed collection of films and series",
        href: "",
        source: "YOUR_GITHUB_REPOSITORY_URL",
        stack: [
            "TypeScript",
            "Next.js",
            "Redux Toolkit",
            "RTK Query",
            "Tailwind CSS",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Redis",
            "Better Auth",
            "Third-Party APIs",
        ],
    },

    {
        number: "02",
        category: "E-commerce",
        name: "Grocery Shop",
        description:
            "An e-commerce website for grocery shopping, allowing customers to browse products, manage their cart, and place orders through a simple online shopping experience.",
        image: "/project-img/02-project-grocery-shop.jpg",
        alt: "Grocery e-commerce website displaying grocery products and shopping categories",
        href: "https://grocery-store-rho-nine.vercel.app/",
        source: "YOUR_GITHUB_REPOSITORY_URL",
        stack: [
            "TypeScript",
            "React",
            "Redux Toolkit",
            "Tailwind CSS",
            "Node.js",
            "Express",
            "JWT",
            "MongoDB",
        ],
    },

    {
        number: "03",
        category: "Realtime",
        name: "Chat Application",
        description:
            "A real-time chat application with a friend-request system that allows users to connect and message each other only after requests are accepted.",
        image: "/project-img/03-project-chat.jpg",
        alt: "Real-time chat application interface showing conversations and friend connections",
        href: "https://chat-application-ruby-iota.vercel.app/",
        source: "YOUR_GITHUB_REPOSITORY_URL",
        stack: [
            "TypeScript",
            "React",
            "Redux Toolkit",
            "Tailwind CSS",
            "Node.js",
            "Express",
            "JWT",
            "Socket.IO",
            "MongoDB",
        ],
    },
] as const;

export type Project = (typeof projects)[number];