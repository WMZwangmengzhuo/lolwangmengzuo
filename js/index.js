var a = document.querySelectorAll("a");
var body = document.documentElement;



body.onclick = function (e) {
  let tar = e.target;
  if (tar.tagName === "A") {
    e.preventDefault();
  }
};


(function () {
  let JPromoBox = document.getElementById("J_promo");
  let PromoImgList = document.querySelector(".promo-img-list");//要移动的容器
  // let titleList = null;
  let w = JPromoBox.offsetWidth;//每张图片的宽度
  let step = 0;//步长
  let count = 6;//图片的个数
  let timer = null;//定时器

  let titleList = document.querySelectorAll(".title")



  function autoPlay() {//自动轮播

    step++;
    if (step > count - 1) {

      PromoImgList.style.transitionDuration = "0s";
      PromoImgList.style.left = "0";
      PromoImgList.offsetWidth;//更新队列--->设置不会更新队列，输出元素属性会更新队列
      PromoImgList.style.transitionDuration = "0.3s";//重新开启动画
      step = 1;

    }

    PromoImgList.style.left = `-${w * step}px`;
    criclefocus()
  }
  timer = setInterval(autoPlay, 3000)

  JPromoBox.onmouseenter = function () {
    clearInterval(timer)
    timer = null;
  }
  JPromoBox.onmouseleave = function () {
    timer = setInterval(autoPlay, 3000)
  }


  //小圆点获取焦点
  function criclefocus() {
    // console.log("1");

    let temp = step;//0,1,2,3
    if (temp == count - 1) {
      temp = 0;//0，1，2，0
    }
    titleList.forEach((item, index) => {//index 0,1,2
      if (index == temp) {
        item.classList.add("selected");
      } else {
        item.classList.remove("selected");
      }
    })
  }



  // 点击事件委托：将绑定事件的方法委托给祖先元素，减少时间的绑定，提升性能
  JPromoBox.onmousemove = function (e) {
    // console.log(e.targets);
    //目标元素的标签名 大写
    if (e.target.tagName === "SPAN") {
      // console.log("小圆点");
      let index = e.target.getAttribute("index");
      if (step == index || (step == count - 1 && index == 0)) return;
      step = index;
      PromoImgList.style.left = `-${step * w}px`;
      criclefocus()
    }


  }





})()

//顶部搜索点击效果
let searchHoverWrap = document.querySelector(".search-hover-wrap");
body.onclick = function (e) {
  if (e.target.className.includes("head-right-search")) {
    searchHoverWrap.classList.add("show");
  }
  if (e.target.className.includes("icon-xx-1")) {
    searchHoverWrap.classList.remove("show");
  }



}




let partTabTitle = document.querySelector(".part-tab-title");
let partTabTitleLiList = partTabTitle.querySelectorAll(".part-tab-title-li");

let newTabContent = document.querySelector(".new-tab-content");
let newTabContentUlList = document.querySelectorAll(".new-tab-content ul");

const changeTab = function changeTab(index) {
  for (let i = 0; i < partTabTitleLiList.length; i++) {
    partTabTitleLiList[i].classList.remove('selected');
    newTabContentUlList[i].classList.remove('selected');
  }
  partTabTitleLiList[index].classList.add('selected');
  newTabContentUlList[index].classList.add('selected');
}

for (let i = 0; i < newTabContentUlList.length; i++) {
  let item = partTabTitleLiList[i];
  item.index = i;
  item.onmouseenter = function () {
    changeTab(this.index);
  }
}


//综合 选项卡2

let partTabTitleLiList2 = document.querySelectorAll(".m-actpart-tab-title-li");
// console.log(partTabTitleLiList2);


let mActListUlList = document.querySelectorAll(".m-act-list-ul");
// console.log(mActListUlList);

const changeTab2 = function changeTab2(index) {
  for (let i = 0; i < partTabTitleLiList2.length; i++) {
    partTabTitleLiList2[i].classList.remove('selected');
    mActListUlList[i].classList.remove('selected');
  }
  partTabTitleLiList2[index].classList.add('selected');
  mActListUlList[index].classList.add('selected');
}
for (let i = 0; i < mActListUlList.length; i++) {
  let item = partTabTitleLiList2[i];
  item.index = i;
  item.onmousemove = function () {
    changeTab2(this.index);
  }
}
//综合 选项卡3

