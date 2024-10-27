// script.js
const mesas = [
    "Claudio Arrau 1", "Claudio Arrau 2", "Claudio Arrau 3", "Claudio Arrau 4",
    "Claudio Arrau 5", "Claudio Arrau 6", "Claudio Arrau 7", "Claudio Arrau 8",
    "Claudio Arrau 9", "Claudio Arrau 10", "Claudio Arrau 11", "Claudio Arrau 12",
    "Claudio Arrau 13", "Claudio Arrau 14", "Claudio Arrau 15", "Claudio Arrau 16",
    "Guillermina 1", "Guillermina 2", "Guillermina 3", "Guillermina 4",
    "Guillermina 5", "Guillermina 6", "Guillermina 7", "Guillermina 8",
    "Guillermina 9", "Guillermina 10", "Guillermina 11", "Guillermina 12",
    "Guillermina 13", "Guillermina 14", "Parroquial 1", "Parroquial 2",
    "Parroquial 3", "Parroquial 4", "Parroquial 5", "Parroquial 6",
    "Parroquial 7", "Parroquial 8", "Parroquial 9", "Parroquial 10",
    "Parroquial 11", "Cato 1", "Cato 2", "Cato 3", "Cato 4", "Cato 5",
    "Cato 6", "Cato 7", "Cato 8", "Estación Pinto 1", "Estación Pinto 2",
    "Estación Pinto 3", "Estación Pinto 4", "Estación Pinto 5", 
    "Estación Pinto 6", "Estación Pinto 7", "Estación Pinto 8", 
    "Bustamante 1", "Bustamante 2", "Bustamante 3", "Bustamante 4",
    "Bustamante 5", "Bustamante 6", "Bustamante 7", "Bustamante 8",
    "Bustamante 9"
];

const tableBody = document.querySelector('tbody');

// Generar las filas de la tabla para cada mesa
mesas.forEach((mesa, index) => {
    const row = document.createElement('tr');
    const mesaCell = document.createElement('td');
    mesaCell.textContent = mesa;
    row.appendChild(mesaCell);

    for (let i = 0; i < 7; i++) { // 7 candidatos
        const cell = document.createElement('td');
        const input = document.createElement('input');
        input.type = 'number';
        input.min = '0';
        input.value = loadVote(mesa, i); // Cargar votos guardados
        input.addEventListener('input', () => {
            saveVote(mesa, i, input.value);
        });
        cell.appendChild(input);
        row.appendChild(cell);
    }
    
    tableBody.appendChild(row);
});

// Función para guardar votos en localStorage
function saveVote(mesa, candidateIndex, votes) {
    localStorage.setItem(`${mesa}_votes_${candidateIndex}`, votes);
}

// Función para cargar votos desde localStorage
function loadVote(mesa, candidateIndex) {
    return localStorage.getItem(`${mesa}_votes_${candidateIndex}`) || 0; // Devuelve 0 si no hay votos
}

// Guardar votos al hacer clic en el botón (opcional)
document.getElementById('saveVotes').addEventListener('click', () => {
    alert("Votos guardados exitosamente.");
});

