/* 
Object.defineProperty(obj,prop,descriptor)
prop:定义或修改的属性名称或Symbol
descriptor：属性描述符
 */
/*
 descriptor
 通过赋值操作添加的普通属性是可枚举的
 默认情况下，使用 Object.defineProperty() 添加的属性值是不可修改的（immutable）。

 属性描述符只要有两种主要形式：
 数据描述符：描述一个具有值的属性
 存取描述符：
 configurable:false 为true时描述符才可改变，可删除
 enumerable:false  为true时可以被枚举
 writable:false 为true时 value才可被赋值改变
 vlaue:undefined 数值、对象、函数..
 get:undefined 
 set:undefined 
 */
 let obj = {}
 var temp;//getter setter需要变量周转才能工作
 Object.defineProperty(obj,'a',{
     // value:'121',
     enumerable:true,
     get(){
         console.log('访问 a');
         return temp
     },
     set(value){
         console.log('修改 a',value);
         temp = value
     }
 })
 
 Object.defineProperty(obj,'b',{
     value:5,
     writable:false
 })
 // obj.a = 100//无效 不可修改
 // obj.b++
 // console.log(obj);
 // // writable 设置隐藏的属性
 // for(var key in obj){
 //     console.log('enum-',key);
 // }
 console.log(obj.a);//undefined
 obj.a = 9
 console.log(obj.a);