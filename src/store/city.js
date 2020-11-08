import {getCommonCityData} from '@/api/commonCity'
const state = {
    commonCityData:{} //获取同城home页数据
}
const mutations = {
    //获取同城home页数据
    RECEIVECOMMONCITYDATA(state,commonCityData){
        state.commonCityData = commonCityData
    }
}
const actions = {
    //获取同城home页数据
    async getCommonCityData({commit}){
        let result = await getCommonCityData()
        commit('RECEIVECOMMONCITYDATA',result)
    } 
}
const getters = {

}
export default {
    state,
    mutations,
    actions,
    getters
}