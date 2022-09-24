import { def } from './utils'
const arrayPrototype = Array.prototype

// 以array.prototype为原型创建arrayMethods对象
const arrayMethods = Object.create(arrayPrototype)

const methodsNeedChange = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']
// console.log(arrayPrototype);

methodsNeedChange.forEach(methodName => {

    const original = arrayPrototype[methodName] //array原型的方法


    // 定义新的方法作为array原型的指向   def (obj key value enummerable)
    def(arrayMethods, methodName, function () {
        // 响应式处理的function

        const result = original.apply(this, arguments)  //改变this指向，调用原数组原型的方法
        // arrayMethods[methodName].call(this)?
        
        // const args = Array.from(arguments)
        const args = [...arguments]  // 处理类数组
     

        
        // 插入新项的splice unshift pop
        let inserted = []
        switch (methodName) {
            case 'push':
            case 'unshift':
                inserted = args
                break; 
            case 'splice':
                inserted = args.slice(2)
        }

        const ob = this._ob_     // 把这个数组的_ob_取出来，初始化完成的前提下，去调用封装的方法时
        
        if(inserted){

            // 把新增的数据响应式处理
            ob.observeArray(inserted)
        }
        
        ob.dep.notify();

        console.log(methodName, '响应式打印');
        return result

    }, false)


})


// 给新的array对象定义了七个修改数组值的方法做了响应式处理   
export default arrayMethods






















// Object.setPrototypeOf() 方法设置一个指定的对象的原型到另一个对象或 null。
// （即，内部 [[Prototype]] 属性）
// Object.setPrototypeOf(obj,arrayMethods) 等价于
// obj._proto_ = arrayMethods._proto_ 

