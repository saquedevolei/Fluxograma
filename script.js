// Definição da história
const story = {
    start: {
        text: "Você encontra um mapa antigo com uma mensagem enigmática. O que você faz?",
        choices: {
            seguir: "mar",
            ignorar: "fim1",
        },
    },
    mar: {
        text: "Você decide seguir o mapa e embarcar numa jornada perigosa. Como vai atravessar o mar?",
        choices: {
            barco: "ilha",
            capitão: "ilha",
            jangada: "naufragio",
        },
    },
    ilha: {
        text: "Você chega à ilha misteriosa. Escolha seu caminho:",
        choices: {
            floresta: "desafio1",
            litoral: "desafio2",
            pedras: "desafio3",
        },
    },
    naufragio: {
        text: "Sua jangada não suporta a tempestade, e você se perde no mar. Fim de jogo.",
        choices: {},
    },
    fim1: {
        text: "Você decide ignorar o mapa. Talvez a vida tranquila seja melhor. Fim de jogo.",
        choices: {},
    },
    desafio1: {
        text: "Na floresta, um leão aparece. O que fazer?",
        choices: {
            correr: "fim2",
            lutar: "tesouro",
        },
    },
    fim2: {
        text: "Você corre, mas se perde na floresta. Fim de jogo.",
        choices: {},
    },
    tesouro: {
        text: "Você supera os desafios e encontra o tesouro perdido! Parabéns!",
        choices: {},
    },
};

// Controle da história
let currentScene = "start";

function chooseOption(choice) {
    const scene = story[currentScene];
    if (scene.choices[choice]) {
        currentScene = scene.choices[choice];
        updateStory();
    }
}

function updateStory() {
    const scene = story[currentScene];
    document.getElementById("story").innerText = scene.text;
    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = ""; // Limpa as escolhas anteriores
    for (const [key, value] of Object.entries(scene.choices)) {
        const button = document.createElement("button");
        button.innerText = key;
        button.onclick = () => chooseOption(key);
        choicesDiv.appendChild(button);
    }
}

// Inicializa a história
updateStory();
