//UI vars
const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList =document.querySelector('#task-list');


eventListener();

 function eventListener(){
    form.addEventListener('submit',addNewItem);
    taskList.addEventListener('click',deleteItem)
    btnDeleteAll.addEventListener('click',deleteAll);
}

function addNewItem(e){
   
   
    if(input.value==''){
        alert('Bu alan boş bırakılamaz!!')
    }
       
        if(confirm( 'Do you want to add '+input.value +' task?')){
            const li= document.createElement('li');
            li.className='list-group-item list-group-item-secondary';
            li.appendChild(document.createTextNode(input.value));
            const a = document.createElement('a');
            a.classList = 'delete-item float-right';
            a.setAttribute('href', '#');
            a.innerHTML = '<i class="fas fa-times"></i>';

            li.appendChild(a);
        
            taskList.appendChild(li);
            input.value='';
        }
        
        e.preventDefault();

}

function deleteItem(e){
   
    if(confirm('Are you sure?')){
        if(e.target.className === 'fas fa-times' ){
      
        e.target.parentElement.parentElement.remove();
    }
}
    e.preventDefault();
    
}
function deleteAll(e){
    
    if(confirm('Are you sure?')){
    taskList.innerHTML='';
    }

    e.preventDefault();
}
