import Dep from "./Dep";

var uid = 0
export default  class Watch{
    // target 监听的对象 exp(a.b.c)监听的属性 callback监听函数
    constructor(target,expression,callback){
        console.log('watch构造器');
        this.id = uid++
        this.target = target
        this.getter = parsePath(expression)//fn(, a.b.n,)  ==> 最终的value
        this.callback = callback

        this.value = this.get()
    }
    update() { 
        this.run()
    }
    get(){
        // 进入依赖收集阶段 ,让全局的target设置为watcher本身
        // 也就是说进入了收集依赖阶段 
        Dep.target = this;
        const obj = this.target
        var value;
        // console.log(Dep,Dep.target,'dep-----');
        try{
            value =  this.getter(obj)
        }finally{
            Dep.target = null
        }
        return value
    }
    run(){
        this.getAndInvoke(this.callback)
    }
    // 调其回调函数执行 响应式处理
    getAndInvoke(callback){
        const value = this.get()

        if(value!==this.value|| typeof value =='object'){
            const oldvalue = this.value
            this.value = value
            callback.call(this.target,value,oldvalue)
        }
    }
}
// 取对象引用的根节点
function parsePath(str){
    var segment = str.split('.')
    
    return (obj) => {
        for(let i =0; i<segment.length;i++){
            if(!obj)  return   
            obj = obj[segment[i]]
        }
        return obj
    }
} 