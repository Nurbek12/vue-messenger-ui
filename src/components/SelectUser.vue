<template>
  <div :class="`chat ${dr?'':'on'}`" :style="{left:`${exp[0]?0:290}px`}">
      <!--  --> 
      <div :class="`myinfo ${view?'on':''}`">
          <span :style="{display:`${!view?'block':'none'}`}" 
          @click="$emit('back',[false,''])"><i class="fa fa-arrow-left"></i></span>
          <div class="imgg" @click="view=!view">
              <div class="mimg" :style="{background: `url(${exp[2]})`,
               backgroundSize:`cover`,
               backgroundPosition: `center`}"></div>
              <h3> {{ exp[1] }} <br>
                <span :class="`${exp[4]=='в сети'?'gren':''}`" v-html="typing?htm:exp[4]"></span>
              </h3>
          </div>
          <span class="spn"><i :class="`fa fa-${view?'phone':'search'}`"></i></span>
          <span><i class="fa fa-ellipsis-v"></i></span>
          <div class="usersinfo" :style="{display:`${view?'block':'none'}`}">
              <div class="cicrle" @click="view=false">
                  <i class="fa fa-comment"></i>
              </div>
              <div class="inf">
                  <span>Информация</span>
                  <h3>{{ exp[7] || '' }}</h3>
                  <p>Телефон</p>
              </div>
              <div class="cc">
                  <p>Уведомления<br><span>{{`В${togle?'':'ы'}ключены`}}</span></p>
                  <b><i @click="toglebol" :class="`fa fa-toggle-${togle?'on blue':'off'}`"></i></b>
              </div>
          </div>
      </div>
      <div class="ourchatbox">
        <div class="space" v-if="exp[6]==0 && exp[3].length == 0">
            <h4>Здес пока нечего нет...</h4>
            <br>
            <p>Отправте сообщения или нажмите на приветствие ниже</p>
            <div class="stiker" @click="sendOne()">Hello!</div>
        </div>
        <ul class="chatcre"  ref="chatBox">
            <li v-for="(c,j) in exp[3]" :key="j" :class="c.id"> <!--=='me'?'answer':'messag'-->
                <div class="imgmess"  @dblclick="$emit('deleteMess',j)" v-if="c.imgb"><small>{{ (parseFloat(Math.random()*500).toFixed(2)) }} kb</small><sub>{{ c.time }}</sub></div>
                <p v-if="!c.imgb"  @dblclick="$emit('deleteMess',j)" :class="(exp[6]!=0 && c.id!='date' && c.id!='me')?'cngr':''" :data-text="`${exp[1]}\n`">
                    {{ c.mess }}<sub>{{ c.time }}</sub>
                </p>
            </li>
        </ul>
      </div>
      <div :class="`input ${exp[6]==2?'ofs':''}`">
          <Smile :drrr="dr" @smileExp="smileImp($event)" :smb="smile"/>
          <span @click="smile=!smile"><i :class="`fa fa-smile-o ${smile?'blue':''}`"></i></span>
          <input @keyup.enter="sendMess(exp[5],exp[6])" type="text" v-model="message" placeholder="Сообщение">
          <span @click="sendImg(exp[5],exp[6])" class="file"><i class="fa fa-file"></i></span>
          <span @click="sendMess(exp[5],exp[6])"><i :class="`fa fa-${message==''?'microphone':'send blu'}`"></i></span>
      </div>
  </div>
</template>

<script>
import Smile from './Smile.vue'

