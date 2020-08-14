<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },

  mounted() {
    let number = 10;
    let n1 = 0,
      n2 = 1,
      nextTerm;

    console.log("Fibonacci Series:");

    for (let i = 1; i <= number; i++) {
      console.log(n1);
      nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
    }

    return nextTerm;

    let i = 1;

    while (i <= 100) {
      console.log(
        i % 15 ? (i % 5 ? (i % 3 ? i : "fizz") : "buzz") : "fizzbuzz"
      );
      i = i + 1;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
