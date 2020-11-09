<template>
  <div className="scrollable-notes-list">
    <NoteItem />
    <NoteItem />
    <NoteItem />
    <NoteItem />
    <NoteItem />
  </div>
</template>

<script lang="ts">
import NoteItem from './NoteItem.vue';
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    NoteItem,
  },
})
export default class ScrollableNotesList extends Vue {}
</script>

<style>
.scrollable-notes-list {
  overflow-y: auto;
  height: calc(100vh + -50px);
}
</style>
