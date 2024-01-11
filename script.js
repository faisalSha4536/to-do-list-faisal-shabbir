let input = document.querySelector('input')
let add = document.querySelector('.button')
let input_data = document.querySelector('.input_data')


add.addEventListener('click', function(){
    
    if(input.value == ''){
        alert("You don't Add anything")
    } else{
       let newel = document.createElement('ul')
       newel.innerHTML = `${input.value}<button class="delete button">Delete</button>`
        input_data.appendChild(newel)
        input.value = ''
        newel.querySelector('.delete').addEventListener('click', remove)

        function remove(){
            newel.remove()
        }
    }

    
})


