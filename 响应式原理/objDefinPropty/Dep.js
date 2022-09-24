var uid = 0
export default  class Dep{
    constructor(){
        console.log('dep构造器');
        // 发布订阅模式
        // 用数组 存储自己的订阅者subscriber 
        //  watcher的实例
        this.subs = []
        this.id = uid ++ 
    }
    // 添加订阅
    addSub(sub){
        this.subs.push(sub)
    }

    // 添加依赖
    depend(){
        // 指定的全局的位置 唯一
        if(Dep.target){
            this.addSub(Dep.target)
        }
    }
    // 通知更新
    notify(){
        console.log('===notify===');
        // 浅拷贝
        const subs = this.subs.slice()
        console.log(subs,'subs---');
        for(let i = 0,l=subs.length;i<l;i++){
            subs[i].update()
        }

    }
}