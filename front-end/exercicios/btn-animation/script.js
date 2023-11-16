function turnOn(){
    let circle = document.querySelector('.circle')
    let background = document.querySelector('.background')
    
    if(circle.style.left != '40px'){
        circle.style.left = '40px'
        background.style.width = '70px'
    }else{
        circle.style.left = '0px'
        background.style.width = '0px'
    }
    
}