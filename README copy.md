# ALX Listing App

# **ALX Listing App**

The **ALX Listing App** is a web application designed to emulate an Airbnb-style listing page. It features a clean and dynamic UI to display property listings, complete with relevant details such as images, descriptions, and prices. This project is built using **Next.js**, **TypeScript**, and **Tailwind CSS**, and aims to deliver a seamless user experience.

---

## **Project Goals**

- Create a user-friendly interface for property listings.
- Ensure type safety and reusability with **TypeScript**.
- Design responsive and visually appealing layouts using **Tailwind CSS**.
- Structure the project for scalability and maintainability.

---

## **Project Structure**

```
.
├── public/ # Static assets
│ ├── assets/
├── components/ # Reusable components
├── interfaces/ # TypeScript interfaces
├── constants/ # store any reusable data or strings such as API URLs
├── README.md # Documentation
├── package.json # Dependencies and scripts
└── tsconfig.json # TypeScript configuration

```

### **Key Directories**

- **components/**: Contains reusable React components like `Card`, `Button`, and `Navbar`.
- **interfaces/**: Includes TypeScript interfaces such as `ListingProps` and `ButtonProps` for maintaining type safety across the project.
- **constants/**: Stores static data, configurations, or default values used throughout the app.
- **public/assets/**: Houses static files such as images, icons, and other media assets that are directly accessible.

---

## **Setup Instructions**

### **Prerequisites**

1. Install [Node.js](https://nodejs.org/) (LTS version recommended).
2. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/alx-listing-app.git
   cd alx-listing-app
   ```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
