<template>
  <div class="wrapper">
    <ul id="clock" >
      <li class="numbers"><span>1</span></li>
      <li class="numbers"><span>2</span></li>
      <li class="numbers"><span>3</span></li>
      <li class="numbers"><span>4</span></li>
      <li class="numbers"><span>5</span></li>
      <li class="numbers"><span>6</span></li>
      <li class="numbers"><span>7</span></li>
      <li class="numbers"><span>8</span></li>
      <li class="numbers"><span>9</span></li>
      <li class="numbers"><span>10</span></li>
      <li class="numbers"><span>11</span></li>
      <li class="numbers"><span>12</span></li>
      <li
        id="hour"
        draggable="true"
       :style="{ transform: 'rotate('+ increaseHours+'deg)'}"
        @drag="increaseHours += 3"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Clock",
  props: {
    msg: String,
  },
  data() {
    return {
      increaseHours: 180,
    };
  },
  watch: {
    increaseHours() {
      return console.log(this.increaseHours);
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.wrapper {
  height: 100vh;
  width: 100%;
  background-color: antiquewhite;
  font-family: "josefin sans", "sans-serif";
  float: left;
}
#clock {
  width: 280px;
  height: 280px;
  background-color: aquamarine;
  border: 18px solid red;
  border-radius: 50%;
  margin: 200px auto;
  position: relative;
  box-shadow: inset 0 5px 25px #00000080, 0 5px 25px #00000080,
    0 5px 30px #00000080, 0 5px 35px #00000080, 0 5px 35px #00000080,
    0 5px 35px #00000080;
}
#clock:before {
  content: "";
  position: absolute;
  width: 280px;
  height: 280px;
  left: -18px;
  top: -10px;
  border: 18px solid white;
  border-radius: 50%;
  z-index: -2;
}
#clock:after {
  content: "";
  width: 18px;
  height: 18px;
  background: white;
  position: absolute;
  border-radius: 50%;
  left: calc(50% - 9px);
  top: calc(50% - 9px);
  box-shadow: 0 2px 4px #00000080;
}
#clock li {
  list-style: none;
  position: absolute;
}
.numbers {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
}
.numbers span {
  display: block;
  color: white;
  font-size: 38px;
  text-shadow: 0 5px 18px #00000026, 0 2px 3px #00000033;
}
.numbers:nth-child(1) {
  transform: rotate(30deg);
}
.numbers:nth-child(1) span {
  transform: rotate(-30deg);
}
.numbers:nth-child(2) {
  transform: rotate(60deg);
}
.numbers:nth-child(2) span {
  transform: rotate(-60deg);
}
.numbers:nth-child(3) {
  transform: rotate(90deg);
}
.numbers:nth-child(3) span {
  transform: rotate(-90deg);
}
.numbers:nth-child(4) {
  transform: rotate(120deg);
}
.numbers:nth-child(4) span {
  transform: rotate(-120deg);
}
.numbers:nth-child(5) {
  transform: rotate(150deg);
}
.numbers:nth-child(5) span {
  transform: rotate(-150deg);
}
.numbers:nth-child(6) {
  transform: rotate(180deg);
}
.numbers:nth-child(6) span {
  transform: rotate(-180deg);
}
.numbers:nth-child(7) {
  transform: rotate(210deg);
}
.numbers:nth-child(7) span {
  transform: rotate(-210deg);
}
.numbers:nth-child(8) {
  transform: rotate(240deg);
}
.numbers:nth-child(8) span {
  transform: rotate(-240deg);
}
.numbers:nth-child(9) {
  transform: rotate(270deg);
}
.numbers:nth-child(9) span {
  transform: rotate(-270deg);
}
.numbers:nth-child(10) {
  transform: rotate(300deg);
}
.numbers:nth-child(10) span {
  transform: rotate(-300deg);
}
.numbers:nth-child(11) {
  transform: rotate(330deg);
}
.numbers:nth-child(11) span {
  transform: rotate(-330deg);
}
.numbers:nth-child(12) {
  transform: rotate(360deg);
}
.numbers:nth-child(12) span {
  transform: rotate(-360deg);
}
#hour {
  width: 100%;
  height: 100%;
}
#hour:after {
  content: "";
  width: 12px;
  height: 65px;
  border-radius: 6px 6px 3px 3px;
  background-color: red;
  position: absolute;
  left: calc(50% - 4px);
  top: 50%;
  box-shadow: 1px 0 4px #00000026;
}
</style>
