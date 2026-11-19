# Sito dell'Associazione Minerva

Sito statico (HTML + CSS) migrato da Weebly. Nessun build: i file si pubblicano così come sono.

- `index.html`, `servizi.html`, … — le pagine del menu
- `assets/style.css` — grafica (colori, font, impaginazione); i colori principali sono in cima al file
- `assets/site.js` — galleria a schermo intero, menu mobile, video YouTube
- `assets/fonts/` — font Fraunces e Inter (licenza SIL OFL), ospitati nel sito
- `assets/img/` — foto, `assets/docs/` — PDF

## Modificare
Apri la pagina in un editor di testo e cambia il testo dentro `<p>…</p>` o i titoli `<h2>…</h2>`.
Per aggiungere una foto a una galleria: copia l'immagine in `assets/img/` e aggiungi dentro il `<div class="gallery">` giusto:
`<a href="assets/img/FOTO.jpg" class="gimg" data-caption="Didascalia"><img src="assets/img/FOTO.jpg" alt="Didascalia" loading="lazy"></a>`

## Pubblicare
GitHub Pages: Settings → Pages → Deploy from a branch → `main` / root.
Dominio: Settings → Pages → Custom domain → `www.assominerva.com`.
