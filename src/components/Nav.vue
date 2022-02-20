<template>
  <div :class="`nav ${dr ? '' : 'on'}`">
    <ul class="l1">
      <li>
        <span @click="$emit('setwind', true)"
          ><i class="fa fa-reorder"></i
        ></span>
        <h5>{{ text }}</h5>
      </li>
      <li>
        <span><i class="fa fa-search"></i></span>
        <span><i class="fa fa-folder-o"></i></span>
      </li>
    </ul>
    <ul class="l2">
      <li
        @click="changes(11, 'Plus Messenger', 1)"
        :class="id == 1 ? 'selc' : ''"
      >
        <i class="fa fa-th-large"></i>
      </li>
      <li
        @click="changes(44, 'Личые чаты', 2)"
        :class="id == 2 ? 'selc' : ''"
        data-text="2"
      >
        <i class="fa fa-user"></i>
      </li>
      <li @click="changes(78, 'Группы', 3)" :class="id == 3 ? 'selc' : ''">
        <i class="fa fa-users"></i>
      </li>
      <li @click="changes(115, 'Супегруппы', 4)" :class="id == 4 ? 'selc' : ''">
        <i class="fa fa-group"></i>
      </li>
      <li @click="changes(150, 'Каналы', 5)" :class="id == 5 ? 'selc' : ''">
        <i class="fa fa-bullhorn"></i>
      </li>
      <li @click="changes(188, 'Боты', 6)" :class="id == 6 ? 'selc' : ''">
        <i class="fa fa-qq"></i>
      </li>
      <li @click="changes(221, 'Управление', 7)" :class="id == 7 ? 'selc' : ''">
        <i class="fa fa-user-md"></i>
      </li>
      <li @click="changes(254, 'Избранные', 8)" :class="id == 8 ? 'selc' : ''">
        <i class="fa fa-star"></i>
      </li>
      <li :style="{ left: `${l}px` }" class="navg"></li>
      <!-- -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: ["dr"],
  data() {
    return {
      l: 11,
      text: "Plus Messenger",
      id: 1,
    };
  },
  methods: {
    changes(lf, txt, id) {
      this.l = lf;
      this.text = txt;
      this.id = id;
      this.$emit("moveUsers", this.id);
    },
  },
}; 
</script>

<style>
:root {
  --dark: #212d3b;
  --darkcolor: #fff;
}
.nav.on {
  --dark: #fff;
  --darkcolor: #000;
  transition: 0.2s;
}
.nav {
  position: absolute;
  width: 100%;
  padding: 5px 2px 6px 2px;
  height: 80px;
  transition: 0.2s;
  top: 20px;
  background: var(--dark);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  z-index: 111;
  border-bottom: 1px solid #0005;
}
.nav .l1,
.nav .l2 {
  position: relative;
  width: 100%;
  /* border: 1px solid #fff; */
  padding: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav .l1 li {
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2px;
  list-style: none;
  color: var(--darkcolor);
  transition: 0.2s;
}
.nav .l1 li h5 {
  cursor: default;
  font-size: 0.97em;
  font-weight: 600;
}
.nav .l1 li span {
  width: 25px;
  height: 25px;
  cursor: pointer;
  border-radius: 50%;
  margin: 0px 4px 0px;
  /* border: 1px solid #fff; */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.4s;
}
.nav .l1 li span:active {
  background: #fffa;
}
.nav .l2 {
  padding: 3px 14px 3px 14px;
}
.nav .l2 li {
  color: #74808e;
  list-style: none;
  cursor: pointer;
  transition: 0.4s;
}
.nav .l2 li.newmess {
  color: #6dc2fe;
}
.nav .l2 li.newmess::after {
  content: attr(data-text);
  color: #212d3b;
  background: #6dc2fe;
  position: absolute;
  font-size: 0.7em;
  text-align: center;
  width: 15px;
  height: 12px;
  border-radius: 10px;
}
.nav .l2 .navg {
  position: absolute;
  bottom: -2px;
  width: 20px;
  height: 5px;
  background: #6dc2fe;
  border-radius: 2px 2px 0px 0px;
  transition: 0.3s;
}
.nav .l2 li.selc {
  color: #6dc2fe;
}
</style>