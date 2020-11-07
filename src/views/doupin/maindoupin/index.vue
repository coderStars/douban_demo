<template>
  <div>
    <div id="app">
      <div class="homepage">
        <div class="homepage-wrap">
          <!-- 轮播部分 -->
          <div class="swiper-container" refs="bannerSwiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a target="_blank" href="javascript:;">
                  <img src="./img/file-1.jpg" />
                </a>
              </div>
              <div class="swiper-slide">
                <a target="_blank" href="javascript:;">
                  <img src="./img/file-2.jpg" />
                </a>
              </div>
              <div class="swiper-slide">
                <a target="_blank" href="javascript:;">
                  <img src="./img/file-3.jpg" />
                </a>
              </div>
              <div class="swiper-slide">
                <a target="_blank" href="javascript:;">
                  <img src="./img/file-4.jpg" />
                </a>
              </div>
              <div class="swiper-slide">
                <a target="_blank" href="javascript:;">
                  <img src="./img/file-5.jpg" />
                </a>
              </div>
              <div class="swiper-slide">
                <a target="_blank" href="javascript:;">
                  <img src="./img/file-6.jpg" />
                </a>
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>

            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>

          <!-- 新品首发 -->
          <div class="product-wrap product-list-wrap product-list-new">
            <div class="product-list-title">新品首发</div>
            <ul class="product-list-content">
              <li class="product-list-item">
                <a class="product-card">
                  <div class="product-card-cover">
                    <img
                      src="./img/ia_500000009.jpg"
                      alt="豆瓣逆向手表—多色款"
                      class="product-cover-pic"
                    />
                  </div>
                  <div class="product-card-info">
                    <div class="product-card-title">豆瓣逆向手表—多色款</div>
                    <div class="product-card-desc">风格不设限 白色也出彩</div>
                    <div class="product-card-price">
                      <span class="product-card-promote">¥289</span>
                      <span class="product-card-del">¥329</span>
                    </div>
                    <div class="product-card-tags">
                      <span class="product-card-tag">最高减40元</span>
                    </div>
                  </div>
                </a>
              </li>
              <li class="product-list-item">
                <a src="##" class="product-card">
                  <div class="product-card-cover">
                    <img
                      src="./img/ia_500000009.jpg"
                      alt="豆瓣电影日历2021"
                      class="product-cover-pic"
                    />
                  </div>
                  <div class="product-card-info">
                    <div class="product-card-title">豆瓣电影日历2021</div>
                    <div class="product-card-desc">时间是电影的核心角色</div>
                    <div class="product-card-price">
                      <span class="product-card-promote">¥99</span>
                    </div>
                  </div>
                </a>
              </li>
              <li class="product-list-item">
                <a src="##" class="product-card">
                  <div class="product-card-cover">
                    <img
                      src="./img/ia_500000009.jpg"
                      alt="豆瓣读书周历2021"
                      class="product-cover-pic"
                    />
                  </div>

                  <div class="product-card-info">
                    <div class="product-card-title">豆瓣读书周历2021</div>
                    <div class="product-card-desc">用书籍标记时光</div>
                    <div class="product-card-price">
                      <span class="product-card-promote">¥88</span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <!-- 会员中心 -->
          <div class="product-wrap">
            <a href="##">
              <img src="./img/ia_500000009.jpg" alt="加载中..." />
            </a>
          </div>

          <!-- 限时抢购 -->
          <div class="product-wrap product-list-sale">
            <div class="product-list-title">
              限时抢购
              <div class="product-list-time">
                距结束：
                <em>08</em>
                天
                <em>08</em>
                时
                <em>29</em>
                分
              </div>
            </div>
            <div class="product-list-content">
              <a class="product-card-large" href="##" target="_blank">
                <img
                  src="./img/ia_500000009.jpg"
                  alt="豆瓣逆向手表—多色款"
                  class="product-cover-pic"
                />
              </a>

              <div class="product-card-main">
                <div class="product-card-cover">
                  <img
                    src="./img/ia_500000009.jpg"
                    alt="豆瓣逆向手表—多色款"
                    class="product-cover-pic"
                  />
                </div>
                <div class="product-card-info">
                  <div class="product-card-title">豆瓣逆向手表—多色款</div>
                  <div class="product-card-desc">风格不设限 白色也出彩</div>
                  <div class="product-card-tags">
                    <span class="product-card-tag">最高减40元</span>
                  </div>
                  <div class="product-card-price">
                    <span class="product-card-promote">¥289</span>
                    <span class="product-card-del">¥329</span>
                  </div>
                  <div class="product-card-action">
                    <a class="product-card-btn" href="##">马上抢</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 人气单品 -->
          <div class="product-list-hot product-wrap product-list-wrap ">
            <div class="product-list-title">人气单品</div>
            <ul class="product-list-content">
              <li class="product-list-item col-3">
                <div class="product-card-main">
                  <div class="product-card-cover">
                    <img
                      src="./img/ia_500000009.jpg"
                      alt="豆瓣X飞跃帆布鞋"
                      class="product-cover-pic"
                    />
                  </div>
                  <div class="product-card-info">
                    <div class="product-card-title">豆瓣X飞跃帆布鞋</div>
                    <div class="product-card-desc">搭得刚刚好</div>
                    <div class="product-card-price">
                      <span class="product-card-promote">¥178</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="product-list-item col-3">
                <div class="product-card-main">
                  <div class="product-card-cover">
                    <img
                      src="./img/ia_500000009.jpg"
                      alt="豆瓣逆向手表"
                      class="product-cover-pic"
                    />
                  </div>
                  <div class="product-card-info">
                    <div class="product-card-title">豆瓣逆向手表</div>
                    <div class="product-card-desc">摆脱“惯性”，逆势而行</div>
                    <div class="product-card-price">
                      <span class="product-card-promote">¥329</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="product-list-item col-3">
                <div class="product-card-main">
                  <div class="product-card-cover">
                    <img src="./img/ia_500000009.jpg" alt="豆瓣收藏夹" class="product-cover-pic" />
                  </div>
                  <div class="product-card-info">
                    <div class="product-card-title">豆瓣收藏夹</div>
                    <div class="product-card-desc">万千票据，一本搞定</div>
                    <div class="product-card-price">
                      <span class="product-card-promote">¥99</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="product-list-item col-3">
                <div class="product-card-main">
                  <div class="product-card-cover">
                    <img
                      src="./img/ia_500000009.jpg"
                      alt="豆瓣 晴雨伞下的印象派"
                      class="product-cover-pic"
                    />
                  </div>
                  <div class="product-card-info">
                    <div class="product-card-title">豆瓣 晴雨伞下的印象派</div>
                    <div class="product-card-desc">防水防晒，真正晴雨两用</div>
                    <div class="product-card-price">
                      <span class="product-card-promote">¥138</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <!-- 中间轮播 -->
          <div class=" product-list-specials product-wrap product-list-wrap">
            <div class="product-list-title">
              <a href="/specials" target="_blank" class="more">
                查看更多>
                <!-- <em class="mui-icon arrow-right"></em> -->
              </a>
            </div>
            <ul class="product-list-content" v-if="MaindoupinDataList.specials">
              <li
                class="swiper-container"
                v-for="(item, index) in MaindoupinDataList.specials.data.items"
                :key="index"
              >
                <div class="swiper-wrapper">
                  <a
                    href="https://bizpage.douban.com/dou-art/"
                    target="_blank"
                    class="swiper-slide"
                  >
                    <span class="special-title" style="font-size: 16px; font-weight: 600;">{{
                      item.title
                    }}</span>
                    <img :src="item.image" />
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <!-- 四个楼层 -->
          <div class="product-wrap categorys-wrap">
            <!-- 豆瓣经典 -->
            <div class="category">
              <div class=" product-list-category">
                <div class="product-list-title">
                  <span class="tex">豆瓣经典</span>
                  <span class="product-list-desc">
                    口碑好物，匠心甄选
                  </span>
                  <a
                    href="https://market.douban.com/categories/?name=classic"
                    target="_blank"
                    class="product-list-more"
                  >
                    查看更多>
                    <!-- <em class="mui-icon arrow-right">
                                        </em> -->
                  </a>
                </div>
                <ul class="product-list-content" v-if="MaindoupinDataList.classic">
                  <li
                    class="product-list-item"
                    v-for="(item, index) in MaindoupinDataList.classic.data.products"
                    :key="item.id"
                  >
                    <img :src="item.image" alt="豆瓣读书周历2021" class="product-cover-pic" />
                    <div class="product-card-info">
                      <div class="product-card-title">{{ item.title }}</div>
                      <div class="product-card-desc">{{ item.desc }}</div>
                      <div id="price">
                        <span :class="{ space: item.price === item.promote_price }" id="price1"
                          >¥{{ item.promote_price }}</span
                        >
                        <span v-if="item.price !== item.promote_price" id="price2"
                          >¥{{ item.price }}</span
                        >
                        <!-- <span v-if='shopItem.price !== shopItem.promote_price' class="price2">¥{{ shopItem.price }}</span> -->
                        <span v-if="item.tags" id="price3">{{ item.tags[0] }}</span>
                        <span v-if="item.tags" id="price3">{{ item.tags[1] }}</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <!-- 家居生活 -->
            <div class="category">
              <div class="product-wrap product-list-wrap product-list-category">
                <div class="product-list-title">
                  家居生活
                  <span class="product-list-desc">
                    追求品质，乐享生活
                  </span>
                  <a
                    href="https://market.douban.com/categories/?name=homelife"
                    target="_blank"
                    class="product-list-more"
                  >
                    查看更多>
                    <!-- <em class="mui-icon arrow-right"></em> -->
                  </a>
                </div>
                <ul class="product-list-content" v-if="MaindoupinDataList.homelife">
                  <li
                    class="product-list-item"
                    v-for="(item, index) in MaindoupinDataList.homelife.data.products"
                    :key="item.id"
                  >
                    <div class="product-card-main">
                      <div class="product-card-cover">
                        <img
                          :src="item.activity_image"
                          alt="豆瓣逆向手表—多色款"
                          class="product-cover-pic"
                        />
                      </div>
                      <div class="product-card-info">
                        <div class="product-card-title">{{ item.title }}</div>
                        <div class="product-card-desc">{{ item.desc }}</div>

                        <div id="price">
                          <span :class="{ space: item.price === item.promote_price }" id="price1"
                            >¥{{ item.promote_price }}</span
                          >
                          <span v-if="item.price !== item.promote_price" id="price2"
                            >¥{{ item.price }}</span
                          >
                          <!-- <span v-if='shopItem.price !== shopItem.promote_price' class="price2">¥{{ shopItem.price }}</span> -->
                          <span v-if="item.tags[0]" id="price3">{{ item.tags[0] }}</span>
                          <span v-if="item.tags[1]" id="price3">{{ item.tags[1] }}</span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <!-- 外出旅行 -->
            <div class="category">
              <div class="product-wrap product-list-wrap product-list-category">
                <div class="product-list-title">
                  外出旅行
                  <span class="product-list-desc">实用贴心，探索世界</span>
                  <a
                    href="https://market.douban.com/categories/?name=travel"
                    target="_blank"
                    class="product-list-more"
                  >
                    查看更多>
                    <!-- <em class="mui-icon arrow-right"></em> -->
                  </a>
                </div>
                <ul class="product-list-content" v-if="MaindoupinDataList.travel">
                  <li
                    class="product-list-item"
                    v-for="(item, index) in MaindoupinDataList.travel.data.products"
                    :key="item.id"
                  >
                    <div class="product-card-main">
                      <div class="product-card-cover">
                        <img :src="item.image" :alt="item.title" class="product-cover-pic" />
                      </div>
                      <div class="product-card-info">
                        <div class="product-card-title">{{ item.title }}</div>
                        <div class="product-card-desc">{{ item.desc }}</div>
                        <div id="price">
                          <span :class="{ space: item.price === item.promote_price }" id="price1"
                            >¥{{ item.promote_price }}</span
                          >
                          <span v-if="item.price !== item.promote_price" id="price2"
                            >¥{{ item.price }}</span
                          >
                          <!-- <span v-if='shopItem.price !== shopItem.promote_price' class="price2">¥{{ shopItem.price }}</span> -->
                          <span v-if="item.tags" id="price3">{{ item.tags[0] }}</span>
                          <span v-if="item.tags" id="price3">{{ item.tags[1] }}</span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <!-- 文具小物 -->
            <div class="category">
              <div class="product-wrap product-list-wrap product-list-category">
                <div class="product-list-title">
                  文具小物
                  <span class="product-list-desc">点滴思绪，自在书写</span>
                  <a
                    href="https://market.douban.com/categories/?name=stationery"
                    target="_blank"
                    class="product-list-more"
                  >
                    查看更多>
                    <!-- <em class="mui-icon arrow-right"></em> -->
                  </a>
                </div>
                <ul class="product-list-content" v-if="MaindoupinDataList.stationery">
                  <li
                    class="product-list-item"
                    v-for="(item, index) in MaindoupinDataList.stationery.data.products"
                    :key="item.id"
                  >
                    <img :src="item.image" alt="豆瓣读书周历2021" class="product-cover-pic" />
                    <div class="product-card-info">
                      <div class="product-card-title">{{ item.title }}</div>
                      <div class="product-card-desc">{{ item.desc }}</div>
                      <div id="price">
                        <span :class="{ space: item.price === item.promote_price }" id="price1"
                          >¥{{ item.promote_price }}</span
                        >
                        <span v-if="item.price !== item.promote_price" id="price2"
                          >¥{{ item.price }}</span
                        >
                        <!-- <span v-if='shopItem.price !== shopItem.promote_price' class="price2">¥{{ shopItem.price }}</span> -->
                        <span v-if="item.tags" id="price3">{{ item.tags[0] }}</span>
                        <span v-if="item.tags" id="price3">{{ item.tags[1] }}</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 用户测评 -->
          <div class="product-wrap product-list-evaluation">
            <div class="product-list-title">用户测评</div>
            <ul class="product-list-content" v-if="MaindoupinDataList.evaluations">
              <li
                class="product-list-item"
                v-for="(item, index) in MaindoupinDataList.evaluations.data.items"
                :key="item.user_id"
              >
                <a
                  href="https://www.douban.com/people/foselberg/status/3113214185/"
                  target="_blank"
                  class="product-card-main"
                >
                  <img
                    :src="item.image"
                    alt=""
                    class="product-cover-pic"
                    id="product-cover-pic-one"
                  />
                  <div class="product-card-title">{{ item.title }}</div>
                </a>
                <a href="//www.douban.com/people/11313460" class="product-card-user">
                  <img class="product-card-avatar" :src="item.user_avatar" />
                  <div class="product-card-username">{{ item.user_name }}</div>
                </a>
              </li>
            </ul>
            <a href="/evaluations" target="_blank" class="evaluation-more">查看更多</a>
          </div>

          <!-- 官方小组 -->
          <div class="group-wrap">
            <div class="group-hd">
              <a href="//douban.com/group/588598" class="more" target="_blank">
                查看更多小组讨论 >
                <!-- <em class="mui-icon arrow-right"></em> -->
              </a>
              <h4>官方小组</h4>
            </div>
            <ul class="group-topics">
              <li class="group-topic-item">
                <span class="topic-comment-amount">
                  <img src="/img/ia_500000009.jpg" alt="" />
                  <div><em>4</em></div>
                </span>

                <a href="//douban.com/group/topic/199067152/" class="topic-title" target="_blank">
                  「豆瓣逆向手表 白色款」上线啦，限时上新优惠289元！
                </a>
                <em class="topic-update-time">10-30</em>
              </li>
              <li class="group-topic-item">
                <span class="topic-comment-amount hot">
                  <img src="/img/ia_500000009.jpg" alt="" />
                  <div><em>334</em></div>
                </span>

                <a href="//douban.com/group/topic/197990909/" class="topic-title" target="_blank">
                  【申请已结束】当电影遇上香薰：邀请喜爱各种美妙气味的豆友免费试用新品电影香薰！
                </a>
                <em class="topic-update-time">11-02</em>
              </li>
              <li class="group-topic-item">
                <span class="topic-comment-amount">
                  <img src="/img/iia_500000009.jpg" alt="" />
                  <div><em>2</em></div>
                </span>

                <a href="//douban.com/group/topic/195001981/" class="topic-title" target="_blank">
                  用书籍标记时光，豆瓣读书周历2021上线！
                </a>
                <em class="topic-update-time">10-04</em>
              </li>
              <li class="group-topic-item">
                <span class="topic-comment-amount">
                  <img src="/img/ia_500000009.jpg" alt="" />
                  <div><em>7</em></div>
                </span>

                <a href="//douban.com/group/topic/193176516/" class="topic-title" target="_blank">
                  豆瓣读书书签——“每一页里，都得着深厚的趣味”
                </a>
                <em class="topic-update-time">10-10</em>
              </li>
            </ul>
          </div>
        </div>

        <!-- 右侧定位导航 -->
        <!-- <div class="action-bar fixed action-bar-hidden">
                    <ul>
                        <li class="action-item">
                            <i class="icon top"></i>
                        </li>
                        <li class="action-item service">
                            <i class="icon service"></i>
                            <div class="conf service">
                                <div class="inner">
                                    <p>
                                        在线客服: 
                                        <a href="#">豆品在线客服</a>
                                    </p>
                                    <p>
                                        在线时间: 周一至周日 09:00 - 22:00
                                    </p>
                                    <p class="space">
                                        客服电话: 4008353331-5
                                    </p>
                                    <p>
                                        接线时间: 周一至周五 09:30 - 18:00
                                    </p>
                                </div>
                                <i class="triangle"></i>
                            </div>
                        </li>
                        <li class="action-item follow">
                            <i class="icon follow"></i>
                            <div class="conf follow">
                                <div class="inner">
                                    <a class="platform" href="https://www.douban.com/people/doubanshiji/" target="_blank">
                                        <i class="mui-icon douban"></i>
                                        <em>豆瓣豆品</em>
                                    </a>
                                    <a class="platform" href="https://weibo.com/u/6348655664" target="_blank">
                                        <i class="mui-icon weibo"></i>
                                        <em>@豆瓣豆品</em>
                                    </a>
                                    <div class="platform">
                                        <i class="mui-icon wechat"></i>
                                        <em>豆瓣豆品</em>
                                    </div>
                                    <img class="qrcode" src="https://img3.doubanio.com/f/market/15119522f04e3122f8566562ce84a684065dd6a2/pics/qrcode.png">
                                </div>
                                <i class="triangle"></i>
                            </div>
                        </li>
                        <li class="action-item share">
                            <i class="icon share"></i>
                            <div class="conf share">
                                <div class="inner">
                                    <div class="share-pop">
                                        <div class="share-menu" id="share-menu-1">
                                            <div class="share-to-douban">
                                                <a class="share douban"
                                                    href="http://www.douban.com/share/service?url=https%3A%2F%2Fmarket.douban.com%2F&amp;name=豆瓣豆品，生活美学物品&amp;text=打造美好事物，给热爱生活的你。&amp;image=https://img2.doubanio.com/img/files/file-1574763572.jpg&amp;"
                                                    target="_blank">
                                                    <i class="mui-icon douban"></i>
                                                    <span>分享到豆瓣</span>
                                                </a>
                                            </div>
                                            <div class="share-to-weibo">
                                                <a class="share weibo"
                                                    href="http://v.t.sina.com.cn/share/share.php?url=https%3A%2F%2Fmarket.douban.com%2F&amp;title=%E8%B1%86%E7%93%A3%E8%B1%86%E5%93%81%EF%BC%8C%E7%94%9F%E6%B4%BB%E7%BE%8E%E5%AD%A6%E7%89%A9%E5%93%81&amp;pic=https%3A%2F%2Fimg2.doubanio.com%2Fimg%2Ffiles%2Ffile-1574763572.jpg&amp;content=utf-8&amp;"
                                                    target="_blank">
                                                    <i class="mui-icon weibo"></i>
                                                    <span>分享到微博</span>
                                                </a>
                                            </div>
                                            <div class="share-to-wechat">
                                                <div class="share wechat">
                                                    <div class="hd">
                                                        <i class="mui-icon wechat"></i>
                                                        <span>分享到微信</span>
                                                    </div>
                                                    <div class="qr">
                                                        <canvas class="qr-content" width="75" height="75" id="qrcode-1" style="height: 75px; width: 75px;">
                                                        </canvas>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <i class="triangle"></i>
                            </div>
                        </li>
                    </ul>
                </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { getMaindoupinDataList } from "@/api/doupin";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  name: "Maindoupin",
  data() {
    return {
      MaindoupinDataList: [],
    };
  },

  mounted() {
    //头部轮播图
    //重点:swiper在实例化的时候(在new swiper的时候)一定要等待页面结构(html写好)形成以后再去用
    //1.把实例化swiper写在mounted当中, 不能保证bnanerList有数据(这里是v-for遍历拿到的轮播数据),也就没法保证上面的轮播div结构形成
    //2.即使数据能保证回来,放在mountedd当中也不能保证结构形成,因为上面div通过for循环去创建也需要时间

    //延时定时器虽然可以解决这个问题,但是不好
    // setTimeout(() => {
    //   new Swiper(this.$refs.bannerSwiper, {  //如果是类名,要加双引号".swiper-container"
    //     //direction: "vertical", // 垂直切换选项(方向:垂直, 不写默认水平,删了就是水平)
    //     loop: true, // 循环模式选项.(代表无缝操作,从最后一张切换到第一张,是否添加无缝操作)

    //     // 如果需要分页器,(有小圆点就得加这个)
    //     pagination: {
    //       el: ".swiper-pagination",
    //     },

    //     // 如果需要前进后退按钮
    //     navigation: {
    //       nextEl: ".swiper-button-next",
    //       prevEl: ".swiper-button-prev",
    //     },

    //     // 如果需要滚动条
    //     // scrollbar: {
    //     //   el: ".swiper-scrollbar",
    //     // },
    //   });
    // }, 3000);

    this.getMaindoupinDataList();
  },
  methods: {
    async getMaindoupinDataList() {
      let result = await getMaindoupinDataList();
      // console.log(result);
      this.MaindoupinDataList = result;
      // console.log(this.MaindoupinDataList);
    },
  },

  //一般监视:只能监视数组本身数据的改变,而不能监视数组内部对象内部属性的变化
  //   watch:{

  //     // bannerList(){
  //     //   new Swiper...
  //     // }   //bannerList里面只有一个handler,那么代码就可以简写成函数形式
  //     bannerList:{
  //       //一般监视
  //       handler(){

  //         //等待页面最近的一次更新循环完成之后再去执行它内部的回调
  //         // 区别:updated updated也可以实现,但是并不是最近一次更新,而是所有的更新都会执行这个钩子(updated)
  //         this.$nextTick(() => {
  // //这个回调是nextTick的回调,nextTick会等待页面dom最近的一次循环更新完成之后再去执行它内部传递的回调

  //           //监视哪个数据变化之后所执行的函数
  //           //放在这里能保证我们的bannerList内一定有数据,但是还是不能保证结构完全形成 --->到nextTick
  //         new Swiper(this.$refs.bannerSwiper, {  //如果是类名,要加双引号".swiper-container"
  //          //direction: "vertical", // 垂直切换选项(方向:垂直, 不写默认水平,删了就是水平)
  //          loop: true, // 循环模式选项.(代表无缝操作,从最后一张切换到第一张,是否添加无缝操作)

  //          // 如果需要分页器,(有小圆点就得加这个)
  //           pagination: {
  //             el: ".swiper-pagination",
  //           },

  //          // 如果需要前进后退按钮
  //           navigation: {
  //             nextEl: ".swiper-button-next",
  //             prevEl: ".swiper-button-prev",
  //           },

  //          // 如果需要滚动条
  //          // scrollbar: {
  //          //   el: ".swiper-scrollbar",
  //          // },
  //         });
  //         })

  //       }
  //     }
  //   },
  //深度监视:用来解决一般监视搞不定的问题
  // watch:{
  //   //一般监视和深度监视
  //   bannerList:{
  //     deep:true,//深度监视
  //     //一般监视
  //     handler(){
  //       //监视哪个数据变化之后所执行的函数
  //     }
  //}
  //},

  //
};
</script>

