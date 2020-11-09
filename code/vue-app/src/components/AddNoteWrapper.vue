<template>
  <div className="add-note-wrapper">
    <div className="note-title-wrapper">
      <input 
        className="note-title-input" 
        placeholder="Note title..."
      />
    </div>
    <div 
      className="add-note-button">
      +
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class AddNoteWrapper extends Vue {}
</script>

<style>
.add-note-wrapper {
  height: 50px;
  display: grid;
  grid-template-columns: auto 50px;
  border-bottom: solid 1px #c7b6b6;
  background: white;
  box-sizing: border-box;
}

.note-title-wrapper {
  padding: 0;
  margin: 0;
}

.note-title-input {
  padding: 10px;
  margin: 0;
  width: calc(100% + -20px);
  height: calc(100% + -20px);
  border: none;
  outline: none;
}

.add-note-button {
  font-size: 43px;
  text-align: center;
  cursor: pointer;
}

.add-note-button:hover {
  background: #a5ffb0;
}
</style>
