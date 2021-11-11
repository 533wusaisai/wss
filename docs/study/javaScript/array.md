## 数组 [Array]

1. 操作数组方法
``` js
  let arr = [1,4,5,7,90,3]
  - slice()
    + Array.slice(start,end)  // 截取数值 返回截取值  start > 开始下标  end > 结束下标  
    > 不会改变原数组
  - splice()
    + Array.splice(index,elIndex, 'str1','str2' ) // index 替换位置 el 是否需要删除元素 0为不删除  str1 str2
    > 改变原数组
  - concat()
    + 数组连接
  - join()
    + 数组拼接
  - push()
  - pop()
  - shif()
  - unshif()
  - substring() / substr()
  - sort()
  - reverse()
  - indexOf() / lastIndexOf()
  - every
  - some
  - filter
  - map
  - forEach
  - find()
  - findIndex()
  - fill
  - copyWithin()
  - from
  - Object.key()
  - Object.values()
  - Object.entries()
  - includes()
```