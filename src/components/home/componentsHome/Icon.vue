<template>
    <div class="icons">
        <div class="icon" v-for="item in list" :key = "item.id" >
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
    props: {
        list: Array
    },
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