<style lang="less" scoped>
//item全部样式
.homepage-wrap {
  #price {
    #price1 {
      color: #e4476a;
      font-size: 16px;
    }
    .space {
      margin-right: 10px;
    }
    #price2 {
      color: #d1cabf;
      font-size: 13px;
      margin: 0 10px 0 3px;
      text-decoration: line-through;
    }
    #price3 {
      color: #e4476a;
      font-size: 12px;
      margin-right: 3px;
      padding: 1px 4px;
      background: #ffd2ec;
    }
  }
}

//轮播部分
.homepage-wrap {
  .swiper-container {
    width: 100%;
    height: 420px;
    margin-bottom: 30px;
  }
}

//新品首发
.product-wrap {
  .product-list-title {
    margin: 50px auto 20px;
    color: #3e3a39;
    font-size: 20px;
    font-weight: 600;
  }
  .product-list-content {
    display: flex;
    width: 1120px;
    height: 345px;
    margin: 0 auto;
    justify-content: space-around;
    .product-card {
      width: 353.33px;
      height: 344.31px;

      .product-card-cover {
        img {
          width: 353.33px;
          height: 265.31px;
        }
      }

      .product-card-info {
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
            color: #e4476a;
            font-size: 16px;
          }

          .product-card-del {
            color: #d1cabf;
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
.product-wrap {
  margin-top: 50px;
  width: 100%;
  text-align: center;
  img {
    width: 1100px;
    height: 200px;
  }
}

// 限时抢购
.product-list-sale {
  .product-list-title {
    padding: 30px 0;
    color: #3e3a39;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    .product-list-time {
      margin-top: 5px;
      font-size: 12px;
      font-weight: 400;
    }
  }
  .product-list-content {
    display: flex;
    flex: 1;
    justify-content: flex-start;
    margin: 0 auto;
    width: 1100px;
    height: 360px;
    .product-card-large {
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
      background: #fff;
      .product-card-cover {
        .product-cover-pic {
          width: 230px;
          height: 230px;
        }
      }
      .product-card-info {
        text-align: left;
        .product-card-title {
          color: #3e3a39;
          font-size: 16px;
          font-weight: 500;
          margin-top: 5px;
        }
        .product-card-desc {
          color: #ababac;
          font-size: 14px;
          margin-top: 8px;
        }
        .product-card-tags {
          margin-top: 8px;
          .product-card-tag {
            padding: 1px 4px;
            margin-right: 3px;
            color: #dd1944;
            font-size: 12px;
            background-color: #fbe8ec;
          }
        }
        .product-card-price {
          display: inline-block;
          margin-top: 8px;
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
        }
        .product-card-action {
          margin-top: 8px;
          float: right;
          .product-card-btn {
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
.product-list-hot {
  .product-list-title {
    padding: 30px 0;
    color: #3e3a39;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
  }
  .product-list-content {
    width: 1120px;
    height: 339px;
    display: flex;
    justify-content: space-between;
    .product-list-item {
      width: 280px;
      height: 339px;
      padding: 0 10px;
      .product-cover-pic {
        width: 260px;
        height: 260px;
      }

      .product-card-info {
        width: 260px;
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
          color: #dd1944;
          font-size: 16px;
        }
      }
    }
  }
}

//中间轮播
.product-list-specials {
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
  .category {
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
        .product-list-item {
          width: 260px;
          height: 336.67px;
          .product-cover-pic {
            width: 260px;
            height: 260px;
          }
          .product-card-info {
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
              .product-card-promote {
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
  .category {
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
.product-list-evaluation {
  width: 1100px;
  height: 1236.51px;
  margin: 0 auto;
  .product-list-title {
    padding: 30px 0;
    color: #3e3a39;
    font-size: 20px;
    font-weight: 600;
    text-align: left;
  }
  .product-list-content {
    display: flex;
    height: 1151.5px;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    .product-list-item {
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
  .evaluation-more {
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
.product-list-evaluation {
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
.group-wrap {
  width: 1100px;
  height: 407.92px;
  margin: 0 auto 150px;
  .group-hd {
    height: 90px;
    padding: 30px 0;
    margin: 30px 0 0;
    line-height: 90px;
    .more {
      float: right;
      color: #6e6e6e;
      font-size: 14px;
      font-weight: 300;
    }
    h4 {
      float: left;
      font-size: 20px;
      font-weight: 600;
      color: #3e3a39;
    }
  }
  .group-topics {
    width: 1100px;
    height: 277.92px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;
    .group-topic-item {
      display: flex;
      align-items: flex-start;
      .topic-comment-amount {
        text-align: center;
        width: 25px;
        img {
          height: 12px;
          width: 14px;
        }
        div {
          font-size: 12px;
        }
      }
      .topic-update-time {
        margin-left: auto;
        font-size: 16px;
        color: #3e3a39;
      }
      .topic-title {
        margin-left: 20px;
        font-size: 16px;
        color: #3e3a39;
      }
    }
  }
}
</style>
