<template>
    <div class="header">
        <router-link to='/'>
            <div class="back">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-fanhui"></use>
                </svg>
            </div>
        </router-link>
        
        城市选择   
        
    </div>
</template>

<script>
export default {
    name: 'CityHeader'

}
</script>

<style lang="stylus" scoped>
    .header
        height: .86 rem
        line-height: .86 rem
        font-size : .32 rem
        color: #fff
        background: #00bcd4
        text-align : center
        position : relative
        .back
            position :absolute
            top: 0
            left : 0
            color : #fff
            padding-left : .3rem
</style>


