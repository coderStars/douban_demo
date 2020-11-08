<template>
  <div>
    <Search
      inpText="书名、作者、ISBN"
      :buttomTextList="buttomTextList"
    ></Search>
    <!-- 广告 -->
    <div class="topAds">
      <img src="https://img1.doubanio.com/view/dale-online/dale_ad/public/5df03c6ab20aa4a.jpg" alt="" />
    </div>
    <div class="boxsExpress">
      <!-- 左边布局 -->
      <div class="leftContainer">
        <!-- 图书轮播图 -->
        <div class="swiper-container" ref="booksSwiper">
          <!-- 新书速递 -->
          <div class="booksHeader">
            <h2>
              <span class="newBooks">新书速递</span>
              <span class="link-more">
                <a class="link-more-a" href="https://book.douban.com/latest?icn=index-latestbook-all"
                  >更多»</a
                >
              </span>
            </h2>
            <div class="slide-controls">
              <div class="swiper-pagination"></div>
              <div href="#" class="prev"></div>
              <div href="#" class="next"></div>
            </div>
          </div>
          <!-- 各种图书 -->
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="item in newBookslist"
              :key="item.id"
            >
              <img :src="item.imgUrl" alt="" />
              <div class="name">
                <a href="javascript:;" @click="toBooksInfo(item)">
                  {{ item.name }}
                </a>
                <!-- <router-link :to="{path:'/boosinfo',query:{id:item.id,name:item.name,skuPrice:item.skuPrice,imgUrl:item.imgUrl,author:item.author}}">{{ item.name }}</router-link> -->
              </div>
              <div class="autor">
                {{ item.author }}
              </div>
            </div>
          </div>
        </div>
        <!-- 手表广告图 -->
        <div class="watchAds">
          <a href="">
            <img
              src="https://img9.doubanio.com/view/dale-online/dale_ad/public/010427a8f84acb4.jpg"
              alt=""
            />
          </a>
        </div>
        <!-- 图书咨询 -->
        <div class="bookConsulting">
          <div class="consultingTop">
            <h2>
              <span>图书咨询</span>
            </h2>
            <div class="slideControls">
              <ol class="slideDots">
                <li class="active"></li>
                <li></li>
                <li></li>
                <li></li>
              </ol>
              <div class="slideBtns">
                <a href="#" class="prev">‹</a>
                <a href="#" class="next">›</a>
              </div>
            </div>
          </div>
          <div class="consultingBottom">
            <a href="">
              <div class="booksContent">
                <div class="textContent">
                  <span>我完成我以完成你</span>
                  <span class="textSpan">乐府文化</span>
                  <p>
                    文：郭初阳 成为语文老师纯属偶然。
                    小学的时候我拔尖的是数学，那会儿有珠算课，上学放学除了书包还要带一个算盘，用一根带子串起两头，斜跨在肩上颇为威风，仿佛一杆冲锋枪——我的算盘打得飞快，从一开始，加…
                  </p>
                </div>
                <div class="booksImg">
                  <img
                    src="../../assets/images/books/homePages/ia_100000113.jpg"
                    alt=""
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
        <!-- 最受关注图书榜 -->
        <div class="booksList">
          <div class="booksListHeader">
            <h2>
              <span class="booksListTitle">最受关注图书榜</span>
              <span class="linkMore">
                <a href="/chart?subcat=F&amp;icn=index-topchart-fiction"
                  >虚构类»</a
                >
              </span>
              <span class="linkMore">
                <a href="/chart?icn=index-topchart-nonfiction">非虚构类»</a>
              </span>
            </h2>
          </div>
          <div class="booksListInfo">
            <div class="aBooksInfo">
              <div class="flexContainer">
                <div class="aBooksInfoLeft">
                  <a href="">
                    <img
                      src="../../assets/images/books/homePages/ia_100000060.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div class="aBooksInfoRight">
                  <h4><a href="">夜晚的潜水艇</a></h4>
                  <p>
                    <span class="xingxing">☆☆☆☆☆</span>
                    <span class="PF">9.0</span>
                  </p>
                  <p>作者：陈春成</p>
                  <p>短篇小说/中国文学</p>
                </div>
              </div>
              <div class="aBooksInfoBottom">
                <p>
                  在看不见硝烟的生活里，这本书能带给你安宁（<a href=""
                    >单读评论</a
                  >）
                </p>
              </div>
            </div>
            <div class="aBooksInfo">
              <div class="flexContainer">
                <div class="aBooksInfoLeft">
                  <a href="">
                    <img
                      src="https://img3.doubanio.com/view/subject/s/public/s33716660.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div class="aBooksInfoRight">
                  <h4><a href="">价值</a></h4>
                  <p>
                    <span class="xingxing">☆☆☆☆☆</span>
                    <span class="PF">7.4</span>
                  </p>
                  <p>作者：张磊</p>
                  <p>投资 / 高瓴</p>
                </div>
              </div>
              <div class="aBooksInfoBottom">
                <p>
                  我们是创业者，恰巧是投资人（<a href=""
                    >马尔代夫的驴评论</a
                  >）
                </p>
              </div>
            </div>
            <div class="aBooksInfo">
              <div class="flexContainer">
                <div class="aBooksInfoLeft">
                  <a href="">
                    <img
                      src="https://img3.doubanio.com/view/subject/s/public/s33683730.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div class="aBooksInfoRight">
                  <h4><a href="">文青之死</a></h4>
                  <p>
                    <span class="xingxing">☆☆☆☆☆</span>
                    <span class="PF">7.6</span>
                  </p>
                  <p>作者：赖香吟</p>
                  <p>小说 / 中国文学</p>
                </div>
              </div>
              <div class="aBooksInfoBottom">
                <p>
                  杀死那个文艺青年，不必动刀动斧，唯时间足矣。（<a href=""
                    >寻找无双评论</a
                  >）
                </p>
              </div>
            </div>
            <div class="aBooksInfo">
              <div class="flexContainer">
                <div class="aBooksInfoLeft">
                  <a href="">
                    <img
                      src="https://img2.doubanio.com/view/subject/s/public/s33734103.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div class="aBooksInfoRight">
                  <h4><a href="">碎片</a></h4>
                  <p>
                    <span class="xingxing">☆☆☆☆☆</span>
                    <span class="PF">9.4</span>
                  </p>
                  <p>作者：[意] 埃莱娜·费兰特</p>
                  <p>女性 / 意大利</p>
                </div>
              </div>
              <div class="aBooksInfoBottom">
                <p>
                  她用“碎片”为女性的深层体验找到一种表达（<a href=""
                    >Francesca-CY评论</a
                  >）
                </p>
              </div>
            </div>
            <div class="aBooksInfo">
              <div class="flexContainer">
                <div class="aBooksInfoLeft">
                  <a href="">
                    <img
                      src="https://img9.doubanio.com/view/subject/s/public/s33723465.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div class="aBooksInfoRight">
                  <h4><a href="">凡人之心</a></h4>
                  <p>
                    <span class="xingxing">☆☆☆☆☆</span>
                    <span class="PF">8.8</span>
                  </p>
                  <p>作者：[英] 威廉·博伊德</p>
                  <p>英国文学 / 布克奖</p>
                </div>
              </div>
              <div class="aBooksInfoBottom">
                <p>
                  “对我来说，追踪一个人一生的起起落落、成败得失，似乎是一件平淡无奇又令人满足的事。”（<a href=""
                    >浦睿文化评论</a
                  >）
                </p>
              </div>
            </div>
            <div class="aBooksInfo">
              <div class="flexContainer">
                <div class="aBooksInfoLeft">
                  <a href="">
                    <img
                      src="https://img2.doubanio.com/view/subject/s/public/s33734462.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div class="aBooksInfoRight">
                  <h4><a href="">文化失忆</a></h4>
                  <p>
                    <span class="xingxing">☆☆☆☆☆</span>
                    <span class="PF">8.9</span>
                  </p>
                  <p>作者：[澳] 克莱夫·詹姆斯</p>
                  <p>文化记忆 / 文论</p>
                </div>
              </div>
              <div class="aBooksInfoBottom">
                <p>
                  他写人物不是传记式的，而是通过点评、回应来勾勒一幅自画像。（<a href=""
                    >仙妮熊评论</a
                  >）
                </p>
              </div>
            </div>
            <div class="aBooksInfo">
              <div class="flexContainer">
                <div class="aBooksInfoLeft">
                  <a href="">
                    <img
                      src="https://img9.doubanio.com/view/subject/s/public/s33701105.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div class="aBooksInfoRight">
                  <h4><a href="">鸳鸯六七四</a></h4>
                  <p>
                    <span class="xingxing">☆☆☆☆☆</span>
                    <span class="PF">8.7</span>
                  </p>
                  <p>作者：马家辉</p>
                  <p>小说 / 香港文学</p>
                </div>
              </div>
              <div class="aBooksInfoBottom">
                <p>
                  “今夕吾躯归故土，他朝君体也相同。”（<a href=""
                    >薄荷在1998评论</a
                  >）
                </p>
              </div>
            </div>
            <div class="aBooksInfo">
              <div class="flexContainer">
                <div class="aBooksInfoLeft">
                  <a href="">
                    <img
                      src="https://img9.doubanio.com/view/subject/s/public/s33703095.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div class="aBooksInfoRight">
                  <h4><a href="">看不见的女人</a></h4>
                  <p>
                    <span class="xingxing">☆☆☆☆☆</span>
                    <span class="PF">8.8</span>
                  </p>
                  <p>作者：[英] 安·奥克利</p>
                  <p>社会学 / 性别研究</p>
                </div>
              </div>
              <div class="aBooksInfoBottom">
                <p>
                  限制人们做出改变的，其实，是人们对其的想象力。（<a href=""
                    >盐少女评论</a
                  >）
                </p>
              </div>
            </div>
            <div class="aBooksInfo">
              <div class="flexContainer">
                <div class="aBooksInfoLeft">
                  <a href="">
                    <img
                      src="https://img3.doubanio.com/view/subject/s/public/s33703771.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div class="aBooksInfoRight">
                  <h4><a href="">最后的雾·穿裹尸衣的女人</a></h4>
                  <p>
                    <span class="xingxing">☆☆☆☆☆</span>
                    <span class="PF">8.5</span>
                  </p>
                  <p>作者：[智利] 玛丽亚·路易莎·邦巴尔</p>
                  <p>拉美文学 / 女性文学</p>
                </div>
              </div>
              <div class="aBooksInfoBottom">
                <p>
                  有多少真心话是以呓语的方式说出来（<a href=""
                    >单读评论</a
                  >）
                </p>
              </div>
            </div>
            <div class="aBooksInfo">
              <div class="flexContainer">
                <div class="aBooksInfoLeft">
                  <a href="">
                    <img
                      src="https://img3.doubanio.com/view/subject/s/public/s33691951.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div class="aBooksInfoRight">
                  <h4><a href="">及格家宣言</a></h4>
                  <p>
                    <span class="xingxing">☆☆☆☆☆</span>
                    <span class="PF">7.6</span>
                  </p>
                  <p>作者：[美]雷·本内特</p>
                  <p>生活 / 职场</p>
                </div>
              </div>
              <div class="aBooksInfoBottom">
                <p>
                  认清形势适当放弃幻想（<a href=""
                    >JustWe自爆法则评论</a
                  >）
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- 豆瓣书店 -->
        <div class="booksShop">
          <div class="booksShopTop">
            <h2>
              <span>豆瓣书店</span>
              <span class="linMore">
                <a
                  href="https://market.douban.com/book/?utm_campaign=book_freyr_section&utm_source=douban&utm_medium=pc_web"
                  >查看全部»</a
                >
              </span>
            </h2>
          </div>
          <div class="booksShopBottom">
            <div class="booksShopInfoTop">
              <div class="TopLeft">
                <a href="">
                  <img
                    src="../../assets/images/books/homePages/ia_100000134.png"
                    alt=""
                  />
                </a>
              </div>
              <div class="TopRight">
                <p class="oneP">
                  平行宇宙的艺术
                  <span>¥117.60</span>
                  <span class="BY">/包邮</span>
                </p>
                <p class="twoP">Rick and Morty首部官方设定集，主题贴纸限量送</p>
              </div>
            </div>
            <div class="booksShopInfoBottom">
              <div class="flexContainer">
                <div class="abooksInfo">
                  <div class="aBooksImg">
                    <a href="">
                      <img
                        src="https://qnmob3.doubanio.com/view/freyr_page_photo/raw/public/6836.jpg?imageView2/2/q/80/w/212/h/280/format/png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="aBooksText">
                    <div>
                      <a href="">刘勃历史三部曲</a>
                    </div>
                    <div>￥88.00</div>
                  </div>
                </div>
                <div class="abooksInfo">
                  <div class="aBooksImg">
                    <a href="">
                      <img
                        src="https://qnmob3.doubanio.com/view/freyr_page_photo/raw/public/6808.jpg?imageView2/2/q/80/w/212/h/280/format/png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="aBooksText">
                    <div>
                      <a href="">碎片</a>
                    </div>
                    <div>￥49.00</div>
                  </div>
                </div>
                <div class="abooksInfo">
                  <div class="aBooksImg">
                    <a href="">
                      <img
                        src="https://qnmob3.doubanio.com/view/freyr_page_photo/raw/public/6914.jpg?imageView2/2/q/80/w/212/h/280/format/png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="aBooksText">
                    <div>
                      <a href="">乔乔的奇妙冒险</a>
                    </div>
                    <div>￥88.00</div>
                  </div>
                </div>
                <div class="abooksInfo">
                  <div class="aBooksImg">
                    <a href="">
                      <img
                        src="https://qnmob3.doubanio.com/view/freyr_page_photo/raw/public/6691.jpg?imageView2/2/q/80/w/212/h/280/format/png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="aBooksText">
                    <div>
                      <a href="">《极乐鸟与蜗牛…</a>
                    </div>
                    <div>￥86.00</div>
                  </div>
                </div>
                <div class="abooksInfo">
                  <div class="aBooksImg">
                    <a href="">
                      <img
                        src="https://qnmob3.doubanio.com/view/freyr_page_photo/raw/public/6778.jpg?imageView2/2/q/80/w/212/h/280/format/png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="aBooksText">
                    <div>
                      <a href="">The Big Idea 21…</a>
                    </div>
                    <div>￥205.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 电子图书 -->
        <div class="electronicBooks">
          <div class="electronicBooksTop">
            <h2>
              <span>电子图书</span>
              <span class="linMore">
                <a
                  href="https://market.douban.com/book/?utm_campaign=book_freyr_section&amp;utm_source=douban&amp;utm_medium=pc_web"
                  >查看全部»</a
                >
              </span>
            </h2>
          </div>
          <div class="electronicBooksBottom">
            <div class="electronicBooksInfoTop">
              <h3>
                热门电子图书
                <span class="moreInfo">
                  <a
                    href="https://read.douban.com/kind/1/?sort=hot&amp;dcs=book-hot&amp;dcm=douban&amp;dct=read-more"
                    target="_blank"
                  >
                    更多»
                  </a>
                </span>
              </h3>
            </div>
            <div class="electronicBooksInfoBottom">
              <div class="flexContainer">
                <div class="aElectronicBooksInfoText">
                  <div class="aElectronicBooksImg">
                    <a href="">
                      <img
                        src="https://img3.doubanio.com/view/ark_article_cover/retina/public/161222851.jpg?v=1602574635"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="aElectronicBooksText">
                    <div class="booksTitle">
                      <a href="">我信仰阅读</a>
                    </div>
                    <div class="booksPrice">39.50元</div>
                  </div>
                </div>
                <div class="aElectronicBooksInfoText">
                  <div class="aElectronicBooksImg">
                    <a href="">
                      <img
                        src="https://img9.doubanio.com/view/ark_article_cover/retina/public/161223875.jpg?v=1602579221"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="aElectronicBooksText">
                    <div class="booksTitle">
                      <a href="">人类简史（知识漫画）：人类的诞生</a>
                    </div>
                    <div class="booksPrice">59.99元</div>
                  </div>
                </div>
                <div class="aElectronicBooksInfoText">
                  <div class="aElectronicBooksImg">
                    <a href="">
                      <img
                        src="https://img9.doubanio.com/view/ark_article_cover/retina/public/159381686.jpg?v=1600393497"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="aElectronicBooksText">
                    <div class="booksTitle">
                      <a href="">忠诚（当代法语获奖小说）</a>
                    </div>
                    <div class="booksPrice">24.99元</div>
                  </div>
                </div>
                <div class="aElectronicBooksInfoText">
                  <div class="aElectronicBooksImg">
                    <a href="">
                      <img
                        src="https://img3.doubanio.com/view/ark_article_cover/retina/public/161372261.jpg?v=1602746973"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="aElectronicBooksText">
                    <div class="booksTitle">
                      <a href="">白色游泳衣</a>
                    </div>
                    <div class="booksPrice">29.99元</div>
                  </div>
                </div>
                <div class="aElectronicBooksInfoText">
                  <div class="aElectronicBooksImg">
                    <a href="">
                      <img
                        src="https://img9.doubanio.com/view/ark_article_cover/retina/public/159773135.jpg?v=1600839733"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="aElectronicBooksText">
                    <div class="booksTitle">
                      <a href="">觉醒</a>
                    </div>
                    <div class="booksPrice">9.60元</div>
                  </div>
                </div>
                <div class="aElectronicBooksInfoText">
                  <div class="aElectronicBooksImg">
                    <a href="">
                      <img
                        src="https://img2.doubanio.com/view/ark_article_cover/retina/public/106138402.jpg?v=0"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="aElectronicBooksText">
                    <div class="booksTitle">
                      <a href="">直到世界反映了灵魂最深层的需要</a>
                    </div>
                    <div class="booksPrice">12.50元</div>
                  </div>
                </div>
                <div class="aElectronicBooksInfoText">
                  <div class="aElectronicBooksImg">
                    <a href="">
                      <img
                        src="https://img2.doubanio.com/view/ark_article_cover/retina/public/161200712.jpg?v=1602560674"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="aElectronicBooksText">
                    <div class="booksTitle">
                      <a href="">价格的发现【2020诺贝尔经济学奖得主作品】</a>
                    </div>
                    <div class="booksPrice">33.99元</div>
                  </div>
                </div>
                <div class="aElectronicBooksInfoText">
                  <div class="aElectronicBooksImg">
                    <a href="">
                      <img
                        src="https://img1.doubanio.com/view/ark_article_cover/retina/public/160997578.jpg?v=1602318130"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="aElectronicBooksText">
                    <div class="booksTitle">
                      <a href="">春宵苦短，少女前进吧！</a>
                    </div>
                    <div class="booksPrice">9.00元</div>
                  </div>
                </div>
                <div class="aElectronicBooksInfoText">
                  <div class="aElectronicBooksImg">
                    <a href="">
                      <img
                        src="https://img2.doubanio.com/view/ark_article_cover/retina/public/158498122.jpg?v=1599460945"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="aElectronicBooksText">
                    <div class="booksTitle">
                      <a href="">怪谈百物语：哭泣童子</a>
                    </div>
                    <div class="booksPrice">9.60元</div>
                  </div>
                </div>
                <div class="aElectronicBooksInfoText">
                  <div class="aElectronicBooksImg">
                    <a href="">
                      <img
                        src="https://img3.doubanio.com/view/ark_article_cover/retina/public/106138301.jpg?v=0"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="aElectronicBooksText">
                    <div class="booksTitle">
                      <a href="">月光的合金</a>
                    </div>
                    <div class="booksPrice">12.50元</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 最受欢迎的书评 -->
        <div class="bookReview">
          <div class="booksReviewHeader">
            <h2>
              <span class="booksReviewTitle">最受欢迎的书评</span>
              <span class="linkMore">
                <a href="/chart?subcat=F&amp;icn=index-topchart-fiction"
                  >更多热门书评»</a
                >
              </span>
              <span class="linkMore">
                <a href="/chart?icn=index-topchart-nonfiction">最新书评»</a>
              </span>
            </h2>
          </div>
          <div class="booksReviewBottom">
            <div class="booksReviewContent">
              <div class="booksReviewContentLeft">
                <a href="">
                  <img
                    src="https://img3.doubanio.com/view/subject/m/public/s33716660.jpg"
                    alt="当时间穿梭沦为背景后，本系列该何去何从"
                  />
                </a>
              </div>
              <div class="booksReviewContentRight">
                <h3>
                  <a href="">价值书评（不会取花里胡哨的标题）</a>
                </h3>
                <div class="infoTitle">
                  <a href="">suits</a>
                  <span>评论</span>
                  <a href="">《价值》</a>
                  <span>☆☆☆☆☆</span>
                </div>
                <div class="infoText">
                  <span
                    >作为一个生长在靠近港澳沿海地区的80后，我对近30年国内发生的社会变化可能有着超过平均水平的认识。眼看他起朱楼,眼看他宴宾客,眼看他楼塌了。90年代是一个只要你愿意去拼去闯，不管多么野蛮生长，也能赚到一大...</span
                  >
                  <a href="">（全文）</a>
                </div>
              </div>
            </div>
            <div class="booksReviewContent">
              <div class="booksReviewContentLeft">
                <a href="">
                  <img
                    src="https://img3.doubanio.com/view/subject/m/public/s33720250.jpg"
                    alt="当时间穿梭沦为背景后，本系列该何去何从"
                  />
                </a>
              </div>
              <div class="booksReviewContentRight">
                <h3>
                  <a href="">我们看到的世界</a>
                </h3>
                <div class="infoTitle">
                  <a href="">黑眼豆豆</a>
                  <span>评论</span>
                  <a href="">《你和我》</a>
                  <span>☆☆☆☆☆</span>
                </div>
                <div class="infoText">
                  <span
                    >这是一本关于曹禺的传记，曹禺被称为中国的莎士比亚，他写的《雷雨》，《日出》，《原野》，和《北京人》都是中国话剧的传世之作。关于他的传记，也已经有好几本了。《你和我》与别的曹禺传记不同的是，这本传记...</span
                  >
                  <a href="">（全文）</a>
                </div>
              </div>
            </div>
            <div class="booksReviewContent">
              <div class="booksReviewContentLeft">
                <a href="">
                  <img
                    src="https://img2.doubanio.com/view/subject/m/public/s33665563.jpg"
                    alt="当时间穿梭沦为背景后，本系列该何去何从"
                  />
                </a>
              </div>
              <div class="booksReviewContentRight">
                <h3>
                  <a href="">人生由我：励志无敌偶像的“硬核”人生</a>
                </h3>
                <div class="infoTitle">
                  <a href="">极简丹 </a>
                  <span>评论</span>
                  <a href="">《人生由我》</a>
                  <span>☆☆☆☆☆</span>
                </div>
                <div class="infoText">
                  <span
                    >1 “她这一生，太硬核了！” 我花了2个早晨，3个小时10分钟看完这本书，合上书的时候忍不住感慨！ 她是公司市值近3000亿“硅谷钢铁侠"埃隆·马斯克的硬核母亲，拥有两个营养学硕士，培养了3个亿万富翁，72岁活跃...</span
                  >
                  <a href="">（全文）</a>
                </div>
              </div>
            </div>
            <div class="booksReviewContent">
              <div class="booksReviewContentLeft">
                <a href="">
                  <img
                    src="https://img1.doubanio.com/view/subject/m/public/s33702347.jpg"
                    alt="当时间穿梭沦为背景后，本系列该何去何从"
                  />
                </a>
              </div>
              <div class="booksReviewContentRight">
                <h3>
                  <a href="">阿拉斯加或大理，那些在边缘之地找到爱与自由的人们</a>
                </h3>
                <div class="infoTitle">
                  <a href="">祁十一</a>
                  <span>评论</span>
                  <a href="">《伟大的孤独》</a>
                  <span>☆☆☆☆☆</span>
                </div>
                <div class="infoText">
                  <span
                    >骑着电动车，朋友矛矛带我穿梭在大理古城，去见一位旅行了八年的女生啊咩。自从2012年离开工作了五年的日本回国后，这位传奇般的旅行者就一直在路上。云南，西藏，东南亚，印度，尼泊尔，埃及……时而回国，来大...</span
                  >
                  <a href="">（全文）</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 右边布局 -->
      <div class="rightContainer">
        <!-- 热门标签 -->
        <div class="hot">
          <!-- 热门标签头部 -->
          <div class="Hot-labels">
            <h2>
              <span>热门标签</span>
              <span class="hotLabels"><a href="">所有热门标签»</a></span>
            </h2>
          </div>
          <!-- 热门内容分类   （已渲染动态数据） -->
          <div class="contentLabels">
            <div class="ulContainer">
              <div class="titleContainer">
                <div
                  class="ificationContainer"
                  v-for="item in booksLabel"
                  :key="item.id"
                >
                  <span>{{ item.name }}</span>
                  <div>
                    <span
                      class="ificationDIV"
                      v-for="(itemChild, index) in item.typeList"
                      :key="index"
                    >
                      <!-- <router-link
                        to="/noveltag"
                        v-if="index === 0 && itemChild.labelName === '小说'"
                        >{{ itemChild.labelName }}</router-link
                      > -->
                      <a
                        href="javascript:;"
                        @click="toBooksDetails(itemChild)"
                        >{{ itemChild.labelName }}</a
                      >
                    </span>
                    <span class="lastSpan"><a href="">更多»</a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 畅销图书榜 -->
        <div class="bestSellingList">
          <div class="bestSellingListTop">
            <h2>
              <span>畅销图书榜</span>
            </h2>
          </div>
          <div class="bestSellingListBottom">
            <div class="popularContent">
              <span class="pop_num">1.</span>
              <div class="pop_title">
                <a>一看就会的思维导图启蒙绘本（歪歪兔童书馆出品）</a>
                <div>歪歪兔关键期早教 项目组编绘</div>
              </div>
              <a href="" class="shopBt">
                <span>去购买</span>
              </a>
            </div>
            <div class="popularContent">
              <span class="pop_num">2.</span>
              <div class="pop_title">
                <a>爱上阅读的秘密（精装书+豪华手账珍藏套装）</a>
                <div>大J/卢俊</div>
              </div>
              <a href="" class="shopBt">
                <span>去购买</span>
              </a>
            </div>
            <div class="popularContent2">
              <span class="pop_num">3.</span>
              <div class="pop_title">
                <a>你当像鸟飞往你的山</a>
                <div></div>
              </div>
              <a href="" class="shopBt">
                <span>去购买</span>
              </a>
            </div>
            <div class="popularContent2">
              <span class="pop_num">4.</span>
              <div class="pop_title">
                <a>人间失格</a>
                <div>太宰治</div>
              </div>
              <a href="" class="shopBt">
                <span>去购买</span>
              </a>
            </div>
            <div class="popularContent2">
              <span class="pop_num">5.</span>
              <div class="pop_title">
                <a>人生海海</a>
                <div>麦家</div>
              </div>
              <a href="" class="shopBt">
                <span>去购买</span>
              </a>
            </div>
            <div class="popularContent2">
              <span class="pop_num">6.</span>
              <div class="pop_title">
                <a>神奇校车 桥梁书版</a>
                <div>乔安娜柯尔　著/布鲁斯迪根 图</div>
              </div>
              <a href="" class="shopBt">
                <span>去购买</span>
              </a>
            </div>
            <div class="popularContent2">
              <span class="pop_num">7.</span>
              <div class="pop_title">
                <a>云边有个小卖部</a>
                <div>张嘉佳</div>
              </div>
              <a href="" class="shopBt">
                <span>去购买</span>
              </a>
            </div>
            <div class="popularContent2">
              <span class="pop_num">8.</span>
              <div class="pop_title">
                <a>月亮与六便士</a>
                <div>[英] 威廉·萨默塞特·毛姆</div>
              </div>
              <a href="" class="shopBt">
                <span>去购买</span>
              </a>
            </div>
            <div class="popularContent2">
              <span class="pop_num">9.</span>
              <div class="pop_title">
                <a>小熊和最好的爸爸（全7册）</a>
                <div>阿兰德·丹姆 文/亚历克斯·沃尔弗 图</div>
              </div>
              <a href="" class="shopBt">
                <span>去购买</span>
              </a>
            </div>
            <div class="popularContent2">
              <span class="pop_num">10.</span>
              <div class="pop_title">
                <a>断舍离</a>
                <div>山下英子</div>
              </div>
              <a href="" class="shopBt">
                <span>去购买</span>
              </a>
            </div>
          </div>
        </div>
        <!-- 豆瓣图书250 -->
        <div class="douBanBooks250">
          <div class="douBanBooks250Top">
            <h2>
              <span>豆瓣图书250</span>
              <span class="linMore">
                <a
                  href="https://book.douban.com/top250?icn=index-book250-all"
                  >更多»</a
                >
              </span>
            </h2>
          </div>
          <div class="douBanBooks250Bottom">
            <div class="adouBanBooks250Info">
              <div class="booksImg">
                <a href="">
                  <img
                    src="https://img1.doubanio.com/view/subject/s/public/s1070959.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div class="booksTitle">
                <a href="">
                  <span>红楼梦</span>
                </a>
              </div>
            </div>
            <div class="adouBanBooks250Info">
              <div class="booksImg">
                <a href="">
                  <img
                    src="https://img2.doubanio.com/view/subject/s/public/s1070222.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div class="booksTitle">
                <a href="">
                  <span>围城</span>
                </a>
              </div>
            </div>
            <div class="adouBanBooks250Info">
              <div class="booksImg">
                <a href="">
                  <img
                    src="https://img1.doubanio.com/view/subject/s/public/s1008848.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div class="booksTitle">
                <a href="">
                  <span>唐诗三百首</span>
                </a>
              </div>
            </div>
            <div class="adouBanBooks250Info">
              <div class="booksImg">
                <a href="">
                  <img
                    src="https://img1.doubanio.com/view/subject/s/public/s26037307.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div class="booksTitle">
                <a href="">
                  <span>繁花</span>
                </a>
              </div>
            </div>
            <div class="adouBanBooks250Info">
              <div class="booksImg">
                <a href="">
                  <img
                    src="https://img1.doubanio.com/view/subject/s/public/s1562997.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div class="booksTitle">
                <a href="">
                  <span>西方哲学史（上卷）</span>
                </a>
              </div>
            </div>
            <div class="adouBanBooks250Info">
              <div class="booksImg">
                <a href="">
                  <img
                    src="https://img9.doubanio.com/view/subject/s/public/s29179365.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div class="booksTitle">
                <a href="">
                  <span>长夜难明</span>
                </a>
              </div>
            </div>
            <div class="adouBanBooks250Info">
              <div class="booksImg">
                <a href="">
                  <img
                    src="https://img3.doubanio.com/view/subject/s/public/s1727290.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div class="booksTitle">
                <a href="">
                  <span>追风筝的人</span>
                </a>
              </div>
            </div>
            <div class="adouBanBooks250Info2">
              <div class="booksImg">
                <a href="">
                  <img
                    src="https://img2.doubanio.com/view/subject/s/public/s27814883.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div class="booksTitle">
                <a href="">
                  <span>人类简史</span>
                </a>
                <p>
                  <span>有电子书</span>
                </p>
              </div>
            </div>
            <div class="adouBanBooks250Info2">
              <div class="booksImg">
                <a href="">
                  <img
                    src="https://img1.doubanio.com/view/subject/s/public/s2619779.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div class="booksTitle">
                <a href="">
                  <span>十万个为什么</span>
                </a>
                <p>
                  <span>有电子书</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- 跳转到读书详情的路由连接 -->
        <router-link to="/booksinfo">详情</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { getBookHotList, getNewsBooksList } from "@/api/books.js";
