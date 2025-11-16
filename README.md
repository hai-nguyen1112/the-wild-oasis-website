## The Wild Oasis

A full-stack cabin booking web application built with Next.js, React, and Supabase.

Demo: https://the-wild-oasis-hai-nguyen.vercel.app/

- Built the application using Next.js App Router, leveraging server side rendering, static site generation, incremental static regeneration, and dynamic routing for optimized performance and SEO.
- Handled data mutations with Next.js Server Actions, React hooks, and revalidated caching, improving responsiveness and reducing client-side requests.
- Managed shared UI state using React Context API, ensuring clean state flow and component scalability.
- Designed and structured a PostgreSQL database with Supabase, including row-level security and relational data models.
- Developed a fully responsive UI using Tailwind CSS, providing a seamless experience across mobile, tablet, and desktop devices.
- Implemented secure authentication using NextAuth (Auth.js) with Google OAuth, enabling protected routes and user-specific booking data.
- Integrated date selection, filtering, and availability logic to support real-time cabin booking interactions.
- Optimized image handling and UI performance using Next.js Image component, suspense boundaries, and lazy loading.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
