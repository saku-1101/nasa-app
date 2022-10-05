<template>
  <div id="nasa-component">
    <div class="img">
      <img src="" alt="">
    </div>
    <div class="title">
      <h1>Test</h1>
    </div>
    <div class="discription">
      <p>testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest</p>
    </div>
    <div class="author">
      <h3>Sakura Adachi</h3>
    </div>
    <div class="button">
      <button type="button" id="get-space" @click="fetchAPIData">Get a Space!!</button>
    </div>
    <div class="space-photo">
      <img :src= result.url>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios'
// https://blog.logrocket.com/how-use-axios-vue-js/
// Axios is a promised-based HTTP client for JavaScript. It has the ability to make HTTP requests from the browser and handle the transformation of request and response data.
// Axios automatically transforms the data returned from the server, but with fetch() you have to call the response.
// A promise-based client returns promises rather than accepting callbacks.
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// 🤫How to make a component in Vue Appllication
// https://v3.ja.vuejs.org/guide/single-file-component.html#%E5%89%8D%E6%9B%B8%E3%81%8D
// https://v3.ja.vuejs.org/api/global-api.html#createapp
// <script>セクションは,標準的なJavaScriptモジュールです.Vueコンポーネント定義をデフォルトでエクスポートする必要があります.
// <template> セクションは、コンポーネントのテンプレートを定義します。
// <style> セクションは,コンポーネントに関連する CSS を定義します

// // mount mounts components with application
export default defineComponent({
  el: '#nasa-component',
  data(){ return { 
    result: "",
    responseAvailable: false,
    apiKey:'LOOD7py5PiZbYjgFTwzv0lRPqQBBwi9IUDMVnpBX'
  }},
  methods:{
    // API integration method
    async fetchAPIData(){
      try {
        const response = await axios.get("https://api.nasa.gov/planetary/apod?api_key=" +this.apiKey)
        console.log(response)
        this.result = response.data
        console.log(this.result)
      } catch (error) {
        console.log(error)
      }
    }
    
  }
})
</script>

