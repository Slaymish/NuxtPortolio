<template>
    <div class="container">
        <div class="hero">
            <h1>Projects</h1>
        </div>
        <div class="card-container">
            <!-- Render skeleton cards while data is loading -->
            <div v-if="isLoading" class="cards">
                <CardComponent
                    v-for="index in 8"
                    :key="index"
                    :name="'Loading...'"
                    :description="'Loading...'"
                    :link="'#'"
                    :image="'#'"
                    :alt="'Loading...'"
                    :date="'Loading...'"
                />
            </div>
            
            <!-- Render actual project cards once data is loaded -->
            <div v-else class="cards">
                <CardComponent
                    v-for="project in projects"
                    :key="project.id"
                    :name="project.title"
                    :description="project.description"
                    :link="project.url"
                    :image="'https://via.placeholder.com/300'"
                    :alt="project.alt"
                    :date="project.date"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCollection } from 'vuefire'
import { collection , getFirestore } from 'firebase/firestore'
import { firebaseApp } from '../firebase.ts'

const db = getFirestore(firebaseApp)
const projectsCollection = collection(db, 'projects')

// Use useCollection to create a reactive binding to the Firestore collection
const { data: projects } = useCollection(projectsCollection)

// Sort by timestamp
projects.value.sort((a, b) => b.date - a.date)

// Track whether data is still loading
const isLoading = ref(true)

// Set isLoading to false when data is loaded
if (projects) {
    isLoading.value = false
}
</script>

<style scoped>
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

.card-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  
}

.card {
  background-color: var(--color-background);
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

@media screen and (max-width: 768px) {
  .container {
    padding: 0 20px;
  }

  .hero {
    padding: 60px 20px;
  }
  
}
</style>