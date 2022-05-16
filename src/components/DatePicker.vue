<template>
  <div id="date-picker">
    <div>
      <label>year</label>
      <br />
      <select v-model="year">
        <option v-for="y in years" :key="y">
          {{ y }}
        </option>
      </select>
    </div>
    <div>
      <label>month</label>
      <br />
      <select v-model="month">
        <option v-for="m in 12" :key="m" :value="m - 1">
          {{ m }}
        </option>
      </select>
    </div>
    <div>
      <label>day</label>
      <br />
      <select v-model="day">
        <option v-for="d in maxDate" :key="d">
          {{ d }}
        </option>
      </select>
    </div>
  </div>
</template>
<style scoped>
#date-picker {
  display: flex;
}
#date-picker div {
  margin-right: 10px;
}
</style>
<script>
//import moment from "moment";
export default {
  name: "DatePicker",
  props: {
    modelValue: Date,
  },
  data() {
    return {
      years: [],
      year: new Date().getFullYear(),
      month: 0,
      day: 1,
    };
  },
  methods: {
    emitDate() {
      const { year, month, day } = this;
      this.$emit("update:modelValue", new Date(year, month, day).toString());
    },
    isLeapYear(year) {
      if (
        (year / 4 == Math.floor(year / 4) &&
          year / 100 != Math.floor(year / 100)) ||
        (year / 400 == Math.floor(year / 400) &&
          year / 3200 != Math.floor(year / 3200)) ||
        year / 172800 == Math.floor(year / 172800)
      ) {
        return true;
      }
      return false;
    },
  },
  watch: {
    year() {
      this.emitDate();
      console.log("runing");
    },
    month() {
      this.emitDate();
    },
    day() {
      this.emitDate();
    },
  },
  computed: {
    maxDate() {
      const { year, month } = this;
      if ([0, 2, 4, 6, 7, 9, 11].includes(month)) {
        return 31;
      } else if ([3, 5, 8, 10].includes(month)) {
        return 30;
      } else {
        if (this.isLeapYear(year)) {
          return 29;
        } else {
          return 28;
        }
      }
    },
  },
  beforeMount() {
    const currentYear = new Date().getFullYear();
    for (let i = -100; i <= 100; i++) {
      this.years.push(currentYear + i);
    }

    const dateObj = new Date();
    this.month = dateObj.getUTCMonth(); //months from 1-12
    this.day = dateObj.getUTCDate();
    this.year = dateObj.getUTCFullYear();
  },
};
</script>