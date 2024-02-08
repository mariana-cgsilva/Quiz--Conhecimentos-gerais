
const perguntas = [
    {
        pergunta: "Qual é o maior planeta do sistema solar?",
        respostas: [
            "Júpiter",
            "Saturno",
            "Netuno",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o menor país do mundo em área territorial?",
        respostas: [
            "Vaticano",
            "Mônaco",
            "Nauru",
        ],
        correta: 0
    },
    {
        pergunta: "Quem pintou a Mona Lisa?",
        respostas: [
            "Vincent van Gogh",
            "Leonardo da Vinci",
            "Pablo Picasso",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o elemento químico mais abundante no universo?",
        respostas: [
            "Hélio",
            "Hidrogênio",
            "Oxigênio",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o único mamífero capaz de voar?",
        respostas: [
            "Morcego",
            "Pássaro",
            "Esquilo",
        ],
        correta: 0
    },
    {
        pergunta: "Quem escreveu a peça de teatro 'Romeu e Julieta'?",
        respostas: [
            "William Shakespeare",
            "Anton Tchekhov",
            "Molière",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a montanha mais alta do mundo?",
        respostas: [
            "Monte Everest",
            "Monte Kilimanjaro",
            "Monte K2",
        ],
        correta: 0
    },
    {
        pergunta: "Em que ano a Segunda Guerra Mundial começou?",
        respostas: [
            "1939",
            "1941",
            "1945",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a capital do Canadá?",
        respostas: [
            "Toronto",
            "Ottawa",
            "Vancouver",
        ],
        correta: 1
    },
    {
        pergunta: "Quem escreveu 'A Origem das Espécies'?",
        respostas: [
            "Charles Darwin",
            "Isaac Newton",
            "Albert Einstein",
        ],
        correta: 0
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set() 
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


// loop ou laço de repetição
for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
           
            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)
            }
            
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
       
       
    
        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
}