let partTabTitleLiList3 = document.querySelectorAll(".video-part-tab-title");
// console.log(partTabTitleLiList3);


let freshVideoContent = document.querySelectorAll(".fresh-video-content");
// console.log(freshVideoContent);

const changeTab3 = function changeTab3(index) {
  for (let i = 0; i < partTabTitleLiList3.length; i++) {
    partTabTitleLiList3[i].classList.remove('selected');
    freshVideoContent[i].classList.remove('selected');
  }
  partTabTitleLiList3[index].classList.add('selected');
  freshVideoContent[index].classList.add('selected');
}
for (let i = 0; i < freshVideoContent.length; i++) {
  let item = partTabTitleLiList3[i];
  item.index = i;
  item.onmousemove = function () {
    changeTab3(this.index);
  }
}

//赛事 选项卡4

let partTabTitleRaceLi = document.querySelectorAll(".part-tab-title-race-li");
// console.log(partTabTitleRaceLi);


let matchShow = document.querySelectorAll(".match-show");
// console.log(matchShow);

const changeTab4 = function changeTab4(index) {
  for (let i = 0; i < partTabTitleRaceLi.length; i++) {
    partTabTitleRaceLi[i].classList.remove('selected');
    matchShow[i].classList.remove('match-show-selected');
  }
  partTabTitleRaceLi[index].classList.add('selected');
  matchShow[index].classList.add('match-show-selected');
}
for (let i = 0; i < matchShow.length; i++) {
  let item = partTabTitleRaceLi[i];
  item.index = i;
  item.onmousemove = function () {
    changeTab4(this.index);
  }
}




let moreArrow = document.querySelectorAll('.more-arrow');
let herfType1 = document.querySelectorAll(".herf-type-1");

let iconKh = document.querySelector(".icon-kh");
let iconFhcx = document.querySelector(".icon-fhcx");
let iconYxzl = document.querySelector(".icon-yxzl");
let iconXgzd = document.querySelector(".icon-xgzd");
let iconTft = document.querySelector(".icon-tft");
let icon101 = document.querySelector(".icon-101");
let iconYz = document.querySelector(".icon-yz");
let iconWxbd = document.querySelector(".icon-wxbd");

let moreArrow22 = document.querySelector(".more-arrow-2");

let moreArrow11 = document.querySelector(".more-arrow-1");


//小图标
let mGamefuncNav = document.querySelector(".m-gamefunc-nav");
mGamefuncNav.onmouseover = function (e) {
  function heartBeat(tapClass, tapNav) {
    if (e.target.className.includes(tapClass)) {
      tapNav.classList.add('animate__animated', 'animate__heartBeat');
    }
  }
  heartBeat("herfType11", iconKh);
  heartBeat("herfType12", iconFhcx);
  heartBeat("herfType13", iconYxzl);
  heartBeat("herfType14", iconXgzd);
  heartBeat("herfType15", iconTft);
  heartBeat("herfType16", icon101);
  heartBeat("herfType17", iconYz);
  heartBeat("herfType18", iconWxbd);
}
mGamefuncNav.onmouseout = function (e) {
  function heartBeatRemove(tapClass, tapNav) {
    if (e.target.className.includes(tapClass)) {
      tapNav.classList.remove('animate__animated', 'animate__heartBeat');
    }
  }
  heartBeatRemove("herfType11", iconKh);
  heartBeatRemove("herfType12", iconFhcx);
  heartBeatRemove("herfType13", iconYxzl);
  heartBeatRemove("herfType14", iconXgzd);
  heartBeatRemove("herfType15", iconTft);
  heartBeatRemove("herfType16", icon101);
  heartBeatRemove("herfType17", iconYz);
  heartBeatRemove("herfType18", iconWxbd);
}
//小箭头1
let btnMorenews = document.querySelector(".btn-morenews");
btnMorenews.onmouseover = function (e) {
  if (e.target.className.includes("btn-morenews")) {
    moreArrow[0].classList.add('animate__animated', 'animate__headShake');
  }
}
//小箭头2
let herfMore = document.querySelector(".herf-more");
herfMore.onmouseover = function (e) {
  if (e.target.className.includes("herf-more")) {
    moreArrow[1].classList.add('animate__animated', 'animate__headShake');
  }
}
//新英雄小箭头
let innerHoverHref = document.querySelector(".inner-hover-href");
innerHoverHref.onmouseover = function (e) {
  if (e.target.className.includes("inner-hover-href")) {
    moreArrow22.classList.add('animate__animated', 'animate__headShake');
  }
}

