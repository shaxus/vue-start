<template>
  <div class="hello">
      <button v-on:click="aa">
        123
      </button>
    <form action="http://127.0.0.1:3000/users" method="post">
      <input type='text' name='name' value='name'>
      <input type='text' name='tel' value='tel'>
      <button type="submit" >123</button>
    </form>
    <p>{{count}}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    <p>{{this.$route.params}}}</p>
    <router-view></router-view>

  </div>
</template>

<script>


import axios from 'axios';

// import vuex from '../vuex/hello-vuex'

export default {
  name: 'HelloWorld',
  // vuex,
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items: [
        {
          name : 1
        },
        {
          sex : '男'
        }
      ]
    }
  },
  computed: {
    count () {
        return this.$store.state.count;
    }
  },
  beforeCreate: function() {
    console.log('33333');
    // console.log(vuex);
    console.log(this.$store);
    console.log('33333');
  },

  created: function() {
    console.log('11111111');
  },

  mounted: function(){
    // axios.post('/users', [{ zhangsan: '1'}] , {
    //   baseURL: 'http://127.0.0.1:3000'
    // })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   }).then(function () {
    //   // always executed
    //   console.log('44444');
    // });
  },
  methods: {
    increment () {
      this.$store.commit('increment');
    },
    decrement () {
      this.$store.commit('decrement');
    },
    aa: function() {
      console.log('22222222222222222222222222222');
      // this.$router.push({ name: 'user', params: { userId: '123' }});
      // axios.post('/users', 1 , {
      //   baseURL: 'http://127.0.0.1:3000'
      // })
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   })
      //   .then(function () {
      //     // always executed
      //     console.log('44444')
      //   });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
