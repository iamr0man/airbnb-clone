<template>
  <div @click="showPostDetails" class="post mt-8">
    <div class="card-top">
      <img class="card-top__img" :src="post.preview" />
    </div>
    <div class="card-info">
      <div class="card-info__top">
        <h2 class="top-title">{{ post.title}}</h2>            
        <p class="top-shortDescription">{{ post.shortDescription }}</p>           
      </div>
      <div class="card-info__bottom">
        <h4 class="bottom-name">{{ post.name }}</h4>
        <h4 class="bottom-date">{{ new Date(post.date).toLocaleDateString() }}</h4>
      </div>
    </div>
  </div>
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

<style scoped lang="scss">

  .post {
    width: 450px;
    
    border: 1px solid;
    box-shadow: -13px -10px 1px 1px black;
    
    transform: perspective(209px) rotateY(7deg);

    &:nth-child(2n){
      box-shadow: 13px -10px 1px 1px black;
      transform: perspective(209px) rotateY(-7deg);
    }
    .card-top {
      &__img {
        width: 100%;
      }
    }

    .card-info {
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