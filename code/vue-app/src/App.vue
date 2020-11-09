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

<script>
import NoteContent from './components/NoteContent';
import AddNoteWrapper from './components/AddNoteWrapper';
import ScrollableNotesList from './components/ScrollableNotesList';

export default {
  name: 'App',
  components: {
    NoteContent,
    AddNoteWrapper,
    ScrollableNotesList,
  },
};
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
