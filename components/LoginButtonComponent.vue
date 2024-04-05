<template>
    <div>
        <button @click="login" v-if="!loggedIn">Login with Google</button>
        <button @click="logout" v-else>Logout</button>
    </div>
</template>

<script setup>
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const loggedIn = ref(false);

const login = async () => {
    try {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
        loggedIn.value = true;
    } catch (error) {
        console.error(error);
    }
};

const logout = async () => {
    try {
        const auth = getAuth();
        await signOut(auth);
        loggedIn.value = false;
    } catch (error) {
        console.error(error);
    }
};
</script>

<style scoped>
    button {
        padding: 10px 20px;
        border-radius: 5px;
        background-color: var(--color-primary);
        color: var(--color-dark);
        border: none;
        text-decoration: none;
        transition: background-color 0.3s ease;
        cursor: pointer;
    }

    button:hover {
        background-color: var(--color-warning);
        color: var(--color-background);
    }

</style>