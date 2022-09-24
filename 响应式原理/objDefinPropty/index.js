import observe from './observe'
import Watch from './Watcher'

let obj = {
    a:{
        m:{
            n:5 
        }
    },
    b:4,
    arr:[1,2,3]
}

// 目的： 把对象构造成每一个属性都是响应式的 and Array

observe(obj)

// obj.b++
// console.log(obj.a.m.n);

// obj.a.m.n = 11

new Watch(obj,'a.m.n',(val)=>{
    console.log(val,'=====watcher 检测到变化');
    // console.log(this,'this');
    // Trigger re-render
})

// obj.a.m.n = 10
obj.arr.push(4)
// obj.b = 1212
// obj.arr.unshift(0)
// obj.arr.splice(2,1,88,89)
// obj.arr.splice(2,1,[88,89])

// obj.arr[1]= 100 //不触发响应式
// console.log(obj.arr);


// obj.b++
// console.log(obj);