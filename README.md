# personal-portfolio

Product design and web/app design portfolio for Daniel Wilson.

## Live structure

This is a dependency-free static website designed for GitHub Pages.

- `#/` - Home
- `#/work` - Soladex and Synctron.ai project case studies
- `#/work/soladex` - Soladex real project case study
- `#/work/synctron-ai` - Synctron.ai real project case study
- `#/about` - Tech journey, psychology background, AI/product experience, and A/B testing
- `#/contact` - Contact and focus areas

## Portfolio positioning

Daniel is positioned as a Product Designer and Web/App Designer with experience across:

- Product design
- Web and mobile app design
- UI/UX research
- A/B testing
- Google Analytics-informed iteration
- AI-enhanced product development
- Front-end and back-end development foundations
- Psychology-informed interface design

## Project plan

The current site includes two real product projects:

- Soladex
- Synctron.ai

The Work page also includes supporting experience cards for green tech writing, research grant support, psychology-driven UX writing, and Google Analytics/A/B testing.

## Run locally

From this folder:

```bash
python -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Deploy on Vercel

Recommended setup:

1. Go to `https://vercel.com/new`.
2. Import the GitHub repository `danielwilson90/personal-portfolio`.
3. Use the default framework setting or choose `Other`.
4. Leave Build Command empty.
5. Leave Output Directory as `.`.
6. Deploy.

Vercel will redeploy automatically whenever new commits are pushed to `main`.