export default {
    name:'Chat',
    props:['exp','dr'],
    components:{
        Smile
    },
    data(){
        return{
            typing:false,
            smile:false,
            togle:false,
            htm:'<b class="blue"></b>',
            message:'',
            view:false,
            mm: new Date().getMinutes(),
            hh: new Date().getHours(),
            time:'',
            answer:'',
        }
    },
    methods:{
        month(mnd){
            switch(mnd){
                case 0: return 'январь';
                case 1: return 'февраль';
                case 2: return 'март';
                case 3: return 'апрель';
                case 4: return 'май';
                case 5: return 'июнь';
                case 6: return 'июль';
                case 7: return 'август';
                case 8: return 'сентябр';
                case 9: return 'октябр';
                case 10: return 'ноябр';
                case 11: return 'декабр';
                default: return '';
            }
        },
        smileImp(e){
            this.message+=e;
        },
        toglebol(){
            this.togle = !this.togle;
        },
        sendImg(){
            this.smile = false;
            if(this.exp[3] == ''){
                this.$emit('newDate',`${new Date().getDate()}-${this.month(( new Date().getMonth() ))}`);
            }
            this.mm = new Date().getMinutes();
            this.hh = new Date().getHours();
            this.time=`${this.hh>=10?this.hh:'0'+this.hh}:${this.mm>=10?this.mm:'0'+this.mm}`
            this.$emit('newImg',['me',this.message,this.time]);
            this.$refs.chatBox.scrollTop = this.$refs.chatBox.scrollHeight;
        },
        sendOne(){
            this.message='Hello!';
            this.sendMess();
        },
        sendMess(){
            if(this.message!=''){
                if(this.exp[3] == ''){
                    this.$emit('newDate',`${new Date().getDate()}-${this.month(( new Date().getMonth() ))}`);
                }
                this.smile = false;
                this.mm = new Date().getMinutes();
                this.hh = new Date().getHours();
                this.time=`${this.hh>=10?this.hh:'0'+this.hh}:${this.mm>=10?this.mm:'0'+this.mm}`
                this.$emit('newMess',['me',this.message,this.time]);
                setTimeout(()=>{
                    this.$refs.chatBox.scrollTop = this.$refs.chatBox.scrollHeight;
                },1);
                switch(this.message){
                    case 'how are you' : this.answer = 'i am fine ✌✌✌'; break;
                    case 'what is your name' : this.answer = 'my name is '+this.exp[1]+'😜'; break;
                    case 'what is the html' : this.answer = 'Hypertext Markup Language'; break;
                    case 'what is the php' : this.answer = 'Hypertext Proccesser'; break;
                    case 'what is the css' : this.answer = 'Cascading Style Sheets'; break;
                    case 'what is the javascript' : this.answer = 'JavaScript is dinamic programming language'; break;
                    case 'hi' : this.answer = 'hi bro'; break;
                    case 'hello' :this.answer = `hello`; break;
                    case 'Hello!' :this.answer = `hello`; break;
                    case 'you are beautiful' :this.answer = `😎😎😎 yeah it's me`; break;
                    case 'ok' :this.answer = `👌👌👌`; break;
                    case 'i love Vue.js' :this.answer = `❤❤❤`; break;
                    case 'you are a crazy' :this.answer = `😑😡😡`; break;
                    case 'i dont like c++' :this.answer = `☹`; break;
                    case 'weather is cold' :this.answer = `yeah 🥶`; break;
                    case 'weather is hot' :this.answer = `yeah 🥵`; break;
                    case 'hmm' :this.answer = `😁😁`; break;
                    case 'hey you are not Designer' :this.answer = `😂😂 no bro`; break;
                    case 'i love you' :this.answer = `❤❤ so, do I`; break;
                    default: this.answer = 'sorry'; break;
                    //😃😱😪 case 'how are you' : answer = 'i am fine'; break;
                }
                if(this.exp[4]=='в сети'){
                    setTimeout(()=>{
                        this.typing = true;
                    },1000);
                    setTimeout(()=>{
                        this.mm = new Date().getMinutes();
                        this.hh = new Date().getHours();
                        this.time=`${this.hh>=10?this.hh:'0'+this.hh}:${this.mm>=10?this.mm:'0'+this.mm}`
                        this.$emit('newMess',['he',this.answer,this.time]);
                        this.typing = false;
                        setTimeout(()=>{
                            this.$refs.chatBox.scrollTop = this.$refs.chatBox.scrollHeight;
                        },1);
                    },3000)
                }
                this.message='';
            }
        }
    },
    // created(){
    //     
    // }
    // mounted(){
    //     this.time=`${this.hh>10?this.hh:'0'+this.hh}:${this.mm>10?this.mm:'0'+this.mm}`
                        // this.$refs.chatBox.scrollTop = this.$refs.chatBox.scrollHeight;
    // }
}
</script>

