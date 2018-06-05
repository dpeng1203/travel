<template>
    <div class="container" @click="handleGalleryClose">
        <div class="wrapper">
            <mt-swipe :auto="0">
                <mt-swipe-item v-for="(item,index) in imgs" :key="index">
                    <img class="swiper-img" :src="item" />
                </mt-swipe-item>
            </mt-swipe>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonGallery',
    props: {
        imgs: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data () {
        return {
            swiperOptions: {
                observeParents: true,
                observe: true
            }
        }
    },
    methods: {
        handleGalleryClose () {
            this.$emit('close')
        }
    }
}
</script>

<style lang="stylus" scoped>
    .container
        display: flex
        flex-direction: column
        justify-content: center
        position: fixed
        top: 0
        left : 0
        right : 0
        bottom : 0
        background : #000
        z-index : 2
        .wrapper
            //width : 100%
            height : 100vw
            .swiper-img
                height: 100%
</style>
