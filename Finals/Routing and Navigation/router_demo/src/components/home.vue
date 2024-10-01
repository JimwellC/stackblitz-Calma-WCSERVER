<template>
  <div class="home-container">
    <h1>Welcome to the Home Section</h1>
    <p>Click on a post to read more:</p>
    <ul class="post-list">
      <li v-for="post in posts" :key="post.id" class="post-item">
        <router-link :to="'/blog/' + post.id">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        { id: 1, title: 'Vue.js Routing Introduction' },
        { id: 2, title: 'Understanding Components in Vue' },
        { id: 3, title: 'Building a Blog App with Vue Router' }
      ]
    };
  }
};
</script>

<style scoped>
.home-container {
  padding: 20px;
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
  text-align: center;
}

h1 {
  color: #333;
  font-size: 2.5em;
}

.post-list {
  list-style-type: none;
  padding: 0;
}

.post-item {
  margin: 15px 0;
}

.post-item a {
  color: #007bff;
  text-decoration: none;
  font-size: 1.2em;
}

.post-item a:hover {
  text-decoration: underline;
}
</style>
