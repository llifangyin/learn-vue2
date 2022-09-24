import Dep from "./Dep";
import observe from "./observe";
export default function defineReactive(data,key,val){
    // console.log('defineReactive',data,key);
    if(arguments.length==2){
        val = data[key]
    }
    // 子元素递归   类循环调用 
    let childOb =  observe(val)

    const dep = new Dep()//闭包中使用

    Object.defineProperty(data,key,{
        enumerable:true,
        configurable:true,
        // 形成闭包
        get(){
            console.log('访问',key);
            // 处于依赖收集阶段
            // *** collect as denpendency   ==> watcher ***
            // console.log(Dep.target,1111111);
            if(Dep.target){
                dep.depend()
                if(childOb){
                    childOb.dep.depend()
                }
            }

            //监控值的变化==>响应式实现
            return val
        },
        set(value){
            console.log('修改 ',key);
            if(val === value){
                return
            }
            val = value
            //把属性作为一个对象 遍历，做响应式处理。直到子属性不是对象为止 observe跳出循环
            childOb = observe(value)

            // 发布订阅者模式，通知dep  notify => watcher
            dep.notify()
        }
    })
}