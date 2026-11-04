# CCTV Business Website — Beginner Guide

A responsive, static CCTV/security installation business website built with HTML, CSS and vanilla JavaScript.

## 1. What is included?

- `index.html` — page content and structure
- `styles.css` — responsive design and visual styling
- `script.js` — mobile navigation, contact details and enquiry form
- No paid software, framework, build step or database is required.

## 2. Tools to install

1. Install Visual Studio Code: https://code.visualstudio.com/
2. Optional: install Google Chrome or Firefox for testing.
3. Optional: install Git: https://git-scm.com/

You can edit the files in VS Code and open `index.html` in your browser. For a better development experience, install the VS Code extension **Live Server** (Ritwick Dey), then right-click `index.html` and choose **Open with Live Server**.

## 3. Personalise the website

### A. Business name
In `index.html`, search for `NORTHSTAR` and `Northstar CCTV`. Replace these with your real business name.

### B. Email and phone
Open `script.js` and edit the `BUSINESS` object near the top:

```js
const BUSINESS = {
  name: "Your CCTV Company",
  email: "you@yourcompany.co.uk",
  phone: "+44 0000 000000",
  whatsapp: ""
};
```

Use a real email address. The current enquiry form uses `mailto:`: it opens the visitor's email app with a prepared message. It does not send automatically and does not store enquiries. A server-side form service or backend is needed for automatic delivery/storage.

### C. Service area and wording
Edit the text in `index.html` so the services, locations, guarantees and claims accurately describe your business. Do not claim certifications, insurance, response times or warranties unless you can substantiate them.

### D. Images
The hero background currently uses a remote Unsplash image URL in `styles.css`. Replace it with a photo you own or have permission to use. To host it yourself, create an `images` folder, add your image, and change the CSS URL to `images/your-photo.jpg`.

### E. Add WhatsApp (optional)
The WhatsApp setting is a placeholder in this starter. If you want a WhatsApp button, use your real business number and add a link in `index.html` in this format:
`https://wa.me/447700900123`
Use international digits only, with no plus sign or spaces. Do not publish a personal number without considering privacy.

## 4. Run the website locally

1. Unzip the project.
2. Open the `cctv-business-website` folder in VS Code.
3. Open `index.html` in a browser, or use Live Server.
4. Resize the browser to check desktop and mobile layouts.
5. Test every navigation link and submit the contact form with sample details. The email app should open; cancel the draft after checking.

## 5. Free deployment with GitHub Pages

1. Create a GitHub account: https://github.com/
2. Create a new public repository, for example `cctv-business-website`.
3. Upload `index.html`, `styles.css`, `script.js` and this README to the repository root.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch `main` and folder `/ (root)`, then save.
7. Wait for GitHub Pages to publish the site. The Pages panel will show the website address.
8. Open that address on a phone and computer and test it again.

GitHub Pages hosts static files. It does not run PHP, Node.js or a database. A custom domain usually costs money, so start with the free GitHub Pages address.

## 6. Database: do you need one?

Not for this first business brochure website. It displays information and prepares an email enquiry. Adding a database before you need one adds complexity and creates extra security responsibilities.

If you later need a private admin area, saved leads, customer accounts, bookings or quotations, add a backend and database. Possible later choices include:
- Backend: Node.js with Express
- Database: PostgreSQL or SQLite
- Hosting: a provider that supports your backend and database

Never put database passwords, private API keys or email-service secrets in browser JavaScript or a public GitHub repository.

## 7. Security and privacy checklist

- Use strong, unique passwords and enable two-factor authentication on GitHub and your email.
- Only publish business contact details intended for public use.
- Do not collect more personal information than you need.
- Publish a privacy notice explaining who operates the site, what enquiry data is collected, why it is used, how long it is kept and how people can contact you about it.
- If you add analytics, cookies, tracking, a backend or a hosted form provider, review the relevant privacy and cookie requirements before launch.
- Use images you own or are licensed to use.
- Keep all account credentials and secret keys out of the website files.
- Keep the website content truthful: only advertise qualifications, guarantees and services you actually provide.

## 8. Testing checklist

- [ ] Homepage loads without errors.
- [ ] Logo and navigation links work.
- [ ] Mobile menu opens, closes and follows links.
- [ ] Services, about, process and FAQ sections display correctly.
- [ ] FAQ items expand and collapse.
- [ ] Contact form validates required fields.
- [ ] Contact form opens an email draft to the correct business email.
- [ ] Email, phone and business name are real, not placeholders.
- [ ] Website works on a phone, tablet and desktop.
- [ ] Text is readable and keyboard navigation works.
- [ ] All images load and are licensed for use.
- [ ] Privacy notice and business details are ready before public launch.

## 9. Troubleshooting

**The styling is missing:** Check that `styles.css` is in the same folder as `index.html` and the filename matches exactly.

**The menu does not open:** Check that `script.js` is in the same folder and the browser console has no errors.

**The contact form does not send:** This starter intentionally opens the visitor's email app. It is not an automatic web form. Configure a reputable form provider or a secure backend if you need automatic submissions.

**The hero image does not load:** Check your internet connection or replace the remote image URL with a local image.

## 10. Before going live

Replace every sample name, email address and phone number; verify your service descriptions; add your real business location and privacy information; test the published URL. If you install CCTV systems in the UK, make sure your business practices and customer advice account for applicable data protection and surveillance requirements.

Useful references:
- GitHub Pages: https://docs.github.com/en/pages
- VS Code: https://code.visualstudio.com/docs
- ICO CCTV guidance: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/cctv/
