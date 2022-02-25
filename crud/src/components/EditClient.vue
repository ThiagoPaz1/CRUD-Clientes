<script>
  import Clients from '../db/Clients.js';

  export default {
    name: 'EditClient',
    props: {
      client: Object,
    },
    data() {
      const { name, email, phone } = this.$route.params;
      return {
        editName: name,
        editEmail: email,
        editPhone: phone,
        message: '',
      }
    },
    methods: {
      saveChanges(e) {
        e.preventDefault();

        let { name, email, phone, id } = this.$route.params;

        const checkName = this.editName != name;
        const checkEmail = this.editEmail != email;
        const checkPhone = this.editPhone != phone;

        if (checkName || checkEmail || checkPhone) {
          Clients.filter(client => {
            if (client.id == id) {
              client.name = this.editName;
              client.email = this.editEmail;
              client.phone = this.editPhone;  
            }
          });
          this.message = 'Alterações realizadas com sucesso.'
        } else {
          this.message = 'É necessario altera algum campo do formulario.'
        }
      }
    }
  }
</script>

<template>
  <div>
    <section>
      <h1>Atualizar informações do cliente abaixo:</h1>
      <form>
        <input v-model="editName">
        <input v-model="editEmail">
        <input v-model="editPhone">
        <button @click="saveChanges">Salvar alterações</button>
        <h3>{{ message }}</h3>
      </form>
      <router-link to="/Home">
        <button>Voltar para área do adminstrador</button>
      </router-link>
    </section>  
  </div>
</template>