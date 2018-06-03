<template>
    <div class="reconmend">
        <div class="reconmend-title">周末去哪玩</div>
        <ul>
            <li class="item" v-for="item in weedendlist" :key="item.id">
                <div class="img-ct">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    props: {
        weedendlist: Array
    }
}
</script>

<style lang="stylus" scoped>
    .reconmend-title
        margin-top : .1 rem 
        font-size : .32 rem
        line-height : .8 rem 
        background : #eee
        text-indent : .3 rem
    .img-ct
        overflow : hidden
        height : 0
        padding-bottom : 37.09%
    .item-img
        width : 100% 
    .item-info
        padding : .1 rem
        min-width : 0
        .item-title
            line-height : .54 rem
            font-size : .32 rem
            overflow : hidden
            white-space : nowrap
            text-overflow : ellipsis
        .item-desc
            line-height : .4 rem 
            color : #ccc
            overflow : hidden
            white-space : nowrap
            text-overflow : ellipsis
</style>
