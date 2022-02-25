<script>
  import Clients from '../db/Clients';
  import AddNewClients from './AddNewClients.vue';
  import EditClient from './EditClient.vue';

  export default {
    name: 'Home',
    components: {
      AddNewClients,
      EditClient
    },
    data() {
      return {
        clients: Clients,
        active: true,
        editClientProps: {},
      }
    },
    methods: {
      AddClient() {
        this.active = false
      },
      edit(client) {
        this.editClientProps = client;
      },
    }
  }
</script>

<template>
  <div v-show="active">
    <h1>Área do administrador</h1>
    <ul>
      <li v-for="(client, index) in clients" :key="index">
        <div>Cliente: {{ client.name }}</div>
        <div>E-mail: {{ client.email }}</div>
        <div>Celular: {{ client.phone }}</div>
        <router-link :to="{name: 'EditClient', params: editClientProps}">
          <button @click="edit(client)">Editar</button>
        </router-link>
      </li>
    </ul>
    <router-link to="/addClients">
      <button @click="AddClient">Adicionar novos clientes</button>
    </router-link>
  </div>
</template>