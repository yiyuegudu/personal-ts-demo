<template>
  <div class="about">
    <h1>基本数据类型</h1>
  </div>
</template>

<script lang='ts'>
// boolen
var isDone: boolean = false;
console.log(isDone,'isDone');

// number
var isNumber:number=6;
var isfloat:number=6.01;
console.log(isNumber,'isNumber');
console.log(isfloat,'isfloat');

//String
var names: string = "bob"; 
var family_name: string = 'Green';
console.log(names,family_name,'name');

// array
var list: number[] = [1, 2, 3];
var name1: string[] = ["阿龙","阿猫","阿狗"];
console.log(list[2],'list[2]');
console.log(name1[2],'name1[2]');

//enum
enum Color {
  Red,　　　//枚举元素列表
  Green,
  Blue
};
var c: Color = Color.Green;
console.log(c,'c');

//any
var notSure: any = 4;
notSure = "maybe a string instead";
console.log(notSure,'notSure1');
notSure = false;  // 定义为boolen型
console.log(notSure,'notSure');

var list1: any[] = [1, true, "free"];
list[1] = 1002; //更改list[1]的值
console.log(list1[1],'list[1]');

//void
function warnUser(): void {
  alert("This is my warning message");
}
</script>
