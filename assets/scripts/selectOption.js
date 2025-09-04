const options = document.querySelector("#Button-List").querySelectorAll(".optionLink");

options.forEach(option => {
    option.addEventListener('click', () => {
        
        document.body.classList.add("fade-out");
        
        const page = window.location.href.split('/')[3].split(".")[0]
        
        setTimeout(() => {
            if ((option.id == "exit") && (page != "index")){
                window.location.href = 'index.html'
            } else{
                window.location.href = `${option.id}.html`;
            }

        }, 2000)
    })
})