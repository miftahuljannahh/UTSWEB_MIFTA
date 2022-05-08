<script>
import { ref } from "vue";
import axios from "axios";

export default {
  data()
  {
    return {
      cari: '1',
      surah: ref([]),
      judul: ref([]),
      translation: ref([]),
      audio: ref([]),
      name: [],
    }
  },

  watch: {
    cari()
    {
      this.getSurah()
      this.getJudul()
      this.getTranslation()
      this.getAudio()
    }
  },

  mounted()
  {
    this.getSurah()
    this.getJudul()
    this.getTranslation()
    this.getAudio()
  },

  methods: {
    getAudio()
    {
      axios.get('https://api.quran.com/api/v4/chapter_recitations/7/' + this.cari + '?language=en')
        .then(response =>
        {
          this.audio = response.data.audio_file
        })
        .catch(error =>
        {
          console.log(error)
        })
        .finally(() => this.loading = false)
    },
    getSurah()
    {
      axios.get('https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=' + this.cari)
        .then(response =>
        {
          this.surah = response.data.verses
        })
        .catch(error =>
        {
          console.log(error)
        })
    },
    getJudul()
    {
      axios.get('https://api.quran.com/api/v4/chapters/' + this.cari + '?language=id')
        .then(response =>
        {
          this.judul = response.data.chapter
          this.name = this.judul.translated_name
        })
        .catch(error =>
        {
          console.log(error)
        })
    },
    getTranslation()
    {
      axios.get('https://api.quran.com/api/v4/quran/translations/141?chapter_number=' + this.cari)
        .then(response =>
        {
          this.translation = response.data.translations
        })
        .catch(error =>
        {
          console.log(error)
        })
        .finally(() => this.loading = false)
    },
    
  }
}
</script>

<template>
  <div class="text-center">
    <h1>Masukkan nomor surah!</h1>
    <input v-model="cari" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
    <div class="mt-5">
      <h1>{{ judul.name_complex }}</h1>
      <br>
      <h1>{{ name.name }}</h1>
      <br>
      <h2>Diturunkan di {{ judul.revelation_place }}</h2>
    </div>
    <div v-if="audio">
     <audio v-bind:src="audio.audio_url" controls></audio>
    </div>
    <div v-for="(ayat,i) in surah" :key="i" class="text-end mt-4">
      <h5>{{ ayat.text_uthmani }}{{ayat.verse_key}}</h5>
      <p class="translation" v-html="translation[i].text">
      </p>
    </div>
  </div>
</template>
<style>
.translation{
  text-align: start;
}

</style>
