<template>
  <div class="password" :style="{ display: `${passB ? 'none' : 'flex'}` }">
    <ul class="passb">
      <li v-for="(p, i) in pass" :key="i"></li>
    </ul>
    <ul class="pass">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <ul class="table">
      <li
        v-for="j in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
        :key="j"
        @click="editPass(j)"
      >
        {{ j }}
      </li>
      <li @click="delet()"><i class="fa fa-angle-left"></i></li>
      <li @click="editPass('0')">0</li>
      <li @click="testPass"><i class="fa fa-angle-right"></i></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Pass",
  props: {
    passB: Boolean,
  },
  data() {
    return {
      pass: [],
      truePass: ["2", "0", "0", "2"],
      passbol: true,
    };
  },
  methods: {
    editPass(e) {
      if (this.pass.length < 4) {
        this.pass.push(e);
      }
    },
    delet() {
      if (this.pass.length > 0) {
        this.pass.pop();
      }
    },
    testPass() {
      if (
        this.pass[0] == this.truePass[0] &&
        this.pass[1] == this.truePass[1] &&
        this.pass[2] == this.truePass[2] &&
        this.pass[3] == this.truePass[3]
      ) {
        this.$emit("onpass", true);
        this.pass = [];
      } else {
        alert("Password Error");
        this.pass = [];
      }
    },
  },
};
</script>
 
<style>
.password {
  position: absolute;
  z-index: 55554;
  width: 100%;
  background: #000b url(../assets/bg.jpg);
  background-size: cover;
  background-blend-mode: multiply;
  height: 533px;
  /* margin: 1px; */
  /* border: 1px solid #fff; */
  top: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding: 50px 5px 20px 5px;
}
ul.pass,
ul.passb {
  position: relative;
  width: 180px;
  display: flex;
  height: 50px;
  /* justify-content: flex-start; */
  align-items: center;
  /* border: 1px solid #fff; */
  padding: 5px 0px 5px 2px;
}
ul.passb {
  position: absolute;
  top: 74px;
}
ul.passb li,
ul.pass li {
  position: relative;
  list-style: none;
  width: 20px;
  height: 20px;
  margin: 12px;
  border: 3px solid #60686e;
  border-radius: 50%;
  /* background: #61a8e3; */
}
ul.passb li {
  background: #fff;
  animation: lis 0.3s linear forwards;
}
ul.table {
  position: relative;
  width: 260px;
  height: 340px;
  /* border: 1px solid #fff; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.table li {
  position: relative;
  width: 65px;
  height: 65px;
  background: #fff0;
  border-radius: 50%;
  list-style: none;
  margin: 2px 6px 2px 6px;
  cursor: pointer;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7em;
  transition: 0.3s;
}
.table li:active {
  background: #fff7;
}
@keyframes lis {
  0% {
    transform: scale(0.2);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>