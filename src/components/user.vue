<template>
  <div class="user">

    <form action="http://127.0.0.1:3000/users" method="post">
      <input type='text' name='name' value='name'>
      <input type='text' name='tel' value='tel'>
      <button type="submit" >123</button>
    </form>
    <!--<ul>-->
      <!--<li v-for="item in items" style="display: block">-->
        <!--55555-->
      <!--</li>-->
    <!--</ul>-->
    <p>{{id}}</p>
    <!--<p>{{name}}</p>-->
  </div>
</template>

<script>


import axios from 'axios';

export default {
  name: 'user',
  props: ['id', 'name'],
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

  beforeCreate: function() {
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

    aa: function() {
      console.log('22222222222222222222222222222');

      axios.post('/users', 1 , {
        baseURL: 'http://127.0.0.1:3000'
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
          // always executed
          console.log('44444')
        });
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
