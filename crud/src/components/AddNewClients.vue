<script>
  import Clients from '../db/Clients';
  
  let id = 0;

  export default {
    name: 'AddNewClients',
    data() {
      return {
        name: '',
        email: '',
        phone: '',
        active: true,
        message: '',
      }
    },
    methods: {
      saveDatas(e) {
        e.preventDefault();
        const checkName = this.name != '' && this.name != ' ';
        const checkEmail = this.email != '' && this.email != ' ';
        const checkPhone = this.phone != '' && this.phone != ' ';

        if (checkName || checkEmail || checkPhone) {
          Clients.push({
            id: id++,
            name: this.name,
            email: this.email,
            phone: this.phone,
          });

          this.name = '';
          this.email = '';
          this.phone = '';
          this.message = '';
        } else {
          this.message = 'Preencha todos os campos';
        }
      },
      handleClick() {
        this.active = false
      }
    }
  }
</script>

<template>
  <div>
      <h1>Preencha o formulario abaixo:</h1>
      <form>
        <input v-model="name" type="text" placeholder="Digite seu nome">
        <input v-model="email" type="email" placeholder="Digite seu email" >
        <input v-model="phone" type="text" placeholder="Digite seu número de celular">
        <button @click="saveDatas">Salvar</button>
        <span v-show="message">
          <h3>{{ message }}</h3>
        </span>
      </form>
      <router-link to="/Home">
        <button v-show="active" @click="handleClick">Voltar para área do adminstrador</button>
      </router-link>  
  </div>
</template>