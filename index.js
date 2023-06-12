const doc=document.querySelectorAll('.li')
doc.forEach((x,i)=>{
    setTimeout(() => {
        console.log(x);
        x.style.left='10%'
    }, (i+1)*200);
})