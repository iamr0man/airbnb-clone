<template>
  <div class="card">
    <div
      ref="card-item" 
      class="card-item text-center"
      @mousemove="startRotate($event)"
      @mouseout="stopRotate($event)">
        <p class="mar text">{{ book.title }}</p>
        <img
          ref="book"
          class="book floating"
          :src="book.logo"
        />
        <p class="mar text">{{ book.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  methods: {
    startRotate(e) {
      const cardItem = this.$refs["card-item"];

      const halfHeight = cardItem.offsetHeight/2;
      const halfWidth = cardItem.offsetWidth/2;

      cardItem.style.transform = 'rotateX(' + -(e.offsetY -
        halfHeight) / 5 +'deg) rotateY(' +
        (e.offsetX - halfWidth) / 5 + 'deg)';
    },
    stopRotate(){
      this.$refs["card-item"].style.transform = 'rotate(0)'
    },
  },
}
</script>

<style lang="scss">

.floating {  
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  margin-left: 30px;
  margin-top: 5px;
}

.card {
  margin-top: -250px;
  perspective: 1365px; /*глубина - расстаяние внутри*/
  transform-style: preserve-3d; /*прокучивание 3Д*/
}

.card-item {
  border: 1px solid white;
  color: white;
  width: 260px;
  height: 420px;
  transition: transform 0.2s;
  margin: 1rem;
  overflow: hidden;
}
.text{
  width: 150%;
}

.mar {
  animation-name: mar;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

.book {
  width: 190px;
}

@keyframes mar {

  from{
    transform: translate3d(0, 0, 0)
  }
  to {
    transform: translate3d(-100%,0,0)
  }
}

@keyframes floating {
  from { 
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translate(0,  0px); 
  }
  65%  { 
    box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
    transform: translate(0, -20px); 
  }
  to   {
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translate(0, 0px); 
  }    
}
</style>