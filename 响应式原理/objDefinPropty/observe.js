import Observer from './observer'

//添加属性 _ob_ 存储的是可配置的可观测和修改的copy的属性
export default  function observe(obj){
    if(typeof obj !='object') return
    // 定义ob
    var ob;
    
    if(typeof obj._ob_ !== 'undefined'){
        ob = obj._ob_;
    }else{
        ob = new Observer(obj)
    }
    return ob

}
