<template>
    <div>
        <div v-for="(item,index) in list" :key="index">
            <div class="item" >
                <span class="item-title-icon"></span>
                <span class="item-title">{{item.title}}</span>
            </div>
            <div v-if="item.children" class="item-children">
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailList',
    props: {
        list: Array
    }
}
</script>

<style lang="stylus" scoped>
.item
    border-bottom : .02rem solid #eee
    .item-title
        line-height : .8rem
        font-size :.32rem
        padding : 0 .2rem
    .item-title-icon
        position : relative
        left : .2rem
        top: .07rem
        display: inline-block
        width: .36rem
        height: .36rem
        background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
        margin-right: .1rem
        background-size: .4rem 3rem
.item-children
    padding-left: .2rem
</style>
