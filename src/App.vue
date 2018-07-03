<template>
  <div class="app">
    <div class='wrapper'>
      <navigation />
      <keep-alive include='search'>
        <router-view
          @gotFreshRepos='prepareRepos'
          @toggleRepo='toggleRepo'
          :repos='repos'
          :savedRepos='savedRepos' />
      </keep-alive>
    </div>
    <footer-info />
  </div>
</template>

<script>

import Navigation from '@/components/header/Navigation.vue';
import FooterInfo from '@/components/FooterInfo.vue';
import prepareDataToDisplay from '@/components/utility/prepareDataToDisplay';

export default {
  name: 'app',
  components: {
    Navigation,
    FooterInfo,
  },
  data() {
    return {
      repos: {},
      savedRepos: {},
    };
  },
  methods: {
    prepareRepos(repos) {
      this.repos = prepareDataToDisplay(repos, this.savedRepos);
    },
    toggleRepo(id) {
      this.repos[id].saved = !this.repos[id].saved;
      if (this.savedRepos[id]) {
        delete this.savedRepos[id];
      } else {
        this.savedRepos[id] = this.repos[id];
      }
    },
  },
};
</script>


<style>
body {
  margin: 0;
  padding: 0;
  min-width: 1000px;
  font-family: Roboto, sans-serif;
}

div,
a,
h1,
p,
ul,
li,
form,
input,
select,
button {
  padding: 0;
  margin: 0;
  display: flex;
  box-sizing: border-box;
  border: none;
  border-radius: 0px;
  appearance: none;
}

.app {
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
}

.wrapper {
    flex: 1;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
</style>
