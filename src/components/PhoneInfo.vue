<template>
  <div :class="`phoneinfo ${dr ? '' : 'on'}`">
    <div class="up">
      <span>{{
        `${hour >= 10 ? hour : "0" + hour}:${min >= 10 ? min : "0" + min}`
      }}</span>
      <div class="icons">
        <i class="fa fa-wifi"></i>
        <i class="fa fa-signal"></i>
        <i class="fa fa-signal"></i>
        <span>{{ `${batary}%` }}</span>
        <i class="fa fa-battery"></i>
      </div>
    </div>
    <div class="down">
      <span><i class="fa fa-navicon"></i></span>
      <span><i class="fa fa-square-o"></i></span>
      <span><i class="fa fa-angle-left"></i></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PhoneInfo",
  props: ["dr"],
  data() {
    return {
      min: "",
      hour: "",
      batary: "",
    };
  },
  mounted() {
    setInterval(() => {
      this.min = new Date().getMinutes();
      this.hour = new Date().getHours();
      navigator.getBattery().then((battarey) => {
        this.batary = Math.floor(battarey.level * 100);
      });
    }, 1000);
  },
};
</script>

<style>
:root {
  --dark: #1a242e;
  --darkcolor: #aaa;
}
.phoneinfo.on {
  --dark: #fff;
  --darkcolor: #000;
  transition: 0.2s;
}
.phoneinfo {
  position: absolute;
  z-index: 9;
  /* border: 1px solid #fff; */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}
.up,
.down {
  position: absolute;
  content: "";
  background: var(--dark);
  border: 1px solid #1a242e22;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 5555588888888888888888888888888888888;
}
.down {
  bottom: 0;
  height: 25px;
  width: 100%;
}
.up {
  top: 0px;
  height: 20px;
  right: 0;
  width: 100%;
  justify-content: space-between;
  padding: 0px 10px 0px 40px;
}
.up span {
  color: var(--darkcolor);
  font-size: 0.8em;
  cursor: default;
}
.up .icons .fa {
  color: var(--darkcolor);
  margin: 0px 2px 0px 2px;
  font-size: 0.7em;
}
.up .icons span {
  font-size: 0.7em;
  margin: 0px 1px 0px 1px;
}
.down span {
  color: var(--darkcolor);
  width: 60px;
  padding: 2px;
  text-align: center;
  font-size: 1em;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s;
}
.down span:active {
  background: #fff5;
}
.phoneinfo.on .down span:active {
  background: #0005;
  color: #fff;
}
</style>