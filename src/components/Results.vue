<template>
<div class='results'>
  <div class="view">
    <button
      :class="['view__dashboard', { view__dashboard_active: currentView === 'dashboard' }]"
      @click='currentView = "dashboard"'>
      <i class="fas fa-th-large"></i>
    </button>
    <button
      :class="['view__list', { view__list_active: currentView === 'list' }]"
      @click='currentView = "list"'>
      <i class="fas fa-bars"></i>
    </button>
  </div>
  <component
    :is='currentViewComponent'
    :repos='repos'
    @toggleRepo='$emit("toggleRepo", $event)'
  ></component>
   </div>
</template>

<script>
import ResultsList from '@/components/list/ResultsList.vue';
import ResultsDashboard from '@/components/dashboard/ResultsDashboard.vue';

export default {
  name: 'results',
  props: ['repos'],
  components: {
    ResultsList,
    ResultsDashboard,
  },
  data() {
    return {
      currentView: 'list',
    };
  },
  computed: {
    currentViewComponent() {
      return `results-${this.currentView}`;
    },
  },
};
</script>
<style>
.view {
  width: 100%;
  height: 77px;
  justify-content: flex-end;
}
.view__dashboard {
  width: 40px;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  margin-right: 10px;
  font-size: 32px;
  color: #e0e0e0;
}
.view__list {
  width: 40px;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  font-size: 36px;
  color: #e0e0e0;
}
.view__dashboard_active,
.view__list_active {
  color: #3c4146;
}
.view__dashboard:focus,
.view__list:focus {
  outline: none;
  border: none;
  box-shadow: none;
}
.results {
  flex-direction: column;
  width: 100%;
  align-items: center;
}
</style>
