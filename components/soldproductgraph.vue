<template>
    <apexchart type="bar" color="green" :options="chartOptions" :series="series"></apexchart>
</template>
<script setup>
import {ref} from 'vue'
const props = defineProps({
    soldProducts: {
        type: Array,
        required: true
    }
})
const series = ref(updateSeries())


const chartOptions =ref(
    {
				chart: {
				height: '100%',
				type: 'bar'
				},
				colors:['#CBDED6', '#00966D', '#005A41'],
				xaxis: {
				categories: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
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
						return '£' + value + 'k';
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
watch(() => props.soldProducts, () => {
        series.value = updateSeries();
});
onBeforeUnmount(() => {
	series.value = []
})


            
</script>