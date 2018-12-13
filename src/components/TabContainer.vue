<template>
<div>
  <button-tab>
    <div slot="form-header">
      <h3>This is the title of the form</h3>
      <p>Information about the form</p>
    </div>
    <div slot="form-fields">
      <input type="text" placeholder="name" required />
      <input type="password" placeholder="password" required />
    </div>
    <div slot="form-controls">
      <button v-on:click="handleSubmit">Submit</button>
    </div>
  </button-tab>
</div>
  
</template>

<script>
import ButtonTab from '@/components/ButtonTab'
export default {
  components: {
    ButtonTab
  }, 
  data() { 
    return {
      title: 'I am a dynamic slot title'
    }
  }
}
</script>

<style scoped>

</style>
