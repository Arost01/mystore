Component({
  behaviors: [],
  properties: {
    tabs:{
      type:Array,
      value:[]
    }

  },
  data: {

  },
  lifetimes: {
    created() {

    },
    attached() {

    },
    moved() {

    },
    detached() {

    },
  },
  methods: {
    handleItemTap(e){
      //1 获取点击的索引
      const {index}=e.currentTarget.dataset;
      //2 触发 父组件中的事件 自定义
      this.triggerEvent("tabsItemChange",{index});
      }
  },
});