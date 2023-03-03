<template>
  <h1>hello vue how are you</h1>
  <h1>{{ message }}</h1>
  
  <button @click="reverseMessage">Reverse Message</button>
</template>
<script>
export default {
  name: 'KasMas',
  props: {
    message: {
      type: String,
      required: true
    }
  },
  methods: {
    reverseMessage() {
      console.log('Current message:', this.message)
      if (this.message) {
        const reversedMessage = this.message.split('').reverse().join('')
        console.log('Reversed message:', reversedMessage)
        // eslint-disable-next-line vue/no-mutating-props
        this.message = reversedMessage
      } else {
        console.error('Message is empty!')
      }
      alert('Hello Africa!')
    }
  }
}

</script>