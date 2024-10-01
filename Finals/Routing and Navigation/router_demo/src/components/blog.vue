<template>
  <div class="blog-container">
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
    <router-link to="/">Back to Home</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        { id: 1, title: 'Vue.js Routing Introduction', content: 'This is an introduction to routing in Vue.js.' },
        { id: 2, title: 'Understanding Components in Vue', content: 'Learn about components in Vue.js in this post.' },
        { id: 3, title: 'Building a Blog App with Vue Router', content: 'This post walks you through building a blog app with Vue Router.' }
      ],
      post: {}
    };
  },
  mounted() {
    const postId = this.$route.params.id;
    this.post = this.posts.find(post => post.id == postId);
  }
};
</script>

<style scoped>
.blog-container {
  padding: 20px;
  background-color: #ffffff;
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 20px auto;
  border: 1px solid #ddd;
  border-radius: 8px;
}

h1 {
  color: #333;
  font-size: 2.2em;
  margin-bottom: 10px;
}

p {
  font-size: 1.1em;
  line-height: 1.6;
  color: #555;
}

a {
  display: inline-block;
  margin-top: 20px;
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
