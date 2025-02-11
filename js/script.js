document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("boton");
    let posX = 200; // Posición inicial en X
    let posY = 200; // Posición inicial en Y

    function moverBoton() {
        let maxX = window.innerWidth - boton.clientWidth - 100;
        let maxY = window.innerHeight - boton.clientHeight - 100;
        
        let deltaX = (Math.random() * 300) - 150; // Movimiento máximo de ±150px
        let deltaY = (Math.random() * 300) - 150; // Movimiento máximo de ±150px
        
        posX = Math.max(100, Math.min(maxX, posX + deltaX));
        posY = Math.max(100, Math.min(maxY, posY + deltaY));
        
        boton.style.transform = `translate(${posX}px, ${posY}px)`;
    }

    setInterval(moverBoton, 1500); // Se mueve cada 0.5 segundos continuamente

    boton.addEventListener("click", () => {
        lanzarConfeti();
    });
});

function lanzarConfeti() {
    for (let i = 0; i < 100; i++) {
        let confeti = document.createElement('div');
        confeti.style.position = 'fixed';
        confeti.style.top = Math.random() * 100 + 'vh';
        confeti.style.left = Math.random() * 100 + 'vw';
        confeti.style.width = '10px';
        confeti.style.height = '10px';
        confeti.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        confeti.style.opacity = Math.random();
        confeti.style.transition = 'all 2.5s ease-out';
        document.body.appendChild(confeti);

        setTimeout(() => {
            confeti.style.transform = `translateY(${Math.random() * 100 - 50}vh)`;
            confeti.style.opacity = 0;
        }, 100);

        setTimeout(() => confeti.remove(), 2500);
    }
    setTimeout(() => {
        window.location.href = 'feliz-cumple.html';
    }, 2500);
}
