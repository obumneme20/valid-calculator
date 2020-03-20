
function clickBtn(e){

    if(e.value != "="){

        if(document.getElementById("screen").value == "0"){
            if(e.value == "."){
                document.getElementById("screen").value += e.value
            }else{
                document.getElementById("screen").value = e.value
            }
            
        }else{
            document.getElementById("screen").value += e.value
        }
       
    }

    if(e.value == "="){

       let result = eval(document.getElementById("screen").value)
       document.getElementById("screen").value += "=" + result

    }else if(e.value == "AC"){
        document.getElementById("screen").value = "0" 
            
    }
    
    
}


      



    
 
