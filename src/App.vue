<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <header>
        <div class="wrapper">
            <nav>
                <RouterLink to="/">Récents</RouterLink>
                <RouterLink to="/contacts">Contacts</RouterLink>
                <RouterLink to="/favorites">Favoris</RouterLink>
            </nav>
        </div>
    </header>

    <RouterView />
</template>

<style scoped lang="scss"></style>
