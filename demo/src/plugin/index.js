import Vue from 'vue'
// Vue.js 的插件应该暴露一个 install 方法。
// 这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象：
let myPlugin = {}
export default myPlugin = {
    install(Vue,options){
        // console.log(options,'options');
        // 1、添加全局方法或property
        Vue.myGlobalMethod = function(){
            // 调不到？
            console.log('myGlobalMethod');
        }   
        // 2、添加全局资源
        Vue.directive('my-directive',{
            bind(el){
                el.innerHTML = 'MY DIRECTIVE'
            }
        })
        // 3、注入组件选项
        Vue.mixin({
            created(){
                // console.log('created from mixin');
            }
        })
        // 4、添加实例方法
        Vue.prototype.$mymethod = function(){
            console.log('mymethod');
        }
    }
}