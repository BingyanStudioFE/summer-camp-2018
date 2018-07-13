//我的一个双向绑定的思路
//页面分为表层和底层
//表层与底层分离
//表层与底层之间通过一个全局对象来交互
//该全局对象保存底层所有数据
//底层数据setter使得数据改变能映射到全局对象中
//表层DOM的eventListener使得数据改变能映射到全局
//全局将数据改变分配给双方
//首先实现全局对象，它应当存储页面上的所有具有双向绑定标识的DOM模型，同时该DOM应该说明绑定的数据名称
//                      存储页面上用到的所有数据，并且为数据添加setter和getter
//第一步实现单向绑定

const public = {

    DOMS:[],
    data:{
        TestData:'奇变偶不变',
        TestMessage: '符号看象限'
    },
    dataChange:{
        name:null,
        value:null
    },
    init: () => {
        public.DOMS = document.querySelectorAll("[m-bind]");
        for (var pro in public.data) {
            var key = pro.toLowerCase();
            Object.defineProperty(public.data,key,{
                set: (val) => {
                        public.dataChange.name = key;
                        public.dataChange.value = val;
                        public.tellHtml();
                }
            });
            public.data[key] = public.data[pro]
        };
    },
    tellHtml:() => {
        for (var m of public.DOMS) {
            if(m.getAttribute('m-bind') && m.getAttribute('m-bind') == public.dataChange.name){
                m.innerHtml = public.dataChange.value;
                m.value = public.dataChange.value;
            }
        }
    }
};
public.init();
//demo参见Notetasks/HTML&CSS/m.html