function animateLabel() {
    const inputElement = document.querySelectorAll("input"); 
    const label = document.querySelectorAll("label");
    
    inputElement.addEventListener("keydown", () => {
        if(input.value.length > 0) {
            label.classList.add("is--active-form");         
        }  
    });
}

animateLabel();