<template>
  <div class="layout">
    <div class="hamburger" @click="toggleHamburgerMenu">
      <div class="hamburger-box">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <nav class="nav" :class="{ 'open': hamburgerMenuOpen }" @click.stop>
      <ul>
        <li><nuxt-link to="/" exact-active-class="active-link" class="nav-link">Home</nuxt-link></li>
        <li><nuxt-link to="/projects" exact-active-class="active-link" class="nav-link">Projects</nuxt-link></li>
        <li><nuxt-link to="/about" exact-active-class="active-link" class="nav-link">About</nuxt-link></li>
        <li><nuxt-link to="/notes" exact-active-class="active-link" class="nav-link">Notes</nuxt-link></li>
      </ul>
    </nav>
    <div class="main-wrapper">
      <main class="content">
        <slot></slot>
      </main>
      <footer class="footer">
        <FooterComponent />
      </footer>
    </div>
  </div>
</template>

<script setup>
import FooterComponent from '~/components/FooterComponent.vue';
import { ref, onMounted, onUnmounted } from 'vue';

const hamburgerMenuOpen = ref(false);

const toggleHamburgerMenu = () => {
  hamburgerMenuOpen.value = !hamburgerMenuOpen.value;
  document.body.classList.toggle('menu-open');
};

const closeMenu = () => {
  hamburgerMenuOpen.value = false;
  document.body.classList.remove('menu-open');
};

onMounted(() => {
  window.addEventListener('scroll', closeMenu);
});

onUnmounted(() => {
  window.removeEventListener('scroll', closeMenu);
});

const auth = ref(null);


</script>

<style>
@import '../assets/main.css';

.layout {
  display: flex;
  min-height: 100vh;
  width: 100%;
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 250px;
  background-color: var(--color-dark);
  padding: 20px;
  transition: transform 0.3s ease;
  z-index: 1000;
}

.nav ul {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0;
  list-style: none;
}

.hamburger {
  display: none;
}

.nav ul li a {
  color: var(--color-background);
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  transition: color 0.3s ease, background-color 0.3s ease;
  font-weight: bold;
}

.nav ul li a:hover,
.nav ul li a:focus,
.nav ul li a.active-link {
  background-color: var(--color-primary);
  color: var(--color-dark);
}

.main-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 250px;
  padding: 0 20px; /* Add equal padding on both sides */
}

.content {
  flex: 1;
  max-width: 800px; /* Set a maximum width for the content */
  margin: 0 auto; /* Center the content horizontally */
  padding: 20px 0; /* Adjust vertical padding */
}

.footer {
  background-color: var(--color-dark);
  color: var(--color-background);
  padding: 20px;
  text-align: center;
}

@media (max-width: 768px) {
  .nav {
    transform: translateX(-100%);
  }

  .nav.open {
    transform: translateX(0);
  }

  .hamburger {
    position: fixed;
    top: 50vh;
    left: 0;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 60px;
    background-color: var(--color-dark);
    border-radius: 0 5px 5px 0;
    z-index: 1001;
    cursor: pointer;
  }

  .hamburger-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 24px;
    height: 18px;
  }

  .hamburger-box div {
    width: 100%;
    height: 2px;
    background-color: var(--color-background);
    transition: transform 0.3s ease;
  }

  .menu-open .hamburger-box div:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .menu-open .hamburger-box div:nth-child(2) {
    opacity: 0;
  }

  .menu-open .hamburger-box div:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  .main-wrapper {
    margin-left: 0;
  }
}
</style>