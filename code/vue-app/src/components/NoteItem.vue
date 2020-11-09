<template>
  <!-- <div class="note-item active-note-item" > -->
  <div class="note-item" >
    Title
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class NoteItem extends Vue {}
</script>

<style>
.note-item {
  height: 20px;
  padding: 10px;
  border-bottom: solid 1px #c7b6b6;
}

.note-item:hover {
  cursor: pointer;
  background: white;
}

.active-note-item {
  background: white;
}
</style>