////新英雄小箭头效果重制
moreArrow22.addEventListener('animationend', () => {
  moreArrow22.classList.remove('animate__animated', 'animate__headShake');
});
//周免小箭头
let weekFreeA = document.querySelector(".week-free-a");
weekFreeA.onmouseover = function () {

  moreArrow11.classList.add('animate__animated', 'animate__headShake');

}

////周免小箭头效果重制
moreArrow11.addEventListener('animationend', () => {
  moreArrow11.classList.remove('animate__animated', 'animate__headShake');
});

//视频箭头
// let partTabTitleVideo = document.querySelector(".part-tab-title");
let herfMoreVideo = document.querySelector(".m-fresh-video .part-top-tab .herf-more");


let moreArrowViedeo = document.querySelector(".m-fresh-video .part-top-tab .more-arrow");


herfMoreVideo.onmouseover = function () {
  moreArrowViedeo.classList.add('animate__animated', 'animate__headShake');
}
moreArrowViedeo.addEventListener('animationend', () => {
  moreArrowViedeo.classList.remove('animate__animated', 'animate__headShake');
});


//赛事箭头
let herfMoreRace = document.querySelector(".g-wrap-match .part-top-tab .herf-more");
let moreArrowRace = document.querySelector(".g-wrap-match .part-top-tab .herf-more .more-arrow");
herfMoreRace.onmouseover = function () {
  moreArrowRace.classList.add('animate__animated', 'animate__headShake');
}
moreArrowRace.addEventListener('animationend', () => {
  moreArrowRace.classList.remove('animate__animated', 'animate__headShake');
});

//英雄箭头
let herfMoreHero = document.querySelector(".g-wrap-championlist .g-wrap .part-top-tab .herf-more");


let moreArrowHero = document.querySelector(".g-wrap-championlist .g-wrap .part-top-tab .herf-more .more-arrow");
herfMoreHero.onmouseover = function () {
  moreArrowHero.classList.add('animate__animated', 'animate__headShake');
}
moreArrowHero.addEventListener('animationend', () => {
  moreArrowHero.classList.remove('animate__animated', 'animate__headShake');
});

//小箭投 重制
for (let i = 0; i < moreArrow.length; i++) {
  moreArrow[i].addEventListener('animationend', () => {
    moreArrow[i].classList.remove('animate__animated', 'animate__headShake');
  });
}




let mNewSkinOne = document.querySelector(".m-new-skin-one");
let mMoreSkin = document.querySelector(".m-more-skin");
let innerhoverOut = document.querySelector(".innerhover-out");
mMoreSkin.onmouseover = function () {
  mMoreSkin.classList.add("show");
  innerhoverOut.classList.add("showout");
  // innerhoverOut.style.display = "block";
}
innerhoverOut.onmouseover = function () {
  mMoreSkin.classList.add("show");
  // innerhoverOut.classList.add("show");
  // innerhoverOut.style.display = "block";
}
mMoreSkin.onmouseleave = function () {
  mMoreSkin.classList.remove("show");
  innerhoverOut.classList.remove("showout");
  // innerhoverOut.style.display = "none";
}
innerhoverOut.onmouseleave = function () {
  mMoreSkin.classList.remove("show");
  // innerhoverOut.classList.remove("show");
  // innerhoverOut.style.display = "none";

}


mNewSkinOne.onmouseover = function () {
  innerhoverOut.classList.add("showout");
}
mNewSkinOne.onmouseout = function () {
  innerhoverOut.classList.remove("showout");
}


//积分滑动
// let mChampionListContainer=document.querySelector(".m-champion-list-container");

// let swiperScrollbarDrag = document.querySelector(".g-zoombox .m-champion-list-container .scrollbar .swiper-scrollbar-drag");
let swiperScrollbarDragInt = document.querySelector("#LPL_R_score_rank_container_190_1 > div.scrollbar > div");
let scoreRankListContainerInt = document.querySelector("#LPL_R_score_rank_container_190_1");
let swiperWrapperInt = document.querySelector("#LPL_R_score_rank_container_190_1 > div.swiper-wrapper");




