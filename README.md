# Shri Jayanti Devi Mandir, Jind — website

A static website (plain HTML, CSS and a little JavaScript). No build step, no server code — it runs on GitHub Pages as-is.

## Pages

| File | Page |
|---|---|
| `index.html` | Home |
| `maa-jayanti-devi.html` | Maa Jayanti Devi |
| `history.html` | The Story of Jind |
| `jaintapuri-to-jind.html` | A City Named for its Goddess (linked from Home and History) |
| `temple.html` | A Living Temple + Darshan timings |
| `festivals.html` | Festivals of Jayanti Devi |
| `seva.html` | Seva + donation QR |
| `visit.html` | Plan Your Visit + map |
| `contact.html` | Contact |

`assets/` holds the stylesheet, script, fonts (self-hosted, SIL Open Font License) and photos.

## Deploy on GitHub Pages (browser only)

1. Sign in at github.com (create a free account if needed).
2. Click **+ → New repository**. Name it e.g. `jayanti-devi-mandir`, choose **Public**, click **Create repository**.
3. On the empty repo page click **uploading an existing file**.
4. Unzip the website. Open the unzipped folder and drag its **contents** (the `.html` files, `README.md` and the `assets` folder) into the browser — not the outer folder itself.
   GitHub accepts 100 files per upload, so do it in two goes:
   - Upload 1: all `.html` files, `README.md`, and the `assets/css`, `assets/js`, `assets/fonts` folders and `assets/favicon.svg`.
   - Upload 2: the `assets/img` folder.
   After each, click **Commit changes**. Check that `index.html` sits at the top level of the repo.
5. Go to **Settings → Pages**. Under **Build and deployment**, set **Source: Deploy from a branch**, **Branch: main**, folder **/ (root)**, then **Save**.
6. Wait 1–3 minutes and refresh. The address appears at the top of the Pages screen:
   `https://<your-username>.github.io/jayanti-devi-mandir/`

## Deploy with git (alternative)

```bash
cd path/to/unzipped-site
git init
git add .
git commit -m "Jayanti Devi Mandir website"
git branch -M main
git remote add origin https://github.com/<your-username>/jayanti-devi-mandir.git
git push -u origin main
```
Then do step 5 above.

## Use your own domain (optional, e.g. jayantidevi.in)

1. **Settings → Pages → Custom domain**: type the domain, **Save**.
2. At your domain registrar, add DNS records:
   - `A` records for the bare domain: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` record for `www` → `<your-username>.github.io`
3. When GitHub shows the DNS check passed (can take a few hours), tick **Enforce HTTPS**.

## Updating content later

Edit any `.html` file directly on GitHub (open the file → pencil icon → **Commit changes**). The live site updates within a couple of minutes.

## Before going live — please confirm with the temple

- **Ways to Serve** (seva.html): the supplied copy marks this list as "once confirmed by the temple". It is shown as a plain list with no descriptions.
- **Social links**: the footer has YouTube / Facebook / Instagram links commented out. Add the real profile URLs in each page's footer and remove the `<!--` `-->` markers.
- **Donation QR**: taken from the temple's donation poster and verified to read `shrijayantidevimandir@sbi` (Shri Jayanti Devi Welfare Trust). For the sharpest print, replace `assets/img/donate-qr.png` with the original QR image from the bank.
- **Map pin**: check the map on Home and Visit lands on the mandir. If not, replace the `q=` part of the map address with the exact Google Maps place.
- Three lines in the supplied text read as notes to the web team and were left off the site:
  "This deserves its own page because it's such a good story.",
  "Once confirmed by the temple, this page could include:",
  "The temple's own traditions and practices should be the primary source for explaining how Maa Jayanti Devi is understood and worshipped here."
