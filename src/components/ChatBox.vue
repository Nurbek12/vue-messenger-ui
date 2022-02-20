<template>
  <div :class="`chatbox ${dr?'':'on'}`" :style="{left:`${youleftmove}px`}">
      <ul class="chats"> 
            <li class="infcr" v-for="(lch,i) in chats[0].users" :key="i" @click="$emit('chatview',[true,lch.name,lch.logo,lch.chat,lch.type,i,0,lch.phonenumber])">
              <div :class="`img ${lch.type=='в сети'?'g':''}`"
              :style="{background: `url(${lch.logo})`,
               backgroundSize:`cover`,
               backgroundPosition: `center`}"></div>
              <h3>{{ lch.name }}</h3>
            </li>
 
            <li v-for="(lch,i) in chats[1].users" :key="i" @click="$emit('chatview',[true,lch.name,lch.logo,lch.chat,lch.type,i,1])">
              <div class="img" :style="{background: `url(${lch.logo})`, backgroundSize:`cover`}"></div>
              <h3>{{ lch.name }}</h3>
            </li>
            
            <li v-for="(lch,i) in chats[2].users" :key="i" @click="$emit('chatview',[true,lch.name,lch.logo,lch.chat,lch.type,i,2])">
              <div class="img" :style="{background: `url(${lch.logo})`, backgroundSize:`cover`}"></div>
              <h3>{{ lch.name }}</h3>
            </li>
            
            <li v-for="(lch,i) in chats[3].users" :key="i" @click="$emit('chatview',[true,lch.name,lch.logo,lch.chat,lch.type,i,3])">
              <div class="img" :style="{background: `url(${lch.logo})`, backgroundSize:`cover`}"></div>
              <h3>{{ lch.name }}</h3>
            </li>
      </ul>
      <ul class="lich">
            <li class="infcr" v-for="(lch,i) in chats[0].users" :key="i" @click="$emit('chatview',[true,lch.name,lch.logo,lch.chat,lch.type,i,0])">
              <div :class="`img ${lch.type=='в сети'?'g':''}`" 
              :style="{background: `url(${lch.logo})`,
               backgroundSize:`cover`,
               backgroundPosition: `center`}"></div>
              <h3>{{ lch.name }}</h3>
            </li>
      </ul>
      <ul class="lich">
            <li v-for="(lch,i) in chats[1].users" :key="i" @click="$emit('chatview',[true,lch.name,lch.logo,lch.chat,lch.type,i,1])">
              <div class="img" :style="{background: `url(${lch.logo})`, backgroundSize:`cover`}"></div>
              <h3>{{ lch.name }}</h3>
            </li>
      </ul>
      <ul class="lich">
            <li v-for="(lch,i) in chats[1].users" :key="i" @click="$emit('chatview',[true,lch.name,lch.logo,lch.chat,lch.type,i,1])">
              <div class="img" :style="{background: `url(${lch.logo})`, backgroundSize:`cover`}"></div>
              <h3>{{ lch.name }}</h3>
            </li>
      </ul>
      <ul class="lich">
            <li v-for="(lch,i) in chats[2].users" :key="i" @click="$emit('chatview',[true,lch.name,lch.logo,lch.chat,lch.type,i,2])">
              <div class="img" :style="{background: `url(${lch.logo})`, backgroundSize:`cover`}"></div>
              <h3>{{ lch.name }}</h3>
            </li>
      </ul>
      <ul class="lich">
            <li v-for="(lch,i) in chats[3].users" :key="i" @click="$emit('chatview',[true,lch.name,lch.logo,lch.chat,lch.type,i,3])">
              <div class="img" :style="{background: `url(${lch.logo})`, backgroundSize:`cover`}"></div>
              <h3>{{ lch.name }}</h3>
            </li>
      </ul>
      <ul class="lich">
          <p>Пусто</p>
      </ul>
      <ul class="lich">
          <p>Пусто</p>
      </ul>
  </div>
</template>

<script>
export default {
    name:'ChatBox',
    props:['youleftmove','chats','dr'],
    data(){
        return{
            
        }
    },
    methods:{

    },
}
</script>

<style>
:root{
    --dark: #1d2733;
    --darkcolor: #d6dde4;
}
.chatbox.on{
    --dark: #fff;
    --darkcolor: #000;
}
.chatbox{
    position: absolute;
    z-index: 110;
    /* width: 700%; */
    height: 455px;
    /* border: 1px solid #f00; */
    top: 99px;
    display: flex;
    background: var(--dark);
    left: -580px;
    transition: .3s;
}
.chatbox ul{
    position: relative;
    width: 291px;
    overflow-y: auto;
    scroll-behavior: smooth;
    /* border: 1px solid #f00; */
    padding: 2px;
}
::-webkit-scrollbar{
    display: none;
}
.chatbox ul li{
    position: relative;
    list-style: none;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 5px 10px 5px 7px;
    border-bottom: 1px solid #0005;
    cursor: pointer;
    transition: .2s;
}
.chatbox ul li:hover{
    background: #fff1;
}
.chatbox ul li:active{
    background: #fff3;
}
.chatbox .img{
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-size: cover;
    margin: 0px 4px 0px 2px;
    border:1px solid #0000;
}
.chatbox ul li.infcr .img::after{
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid #222;
    background: #888;
    transform: translate(26px,26px);
}
.chatbox ul li.infcr .img.g::after{
    background: #0f0;
}
.chatbox ul li h3{
    position: relative;
    margin-left: 10px;
    color: var(--darkcolor);
    font-size: .9em;
    font-weight: 600;
    transition: .2s;
}
.chatbox ul p{
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-12%,-20%);
    color: var(--darkcolor);
    font-weight: bold;
    font-size: 1.5em;
    cursor: default;
}
</style>