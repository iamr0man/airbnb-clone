<template>
  <div class="new-post-container">
    <v-card shaped class="card" width="480">
      <v-card-text>
        <v-text-field 
         outlined
         solo
         flat
         label="Title"
         v-model="title"
         />
        <v-text-field 
         outlined
         solo
         flat
         label="Short Description"
         v-model="shortDescription"
         />
        <v-textarea 
         outlined
         solo
         flat
         :auto-grow="true"
         :clearable="true"
         :rows="15"
         label="Description"
         v-model="description"
         />
      </v-card-text>
      <v-card-actions>
          <v-btn @click="createNewPost" class="mx-auto" color="indigo" dark width="85%">Post</v-btn>
      </v-card-actions>
    </v-card> 
    <v-card shaped class="card" width="420">
      <v-icon class="cloud-upload" color="indigo">mdi-cloud-upload</v-icon>
      <v-file-input
        v-model="preview"
        placeholder="Upload your preview photo"
        label="Photo input"
        multiple
        prepend-icon="mdi-paperclip"
      >
      <template v-slot:selection="{ text }">
          <v-chip
            small
            label
            color="primary"
          >
          {{ text }}
        </v-chip>
      </template>
    </v-file-input>
    </v-card> 
    <arrow-back :to="{ name: 'Home' }" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data(){
    return {
      title: "",
      description: "",
      shortDescription: "",
      preview: [],
      preset: "q8isaqyd"
    }
  },
  computed: {
    ...mapGetters('user', ['user'])
  },
  methods: {
    async createNewPost(){
      const formData = new FormData();
      formData.append('upload_preset', this.preset)
      formData.append('file', this.preview[0])
      const url = await this.$store.dispatch('forum/getPhoto', { formData, id: '5556' });

      return await this.$store.dispatch('forum/createPost', {
        title: this.title,
        shortDescription: this.shortDescription,
        description: this.description,
        preview: url,
      })
    }
  }
};
</script>

<style scoped>
  .new-post-container {
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .card {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .cloud-upload {
    font-size: 230px;
  }

</style>
