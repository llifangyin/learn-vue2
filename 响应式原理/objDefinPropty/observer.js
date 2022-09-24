import {def} from './utils'
import observe from './observe';
import defineReactive from './defineReactive'; //处理Object
import arrayMethods from './array'  //处理array
import Dep from './Dep';

// 将一个正常的obj转换成每个层级的属性都是响应式的
export default class Observer {
    constructor(obj){
        // 绑定到_ob_中
        this.dep = new Dep()//每一个observer实例中，都有一个Dep 这里发布--> watch订阅

        // def 添加一个_ob_属性 值是   和自身一样的但是属性可修改的描述  默认的对象是不可修改的 可添加自定义操作的对象
        def(obj,'_ob_',this,false)
        
        // 检查时数组还是对象
        if(Array.isArray(obj)){
            // 将数组的原型 指向arrayMethods
            Object.setPrototypeOf(obj,arrayMethods)
            
            this.observeArray(obj)
        }else{
            // 遍历属性，执行响应式实现
            this.walk(obj)
        }

    }
    walk(obj){
        for(let key in obj){
            defineReactive(obj,key)
        }
    }
    observeArray(arr){
        for(let i = 0,l=arr.length;i<l-1;i++){
            // 逐项observe 添加_ob_ 存储实例  对数组的每一项做响应式处理
            observe(arr[i])
        }
    }

}