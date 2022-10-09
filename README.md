# Portfolio for developers

## Theme

[Gatsby-theme-portfolio](https://github.com/smakosh/gatsby-theme-portfolio)

## Features

- Eslint/Prettier configured
- Scores 100% on a11y / Performance / PWA / SEO
- PWA (desktop & mobile)
- Easy to customize
- Nice project structure
- Amazing illustrations by [Undraw.co](https://undraw.co)
- Tablet & mobile friendly
- Continuous deployment with [Github Actions](https://github.com/pvtri96/pvtri96.github.io/actions)
- A contact form protected by Google Recaptcha
- Automatically deployed on every update on "master"
- Fetches your Github pinned projects with most stars (Easily customized)

## Design

Project on [Behance](https://www.behance.net/gallery/74172961/Free-Gatsby-portfolio-for-developers)

## Structure

```bash
.
├── data
│   └── config              # SEO related tags
├── src
│   └── assets              # Assets
│   │   │── icons             # icons
│   │   │── illustrations     # illustrations from (undraw.co)
│   │   └── thumbnail         # cover of your website when it's shared to social media
│   ├── components          # Components
│   │   │── common            # Common components
│   │   │── landing           # Components used on the landing page
│   │   └── theme             # Header & Footer
│   └── pages               # Pages
└── static                  # favicon & Netlify redirects
```

## Prerequisites

### Online

1. Create an account at [Formik](https://formik.com/?utm_source=pvtri96) and grab your form endpoint url
2. Grab a Google recaptcha key from [Google Recaptcha](https://www.google.com/recaptcha/admin)
3. Grab your Github token from [GitHub](https://github.com/settings/tokens/new?scopes=repo&description=portfolio-dev)
4. Add secrets to your Github repository that contains:

- Formik form endpoint
- Google recaptcha public key
- Github token

### Locally

1. Create an account at [Formik](https://formik.com/?utm_source=smakosh)
2. Grab a Google recaptcha key from [Google Recaptcha](https://www.google.com/recaptcha/admin)
3. Grab your Github token from GitHub
4. Run `cp .env.development.template .env`
5. Run `npm install && npm start`

### Deploying locally

The repository is using Github Page to deploy, the base branch is pre-configured at "gh-pages" using the NPM package "gh-pages".

### Clean the cache

This removes the `.cache/` & `public/` folders

```bash
npm run reset
```

### Build

```bash
npm run build
```

### Deploy

```bash
npm run deploy
```

## Built with

- Adobe XD
- Gatsby
- React & GraphQL
- Formik
- Google recaptcha
- VSCode
- And these useful of JavaScript libraries & Gatsby plugins [package.json](package.json)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more details

## Contributors

- [Ajay NS](https://github.com/ajayns) https://github.com/smakosh/gatsby-portfolio-dev/pull/3
- [Ryan Lee](https://github.com/drdgvhbh) https://github.com/smakosh/gatsby-portfolio-dev/pull/6
- [David](https://github.com/davidavz) https://github.com/smakosh/gatsby-portfolio-dev/pull/8
- [Léu Almeida](https://github.com/LeuAlmeida) https://github.com/smakosh/gatsby-portfolio-dev/pull/21
- [Kudakwashe Mupeni](https://github.com/2wce) https://github.com/smakosh/gatsby-portfolio-dev/pull/20
- [sasannnn](https://github.com/sasannnn) https://github.com/smakosh/gatsby-portfolio-dev/pull/22
- [Michael Seifarth](https://github.com/Kageetai) https://github.com/smakosh/gatsby-portfolio-dev/pull/27
- [Hugo](https://github.com/Kronicom) https://github.com/smakosh/gatsby-portfolio-dev/pull/34 https://github.com/smakosh/gatsby-portfolio-dev/pull/35
- [manula thejan](https://github.com/manula2004) https://github.com/smakosh/gatsby-portfolio-dev/pull/38
- [Benjamin Lo](https://github.com/benji011) https://github.com/smakosh/gatsby-portfolio-dev/pull/40
- [Yassine Rais](https://github.com/yassinrais) https://github.com/smakosh/gatsby-portfolio-dev/pull/41
- [Smakosh](https://smakosh.com)
- [Tri Van PHam](https://tripham.dev)

