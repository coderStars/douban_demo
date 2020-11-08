<template>
  <div class="topicContainer">
    <div id="topics"></div>
    <div class="topImg">
      <img
        :src="
          getImgUrl(
            'https://img3.doubanio.com/view/music_index_banner/raw/public/banner-2580.jpg'
          )
        "
      />
    </div>
    <div class="separator-section">
      全部专题
    </div>

    <div class="topicsContent">
      <div class="topicItem">
        <div class="imgCover">
          <img
            :src="
              getImgUrl(
                'https://img3.doubanio.com/view/music_topic_cover/large/public/topic-envyinterview2018-1.jpg'
              )
            "
          />
        </div>
        <div class="itemCenter"></div>
        <div class="itemBottom">
          <span>2018/09/10</span>
        </div>
      </div>
      <div class="topicItem">
        <div class="imgCover">
          <img
            :src="
              getImgUrl(
                'https://img3.doubanio.com/view/music_topic_cover/large/public/topic-yantalksfen-1.jpg'
              )
            "
          />
        </div>
        <div class="itemCenter">
          <p>四位远东地区最活跃的实验乐手，组建了一个音乐/社会性的项目。</p>
        </div>
        <div class="itemBottom">
          <span>2018/09/10</span>
        </div>
      </div>
      <div class="topicItem">
        <div class="imgCover">
          <img
            :src="
              getImgUrl(
                'https://img3.doubanio.com/view/music_topic_cover/large/public/topic-baishuitenyears-1.jpg'
              )
            "
          />
        </div>
        <div class="itemCenter">
          <p>
            白水的专辑总是让人感到深邃与体量宏大，但《儿童乐园》却又留下了更多的谜团：阿波普卡是谁？老歌手托瑞又是何方神圣？
          </p>
        </div>
        <div class="itemBottom"></div>
      </div>
      <div class="topicItem">
        <div class="imgCover">
          <img
            :src="
              getImgUrl(
                'https://img3.doubanio.com/view/music_topic_cover/large/public/topic-sunsetrollercoaster2018-1.jpg'
              )
            "
          />
        </div>
        <div class="itemCenter"></div>
        <div class="itemBottom">
          <span>2018/09/10</span>
        </div>
      </div>
      <div class="topicItem">
        <div class="imgCover">
          <img
            :src="
              getImgUrl(
                'https://img3.doubanio.com/view/music_topic_cover/large/public/topic-thetwentiesinterview-1.jpg'
              )
            "
          />
        </div>
        <div class="itemCenter">
          <p>在英文的传统里，注入一股来自东方视野的活水</p>
        </div>
        <div class="itemBottom"></div>
      </div>
      <div class="topicItem">
        <div class="imgCover">
          <img
            :src="
              getImgUrl(
                'https://img3.doubanio.com/view/music_topic_cover/large/public/topic-damosuzukitour-1.jpg'
              )
            "
          />
        </div>
        <div class="itemCenter">
          <p>
            如今在词曲创作上肯下功夫的音乐人越来越少，而这正是 The Twenties
            难能可贵之处
          </p>
        </div>
        <div class="itemBottom">
          <span>2018/09/10</span>
        </div>
      </div>
      <div class="topicItem">
        <div class="imgCover">
          <img
            :src="
              getImgUrl(
                'https://img3.doubanio.com/view/music_topic_cover/large/public/topic-mildhighclub-1.jpg'
              )
            "
          />
        </div>
        <div class="itemCenter">
          <p>
            音乐开始在我脑子里播放的时候，我希望能有支笔或者电脑在身边记录下来
          </p>
        </div>
        <div class="itemBottom">
          <span>2018/09/10</span>
        </div>
      </div>
      <div class="topicItem">
        <div class="imgCover">
          <img
            :src="
              getImgUrl(
                'https://img3.doubanio.com/view/music_topic_cover/large/public/topic-nio-1.jpg'
              )
            "
          />
        </div>
        <div class="itemCenter">
          <p>豆瓣音乐和蔚来一起在上海开了一场黑胶派对。</p>
        </div>
        <div class="itemBottom">
          <span>2018/09/10</span>
        </div>
      </div>
    </div>
    <div id="bottom-section">
      <div id="more-section">
        <span id="more" class="active"><span>加载更多</span></span>
      </div>
      <a href="#topics" id="to-top">⌃ 返回顶部</a>
    </div>
  </div>
</template>

<script>
import getImgUrl from "@/utils/getImgUrl";
export default {
  name: "Topics",
  data() {
    return {};
  },
  methods: {
    getImgUrl
  }
};
</script>

<style lang="less" scoped>
.topicContainer {
  width: 1040px;
  margin: 0 auto;
  .topImg {
    overflow: hidden;
    img {
      width: 100%;
      // vertical-align: middle;
    }
  }
  .separator-section {
    height: 20px;
    margin: 40px 0;
    text-align: center;
    font-size: 13px;
    line-height: 20px;
    color: #999;
    background: url("../../../assets/img/music/separator.png") no-repeat center;
  }
  .topicsContent {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .topicItem {
      background-color: #f6f8f9;
      border-radius: 4px;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
      width: 500px;
      height: 360px;
      margin-bottom: 40px;
      .imgCover {
        width: 100%;
        cursor: pointer;
        img {
          width: 100%;
        }
      }
      .itemCenter {
        width: 100%;
        height: 63px;
        line-height: 63px;
        box-sizing: border-box;
        padding: 20px 15px;
        color: #666;
        font-size: 13px;
        p {
          line-height: 23px;
        }
      }
      .itemBottom {
        span {
          padding-left: 20px;
          color: #999;
        }
      }
    }
  }
  #bottom-section {
    margin: 25px auto 70px;
    position: relative;
    #more-section {
      width: 250px;
      text-align: center;
      border-bottom: 1px solid #999;
      margin: auto;
      line-height: 0;
      #more {
        padding: 0 10px;
          background: #FFF;
        span {
          color: #999;
          cursor: pointer;
          
        }
      }
      
    }
    #to-top {
        position: absolute;
        top: -6px;
        right: 0;
        color: #999;
        line-height: 1;
      }
  }
}
</style>