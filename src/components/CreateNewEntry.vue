<template>
  <div id="create-entry">
    <v-btn rounded raised v-if="!showTextField" @click="showTextField = !showTextField">Create a new entry</v-btn>
    <v-form id="create-entry-form" v-if="showTextField">
      <v-text-field v-model="newEntry" placeholder="Dear diary..."></v-text-field>
      <v-btn rounded small @click="addEntry">Submit</v-btn>
    </v-form>
  </div>
</template>

<script>
  export default {
    data() {
      return { 
        newEntry: '',
        showTextField: false
      }
    },
    props: ['entries'], 
    methods: {
      async addEntry() {
        this.showTextField = false
        const newEntryObject = {
          content: this.$data.newEntry
        }
        const response = await this.$http.post('http://localhost:8000/api/journal_entries/', newEntryObject);
        this.$props.entries.push(response.data)
        console.log(this.$props.entries)
        this.$data.newEntry = '' 
      }
    }
  }
</script>

<style>
</style>