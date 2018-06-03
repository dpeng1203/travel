<template>
    <div class="swiper">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item of list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" />
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    name: 'HomeSwipe',
    props: {
        list: Array
    },
    data () {
        return{
            
        }
    }
}
</script>

<style lang="stylus" scoped>
    .swiper
        height: 31.25vw
        .swiper-img
            width : 100%;
</style>
