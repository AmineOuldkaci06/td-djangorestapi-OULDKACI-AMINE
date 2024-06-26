<!-- Désactiver la règle eslint multi-word-component-names -->
/* eslint-disable vue/multi-word-component-names */
<template>
  <div>
    <h1>Liste des Publications</h1>
    <ul>
      <li v-for="publication in publications" :key="publication.id">
        {{ publication.titre }} - {{ publication.resume }} (Projet: {{ publication.projet_associé.titre }})
      </li>
    </ul>
    <form @submit.prevent="addPublication">
      <input v-model="titre" placeholder="Titre" required />
      <textarea v-model="resume" placeholder="Résumé" required></textarea>
      <input v-model="date_publication" type="date" placeholder="Date de publication" required />
      <select v-model="projet_associé" required>
        <option v-for="projet in projets" :value="projet.id" :key="projet.id">
          {{ projet.titre }}
        </option>
      </select>
      <button type="submit">Ajouter Publication</button>
    </form>
  </div>
</template>

<script>
import { getPublications, createPublication, getProjets } from '../api';

export default {
  data() {
    return {
      publications: [],
      projets: [],
      titre: '',
      resume: '',
      date_publication: '',
      projet_associé: '',
    };
  },
  methods: {
    async fetchPublications() {
      const response = await getPublications();
      this.publications = response.data;
    },
    async fetchProjets() {
      const response = await getProjets();
      this.projets = response.data;
    },
    async addPublication() {
      const newPublication = {
        titre: this.titre,
        resume: this.resume,
        date_publication: this.date_publication,
        projet_associé: this.projet_associé,
      };
      await createPublication(newPublication);
      this.titre = '';
      this.resume = '';
      this.date_publication = '';
      this.projet_associé = '';
      this.fetchPublications();
    },
  },
  created() {
    this.fetchPublications();
    this.fetchProjets();
  },
};
</script>

<style scoped>
</style>