<style>
:root{
    --dark: #212d3b;
    --darkcolor: #d6dde4;
}
.chat.on{
    --dark: #fff;
    --darkcolor: #000;
}
.blu{
    color: #6dc2fe;
}
.chat{
    position: absolute;
    width: 100%;
    height: 92%;
    /* border: 1px solid #fff; */
    top: 23px;
    z-index: 999;
    transition: .3s;
}
.myinfo{
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    /* border: 1px solid #fff; */
    background: var(--dark);
    padding: 3px 10px 3px 10px;
    color: var(--darkcolor);
    /* display: none; */
    height: 55px;
    transition: .2s;
    z-index: 33;
    box-shadow: 0px 1px 5px #0003;
}
.myinfo.on{
    /* align-items: flex-start; */
    transition: .2s;
    height: 100%;
}
.myinfo .imgg{
    position: relative;
    /* border: 1px solid #fff; */
    /* padding: 0px 50px 0px 50px; */
    width: 180px;
    height: 30px;
    top: 7px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    transition: .2s;
    cursor: pointer;
}
.myinfo .imgg .mimg{
    width: 38px;
    height: 38px;
    background: #ebeeee;
    border-radius: 50%;
    margin: 3px 9px 3px 6px;
}
.myinfo .imgg h3{
    font-size: .82em;
    height: 100%;
    margin-top: 7px;
    color: var(--darkcolor);
}
.chat span:not(h3 span){
    cursor: pointer;
}
.myinfo .imgg h3 span{
    font-size: 0.85em;
    color: #76808c;
}
.myinfo .imgg h3 span.gren{
    color: #0f0;
}
.chat span:not(h3 span):not(.input span){
    position: relative;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    top: 10px;
    /* background: #fff4; */
    text-align: center;
    line-height: 23px;
}
.chat span:not(h3 span):not(.input span):not(.usersinfo span):active{
    background: #fff4;
}
.ourchatbox{
    /* border: 1px solid #fff; */
    top: 54px;
    height: 449px;
    background: url(../assets/bg.jpg);
    background-size: cover;
    overflow-y: auto;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    scroll-behavior: smooth;
    hyphens: auto;
}
::-webkit-scrollbar{
    display: none;
}
.ourchatbox .chatcre{
    position: absolute;
    width: 100%;
    bottom: 0;
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 2px;
    overflow-y: scroll;
    scroll-behavior: smooth;
    hyphens: auto;
    max-height: 100%;
}
.ourchatbox .chatcre::-webkit-scrollbar{
    display: block;
    height: 0%;
    width: 0%;
}
.ourchatbox .chatcre .date{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
}
.ourchatbox .chatcre p.cngr::before{
    content: attr(data-text);
    color: #61a8e3;
    cursor: pointer;
    font-weight: 600;
}
.ourchatbox .chatcre .date p{
    max-width: 60%;
    background: #0006;
    font-size: .8em;
    color:#fff;
    border-radius: 25px;
    padding: 1px 15px;
    font-weight: 700;
}
.ourchatbox .chatcre li .imgmess{
    position: relative;
    top: 0;
    left: 0;
    width: 150px;
    height: 150px;
    background: #fff;
    border-radius: 5px;
    border: 1px solid var(--dark);
    cursor: pointer;
}
.ourchatbox .chatcre li .imgmess::before{
    position: absolute;
    content: '\f019';
    top: 50%;
    font-family: fontAwesome;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 35px;
    height: 35px;
    line-height: 35px;
    background: #0006;
    border-radius: 50%;
    text-align: center;
    color: #fff;
}
.ourchatbox .chatcre li .imgmess sub{
    position: absolute;
    bottom: 5px;
    right: 5px;
    color: #000;
    font-size: 11px;
}
.ourchatbox .chatcre li .imgmess small{
    position: absolute;
    top: 5px;
    left: 5px;
    color: #000;
    font-size: 10px;
}
.ourchatbox .chatcre .he,
.ourchatbox .chatcre .me{
    position: relative;
    width: 100%;
    /* border: 1px solid #fff; */
    color:#fff;
    margin: 1px;
    padding: 1px;
}
.ourchatbox .chatcre .he{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
}
.ourchatbox .chatcre .me{
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
}
.ourchatbox .chatcre .me p,
.ourchatbox .chatcre .he p{
    box-shadow: 2px 2px 3px #0004;
    font-size: .87em;
    position: relative;
    background: #3e6189;
    padding: 4px 10px 4px 10px;
    border-radius: 5px;
    max-width: 200px;
    left: 0px;
    animation: s .05s linear forwards;
    display: flex;
    flex-direction: column;
    transition: .2s;
}
@keyframes s{
    0%{
        transform: scale(.8);
        opacity: .6;
    }
    100%{
        transform: scale(1);
        opacity: 1;
    }
}
.ourchatbox .chatcre .he p{
    background: var(--dark);
    color: var(--darkcolor);
}
.ourchatbox .chatcre p sub{
    font-size: 0.6em;
    position: relative;
    bottom: 0px;
    right: 0px;
    /* border: 1px solid #fff; */
    padding: 0;
    width: 100px;
    text-align: end;
    width: 100%;
    min-width: 70px;
}
.input{
    position: absolute;
    width: 100%;
    height: 32px;
    background: var(--dark);
    display: flex;
    align-items: center;
    padding: 0px 3px 0px 5px;
    bottom: 0;
    box-shadow: 0px -4px 5px #0003;
}
.input.ofs::after{
    position: absolute;
    cursor: pointer;
    font-size: 0.9em;
    content:'Обсудить';
    font-weight: 800;
    top: 0;
    left: 0;
    width: 100%;
    height: 26px;
    background: var(--dark);
    border-radius: 0px;
    text-align: center;
    color: #61a8e3;
    padding: 4px 5px 0px 5px;
}
.input.ofs:active::after{
    background: #364555;
}
.input span{
    position: relative;
    width: 33px;
    height: 33px;
    border-radius: 50%;
    /* background: #fff4; */
    text-align: center;
    line-height: 23px;
    color: #5e6a7a;
    text-align: center;
    font-size: 1.3em;
    line-height: 30px;
    top: 1px;
}
.input span:active{
    background: #fff1;
}
.input .file{
    font-size: 1em;
}
.input input{
    width: 80%;
    border: none;
    outline: none;
    background: transparent;
    color: #fff;
    padding-left: 3px;
    font-size: .9em;
}
.chat.on input{
    color: #000;
}
.usersinfo{
    position: absolute;
    width: 100%;
    border-top: 1px solid #0003;
    padding: 3px;
    top: 60px;
    left: 0;
}
.input .fa.blue{
    color: #6dc2fe;
}
.cicrle{
    position: absolute;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    background: #61a8e3;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    top: -15%;
    left: 80%;
    z-index: 333;
}
.chat.on .cicrle{
    color: #fff;
}
.cicrle:active{
    transform: scale(.95);
}
.inf{
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 8px;
    height: 60px;
}
.inf span{
    font-size: 0.9em;
    font-weight: bold;
    color: #87b4da;
    margin-bottom: 14px;
}
.inf h3{
    font-size: .95em;
    font-weight: 600;
    color: var(--darkcolor);
    margin-bottom: 2px;
}
.inf p{
    font-size: .9em;
    font-weight: normal;
    color: #76808c;
}
.cc{
    position: relative;
    top: 23px;
    padding: 18px 8px;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #0003;
    align-items: center;
    padding-left: 8px;
}
.cc p{
    font-size: .95em;
    font-weight: 600;
    color: var(--darkcolor);
    line-height: 0px;
}
.cc p span{
    font-size: .9em;
    font-weight: normal;
    color: #76808c;
    transition: .2s;
}
.cc b{
    position: relative;
    width: 40px;
    border-left: 1px solid #000;
    display: flex;
    justify-content: center;
    cursor: pointer;
    z-index: 33;
    font-size: 1.2em;
    color: #76808c;
    transition: .2s;
}
.cc b .fa.blue{
    color: #61a8e3;
}
.myinfo .imgg h3 b.blue{
    font-size: 1em;
    color:#61a8e3;
    position: absolute;
    transform: translateY(0px);
}
.myinfo .spn{
    position: relative;
    right: 0px;
}
.myinfo.on .spn{
    position: relative;
    right: -20px;
}
.myinfo .imgg h3 b.blue::before{
    position: absolute;
    content:'печатает';
    animation: 1s type linear infinite;
}
@keyframes type{
    0%{
        content:'печатает'
    }
    30%{
        content:'печатает.'
    }
    70%{
        content:'печатает..'
    }
    100%{
        content:'печатает...'
    }
}
.space{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 200px;
    height: 200px;
    background: #0004;
    border-radius: 5px;
    text-align: center;
    color: #fff;
    padding: 10px 5px;
}
.space h4{
    margin-top: 10px;
    font-size: .95em;
}
.space p{
    font-size: .85em;
}
.space .stiker{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,50%);
    cursor: pointer;
    width: 100px;
    height: 30px;
    background: #000d;
    border-radius: 5px;
    text-align: center;
    color: #fff;
    padding: 5px 15px;
}
</style>