# Corso Website

A one-page Bootstrap website for **Corso**, a made-up company that runs training courses and seminars.

**Live site:** https://rsk0110.github.io/webproject/

<img src="./images/screen.jpg" alt="Screenshot of the Corso homepage" />

## My first website

This was the first website I ever built. I made it in a web design course with my teacher, following along step by step. The layout, wording, images and the Bootstrap + Sass starter setup all came from the course (the starter is Brad Traversy's `bs5-simple-starter`). I typed it out, built it and got it running myself.

Building it taught me the basics:

- how an HTML page is split into sections (navbar, header, content, footer)
- how Bootstrap's grid and utility classes (`row`, `col-lg-6`, `py-6`, `text-center`) handle layout without writing much CSS
- how Sass variables let you change Bootstrap's colours, spacing and buttons in one place (`scss/bootstrap.scss`)
- using npm scripts to turn `.scss` files into `.css`
- a little JavaScript: changing the navbar's background when you scroll

### Coming back to it (v2)

Later I came back to fix what the course version left unfinished. The original is saved as the [`v1-course-project`](https://github.com/Rsk0110/webproject/tree/v1-course-project) tag, so you can compare the two.

- **Broken links fixed.** The "Register" buttons pointed to a section that didn't exist, so they did nothing.
- **Forms work now.** Every field has a label, required fields are checked before sending, errors show next to the field, and a thank-you message appears afterwards. The forms are ready for [Formspree](https://formspree.io): paste a form URL into `action=""` and they send for real. Until then they run in demo mode.
- **Accessibility.** Images have descriptions (alt text), icon links have names, headings are in order, and there's a "Skip to main content" link for keyboard users.
- **Faster loading.** I removed 16 images nothing used and compressed the rest (about 2.7 MB of images down to under 1 MB). Images further down the page only load when you scroll near them.
- **Placeholders replaced.** The "Lorem ipsum" footer and the social links that went nowhere now point to my GitHub, LinkedIn and portfolio.
- **Bootstrap 5.3.8.** The CSS and JavaScript were on different Bootstrap versions (5.2.3 and 5.3.0-alpha3). Now they match.
- **Live on GitHub Pages.**

## Features

- Responsive layout with custom colours and backgrounds
- Sticky navbar that changes style on scroll
- Image carousel
- Register and email-subscribe forms with validation
- Font Awesome icons

## Running it yourself

You need [Node.js](https://nodejs.org/). Clone the repo, then:

```bash
npm install
```

To build the CSS from Sass:

```bash
npm run sass:build
```

To rebuild automatically while you edit:

```bash
npm run sass:watch
```

Bootstrap settings (colours, spacing, buttons) go in `scss/bootstrap.scss`. The full list of variables is in `node_modules/bootstrap/scss/_variables.scss`. Your own styles go in `scss/styles.scss`.

## Credits

- Built while learning in a web design course with my teacher. The design and content are course material.
- Starter setup: [bs5-simple-starter](https://github.com/bradtraversy/bs5-simple-starter) by Brad Traversy (MIT)
- [Bootstrap](https://getbootstrap.com/), [Sass](https://sass-lang.com/), [Font Awesome](https://fontawesome.com/)
