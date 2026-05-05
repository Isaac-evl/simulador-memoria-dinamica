
const TOTAL_MEMORIA = 1024;
let bloques = [
    { id: null, tamano: 1024, estado: 'libre' }
];

const btnCargar = document.getElementById('btncargar');
const inputTamanho = document.getElementById('tamanho');
const contenedorMemoria = document.getElementById('vermemoria');

function dibujarMemoria() {
    contenedorMemoria.innerHTML = ''; 

    bloques.forEach((block, index) => {
        const div = document.createElement('div');
        div.classList.add('bloque');
        div.classList.add(block.estado);

        const porcentaje = (block.tamano / TOTAL_MEMORIA) * 100;
        div.style.width = porcentaje + '%';

        div.innerHTML = `
            <span>${block.estado === 'libre' ? 'Libre' : block.id}</span>
            <small>${block.tamano} KB</small>
        `;

        if (block.estado === 'ocupado') {
            div.title = "Haz clic para liberar este proceso";
            div.onclick = () => liberarProceso(index);
        }

        contenedorMemoria.appendChild(div);
    });
}

btnCargar.onclick = function() {
    const tamanhoRequerido = parseInt(inputTamanho.value);

    if (isNaN(tamanhoRequerido) || tamanhoRequerido <= 0) {
        alert("Por favor, ingresa un tamaño válido en KB.");
        return;
    }

    for (let i = 0; i < bloques.length; i++) {
        if (bloques[i].estado === 'libre' && bloques[i].tamano >= tamanhoRequerido) {
            const espacioSobrante = bloques[i].tamano - tamanhoRequerido;

            bloques[i].estado = 'ocupado';
            bloques[i].tamano = tamanhoRequerido;
            bloques[i].id = "P-" + Math.floor(Math.random() * 900 + 100);

            if (espacioSobrante > 0) {
                bloques.splice(i + 1, 0, {
                    id: null,
                    tamano: espacioSobrante,
                    estado: 'libre'
                });
            }

            inputTamanho.value = ''; 
            dibujarMemoria();
            return; 
        }
    }
    alert("No hay suficiente espacio contiguo para este proceso.");
};

function liberarProceso(indice) {
    
    bloques[indice].estado = 'libre';
    bloques[indice].id = null;

    for (let i = 0; i < bloques.length - 1; i++) {
        if (bloques[i].estado === 'libre' && bloques[i + 1].estado === 'libre') {
            bloques[i].tamano += bloques[i + 1].tamano;
            bloques.splice(i + 1, 1);
            i--; 
        }
    }
    dibujarMemoria();
}

dibujarMemoria();