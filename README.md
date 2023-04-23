# About

This is a project created using [create-t3-app](https://create.t3.gg/).

It is a web application for inter college coding competition happening at CST.

**WHY:**
- The DOMJudge server failed on us during the last intra college competition.
- Also, a project up my resume.


Libraries used:
- [Next.js](https://nextjs.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)
- [Clerk](https://clerk.com) (for authentication)

Clerk was used instead of NextAuth because it has a better UI and importantly, it was easier for me to use.

Note: I am also experimenting with Atomic design principles with this project.
- Atoms
- Molecules
- Organisms
- Pages

## TODO:
- [ ] Disintegrate Navigation Bar into Components 

Notes:
To be associated with a Team while creating an account, a Custom SignUp Clerk form should be created.
You could also associate with a Team after he/she has signed up.
    - This method is preferred as it is easier to implement.
    - And I got stuck after trying to implement the Custom SignUp form.
    - I will try to implement this later.

## Tasks:
- [x] Setup HomePage
- [ ] Setup Clerk
    - [x] Setup Clerk with NextJS Middleware
    - [x] Setup SignIn SignOut functionality with Clerk
    - [ ] Create Registration functionality for team members
- [ ] Create Dashboard 
- [ ] Create Problem page (similar to that of Leetcode) 

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
