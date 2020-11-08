<template>
  <div>
         <!-- 展示内容区 -->
            <div class="show">
                <!-- 头部导航区 -->
                <div class="showHeader">
                    <div class="title">戏剧</div>
                    <!-- 类别选项卡 -->
                    <div class="type">
                        <div class="hot">最热</div>
                        <div>话剧</div>
                        <div>音乐剧</div>
                        <div>舞剧</div>
                        <div>歌剧</div>
                        <div>戏曲</div>
                        <div>其他</div>
                    </div>
                    <div class="more">
<!-- 
                        <a href="##">
                            更多» 
                        </a> -->
                        <router-link to="/commoncity/recentactivity">更多»</router-link>
                        </div>
                </div>
                <!-- 内容区 -->
                <div class="showContent">
                    <!-- 单个内容的展示 -->
                    <div class="showItem">
                        <img src="https://img1.doubanio.com/pview/event_poster/median/public/d80c5169eeeca69.jpg" alt="">
                        <!-- 描述 -->
                        <div class="desc">
                            <p class="name">
                                <a href="##">
                                    脱口秀开心大会巡演《笑喷了，精品专场》单口| 周日精品专场
                                </a>
                               </p>
                            <p class="date">11月8日 至 11月29日</p>
                            <p class="adress">北京 西城区 西城区车公庄大街4号新华1949园区20栋 A33剧场</p>
                            <p class="num">2人关注</p>
                        </div>
                    </div> 
                    
                    <!-- ----2  ---- -->
                    <div class="showItem">
                        <img src="https://img9.doubanio.com/pview/event_poster/median/public/8999b599513d6c5.jpg" alt="">
                        <!-- 描述 -->
                        <div class="desc">
                            <p class="name">
                                <a href="##">
                                    脱口秀开心大会巡演《笑喷了，精品专场》单口| 周日精品专场
                                </a>
                                </p>
                            <p class="date">11月8日 至 11月29日</p>
                            <p class="adress">北京 西城区 西城区车公庄大街4号新华1949园区20栋 A33剧场</p>
                            <p class="num">2人关注</p>
                        </div>
                    </div> 
                    <!-- ------3---- -->
                    <div class="showItem">
                        <img src="https://img9.doubanio.com/pview/event_poster/median/public/8999b599513d6c5.jpg" alt="">
                        <div class="desc">
                            <p class="name">
                                <a href="##">
                                    脱口秀开心大会巡演《笑喷了，精品专场》单口| 周日精品专场
                                </a>
                                </p>
                            <p class="date">11月8日 至 11月29日</p>
                            <p class="adress">北京 西城区 西城区车公庄大街4号新华1949园区20栋 A33剧场</p>
                            <p class="num">2人关注</p>
                        </div>
                    </div> 
                    <!-- ------4------ -->
                    <div class="showItem">
                        <img src="https://img9.doubanio.com/pview/event_poster/median/public/8999b599513d6c5.jpg" alt="">
                        <div class="desc">
                            <p class="name">
                                <a href="##">
                                    脱口秀开心大会巡演《笑喷了，精品专场》单口| 周日精品专场
                                </a>
                               </p>
                            <p class="date">11月8日 至 11月29日</p>
                            <p class="adress">北京 西城区 西城区车公庄大街4号新华1949园区20栋 A33剧场</p>
                            <p class="num">2人关注</p>
                        </div>
                    </div> 
                    <!-------5-----  -->
                    <div class="showItem">
                        <img src="https://img9.doubanio.com/pview/event_poster/median/public/8999b599513d6c5.jpg" alt="">
                        <div class="desc">
                            <p class="name">
                                <a href="##">
                                    脱口秀开心大会巡演《笑喷了，精品专场》单口| 周日精品专场
                                </a>
                                </p>
                            <p class="date">11月8日 至 11月29日</p>
                            <p class="adress">北京 西城区 西城区车公庄大街4号新华1949园区20栋 A33剧场</p>
                            <p class="num">2人关注</p>
                        </div>
                    </div> 
                    <!-- ----6---- -->
                    <div class="showItem">
                        <img src="https://img9.doubanio.com/pview/event_poster/median/public/8999b599513d6c5.jpg" alt="">
                        <div class="desc">
                            <p class="name">
                                <a href="##">
                                    脱口秀开心大会巡演《笑喷了，精品专场》单口| 周日精品专场
                                </a>
                               </p>
                            <p class="date">11月8日 至 11月29日</p>
                            <p class="adress">北京 西城区 西城区车公庄大街4号新华1949园区20栋 A33剧场</p>
                            <p class="num">2人关注</p>
                        </div>
                    </div> 
                    <!-- -------- -->
                </div>

            </div>
  </div>
</template>

<script>
export default {
  name: 'ShowContent',
  mounted() {
    console.log('111111111111')
  },
}
</script>

<style scoped lang='less'>
//内容展示区
    .show{
        margin-bottom: 14px;
        // 头部导航区
        .showHeader{
            display: flex;
            padding-bottom: 6px;
            margin-bottom: 20px;
            border-bottom: 1px dotted #DEDEDE;
            .title{
                color: #111;
                font-size: 16px;
                margin-right: 48px;
            }
            .type{
                display: flex;
                width: 391px;
                line-height: 14px;
                // padding: 0 4px;
                font: 13px Helvetica,Arial,sans-serif;
                justify-content:space-between;
                color: #3377aa;
                align-items: center;
                cursor: pointer;
                .hot{
                    color: #333;
                    font: Helvetica,Arial,sans-serif;
                    font-size: 13px;
                    padding: 1px 10px;
                    background-color: #e6e6e6;
                    border-radius: 4px;
                    &:hover{
                        background-color: #e6e6e6;
                    color: #333;
                    }

                }
                div{
                    padding: 0 6px;
                    border-radius: 3px;
                    &:hover{
                        background-color: #92CCEE;
                    color: #fff;
                    }
                }
                
            }
            .more{
                flex: 1;
                a{
                    color: #3377aa;
                    font-size: 13px;
                    float: right;
                    &:hover{
                        background-color: #3377AA;
                        color: #fff;
                    }
                }
            }
        }
        // 内容区
        .showContent{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            // 单个内容的展示
            .showItem{
                width:45%;
                display: flex;
                margin-bottom: 30px;
                margin-right: 25px;
                
                img{
                    display: block;
                    width: 75px;
                    height: 112px;
                    margin-right: 20px;
                    cursor: pointer;
                }      
                .desc{
                    width: 210px;
                    margin-right: 50px;
                    .name{
                        a{
                            font-size: 14px;
                            color: #37a;
                            margin-bottom: 6px;
                            &:hover{
                                background-color:#4188B9 ;
                                color: #fff;
                            }
                        }

                    }
                    .date,.adress,.num{
                        color: #666;
                        font-size: 13px;
                        height: 18px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        padding: 1px 0;
                        cursor: pointer;


                    }
                    
                }
            }
        }
    }
</style>