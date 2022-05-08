<template>
  <div>
    <h1>yo</h1>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <b-dropdown
      id="dropdown-dropup"
      dropup
      :text="getTime[0] + ' ' + getTime[1]"
      variant="primary"
      style="margin-top: 10%"
    >
      <v-time-picker
        v-model="time"
        ampm-in-title
        no-title
        format="ampm"
        color="#033"
      ></v-time-picker>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      time: "00:00",
      to: "0",
      from: "0",
    };
  },
  computed: {
    getTime() {
      return this.time.split(":");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.smaller {
  background-color: red;
}
#dropdown-dropup {
  transform: scale(0.7) translate3d(5px, 38px, 0px);
}
</style>