import Swiper from "swiper";
export default {
  name: "Books",
  data() {
    return {
      buttomTextList: [
        "购书单",
        "电子图书",
        "豆瓣书店",
        "2019年度榜单",
        "2019书影音报告",
        "购物车",
      ],
      booksLabel: [],
      newBookslist: [],
    };
  },
  mounted() {
    this.getInitData();
    // console.log(getBookHotList);
    // 新书速递轮播图
    this.aBooksSwiper();
    this.getNewsBooksData();
  },
  methods: {
    // 声明式导航跳转新书速递传参数
    toBooksInfo(item) {
      this.$router.push({
        path: "/boosinfo",
        query: {
          id: item.id,
        },
      });
    },
    getBooksClassification() {
      // console.log(labelId);
      this.$store.dispatch("getBooksClassification");
    },
    // 声明式导航跳转分类书的详情页
    toBooksDetails(itemChild) {
      this.getBooksClassification();
      this.$router.push({
        path: "/noveltag",
        query: {
          labelId: itemChild.labelId,
          labelName: itemChild.labelName,
        },
      });
    },
    // 右边标签请求数据
    async getInitData() {
      try {
        const result = await getBookHotList();
        this.booksLabel = result;
      } catch (error) {
        console.log(error);
      }
    },
    // 新书速递轮播图函数
    aBooksSwiper() {
      var mySwiper = new Swiper(this.$refs.booksSwiper, {
        // loop: true, // 循环模式选项
        // setWrapperSize: true, //设置flex生效
        // uniqueNavElements: false, //设置分页器生效
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          // type: "bullets",
          clickable: true,
          // bulletActiveClass: 'my-bullet-active',
        },
        slidesPerColumnFill: "column",
        slidesPerView: 5, //一行显示3个
        slidesPerColumn: 2, //显示2行
        // slidesPerView : 5,
        slidesPerGroup: 5,
        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",
        },
      });
    },
    // 新书速递的请求
    async getNewsBooksData() {
      try {
        const result = await getNewsBooksList();
        this.newBookslist = result;
      } catch (error) {
        console.log(error);
      }
    },
  },
  watch: {
    // 监视新书速递的轮播图函数
    newBookslist: {
      handler() {
        this.$nextTick(() => {
          var mySwiper = new Swiper(this.$refs.booksSwiper, {
            // loop: true, // 循环模式选项
            // setWrapperSize: true, //设置flex生效
            // uniqueNavElements: false, //设置分页器生效
            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              // type: "bullets",
              clickable: true,
              // bulletActiveClass: 'my-bullet-active',
            },
            slidesPerColumnFill: "column",
            slidesPerView: 5, //一行显示3个
            slidesPerColumn: 2, //显示2行
            // slidesPerView : 5,
            slidesPerGroup: 5,
            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".next",
              prevEl: ".prev",
            },
          });
        });
      },
    },
  },
};
</script>

