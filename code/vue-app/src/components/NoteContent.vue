<template>
  <div className="note-content-wrapper">
    <textarea 
      className="note-content" 
      placeholder="Note content..." 
      >
    </textarea>
  </div>
</template>

<script>
export default {};
</script>

<style>
.note-content-wrapper {
  display: block;
  padding: 10px;
  border-left: solid 1px #c7b6b6;
  height: calc(100vh + -20px);
}

.note-content {
  width: 100%; 
  height: 100%; 
  margin: 0;
  padding: 0; 
  border-width: 0;
  resize: none;
  outline: none;
}
</style>
