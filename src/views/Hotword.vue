<template>
  <Header />
  <Search />
  <div class="container">
    <el-main>
      <div class="left">
        <div class="top">
          <el-icon :size="30"><CollectionTag /></el-icon>来源
        </div>
        <div class="conetent">
          <el-tree :data="Treedata" show-checkbox />
        </div>
      </div>
      <div class="mid">
        <div class="top">
          <el-icon :size="30"><Collection /></el-icon>
          科普简介
        </div>
        <h2>型血管</h2>
        <p>
          <span class="title">英文名:</span
          ><span class="content">aaaaaaaaaaaaaaaaaaaa</span>
        </p>
        <p>
          <span class="title">英文名:</span><span class="content">内容</span>
        </p>
        <p>
          <span class="title">科普:</span
          ><span class="introduction"
            >哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</span
          >
        </p>
        <el-divider content-position="left"><h3>相关文献</h3></el-divider>
        <div class="page">
          <div class="page-list">
            <div class="page-list-top">
              <div>
                共找到<span class="page-num">{{ PageList.length }}</span
                >条结果
              </div>
            </div>
            <div class="page-list-content">
              <div
                class="page-list-item"
                v-for="item in PageList"
                :key="item.id"
              >
                <div class="item-tit">
                  <h1>
                    <a :href="item.link">{{ item.title }}</a>
                  </h1>
                </div>
                <div class="item-name">
                  作者: <span>{{ item.totalauthorname }}</span>
                  <div class="tag">
                    <el-tag v-for="(info, i) in AuthorInfo" :key="i">{{
                      info
                    }}</el-tag>
                  </div>
                </div>
                <div class="item-content">
                  摘要:
                  <span>{{ item.abstract }}</span>
                </div>
                <div class="item-words" v-if="item.keywords">
                  <el-tag
                    effect="dark"
                    
                    v-for="(words, i) in item.keywords"
                    :key="i"
                    round
                    >{{ words }}</el-tag
                  >
                </div>
              </div>
            </div>
          </div>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000"
            :page-size="10"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
      <div class="right">
        <div class="right-box">
          <div class="top">
            <div class="tit">热搜词云</div>
            <el-icon :size="20" @click="HandledialogVisible()"
              ><ZoomIn
            /></el-icon>
            <el-dialog
              v-model="dialogVisible"
              title="热搜词云"
              center
              destroy-on-close
            >
              <div id="wordDialog"></div>
            </el-dialog>
          </div>
          <div id="charts"></div>
        </div>
        <div class="right-box">
          <div class="top">
            <div class="tit">关系图谱</div>
            <el-icon :size="20" @click="dialogVisible1 = true"
              ><ZoomIn
            /></el-icon>
            <el-dialog v-model="dialogVisible1" title="关系图谱" center>
              <v-chart
                :option="option"
                class="chart"
                autoresize="true"
              ></v-chart>
            </el-dialog>
          </div>
          <v-chart :option="option" class="chart" autoresize></v-chart>
        </div>
      </div>
    </el-main>
  </div>

  <el-backtop :right="10" :bottom="70" />
</template>

<script setup>
import {
  ref,
  onMounted,
  nextTick,
  onBeforeMount,
  watch,
  watchEffect,
} from "vue";
import Header from "@/components/Layout/Header.vue";
import Search from "@/components/Layout/Search.vue";
import {
  Collection,
  CollectionTag,
  Watch,
  ZoomIn,
} from "@element-plus/icons-vue";
import { WordCloud } from "@antv/g2plot";
import { GetPageList } from "@/api/search";
import router from "@/router";
const dialogVisible = ref(false);
const dialogVisible1 = ref(false);
const PageList = ref([
  {
    title: "实山资去合世海",
    keywords: ["定", "温", "海", "就"],
    link: "http://ykhhsotxpl.cc/xtvqrgvo",
    totalauthorname: "贺明",
    abstract:
      "想需广织及比千不部解合原造南。意压门多备行身把想经中拉联使力保哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈。命被即九济格受眼石联色法影即这别。全四心越定最民便命民月程火向见。无北级质复九级手深照着存作由据你。资道看术百你应关图式验越求布。",
  },
  {
    title: "务于我只会水",
    keywords: ["马", "况", "千"],
    link: "http://kknqk.za/sidy",
    totalauthorname: "龙刚",
    abstract:
      "究分设往又石节装时信究合增回定少海。军白适质毛万子务记能需统严。哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈求约住史他号严政多会万专给九思分。白深其向已次手放置须习选铁。身发被来分节向得相争采代住住的深。段保说放结清属正青世率交她又对率将。",
  },
]);
const Treedata = [
  {
    label: "Nature",
  },
  {
    label: "Science",
  },
  {
    label: "Cell",
  },
  {
    label: "The Lancet",
  },
  {
    label: "Cell Research",
  },
  {
    label: "Science Bulletin",
  },
];
const WordData = ref(null);

