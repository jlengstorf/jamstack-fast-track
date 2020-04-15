---
layout: default
title: Contact
---

# Contact Us

Fill out this contact form to send a message!

<form action="/.netlify/functions/contact" method="POST">
  <label for="name">Full Name</label>
  <input id="name" name="name" type="text" />
  <label for="email">Email Address</label>
  <input id="email" name="email" type="email" />
  <label for="message">Comment</label>
  <textarea id="message" name="message"></textarea>
  <button type="submit">Send Message</button>
</form>
