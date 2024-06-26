<!-- src/components/Projets.vue -->

<!-- Désactiver la règle eslint multi-word-component-names -->
/* eslint-disable vue/multi-word-component-names */
<template>
  <div>
    <h1>Liste des Projets</h1>
    <ul>
      <li v-for="projet in projets" :key="projet.id">
        {{ projet.titre }} - {{ projet.description }} (Chef de Projet: {{ projet.chef_de_projet.nom }})
      </li>
    </ul>
    <form @submit.prevent="addProjet">
      <input v-model="titre" placeholder="Titre" required />
      <textarea v-model="description" placeholder="Description" required></textarea>
      <input v-model="date_debut" type="date" placeholder="Date de début" required />
      <input v-model="date_fin_prevue" type="date" placeholder="Date de fin prévue" required />
      <select v-model="chef_de_projet" required>
        <option v-for="chercheur in chercheurs" :value="chercheur.id" :key="chercheur.id">
          {{ chercheur.nom }}
        </option>
      </select>
      <button type="submit">Ajouter Projet</button>
    </form>
  </div>
</template>

<script>
import { getProjets, createProjet, getChercheurs } from '../api';

export default {
  data() {
    return {
      projets: [],
      chercheurs: [],
      titre: '',
      description: '',
      date_debut: '',
      date_fin_prevue: '',
      chef_de_projet: '',
    };
  },
  methods: {
    async fetchProjets() {
      const response = await getProjets();
      this.projets = response.data;
    },
    async fetchChercheurs() {
      const response = await getChercheurs();
      this.chercheurs = response.data;
    },
    async addProjet() {
      const newProjet = {
        titre: this.titre,
        description: this.description,
        date_debut: this.date_debut,
        date_fin_prevue: this.date_fin_prevue,
        chef_de_projet: this.chef_de_projet,
      };
      await createProjet(newProjet);
      this.titre = '';
      this.description = '';
      this.date_debut = '';
      this.date_fin_prevue = '';
      this.chef_de_projet = '';
      this.fetchProjets();
    },
  },
  created() {
    this.fetchProjets();
    this.fetchChercheurs();
  },
};
</script>

<style scoped>

</style>
