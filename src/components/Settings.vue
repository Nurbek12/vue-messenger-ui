<template>
  <div
    :class="`settings ${dr ? '' : 'on'}`"
    :style="{ left: `${yourbool ? 0 : -293}px` }"
  >
    <div class="details">
      <div class="infouser">
        <div class="img">
          <div class="image"></div>
          <p>Nurbek<br /><span>+998999999999</span></p>
        </div>
        <div class="img s">
          <span @click="darkthem"
            ><i :class="`fa fa-${dr ? 'moon-o' : 'sun-o'}`"></i
          ></span>
          <span><i class="fa fa-bookmark-o"></i></span>
          <span @click="flat = !flat"
            ><i
              class="fa fa-angle-down"
              :style="{
                transform: `rotate(${flat ? 0 : 180}deg)`,
                transition: `.2s`,
              }"
            ></i
          ></span>
        </div>
      </div>
      <ul class="setting" :style="{ top: `${flat ? -88 : 0}px` }">
        <li class="seluser"><b class="myuser"></b>Nurbek</li>
        <li class="seluser"><i class="fa fa-plus"></i>Добавит аккаунт</li>
        <hr />
        <li v-for="(set, i) in setng" :key="i">
          <i :class="`fa fa-${set.clas}`"></i>{{ set.name }}
        </li>
        <span
          >Plus Messenger для Android <br />
          v7.7.2.0(17640) universal</span
        >
      </ul>
    </div>
    <div
      :style="{ opacity: `${yourbool ? 1 : 0}` }"
      @click="$emit('backwind', false)"
      class="back"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Settings",
  props: {
    yourbool: Boolean,
    dr: Boolean,
  },
  data() {
    return {
      flat: true,
      setng: [
        {
          name: "Создать группу",
          clas: "users",
        },
        {
          name: "Создать секретный чат",
          clas: "lock",
        },
        {
          name: "Создать канал",
          clas: "bullhorn",
        },
        {
          name: "Контакты",
          clas: "user",
        },
        {
          name: "Папки",
          clas: "folder",
        },
        {
          name: "Люди рядом",
          clas: "map-marker",
        },
        {
          name: "Избранное",
          clas: "bookmark",
        },
        {
          name: "Звонки",
          clas: "phone",
        },
        {
          name: "Настройки",
          clas: "cog",
        },
        {
          name: "Настройки Plus",
          clas: "plus-circle",
        },
        {
          name: "Категории",
          clas: "folder",
        },
        {
          name: "Скачать темы",
          clas: "edit",
        },
        {
          name: "Оформление",
          clas: "paint-brush",
        },
        {
          name: "Группа поддерки",
          clas: "group",
        },
        {
          name: "Счётчики чатов",
          clas: "server",
        },
      ],
    };
  },
  methods: {
    darkthem() {
      this.$emit("darks");
    },
  },
};
</script>

<style >
:root {
  --dark: #212d3b;
  --darkcolor: #c3cdda;
}
.settings.on {
  --dark: #fff;
  --darkcolor: #000;
}
.settings {
  position: absolute;
  width: 100%;
  background: #0000;
  height: 95.6%;
  z-index: 222;
  transition: 0.4s;
  left: -283px;
  display: flex;
  /* -293 */
}
.settings .details {
  position: relative;
  width: 78%;
  left: 0;
  height: 100%;
  background: var(--dark);
  overflow-y: auto;
  transition: 0.2s;
}
.settings .details .infouser {
  position: relative;
  width: 100%;
  height: 130px;
  left: 0;
  top: -1px;
  background: url(../assets/bg.jpg);
  background-size: cover;
  z-index: 6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.2s;
}
/* .settings.on  .details .infouser{
    background: #36abff;
} */
.infouser .img {
  position: relative;
  /* left: 0; */
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding: 10px;
}
.infouser .img.s {
  width: 10px;
  right: 10px;
}
.infouser .img .image {
  position: relative;
  margin-bottom: 10px;
  width: 50px;
  height: 50px;
  margin-left: -37px;
  border-radius: 50%;
  background: url(../assets/users/images.jpg);
  background-size: cover;
}
.infouser .img p {
  font-weight: 500;
  color: #fff;
  font-size: 0.95em;
  text-align: left;
}
.infouser .img p span {
  position: relative;
  font-weight: lighter;
  font-size: 0.8em;
  margin-top: 3px;
}
.infouser .img span {
  position: relative;
  margin: 3px;
  font-size: 1.2em;
  cursor: pointer;
  color: #fff;
}
ul.setting {
  position: relative;
  width: 100%;
  /* border: 1px solid #fff; */
  height: 520px;
  /* overflow-y: auto; */
  transition: 0.2s;
}
::-webkit-scrollbar {
  display: none;
}
/* 74808e */
.setting li {
  position: relative;
  transition: 0.2s;
  width: 100%;
  padding: 10px 10px 10px 10px;
  /* border: 1px solid #fff; */
  margin: 0px;
  color: var(--darkcolor);
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 0.85em;
  font-weight: 700;
  transition: 0.2s;
}
.setting li i {
  margin: 0px 15px 0px 0px;
  width: 15px;
}
hr {
  position: relative;
  width: 100%;
  background: #0001;
  height: 0px;
  border: 1px solid;
  margin: 5px 2px 5px 2px;
}
.seluser b {
  position: relative;
  margin: 0px 5px 0px -2px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: url(../assets/users/images.jpg);
  background-size: cover;
}
.seluser b:after {
  position: absolute;
  background: #6dc2fe;
  content: "✔";
  color: #000;
  display: flex;
  font-size: 0.6em;
  justify-content: center;
  align-items: center;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid #000b;
  transform: translate(13px, 16px);
}
.setting span {
  position: relative;
  color: var(--darkcolor);
  font-size: 0.7em;
  text-align: center;
  left: 20%;
  cursor: pointer;
  transition: 0.2s;
}
.settings li:hover {
  background: #fff2;
}
.settings.on li:hover {
  background: #0002;
}
.settings li:active {
  background: #fff6;
}
.settings.on li:active {
  background: #0004;
}
.settings .back {
  position: relative;
  width: 22%;
  height: 100%;
  background: #0004;
  cursor: pointer;
  transition: 0.2s;
}
</style>