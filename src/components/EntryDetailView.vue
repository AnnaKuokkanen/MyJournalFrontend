<template>
  <div id="view-entry">
    <v-form id="update-entry-form">
      <v-menu v-model="displayDateMenu" :close-on-content-click="false" transition="scale-transition" offset-y
        max-width="35vmax" min-width="35vmax">
        <template v-slot:activator="{ on }">
          <v-text-field color="#2f8f9d" label="Date" prepend-icon="mdi-calendar" readonly :value=entry.date
            v-on="on"></v-text-field>
        </template>
        <v-date-picker color="#2f8f9d" v-model="entry.date" no-title width="35vmax"
          @input="displayDateMenu=false"></v-date-picker>
      </v-menu>
      <v-text-field color="#2f8f9d" v-model="entry.title" label="Title"></v-text-field>
      <v-textarea color="#2f8f9d" v-model="entry.content" label="Dear diary..."></v-textarea>
      <h3>Rate your day:</h3>
      <v-rating empty-icon="mdi-heart-outline" full-icon="mdi-heart" hover length="5" size="50" color="#ffd1dc"
        background-color="#ffd1dc" v-model="entry.rating"></v-rating>
    </v-form>
    <v-btn @click="updateEntry(entry.id)">Update</v-btn>
    <v-btn @click="deleteEntry(entry.id)">Delete</v-btn>
  </div>
</template>

<script>
  export default {
    name: 'EntryDetailView',
    data () {
      return {
          entry: this.getEntryDetails(this.$route.params.id),
          displayDateMenu: false
      }
    },
    methods: {
      async getEntryDetails(entryId) {
        try {
          const response = await this.$http.get(`/journal_entries/${entryId}/`);
          this.entry = response.data;
        } catch (error) {
          console.log(error)
        }
      },

      async deleteEntry(entryId) {
        try {
          await this.$http.delete(`/journal_entries/${entryId}/`);
          this.$router.push('/journal/');
        } catch (error) {
          console.log(error);
        }
      },

      async updateEntry(entryId) {
        const updatedEntry = {
          date: this.$data.entry.date,
          title: this.$data.entry.title,
          content: this.$data.entry.content,
          rating: this.$data.entry.rating
        }
        try {
          await this.$http.put(`/journal_entries/${entryId}/`, updatedEntry);
          this.$router.push('/journal/');
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
</script>

<style>
</style>