<template>
  <div class="layout">
    <nav class="nav">
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/projects">Projects</NuxtLink></li>
        <li><NuxtLink to="/notes">Notes</NuxtLink></li>
        <li><NuxtLink to="/about">About me</NuxtLink></li>
      </ul>
    </nav>
    <main class="content">
      <slot></slot>
    </main>
    <footer class="footer">
      <FooterComponent />
    </footer>
  </div>
</template>

<script setup>
</script>

<style>
@import '../assets/main.css';

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.nav {
  background-color: var(--color-dark);
  padding: 20px;
}

.nav ul {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 0;
  list-style: none;
}

.nav ul li a {
  color: var(--color-background);
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  transition: color 0.3s ease, background-color 0.3s ease;
  font-weight: bold;
}

.nav ul li a:hover,
.nav ul li a:focus {
  background-color: var(--color-primary);
  color: var(--color-dark);
}

.content {
  flex: 1;
  padding: 40px;
}

.footer {
  background-color: var(--color-dark);
  color: var(--color-background);
  padding: 20px;
  text-align: center;
}
</style>