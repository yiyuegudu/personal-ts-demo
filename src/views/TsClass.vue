<template>
  <div class="home">
    <div></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
//1、ts中类的定义
//   ts中定义类：
// 例子1
// class Person0 {
//   name: string; //属性  前面省略了public关键词
//   constructor(n: string) {
//     //构造函数   实例化类的时候触发的方法
//     this.name = n;
//   }

//   run(): void {
//       console.log(this.name);
//   }
// }

// var p = new Person0("张三");
// p.run();

// 例子2
// class Person1{
//     name:string;

//     constructor(name:string){  //构造函数   实例化类的时候触发的方法
//         this.name=name;
//     }
//     getName():string{

//         return this.name;
//     }
//     setName(name:string):void{

//         this.name=name;
//     }
// }

// var p=new Person1('王五');
// console.log(p.getName(),'p.getName1()');
// p.setName('赵六');
// console.log(p.getName(),'p.getName2()');

//2、ts中实现继承  extends、 super
// class Person{
//     name:string;
//     constructor(name:string){
//         this.name=name;
//     }
//     run():string{
//         return `${this.name}在运动`
//     }
// }
// var p=new Person('王五');
// console.log(p.run(),'p.run()');

// class Web extends Person{
//     constructor(name:string){
//         super(name);  /*初始化父类的构造函数*/
//     }
// }
// var w=new Web('李四');
// console.log(w.run(),'w.run()');

//2、ts中继承的探讨  父类的方法和子类的方法一致
// class Person{
//     name:string;
//     constructor(name:string){
//         this.name=name;
//     }
//     run():string{
//         return `${this.name}在运动`
//     }
// }
// var p=new Person('王五');
// alert(p.run())
// class Web extends Person{
//     constructor(name:string){
//         super(name);  /*初始化父类的构造函数*/
//     }
//     run():string{
//         return `${this.name}在运动-子类`
//     }
//     work(){
//         alert(`${this.name}在工作`)
//     }
// }
// var w=new Web('李四');
// alert(w.run());
// w.work();
// alert(w.run());

// 3 类里面的修饰符  typescript里面定义属性的时候给我们提供了 三种修饰符
/*
    public :公有          在当前类里面、 子类  、类外面都可以访问
    protected：保护类型    在当前类里面、子类里面可以访问 ，在类外部没法访问
    private ：私有         在当前类里面可以访问，子类、类外部都没法访问
    属性如果不加修饰符 默认就是 公有 （public）
*/
//public :公有          在类里面、 子类  、类外面都可以访问
// class Person {
//   public name: string; /*公有属性*/
//   constructor(name: string) {
//     this.name = name;
//   }
//   run(): string {
//     return `${this.name}在运动`;
//   }
// }
// var p = new Person("王五");
// console.log(p.run(),'p.run()');

// class Web extends Person {
//   constructor(name: string) {
//     super(name); /*初始化父类的构造函数*/
//   }
//   run(): string {
//     return `${this.name}在运动-子类`;
//   }
//   work() {
//     console.log(`${this.name}在工作`,'gz');
    
//     alert(`${this.name}在工作`);
//   }
// }
// var w = new Web("李四");
// console.log(w.run(),'ls');
// console.log(w.work(),'work');
// w.work();

//类外部访问公有属性
//   class Person{
//     public name:string;  /*公有属性*/
//     constructor(name:string){
//         this.name=name;
//     }
//     run():string{
//         return `${this.name}在运动`
//     }
// }
// var  p=new Person('哈哈哈');
// alert(p.name);
//protected：保护类型    在类里面、子类里面可以访问 ，在类外部没法访问
//   class Person{
//         protected name:string;  /*公有属性*/
//         constructor(name:string){
//             this.name=name;
//         }
//         run():string{
//             return `${this.name}在运动`
//         }
//     }
// var p=new Person('王五');
// alert(p.run())
// class Web extends Person{
//     constructor(name:string){
//         super(name);  /*初始化父类的构造函数*/
//     }
//     work(){
//         alert(`${this.name}在工作`)
//     }
// }
// var w=new Web('李四11');
// w.work();
// alert( w.run());
//类外外部没法访问保护类型的属性
// class Person{
//     protected name:string;  /*保护类型*/
//     constructor(name:string){
//         this.name=name;
//     }
//     run():string{
//         return `${this.name}在运动`
//     }
// }
// var  p=new Person('哈哈哈');
// alert(p.name);
// private ：私有        在类里面可以访问，子类、类外部都没法访问
// class Person{
//     private name:string;  /*私有*/
//     constructor(name:string){
//         this.name=name;
//     }
//     run():string{
//         return `${this.name}在运动`
//     }
// }
// class Web extends Person{
//     constructor(name:string){
//         super(name)
//     }
//     work(){
//         console.log(`${this.name}在工作`)
//     }
// }
// var Person = /** @class */ (function () {
//   function Person(name) {
//     this.name = name;
//   }
//   Person.prototype.run = function () {
//     return this.name + "\u5728\u8FD0\u52A8";
//   };
//   return Person;
// })();
// var p = new Person("哈哈哈");
// alert(p.run());

export default class Home extends Vue {}
</script>
