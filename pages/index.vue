<template>
    <div class="container">
        <section class="hero">
            <div class="profile">
                <img src="../assets/headshot.png" alt="Hamish Burke" class="headshot">
                <h1 class="name">Hamish Burke</h1>
            </div>
            <p class="tagline">Computer Science Enthusiast | Cybersecurity Specialist</p>
            <NuxtLink to="/about" class="cta-button cta-main">Discover My Journey</NuxtLink>
        </section>

        <section class="highlights">
            <article class="teaser" @click="navigateTo('/projects')">
                <h2>Featured Projects</h2>
                <p>Dive into my projects where I challenge the norms of cybersecurity and software development.</p>
                <NuxtLink to="/projects" class="cta-button">Explore</NuxtLink>
            </article>
            
            <article class="teaser" @click="navigateTo('/notes')">
                <h2>Insights & Notes</h2>
                <p>Gain insights from my notes on cybersecurity trends, coding tutorials, and more.</p>
                <NuxtLink to="/notes" class="cta-button">Read More</NuxtLink>
            </article>
        </section>

        <section class="contact-teaser">
            <h2>Let's Collaborate</h2>
            <p>Have an idea or project in mind? I'm all ears. Let's make something great together.</p>
            <NuxtLink to="/contact" class="cta-button cta-main">Get In Touch</NuxtLink>
        </section>
    </div>
</template>

<script setup>

const router = useRouter();

const navigateTo = (path) => {
    router.push(path);
};
</script>

<style scoped>
@import "../assets/main.css";

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
  padding: 80px 40px;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.profile {
  margin-bottom: 30px;
}

.headshot {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}

.name {
  font-size: 3rem;
  margin-top: 20px;
}

.tagline {
  font-size: 1.6rem;
  color: var(--color-secondary);
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 30px;
}

.hero p {
  font-size: 1.6rem;
  margin-bottom: 40px;
}

.highlights {
  display: flex;
  gap: 30px;
  justify-content: space-between;
}

.teaser {
  flex: 1;
  background-color: var(--color-background);
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.teaser:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.teaser h2,
.contact-teaser h2 {
  color: var(--color-secondary);
  margin-bottom: 20px;
}

.teaser p,
.contact-teaser p {
  margin-bottom: 30px;
}

.cta-button {
  padding: 20px 40px;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.cta-main {
  background-color: var(--color-primary);
  color: var(--color-dark);
}

.cta-button:hover {
  background-color: var(--color-warning);
  color: var(--color-background);
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .highlights {
    flex-direction: column;
  }
}

.contact-teaser {
  text-align: center;
  padding: 40px;
  background-image: linear-gradient(to bottom right, var(--color-light), var(--color-accent));
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>