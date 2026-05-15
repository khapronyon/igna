# CLAUDE.md

Linee guida per Claude Code quando lavora in questo repository.

## Stack
- React + Vite + Tailwind CSS (v4, plugin Vite ufficiale)
- GitHub per il versioning
- Netlify per il deploy (build: `npm run build`, publish: `dist`)

## Flusso di lavoro
1. Prima di ogni task complesso, esponi il piano in massimo 5 righe
2. Attendi approvazione prima di eseguire
3. Produci sempre file completi e pronti all'uso, mai troncati
4. Non eseguire commit né push: li gestisce l'utente manualmente
5. Usa `feature/nome` per lo sviluppo, `main` va in produzione

## Struttura del progetto
```
src/components/   componenti riutilizzabili (PascalCase)
src/pages/        pagine principali
src/assets/       immagini, font, icone
src/styles/       CSS globale e variabili
public/           file statici
```

## Regole
- Nessuna spiegazione del codice salvo richiesta esplicita
- Nessun placeholder: il codice deve funzionare al primo run
- Un file per componente
- Styling con Tailwind; CSS custom solo se strettamente necessario
- Se un task tocca più file, completali tutti prima di fermarti
- Se incontri un ostacolo, proponilo all'utente senza procedere autonomamente

## Comandi
- `npm run dev`     avvia il dev server Vite
- `npm run build`   build di produzione in `dist/`
- `npm run preview` anteprima della build
- `npm run lint`    esegue ESLint
