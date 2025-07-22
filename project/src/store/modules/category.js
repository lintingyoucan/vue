import { defineStore } from "pinia";
import { reqC1, reqC2, reqC3 } from "@/api/product/attr";
const useCategoryStore = defineStore("category", {
  state: () => {
    return {
      c1Attr: [],
      c1Id: '',
      c2Attr: [],
      c2Id: '',
      c3Attr: [],
      c3Id: '',
    };
  },
  actions: {
    // 获取c1
    async getC1() {
      let result = await reqC1();
      if (result.code == 200) {
        this.c1Attr = result.data;
      }
    },
    // 获取c2
    async getC2() {
      let result = await reqC2(this.c1Id);
      if (result.code == 200) {
        this.c2Attr = result.data;
      }
    },
    // 获取c3
    async getC3() {
      let result = await reqC3(this.c2Id);
      if (result.code == 200) {
        this.c3Attr = result.data;
      }
    },
  },
});
export default useCategoryStore;
