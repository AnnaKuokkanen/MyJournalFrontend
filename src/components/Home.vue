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
  },
  methods: {
    async getAllEntries() {
      try {
        const response = await this.$http.get('http://localhost:8000/api/journal_entries/');
        this.entries = response.data; 
      } catch (error) {
          console.log(error);
      }
    }
  }, 
  created() {
    this.getAllEntries();
  }
}
</script>

<style>
    h1 {
      background-color: #ffd1dc;
    }
</style>