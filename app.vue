<template>
    <nav class="flex justify-between items-center p-4" style="position: fixed; width: 100%;">
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
  <main class="pt-18">
  <Apresentacao />
    <Tragetoria />
    <Livros />
    <Videos />
  </main>
</template>

<script setup>

import Apresentacao from './components/Apresentacao.vue'
import Tragetoria from './components/Tragetoria.vue'
import Livros from './components/Livros.vue'
import Videos from './components/Videos.vue'
import { ref, onMounted } from 'vue';

const isDark = ref(false);

// Verificar e aplicar o tema salvo
onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    isDark.value = savedTheme === 'dark';
  } else {
    // Detecta o tema preferido pelo sistema
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  // Aplica a classe 'dark' no html
  document.documentElement.classList.toggle('dark', isDark.value);
});

// Função para alternar entre os temas
const toggleTheme = () => {
  isDark.value = !isDark.value;
  const html = document.documentElement;

  // Adiciona ou remove a classe 'dark' conforme o estado
  if (isDark.value) {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};
</script>