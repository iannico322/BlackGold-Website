const down = document.querySelector('.scroll')
const last = document.querySelector('.last')

const text = document.querySelector('.text')
const arr = document.querySelector('.arr')
let direction = "#last"
let di = 1
down.addEventListener('click',()=>{
    if(di  % 2 ==0){
        direction =  "#last"
        arr.textContent = " "
        text.textContent = " Scroll Up  •  >"
        
    }else{
        direction =  "#main"
        arr.textContent = "< • "
        text.textContent = "Scroll Down "
    }
    last.href = direction;
    
    last.click()
    console.log(di)
    di += 1;
    

})