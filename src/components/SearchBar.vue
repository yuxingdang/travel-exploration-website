<template>
  <div>
    <input @input="onInput" placeholder="Where would you like to go?"/>
  </div>	
</template>

<script>
export default{
  name: 'SearchBar',
  methods: {
    onInput: function(event) {
      //console.log(event.target.value);
      this.$emit('termChange', event.target.value);
    }
  }
};
</script>

<style scoped>
  input {
    width: 75%;
  }

  div {
    text-align: left;
    margin: 20px;
  }
</style>
