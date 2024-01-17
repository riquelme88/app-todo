//Initial Data
let container = document.querySelector('.container') as HTMLDivElement
let task = document.querySelectorAll('.task')
let checkbox = document.querySelectorAll('.task input[type = "checkbox"')
let input = document.querySelector('input[type = "text"') as HTMLInputElement;
let divArray : any = [];
let activeArray : any = []

//Elements Task
let taskDiv = document.createElement('div') as HTMLDivElement
let checkDiv = document.createElement('input') as HTMLInputElement;
let pTask = document.createElement('p') as HTMLParagraphElement;
let imgDiv = document.createElement('img') as HTMLImageElement;


//Functions

function deleteTask(){
    task.forEach(item=>{
        item.addEventListener('mouseover', ()=>{
            let img = item.querySelector('img') as HTMLImageElement
            img.style.display = 'block'
            img.addEventListener('click', ()=>{
                item.classList.add('trash')
                leftItem()
            })
        })
    
        item.addEventListener('mouseout', ()=>{
            let img = item.querySelector('img') as HTMLImageElement
            img.style.display = 'none'
        })
    });

    taskDiv.addEventListener('mouseover', ()=>{
        imgDiv.style.display = 'block'
        imgDiv.addEventListener('click', ()=>{
            taskDiv.classList.add('trash')
            leftItem()
        })
    })

    taskDiv.addEventListener('mouseout', ()=>{
        imgDiv.style.display = 'none'
    })

    task.forEach(item=>{
        divArray.push(item)
    })
}

function checkCheckbox(){
    task.forEach(item=>{
        let checkbox = item.querySelector('input[type = checkbox]') as HTMLInputElement
        item.addEventListener('click', (e)=>{
        if(checkbox.checked){
            checkbox.checked = false
            item.classList.remove('completed')
        }else{
            item.classList.add('completed')
            checkbox.checked = true
        }

        leftItem()
        })
        checkbox.addEventListener('click', ()=>{
            if(checkbox.checked){
                checkbox.checked = false
                item.classList.remove('completed')
            }else{
                item.classList.add('completed')
                checkbox.checked = true
            }

            leftItem()
        })
        
    });

    taskDiv.addEventListener('click', ()=>{
        if(checkDiv.checked){
            checkDiv.checked = false
            taskDiv.classList.remove('completed')
        }else{
            taskDiv.classList.add('completed')
            checkDiv.checked = true
        }
        leftItem()
    })

    checkDiv.addEventListener('click', (e)=>{
        let checkbox = e.target as HTMLInputElement
        if(checkbox.checked){
            checkbox.checked = false
        }else{
            checkbox.checked = true
        }

        leftItem()
    })
}

function addTask(){
    if(input.value != ''){
        taskDiv.classList.add('task')
        checkDiv.type = 'checkbox'
        pTask.innerHTML = input.value
        imgDiv.src = '../public/assets/images/icon-cross.svg'
        taskDiv.appendChild(checkDiv)
        taskDiv.appendChild(pTask)
        taskDiv.appendChild(imgDiv)
        container.appendChild(taskDiv)
        divArray.push(taskDiv)
        input.value = ''
        leftItem()
    }
}

function allItems(){
    container.innerHTML = ''
    for(let i in divArray){
        container.appendChild(divArray[i])
    }

   
}

function activeItems(){
    activeArray = divArray.filter((actives : Element)=>{
        if(actives.classList.contains('completed')){
        }else{
            return actives
        }
    })
    container.innerHTML = ''
    for(let i in activeArray){
        container.appendChild(activeArray[i])
    }
}

function completedItems(){
    let completedArray = divArray.filter((completed : Element)=>{
        if(completed.classList.contains('completed')){
            return completed
        }
    })
    container.innerHTML = ''
    for(let i in completedArray){
        container.appendChild(completedArray[i])
    }

}

function leftItem(){
    activeArray = divArray.filter((actives : Element)=>{
        if(actives.classList.contains('completed') || actives.classList.contains('trash')){
        }else{
            return actives
        }
    })

    let leftItem = document.querySelector('#itens-left') as HTMLParagraphElement;
    leftItem.innerHTML = `${activeArray.length} items left`
}

function clearCompleted(){
    document.querySelectorAll('.completed').forEach(item=>{
        item.classList.add('trash')
    })
}

function addActive(){
    document.querySelectorAll('.all-active p').forEach(item=>{
        item.addEventListener('click', ()=>{
            document.querySelector('p.active')?.classList.remove('active')
            item.classList.add('active')
        })
    })
}
addActive();
deleteTask();
checkCheckbox();
addTask();


//Visual function && Inital data

let imgVisual = document.querySelector('.img-dark') as HTMLImageElement
let body = document.body as HTMLElement
let divText = document.querySelector('.tittle-dark') as HTMLDivElement
let dark = document.querySelectorAll('.dark')
let header = document.querySelector('header') as HTMLDivElement

function visualMode(){
    if(imgVisual.classList.contains('img-dark')){
        imgVisual.classList.add('img-light')
        imgVisual.classList.remove('img-dark')
        body.classList.add('bg-light')
        body.classList.remove('bg-dark')
        divText.classList.add('tittle-light')
        divText.classList.remove('tittle-dark')
        header.classList.add('bgImgLight')
        header.classList.remove('bgImgDark')
        for(let i in dark){
            dark[i].classList.remove('dark')
            dark[i].classList.add('light')
        }
    }else{
        imgVisual.classList.add('img-dark')
        imgVisual.classList.remove('img-light')
        body.classList.add('bg-dark')
        body.classList.remove('bg-light')
        divText.classList.add('tittle-dark')
        divText.classList.remove('tittle-light')
        header.classList.add('bgImgDark')
        header.classList.remove('bgImgLight')
        for(let i in dark){
            dark[i].classList.remove('light')
            dark[i].classList.add('dark')
        }
    }
}



















