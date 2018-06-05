<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="img" :src="bannerImg" alt="">
            <div class="info">
                <div class="title">{{sightName}}</div>
                <div class="number">
                    <svg class="icon tupian" aria-hidden="true">
                        <use xlink:href="#icon-tupian"></use>
                    </svg> {{gallaryImgs.length}}
                </div>
            </div>
        </div>
        <common-gallery :imgs = "gallaryImgs" v-show="showGallery" @close="handleBannerClose"></common-gallery>
    </div>    
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
    name: 'DetailBanner',
    props: {
        sightName: String,
        bannerImg: String,
        gallaryImgs: Array
    },
    data () {
        return {
            showGallery: false,
        }
    },
    components: {
        CommonGallery
    },
    methods: {
        handleBannerClick () {
            this.showGallery = true
        },
        handleBannerClose() {
            this.showGallery = false
        }
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        position: relative
        overflow: hidden
        height : 0
        padding-bottom : 55%
        .img
            width : 100%
        .info
            display : flex
            position : absolute
            left : 0
            right : 0
            bottom : 0
            line-height : .6rem
            color : #fff
            background-image : linear-gradient(top,rgba(0,0,0, 0), rgba(0,0,0, .8))
            .title
                flex : 1
                font-size : .32rem
                padding :0 .2rem
            .number
                padding : 0 .4rem
                margin-top: .14rem 
                line-height : .32rem
                height : .32rem
                font-size : .24rem
                border-radius : .2rem
                background : rgba(0,0,0, .8)
</style>
