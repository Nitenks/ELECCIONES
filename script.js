// Lista completa de mesas
const mesas = [
    "Claudio Arrau 1", "Claudio Arrau 2", "Claudio Arrau 3", "Claudio Arrau 4", "Claudio Arrau 5", "Claudio Arrau 6", "Claudio Arrau 7", "Claudio Arrau 8",
    "Claudio Arrau 9", "Claudio Arrau 10", "Claudio Arrau 11", "Claudio Arrau 12", "Claudio Arrau 13", "Claudio Arrau 14", "Claudio Arrau 15", "Claudio Arrau 16",
    "Guillermina 1", "Guillermina 2", "Guillermina 3", "Guillermina 4", "Guillermina 5", "Guillermina 6", "Guillermina 7", "Guillermina 8",
    "Guillermina 9", "Guillermina 10", "Guillermina 11", "Guillermina 12", "Guillermina 13", "Guillermina 14",
    "Parroquial 1", "Parroquial 2", "Parroquial 3", "Parroquial 4", "Parroquial 5", "Parroquial 6", "Parroquial 7", "Parroquial 8", "Parroquial 9", "Parroquial 10", "Parroquial 11",
    "Cato 1", "Cato 2", "Cato 3", "Cato 4", "Cato 5", "Cato 6", "Cato 7", "Cato 8",
    "Estación Pinto 1", "Estación Pinto 2", "Estación Pinto 3", "Estación Pinto 4", "Estación Pinto 5", "Estación Pinto 6", "Estación Pinto 7", "Estación Pinto 8", "Estación Pinto 9",
    "Bustamante 1", "Bustamante 2", "Bustamante 3", "Bustamante 4", "Bustamante 5", "Bustamante 6", "Bustamante 7", "Bustamante 8", "Bustamante 9"
];

const tbody = document.querySelector('tbody');
const candidatos = ["Luis Amestica", "Wilson Palma", "Juan Muñoz", "Juan Carlos Saez", "Raul Martinez", "Solayen Cardenaz", "Hugo Claveria"];

// Generar filas para cada mesa
mesas.forEach((mesa, mesaIndex) => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${mesa}</td>`;
    
    // Crear una celda de entrada para cada candidato
    candidatos.forEach((_, candidatoIndex) => {
        row.innerHTML += `
            <td><input type="number" value="0" class="vote-input" data-mesa="${mesaIndex}" data-candidato="${candidatoIndex}"></td>
        `;
    });
    
    tbody.appendChild(row);
});

// Guardar votos en localStorage
document.getElementById('saveVotes').addEventListener('click', () => {
    const votes = {};

    const inputs = document.querySelectorAll('.vote-input');
    inputs.forEach(input => {
        const mesa = input.dataset.mesa;
        const candidato = input.dataset.candidato;
        const value = input.value;
        
        if (!votes[mesa]) votes[mesa] = {};
        votes[mesa][candidato] = Number(value);
    });

    localStorage.setItem('votes', JSON.stringify(votes));
    alert("Votos guardados correctamente.");
});
