// setImmediate(func,param1,param2,...)
// setImmediate表示立即执行，是宏任务回调函数会被放到事件循环的check阶段。

// 在应用中如果大量的计算型任务，它是不适合放在主线程中执行的
// ，因为计算任务会阻塞主线程，主线程一旦被阻塞，其他任务就需要等待，
// 所以这种类型的任务最好交给C++维护线程去执行。

// 可以通过setImmediate方法将任务放入事件循环中的check阶段，
// 因为代码在这一个阶段执行不会阻塞主线程，也不会阻塞事件循环。

// 例子1 阻塞线程
// function sleep(delay) {
//     var start = new Date().getTime()
//     while (new Date().getTime() - start < delay) {
//       continue
//     }
//     console.log('ok')
// }

// console.log('start')
// sleep(2000)
// // 阻塞线程 等待while结束 start ok end
//   console.log('end')
 


  function sleep(delay) {
    var start = new Date().getTime()
    while (new Date().getTime() - start < delay) {
      continue
    }
    console.log('ok')
  }
  
  console.log('start')
  setImmediate(sleep, 2000)
//   不阻塞线程  start end ok
  console.log('end')
  