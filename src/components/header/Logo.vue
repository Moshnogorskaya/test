<template>
   <div class="logo-group">
      <div class="header__icon" />
      <div class="header__logo logo">
        <div class="logo__heading">GitHub</div>
        <div class="logo__text">search</div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'logo',
  components: {
  },
};
</script>


<style>

.logo-group {
  width: 50%;
}

.header__icon {
  width: 8%;
  background: url("./../../assets/search_cat.png") center no-repeat;
  background-size: contain;
  margin: 1% 0 1% 5%;
}

.header__logo {
  flex-direction: column;
  margin-left: 2%;
  justify-content: center;
}

.logo__heading {
  font-size: 20px;
  font-weight: normal;
}

.logo__text {
  font-size: 12px;
  color: #b3bcc7;
  font-weight: 100;
}

.header__search-link {
  align-items: center;
}

</style>