let startY2, endY2, resY2, swiperScrollbarDragIntTop;

// let swiperSlide = document.querySelector(".swiper-slide");



// let maxY = 307;
let maxY2 = 179;
swiperScrollbarDragInt.onmousedown = function (e) {
  startY2 = e.pageY;
  swiperScrollbarDragIntTop = parseInt(getComputedStyle(swiperScrollbarDragInt)['top']);
  window.addEventListener("mousemove", move2);
  window.addEventListener("mouseup", up2);

}
function move2(e) {
  e.preventDefault();
  endY2 = e.pageY;


  resY2 = endY2 - startY2 + swiperScrollbarDragIntTop;
  if (resY2 > maxY2) {
    resY2 = maxY2;
  }
  if (resY2 < 0) {
    resY2 = 0;
  }


  swiperScrollbarDragInt.style.top = resY2 + "px";

  let swiY = 276 / 98 * resY2;

  swiperWrapperInt.style.top = -swiY + "px";

}
function up2() {
  window.removeEventListener("mousemove", move2);
  window.removeEventListener("mouseup", up2);
}

//底部英雄滑动栏
// let mChampionListContainer=document.querySelector(".m-champion-list-container");
let scrollbar = document.querySelector(".scrollbar");
let swiperScrollbarDrag = document.querySelector(".g-zoombox .m-champion-list-container .scrollbar .swiper-scrollbar-drag");

// console.log(swiperScrollbarDrag);

let mChampionListContainer = document.querySelector(".m-champion-list-container");
let mChampionListWrapper = document.querySelector(".m-champion-list-wrapper");
let startY, endY, resY, swiperScrollbarDragTop;

let swiperSlide = document.querySelector(".swiper-slide");



let maxY = 307;
swiperScrollbarDrag.onmousedown = function (e) {
  startY = e.pageY;
  // let top = parseInt( swiperScrollbarDrag.style.top);
  // console.log(top);
  swiperScrollbarDragTop = parseInt(getComputedStyle(swiperScrollbarDrag)['top']);
  // console.log(swiperScrollbarDragTop);



  window.addEventListener("mousemove", move);
  window.addEventListener("mouseup", up);
}
function move(e) {
  e.preventDefault();
  endY = e.pageY;


  resY = endY - startY + swiperScrollbarDragTop;
  if (resY > maxY) {
    resY = maxY;
  }
  if (resY < 0) {
    resY = 0;
  }

  // console.log(endY-startY);
  // console.log(resY);

  swiperScrollbarDrag.style.top = resY + "px";
  // let swiY=scrollbar.clientHeight/mChampionListWrapper.clientHeight*resY;
  let swiY = 438 / 131 * resY;
  // console.log(swiY);
  mChampionListWrapper.style.top = -swiY + "px";

}
function up() {
  window.removeEventListener("mousemove", move);
  window.removeEventListener("mouseup", up);
}


//侧边绑定scroll
let gIndexWrap1 = document.querySelector(".g-index-wrap1");
let gWrapVp = document.querySelector(".g-wrap-vp");
let gWrapMatch = document.querySelector(".g-wrap-match");
let gWrapChampionlist = document.querySelector(".g-wrap-championlist");



let rnRmhd = document.querySelector(".rn-rmhd");
let rnRmhdI = document.querySelector(".rn-rmhd i");
let rnSpzx = document.querySelector(".rn-spzx");
let rnSpzxI = document.querySelector(".rn-spzx i");
let rnSszx = document.querySelector(".rn-sszx");
let rnSszxI = document.querySelector(".rn-sszx i");
let rnYxtj = document.querySelector(".rn-yxtj");
let rnYxtjI = document.querySelector(".rn-yxtj i");

