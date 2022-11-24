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
            <td>{{ entry.content }}</td>
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
  export default {
    props: ['entries'], 
    methods: {
      deleteEntry(entryId) {
        this.$emit('deleteEntry', entryId);
      }
    }
  }
</script>

<style>

</style>