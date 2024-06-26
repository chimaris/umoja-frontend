<template>
    <apexchart type="line" color="green" :options="chartOptions" :series="series"></apexchart>
</template>
<script setup>
import {ref, onBeforeUnmount} from 'vue'

const props = defineProps({
    revenue: {
        type: Array,
        required: true
    }
});
const series = ref([
        {
          name: 'Revenue Growth',
          data: Array(7).fill(0)
        }
      ]);
function updateSeries() {
  series.value = [
  {
      name: 'Revenue Growth',
      data: Array(7).fill(0)
    }
  ]
    props.revenue.forEach(dataPoint => {
            const dayIndex = dataPoint.day_of_week - 1; 
            series.value[0].data[dayIndex] = dataPoint.total_amount / 1000; // Convert amount to thousands
        });

}
watch(() => props.revenue, () => {
    updateSeries()
})
    const chartOptions = ref(
      {
        chart: {
          type: 'line'
        },
        xaxis: {
          categories: ['Sun','Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
          labels: {
            style: {
              fontSize: '16px',
              fontWeight: 'bold',
            }
          }
        },
        stroke: {
            curve: 'smooth',
          colors: ['#2C6E63'] // Define the color for the line
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return '£' + value.toFixed(2) + 'k';
            },
            style: {
              fontSize: '16px',
              fontWeight: 'bold',
            }
          }
        }
      }

    );
</script>