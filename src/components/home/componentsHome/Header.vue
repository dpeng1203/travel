<template>
    <div class="header">
       <div class="back">
           <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fanhui"></use>
            </svg>
       </div>
       <input class="input" type="text" placeholder="请输入城市/景点游玩主题">
       <div class="city">
           <span>城市</span>
           <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiala"></use>
            </svg>
       </div>
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
        height: .64 rem
        line-height: .64 rem
        background: #00bcd4
        .back
            width: .64 rem
            float: left
            text-align: center
        .input
            margin-top: .06 rem
            margin-left: .2 rem
            margin-bottom: .06 rem 
            padding-left: .2 rem
            flex: 1
            border-radius .1 rem
        .city
            width: 1.24 rem
            float: right 
            text-align: center

</style>
