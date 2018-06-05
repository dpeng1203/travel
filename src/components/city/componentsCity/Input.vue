<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="请输入城市或拼音"/> 
        </div>
        <div class="search-content" v-show="keyword">
            <ul>
                <li class="search-item" v-for="(item,index) in city" :key="index">{{item.name}}</li>
                <li class="search-item" v-show="hasNoCity">没有匹配到数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CityInput',
    props: {
        cities: Object,
        
    },
    data () {
        return {
            keyword: '',
            city: [],
            timer: null
        }
    },
    computed: {
        hasNoCity () {
            return !this.city.length
        }
    },
    watch:  {
        keyword () {
            if (!this.keyword) {
                this.city = []
                return
            }
            if (this.timer) {
            clearTimeout(this.timer)
            }
            this.timer = setTimeout( () => {
                const result = []
                for(let i in this.cities) {
                    this.cities[i].forEach(value => {
                        if(value.spell.indexOf(this.keyword) > -1 || 
                        value.name.indexOf(this.keyword) > -1) {
                            result.push(value)
                        }
                    });
                }
                this.city = result
            },100)
            
        }
        
    }
}
</script>

<style lang="stylus" scoped>
    .search
        box-sizing : border-box
        height: .72rem
        padding: .05rem .1rem
        background : #00bcd4
        .search-input
            width : 100%
            height : .62rem
            line-height : .62rem
            text-align : center
            border-radius : .1rem
    .search-content
        position : fixed
        top: 1.58rem
        left : 0
        right: 0
        bottom : 0
        background : #eee
        z-index : 1
        overflow: auto 
        .search-item
            line-height : .62rem
            padding-left : .2rem
            color : #666
            background: #fff
            border-bottom : .02rem solid #ccc
</style>
