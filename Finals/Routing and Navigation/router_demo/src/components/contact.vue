<template>
  <div class="container mt-5">
    <h1 class="mb-4">Contact Us</h1>
    <p class="mb-4">If you have any questions or would like to get in touch, please use the form below.</p>
    
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="name" class="form-label">Name:</label>
        <input type="text" id="name" v-model="name" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email:</label>
        <input type="email" id="email" v-model="email" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Message:</label>
        <textarea id="message" v-model="message" class="form-control" rows="4" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    submitForm() {
      alert(`Message sent by ${this.name}`); 
      this.name = '';
      this.email = '';
      this.message = '';
    }
  }
};
</script>

