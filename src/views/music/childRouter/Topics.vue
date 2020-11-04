<template>
  <div class="topicContainer">
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
        <div class="itemBottom"></div>
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
        <div class="itemBottom"></div>
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
        <div class="itemCenter"></div>
        <div class="itemBottom"></div>
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
        <div class="itemCenter"></div>
        <div class="itemBottom"></div>
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
        <div class="itemCenter"></div>
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
        <div class="itemCenter"></div>
        <div class="itemBottom"></div>
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
        <div class="itemCenter"></div>
        <div class="itemBottom"></div>
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
        <div class="itemCenter"></div>
        <div class="itemBottom"></div>
      </div>
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
      width: 500px;
      height: 360px;
      .imgCover {
        width: 100%;

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
      }
    }
  }
}
</style>