const HandledialogVisible = () => {
  console.log(dialogVisible.value);
  dialogVisible.value = true;
  nextTick(() => {
    const wordCloud1 = new WordCloud("wordDialog", {
      data: WordData.value,
      wordField: "name",
      weightField: "value",
      colorField: "name",
      wordStyle: {
        fontFamily: "Verdana",
        fontSize: [8, 32],
        rotation: 0,
      },
      random: () => 0.5,
    });

    wordCloud1.render();
  });
};
fetch("http://127.0.0.1:4523/mock/1014620/scroll")
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    WordData.value = res.data;
    console.log(WordData.value);
    const wordCloud = new WordCloud("charts", {
      data: WordData.value,
      wordField: "name",
      weightField: "value",
      colorField: "name",
      wordStyle: {
        fontFamily: "Verdana",
        fontSize: [8, 32],
        rotation: 0,
      },
      random: () => 0.5,
    });
    wordCloud.render();
  });
const getPageList = () => {
  console.log(router.param);
  GetPageList(router.param).then((res) => {
    console.log(res);
    PageList.value = res;
  });
};
// watch(router.param,(param,Old)=>{
//   console.log("路有变化");
//   getPageList();
// })
onBeforeMount(() => {
  getPageList();
  console.log("页面初始化成功");
});

//关系图
const option = ref({
  tooltip: {},
  animationDurationUpdate: 1500,
  animationEasingUpdate: "quinticInOut",
  color: ["#83e0ff", "#45f5ce", "#b158ff"],
  series: [
    {
      type: "graph",
      layout: "force",
      force: {
        repulsion: 150,
        edgeLength: 50,
      },
      roam: false,
      label: {
        normal: {
          show: true,
        },
      },
      data: [
        {
          name: "校园大数据",
          symbolSize: 30,
          draggable: true,
          category: 0,
          itemStyle: {
            normal: {
              borderColor: "#04f2a7",
              borderWidth: 6,
              shadowBlur: 20,
              shadowColor: "#04f2a7",
              color: "#001c43",
            },
          },
        },
        {
          name: "舆情大数据",
          symbolSize: 10,
          itemStyle: {
            normal: {
              borderColor: "#04f2a7",
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: "#04f2a7",
              color: "#001c43",
            },
          },
          category: 1,
        },
        {
          name: "用户分析",
          symbolSize: 20,
          category: 1,
          itemStyle: {
            normal: {
              borderColor: "#04f2a7",
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: "#04f2a7",
              color: "#001c43",
            },
          },
        },
        {
          name: "话题分析",
          symbolSize: 30,
          category: 1,
          itemStyle: {
            normal: {
              borderColor: "#82dffe",
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: "#04f2a7",
              color: "#001c43",
            },
          },
        },
        {
          name: "评论分析",
          symbolSize: 40,
          category: 1,
          itemStyle: {
            normal: {
              borderColor: "#82dffe",
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: "#04f2a7",
              color: "#001c43",
            },
          },
        },
        {
          name: "图书馆分析",
          symbolSize: 50,
          category: 2,
          itemStyle: {
            normal: {
              borderColor: "#82dffe",
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: "#04f2a7",
              color: "#001c43",
            },
          },
        },
        {
          name: "借阅分析",
          symbolSize: 40,
          category: 2,
          itemStyle: {
            normal: {
              borderColor: "#b457ff",
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: "#b457ff",
              color: "#001c43",
            },
          },
        },
        {
          name: "借阅排行",
          symbolSize: 40,
          itemStyle: {
            normal: {
              borderColor: "#82dffe",
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: "#04f2a7",
              color: "#001c43",
            },
          },
          category: 2,
        },
        {
          name: "图书收录",
          symbolSize: 40,
          itemStyle: {
            normal: {
              borderColor: "#82dffe",
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: "#04f2a7",
              color: "#001c43",
            },
          },
          category: 2,
        },
        {
          name: "图书分析",
          symbolSize: 50,
          category: 2,
          itemStyle: {
            normal: {
              borderColor: "#82dffe",
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: "#04f2a7",
              color: "#001c43",
            },
          },
        },
      ],
      links: [
        {
          source: "校园大数据",
          target: "舆情大数据",
        },
        {
          source: "校园大数据",
          target: "图书馆分析",
        },
        {
          source: "舆情大数据",
          target: "用户分析",
        },
        {
          source: "舆情大数据",
          target: "话题分析",
        },
        {
          source: "舆情大数据",
          target: "评论分析",
        },
        {
          source: "校园大数据",
          target: "图书馆分析",
        },
        {
          source: "图书馆分析",
          target: "图书分析",
        },
        {
          source: "图书馆分析",
          target: "借阅分析",
        },
        {
          source: "图书馆分析",
          target: "借阅排行",
          value: "DNA",
        },
        {
          source: "图书馆分析",
          target: "图书收录",
        },
      ],
      lineStyle: {
        normal: {
          opacity: 1,
          width: 5,
          curveness: 0,
        },
      },
      categories: [{ name: "0" }, { name: "1" }, { name: "2" }],
    },
  ],
});

