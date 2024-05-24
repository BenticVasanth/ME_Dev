<template>
<div>
    <div class="text-white bg-dark text-center p-4">
        <h1 class="mb-0">Dashboard</h1>
    </div>
    <router-view class="content" />
    <div class="text-white bg-dark text-center p-2">© copyright w3schools.com</div>
</div>
</template>

<script>
export default {
    name: "WelcomeDashboard",
    components: {},
};
</script>

<style>
.content {
    min-height: calc(100vh - 136px);
}

.w-15 {
    width: 15% !important;
}
</style>
