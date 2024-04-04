<template>
  <div class="footer">
        <!-- Projects Button -->
    <div class="projects-button">
        <NuxtLink to="/projects" class="button">View My Projects</NuxtLink>
    </div>

    <div class="socials">
      <a href="mailto:hamishapps@gmail.com" target="_blank" aria-label="Email">
        <i class="fas fa-envelope"></i>
      </a>
      <a href="http://github.com/Slaymish" target="_blank" aria-label="GitHub">
        <i class="fab fa-github"></i>
      </a>
      <a href="http://instagram.com/hamishcreatingbadstuff" target="_blank" aria-label="Instagram">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="https://www.linkedin.com/in/hamish-burke-2301669a/" target="_blank" aria-label="LinkedIn">
        <i class="fab fa-linkedin"></i>
      </a>
    </div>
    <p>&copy; {{ currentYear }} Hamish Burke. All rights reserved.</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
}

.socials {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.socials a {
  color: var(--color-background);
  font-size: 24px;
  transition: color 0.3s ease;
}

.socials a:hover,
.socials a:focus {
  color: var(--color-primary);
}

.button {
  padding: 10px 20px;
  border-radius: 5px;
  background-color: var(--color-primary);
  color: var(--color-dark);
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: var(--color-warning);
  color: var(--color-background);
}



p {
  margin: 0;
  font-size: 14px;
}
</style>