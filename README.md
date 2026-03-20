# 🎨 Portfolio — Mokhtar Ben Laghlagh

Portfolio personnel développé avec **React + TypeScript + Vite + Tailwind CSS**.

---

## 🚀 Lancer le projet

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer en développement
npm run dev

# 3. Build de production
npm run build

# 4. Prévisualiser le build
npm run preview
```

---

## 📁 Structure du projet

```
mon-portfolio/
├── public/
│   ├── certs/              ← Images des badges certifications (.webp)
│   └── favicon.svg
├── src/
│   ├── app/
│   │   ├── router.tsx      ← Toutes les routes
│   │   └── RootLayout.tsx  ← Header + Footer global
│   ├── components/
│   │   ├── CertificationCard.tsx
│   │   └── ThemeToggle.tsx
│   ├── data/               ← ✏️ TES DONNÉES ICI
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   ├── education.ts
│   │   └── certifications.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Certifications.tsx
│   │   └── Contact.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── tsconfig.app.json
├── vite.config.ts
└── vercel.json
```


3. Va sur [vercel.com](https://vercel.com) → **New Project** → importer le repo
4. Paramètres :
   - **Framework** : Vite (détecté automatiquement)
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
5. Clique **Deploy** → ton site est en ligne 🎉

> Le fichier `vercel.json` gère déjà le fallback SPA (pas de 404 sur les routes).

---

## 🛠️ Scripts disponibles

| Commande | Description |
|---|---|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Build de production (`dist/`) |
| `npm run preview` | Prévisualise le build local |
| `npm run lint` | Vérifie les erreurs ESLint |
| `npm run format` | Formate le code avec Prettier |

---

## 🧱 Stack technique

- **React 18** + **TypeScript**
- **Vite** — build ultra-rapide
- **Tailwind CSS** — styles utilitaires
- **React Router v6** — navigation SPA
- **React Helmet Async** — SEO (title + meta par page)
- **Framer Motion** — animations (disponible, à utiliser si besoin)
- **Formspree** — formulaire de contact sans backend
- **Vercel** — déploiement continu

---


## Video Démonstrative

https://github.com/user-attachments/assets/6b46e22c-3c16-4104-82ee-31acd31a78a2
## 📄 Licence

Projet personnel — © 2026 Mokhtar Ben Laghlagh
