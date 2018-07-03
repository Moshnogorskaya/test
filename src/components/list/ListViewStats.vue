<template>
<div class="repo__stats">
      <div class="repo__stars stars-group">
        <span class="stars-group__icon">
          <i class="fas fa-star"></i>
        </span>
        {{ repo.stargazers_count }}
      </div>
      <div class="repo__language">{{ repo.language }}</div>
    </div>
</template>

<script>
export default {
  name: 'list-view-stats',
  props: ['repo'],
  components: {
  },
};
</script>

<style>
.repo__stats {
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 30px 12px 0;
}
.repo__stars {
  font-size: 16px;
  align-items: center;
  font-weight: 200;
}
.stars-group__icon {
  color: #f1e05a;
  font-size: 20px;
  margin-right: 7px;
  position: relative;
  top: -2px;
}
.repo__language {
  color: #999999;
  font-size: 13px;
  font-weight: 100;
}
</style>
