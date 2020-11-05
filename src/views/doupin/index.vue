<template>
    <body>
    <!-- 头部导航 -->
    
    
    </body>
</template>

<script>
export default {
    name: 'Doupin',
};
</script>

<style lang="less" scoped>
    // 头部导航
.headerNav {
    width: 100%;
    height: 28px;
    background-color: rgb(103, 111, 116);
}

//轮播上导航
#market-main{
    width: 100%;
    height: 100px;
    .market-global-header{
        .header-inner {
            margin: 0 auto;
            width: 1100px;
            height: 100px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .logo {
                margin-top: 7px;
                text-align: center;
                line-height: 100px;

                img {

                    width: 126px;
                    height: 26px;
                }
            }

            .market-nav {
                line-height: 100px;

                a:hover {
                    color: #4FB247 !important;
                }

                a {
                    margin: 0 12px;
                    color: #6e6e6e;
                    font-size: 18px;
                    font-weight: 300;
                }

            }

            .market-user {
                width: 88px;
                height: 102px;

                .user-pic {
                    line-height: 100px;
                    text-align: center;

                    img {
                        vertical-align: middle;
                        font-size: 0;
                        width: 24px;
                        height: 24px;
                        border-radius: 50%;
                    }

                    span {
                        width: 56px;
                        height: 100px;
                    }
                }

            }

        }
    }
}

//轮播部分 
.homepage-wrap{
    .swiper-container {
        .swiper-wrapper {
            width: 100%;

            .swiper-slide img {
                width: 100%;
                height: 420px;
            }
        }
    }
}

//新品首发
.product-wrap{
    .product-list-title {
        margin: 50px auto 20px;
        color: #3e3a39;
        font-size: 20px;
        font-weight: 600;
    }
    .product-list-content{
        display: flex;
        width: 1120px;
        height: 345px;
        margin: 0 auto;
        justify-content: space-around;
        .product-card{
            width: 353.33px;
            height: 344.31px;
            
            .product-card-cover {
                img {
                    width: 353.33px;
                    height: 265.31px;
                }
            }
            
            .product-card-info{
                text-align: left;
                .product-card-title {
                    color: #3e3a39;
                    font-size: 16px;
                    font-weight: 500;
                }

                .product-card-desc {
                    color: #ababac;
                    font-size: 14px;
                }

                .product-card-price {
                    display: inline;

                    .product-card-promote {
                        color: #E4476A;
                        font-size: 16px;
                    }

                    .product-card-del {
                        color: #D1CABF;
                        text-decoration-color: initial;
                        margin-left: 3px;
                        font-size: 13px;
                        text-decoration: line-through;
                    }
                }
                .product-card-tags {
                    padding: 1px 4px;
                    margin-right: 3px;
                    color: #dd1944;
                    font-size: 12px;
                    background-color: #fbe8ec;
                    display: inline;
                }
                
            }
        }
        
    }
}

// 会员中心
.product-wrap{
    margin-top: 50px;
    width: 100%;
    text-align: center;
    img {
        width: 1100px;
        height: 200px;
    }
    
}

// 限时抢购
.product-list-sale{
    .product-list-title{
        padding: 30px 0;
        color: #3e3a39;
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        .product-list-time{
            margin-top: 5px;
            font-size: 12px;
            font-weight: 400;
        }
    }
    .product-list-content{
        display: flex;
        flex: 1;
        justify-content: flex-start;
        margin: 0 auto;
        width: 1100px;
        height: 360px;
        .product-card-large{
            .product-cover-pic {
                width: 825.36px;
                height: 360px;
            }
        }
        .product-card-main {
            margin-left: 32px;
            width: 260px;
            height: 360px;
            padding: 15px;
            background: #FFF;
            .product-card-cover{
                .product-cover-pic{
                    width: 230px;
                    height: 230px;
                }
            }
            .product-card-info{
                text-align: left;
                .product-card-title{
                    color: #3e3a39;
                    font-size: 16px;
                    font-weight: 500;
                    margin-top: 5px;
                }
                .product-card-desc{
                    color: #ababac;
                    font-size: 14px;
                    margin-top: 8px;
                }
                .product-card-tags{
                    margin-top: 8px;
                    .product-card-tag{
                        padding: 1px 4px;
                        margin-right: 3px;
                        color: #dd1944;
                        font-size: 12px;
                        background-color: #fbe8ec;
                    }
                }
                .product-card-price{
                    display: inline-block;
                    margin-top: 8px;
                    .product-card-promote{
                        color: #dd1944;
                        font-size: 16px;
                    }
                    .product-card-del{
                        margin-left: 3px;
                        color: #ababac;
                        font-size: 13px;
                        text-decoration: line-through;
                    }
                }
                .product-card-action{
                    margin-top: 8px;
                    float: right;
                    .product-card-btn{
                        padding: 4px 8px;
                        -webkit-border-radius: 40px;
                        border-radius: 40px;
                        color: #fff;
                        font-size: 13px;
                        background: #dd1944;
                        vertical-align: middle;
                    }
                }

            }
        }
    }
}