function judge() {
  let gIndexWrap1Y = gIndexWrap1.getBoundingClientRect().top;
  let gWrapVpY = gWrapVp.getBoundingClientRect().top;
  let gWrapMatchY = gWrapMatch.getBoundingClientRect().top;
  let gWrapChampionlistY = gWrapChampionlist.getBoundingClientRect().top;

  // console.log(gWrapChampionlistY);
  if (gIndexWrap1Y < 0) {
    rnRmhd.classList.add("right-rn-rmhd-selected");
    // rnRmhdI.classList.add('animate__animated', 'animate__bounce');
  }
  if (gIndexWrap1Y < -840 || gIndexWrap1Y > 0) {
    rnRmhd.classList.remove("right-rn-rmhd-selected");
    // rnRmhdI.classList.remove('animate__animated', 'animate__bounce');

  }

  if (gIndexWrap1Y < -840 || gWrapVpY < 310) {
    rnSpzx.classList.add("right-rn-spzx-selected");
    // rnSpzxI.classList.add('animate__animated', 'animate__bounce');

  }
  if (gWrapVpY < -340 || gWrapVpY > 310) {
    rnSpzx.classList.remove("right-rn-spzx-selected");
    // rnSpzxI.classList.remove('animate__animated', 'animate__bounce');
  }

  if (gWrapVpY < -340) {
    rnSszx.classList.add("right-rn-rn-sszx-selected");
    // rnSszxI.classList.add('animate__animated', 'animate__bounce');
  }
  if (gWrapMatchY < -340 || gWrapVpY > -340) {
    rnSszx.classList.remove("right-rn-rn-sszx-selected");
    // rnSszxI.classList.remove('animate__animated', 'animate__bounce');
  }

  if (gWrapMatchY < -340) {
    rnYxtj.classList.add("right-rn-yxtj-selected");
    // rnYxtjI.classList.add('animate__animated', 'animate__bounce');
  }
  if (gWrapMatchY > -340) {
    rnYxtj.classList.remove("right-rn-yxtj-selected");
    // rnYxtjI.classList.remove('animate__animated', 'animate__bounce');
  }




  // window.removeEventListener("scroll", judge);

}


const throttle = function throttle(func, wait) {
  if (typeof func !== "function") throw new TypeError('func must be an function');
  if (typeof wait !== "number") wait = 300;
  let timer,
    previous = 0;
  return function proxy(...params) {
    let now = +new Date(),
      remaining = wait - (now - previous),
      self = this,
      result;
    if (remaining <= 0) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      result = func.call(self, ...params);
      previous = now;
    } else if (!timer) {
      timer = setTimeout(() => {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        result = func.call(self, ...params);
        previous = +new Date();
      }, remaining);
    }
    return result;
  };
};

window.onscroll = throttle(judge, 300);


//渲染英雄




