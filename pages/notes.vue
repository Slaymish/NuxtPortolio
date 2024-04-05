<template>
    <div class="container">
        <div class="hero">
            <h1>My Notes</h1>
        </div>

            <div class="notes">
                <div v-for="note in notes" :key="note.title" class="note">
                    <h2>{{ note.title }}</h2>
                    <p class="date">
                        <em>{{ note.date.toDate().toLocaleDateString() }}</em>
                    </p>
                    <p>{{ note.note }}</p>
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
const projectsCollection = collection(db, 'notes')

// Use useCollection to create a reactive binding to the Firestore collection
const { data: notes } = useCollection(projectsCollection)

// Sort by timestamp
notes.value.sort((a, b) => b.date - a.date)

// Track whether data is still loading
const isLoading = ref(true)

// Set isLoading to false when data is loaded
if (notes) {
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
    background-image: linear-gradient(to bottom right, var(--color-accent), var(--color-warning));
    color: var(--color-dark);
    padding: 60px 20px;
    text-align: center;
    border-radius: 12px;
    box-shadow: 0 6px 12px rgba(0,0,0,0.1);
    margin-bottom: 40px;
}

.hero h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
}

.notes {
    display: flex;
    flex-direction: column;
    gap: 20px;

    width: 100%;
}

.date {
    color: var(--color-accent);
    margin-top: 5px;
}

.note {
    background-color: var(--color-background);
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.note:hover {
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    transform: translateY(-5px);
}

.note h2 {
    color: var(--color-secondary);
    margin-bottom: 15px;
}

.note p {
    color: var(--color-dark);
    margin-top: 10px;
}
</style>