//人气单品
.product-list-hot{
    .product-list-title{
        padding: 30px 0;
        color: #3e3a39;
        font-size: 20px;
        font-weight: 600;
        text-align: center;
    }
    .product-list-content{
        width: 1120px;
        height: 339px;
        display: flex;
        justify-content: space-between;
        .product-list-item{
            width: 280px;
            height: 339px;
            padding: 0 10px;
            .product-cover-pic {
                width: 260px;
                height: 260px;
            }
                
            .product-card-info{
                width: 260px;
                text-align: left;
                .product-card-title{
                    color: #3e3a39;
                    font-size: 16px;
                    font-weight: 500;
                }
                .product-card-desc{
                    color: #ababac;
                    font-size: 14px;
                }
                .product-card-price{
                    color: #dd1944;
                    font-size: 16px;
                }
            }
        }
    }
}

//中间轮播
.product-list-specials{
    width: 1100px;
    height: 470px;
    position: relative;
    margin: 0 auto;
    .product-list-title {
        .more {
            color: #3e3a39;
            font-size: 16px;
            font-weight: 600;
            position: absolute;
            top: -50px;
            right: 0px;
            z-index: 10;
        }
    }
    
    
}


.categorys-wrap {
    //豆瓣经典 文具小物
    .category{
        .product-list-category {
            .product-list-title {
                width: 1100px;
                height: 100px;
                line-height: 100px;
                display: flex;
                align-items: center;
                .tex {
                    padding: 30px 0;
                    color: #3e3a39;
                    font-size: 20px;
                    font-weight: 600;
                    text-align: center;
                }

                .product-list-desc {
                    margin-left: 16px;
                    color: #ababac;
                    font-size: 16px;
                    font-weight: 400;
                }

                .product-list-more {
                    margin-left: auto;
                    color: #6e6e6e;
                    font-size: 14px;
                    font-weight: 300;
                }
            }

            .product-list-content {
                width: 1120px;
                height: 336.67px;
                display: flex;
                justify-content: space-between;
                .product-list-item{
                    width: 260px;
                    height: 336.67px;
                    .product-cover-pic{
                        width: 260px;
                        height: 260px;
                    }
                    .product-card-info{
                        text-align: left;
                        .product-card-title{
                            color: #3e3a39;
                            font-size: 16px;
                            font-weight: 500;
                        }
                        .product-card-desc{
                            color: #ababac;
                            font-size: 14px;
                        }
                        .product-card-price {
                            .product-card-promote{
                                color: #dd1944;
                                font-size: 16px;
                            }
                        }
                    }
                }

            }
        }
    }

    //家具生活  外出旅行
    .category{
        .product-card-price {
            .product-card-promote {
                color: #dd1944;
                font-size: 16px;
            }

            .product-card-del {
                margin-left: 3px;
                color: #ababac;
                font-size: 13px;
                text-decoration: line-through;
            }

            .product-card-tag {
                padding: 1px 4px;
                margin-right: 3px;
                color: #dd1944;
                font-size: 12px;
                background-color: #fbe8ec;
            }
        }
    }
}

