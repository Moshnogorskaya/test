<template>
  <div class='header'>
      <logo />
      <div class='nav-group'>
        <router-link to='/search' class='header__search-link'>Search</router-link>
        <router-link to='/my-list' class='header__my-list-link'>My List</router-link>
      </div>
    </div>
</template>

<script>

import Logo from './Logo.vue';

export default {
  name: 'navigation',
  components: {
    Logo,
  },
};
</script>

<style>

.header {
  background: #3c4146;
  color: #ffffff;
  height: 53px;
  justify-content: space-between;
  width: 100%;
}

.nav-group {
  width: 50%;
  justify-content: flex-end;
}

.header__my-list-link,
.header__search-link {
  margin-right: 5%;
  align-items: center;
  color: #b3bcc7;
  text-decoration: none;
  font-size: 13px;
  font-weight: 100;
  white-space: nowrap;
}

.router-link-active {
  color: white;
  font-weight: normal;
}

.header__my-list-link:hover,
.header__search-link:hover {
  color: white;
}
</style>
