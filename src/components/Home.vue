<template>
    <div id="home">     
        <h1>Welcome to your Journal, {{name}}!</h1>
        <EntriesList :entries="entries" />
        <CreateNewEntry :entries="entries" />
    </div>
</template>

<script>
import EntriesList from './EntriesList.vue'
import CreateNewEntry from './CreateNewEntry.vue'

export default {
  components: {
    EntriesList,
    CreateNewEntry
  },
  name: 'Home',
  data () {
    return {
        name: 'Anna', 
        entries: [],
    }
  }
}
</script>

<style>
    h1 {
      background-color: #ffd1dc;
    }
</style>