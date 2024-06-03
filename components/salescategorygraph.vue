<template>
    <apexchart type="line" color="green" :options="chartOptions2" :series="series2"></apexchart>
</template>
<script setup>
import {ref, onBeforeUnmount} from 'vue'

const series2 =ref(updateSeries())
const props = defineProps({
    soldCategories: {
        type: Array,
        required: true
    }
})

watch(() => props.soldCategories, () => {
        series2.value = updateSeries();
});

function updateSeries(){
    const formatData = props.soldCategories.map((category) => {
        const monthlyAmount = Array(12).fill(0);
        category.monthly_data.forEach(monthData => {
            monthlyAmount[monthData.month - 1] = (monthData.total_amount)/1000;
        });

        return {
            name: category.category_name,
            data: monthlyAmount
        }

    });
    return formatData
}
const chartOptions2 = ref(
    {
				chart: {
				height: '100%',
				type: 'line'
				},
				colors:['#F38218', '#914E0E', '#FADACC'],
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
				width: 3,
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