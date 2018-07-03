<template>
  <div class="repo__info">
    <a href='' class="repo__name">{{ repo.name }}</a>
    <p class="repo__description">{{ repo.description }}</p>
    <ul class="repo__topics topics">
      <li v-for='(topic, index) in repo.topics' :key='index' class="topics__item">{{ topic }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'list-view-info',
  props: ['repo'],
  components: {
  },
};
</script>

<style>

.repo__info {
  flex-direction: column;
  width: 100%;
  padding-left: 15px;
}
.repo__name {
  color: #0366d6;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  height: 30%;
  align-items: flex-end;
  margin-top: 6px;
  width: fit-content;
}
.repo__description {
  padding: 5px 0;
  font-size: 12px;
  font-weight: normal;
  height: 26%;
  overflow-y: auto;
}
.repo__topics {
  height: 35px;
}
.topics__item {
  font-size: 10px;
  background: #f1f8fe;
  border: 1px solid #f1f8fe;
  border-radius: 10px;
  height: 70%;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
}
</style>
