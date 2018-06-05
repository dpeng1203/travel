<template>
    <div class="list">
        <!-- <div class="area">
            <div class="title">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">北京</div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title">热门城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">北京</div>
                </div>
            </div>
        </div> -->
        <div class="area" >
            <mt-index-list>
                <div class="area">
                    <div class="title">当前城市</div>
                    <div class="button-list">
                        <div class="button-wrapper">
                            <div class="button">北京</div>
                        </div>
                    </div>
                </div>
                <div class="area">
                    <div class="title">热门城市</div>
                    <div class="button-list" >
                        <div class="button-wrapper" v-for="hot in hotcities" :key="hot.id">
                            <div class="button">{{hot.name}}</div>
                        </div>
                    </div>
                </div>
                <mt-index-section v-for="(item, key) of cities" :key="key" :index="key" >
                    <div class="item-list">
                        <div class="item" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</div>
                    </div>
                </mt-index-section>
            </mt-index-list>
            <!-- <div class="title">A</div>
            <div class="item-list">
                <div class="item">aaa</div>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'CityList',
    props: {
        cities: Object,
        hotcities: Array
    }
}
</script>

<style lang="stylus" scoped>
    // .list
    //     position :absolute
    //     top : 1.58rem
    //     left : 0
    //     right : 0
    //     bottom: 0
        .title
            line-height : .66rem
            background : #eee
            padding-left : .2rem
            color : #666
        .button-list
            padding : .1rem
            overflow : hidden
            .button-wrapper
                float: left
                width : 33%
                .button
                    margin : .1rem
                    padding : .1rem 0
                    border-radius : .1rem
                    text-align : center
                    border: .02rem solid #ccc
        .item
            line-height : .76rem
            padding-left: .2rem
            border-bottom : .02rem solid #ccc
            background : #fff
</style>
