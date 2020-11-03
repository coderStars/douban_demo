<template>
  <div class="newAlbumContainer">
    <ul class="newAlbumWrapper">
      <li class="newAlbumItem">
        <a class="imgAvator">
          <img src="@/assets/img/music/s33744062.jpg" />
        </a>
        <a class="title">positions</a>
        <div class="username">爱莉安娜·格兰德 Ariana Grande</div>
        <div class="star">
          <span class="allStar"></span>
          <span class="score">6.9</span>
        </div>
        <img src="" />
      </li>
      <li class="newAlbumItem">
        <a class="imgAvator">
          <img src="@/assets/img/music/s33745728.jpg" />
        </a>
        <a class="title">positions</a>
        <div class="username">爱莉安娜·格兰德 Ariana Grande</div>
        <div class="star">
          <span class="allStar"></span>
          <span class="score">6.9</span>
        </div>
        <img src="" />
      </li>
      <li class="newAlbumItem">
        <a class="imgAvator">
          <img src="@/assets/img/music/s33724258.jpg" />
        </a>
        <a class="title">positions</a>
        <div class="username">爱莉安娜·格兰德 Ariana Grande</div>
        <div class="star">
          <span class="allStar"></span>
          <span class="score">6.9</span>
        </div>
        <img src="" />
      </li>
      <li class="newAlbumItem">
        <a class="imgAvator">
          <img src="@/assets/img/music/s33745789.jpg" />
        </a>
        <a class="title">positions</a>
        <div class="username">爱莉安娜·格兰德 Ariana Grande</div>
        <div class="star">
          <span class="allStar"></span>
          <span class="score">6.9</span>
        </div>
        <img src="" />
      </li>
      <li class="newAlbumItem">
        <a class="imgAvator">
          <img src="@/assets/img/music/s33740879.jpg" />
        </a>
        <a class="title">positions</a>
        <div class="username">爱莉安娜·格兰德 Ariana Grande</div>
        <div class="star">
          <span class="allStar"></span>
          <span class="score">6.9</span>
        </div>
        <img src="" />
      </li>
      <li class="newAlbumItem">
        <a class="imgAvator">
          <img src="@/assets/img/music/s33740034.jpg" />
        </a>
        <a class="title">positions</a>
        <div class="username">爱莉安娜·格兰德 Ariana Grande</div>
        <div class="star">
          <span class="allStar"></span>
          <span class="score">6.9</span>
        </div>
        <img src="" />
      </li>
      <li class="newAlbumItem">
        <a class="imgAvator">
          <img src="@/assets/img/music/s33728190.jpg" />
        </a>
        <a class="title">positions</a>
        <div class="username">爱莉安娜·格兰德 Ariana Grande</div>
        <div class="star">
          <span class="allStar"></span>
          <span class="score">6.9</span>
        </div>
        <img src="" />
      </li>
      <li class="newAlbumItem">
        <a class="imgAvator">
          <img src="@/assets/img/music/s33747805.jpg" />
        </a>
        <a class="title">positions</a>
        <div class="username">爱莉安娜·格兰德 Ariana Grande</div>
        <div class="star">
          <span class="allStar"></span>
          <span class="score">6.9</span>
        </div>
        <img src="" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NewAlbumCover"
};
</script>

<style lang="less" scoped>
.newAlbumContainer {
  padding: 15px 0px 15px 30px;
  // line-height: 1.62;
  margin-right: 15px;
  height: 459px;
    ul {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      li {
        
        width: 135px;
        img {
          width: 100%;
        }

        .title {
          display: inline-block;
          font-size: 15px;
          color: #138a64;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 100%;
          background: transparent;
          margin: 14px 0 0 0;
          padding: 0;
        }

        .username {
          font-size: 13px;
          color: #999;
          margin: 0;
          line-height: 1.62;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .star {
          margin-top: 6px;
          width: 100%;
          .allStar {
            display: inline-block;
            width: 55px;
            height: 11px;
            margin: 0 3px 0 0;
            background: url("../../../../assets/img/music/ic_rating_s.png")
              no-repeat;
          }

          .score {
            color: #e09015;
            font-size: 13px;
          }
        }
      }
  }
}
</style>