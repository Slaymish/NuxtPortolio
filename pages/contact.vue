<template>
    <div class="contact-container">
        <div class="hero">
            <h1>Contact Me</h1>
            <p>Let's get in touch! Whether you have a question or just want to say hi, I'm here.</p>
        </div>

        <div class="contact-info">
            <h2>Email Me Directly</h2>
            <p><a href="mailto:hamishapps@gmail.com">hamishapps@gmail.com</a></p>

            <h2>Connect With Me</h2>
            <div class="social-links">
                <a href="https://instagram.com/hamishcreatingbadstuff" target="_blank">Instagram</a>
                <a href="https://linkedin.com/in/hamish-burke-2301669a" target="_blank">LinkedIn</a>
                <a href="https://github.com/Slaymish" target="_blank">GitHub</a>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.contact-container {
  max-width: 800px;
  margin: auto;
  padding: 60px;
  text-align: center;
}

.hero {
  background-color: var(--color-accent);
  background-image: linear-gradient(to bottom right, var(--color-accent), var(--color-warning));
  color: var(--color-dark);
  padding: 80px 40px;
  border-radius: 8px;
  margin-bottom: 40px;
}

.contact-info h2 {
  color: var(--color-primary);
  margin-top: 40px;
  font-size: 2.5rem;
}

.contact-info p {
  margin-top: 20px;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
}

.social-links a {
  background-color: var(--color-primary);
  color: var(--color-background);
  padding: 20px 40px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
}

.social-links a:hover {
  background-color: var(--color-warning);
}

.social-links a::before {
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.social-links a[href*="instagram.com"]::before {
  background-image: url('path/to/instagram-icon.svg');
}

.social-links a[href*="linkedin.com"]::before {
  background-image: url('path/to/linkedin-icon.svg');
}

.social-links a[href*="github.com"]::before {
  background-image: url('path/to/github-icon.svg');
}


@media screen and (max-width: 768px){
  .contact-container {
    width: 100vw;
    padding: 40px;
    overflow: hidden;

  }

  .hero {
    padding: 60px 30px;
    max-width: 100vw;
  }
}
</style>