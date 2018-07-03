<template>
   <div class="no-results-group">
      <h1 class="no-results-group__heading">{{ heading }}</h1>
      <p class="no-results-group__text">{{ text }}</p>
      <div class="no-results-group__image" />
    </div>
</template>

<script>

export default {
  name: 'no-results',
  props: ['heading', 'text'],
  components: {
  },
};
</script>

<style>
.no-results-group {
  flex-direction: column;
  height: 78.69vh;
  justify-content: center;
  align-items: center;
  position: relative;
}
.no-results-group__heading {
  color: #0366d6;
  font-size: 4vmin;
}
.no-results-group__text {
  margin-top: 0.5vh;
  font-size: 3vmin;
  font-weight: normal;
}
.no-results-group__image {
  position: absolute;
  top: center;
  left: center;
  height: 25vh;
  width: 25vh;
  background: url("../assets/github_icon.png") no-repeat;
  background-size: contain;
  opacity: 0.0428;
}
</style>
