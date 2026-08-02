# L.L COUVERTURE — site vitrine

Site vitrine de **L.L COUVERTURE**, couvreur et charpentier à Arpajon (91) :
zinguerie, rénovation de toiture, réparation de fuite en urgence, rives,
gouttières et charpente.

Implémenté d'après la maquette Claude Design (`l-l-couverture-website-design/`),
recréée à l'identique en Next.js.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- CSS global sans framework — les tokens de la maquette (`--accent`, `--r`, …)
  sont repris tels quels dans [`app/globals.css`](app/globals.css)
- Police **Archivo** via `next/font/google` (auto-hébergée, pas de requête tierce)
- Aucune dépendance runtime hors Next/React

## Pages

| Route | Contenu |
| --- | --- |
| `/` | Hero, services, réalisations, à propos, contact |
| `/services` | Index des 6 prestations, chaque carte mène à sa page |
| `/services/[slug]` | Page dédiée par service : `zinguerie`, `renovation-toiture`, `urgence`, `rives`, `gouttieres`, `charpente` |
| `/realisations` | Chantiers avant / après + témoignage |
| `/a-propos` | Histoire, chiffres, méthode en 4 étapes, garanties, zone d'intervention |
| `/contact` | Formulaire de devis + coordonnées |
| `/mentions-legales`, `/confidentialite` | Pages légales |

## Développement

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
```

## Contenu éditable

Tout le contenu métier (téléphone, email, adresse, horaires, services,
réalisations, communes desservies) est centralisé dans
[`lib/site.ts`](lib/site.ts) — un seul fichier à modifier pour mettre le site à
jour.

### Ajouter ou modifier un service

Un service = une entrée dans le tableau `services` de `lib/site.ts`. Ajouter une
entrée suffit : la page `/services/<slug>` est générée automatiquement, et le
service apparaît dans le menu déroulant, sur la page d'accueil, dans la grille
`/services`, dans le pied de page et dans le sitemap.

Chaque entrée décrit : le résumé de la carte (`short`), les métadonnées SEO, le
texte d'introduction (`lead`), les paragraphes (`body`), la liste des
prestations (`includes`), les signes d'alerte (`signs`), le déroulé (`steps`) et
la FAQ (`faq`, également publiée en JSON-LD `FAQPage`).

## Formulaire de contact

Le formulaire n'a pas de backend : à la soumission il ouvre le client mail du
visiteur avec la demande pré-remplie, adressée à `livaycouverture@gmail.com`.
Pour un envoi côté serveur (Resend, Formspree, …), remplacer le `onSubmit` de
[`components/ContactForm.tsx`](components/ContactForm.tsx) par un `fetch` vers
une route API.

## Images

Les photos de chantier pointent vers des URL externes
(`api.couverturejjm.com`), définies dans `lib/site.ts`. Pour héberger les
images avec le site, les déposer dans `public/` et mettre à jour les chemins.

## Déploiement

Déployé sur Vercel. Après le premier déploiement, mettre à jour `site.url` dans
`lib/site.ts` avec le domaine final (utilisé par le sitemap, les canonicals et
les données structurées).
