<template>
    <div>
        <detail-banner 
        :sightName="sightName"
        :bannerImg="bannerImg"
        :gallaryImgs="gallaryImgs"
        ></detail-banner> 
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list="list"></detail-list>    
        </div>   
    </div>
</template>

<script>
import DetailBanner from './ComponentsDetail/Banner'
import DetailHeader from './ComponentsDetail/Header'
import DetailList from './ComponentsDetail/List'
import axios from 'axios'
export default {
    name: 'Detail',
    data () {
        return {
            list: [],
            sightName: '',
            bannerImg: '',
            gallaryImgs: [],
        }
    },
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    },
    methods: {
        getHomeInfo () {
            axios.get('/travel/dist/static/mock/detail.json',{
                params:{
                    id: this.$route.params.id
                }
            }) .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                this.sightName = data.sightName
                this.bannerImg = data.bannerImg
                this.gallaryImgs = data.gallaryImgs
                this.list = data.categoryList
            }
            //console.log(res)
        }
    },
    mounted () {
        this.getHomeInfo()
    },
    activated () {
        this.getHomeInfo()
    }
}
</script>

<style lang= "stylus" scoped>
.content
        height: 50rem
</style>
