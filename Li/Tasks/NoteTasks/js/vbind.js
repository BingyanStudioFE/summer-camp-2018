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


const public = {
    DOMS: [],
    data: {
        TestData: '奇变偶不变',
        TestMessage: '符号看象限'
    },
    dataChange: {
        name: null,
        value: null
    },
    init: () => {
        public.DOMS = document.querySelectorAll("[m-bind]");
        observeDataArea(public.data);
        observeHtml(public.DOMS);
        // public.DOMS.forEach((ele) => {
        //     ele.addEventListener('onporpertychange', (evt) => {
        //         var ele = evt.target;
        //         console.log(ele);
        //         if (ele.getAttribute('m-bind')) {
        //             var dataName = ele.getAttribute('m-bind');
        //             var dataValue = ele.value;
        //             public.dataChange.name = dataName;
        //             public.dataChange.value = dataValue;
        //             public.tellDataArea();
        //         }
        //     })
        // });
    },
    observeHtml: (DOMS) => {
        document.addEventListener("change", (evt) => {
            var ele = evt.target;
            if (ele.getAttribute('m-bind')) {
                var dataName = ele.getAttribute('m-bind');
                var dataValue = ele.value;
                public.dataChange.name = dataName;
                public.dataChange.value = dataValue;
                public.tellDataArea();
            }
        });
    },
    observeDataArea:(data)　=> {
        if (!data || typeof data !== 'object') {
            return;
        };
        for (var pro in data) {
            observeDataArea(data[pro]);
            var key = pro.toLowerCase();
            Object.defineProperty(data, key, {
                get: () => {
                    return true;
                },
                set: (val) => {
                    data[pro] = val;
                    dataChange = {
                        name: key,
                        value: val
                    }
                    public.tellHtml();
                }
            });
            data[key] = data[pro]
        };
    },
    tellDataArea: () => { 
        if (public.data[public.dataChange.name])      
            public.data[public.dataChange.name] = public.dataChange.value
    },
    tellHtml: () => {
        for (var m of public.DOMS) {
            if (m.getAttribute('m-bind') && m.getAttribute('m-bind') == public.dataChange.name) {
                m.innerHtml = public.dataChange.value;
                m.value = public.dataChange.value;
            }
        }
    }
};
public.init();



//存在的问题：data是一个对象，假如该对象内部结构复杂，需要递归遍历，此例没有实现
//递归陷阱！！！！！！
//demo参见Notetasks/HTML&CSS/m.html