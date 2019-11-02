<template>
    <div>
      <p>{{msg}}</p>
      <button v-bind:disabled="isButtonDisabled">点我呀</button>
      <!--v-if 根据isSeen 显示与隐藏-->
      <p v-if="isSeen">我来了</p>
      <p v-if="!isSeen">我走了</p>
      <!--<a v-bind:href="url">走去百度</a>-->
      <!--缩写-->
      <a :href="url">走去百度</a>
      <!--<button v-on:click="doSomething">hello vue</button>-->
      <!--缩写-->
      <button @click="doSomething">hello vue</button>
      <!--<div v-bind:class="[isActive ? activeClass : '', errorClass]">好了好了</div>-->
      <div v-bind:class="{ active: isActive }">33333</div>
      <div
        class="static"
        v-bind:class="{ active: isActive, 'text-danger': hasError }"
      >ddddd</div>
      <div v-bind:class="classObject">456</div>
      <div v-bind:class="[activeClass,errorClass]">hello world vue</div>
      <div v-bind:class="[isActive ? activeClass : '', errorClass]">44</div>
      <div v-bind:class="[{active: isActive}, errorClass]">44</div>
      <!--<div v-bind:style="{color: activeColor,fontSize: fontSize + 'px'}">style</div>-->
      <div v-bind:style="styleObject">style</div>
      <div v-bind:style="[baseStyles,overridingStyles]">你好</div>
      <div v-if="isSeen">哈哈</div>
      <div v-else>没办法</div>
      <div v-if="switchShow">
      <label>Username</label>
      <input placeholder="Enter your username" key="username-input"/>
    </div>
      <div v-else>
        <label>Email</label>
        <input placeholder="Enter your email" key="email-input"/>
      </div>
      <button @click="isShow">Switch</button>
      <div>
        <div>
          <!--<ul>-->
            <!--<li v-for="(item,index) in items">{{index}}{{item.message}}</li>-->
          <!--</ul>-->
         <ul>
           <li v-for="(value, name, index) in object">
           {{index}}:{{name}}:{{value}}
           </li>
         </ul>
        </div>
      </div>
      <div>
        <input placeholder="input your name" v-model="msg"/>
        <label>{{msg}}</label>
      </div>
      <div>
        <input type="radio" id="one" value="One" v-model="picked">
        <label for="one">One</label>
        <br>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label>
        <br>
        <span>Picked: {{ picked }}</span>
      </div>
      <div>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>
        <br>
        <span>Checked names: {{ checkedNames }}</span>
      </div>
      <div>
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{ checked }}</label>
      </div>
      <div>
          <select v-model="selected">
            <option disabled value="">请选择</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
          <span>Selected: {{ selected }}</span>
      </div>
      <div>
        <select v-model="select" multiple style="width: 50px;">
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <br>
        <span>Selected: {{ select }}</span>
      </div>
      <div>
        <select v-model="se">
          <option v-for="option in options" v-bind:value="option.value">
            {{ option.text }}
          </option>
        </select>
        <span>Se: {{ se }}</span>
      </div>
    </div>
</template>

<script>
    export default{
        name: "test",
        data() {
          return {
            msg: "hello world",
            isButtonDisabled: false,
            isSeen: true,
            url: "www.taobao.com",
            isActive: true,
            hasError: false,
            classObject: {
              isActive: true,
              hasError: false,
            },
            activeClass: 'active',
            errorClass: 'text-danger',
            activeColor: 'red',
            fontSize: 30,
            styleObject: {
              color: 'red',
              // fontSize:  fontSize + 'px',
              fontSize: '13px'
            },
            baseStyles: {color: 'blue'},
            overridingStyles: {fontSize: '20px'},
            switchShow: true,
            items: [
              { message: 'Foo' },
              { message: 'Bar' }
            ],
            object: {
              title: 'How to do lists in Vue',
              author: 'Jane Doe',
              publishedAt: '2016-04-10'
            },
            picked:'',
            checkedNames:[],
            checked: false,
            selected: '',
            select: [],
            se: 'A',
            options: [
              { text: 'One', value: 'A' },
              { text: 'Two', value: 'B' },
              { text: 'Three', value: 'C' }
            ]
          } ;
        },

        methods: {
          doSomething() {
            alert('hello vue');
          },
          isShow() {
            this.$data.switchShow = !this.$data.switchShow;
          }
        }
    }
</script>

<style scoped>
.activeClass{
  border: 2px solid;
}
.errorClass{
  background-color: gold;
}

  .active{
    background-color: #00B7FF;
  }
</style>
