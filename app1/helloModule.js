var helloMod = angular.module("helloModule",[]);

helloMod.controller("hello",sayHello);
function sayHello () {
	this.sayhello = "Hello! again!"
}