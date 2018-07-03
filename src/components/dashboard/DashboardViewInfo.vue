<template>
<div class="content-dashboard-wrapper">
      <a href='' class="repo-dashboard__name">
        {{ repo.name }}
      </a>
      <p class="repo-dashboard__description">{{ repo.description }}</p>
      <ul class="repo-dashboard__topics topics">
        <li v-for='(topic, index) in repo.topics' :key='index' class="topics__item">{{ topic }}</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'dashboard-view-info',
  props: ['repo'],
  components: {
  },
};
</script>

<style>
.content-dashboard-wrapper {
  flex-direction: column;
  height: 55%;
}
.repo-dashboard__name {
  color: #0366d6;
  font-size: 18px;
  font-weight: 600;
  height: 27%;
  align-items: flex-end;
  text-decoration: none;
}
.repo-dashboard__description {
  font-size: 12px;
  overflow: auto;
  height: 27%;
  font-weight: normal;
  padding-top: 3px;
}
.repo-dashboard__topics {
  height: 45%;
  overflow: hidden;
  padding-top: 1px;
  flex-wrap: wrap;
}
.topics__item {
  font-size: 10px;
  background: #f1f8fe;
  border: 1px solid #f1f8fe;
  border-radius: 10px;
  height: 25px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  white-space: nowrap;
  font-weight: normal;
}
</style>
