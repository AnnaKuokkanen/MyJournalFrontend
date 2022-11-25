<template>
  <div id="create-entry">
    <v-btn rounded raised v-if="!showTextField" @click="showTextField = !showTextField">Create a new entry</v-btn>
    <v-form id="create-entry-form" v-if="showTextField">
      <h3>Describle your day:</h3>
      <v-text-field label="Title" autofocus></v-text-field>
      <v-textarea v-model="newEntry" label="Dear diary..."></v-textarea>
      <h3>Rate your day:</h3>
      <v-rating
        empty-icon="mdi-heart-outline"
        full-icon="mdi-heart"
        hover
        length="5"
        size="50"
        color="#ffd1dc"
        background-color="#ffd1dc"
      ></v-rating>
      <v-btn id="submit-btn" rounded small @click="addEntry">Submit</v-btn>
      <v-btn id="delete-btn" rounded small @click="cancelAddEntry">Cancel</v-btn>
    </v-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        newTitle: '',
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
      },
      cancelAddEntry() {
        this.$data.newEntry = ''
        this.showTextField = false
      }
    }
  }
</script>

<style>
  #create-entry-form {
    margin: 10vmin 20vmax;
  }

  #submit-btn {
    margin-left: 0vmax;
    margin-right: 20vmax;
    background-color: #96e3bc;
  }

  #delete-btn {
    margin-left: 20vmax;
    margin-right: 0vmax;
    background-color: #f092a7;
  }
</style>