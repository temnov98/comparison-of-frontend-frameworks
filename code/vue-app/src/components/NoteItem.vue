<template>
  <div
      v-bind:class="{ 'note-item': true, 'active-note-item': isActive }"
      @click="selectNote()"
  >
    {{ note.title }}
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { GlobalState, IGlobalState } from '@/state/app.state';

@Options({
  data: () => GlobalState,
  props: ['note', 'isActive'],
  methods: {
    selectNote() {
      (this as IGlobalState).currentIndex = (this as IGlobalState)
          .notes.findIndex(note => note.id === this.note.id);
    },
  },
})
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
