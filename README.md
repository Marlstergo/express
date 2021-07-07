# This is important

- [This is important](#this-is-important)
  - [Installation](#installation)
    - [Development](#development)
    - [Build](#build)
  - [Workflow](#workflow)
  - [Checklist](#checklist)
  - [Resources](#resources)
    - [UI](#ui)
      - [Components](#components)
      - [Libraries](#libraries)
  - [FAQ](#faq)
    - [Troubleshooting](#troubleshooting)

## Installation

- [Node Version Manager](https://github.com/nvm-sh/nvm) [[2](https://docs.netlify.com/configure-builds/manage-dependencies/#node-js-and-javascript)]

Further information in [FAQ](#faq)

```sh
nvm install && nvm use
npm ci  # Installs from package-lock.json only
```

### Development

```sh
npm run clean # Removes inter alia .cache/
npm start # Refers to `npm run develop`
```

### Build

```sh
npm run clean
npm run build
npm run serve
```

Follow the [checklist](#checklist) below!

## Workflow

> Read the following **requirements** carefully and do visit the links in it to fully understand our goals!  
> Also don't miss the resources below to get some extra help.

This is Gatsby **version 3**.

[Chakra UI](https://chakra-ui.com/) is a simple, modular and accessible component library that gives you the building blocks you need.

[Choc UI](https://choc-ui.tech/) are prebuilt Chakra UI components that are commonly used in web applications.

[Twin](https://github.com/ben-rogerson/twin.macro) blends the magic of Tailwind with the flexibility of css-in-js:  
**[twin-gatsby-emotion](https://github.com/ben-rogerson/twin.examples/tree/master/gatsby-emotion#next-steps)** ([list of supported plugins](https://twin-docs.netlify.app/plugin-support))

- [x] [React hooks](https://reactjs.org/docs/hooks-intro.html) and function components are more declarative
- [x] Always use the power of [gatsby-image](https://www.gatsbyjs.com/docs/reference/release-notes/image-migration-guide/) and [gatsby-background-image](https://github.com/timhagn/gatsby-background-image/tree/main/packages/gbimage-bridge#how-to-use) [[2](https://github.com/timhagn/gatsby-background-image/tree/main/packages/gatsby-background-image#styling--passed-through-styles)]
- [x] Fetch data and assets with built-in GraphQL because of all the [outstanding benefits](https://www.gatsbyjs.com/docs/how-to/querying-data/using-gatsby-without-graphql/#the-tradeoffs-of-foregoing-gatsbys-data-layer)
- [x] Link the pages efficiently with [Gatsby link component](https://www.gatsbyjs.com/docs/linking-between-pages/#the-gatsby-link-component)
- [x] A basic [layout component](https://www.gatsbyjs.com/docs/how-to/routing/layout-components/) (share across multiple pages) is already at hand
- [x] [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids) is efficient for the overall layout. Fine-tuning _within_ the grid areas can be done by Flexbox as well (both available in tailwindcss)
- [x] Use the given SEO component (and extend if needed) [for happy search engine crawlers](https://www.gatsbyjs.com/docs/how-to/adding-common-features/seo/#page-metadata)
- [x] All (!) static assets like [fonts](https://www.gatsbyjs.com/docs/recipes/styling-css/#using-google-fonts) or [SVG library](https://www.gatsbyjs.com/docs/recipes/styling-css/#using-font-awesome) etc. are [self-hosted](https://csswizardry.com/2019/05/self-host-your-static-assets/)
- [x] Prettier.io is used with [ESLint](https://prettier.io/docs/en/integrating-with-linters.html)

## Checklist

> This is the checklist and order that your work goes through, if one point fails you will get a revision. There is no point in delivering work which doesn't pass the following criteria:

- Test on all available resolution presets of Chrome and Firefox Dev Tools, please also try Safari as many people use it
  - latest version of Chrome, Firefox, Safari
  - Private incognito mode with no extensions
- [Lighthouse](https://www.gatsbyjs.com/docs/how-to/performance/audit-with-lighthouse/)
  - **Goal**: Are all circles GREEN? Mobile and Desktop.

## Resources

- **[Tailwind CSS - awesomelist](https://github.com/aniftyco/awesome-tailwindcss)**:
  - ...
  - Migration
    - **[Windy - browser ext. to transform html elements to tw components](https://usewindy.com/)**
    - [Transform css to tw classes](https://transform.tools/css-to-tailwind)
  - Colour
    - <https://grayscale.design/>
    - <https://adevade.github.io/color-scheme-generator/>
    - <https://github.com/javisperez/tailwindcolorshades>
    - ...
  - Animation
    - <https://github.com/vikrantyadav611/tail-animista>
    - ...
- Tips and tricks
  - [JavaScript to Know for React](https://kentcdodds.com/blog/javascript-to-know-for-react)
  - [5 Tips to Help You Avoid React Hooks Pitfalls](https://kentcdodds.com/blog/react-hooks-pitfalls)
  - [The dangers of DRY, the web of WET, the awesomeness of AHA.](https://kentcdodds.com/blog/aha-programming)
- Performance
  - [Gatsby](https://www.gatsbyjs.com/docs/how-to/performance/improving-site-performance/)
- Compatibility
  - [Polyfill.io](https://polyfill.io/)

To be continued...

### UI

#### Components

- **[Awesome React Components](https://github.com/brillout/awesome-react-components)**

#### Libraries

- **[Comparision and statistics](https://react-ui-roundup.dimitrimitropoulos.com/)**

> **Caution**:  
> The following systems use different CSS-in-JS libraries and approaches:

- Tailwind CSS specific
  - <https://headlessui.dev/>
    - <https://tailwindui.com/>
  - <https://chakra-ui.com/>
    - <https://choc-ui.tech/>
  - <https://treact.owaiskhan.me/>
    - <https://owaiskhan.me/post/using-treact-components-custom-react-app>
  - <https://github.com/creativetimofficial/tailwind-starter-kit>
- <https://ant.design/>
- <https://material-ui.com/>
- <https://blueprintjs.com/>
- <https://baseweb.design/>
- <https://rebassjs.org/>

## FAQ

- [Do I commit the package-lock.json file created by npm?](https://stackoverflow.com/questions/44206782/do-i-commit-the-package-lock-json-file-created-by-npm-5)
- [Why does `npm install` rewrite package-lock.json?](https://stackoverflow.com/questions/45022048/why-does-npm-install-rewrite-package-lock-json)

### Troubleshooting

```sh
nvm use
npm run clean
rm -rf node_modules/
npm ci
```
