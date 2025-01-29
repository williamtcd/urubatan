<template>
  <!-- Navbar personalizada -->
  <nav class="flex justify-between items-center p-4" style="position: fixed!important; width: 100%;">
    <ul class="flex gap-4">
      <li><a href="/" class="hover:underline">Edson</a></li>
      <li><a href="/" class="hover:underline">Tragetória</a></li>
      <li><a href="/" class="hover:underline">Livros</a></li>
      <li><a href="/" class="hover:underline">Videos</a></li>
    </ul>
    <button @click="toggleTheme" class="p-2 rounded">
      {{ isDark ? '🌞' : '🌙' }}
    </button>
  </nav>

  <!-- Conteúdo do arquivo Markdown -->
  <!-- <main> -->
    <Content style="padding-top: 70px"/>
  <!-- </main> -->
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { Content } from 'vitepress';

const isDark = ref(false);

const toggleTheme = () => {
isDark.value = !isDark.value;
const html = document.documentElement;
if (isDark.value) {
  html.classList.add('dark');
  localStorage.setItem('theme', 'dark');
} else {
  html.classList.remove('dark');
  localStorage.setItem('theme', 'light');
}
};

watchEffect(() => {
const savedTheme = localStorage.getItem('theme');
isDark.value = savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
document.documentElement.classList.toggle('dark', isDark.value);
});
</script>

<style scoped>
nav {
display: flex;
justify-content: space-between;
position: sticky !important;
z-index: 1000;
}

main {
padding: 2rem;
}
</style>
