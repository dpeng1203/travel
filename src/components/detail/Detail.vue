<template>
    <div>
        <detail-banner></detail-banner> 
        <detail-header></detail-header>   
    </div>
</template>

<script>
import DetailBanner from './ComponentsDetail/Banner'
import DetailHeader from './ComponentsDetail/Header'

export default {
    name: 'Detail',
    components: {
        DetailBanner,
        DetailHeader
    }
}
</script>

<style>

</style>
