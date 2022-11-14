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
  import {v4 as uuidv4} from 'uuid';

  export default {
    data() {
      return { 
        newEntry: '',
        showTextField: false
      }
    },
    props: ['entries'], 
    methods: {
      addEntry() {
        this.showTextField = false
        const newEntryObject = {
          id: uuidv4(),
          date: new Date(), 
          content: this.$data.newEntry
        }
        this.$props.entries.push(newEntryObject)
        console.log(this.$props.entries)
        this.$data.newEntry = '' 
      }
    }
  }
</script>

<style>
</style>