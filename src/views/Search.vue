<template>
  <div class="search">
    <search-panel @submitSearch='getRepos' />
    <results
      v-if='Object.keys(repos).length'
      :repos='repos'
      @toggleRepo='$emit("toggleRepo", $event)'/>
    <no-results v-else
      :heading='"NO RESULTS FOUND"'
      :text='"select other parameters and try again"'/>
  </div>
</template>

<script>
import SearchPanel from '@/components/searchPanel/SearchPanel.vue';
import Results from '@/components/Results.vue';
import NoResults from '@/components/NoResults.vue';
import getGithubData from '@/components/utility/getGithubData';

export default {
  name: 'search',
  props: ['repos'],
  components: {
    SearchPanel,
    Results,
    NoResults,
  },
  methods: {
    getRepos(url) {
      getGithubData(url).then((response) => {
        this.$emit('gotFreshRepos', response.data.items);
      });
    },
  },
};
</script>

<style>
.search {
  flex-direction: column;
  align-items: center;
  width: 80%;
}
</style>
