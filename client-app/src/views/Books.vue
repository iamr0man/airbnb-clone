<template>
  <div 
    class="books-container"
    @mousemove="checkMouse($event)"
  >
    <book
      v-for="(book, i) in books"
      :book="book"
      :key="i"/>
    <hide-photos
      :currPosition="prevPosition"
      :currNumber="currNumber"
      :vector="vector"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Book from '../components/Book.vue'
import HidePhotos from '../components/HidePhotos.vue'
export default {
  components: {
    Book,
    HidePhotos
  },
  data(){
    return {
      prevPosition: {x: 0, y:0},
      currPosition: {x: 0, y:0},
      currNumber: -1,
      vector: "X"
    }
  },
  methods: {
    checkMouse(e){
      if(Math.abs(e.offsetX - this.prevPosition.x) >= 100){
        this.setNewPosition(e,"X")
      } else if(Math.abs(e.offsetY - this.prevPosition.y) >= 100){
        this.setNewPosition(e,"Y")
      }
    },
    setNewPosition(e,vector){
      this.prevPosition.x = e.offsetX;
      this.prevPosition.y = e.offsetY;
      this.vector = vector;
      (this.currNumber + 1) >= 8 ?  this.currNumber = 0 : this.currNumber += 1;
    }
  },
  computed: {
    ...mapGetters('book', ['books'])
  },
  async created(){
    await this.$store.dispatch('book/getBooks')
  }
}
</script>

<style lang="scss">
  .books-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('../assets/img/qq.jpeg');
    height: 100%;
  }
</style>