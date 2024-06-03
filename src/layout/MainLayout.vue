<template>
    <the-navbar></the-navbar>
    <div class="container with-nav">
        <app-message/>
        <router-view/>
    </div>
</template>
<script>
import AppMessage from '@/components/ui/AppMessage.vue';
import TheNavbar from '../components/TheNavbar.vue'
    export default {
        components: {TheNavbar, AppMessage}
    }
</script>
<style>
</style>