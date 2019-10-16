<template>
  <div class="toolbar">
    <button @click="newNote">Add New</button>
    <button @click="toggleFavorite" :class="{starred: activeNote.favorite}">Add to Favorites</button>
    <button @click="deleteNote">Delete Note</button>
  </div>
</template>

<style>
  .toolbar{
    display: flex;
    width: 100%;
    color: #767676;
    padding: 35px 25px 25px 25px;
  }

  .starred {
    color: #F7AE4F;
  }

  .btn {
    font-size: 30px;
    margin-bottom: 35px;
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 0.5s ease;
  }

  .toolbar button:hover{
    opacity: 1;
  }
</style>


<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'Toolbar',
  methods: mapActions([
    'newNote',
    'toggleFavorite',
    'deleteNote'
  ]),
  computed: mapState([
    'activeNote'
  ])
}
</script>
