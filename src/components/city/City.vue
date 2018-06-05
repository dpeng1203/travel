<template>
    <div>
        <city-header></city-header>
        <city-input :cities="cities"></city-input>
        <city-list :cities="cities" :hotcities="hotcities"></city-list>
    </div>
</template>

<script>
import CityHeader from './componentsCity/Header'
import CityInput from './componentsCity/Input'
import CityList from './componentsCity/List'
import axios from 'axios'

export default {
    name: 'City',
    components: {
        CityHeader,
        CityInput,
        CityList
    },
    data () {
        return {
            cities: {},
            hotcities: []
        }
    },
    methods: {
        getCityInfo () {
            axios.get('/api/city.json')
                .then(this.getCityInfoSucc)
        },
        getCityInfoSucc (res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                this.cities = data.cities
                this.hotcities = data.hotCities
            }
            console.log(res)
        }
    },
    mounted () {
        this.getCityInfo()
    }

}
</script>


<style>

</style>
