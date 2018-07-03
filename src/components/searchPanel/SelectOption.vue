<template>
  <div class='select__group'
    :class="['select__group', { select__group_error: valid === false && active === false }]"
  >
      <select
      :value="selected"
      @input="selected = $event.target.value; $emit('input', selected)"
      @focus='active = true'
      class='select-group__select'>
        <option v-bind:value="'placeholder'" disabled>{{ placeholder }}</option>
        <option v-for="option in options" v-bind:key='option' v-bind:value="option">
          {{ option }}
        </option>
      </select>
    <div class='select-group__arrow'>▼</div>
  </div>
</template>

<script>
export default {
  name: 'select-option',
  components: {},
  props: ['placeholder', 'options', 'valid'],
  data() {
    return {
      selected: 'placeholder',
      active: false,
    };
  },
};

</script>

<style>
.select__group {
  width: 20%;
  position: relative;
  height: 30px;
}

.select__group_error {
  background: #fce6f1;
}

.select-group__select {
  z-index: 2;
  background: transparent;
  width: 100%;
  border-bottom: 1px solid #0366d6;
  font-size: 12px;
  appearance: none;
}

.select-group__arrow {
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 20%;
  top: 0;
  right: 0;
  font-size: 1.2vmin;
  align-items: center;
  justify-content: center;
}

.select-group__select:focus {
  border-bottom: 2px solid #0366d6;
  outline: 0;
  box-shadow: none;
}
</style>
