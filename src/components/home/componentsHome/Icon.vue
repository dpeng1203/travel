<template>
    <div class="icons">
        <div class="icon" v-for="item in iconList" :key = "item.id" >
            <div class="icon-img">
                <img class="img" :src="item.imgUrl" alt="">
            </div>
            <p class="p">{{item.desc}}</p>
        </div>
    </div>            
</template>

<script>
export default {
    name: 'HomeIcon',
    data () {
        return{
            iconList: [{
                id:  '01',
                imgUrl: 'https://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc: '景点门票'
            }, {
                id:  '02',
                imgUrl: 'https://img1.qunarzz.com/piao/fusion/1804/ed/cf572be30fc32f02.png',
                desc: 'Q+精选'
            }, {
                id:  '03',
                imgUrl: 'https://img1.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
                desc: '西湖'
            }, {
                id:  '04',
                imgUrl: 'https://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
                desc: '千岛湖'
            }, {
                id:  '05',
                imgUrl: 'https://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png',
                desc: '西溪湿地'
            }, {
                id:  '06',
                imgUrl: 'https://img1.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
                desc: '印象西湖'
            }, {
                id:  '07',
                imgUrl: 'https://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
                desc: '宋城千古情'
            }, {
                id:  '08',
                imgUrl: 'https://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
                desc: '漂流'
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
    .icons
        overflow : hidden
        height: 0
        padding-bottom : 50%
        margin-top : .1 rem
        .icon
            position : relative
            float : left 
            width: 25%
            height : 0
            padding-bottom : 25%
            text-align : center
            .icon-img
                position : absolute
                top : 0
                left : 0
                right : 0
                bottom : .44rem
                padding : .1 rem

                .img
                    height : 100% 
            .p
                position : absolute
                left : 0
                right : 0
                bottom : 0
                height : .44 rem
                line-height : .44 rem
                color : #333
                 
</style>