//用户测评
.product-list-evaluation{
    width: 1100px;
    height: 1236.51px;
    margin: 0 auto;
    .product-list-title{
        padding: 30px 0;
        color: #3e3a39;
        font-size: 20px;
        font-weight: 600;
        text-align: left;
    }
    .product-list-content{
        display: flex;
        height: 1151.5px;
        align-items: flex-start;
        justify-content: space-between;
        flex-wrap: wrap;
        .product-list-item{
            width: 260px;
            margin-bottom: 20px;
            text-align: left;
            .product-card-main {
                margin-bottom: 20px;
                .product-cover-pic {
                    width: 260px;
                }
                .product-card-title {
                    margin: 10px 0 20px;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: clip;
                    white-space: normal;
                    font-weight: 400;
                    font-size: 16px;

                }

            }

            .product-card-user {
                .product-card-avatar {
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    margin-right: 7px;
                    vertical-align: middle;
                }
                .product-card-username {
                    display: inline-block;
                    color: #6e6e6e;
                    font-size: 12px;
                    line-height: 20px;
                    vertical-align: middle;
                }
            }
            
        }
    }
    .evaluation-more{
        display: block;
        margin: 0 auto 50px;
        height: 44px;
        width: 1100px;
        color: #6e6e6e;
        font-size: 16px;
        font-weight: 300;
        line-height: 44px;
        text-align: center;
        background-color: #f9f9f9;
    }
}
.product-list-evaluation{
    #product-cover-pic-one {
        width: 260px;
        height: 194.97px;
    }
    #product-cover-pic-two {
        width: 260px;
        height: 462.08px;
    }
    #product-cover-pic-three {
        width: 260px;
        height: 390px;
    }
    #product-cover-pic-four {
        width: 260px;
        height: 229.83px;
    }
    #product-cover-pic-five {
        width: 260px;
        height: 173.25px;
    }
    #product-cover-pic-six {
        width: 260px;
        height: 173.33px;
    }
    #product-cover-pic-senve {
        width: 260px;
        height: 173.39px;
    }
    #product-cover-pic-eight {
        width: 260px;
        height: 390px;
    }
}

// 官方小组
.group-wrap{
    width: 1100px;
    height: 407.92px;
    margin: 0 auto 150px;
    .group-hd{
        height: 90px;
        padding: 30px 0;
        margin: 30px 0 0;
        line-height: 90px;
        .more{
            float: right;
            color: #6e6e6e;
            font-size: 14px;
            font-weight: 300;
        }
        h4{
            float: left;
            font-size: 20px;
            font-weight: 600;
            color: #3e3a39;
        }
    }
    .group-topics{
        width: 1100px;
        height: 277.92px;
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-around;
        .group-topic-item{
            display: flex;
            align-items: flex-start;
            .topic-comment-amount{
                text-align: center;
                width: 25px;
                img{
                    height: 12px;
                    width: 14px;
                }
                div{
                    font-size: 12px;
                }
            }
            .topic-update-time{
                margin-left: auto;
                font-size: 16px;
                color: #3e3a39;
            }
            .topic-title{
                margin-left: 20px;
                font-size: 16px;
                color: #3e3a39;
            }
        }

    }
}
// 底部文字部分
#footer {
    width: 100%;
    height: 191.67px;
    background-color: #f9f9f9;
    border-top: 1px solid #f9f9f9;
    padding-top: 50px 0 45px;
    margin-top: 60px;
    color: #ababac;
    font-size: 12px;
    .footer-wrapper{
        width: 1100px;
        margin-left: auto;
        margin-right: auto;
        color: #ababac;
        display: flex;
        justify-content: space-between;
        .footer-left{
            img{
                width: 114.24px;
                height: 26.67px;
                margin-bottom: 10px;
            }
            .info{
                font-size: 12px;
                line-height: 21px;
                text-align: left;
            }
        }
        .footer-right{
            margin-top: 20px;
            margin-right: 30px;
            .item{
                img{
                    width: 20px;
                    vertical-align: middle;
                }
                span{
                    font-size: 20px;
                    vertical-align: middle;
                }
            }

        }
    }
}


</style>
