<!--suppress ALL -->
<template>
  <lunar-full-calendar :events="events" :config="config" lang="zh"></lunar-full-calendar>
</template>

<script>

import { LunarFullCalendar } from 'vue-lunar-full-calendar'

var demoEvents = [
  {
    title: 'Sunny Out of Office',
    start: '2019-04-25',
    end: '2019-07-27'
  },
  {
    title: 'Sunny Out of Office',
    start: '2019-04-25',
    end: '2019-07-27'
  },
  {
    title: 'event1',
    start: '2019-04-01',
    cssClass: 'family',
    YOUR_DATA: { content: 'sss' }
  },
  {
    title: '每天背单词',
    start: '2019-04-02',
    end: '2019-04-05',
    cssClass: ['family', 'career'],
    YOUR_DATA: {}
  },
  {
    title: '每天背单词',
    start: '2019-04-08',
    end: '2019-04-18',
    cssClass: 'family',
    YOUR_DATA: {}
  }
]
export default {
  name: 'CalendarView',
  data () {
    return {
      events: demoEvents,
      config: {
        lunarCalendar: true // 控制是否显示中国农历、显示的为true，隐藏为flase，默认为true(Control whether the Chinese calendar shows true, unrealistic flase, default true.)
      }
    }
  },
  components: {
    LunarFullCalendar
  }
}
</script>

<style >

</style>
