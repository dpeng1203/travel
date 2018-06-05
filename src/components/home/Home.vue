<template>
    <div>
        <home-header></home-header>
        <home-swipe :list= "swiperlist"></home-swipe>
        <home-icon :list = "iconList" ></home-icon>
        <home-reconmend :list = "recommendList"></home-reconmend>
        <home-weekend :weedendlist = "weekendlist"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './componentsHome/Header'
import HomeSwipe from './componentsHome/Swipe'
import HomeIcon from './componentsHome/Icon'
import HomeReconmend from './componentsHome/Reconmend'
import HomeWeekend from './componentsHome/Weekend'
import axios from 'axios'

export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeSwipe,
        HomeIcon,
        HomeReconmend,
        HomeWeekend
    },
    data () {
        return{
            swiperlist: [],
            weekendlist: [],
            recommendList: [],
            iconList: []
        }
    },
    methods: {
        getHomeInfo () {
            axios.get('/api/index.json')
                .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                this.swiperlist = data.swiperList
                this.weekendlist = data.weekendList
                this.recommendList = data.recommendList
                this.iconList = data.iconList
            }
            //console.log(res)
        }
    },
    mounted () {
        this.getHomeInfo()
    }
}
</script>

<style>
    
</style>
