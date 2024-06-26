<!-- src/components/Chercheurs.vue -->

<!-- Désactiver la règle eslint multi-word-component-names -->
/* eslint-disable vue/multi-word-component-names */
<template>
  <div>
    <h1>Liste des Chercheurs</h1>
    <ul>
      <li v-for="chercheur in chercheurs" :key="chercheur.id">
        {{ chercheur.nom }} - {{ chercheur.specialite }}
      </li>
    </ul>
    <form @submit.prevent="addChercheur">
      <input v-model="nom" placeholder="Nom" required />
      <input v-model="specialite" placeholder="Spécialité" required />
      <button type="submit">Ajouter Chercheur</button>
    </form>
  </div>
</template>

<script>
import { getChercheurs, createChercheur } from '../api';

export default {
  data() {
    return {
      chercheurs: [],
      nom: '',
      specialite: '',
    };
  },
  methods: {
    async fetchChercheurs() {
      const response = await getChercheurs();
      this.chercheurs = response.data;
    },
    async addChercheur() {
      const newChercheur = {
        nom: this.nom,
        specialite: this.specialite,
      };
      await createChercheur(newChercheur);
      this.nom = '';
      this.specialite = '';
      this.fetchChercheurs();
    },
  },
  created() {
    this.fetchChercheurs();
  },
};
</script>

<style scoped>
/*ok*/

</style>
