const input = document.querySelector('#input-box');
const list = document.querySelector('#list');

input.addEventListener('keypress', keys => {
    if (keys.key === 'Enter'){
        addTask();
    }
})


function addTask(){
    if(input.value === ''){
        alert('Write something')
        return
    }
    else{
        let li = document.createElement('li');
        li.innerText = input.value;
        list.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    input.value = '';
    saveData();
}

list.addEventListener('click', row => {
    if(row.target.tagName === 'LI'){
        row.target.classList.toggle('checked');
        saveData();
    }
    else if(row.target.tagName === 'SPAN'){
        row.target.parentElement.remove();
        saveData()
    }
})

function saveData(){
    localStorage.setItem('data', list.innerHTML);
}

function showTask(){
    list.innerHTML = localStorage.getItem('data');
}

showTask();


