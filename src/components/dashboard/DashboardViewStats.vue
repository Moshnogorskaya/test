<template>
<div class="repo-dashboard__stats">
      <div class="repo-dashboard__language">{{ repo.language }}</div>
      <div class="repo-dashboard__stars stars">
        <span class="stars__icon">
          <i class="fas fa-star"></i>
        </span>
        {{ repo.stargazers_count }}
      </div>
    </div>
</template>

<script>
export default {
  name: 'dashboard-view-stats',
  props: ['repo'],
  components: {
  },
};
</script>

<style>
.repo-dashboard__stats {
  height: 20%;
  justify-content: space-between;
}
.repo-dashboard__language {
  color: #999999;
  font-size: 12px;
  align-items: center;
}
.repo-dashboard__stars {
  font-size: 18px;
  align-items: center;
}

.stars__icon {
  color: #f1e05a;
  margin-right: 6px;
  font-size: 18px;
  position: relative;
  top: -2px;
}
</style>
