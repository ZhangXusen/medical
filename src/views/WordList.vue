<template>
  <Header />
  <Search />
  <div class="container">
    <el-main>
      <div class="top">
        科普导航 <span v-if="isZh" @click="changeLan">英文</span
        ><span v-else @click="changeLan">CHINESE</span>
      </div>
      <div class="list">
        <div class="list-item" v-for="(item, index) in lists" :key="index">
          <ul class="text-content">
            <li class="text-list" v-for="(i, bindex) in item" :key="bindex" @click="link(i.name)">
              <el-icon><ArrowRightBold /></el-icon>{{ i.name }}
            </li>
          </ul>
        </div>
      </div>
    </el-main>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import Header from "@/components/Layout/Header.vue";
import Search from "@/components/Layout/Search.vue";
import { ArrowRightBold } from "@element-plus/icons-vue";
import router from "@/router"
const link=(path)=>{
  router.push('/hotword/'+path);
}
const isZh = ref([true]);
const changeLan = () => {
  if(isZh){
    const temp=lists.value;
    lists.value = enLists.value;
    enLists.value=temp;
  }
  else{ 
    const temp=lists.value;
    lists.value = enLists.value;
    enLists.value=temp;
  }
  isZh.value = !isZh.value;
};
const lists = ref([
  [
    {
      name: "鼠疫",
      sname: "aaa",
    },
    {
      name: "霍乱",
      sname: "ccc",
    },
  ],
  [
    {
      name: "传染性非典型肺炎",
    },
    {
      name: "艾滋病",
    },
    {
      name: "病毒性肝炎",
    },
    {
      name: "脊髓灰质炎",
    },
    {
      name: "病毒性肝炎",
    },
    {
      name: "人感染高致病性禽流感",
    },
    {
      name: "麻疹",
    },
    {
      name: "流行性出血热",
    },
    {
      name: "狂犬病",
    },
    {
      name: "流行性乙型脑炎",
    },
    {
      name: "登革热",
    },
    {
      name: "炭疽",
    },
    {
      name: "细菌性和阿米巴性痢疾",
    },
    {
      name: "肺结核",
    },
    {
      name: "伤寒和副伤寒",
    },
    {
      name: "流行性脑脊髓膜炎",
    },
    {
      name: "百日咳",
    },
    {
      name: "白喉",
    },
    {
      name: "新生儿破伤风",
    },
    {
      name: "猩红热",
    },
    {
      name: "布鲁氏菌病",
    },
    {
      name: "淋病",
    },
    {
      name: "梅毒",
    },
    {
      name: "钩端螺旋体病",
    },
    {
      name: "血吸虫病",
    },
    {
      name: "疟疾",
    },
  ],
  [
    {
      name: "流行性感冒",
    },
    {
      name: "流行性腮腺炎",
    },
    {
      name: "风疹",
    },
    {
      name: "急性出血性结膜炎",
    },
    {
      name: "麻风病",
    },
    {
      name: "黑热病",
    },
    {
      name: "包虫病",
    },
    {
      name: "丝虫病",
    },
    {
      name: "除霍乱",
    },
    {
      name: "细菌性和阿米巴性痢疾",
    },
    {
      name: "伤寒和副伤寒以外的感染性腹泻病",
    },
  ],
]);
console.log(lists);
const enLists = ref([
  [
    {
      name: "The Plague",
      sname: "The Plague",
    },
    {
      name: "Cholera",
      sname: "ccc",
    },
  ],
  [
    {
      name: "SARS",
    },
    {
      name: "AIDS",
    },
    {
      name: "Viral Hepatitis",
    },
    {
      name: "Poliomyelitis",
    },
    {
      name: "Viral Hepatitis",
    },
    {
      name: "HpAI",
    },
    {
      name: "Measles",
    },
    {
      name: "Hemorrhage Fever",
    },
    {
      name: "Hydrophobia",
    },
    {
      name: "Encephalitis B",
    },
    {
      name: "Dengue Fever",
    },
    {
      name: "Anthrax",
    },
    {
      name: "Dysentery",
    },
    {
      name: "Pulmonary Tuberculosis",
    },
    {
      name: "Typhoid and Paratyphoid Fever",
    },
    {
      name: "Epidemic Encephalitis",
    },
    {
      name: "Pertussis",
    },
    {
      name: "Diphtheria",
    },
    {
      name: "Newborn Tetanus",
    },
    {
      name: "Scarlet Fever",
    },
    {
      name: "Brucellosis",
    },
    {
      name: "Gonorrhea",
    },
    {
      name: "Syphilis",
    },
    {
      name: "Leptospirosis",
    },
    {
      name: "Schistosomiasis",
    },
    {
      name: "Malaria",
    },
  ],
  [
    {
      name: "流行性感冒",
    },
    {
      name: "流行性腮腺炎",
    },
    {
      name: "风疹",
    },
    {
      name: "急性出血性结膜炎",
    },
    {
      name: "麻风病",
    },
    {
      name: "黑热病",
    },
    {
      name: "包虫病",
    },
    {
      name: "丝虫病",
    },
    {
      name: "除霍乱",
    },
    {
      name: "细菌性和阿米巴性痢疾",
    },
    {
      name: "伤寒和副伤寒以外的感染性腹泻病",
    },
  ],
]);
</script>

<style lang="scss" scoped>
.el-main {
  width: 1200px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 20px;
  .top {
    font-size: 18px;
    font-weight: bold;
    color: var(--el-color-primary);
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    span {
      float: right;
      font-size: 15px;
      margin-right: 20px;
      cursor: pointer;
    }
  }
  .list {
    .list-item {
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid #ccc;
      .text-content {
        // display: flex;
        // align-items: center;
        // justify-content: space-around;

        padding: 10px 20px;
        // flex-wrap: wrap;
        color: var(--el-color-primary);
        .text-list {
          float: left;
          padding: 20px 0;
          width: 25%;
          cursor: pointer;
          .el-icon {
            margin-right: 10px;
          }
          &:hover {
            background-color: #a0cfff;
            border-radius: 5px;
          }
        }
      }
    }
  }
}
</style>
