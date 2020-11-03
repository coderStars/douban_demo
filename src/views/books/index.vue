<template>
  <div>
    <div class="boxsExpress">
      <div class="booksHeader">
        <h2>
          <span class="newBooks">新书速递</span>
          <span class="link-more">
            <a class="link-more-a" href="/latest?icn=index-latestbook-all"
              >更多»</a
            >
          </span>
        </h2>
        <div class="slide-controls">
          <ol class="slide-dots">
            <li><a data-index="1" href="#" class="active"></a></li>
            <li><a data-index="2" href="#" class=""></a></li>
            <li><a data-index="3" href="#" class=""></a></li>
            <li><a data-index="4" href="#" class=""></a></li>
          </ol>
          <div class="slide-btns">
            <a href="#" class="prev">‹</a>
            <a href="#" class="next">›</a>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Books",
};
</script>

<style  lang="less"  scoped>
.boxsExpress {
  width: 1040px;
  margin: 0 auto;
  // background: turquoise;
  height: 900px;
}
.booksHeader {
  color: #111;
  font: 12px Helvetica, Arial, sans-serif;
  line-height: 1.62;
  font-size: 13px;
  margin: 0;
  padding: 0;
  float: left;
  width: 675px;
  padding-right: 25px;
}
h2 {
  padding: 0;
  font: 15px Arial, Helvetica, sans-serif;
  margin: 0 0 12px 0;
  line-height: 150%;
  color: #111;
  font-weight: bold;
  padding-bottom: 3px;
  margin-bottom: 16px;
  border-bottom: 1px solid #ddd;
  font-size: 18px;
}
.newBooks {
  font: 15px Arial, Helvetica, sans-serif;
  line-height: 150%;
  color: #111;
  font-weight: bold;
  font-size: 18px;
}
.link-more {
  font: 13px Arial, Helvetica, sans-serif;
  line-height: 150%;
  color: #666666;
  padding-left: 10px;
}
.link-more-a {
  color: #3377aa;
}
.slide-controls {
  margin: 0;
  padding: 0;
  float: right;
  margin-top: -42px;
}
.slide-dots {
  color: #111;
  font: 12px Helvetica, Arial, sans-serif;
  line-height: 1.62;
  padding: 0 0 0 20px;
  list-style: none;
  display: inline-block;
  zoom: 1;
  font-size: 0;
  margin-right: 6px;
  vertical-align: middle;
}
.slide-dots li {
  font-size: 0;
  cursor: pointer;
  text-decoration: none;
  color: #3377aa;
  width: 5px;
  height: 5px;
  display: inline-block;
  zoom: 1;
  margin-left: 8px;
  border-radius: 5px;
  background: #dfdfdf;
  background-color: #dfdfdf;
}
.slide-btns {
  font-size: 13px;
  margin: 0;
  padding: 0;
  float: right;
}
.prev {
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  width: 18px;
  height: 18px;
  display: inline-block;
  zoom: 1;
  font: 100 16px Arial;
  text-align: center;
  line-height: 16px;
  margin-left: 4px;
  outline: none;
  border-radius: 9px;
  background: #9b9a8e;
  font-weight: bold;
}
.next {
  cursor: pointer;
  text-decoration: none;
  letter-spacing: -1px;
  color: #fff;
  width: 18px;
  height: 18px;
  display: inline-block;
  zoom: 1;
  font: 100 16px Arial;
  text-align: center;
  line-height: 16px;
  margin-left: 4px;
  outline: none;
  border-radius: 9px;
  background: #9b9a8e;
  font-weight: bold;
}
.bd {
  color: #111;
  font: 12px Helvetica, Arial, sans-serif;
  line-height: 1.62;
  font-size: 13px;
  margin: 0;
  padding: 0;
}
.carousel {
  overflow: hidden;
  position: relative;
  width: 675px;
  height: 489px;
}
.slide-list {
  position: relative;
  font-size: 0;
  width: 4050px;
  left: -675px;
}
.slide-list:nth-child(1) {
  list-style: none;
  display: inline-block;
  zoom: 1;
  vertical-align: top;
  font-size: 0;
  margin: 0 -25px 0 0;
  width: 700px;
}
.slide-list:nth-child(2) {
  list-style: none;
  display: inline-block;
  zoom: 1;
  vertical-align: top;
  font-size: 0;
  margin: 0 -25px 0 0;
  width: 700px;
}
</style>
