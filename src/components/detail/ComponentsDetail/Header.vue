<template>
    <div>
        <router-link tag="div" class="header-icon" v-show="isShow" to="/">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fanhui"></use>
            </svg>
        </router-link>
        <div class="header" v-show="!isShow" :style="opacityStyle">
            <router-link to='/'>
                <div class="back">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-fanhui"></use>
                    </svg>
                </div>
            </router-link>
            
            城市选择   
            
        </div>
        <div class="content"></div>
    </div>
</template>

<script>
export default {
    name: 'DetailHeader',
    data () {
        return {
            isShow: true,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    methods: {
        handlescroll () {
            const top = document.documentElement.scrollTop
            console.log(top)
            if ( top > 60 ) {
                let opacity = top / 140
                opacity = opacity > 1 ? 1 : opacity
                this.opacityStyle = { opacity }
                this.isShow = false
            } else {
                this.isShow = true
            }
        }
    },
    activated () {
        window.addEventListener('scroll',this.handlescroll)
    },
    deactivated () {
        window.removeEventListener('scroll',this.handlescroll)
    }
}
</script>

<style lang="stylus" scoped>
    .header-icon
        position : fixed
        top: .2rem
        left : .2rem
        width : .7rem
        height .7rem
        border : .02rem solid #ccc
        border-radius : 50%
        color : #fff
        background : #ccc
        .icon
            width : .5rem
            height : .5rem
            margin-top : .1rem
            margin-left : .05rem
    .header
        height: .86 rem
        line-height: .86 rem
        font-size : .32 rem
        color: #fff
        background: #00bcd4
        text-align : center
        position : fixed
        top : 0
        left : 0
        right : 0
        .back
            position :absolute
            top: 0
            left : 0
            color : #fff
            padding-left : .3rem
    .content
        height : 50rem
            
</style>
