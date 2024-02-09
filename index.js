const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas:[
        "Uma linguagem de programação de alto nível.",
        "Um software de edição de texto.",
        "Um sistema operacional.",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o símbolo usado para comentários de linha única em JavaScript?",
      respostas:[
        "//",
        "/* */",
        "<!-- -->",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de comparação que verifica igualdade de valor e tipo?",
      respostas:[
        "==",
        "===",
        "!=",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para imprimir algo no console do navegador?",
      respostas:[
        "console.write()",
        "print()",
        "console.log()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual função é usada para converter uma string em um número inteiro em JavaScript?",
      respostas:[
        "parseInt()",
        "parseFloat()",
        "toString()",
      ],
      correta: 0
    },
    {
      pergunta: "O que significa DOM em JavaScript?",
      respostas:[
        "Data Object Model",
        "Document Object Model",
        "Dynamic Object Model",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador lógico que retorna verdadeiro se pelo menos uma das expressões for verdadeira?",
      respostas:[
        "&&",
        "||",
        "!",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas:[
        "push()",
        "pop()",
        "splice()",
      ],
      correta: 0
    },
    {
      pergunta: "Como você declara uma variável em JavaScript?",
      respostas:[
        "var",
        "let",
        "ambas acima",
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma função de callback em JavaScript?",
      respostas:[
        "Uma função que é executada após um intervalo de tempo.",
        "Uma função que é passada como argumento para outra função e é executada depois.",
        "Uma função que retorna um valor.",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  //total de itens 
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //laço de repetição
  for(const item of perguntas) {
    //clona o item do template
    const quizItem = template.content.cloneNode(true)
    //modifica o h3 de acordo com as perguntas dentro do array
    quizItem.querySelector('h3').textContent = item.pergunta
  
    //laço para as respostas
    for(let resposta of item.respostas){
      //clona todo o dt do html
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      //colocar a resposta do array dentro do span
      dt.querySelector('span').textContent = resposta
      //adiciona valores para os atributos do input
      dt.querySelector('input').setAttribute('name', 'pergunta' + perguntas.indexOf(item))
      //atualizar o índice do value dentro do input de cada resposta
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      //executa a função sempre que há umma mudança da resposta selecionada
      dt.querySelector('input').onchange = (event) => {
        //comparação da resposta selecionada e resposta correta, resultado T ou F
        const estaCorreta = event.target.value == item.correta
  
        //deleta dado, quando muda de uma certa para errada
        corretas.delete(item)
        //se a resposta estiver correta entrará na condicional
        if(estaCorreta) {
          //contabiliza respostas corretas
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
      //colocar mais 3 dt em tela
      quizItem.querySelector('dl').appendChild(dt)
    }
    //remove o "Resposta A" do início
    quizItem.querySelector('dl dt').remove()
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }