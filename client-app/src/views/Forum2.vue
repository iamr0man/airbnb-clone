<template>
  <div class="forum">
    <post2
      v-for="(post, i) in posts"
      :post="post"
      :key="i"/>
    <sculpture />
    <router-link :to="{ name: 'PostForm' }" class="add-new">
      Add
    </router-link>
    <arrow-back :to="{ name: 'Home' }" />
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import Post2 from '../components/Post2.vue'
import Sculpture from '../components/Sculpture.vue'

export default {
  name: 'Forum2',
  components: {
    Post2,
    Sculpture
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
  .forum {
    margin: 0 auto;
    width: 1000px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .add-new {
    position: fixed;
    bottom: 1px;
    right: 5px;
  }
</style>