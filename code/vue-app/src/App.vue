<template>
  <div>
    <div className="content">
      <div className="notes-list">
        <AddNoteWrapper />
        <ScrollableNotesList />
      </div>
      <NoteContent />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NoteContent from './components/NoteContent.vue';
import AddNoteWrapper from './components/AddNoteWrapper.vue';
import ScrollableNotesList from './components/ScrollableNotesList.vue';
import { INoteModel } from './models/note.model';
import { GlobalState } from './state/app.state';

@Options({
  components: {
    NoteContent,
    AddNoteWrapper,
    ScrollableNotesList,
  },
  data: () => GlobalState,
})
export default class App extends Vue {}
</script>

<style>
body {
  height: 100vh;
  padding: 0;
  margin: 0;
}

.content {
  display: grid;
  grid-template-columns: 260px auto;
  height: 100%;
}

.notes-list { 
  background: #f4f4f4;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background: #cfcfcf;
  border-radius: 10px;
}
</style>
