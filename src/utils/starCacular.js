const cacularStar = (num) => {
  let perMark = 0.5 //每分0.5颗星 5/10
  let starCount = num * perMark 

  //计算最终星星的个数
  /**
   * 4.3 - 0.5 < 4
   * 4.5 - 0.5 >= 4
   */
  if(starCount - 0.5 <= Math.floor(starCount) && starCount -0.5 > Math.floor(starCount-0.5) + 0.5) {
    starCount = Math.floor(starCount) * 2 + 1
  }else {
    starCount = Math.ceil(starCount) * 2
  }

  return starCount
}

export default cacularStar