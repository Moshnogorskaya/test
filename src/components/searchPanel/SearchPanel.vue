<template>
  <div
  class="search__search-panel">
    <select-option :placeholder="'Type'" :options='types' v-model="type" :valid="valid" />
    <select-option :placeholder='"Language"' :options='languages' v-model="language" />
    <input-keyword v-model="keyword" />
    <submit @clickSearch='composeURL'/>
  </div>
</template>

<script>
import SelectOption from './SelectOption.vue';
import InputKeyword from './InputKeyword.vue';
import Submit from './Submit.vue';
import types from '../utility/types';
import languages from '../utility/languages';

export default {
  name: 'search-panel',
  components: {
    SelectOption,
    InputKeyword,
    Submit,
  },
  data() {
    return {
      types,
      languages,
      keyword: '',
      type: '',
      language: '',
      valid: true,
    };
  },
  methods: {
    composeURL() {
      this.valid = !!this.type;
      let url;
      if (this.valid) {
        url = `https://api.github.com/search/${this.type.toLowerCase()}?q=${this.keyword}+language:${this.language}&sort=stars&order=desc`;
        this.$emit('submitSearch', url);
      }
    },
  },
};
</script>

<style>
.search__search-panel {
  width: 100%;
  height: 60px;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 16px;
}
</style>