let heroList = document.getElementById("heroList");
(function () {
  axios
    .get('./data.json')
    .then((response) => {
      return response.data
    })
    .then((value) => {
      render(value);
    })
    .catch((err) => {
      console.log(err)
    });

  

  function render(data) {
    //选项卡
    let heroPartTabTitleLi = document.querySelectorAll(".hero-part-tab-title-li");

    for (let i = 0; i < heroPartTabTitleLi.length; i++) {

      heroPartTabTitleLi[i].onclick = function () {
        // getComputedStyle(swiperScrollbarDrag)['top'] = 0;
        swiperScrollbarDrag.style.top = 0;
        mChampionListWrapper.style.top = 0;
        if (i === 0) {


          let dataTank = [];
          data[0].hero.forEach(ele => {

            dataTank.push(ele);
            let strHero = "";
            dataTank.forEach(item => {
              let { dataTags, img, alt, a } = item;
              strHero += `<li class="champion-item" data-tags=${dataTags} >
          <img src=${img} width="66" height="66" alt=${alt}>
          <i class="hover-icon"></i>
          <p>${alt}</p>
          <a target="_blank"
            href=${a}
            class="herf-mask" title="${alt}"></a>
            </li>`;
            });
            heroList.innerHTML = strHero;

          });

        }
        if (i === 1) {
          let dataTank = [];
          data[0].hero.forEach(ele => {
            if (ele.dataTags.includes("fighter")) {

              dataTank.push(ele);
              let strHero = "";
              dataTank.forEach(item => {
                let { dataTags, img, alt, a } = item;
                strHero += `<li class="champion-item" data-tags=${dataTags} >
          <img src=${img} width="66" height="66" alt=${alt}>
          <i class="hover-icon"></i>
          <p>${alt}</p>
          <a target="_blank"
            href=${a}
            class="herf-mask" title="${alt}"></a>
            </li>`;
              });
              heroList.innerHTML = strHero;
            }
          });
        }
        if (i === 2) {
          let dataTank = [];
          data[0].hero.forEach(ele => {
            if (ele.dataTags.includes("mage")) {

              dataTank.push(ele);
              let strHero = "";
              dataTank.forEach(item => {
                let { dataTags, img, alt, a } = item;
                strHero += `<li class="champion-item" data-tags=${dataTags} >
          <img src=${img} width="66" height="66" alt=${alt}>
          <i class="hover-icon"></i>
          <p>${alt}</p>
          <a target="_blank"
            href=${a}
            class="herf-mask" title="${alt}"></a>
            </li>`;
              });
              heroList.innerHTML = strHero;
            }
          });
        }
        if (i === 3) {
          let dataTank = [];
          data[0].hero.forEach(ele => {
            if (ele.dataTags.includes("assassin")) {

              dataTank.push(ele);
              let strHero = "";
              dataTank.forEach(item => {
                let { dataTags, img, alt, a } = item;
                strHero += `<li class="champion-item" data-tags=${dataTags} >
          <img src=${img} width="66" height="66" alt=${alt}>
          <i class="hover-icon"></i>
          <p>${alt}</p>
          <a target="_blank"
            href=${a}
            class="herf-mask" title="${alt}"></a>
            </li>`;
              });
              heroList.innerHTML = strHero;
            }
          });
        }
        if (i === 4) {
          let dataTank = [];
          data[0].hero.forEach(ele => {
            if (ele.dataTags.includes("tank")) {

              dataTank.push(ele);
              let strHero = "";
              dataTank.forEach(item => {
                let { dataTags, img, alt, a } = item;
                strHero += `<li class="champion-item" data-tags=${dataTags} >
          <img src=${img} width="66" height="66" alt=${alt}>
          <i class="hover-icon"></i>
          <p>${alt}</p>
          <a target="_blank"
            href=${a}
            class="herf-mask" title="${alt}"></a>
            </li>`;
              });
              heroList.innerHTML = strHero;
            }
          });
        }
        if (i === 5) {
          let dataTank = [];
          data[0].hero.forEach(ele => {
            if (ele.dataTags.includes("marksman")) {

              dataTank.push(ele);
              let strHero = "";
              dataTank.forEach(item => {
                let { dataTags, img, alt, a } = item;
                strHero += `<li class="champion-item" data-tags=${dataTags} >
          <img src=${img} width="66" height="66" alt=${alt}>
          <i class="hover-icon"></i>
          <p>${alt}</p>
          <a target="_blank"
            href=${a}
            class="herf-mask" title="${alt}"></a>
            </li>`;
              });
              heroList.innerHTML = strHero;
            }
          });
        }
        if (i === 6) {
          let dataTank = [];
          data[0].hero.forEach(ele => {
            if (ele.dataTags.includes("support")) {

              dataTank.push(ele);
              let strHero = "";
              dataTank.forEach(item => {
                let { dataTags, img, alt, a } = item;
                strHero += `<li class="champion-item" data-tags=${dataTags} >
                <img src=${img} width="66" height="66" alt=${alt}>
                <i class="hover-icon"></i>
                <p>${alt}</p>
                <a target="_blank"
                href=${a}
                class="herf-mask" title="${alt}"></a>
                </li>`;
              });
              heroList.innerHTML = strHero;
            }
          });
        }
        for (let i = 0; i < heroPartTabTitleLi.length; i++) {
          heroPartTabTitleLi[i].classList.remove('selected');
        }
        heroPartTabTitleLi[i].classList.add('selected');

      }


    }


    //选项卡结束
    // console.log(data[0].hero);
    //  console.log(dataTank);

    let strHero = "";
    data[0].hero.forEach(item => {
      let { dataTags, img, alt, a } = item;
      strHero += `<li class="champion-item" data-tags=${dataTags} >
              <img src=${img} width="66" height="66" alt=${alt}>
              <i class="hover-icon"></i>
              <p>${alt}</p>
              <a target="_blank"
                href=${a}
                class="herf-mask" title="${alt}"></a>
                </li>`;
    });

    heroList.innerHTML = strHero;
    let championItem = document.querySelectorAll(".champion-item");
    // console.log(championItem);

  }







})()