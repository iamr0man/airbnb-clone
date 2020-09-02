<template>
  <div>
    <v-card width="800" class="mx-auto">
      <v-card-text>
        <post
          v-for="(post, i) in posts"
          :post="post"
          :key="i"/>
      </v-card-text>
    </v-card>
    <router-link :to="{ name: 'PostForm' }" class="add-new">
      Add
    </router-link>
    <arrow-back :to="{ name: 'Home' }" />
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import Post from '../components/Post.vue'

export default {
  name: 'Forum',
  components: {
    Post
  },
  computed: {
    ...mapGetters('forum', ['posts'])
  },
  async created(){
    await this.$store.dispatch('forum/getPosts');
  }
}
</script>

<style>
  .square {
    width: 800px;
    height: 300px;
    background-color: teal;
    margin: 2rem 0;
  }

  .create-new {
    position: fixed;
    bottom: 44px;
    right: 33px;
    border-radius: 30px;
    width: 300px;
    height: 70px;
    background-color: teal;

    line-height: 94px;
    font-size: 32px;
    text-decoration: none;
    text-align: center;
    color: white !important;
  }

  .add-new {
    position: fixed;
    bottom: 1px;
    right: 5px;
  }
</style>