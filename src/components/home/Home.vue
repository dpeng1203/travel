<template>
    <div>
        <home-header></home-header>
        <home-swipe></home-swipe>
        <home-icon></home-icon>
        <home-reconmend></home-reconmend>
        <home-weekend></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './componentsHome/Header'
import HomeSwipe from './componentsHome/Swipe'
import HomeIcon from './componentsHome/Icon'
import HomeReconmend from './componentsHome/Reconmend'
import HomeWeekend from './componentsHome/Weekend'

export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeSwipe,
        HomeIcon,
        HomeReconmend,
        HomeWeekend
    }
}
</script>

<style>
    
</style>
