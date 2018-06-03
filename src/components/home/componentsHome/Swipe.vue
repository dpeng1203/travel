<template>
    <div class="swiper">
        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <img class="swiper-img" src="https://img1.qunarzz.com/piao/fusion/1805/e5/59fad13a64807d02.jpg_750x200_713ae984.jpg" />
            </mt-swipe-item>
            <mt-swipe-item>
                <img class="swiper-img" src="https://img1.qunarzz.com/piao/fusion/1712/51/36632b2cb850e902.jpg_750x200_fa4120db.jpg" />
            </mt-swipe-item>
            <mt-swipe-item>
                <img class="swiper-img" src="https://img1.qunarzz.com/piao/fusion/1805/e6/33ce6413c5949f02.jpg_750x200_004a9ea4.jpg" />
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    name: 'HomeSwipe'
}
</script>

<style lang="stylus" scoped>
    .swiper
        height: 2 rem
        .swiper-img
            height : 100%;
</style>
