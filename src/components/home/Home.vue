<template>
    <div>
        <home-header></home-header>
        <home-swipe></home-swipe>
        <home-icon></home-icon>
    </div>
</template>

<script>
import HomeHeader from './componentsHome/Header'
import HomeSwipe from './componentsHome/Swipe'
import HomeIcon from './componentsHome/Icon'

export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeSwipe,
        HomeIcon
    }
}
</script>

<style>
    
</style>
