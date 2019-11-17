<template>
  <div id="dash-board">
    <dash-board/>
    <book/>
  </div>
</template>

<script>
import DashBoard from '@/components/DashBoard.vue'
import Book from '@/components/Book.vue'

export default {
  components: {
    DashBoard: DashBoard,
    Book: Book
  }

}
</script>

<style>

</style>
