<template>
    <v-card @click="showPostDetails" class="post mt-8">
      <v-card-text>
        <v-row>
          <v-col cols="8">
            <div class="card-info">
              <div class="card-info__top">
              <h2 class="top-title">{{ post.title}}</h2>            
                <h2 class="top-title">{{ post.title}}</h2>            
              <h2 class="top-title">{{ post.title}}</h2>            
              <p class="top-shortDescription">{{ post.shortDescription }}</p>           
            </div>
            <div class="card-info__bottom">
              <h4 class="bottom-name">{{ post.name }}</h4>
              <h4 class="bottom-date">{{ new Date(post.date).toLocaleDateString() }}</h4>
            </div>
          </div>
        </v-col>
        <v-col cols="4">
          <div class="card-photo">
            <v-img src="../assets/img/post.jpg" />
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "Post",
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    showPostDetails(){
      this.$store.commit('forum/SET_POST', this.post)
      this.$router.push({ name: "PostDetails", params: { id: this.post._id }})
    }
  },
  computed: {
    ...mapGetters('user', ['user']),
  }
}
</script>

<style lang="scss">

  .post {
    .card-info {
      height: 100%;
      color: black;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      .top-title {
        font-size: 30px;
      }
    }
  }
</style>