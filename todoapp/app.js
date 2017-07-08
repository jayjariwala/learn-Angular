angular.module("todoApp",[])
.controller("todocontroller",todoController);

function todoController () {
	this.edit = true;
	this.action ="edit"

	this.todoitems = [];
	// body... 
	this.editFields = function()	
	{
		this.edit = !this.edit;
		if (this.edit) {

			this.action="edit";
		}
		else
		{
			this.action="done"
		}
		
	}
	this.addItem = function()
	{
		this.todoitems.push(this.item);
		this.item = "";
	}
	this.deleteTodo = function(index)
	{
		this.todoitems.splice(index,1);
	}



}