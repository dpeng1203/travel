<template>
    <div class="reconmend">
        <div class="reconmend-title">热销推荐</div>
        <ul>
            <li class="item" v-for="item in recommendList" :key="item.id">
                <div class="img-ct">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-btn">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeReconmend',
    data () {
        return {
            recommendList: [{
                id: '001',
                imgUrl: 'https://img1.qunarzz.com/sight/p0/1412/be/c788f0f3767d2ea037b9b66d2010bfa4.water.jpg_150x150_a980923f.jpg',
                title: '宋城千古情',
                desc: '大型歌舞《宋城千古情》是一生必看的演出'
            },{
                id: '002',
                imgUrl: 'https://img1.qunarzz.com/sight/p0/1603/ae/aecef86d7655873f90.water.jpg_150x150_da975344.jpg',
                title: '杭州野生动物园',
                desc: '野生动物园近距离接触自然亲子情侣游妙趣横生'
            },{
                id: '003',
                imgUrl: 'https://img1.qunarzz.com/sight/p0/201405/27/8211cadd5d9fefeaa044c5b7eefc695d.jpg_150x150_184fbe07.jpg',
                title: '千岛湖',
                desc: '千岛湖水在中国大江大湖中位居优质水之首'
            }]
        }
    }
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
