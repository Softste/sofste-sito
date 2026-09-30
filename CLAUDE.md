# Sito Sofste

Sito vetrina di **Sofste** — "Software semplici per processi complessi".
Attività di sviluppo software e automazioni per aziende.

## Obiettivo

Un sito semplice e professionale che:
- dia credibilità quando un potenziale cliente cerca "Sofste" (non deve sembrare un freelance improvvisato);
- spieghi in modo chiaro cosa faccio e per chi;
- porti il visitatore a contattarmi.

I testi e i dati reali sono in `CONTENUTI.md`: usali come unica fonte. Dove trovi `[DA COMPILARE]`
non inventare dati (nomi clienti, numeri, recensioni, P.IVA): chiedi oppure lascia fuori la sezione.

## Scelte tecniche

- Sito statico: HTML, CSS e JavaScript semplice, senza framework né build.
- Una sola pagina (`index.html`) con sezioni ad ancora, più `privacy.html`.
- Deve funzionare aprendo `index.html` con doppio clic e poter essere pubblicato su un hosting statico
  gratuito (Netlify, Cloudflare Pages, GitHub Pages).
- Responsive: prima mobile, poi desktop.
- Veloce e leggero: niente librerie pesanti, immagini ottimizzate, font con fallback di sistema.
- Accessibile: contrasto adeguato, HTML semantico, navigabile da tastiera.
- SEO di base: `title`, meta description, Open Graph, favicon, `lang="it"`.

## Struttura

```
index.html        pagina principale
privacy.html      informativa privacy
css/style.css
js/main.js
assets/img/       logo, favicon, immagini
CONTENUTI.md      testi e dati dell'attività
```

## Sezioni della pagina

1. Hero — nome, payoff, una frase su cosa faccio, pulsante "Contattami"
2. Servizi — 3-4 schede
3. Come lavoro — i passaggi dal primo contatto alla consegna
4. Chi sono — breve presentazione
5. Contatti — email, telefono/WhatsApp, modulo di contatto
6. Footer — dati fiscali, link privacy

## Stile

- Sobrio, pulito, moderno. Molto spazio bianco, pochi colori, un solo colore d'accento.
- Tono dei testi: diretto e concreto, in italiano, senza gergo tecnico né frasi da brochure.
- Niente foto stock generiche e niente animazioni invadenti.

## Note

- Il modulo di contatto su un sito statico richiede un servizio esterno (es. Formspree, Netlify Forms):
  proponi l'opzione prima di collegarla. In alternativa bastano link `mailto:` e WhatsApp.
- Obblighi per un sito italiano: P.IVA nel footer, informativa privacy, banner cookie solo se si usano
  cookie non tecnici (meglio evitarli).
