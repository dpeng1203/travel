<template>
    <div class="reconmend">
        <div class="reconmend-title">热销推荐</div>
        <ul>
            <router-link tag="li" :to= "'/detail/' + item.id" 
            class="item" v-for="item in list" :key="item.id">
                <div class="img-ct">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-btn">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeReconmend',
    props: {
        list: Array
    },
}
</script>

<style lang="stylus" scoped>
    .reconmend-title
        margin-top : .2 rem 
        font-size : .32 rem
        line-height : .8 rem 
        background : #eee
        text-indent : .3 rem
    .item
        display : flex
        height : 1.9 rem 
        .item-img
            width : 1.7 rem 
            height : 1.7 rem
            padding :.1 rem
        .item-info
            flex : 1
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
            .item-btn
                margin-top : .16 rem
                line-height : .44rem
                background : #ff9300
                padding : 0 .2rem
                border-radius : .06 rem
                color : #fff
</style>
