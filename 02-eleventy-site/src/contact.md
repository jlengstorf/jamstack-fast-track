---
layout: default
title: Contact
---

# Get in Touch!

Fill out this contact form to send me a message!

<form action="/.netlify/functions/contact" method="POST">
  <label for="name">Full Name</label>
  <input id="name" name="name" type="text" />
  <label for="email">Email Address</label>
  <input id="email" name="email" type="email" />
  <label for="message">Message</label>
  <textarea id="message" name="message"></textarea>
  <button type="submit">Send Message</button>
</form>
