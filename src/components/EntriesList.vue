<template>
  <div id="current-entries">
    <h2>Here are your entries so far:</h2>
    <div id="entries-table">
      <v-simple-table dense>
        <thead />
        <tbody>
          <tr
            v-for="entry in entries"
            :key="entry.id"
          >
            <td @click="redirectToEntryDetails(entry)">{{ entry.title }}</td>
            <td>
              <v-btn rounded small @click="deleteEntry(entry.id)">Delete</v-btn>
            </td>
          </tr>
        </tbody>
    </v-simple-table>
    </div>
  </div>
</template>

<script>
  import EntryDetailView from './EntryDetailView.vue'

  export default {
    props: ['entries'], 
    methods: {
      deleteEntry(entryId) {
        this.$emit('deleteEntry', entryId);
      },
      redirectToEntryDetails(entry) {
        this.$router.push({ name: 'JournalEntryDetails', params: { id: entry.id }, component: EntryDetailView })
      }
    }
  }
</script>

<style>

</style>