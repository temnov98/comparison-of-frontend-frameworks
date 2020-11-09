<template>
  <div className="scrollable-notes-list">
    <div v-for="(note, index) in notes" :key="note.id">
      <NoteItem v-bind:note="note" v-bind:isActive="index === currentIndex" />
    </div>
  </div>
</template>

<script lang="ts">
import NoteItem from './NoteItem.vue';
import { Options, Vue } from "vue-class-component";
import { GlobalState } from '@/state/app.state';

@Options({
  data: () => GlobalState,
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
