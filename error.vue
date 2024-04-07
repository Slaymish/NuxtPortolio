<template>
    <div class="error">
        <div class="container">
        <div class="hero">
            <h1>404</h1>
            <p>Page not found</p>
            <div class="socials">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/notes">Notes</a>
            </div>
        </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
@import "assets/main.css";

.container {
max-width: 1200px;
margin: auto;
padding: 60px 30px;
display: flex;
flex-direction: column;
gap: 60px;
}

.hero {
background-color: var(--color-accent);
background-image: linear-gradient(to bottom right, var(--color-accent), var(--color-warning));
color: var(--color-dark);
padding: 80px 30px;
text-align: center;
border-radius: 12px;
box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
margin-bottom: 60px;
}

.hero h1 {
font-size: 3.5rem;
margin-bottom: 30px;
}

.socials {
display: flex;
justify-content: center;
gap: 30px;
margin-top: 30px;
}

.socials a {
color: var(--color-secondary);
transition: transform 0.2s ease, color 0.3s ease;
  text-decoration: none;
  padding: 15px 30px;
  border-radius: 5px;
  background-color: var(--color-light);
  display: inline-block;
}

.socials a:hover {
color: var(--color-primary);
transform: scale(1.1);
}

.about,
.cv .section,
.error {
max-width: 800px;
margin: 0 auto;
padding: 60px 30px;
}

.error h1 {
font-size: 3.5rem;
margin-bottom: 30px;
}

.error p {
font-size: 1.6rem;
margin-bottom: 40px;
}

.error a {
color: var(--color-secondary);
transition: transform 0.2s ease, color 0.3s ease;
  text-decoration: none;
  padding: 15px 30px;
  border-radius: 5px;
  background-color: var(--color-light);
  display: inline-block;
}

.error a:hover {
color: var(--color-primary);
transform: scale(1.1);
}

</style>