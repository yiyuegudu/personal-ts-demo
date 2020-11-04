<template>
  <div class="home">
    <div>函数的定义与调用</div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

//函数的定义与调用
function add(x: number, y: number): number {
  //定义返回值为number类型的函数
  return x + y;
}
add(5, 6); //调用函数
console.log(add(5, 6), "结果");


//匿名函数
var myAdd = function(x:number, y:number) { //定义匿名函数
  return x+y;
  };
myAdd(3,4); //调用匿名函数
console.log(myAdd(3,4),'结果是：');


//可选与默认参数
//可选参数：可选参数：在参数名后面，冒号前面添加一个问号，则表明该参数是可选的。
function buildName(firstName: string, lastName?: string) { //lastName为可选参数
  if (lastName)
      return firstName + " " + lastName;
  else
      return firstName;
}
var result1 = buildName("Bob");  //正确调用 Bob
var result2 = buildName("Bob", "Adams"); //正确调用 Bob Adams
console.log(result1,'result1');
console.log(result2,'result2');
//默认参数：在参数名后直接给定一个值，如果这个值没有被传入，那么将会被赋值为默认值。
function buildName2(firstName: string, lastName = "Smith") {
  return firstName + " " + lastName;
}

var result1 = buildName2("Bob");  //没有传入第二个参数，则被赋值为默认的smith,结果为:Bob Smith
var result2 = buildName2("Bob", "Adams");  //结果为:Bob Adams
console.log(result1,'result1');
console.log(result2,'result2');

export default class Home extends Vue {}
</script>
