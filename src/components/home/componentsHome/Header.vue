<template>
    <div class="header">
       <div class="back">
           <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fanhui"></use>
            </svg>
       </div>
       <input class="input" type="text" placeholder="请输入城市/景点游玩主题">
       <router-link to='/city'>
            <div class="city">
                <span>{{this.$store.state.city}}</span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-xiala"></use>
                    </svg>
            </div>
       </router-link>
    </div> 
</template>

<script>
export default {
    name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
    .header
        display: flex
        height: .86 rem
        line-height: .86 rem
        background: #00bcd4
        .back
            width: .64 rem
            float: left
            text-align: center
            color: #fff
        .input
            margin-top: .15 rem
            margin-left: .2 rem
            margin-bottom: .15rem 
            padding-left: .2 rem
            flex: 1
            border-radius .1 rem
        .city
            min-width: 1.04 rem
            padding: 0 .1rem
            float: right 
            text-align: center
            color: #fff
</style>
