<template>
  <section>
    <!-- <h4 class="log"><span>Vue.js</span><br>Plus<br>Messenger</h4> -->
    <div class="phone">
      <div class="display">
        <Settings
          :dr="dark"
          @darks="darkTheme"
          :yourbool="setbol"
          @backwind="setbols($event)"
        />
        <Nav :dr="dark" @setwind="setbols($event)" 
        @moveUsers="moves($event)" />
        <ChatBox
          :dr="dark"
          :youleftmove="yourleft"
          :chats="chats"
          @chatview="chatvies($event)"
        />
        <Chat
          :dr="dark"
          :exp="wch"
          @back="chatvies($event)"
          @newMess="pushMess($event)"
          @newDate="pushDate($event)"
          @deleteMess="deleteMess($event)"
          @newImg="pushImg($event)"
        />
        <div class="pen">
          <i class="fa fa-pencil"></i>
        </div>
        <PhoneInfo :dr="dark" />
        <Pass :passB="passbol" @onpass="passbol = $event" />
      </div>
    </div>
  </section>
</template>

<script>
import Nav from "./components/Nav.vue";
import Settings from "./components/Settings.vue";
import ChatBox from "./components/ChatBox.vue";
import PhoneInfo from "./components/PhoneInfo.vue";
import Chat from "./components/SelectUser.vue";
import Pass from "./components/Password.vue";
import users_api from "./users";

export default {
  name: "App",
  components: {
    Nav,
    Settings,
    ChatBox,
    PhoneInfo,
    Chat,
    Pass,
  },
  data() {
    return {
      setbol: false,
      yourleft: 0,
      passbol: false,
      dark: true,
      wch: [],
      chats: users_api,
      x: "",
      y: "",
    };
  },
  methods: {
    chatvies(ev) {
      this.wch = ev;
      this.x = ev[5];
      this.y = ev[6];
      // console.log(this.x + " " + this.y + " " + 1);
    },
    setbols(e) {
      this.setbol = e;
      // console.log(e, " ", this.setbol);
    },
    deleteMess(e) {
      this.chats[this.y].users[this.x].chat.splice(e, 1);
    },
    pushDate(e) {
      this.chats[this.y].users[this.x].chat.push({
        id: "date",
        mess: e,
        imgb: false,
      });
    },
    pushImg(e) {
      this.chats[this.y].users[this.x].chat.push({
        id: "me",
        mess: e[1],
        imgb: true,
        time: e[2],
      });
    },
    pushMess(e) {
      this.chats[this.y].users[this.x].chat.push({
        id: e[0],
        mess: e[1],
        time: e[2],
        imgb: false,
      });
    },
    moves(e) {
      switch (e) {
        case 1:
          this.yourleft = 0;
          break;
        case 2:
          this.yourleft = -290;
          break;
        case 3:
          this.yourleft = -581;
          break;
        case 4:
          this.yourleft = -872;
          break;
        case 5:
          this.yourleft = -1163;
          break;
        case 6:
          this.yourleft = -1454;
          break;
        case 7:
          this.yourleft = -1745;
          break;
        case 8:
          this.yourleft = -2036;
          break;
      }
    },
    darkTheme() {
      this.dark = !this.dark;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
body {
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #1a242e;
}
section {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
}
.phone {
  position: relative;
  width: 300px;
  height: 630px;
  background: #000;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 5px 20px 5px;
}
.phone::after {
  content: "";
  position: absolute;
  width: 6px;
  height: 120px;
  background: #000;
  top: 100px;
  left: 297px;
}
.phone::before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #1a1919;
  border: 4px solid #000;
  z-index: 9999999;
  top: 32px;
  left: 14px;
}
.display {
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 0px 0px 5px 5px;
  overflow: hidden;
}
.display::before,
.display::after {
  position: absolute;
  content: "";
  width: 100%;
  background: #1a242e;
  border: 1px solid #1a242e;
}
.display::after {
  bottom: 0;
  height: 25px;
}
.display::before {
  top: 0px;
  height: 20px;
}
.pen {
  position: absolute;
  width: 45px;
  height: 45px;
  background: #73b9f3;
  border-radius: 50%;
  bottom: 7%;
  z-index: 220;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 3%;
  cursor: pointer;
  color: #fff;
  font-size: 1.3em;
}
.pen:active {
  transform: scale(0.94);
}
.log {
  position: relative;
  font-size: 4.2em;
  width: 90%;
  -webkit-text-stroke: 2px #000;
  color: #fff2;
  width: 400px;
  left: 0px;
  margin: 50px;
  height: 400px;
  text-align: start;
}
.log span {
  -webkit-text-stroke: 2px #3faf7f;
}
</style>
