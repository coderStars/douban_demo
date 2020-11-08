import {getMovieHot,getMovieNew,getMovieHigh,getMovieCold,getMovieCh,getMovieEur,getMovieKor,getMovieJan} from '@/api/movie/movies'

import {getTag, getMovieTag, getTvTag} from '@/api/movie/tags'
//存数据的地方，多个属性的对象
const state = {
  // 电影种类
  movieHot	:{},
  movieNew	:{},
  movieHigh	:{},
  movieCold	:{},
  movieCh	:{},
  movieEur	:{},
  movieKor	:{},
  movieJan	:{},

  // 标签种类
  tag: [],
  movieTag: [],
  tvTag: []
}
//直接修改数据的地，是多个方法的一个对象  方法当中不能出现if  for   异步操作
const mutations = {
  // 获取电影
  RECEIVEMOVIEHOT(state,movieHot){
    state.movieHot = movieHot
  },
  RECEIVEMOVIENEW(state,movieNew){
    state.movieNew = movieNew
  },
  RECEIVEMOVIEHIGH(state,movieHigh){
    state.movieHigh = movieHigh
  },
  RECEIVEMOVIECOLD(state,movieCold){
    state.movieCold = movieCold
  },
  RECEIVEMOVIECH(state,movieCh){
    state.movieCh = movieCh
  },
  RECEIVEMOVIEEUR(state,movieEur){
    state.movieEur = movieEur
  },
  RECEIVEMOVIEKOR(state,movieKor){
    state.movieKor = movieKor
  },
  RECEIVEMOVIEJAN(state,movieJan){
    state.movieJan = movieJan
  },

  // 获取标签
  RECEIVETAG(state,tag){
    state.tag = tag
  },
  RECEIVEMOVIETAG(state,movieTag){
    state.movieTag = movieTag
  },
  RECEIVETVTAG(state,tvTag){
    state.tvTag = tvTag
  },
}

//和用户对接的地方  也是多个方法的一个对象 方法当中可以出现if  for  异步操作
const actions = {
  // 获取电影
  async getMovieHot({commit}){
    const result = await getMovieHot()
    if(result.code === 200){
      commit('RECEIVEMOVIEHOT',result.data)
    }
  },
  async getMovieNew({commit}){
    const result = await getMovieNew()
    if(result.code === 200){
      commit('RECEIVEMOVIENEW',result.data)
    }
  },
  async getMovieHigh({commit}){
    const result = await getMovieHigh()
    if(result.code === 200){
      commit('RECEIVEMOVIEHIGH',result.data)
    }
  },
  async getMovieCold({commit}){
    const result = await getMovieCold()
    if(result.code === 200){
      commit('RECEIVEMOVIECOLD',result.data)
    }
  },
  async getMovieCh({commit}){
    const result = await getMovieCh()
    if(result.code === 200){
      commit('RECEIVEMOVIECH',result.data)
    }
  },
  async getMovieEur({commit}){
    const result = await getMovieEur()
    if(result.code === 200){
      commit('RECEIVEMOVIEEUR',result.data)
    }
  },
  async getMovieKor({commit}){
    const result = await getMovieKor()
    if(result.code === 200){
      commit('RECEIVEMOVIEKOR',result.data)
    }
  },
  async getMovieJan({commit}){
    const result = await getMovieJan()
    if(result.code === 200){
      commit('RECEIVEMOVIEJAN',result.data)
    }
  },

  // 获取标签
  async getTag({commit}){
    const result = await getTag()
    if(result.code === 200){
      commit('RECEIVETAG',result.data)
    }
  },
  async getMovieTag({commit}){
    const result = await getMovieTag()
    if(result.code === 200){
      commit('RECEIVEMOVIETAG',result.data)
    }
  },
  async getTvTag({commit}){
    const result = await getTvTag()
    if(result.code === 200){
      commit('RECEIVETVTAG',result.data)
    }
  },
}

//通过state计算出来的属性数据（只有读没有写，只能使用state数据不能修改state数据）
const getters = {
  
}

export default {
  state,
  mutations,
  actions,
  getters
}