<template>
  <div className="scrollable-notes-list">
    <NoteItem />
    <NoteItem />
    <NoteItem />
    <NoteItem />
    <NoteItem />
  </div>
</template>

<script>
import NoteItem from './NoteItem';

export default {
  components: {
    NoteItem,
  },
};
</script>

<style>
.scrollable-notes-list {
  overflow-y: auto;
  height: calc(100vh + -50px);
}
</style>
