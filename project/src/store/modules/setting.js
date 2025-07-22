// 存储layout数据
import { defineStore } from 'pinia'
const useLayoutSettingStore = defineStore('setting',{
    state: () => {
        return {
            fold: false, // 是否折叠菜单
            refsh: false, // 是否刷新
        }
    }
})
export default useLayoutSettingStore;