<style  lang="less"  scoped>
.topAds {
  width: 1040px;
  margin: 0 auto;
  padding-bottom: 16px;
}
.boxsExpress {
  width: 1040px;
  margin: 0 auto;
  // background: turquoise;
  // height: 9990px;
  display: flex;
  // 左边布局
  .leftContainer {
    padding-right: 25px;
    // 新书速递轮播图
    .swiper-container {
      width: 675px !important;
      .booksHeader {
        position: relative;
        color: #111;
        font: 12px Helvetica, Arial, sans-serif;
        line-height: 1.62;
        font-size: 13px;
        margin: 0;
        padding: 0;
        // float: left;
        width: 675px;
        padding-right: 25px;
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
            .link-more-a {
              color: #3377aa;
            }
          }
        }
        .slide-controls {
          width: 129px;
          height: 20px;
          float: right;
          vertical-align: middle;
          display: flex;
          .swiper-pagination {
            position: absolute;
            top: 6px;
            right: 52px;
            // width: 120px;
          }
          // .swiper-pagination-bullet{
          //   margin-right: 5px;
          //   height: 20px !important;
          //   width: 20px !important;
          //   background: #9C9B90;
          // }
          // .my-bullet-active{
          //   margin-right: 5px;
          //   height: 20px !important;
          //   width: 20px !important;
          //   background: #3377aa;
          // }
          div {
            // position: absolute;
            // top: 0;
            // left: 0;
            width: 100px;
            vertical-align: top;
            display: inline-block;
            margin-left: 552px;
            font-size: 13px;
            color: #666;
            line-height: 18px;
          }
          .prev {
            position: absolute;
            top: 4px;
            right: 55px;
            background: url("../../assets/images/books/pre.png") no-repeat 1px -21px;
            display: inline-block;
            width: 19px !important;
            height: 19px;
            border-radius: 50%;
            margin: 0 0 0 10px;
            cursor: pointer !important;
          }
          .next {
            position: absolute;
            top: 4px;
            right: 32px;
            background: url("../../assets/images/books/pre.png") no-repeat -21px -2px;
            display: inline-block;
            width: 19px;
            height: 19px;
            border-radius: 50%;
            margin: 0 0 0 4px;
            cursor: pointer;
          }
        }
      }
      .swiper-wrapper {
        width: 675px !important;
        height: 468px;
        // padding-left: 20px;
        // display: inline-block;
        // display: flex;
        // flex-wrap: wrap;
        .swiper-slide {
          width: 110px !important;
          height: 219px;
          margin: 0 25px 15px 0;
          img {
            display: block;
            width: 110px;
            height: 172px;
            margin-bottom: 7px;
            margin-right: 0;
          }
          .name {
            a {
              color: #3377aa;
              font-size: 14px;
            }
          }
          .autor {
            color: #333;
            width: 102px;
            font-size: 13px;
            margin-bottom: 6px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
    // 手表广告图
    .watchAds {
      // position: relative;
      // width: 675px;
      // height: 120px;
      // background: #c9c9c7;
      // background-image: linear-gradient(to right, #C9C9C7 , #F2F3F5);
      // background-image: url(../../assets/images/books/homePages/ia_100000000099.jpg);
      // background-size: 145px 120px;
      // background-repeat: no-repeat;
      // background-position:400px 0px;
      a {
        img {
          // position: absolute;
          width: 675px;
          height: 140px;
          // right: 150px;
          // background: transparent;
          margin: 45px 0;
        }
      }
    }
    // 图书咨询
    .bookConsulting {
      width: 675px;
      height: 204px;
      // background: turquoise;
      margin-bottom: 50px;
      .consultingTop {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        h2 {
          font-size: 18px;
          line-height: 150%;
        }
        // 小圆点和左右切换
        .slideControls {
          width: 130px;
          height: 21px;
          // background: yellow;
          display: flex;
          justify-content: space-between;
          .slideDots {
            width: 52px;
            height: 21px;
            padding-left: 20px;
            margin-right: 6px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            li {
              width: 5px;
              height: 5px;
              background: #dfdfdf;
              border-radius: 50%;
            }
            .active {
              background: #9b9a8f;
            }
            li:hover {
              cursor: pointer;
            }
          }
          .slideBtns {
            .prev {
              display: inline-block;
              width: 18px;
              height: 18px;
              margin-left: 4px;
              color: #fff;
              font: 100 16px Arial;
              background: #9b9a8e;
              line-height: 18px;
              text-align: center;
              border-radius: 9px;
              font-weight: bold;
              cursor: pointer;
              text-decoration: none;
              zoom: 1;
              outline: none;
            }
            .next {
              display: inline-block;
              width: 18px;
              height: 18px;
              margin-left: 4px;
              color: #fff;
              font: 100 16px Arial;
              background: #9b9a8e;
              line-height: 18px;
              text-align: center;
              border-radius: 9px;
              font-weight: bold;
              cursor: pointer;
              text-decoration: none;
              zoom: 1;
              outline: none;
            }
          }
        }
      }
      // 图书咨询内容框
      .consultingBottom {
        a {
          text-decoration: none;
          .booksContent {
            width: 623px;
            height: 127px;
            // background: chartreuse;
            padding: 25px;
            margin-bottom: 4px;
            border: 1px #dddddd solid;
            display: flex;
            justify-content: space-between;
            .textContent {
              width: 507px;
              height: 106px;
              // margin-right: 116px;
              // background: red;
              span {
                line-height: 1.38;
                font-size: 15px;
                color: #37a;
              }
              .textSpan {
                display: block;
                color: #aaa;
                font-size: 13px;
                line-height: 1;
                margin-top: 8px;
              }
              p {
                color: #494949;
                line-height: 1.5;
                margin: 8px 0 0 0;
                font-size: 13px;
              }
            }
            .booksImg {
              display: inline-block;
              // background: rosybrown;
              img {
                width: 80px;
                height: 105px;
              }
            }
          }
        }
      }
    }
    // 图书榜
    .booksList {
      width: 675px;
      height: 1059px;
      margin-bottom: 50px;
      // background: olivedrab;
      .booksListHeader {
        width: 675px;
        height: 27px;
        // background: orange;
        border-bottom: 1px #dddddd solid;
        padding-bottom: 3px;
        margin-bottom: 16px;
        h2 {
          .booksListTitle {
            font: 18px Arial, Helvetica, sans-serif;
            line-height: 150%;
            font-weight: bold;
            color: #111111;
            // float: left;
          }
          .linkMore {
            a {
              font: 13px Arial, Helvetica, sans-serif;
              line-height: 150%;
              color: #3377aa;
              padding-left: 10px;
            }
          }
        }
      }
      .booksListInfo {
        display: flex;
        flex-wrap: wrap;
        .aBooksInfo {
          width: 317px;
          height: 177px;
          // background: orchid;
          margin-right: 20px;
          margin-bottom: 30px;
          .flexContainer {
            display: flex;
            .aBooksInfoLeft {
              a {
                width: 85px;
                height: 120px;
                margin-right: 18px;
                img {
                  width: 76.5px;
                  height: 120px;
                }
              }
            }
            .aBooksInfoRight {
              h4 {
                a {
                  color: #3377aa;
                  font-size: 15px;
                  height: auto;
                  margin: 0;
                  font-weight: normal;
                }
              }
              p {
                // width: 317px;
                height: 21px;
                line-height: 21px;
                font: 13px Helvetica, Arial, sans-serif;
                .xingxing {
                  color: #e09015;
                  margin-right: 3px;
                }
                .PF {
                  color: #e09015;
                }
              }
            }
          }
          .aBooksInfoBottom {
            width: 317px;
            height: 42px;
            padding-top: 15px;
            p {
              font: 13px Helvetica, Arial, sans-serif;
            }
          }
        }
      }
    }
    // 豆瓣书店
    .booksShop {
      width: 675px;
      height: 452px;
      margin-bottom: 50px;
      // background: chartreuse;
      .booksShopTop {
        border-bottom: 1px #dddddd solid;
        padding-bottom: 3px;
        margin-bottom: 16px;
        h2 {
          span {
            font: 18px Arial, Helvetica, sans-serif;
            font-weight: bold;
          }
          .linMore {
            padding-left: 10px;
            font: 13px Arial, Helvetica, sans-serif;
            line-height: 150%;
            color: #3377aa !important;
          }
        }
      }
      .booksShopBottom {
        width: 675px;
        height: 405px;
        // background: cornflowerblue;
        .booksShopInfoTop {
          height: 172px;
          margin-bottom: 30px;
          // background: crimson;
          display: flex;
          justify-content: space-between;
          .TopLeft {
            margin-right: 20px;
            a {
              img {
                width: 130px;
                height: 172px;
              }
            }
          }
          .TopRight {
            width: 525px;
            height: 84px;
            font-size: 23px;
            line-height: 32px;
            .oneP {
              height: 35px;
              margin: 25px 0 6px 0;
              span {
                font-size: 17px;
                color: #e76648;
                margin-left: 17px;
              }
              .BY {
                font-size: 14px;
                top: -1px;
                margin-left: 10px;
              }
            }
            .twoP {
              height: 20px;
              color: #9b9b9b;
              font-size: 14px;
              line-height: 20px;
            }
          }
        }
        .booksShopInfoBottom {
          height: 203px;
          // background: darkblue;
          .flexContainer {
            width: 700px;
            display: flex;
            justify-content: space-between;
            .abooksInfo {
              width: 115px;
              height: 183px;
              margin: 0 25px 20px 0;
              // background: darkolivegreen;
              .aBooksImg {
                height: 140px;
                margin-bottom: 12px;
                a {
                  img {
                    width: 106px;
                  }
                }
              }
              .aBooksText {
                div {
                  font: 12px "Microsoft YaHei", Tahoma, Helvetica, Arial,
                    sans-serif;
                  a {
                    color: #3377aa;
                    font-size: 13px;
                  }
                }
              }
            }
          }
        }
      }
    }
    // 电子图书
    .electronicBooks {
      width: 675px;
      height: 517px;
      // background: chartreuse;
      margin-bottom: 30px;
      .electronicBooksTop {
        border-bottom: 1px #dddddd solid;
        padding-bottom: 3px;
        margin-bottom: 16px;
        h2 {
          span {
            font: 18px Arial, Helvetica, sans-serif;
            font-weight: bold;
          }
          .linMore {
            padding-left: 10px;
            font: 13px Arial, Helvetica, sans-serif;
            line-height: 150%;
            a {
              color: #3377aa;
            }
          }
        }
      }
      .electronicBooksBottom {
        height: 470px;
        // background: chocolate;
        .electronicBooksInfoTop {
          height: 14px;
          margin-bottom: 13px;
          // background: cornflowerblue;
          h3 {
            font: 15px Helvetica, Arial, sans-serif;
            font-weight: normal;
            color: #111;
            font-size: 15px;
            line-height: 1;
            // margin-bottom: 13px;
            span {
              margin-left: 10px;
              a {
                cursor: pointer;
                color: #3377aa;
              }
            }
          }
        }
        .electronicBooksInfoBottom {
          height: 443px;
          // background: crimson;
          .flexContainer {
            width: 700px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            .aElectronicBooksInfoText {
              width: 115px;
              height: 201px;
              margin-right: 25px;
              margin-bottom: 20px;
              // background: darkkhaki;
              .aElectronicBooksImg {
                a {
                  img {
                    width: 106px;
                    height: 158px;
                  }
                }
              }
              .aElectronicBooksText {
                width: 115px;
                height: 31px;
                .booksTitle {
                  width: 115px;
                  height: 16px;
                  margin-bottom: 5px;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  a {
                    color: #3377aa;
                    cursor: pointer;
                    font: 13px Helvetica, Arial, sans-serif;
                  }
                }
                .booksPrice {
                  font: 13px Helvetica, Arial, sans-serif;
                  color: #4b4b4b;
                }
              }
            }
          }
        }
      }
    }
    // 最受欢迎的书评
    .bookReview {
      width: 675px;
      height: 688px;
      margin-bottom: 50px;
      // background: darkkhaki;
      .booksReviewHeader {
        width: 675px;
        height: 27px;
        // background: orange;
        border-bottom: 1px #dddddd solid;
        padding-bottom: 3px;
        margin-bottom: 16px;
        h2 {
          .booksReviewTitle {
            font: 18px Arial, Helvetica, sans-serif;
            line-height: 150%;
            font-weight: bold;
            color: #111111;
            // float: left;
          }
          .linkMore {
            a {
              font: 13px Arial, Helvetica, sans-serif;
              line-height: 150%;
              color: #3377aa;
              padding-left: 10px;
            }
          }
        }
      }
      .booksReviewBottom {
        height: 640px;
        // background: darkolivegreen;
        .booksReviewContent {
          display: flex;
          justify-content: space-between;
          width: 675px;
          height: 117px;
          border-bottom: 1px #eaeaea solid;
          padding-bottom: 24px;
          margin-bottom: 24px;
          .booksReviewContentLeft {
            a {
              img {
                width: 75px;
                height: 105px;
              }
            }
          }
          .booksReviewContentRight {
            width: 585px;
            height: 117px;
            box-sizing: border-box;
            // padding-left: 15px;
            // background: darkorchid;
            h3 {
              a {
                font: 15px Helvetica, Arial, sans-serif;
                color: #3377aa;
              }
            }
            .infoTitle {
              height: 21px;
              padding: 5px 0;
              a {
                margin-right: 3px;
                color: #666666;
                font: 13px Helvetica, Arial, sans-serif;
              }
              span {
                font-size: 14px;
                color: #666666;
                margin-right: 3px;
              }
            }
            .infoText {
              height: 60px;
              font: 13px Helvetica, Arial, sans-serif;
              span {
                line-height: 23px;
              }
              a {
                color: #3377aa;
              }
            }
          }
        }
        div:nth-child(4) {
          border-bottom: none;
        }
      }
    }
  }
  // 右边布局
  .rightContainer {
    width: 300px;
    height: 900px;
    // background-color: chartreuse;
    padding-top: 30px;
    // margin-left: 30px;
    // 热门标签
    .hot {
      padding-bottom: 20px;
      h2 {
        border-bottom: 1px solid #ddd;
        padding-bottom: 3px;
        margin-bottom: 16px;
        margin: 0 0 12px 0;
        line-height: 150%;
        span {
          font: 16px Arial, Helvetica, sans-serif;
          color: #111;
          font-weight: bold;
        }
        .hotLabels {
          font: 13px Arial, Helvetica, sans-serif;
          color: #666666;
          padding-left: 10px;
          a {
            color: #3377aa;
          }
          a:hover {
            background: #e8e8e8;
          }
        }
      }
      .contentLabels {
        width: 300px;
        height: 545px;
        padding-bottom: 20px;
        margin-top: 16px;
        // background: chartreuse;
        .ulContainer {
          .titleContainer {
            width: 300px;
            height: 75px;
            // display: flex;
            .ificationContainer {
              height: 75px;
              margin-top: 16px;
              position: relative;
              &::before {
                content: "";
                display: block;
                border-bottom: 1px #dadada dashed;
                position: absolute;
                width: 100%;
                bottom: 0;
              }
              span {
                font: 13px Helvetica, Arial, sans-serif;
                line-height: 1.62;
              }
              div {
                display: flex;
                flex-wrap: wrap;
                .ificationDIV {
                  // width: 26px;
                  height: 20px;
                  background: #f5f5f5;
                  padding: 2px 11px 0;
                  margin: 0 3px 5px 0;
                  a {
                    color: #37a;
                    font-size: 13px;
                    display: inline-block;
                    line-height: 20px;
                    // width: 26px;
                    height: 20px;
                  }
                }
                .lastSpan {
                  height: 20px;
                  background: #f5f5f5;
                  padding: 2px 11px 0;
                  margin: 0 3px 5px 0;
                  a {
                    color: #aaaaaa;
                    font-size: 13px;
                    display: inline-block;
                    line-height: 20px;
                    // width: 26px;
                    height: 20px;
                  }
                }
              }
            }
          }
        }
      }
    }
    // 畅销图书榜
    .bestSellingList {
      height: 613px;
      margin-bottom: 32px;
      // background: brown;
      .bestSellingListTop {
        border-bottom: 1px #dddddd solid;
        padding-bottom: 3px;
        margin-bottom: 16px;
        h2 {
          span {
            font: 18px Arial, Helvetica, sans-serif;
            font-weight: bold;
          }
        }
      }
      .bestSellingListBottom {
        height: 567px;
        // background: burlywood;
        .popularContent {
          height: 67px;
          padding: 4px 0;
          border-bottom: 1px #dadada dashed;
          // background: chartreuse;
          display: flex;
          position: relative;
          .pop_num {
            font: 14px Helvetica, Arial, sans-serif;
            width: 20px;
            height: 22px;
          }
          .pop_title {
            width: 223px;
            height: 66px;
            a {
              color: #3377aa;
              font: 14px Helvetica, Arial, sans-serif;
              cursor: pointer;
            }
            div {
              color: #666666;
              font: 13px Helvetica, Arial, sans-serif;
            }
          }
          .shopBt {
            position: absolute;
            // left: -5px;
            right: 5px;
            top: 10px;
            padding: 6px 8px;
            span {
              font-size: 13px;
            }
          }
        }
        .popularContent:hover {
          background: #f9f9f6;
        }
        .popularContent:hover .shopBt {
          border: 1px #d8c5b0 solid;
          color: #d8c5b0;
        }
        .popularContent2 {
          height: 43px;
          padding: 4px 0;
          border-bottom: 1px #dadada dashed;
          // background: chartreuse;
          display: flex;
          position: relative;
          .pop_num {
            font: 14px Helvetica, Arial, sans-serif;
            width: 20px;
            height: 22px;
          }
          .pop_title {
            width: 223px;
            height: 66px;
            a {
              color: #3377aa;
              font: 14px Helvetica, Arial, sans-serif;
              cursor: pointer;
            }
            div {
              color: #666666;
              font: 13px Helvetica, Arial, sans-serif;
            }
          }
          .shopBt {
            position: absolute;
            // left: -5px;
            right: 5px;
            top: 10px;
            padding: 6px 8px;
            span {
              font-size: 13px;
            }
          }
        }
        .popularContent2:hover {
          background: #f9f9f6;
        }
        .popularContent2:hover .shopBt {
          border: 1px #d8c5b0 solid;
          color: #d8c5b0;
        }
      }
    }
    // 豆瓣图书250
    .douBanBooks250 {
      height: 568px;
      margin-bottom: 20px;
      // background: chartreuse;
      .douBanBooks250Top {
        border-bottom: 1px #dddddd solid;
        padding-bottom: 3px;
        margin-bottom: 16px;
        h2 {
          span {
            font: 18px Arial, Helvetica, sans-serif;
            font-weight: bold;
          }
          .linMore {
            padding-left: 10px;
            font: 13px Arial, Helvetica, sans-serif;
            line-height: 150%;
            color: #3377aa !important;
          }
        }
      }
      .douBanBooks250Bottom {
        width: 323px;
        height: 524px;
        // background: chocolate;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .adouBanBooks250Info {
          width: 85px;
          height: 151px;
          // background: cornflowerblue;
          margin: 0 22px 10px 0;
          .booksImg {
            a {
              img {
                width: 85px;
                height: 127px;
              }
            }
          }
          .booksTitle {
            width: 85px;
            height: 21px;
            padding-top: 3px;
            text-align: center;
            a {
              span {
                font-size: 13px;
                color: #3377aa;
              }
            }
          }
        }
        .adouBanBooks250Info2 {
          width: 85px;
          height: 172px;
          // background: cornflowerblue;
          margin: 0 22px 10px 0;
          .booksImg {
            a {
              img {
                width: 85px;
                height: 127px;
              }
            }
          }
          .booksTitle {
            width: 85px;
            height: 45px;
            padding-top: 3px;
            text-align: center;
            position: relative;
            a {
              span {
                font-size: 13px;
                color: #3377aa;
              }
            }
            p {
              position: absolute;
              top: 25px;
              width: 85px;
              height: 21px;
              text-align: center;
              span {
                padding: 2px 3px;
                background: #a1a1a1;
                color: #ffffff;
                font-size: 13px;
              }
            }
          }
        }
      }
    }
  }
}
</style>