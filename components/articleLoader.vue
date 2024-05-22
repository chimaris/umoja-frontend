<template>
    <v-card flat>
				<div class="d-flex align-center">
					<div class="skeleton skeleton-text" style="width: 70%; height: 14px;"></div>
					<div class="skeleton skeleton-icon mx-1" style="width: 6px; height: 6px;"></div>
					<div class="skeleton skeleton-text" style="width: 30%; height: 14px;"></div>
				</div>
				<div class="skeleton skeleton-title my-5" style="height: 40px;"></div>
				<div class="d-flex align-center">
					<div class="skeleton skeleton-text mr-2" style="width: 10%; height: 14px;"></div>
					<div class="skeleton skeleton-text" style="width: 20%; height: 14px;"></div>
					<div class="skeleton skeleton-icon ml-1" style="width: 16px; height: 16px;"></div>
				</div>
				<div class="skeleton skeleton-img my-4" style="height: 354px; border-radius: 15px;"></div>
				<div class="skeleton skeleton-content" style="height: 100px;"></div>
	</v-card>
</template>
<style scoped>
.skeleton {
  background-color: #e0e0e0;
  border-radius: 4px;
  margin-bottom: 10px;
}

.skeleton-text {
  border-radius: 2px;
}

.skeleton-title {
  width: 80%;
}

.skeleton-icon {
  border-radius: 50%;
}

.skeleton-img {
  width: 100%;
}

.skeleton-content {
  width: 100%;
  border-radius: 4px;
}
</style>