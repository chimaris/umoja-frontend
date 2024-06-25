<template>
    <apexchart height="450px" :key="$route.fullPath" type="line"  color="green" :options="chartOptions3" :series="series3"></apexchart>
</template>
<script setup>
import {ref} from 'vue'
const props = defineProps({
    saleRevenue: {
        type: Array,
        required: true
    }
})
const series3 = ref([
       { name: 'Revenue Growth',
        data: Array(12).fill(0),}
])  ;

watch(() => props.saleRevenue, () => {
    updateSeries()
})



function updateSeries() {
	series3.value = [
		{ name: 'Revenue Growth',
        data: Array(12).fill(0),}
	]
    props.saleRevenue.forEach(dataPoint => {
            const monthIndex = dataPoint.month - 1; // Convert month to zero-based index
            series3.value[0].data[monthIndex] = dataPoint.total_amount / 1000; // Convert amount to thousands
        });

}
      
const chartOptions3 =ref(
    {
				chart: {
				type: 'line'
				},
				xaxis: {
				categories: ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
)          
</script>