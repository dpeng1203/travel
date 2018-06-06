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
import { mapState } from 'vuex'

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
            lastCity: '',
            swiperlist: [],
            weekendlist: [],
            recommendList: [],
            iconList: []
        }
    },
    computed: {
        ...mapState(['city'])
    },
    methods: {
        getHomeInfo () {
            //axios.get('/travel/dist/static/mock/index.json')
            axios.get('/travel/dist/static/mock/index.json?city=' + this.city)
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
        this.lastCity = this.city
        this.getHomeInfo()
    },
    activated () {
        if(this.lastCity !== this.city) {
            this.lastCity = this.city
            this.getHomeInfo()
        }
    }
}
</script>

<style>
    
</style>
