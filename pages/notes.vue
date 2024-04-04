<template>
    <div class="container">
        <div class="hero">
            <h1>My Notes</h1>
        </div>

            <div class="notes">
                <div v-for="note in notes" :key="note.title" class="note">
                    <h2>{{ note.title }}</h2>
                    <p>{{ note.content }}</p>
                    <p>{{ note.date }}</p>
                </div>
            </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const notes = ref([
    {
        title: 'Note 1',
        content: 'This is a note',
        date: '2021-10-10'
    },
    {
        title: 'Note 2',
        content: 'This is a note',
        date: '2021-10-10'
    },
    {
        title: 'Note 3',
        content: 'This is a note',
        date: '2021-10-10'
    },
    {
        title: 'Note 4',
        content: 'This is a note',
        date: '2021-10-10'
    },
    {
        title: 'Note 5',
        content: 'This is a note',
        date: '2021-10-10'
    }
]);



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
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
    padding: 20px;
}

.note {
    background-color: var(--color-background);
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: box-shadow 0.3s ease, transform 0.2s ease;
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
