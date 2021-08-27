# FHelper 

封装一些前端常用的代码 




## 运行 npm script 

可以直接呼出 vscode 命令面板 查询FHelper 并运行 running script 命令 

可以使用快捷键 **win:ctrl+shift+h** , **mac: cmd+shift+h**





## snippet 代码支持
### css

指令作用:生成水平垂直居中


指令前缀: fgfcenter
```css
display:flex;
justify-content:center;
align-items:center
```


指令作用:生成一个圆


指令前缀: fgcircle
```css
width:$1;
height:$1;
border-radius:50%
```

### javascript

指令作用:打印 console.log


指令前缀: cl
```javascript
console.log($1)
```


指令作用:生成 new Prmoise


指令前缀: fnpromise
```javascript
new Promise(function (resolve , reject){
   $1
})
```


指令作用:生成查询函数


指令前缀: fgsearch
```javascript
function $1(value,array){
   return array.filter((item) => item$2 == value)
}
```


指令作用:生成去重函数


指令前缀: fgunique
```javascript
function unique ( arr ) {
   return Array.from(new Set(arr))
}
```


指令作用:生成递归函数


指令前缀: fgrecursion
```javascript
function $1 ( item ) {
   if(item.children.length) {
      for(let i = 0 ; i < item.children.length  ; i ++){
           $1(item.children[i])
      }
   }
}
```


指令作用:生成格式化时间函数


指令前缀: fgformatdate
```javascript
function dateFormat (fmt , date ) {
   var o = { 
       'M+' : date.getMonth()+1,
       'd+' : date.getDate(),  
       'H+' : date.getHours(),
       'm+' : date.getMinutes(),
       's+' : date.getSeconds(),       
       'q+' : Math.floor((date.getMonth()+3)/3), 
       'S'  : date.getMilliseconds()            
   };
   if(/(y+)/.test(fmt)) {
       fmt=fmt.replace(RegExp.\$1, (date.getFullYear()+'').substr(4 - RegExp.\$1.length)); 
   }
   for(var k in o) {
       if(new RegExp('('+ k +')').test(fmt)){
           fmt = fmt.replace(RegExp.\$1, (RegExp.\$1.length==1) ? (o[k]) : (('00'+ o[k]).substr((''+ o[k]).length)));
       }
   }
   return fmt; 
} 
```


指令作用:生成 for 语句


指令前缀: fgfor
```javascript
for(let i = 0; i < $1.length ; i ++) {
   $2
}
```


指令作用:生成 forEach 方法


指令前缀: fgforeach
```javascript
$1.forEach(function (item) {
   $2
})
```


指令作用:导入 vue3 


指令前缀: fivue3
```javascript
import { $1 } from 'vue'
```

### vue

指令作用:生成一个 defineComponent 组件


指令前缀: fvdefinec
```vue
<template>

</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
   $1
})
</script>
```


指令作用:生成一个 setup script 组件


指令前缀: fvsetups
```vue
<template>

</template>
<script setup>
import { $1 } from 'vue'
$2
</script>
```

