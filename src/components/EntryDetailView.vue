<template>
  <div id="view-entry">
    <h2>{{entry.title}}</h2>
    <v-btn>Update</v-btn>
    <v-btn>Delete</v-btn>
  </div>
</template>

<script>
  export default {
    name: 'EntryDetailView',
    data () {
      return {
          entry: this.getEntryDetails(this.$route.params.id)
      }
    },
    methods: {
      async getEntryDetails(entryId) {
        console.log('Getting with id ' + entryId);
        return await this.$http.get(`http://localhost:8000/api/journal_entries/${entryId}/`);
      }
    }
  }
</script>

<style>
</style>