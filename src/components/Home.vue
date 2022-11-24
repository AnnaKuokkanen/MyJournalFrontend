<template>
    <div id="home">     
        <h1>Welcome to your Journal, {{name}}!</h1>
        <EntriesList :entries="entries" @deleteEntry="deleteEntry" />
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
    },

    async deleteEntry(entryId) {
        try {
          const response = await this.$http.delete(`http://localhost:8000/api/journal_entries/${entryId}/`);
        } catch (error) {
            console.log(error);
        }
        this.entries.splice(this.entries.map(entry => entry.id).indexOf(entryId));
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