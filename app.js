
function todoList() {
	
	var item    = document.getElementById('todoInput').value
	
	var text    = document.createTextNode(item)
	
	
	
	newItem.appendChild(text)
	
	document.getElementById('todoList').appendChild(newItem)
}