<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <div>
            <b-form-file
              v-model="files"
              placeholder="Choose a file or drop it here..."
              multiple
            ></b-form-file>
          </div>
          <b-button @click="updateData()">test</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  components: {},
  layout(context) {
    return 'landding'
  },
  middleware: '',
  data: function () {
    return {
      files: [],
      obj: {
        name: '',
        File: [],
      },
    }
  },
  computed: {},
  mounted() {},
  methods: {
    async updateData() {
      const formData = new FormData()
      formData.append('name', this.obj.name)
      for (let file of this.files) {
        formData.append('files', file, file.name)
      }

      //   const res = await this.$apiTestapi.testSubmitdata(formData)
      //   if (res.Status == 200) {
      //   }
    },
  },
}
</script>

<style></style>
