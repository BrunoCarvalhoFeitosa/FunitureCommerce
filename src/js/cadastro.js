function animateLabel() {
    
    const inputElement = document.querySelectorAll("input"); 
    const label = document.querySelectorAll("label");
    
    inputElement.addEventListener("keydown", () => {
        if(input.value.length > 0) {
            console.log('zeo', input.value.length);
            label.classList.add("is--active-form");         
        }  
    });
}

animateLabel();