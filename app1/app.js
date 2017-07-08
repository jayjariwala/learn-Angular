angular.module("showApp",["helloModule","ngTagsInput"])
.controller("toggle",toggle)
.controller('MainCtrl', function($http) {
  this.tags = [
    { text: 'Tag1' },
    { text: 'Tag2' },
    { text: 'Tag3' }
  ];
});

function toggle () {
	// body... 
	this.objects = [
	{firstname : "Jay", lastname: "Jariwala"},
	{firstname : "rahul", lastname: "Prajapati"},
	{firstname : "Suraj", lastname: "Davariya"},
	{firstname : "Rajan", lastname: "Patel"},
	{firstname : "Gopal", lastname: "Kotwal"},

	]
}