<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<h1 align="center">
  🥃 Whiskey Collection Test
</h1>

Hello dear reader ✌

Here you will find the documentation for the project plus the decision making process for the project. If you are here by chance I'm sure you'll learn some cool stuff.

## Installation

1. Hit the star button (optional, just kidding)
2. Fork the repo (optional)
3. Clon it locally
4. Run `npm ci` or `yarn`
5. Run `npm start` or `yarn start` to start the dev server

## Requirements

- Build a single page app that shows the whiskeis catalog.
- Make the user able to filter the whiskeis by region.
- Reference to the article
- Treat the JSON files as if they were coming from an external API.
- Follow the design guide for colors, units and images.
- Use any tech stack, but aproach the task as if the code will be use in prod.

## Tech Stack desition

Since I'm a huge fan of Reactjs I decided to use it but I had a hard couple of minutes thinking about the solution to choose when it comes to frameworks/starters, do I go for Nextjs, Gatsby, or stay with CRA.

At the end of the day I decided to go for Gatsby and here's some why:

- I imagine that the content won't change frequently being an e-commerce site so the whole content can be statically served.
- Pages being statically served from a CDN and pre-rendered at build time make a huge improvement in user experience since we don't make them wait a lot to get the content and Gatsby accelerates the navigation by fetching next pages on demand when hovering a link.
- Data is fetched at build time which improves a lot the experience for the client, users never spot a load time when the site is rendered because the data is already on the content. The fact of data fetched on build time is also a security improvement since we don't make a call to a server or an API client-side.
- Gatsby data management is the perfect way to simulate the data coming from an external API with the good addition of Graphql, the site will work as it's consuming a real Graphql API with just a small addition: a gatsby JSON data source plugin.

### Setup

Apart from the stack, I made the decision to add some development dependencies that help prevent errors and keep the code clean and maintainable over time and standardized for someone else or a team to work on it.

The tools for the static analysis testing are:

- Eslint
- Prettier
- Typescript
- Husky
- Lint-staged

The benefits of these tools all together are that each new commit triggers a set of actions to check the types, code linter, format the code, and last but not least make a new production build to check that the gatsby production site will work properly. The code will still work as always but now we have certainty that everything has a standardized code and the strongly typed system from typescript will help us prevent common errors.

![static-check](https://i.postimg.cc/6qKZ6fy2/134041746-146286867072437-9093847855482009879-n.png)

## Live preview

One last thing I use for the project was Netlify, I was thinking about use voice for the project, I would have done it but I didn't need Nextjs and their lambdas, since the project is not that dynamic.

[Here's the link for the project](https://tl-whiskies.netlify.app): https://tl-whiskies.netlify.app

## Summary

The challenge was pretty fun and I end up wanted a glass of whiskey, on the way I notice that the approach was the right since we were looking for a production-ready site, fully operable, with continuous delivery integration thanks to GitHub/Netlify, extraordinary maintainability thanks for the static analysis configuration, easy and secured style management with styled-components and great experience with the benefits of Gatsby that deliver us an excellent site that is well scored over Lighthouse.

![lighthouse](https://i.postimg.cc/504HZNGL/image.png)
