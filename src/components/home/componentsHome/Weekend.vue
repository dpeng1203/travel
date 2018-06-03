<template>
    <div class="reconmend">
        <div class="reconmend-title">周末去哪玩</div>
        <ul>
            <li class="item" v-for="item in recommendList" :key="item.id">
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
    name: 'HomeReconmend',
    data () {
        return {
            recommendList: [{
                id: '001',
                imgUrl: 'https://img1.qunarzz.com/sight/source/1505/4e/3e87ee62e59cdb.jpg_r_640x214_fe6cc902.jpg',
                title: '宋城千古情',
                desc: '大型歌舞《宋城千古情》是一生必看的演出'
            },{
                id: '002',
                imgUrl: 'https://img1.qunarzz.com/sight/source/1505/9f/7d45cc38259e0.jpg_r_640x214_156f4299.jpg',
                title: '杭州野生动物园',
                desc: '野生动物园近距离接触自然亲子情侣游妙趣横生'
            },{
                id: '003',
                imgUrl: 'https://img1.qunarzz.com/sight/source/1505/bc/83feb2e003d0dd.jpg_r_640x214_0b7269b8.jpg',
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
    .img-ct
        overflow : hidden
        height : 0
        padding-bottom : 33.9%
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
