# Workshop Playbook

This document is a high-level overview of what we’ll cover in the workshop.

## Legend

- 👨‍🏫 **Presentation** — I’ll show slides, talk about concepts, and other teacher-ey things
- 👀 **Watch (or code-along)** — I’ll build something and explain as I go. I’ll commit and push my changes after each of these steps, so you can watch this step, then pull the changes. Or, if you want extra practice, you can code along.
- 💪 **Exercise** — you’ll build something on your own to practice a skill we just learned. We’ll go over the solution together after each exercise.
- 🤝 **Code-Along** — we’ll build something together.

## Section 1: Static Sites, No Tools

Build a plain HTML and CSS site with no build tools or CLIs and get it live on the internet.

Move into the `01-really-static` directory. The CSS for this exercise has already been created.

- 👨‍🏫 Introduce the Jamstack architecture
- 👀 Build `index.html`, load it in the browser
- 💪 Build `about.html` 
  - NOTE: the nav on `index.html` will be out of date! 😱
- 🤝 Add active nav item logic
- 👀 Deploy to Netlify by dragging and dropping the folder with our website
- 💪 Create or log into your Netlify account, then deploy the site

## Section 2: Build Time Rendering

Build a website using 11ty, then deploy it using Netlify’s CLI.

Move into the `02-static-site-generator` directory. The CSS for this exercise has already been created.

- 👨‍🏫 Introduce static site generators
- 👨‍🏫 Build Time Rendering vs. Request Time Rendering
- 👀 Confugure 11ty: create `.eleventy.js`, a layout file, and `index.md`
- 💪 Create `about.md`
- 🤝 Add active nav item logic
- 🤝 Initialize this directory as a new git repo and put it on GitHub
- 🤝 Install the Netlify CLI and deploy the site

## Section 3: Handle User Input

Add a contact form and a serverless function to handle form submissions.

Stay in the 11ty site. We’ll add this here.

- 👨‍🏫 What are serverless functions?
- 👀 Build a comment form in the layout (GitHub username, comment, page)
- 👀 Build a serverless function that echoes the comment form data
- 💪 Build a contact page with a contact form (name, email, message)
- 💪 Build a serverless function that echoes the contact form data

## Section 4: Save User Input to a Database

Create a database and have our serverless functions send data there for storage.

- 👨‍🏫 How do databases work on the Jamstack?
- 🤝 Create Fauna account
- 👀 Define a schema for the comment form
  - Import GraphQL schema
  - Create a server key
  - Add to Netlify site env vars
- 👀 Write a utility to send queries to Fauna
  - ntl dev
  - Submit a comment
  - Check in Fauna that it saved
- 💪 Add a Contact schema to the database
- 💪 Update the serverless function to save entries to the database

## Section 5: Load and Display Data from a Database

Read from the database using a serverless function and return the data for display.

- 👨‍🏫 Why do we use serverless functions to retrieve data?
- 🤝 Modify the schema to add a query for comments by page
- 🤝 Write a serverless function to query for comments
- 🤝 Write the JavaScript to call the serverless function and display comments

## Section 6: Protect Routes

This is a rudimentary setup for auth, but it shows the principals of how to protect a route.

- 👨‍🏫 How does authentication work on the Jamstack?
- 👨‍🏫 What are we *not* going to cover in this workshop?
- 🤝 Deploy the Gatsby site
- 🤝 Create Dashboard and Login pages
- 🤝 Create a Secret Stuff component that redirects to login if not logged in
- 🤝 Create a login form to “log in”

## Section 7: Load User-Specific Data Asynchronously

Once our users can identify themselves, we can customize the app’s content based on who they are.

- 👨‍🏫 Loading content based on user-specific data
- 💪 Update the DB schema to query comments by user
- 💪 Write a serverless function to load comments by user
- 💪 Create a new component to call the serverless function and display the data
- 💪 Add the new component to the secret stuff component
