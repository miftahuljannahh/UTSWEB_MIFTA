<script>
import { ref } from "vue";
import axios from "axios";

export default {
  data() {
    return {
      error: false,
      loading: true,
      juzs: ref([]),
      isijuzs: ref([]),
    }
  },
  watch:{
    $route(){
      this.getJuz
      this.getIsiJuz()
    }
  },
  mounted() {
    this.getJuz()
    this.getIsiJuz()
  },

  methods: {
    getJuz() {
      axios.get('https://api.quran.com/api/juzs' + this.$route.params.id)
        .then(response => {
          this.juzs = response.data.juz
        })
        .catch(error => {
          console.log(error)
          this.error = true
        })
        .finally(()=> this.loading = false)
    },
    getIsiJuz() {
      axios.get('https://api.quran.com/api/v4/quran/verses/uthmani?juz_number=' + this.$route.params.id)
        .then(response => {
          this.isijuzs = response.data.verses
        })
        .catch(error => {
          console.log(error)
          this.error = true
        })
        .finally(()=> this.loading = false)
    }
  }
}
</script>

<template>
  <div class="text-end mt-5">
    <h2>Juz {{ $route.params.id }}</h2>
    <h4 v-for="quran in isijuzs" :key="quran.id" class="text-lg--end mt-5">
      {{quran.text_uthmani}} {{quran.verse_key}}
    </h4>
  </div>
</template>
