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
        <option v-for="m in 12" :key="m" :value="m">
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
  <h1>{{ year }}</h1>
</template>
<style scoped>
#date-picker {
  display: flex;
}
#date-picker div {
  margin-right: 10px;
}
</style>
<script setup>
import { reactive, toRefs, watch, onMounted } from "vue";
const state = reactive({
  years: [],
  year: new Date().getFullYear(),
  month: new Date().getUTCMonth() + 1,
  day: new Date().getUTCDate(),
  maxDate: 31,
});
let { years, year, month, day, maxDate } = toRefs(state);
const isLeapYear = (year) => {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
};
const getMaxDate = () => {
  if ([1, 3, 5, 7, 8, 10, 12].includes(month.value)) {
    maxDate.value = 31;
  } else if ([4, 6, 9, 11].includes(month.value)) {
    maxDate.value = 30;
  } else {
    if (isLeapYear(year.value)) {
      maxDate.value = 29;
    } else {
      maxDate.value = 28;
    }
  }
};
watch([year, month, day], getMaxDate);
onMounted(() => {
  const currentYear = new Date().getFullYear();
  for (let i = -100; i <= 100; i++) {
    years.value.push(currentYear + i);
  }
  getMaxDate();
});
</script>