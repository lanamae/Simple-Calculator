const input = document.querySelector('.input');

const clickNum = (num) =>{
    input.value += num;
}

const eq = () =>{
  
    try{
        input.value=eval(input.value)
    }

    catch{
        console.error("Invalid Input")
    }
    
}

const deleteNum = () =>{
    input.value = input.value.slice(0,-1);
    
}

const clearNum = () =>{
    input.value = "";  
}


