<template>
  <div>
    <!-- 版心 -->
    <div class="container">
      <!-- 全部商品展示区 -->
      <div class="allShop">
        <div class="title">
          全部商品
        </div>
        <div class="shopShow">
          <ul v-if="allShopData">
            <li
              class="shopItem"
              v-for="(shopItem, index) in allShopData.products"
              :key="shopItem.id"
            >
              <img :src="shopItem.activity_image" />
              <h4>{{ shopItem.title }}</h4>
              <p>{{ shopItem.desc }}</p>
              <div class="price">
                <span :class="{space: shopItem.price === shopItem.promote_price}" class="price1">¥{{ shopItem.promote_price }}</span>
                <span v-if='shopItem.price !== shopItem.promote_price' class="price2">¥{{ shopItem.price }}</span>
                <span class="price3">{{ shopItem.tags[0] }}</span>
                <span v-if='shopItem.tags[1]' class="price3">{{ shopItem.tags[1] }}</span>
              </div>
            </li>
            <!-- <li class="shopItem">
              <img src="./images/ia_200000003.jpg" alt="">
              <h4>豆猫卫衣</h4>
              <p>厚毛圈面料,柔软舒适</p>
              <div class="price">
                <span class="price1">¥168</span>
                <span class="price2">¥198</span>
                <span class="price3">立减30元</span>
                <span class="price4">满150减30</span>
            </div>
          </li> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllShopDataList } from "@/api/doupin";
export default {
  name: "Allshop",
  data() {
    return {
      allShopData: [],
    };
  },
  mounted() {
    this.getAllShopDataList();
  },
  methods: {
    async getAllShopDataList() {
      let result = await getAllShopDataList();
      console.log(result);
      this.allShopData = result.data;
      console.log(this.allShopData);
    },
  },
};
</script>

<style lang="less" scoped>
// 版心
.container {
  margin: 0 auto;
  width: 1100px;
  // 全部商品展示区
  .allShop {
    .title {
      margin-bottom: 60px;
      font-size: 27px;
      text-align: center;
      font-weight: 600;
    }
    .shopShow {
      ul {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        .shopItem {
          margin-bottom: 20px;
          img {
            width: 260px;
            height: 260px;
          }

          h4 {
            color: #3e3a39;
            font-size: 16px;
            font-weight: 500;
          }

          p {
            color: #ababac;
            font-size: 14px;
          }

          .price {
            .price1 {
              color: #dd1944;
              font-size: 16px;
            }
            .space{
              
              margin-right: 10px;
            }

            .price2 {
              margin-left: 3px;
              color: #ababac;
              font-size: 13px;
              text-decoration: line-through;
              padding-right: 10px;
            }

            .price3,
            .price4 {
              padding: 1px 4px;
              margin-right: 3px;
              color: #dd1944;
              font-size: 12px;
              background-color: #fbe8ec;
            }
          }
        }
      }
    }
  }
}
</style>
