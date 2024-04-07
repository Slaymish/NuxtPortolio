<template>
  <div class="layout">
    <div class="hamburger" @click="toggleHamburgerMenu">
      <div class="hamburger-box">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <transition name="slide-right">
      <nav class="nav" v-show="hamburgerMenuOpen" @click.stop>
        <ul>
          <li><nuxt-link to="/" exact-active-class="active-link" class="nav-link">Home</nuxt-link></li>
          <li><nuxt-link to="/projects" exact-active-class="active-link" class="nav-link">Projects</nuxt-link></li>
          <li><nuxt-link to="/about" exact-active-class="active-link" class="nav-link">About</nuxt-link></li>
          <li><nuxt-link to="/notes" exact-active-class="active-link" class="nav-link">Notes</nuxt-link></li>
          <li><nuxt-link to="/contact" exact-active-class="active-link" class="nav-link">Contact</nuxt-link></li>
        </ul>
      </nav>
    </transition>
    <main class="content">
      <slot></slot>
    </main>
    <footer class="footer">
      <FooterComponent />
    </footer>
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
</script>

<style>
@import '../assets/main.css';

.layout {
  display: flex;
  flex-direction: column;
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
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 1000;
}

.menu-open .nav {
  transform: translateX(0);
}

.nav ul {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0;
  list-style: none;
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

.content {
  flex: 1;
  padding: 20px;
  margin: 0 auto;
  max-width: 800px;
}

.footer {
  background-color: var(--color-dark);
  color: var(--color-background);
  padding: 20px;
  text-align: center;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(-100%);
}

.slide-right-enter-to,
.slide-right-leave-from {
  transform: translateX(0);
}
</style>