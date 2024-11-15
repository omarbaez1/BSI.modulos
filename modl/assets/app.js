document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    const toggleButton = document.getElementById('toggle-audio');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            const audio = slide.querySelector("audio");
            slide.classList.remove("active");

            // Pausar el audio de la diapositiva anterior si existe
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }

            if (i === index) {
                slide.classList.add("active");

                // Reproducir el audio de la diapositiva actual si existe
                if (audio) {
                    audio.play().catch(err => {
                        console.log('Error al reproducir el audio:', err);
                    });
                }
            }
        });
    }
	
	// Función para configurar todos los enlaces para que se abran en la misma pestaña
function setLinksToSameTab() {
    document.querySelectorAll('a').forEach(link => {
        link.setAttribute('target', '_self');
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    const toggleButton = document.getElementById('toggle-audio');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            const audio = slide.querySelector("audio");
            slide.classList.remove("active");

            // Pausar el audio de la diapositiva anterior si existe
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }

            if (i === index) {
                slide.classList.add("active");

                // Reproducir el audio de la diapositiva actual si existe
                if (audio) {
                    audio.play().catch(err => {
                        console.log('Error al reproducir el audio:', err);
                    });
                }
            }
        });

        setLinksToSameTab(); // Asegura que los enlaces se abran en la misma pestaña
    }

    // Configura los enlaces al cargar la página y cada vez que cambie la diapositiva
    setLinksToSameTab();

    // Llama a setLinksToSameTab al cargar la página y después de cada cambio de diapositiva
    document.querySelectorAll(".navigation button").forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            const direction = event.target.innerText.includes('Siguiente') ? 1 : -1;
            nextSlide(direction);
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
            nextSlide(-1); // Flecha izquierda para ir a la diapositiva anterior
        } else if (event.key === "ArrowRight") {
            nextSlide(1); // Flecha derecha para ir a la diapositiva siguiente
        }
    });

    function nextSlide(direction) {
        currentSlide += direction;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        } else if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }

    // Mostrar la primera diapositiva y reproducir su audio si existe
    showSlide(currentSlide);
});

	
	
	
	
	// Detectar teclas de flecha y la tecla de espacio para control de navegación y audio
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        nextSlide(-1); // Flecha izquierda para ir a la diapositiva anterior
    } else if (event.key === "ArrowRight") {
        nextSlide(1); // Flecha derecha para ir a la diapositiva siguiente
    } else if (event.key === " ") { // Detectar la tecla de espacio
        event.preventDefault(); // Evita el desplazamiento de la página al presionar espacio
        toggleAudio(); // Alternar reproducción/pausa del audio
    }
});

	
	
		document.addEventListener("DOMContentLoaded", () => {
    // Establece todos los enlaces para abrir en la misma pestaña
    document.querySelectorAll('a').forEach(link => {
        link.setAttribute('target', '_self');
		});
	});


	
	document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    const toggleButton = document.getElementById('toggle-audio');

    // (Código de la función showSlide permanece igual)

    // Función para alternar entre pausar y reproducir el audio
    function toggleAudio() {
        const slide = slides[currentSlide];
        const audio = slide.querySelector("audio");
        // (Código de la función toggleAudio permanece igual)
    }

    // Añadimos el event listener al botón de alternar audio
    toggleButton.addEventListener('click', toggleAudio);

    function nextSlide(direction) {
        currentSlide += direction;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        } else if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }
	
	
	
	
	

    // Evitar que los botones de navegación causen saltos de página
    document.querySelectorAll(".navigation button").forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault(); // Previene el salto de página
            const direction = event.target.innerText.includes('Siguiente') ? 1 : -1;
            nextSlide(direction);
        });
    });
});
	
	
    // Mostrar la primera diapositiva y reproducir su audio si existe
    showSlide(currentSlide);

    // Intentar reproducir el audio de fondo automáticamente al cargar la página
    const backgroundMusic = document.getElementById('background-music');
    if (backgroundMusic) {
        backgroundMusic.play().catch(err => {
            console.log('La reproducción automática fue bloqueada por el navegador.', err);
        });
    }

    // Función para alternar entre pausar y reproducir el audio
    function toggleAudio() {
        const slide = slides[currentSlide];
        const audio = slide.querySelector("audio");
        if (audio) {
            if (audio.paused) {
                audio.play().catch(err => {
                    console.log('Error al reproducir el audio:', err);
                });
                toggleButton.textContent = 'Pausar Audio';
            } else {
                audio.pause();
                toggleButton.textContent = 'Reproducir Audio';
            }
        }
    }

    // Añadimos el event listener al botón de alternar audio
    toggleButton.addEventListener('click', toggleAudio);

    function nextSlide(direction) {
        currentSlide += direction;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        } else if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }

    // Añadimos el event listener a todos los botones de navegación
    document.querySelectorAll(".navigation button").forEach(button => {
        button.addEventListener("click", (event) => {
            const direction = event.target.innerText.includes('Siguiente') ? 1 : -1;
            nextSlide(direction);
        });
    });
});


document.addEventListener("visibilitychange", () => {
    const slide = document.querySelector(".slide.active");
    const audio = slide ? slide.querySelector("audio") : null;
    if (audio) {
        if (document.hidden) {
            audio.pause(); // Pausa el audio si la página pierde visibilidad
        } else {
            audio.play().catch(err => {
                console.log('Error al intentar reproducir el audio:', err);
            });
        }
    }
});

window.addEventListener("pagehide", () => {
    const slide = document.querySelector(".slide.active");
    const audio = slide ? slide.querySelector("audio") : null;
    if (audio) {
        audio.pause(); // Pausa el audio cuando el usuario navega fuera de la página
    }
});


// Suponiendo que tienes botones con clases específicas para cada página
document.querySelectorAll(".navigation button").forEach(button => {
    button.addEventListener("click", (event) => {
        event.preventDefault(); // Previene el comportamiento predeterminado de salto de página

        // Determinar la dirección para la navegación entre diapositivas
        const direction = event.target.innerText.includes('Siguiente') ? 1 : -1;
        nextSlide(direction);
    });
});

// Función para redireccionar a una página específica en la misma pestaña
function goToPage(url) {
    window.location.href = url; // Redirige a la página indicada en la misma pestaña
}

// Ejemplo de cómo usar goToPage para un botón específico
document.getElementById("mi-boton-especifico").addEventListener("click", () => {
    goToPage("ruta/a/tu/contenido.html"); // Cambia 'ruta/a/tu/contenido.html' por la URL que deseas
});



document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.setAttribute('target', 'dispose');
    });
});

function toggleMenu() {
    const menuContent = document.getElementById('menu-content');
    if (menuContent.style.display === 'none' || menuContent.style.display === '') {
        menuContent.style.display = 'block';
    } else {
        menuContent.style.display = 'none';
    }
}