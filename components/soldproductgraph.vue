<template>
    <apexchart :key="$route.fullPath"  type="bar" color="green" :options="chartOptions" :series="series"></apexchart>
</template>
<script setup>
import {ref} from 'vue'
const props = defineProps({
    soldProducts: {
        type: Array,
        required: true
    }
})
const series = ref([
		{ name: 'Revenue Growth',
        data: Array(7).fill(0),}
])


const chartOptions =ref(
    {
				chart: {
				height: 400,
				type: 'bar'
				},
				colors:['#CBDED6', '#00966D', '#005A41'],
				xaxis: {
					categories: ['Sun','Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
				labels: {
					style: {
					fontSize: '16px',
					fontWeight: 'bold',
					}
				}
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
					},
                    dataLabels: {
                    enabled: false // Disable data labels
                }
			}
) 
function updateSeries(){
if (!props.soldProducts || props.soldProducts.length === 0) {
    return [];
  }
    const formattedData = props.soldProducts.map((product) => {
        const dailyAmounts = Array(7).fill(0);
        product.daily_data.forEach(dayData => {
                dailyAmounts[dayData.day_of_week - 1] = (dayData.total_amount)/1000;
            });

            return {
                name: product.product_name,
                data: dailyAmounts,
            };
        });
        return formattedData
}
watch(() => props.soldProducts, (newval) => {
	if(newval){
		series.value = updateSeries();
	}
        
});



            
</script>