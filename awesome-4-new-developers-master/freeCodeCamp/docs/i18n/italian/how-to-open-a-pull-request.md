# Come aprire una Pull Request (PR)

Una pull request (PR) consente di inviare modifiche dal tuo fork su GitHub al repository principale di freeCodeCamp.org. Una volta che hai fatto delle modifiche al codice, puoi seguire queste linee guida per aprire una PR.

> [!NOTE] La tua PR dovrebbe essere in inglese. Vedi [qui](https://contribute.freecodecamp.org/#/index?id=translations) per come contribuire alla traduzione.

## Preparare un buon titolo PR

Si consiglia di utilizzare [Titolo convenzionale e messaggi](https://www.conventionalcommits.org/) per commit e le pull request. La convenzione ha il seguente formato:

> `<type>([optional scope(s)]): <description>`
> 
> Per esempio:
> 
> `fix(learn): tests for the do...while loop challenge`

Quando apri una Pull Request (PR), puoi usare la seguente lista per determinare il tipo (type), l'ambito (scope) (opzionale), e la descrizione.

**Tipo:**

| Tipo  | Quando selezionare                                                                     |
|:----- |:-------------------------------------------------------------------------------------- |
| fix   | Cambiamenti o aggiornamenti/miglioramenti a funzioni, test, testo di una lezione, ecc. |
| feat  | Solo se si aggiungono nuove funzionalità, test, ecc.                                   |
| chore | Cambiamenti che non sono legati a codice, test, o testo di una lezione.                |
| docs  | Modifiche alla directory `/docs` o alle linee guida per i contributi, ecc.             |

**Ambito:**

Puoi selezionare un ambito da [questo elenco di etichette](https://github.com/freeCodeCamp/freeCodeCamp/labels?q=scope).

**Descrizione:**

Scrivila breve (meno di 30 caratteri) e semplice: puoi aggiungere ulteriori informazioni nella casella di descrizione PR e nei commenti.

Alcuni esempi di buoni titoli PR sarebbero:

- `fix(a11y): improved search bar contrast`
- `feat: add more tests to HTML and CSS challenges`
- `fix(api,client): prevent CORS errors on form submission`
- `docs(i18n): Chinese translation of local setup`

## Proporre una Pull Request

1. Una volta che le modifiche sono state effettuate, ti verrà chiesto di creare una pull request sulla pagina GitHub della tua fork.

   ![Immagine - Confrontare il prompt delle pull request su GitHub](https://contribute.freecodecamp.org/images/github/compare-pull-request-prompt.png)

2. Di default, tutte le pull request dovrebbero essere sul repository principale di freeCodeCamp, nel ramo `main`.

   Assicurati che il tuo Base Fork sia impostato su freeCodeCamp/freeCodeCamp quando sollevi una Pull Request.

   ![Immagine - Confrontare i fork quando si effettua una pull request](https://contribute.freecodecamp.org/images/github/comparing-forks-for-pull-request.png)

3. Fai la pull request dal tuo ramo al ramo `main` di freeCodeCamp.

4. Nel corpo della tua PR includi un riepilogo più dettagliato delle modifiche apportate e perché.

   - Ti sarà presentato un modello di pull request. Questa è una lista di controllo che avresti dovuto seguire prima di aprire la pull request.

   - Compila i dettagli come ritieni opportuno. Queste informazioni saranno esaminate e i revisori decideranno se la tua pull request è accettata.

   - Se la PR ha lo scopo di affrontare un'issue GitHub esistente, alla fine del corpo della descrizione della tua PR, usa la parola chiave _Closes_ con il numero dell'issue per [chiudere automaticamente questa issue se la PR è accettata](https://help.github.com/en/articles/closing-issues-using-keywords).

     > Esempio: `Chiude #123` chiuderà l'issue 123

5. Indica se hai testato i tuoi cambiamenti su una copia locale del sito oppure no.

   - Questo è molto importante quando si fanno cambiamenti che non sono solo modifiche a contenuto testuale come documentazione o descrizioni di sfide. Esempi di modifiche che hanno bisogno di essere testate localmente includono JavaScript, CSS o HTML che potrebbero cambiare funzionalità o layout di una pagina.

   - Se la tua PR ha effetto sul comportamento di una pagina dovrebbe essere accompagnato da corrispondenti [test di integrazione di Cypress](/how-to-add-cypress-tests).

## Feedback sulle pull request

> Congratulazioni! :tada: per avere fatto una PR e grazie mille per aver speso del tempo per contribuire.

I nostri moderatori ora daranno un'occhiata e ti lasceranno un feedback. Ti preghiamo di essere paziente con i colleghi moderatori e di rispettare il loro tempo. Tutte le pull request sono riviste a tempo debito.

E come sempre, poni liberamente le tue domande nella [categoria 'Contributors' del nostro forum](https://forum.freecodecamp.org/c/contributors) o [nella chat room per i contributori](https://chat.freecodecamp.org/channel/contributors).

> [!TIP] Se vuoi contribuire a più di una PR, ti raccomandiamo di leggere la [guida su fare modifiche e sincronizzare](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally?id=making-changes-locally) per evitare di dover cancellare il tuo fork.

## Conflitti su una pull request

I conflitti possono sorgere perché molti contributori lavorano sul repository e le modifiche possono interrompere la tua PR in attesa di una revisione e di un merge.

Spesso non si può richiedere un rebase, perché schiacciamo tutti i commit, tuttavia se è richiesto un rebase qui è quello che dovresti fare.

### Per le solite correzioni di bug e funzionalità

Quando stai lavorando su normali bug e funzionalità sul nostro ramo di sviluppo `main`, puoi fare un semplice rebase:

1. Ricostruisci la tua copia locale:

   ```console
   git checkout <pr-branch>
   git pull --rebase upstream main
   ```

2. Risolvi eventuali conflitti e aggiungi / modifica i commit

   ```console
   # O
   git add .
   git commit -m "chore: resolve conflicts"

   # Or
   git add .
   git commit --amend --no-edit
   ```

3. Ritorna le modifiche alla PR

   ```console
   git push --force origin <pr-branch>
   ```

### Per il curriculum e le caratteristiche future

Quando stai lavorando su funzionalità dei rami `next-*` del nuovo curriculum, devi fare un cherry pick:

1. Assicurati che il tuo upstream sia sincronizzato con il tuo repository locale:

   ```console
   git checkout main
   git fetch --all --prune
   git checkout next-python-projects
   git reset --hard upstream/next-python-projects
   ```

2. Fai un backup

   a. Elimina anche il ramo locale dopo aver effettuato un backup (se lo hai ancora localmente):

      ```console
      git checkout <pr-branch-name>

      # example:
      # git checkout feat/add-numpy-video-question

      git checkout -b <backup-branch-name>

      # example:
      # git checkout -b backup-feat/add-numpy-video-question

      git branch -D <pr-branch-name>
      ```

   b. O solo un backup del ramo pr (se non lo hai localmente):

      ```console
      git checkout -b <backup-branch-name> origin/<pr-branch-name>

      # esempio:
      # git checkout -b backup-feat/add-numpy-video-question origin/feat/add-numpy-video-question
      ```

4. Inizia con una slate pulita:

   ```console
   git checkout -b <pr-branch-name> next-python-projects
   git cherry-pick <commit-hash>
   ```

5. Risolvere eventuali conflitti e pulire, installare test di esecuzione

   ```console
   npm run clean

   npm ci
   npm run test:curriculum --superblock=<superblock-name>

   # example:

   # npm run test:curriculum --superblock=python-for-everybody

   ```

6. Se tutto sembra funzionare fai un push alla PR

   ```console
   git push --force origin <pr-branch-name>
   ```