function handleSizeChange(val) {
  console.log(`每页 ${val} 条`);
}
function handleCurrentChange(val) {
  console.log(`当前页: ${val}`);
}
</script>

<style lang="scss" scoped>
$bgc: #f5f7f9;
$tit-size: 16px;
$bar-c: #e6e6e6;
$font-c: #047df6;
$hover-c: #409eff;
$border-r: 5px;

.container {
  width: 100%;
  overflow: hidden;
  background-color: #f3f3f3;
  .el-main {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 20px 0px;
    .left {
      background-color: #fff;
      border-radius: 3px;
      flex: 2;
      border-radius: 3px;
      .top {
        margin: 10px 20px;
        padding-bottom: 5px;
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: 17px;
        border-bottom: 2px solid #b7b5b8;
      }
      :deep(.el-tree-node__content) {
        height: 44px;
        font-size: 17px;
      }
      :deep(.el-tree-node__label) {
        font-size: 17px;
      }
    }
    .mid {
      flex: 0 0 650px;
      margin-left: 10px;
      margin-right: 10px;

      border-radius: 3px;
      background-color: #fff;
      padding-bottom: 20px;
      .top {
        margin: 10px 20px;
        padding-bottom: 5px;
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: 17px;
      }
      h2 {
        font-size: 24px;
        font-weight: 600;
        color: #333;
        margin: 0;
        margin-left: 20px;
      }
      p {
        margin-left: 20px;
        overflow: hidden;
        width: 100%;
        .title {
          color: #000;
          font-weight: 600;
        }
        .content {
          padding: 10px 0 0 10px;
          font-size: 14px;
          color: #9b9899;
        }
        .introduction {
          width: 500px;
          overflow: hidden;
          padding-left: 5px;
          padding-top: 5px;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 7;
          -webkit-box-orient: vertical;
          color: #666;
        }
      }
      .page {
        &-list {
          margin-top: 10px;
          &-top {
            height: 22px;
            line-height: 22px;
            border-bottom: 1px solid #ccc;
            div {
              // float: left;
              font-size: 14px;
              padding-left: 5px;
              .page-num {
                color: $font-c;
                cursor: pointer;
              }
            }
          }
          &-item {
            margin-top: 10px;
            border-bottom: 1px solid #ccc;
            padding: 10px 5px 20px 20px;
            .item-tit {
              font-size: 18px;
              color: #000;
              cursor: pointer;
              h1 {
                font-size: 18px;
              }
              h1 a {
                color: $font-c;
                font-size: 21px;
                font-weight: 500;
                text-decoration: none;
                &:hover {
                  color: #ff6c00;
                }
              }
            }
            .item-name {
              color: $font-c;
              font-size: 14px;
              font-weight: 400;
              margin-top: 5px;
              cursor: pointer;
              span {
                margin-left: 10px;
                &:hover {
                  color: #ff6c00;
                }
              }
              .tag {
                display: inline-block;
                margin-left: 50px;
                cursor: pointer;
              }
            }
            .item-content {
              color: #666;
              font-size: 14px;
              max-width: 709px;
              max-height: 70px;
              text-overflow: ellipsis;
              overflow: hidden;
              line-height: 24px;
              -webkit-line-clamp: 2; /* 行数 */
              -webkit-box-orient: vertical;
              span {
                width: 700px;
                height: 45px;
                -webkit-line-clamp: 2; /* 行数 */
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                line-height: 24px;
                text-align: justify;
              }
            }
            .item-words {
              padding-left: 5px;
              .el-tag {
                margin-right: 10px;
                margin-top: 10px;
                cursor: pointer;
              }
            }
          }
        }
        .el-pagination {
          justify-content: center;
          margin-top: 20px;
        }
      }
    }
    .right {
      flex: 3;
      &-box {
        margin-bottom: 20px;
        background-color: #fff;
        border-radius: 3px;
        padding: 10px 20px;
        .top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #dcdcdc;
          padding-bottom: 20px;
          .tit {
            font-size: 18px;
            font-weight: 500;
            color: #333;
          }
          #charts1 {
            height: 280px;
            margin-top: 10px;
          }
        }
        #charts {
          height: 280px;
          margin-top: 10px;
        }
        .chart {
          height: 280px;
        }
      }
    }
  }
}
</style>
