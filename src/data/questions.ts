import { Question } from '../types/questions';

export const chapterQuestions: Record<string, Question[]> = {
  chapter1: [
    {
      id: 'ch1_q1',
      type: 'alternative',
      number: 1,
      question: 'Qual é o principal objetivo do texto <em>Lepidopterista!?</em>',
      options: [
        'Relatar uma situação vivida por uma pesquisadora.',
        'Convencer o leitor a seguir uma carreira científica.',
        'Informar o leitor sobre o trabalho de quem estuda borboletas e mariposas. ',
        'Ensinar o leitor a cuidar de borboletas em casa.',
      ],
      correctAnswer: 2,
    },
    {
      id: 'ch1_q2',
      type: 'alternative-with-excerpts',
      number: 2,
      question: 'Leia os trechos a seguir. Em seguida, resolva os itens.',
      textExcerpts: [
        'As asas das borboletas e mariposas são cobertas por minúsculas escamas [...]',
        'Elas ajudam a indicar a qualidade dos ambientes.',
        'Borboletas e mariposas têm um papel essencial para os ecossistemas [...]',
      ],
      subQuestions: [
        {
          letter: 'a',
          question: 'As frases estão em qual tempo verbal?',
          options: [
            'Passado',
            'Presente',
            'Futuro',
          ],
          correctAnswer: 1,
        },
        {
          letter: 'b',
          question: 'Por que esse tempo verbal é adequado ao artigo de divulgação científica?',
          options: [
            'Porque o texto conta uma história que já aconteceu.',
            'Porque o texto apresenta instruções passo a passo.',
            'Porque o texto apresenta informações que são válidas em qualquer tempo.',
            'Porque o texto mostra eventos que ainda vão ocorrer no futuro.',
          ],
          correctAnswer: 2,
        },
      ],
    },
    {
      id: 'ch1_q3',
      type: 'text-input',
      number: 3,
      question: 'O artigo de divulgação científica é escrito para pessoas que não são especialistas em um assunto. Com base nisso, resolva os itens.',
      subQuestions: [
        {
          letter: 'a',
          question: 'Encontre e transcreva um trecho do texto que mostre que a linguagem usada é acessível ao público em geral, e não voltada a cientistas.',
          placeholder: 'Digite sua resposta aqui...',
          correctAnswer: 'Sugestões: “O nome que trava a língua vem de um ramo da entomologia (área da ciência que estuda os insetos) […]”, “Ela tem essa e outras informações valiosas a compartilhar sobre esses animais tão encantadores…”, “Então, trabalho não falta! A pesquisadora conta que ainda há muito a se descobrir sobre esses insetos, principalmente sobre as mariposas”.',
        },
      ],
    },
    {
      id: 'ch1_q4',
      type: 'alternative-with-excerpts',
      question: '',
      subQuestions: [
        {
          letter: 'b',
          question: 'Quais são os elementos linguísticos presentes no trecho escolhido por você que ajudam a torná-lo mais acessível ao público geral? Assinale as alternativas corretas.',
          options: [
            'Uso de termos científicos.',
            'Uso de adjetivos. ',
            'Uso de expressões informais.',
            'Uso de linguagem formal.',
            'Uso de siglas.',
            'Uso de vocabulário acadêmico.',
          ],
          correctAnswer: [1, 2], // Índices 1 (adjetivos) e 2 (expressões informais)
          allowMultiple: true,
        },
      ],
    },
    {
      id: 'ch1_q5',
      type: 'true-false',
      number: 4,
      question: 'Leia as afirmações sobre o texto <em>Lepidopterista!</em>. Em seguida, marque <strong>V</strong> para o que for verdadeiro e <strong>F</strong> para o que for falso.',
      hasIndividualTextFields: true,
      instructions: [
        'Para as afirmativas verdadeiras, copie um trecho do texto que comprove a afirmação.',
        'Para as falsas, justifique por que o texto não apresenta essa característica.',
      ],
      statements: [
        {
          statement: 'Apresenta um título que antecipa o tema do texto e desperta curiosidade.',
          correctAnswer: true,
          proof: 'Lepidopterista!',
        },
        {
          statement: 'Explica termos científicos de forma acessível.',
          correctAnswer: true,
          proof: '\'Lepi\' significa escama e \'ptera\', asas.',
        },
        {
          statement: 'Usa linguagem técnica e difícil, própria de artigos acadêmicos.',
          correctAnswer: false,
          correction: 'O texto usa linguagem simples, voltada ao público leigo, e os termos técnicos são explicados de maneira acessível.',
        },
        {
          statement: 'Relaciona o tema a situações do cotidiano.',
          correctAnswer: true,
          proof: 'Já notou alguma voando por aí?',
        },
        {
          statement: 'Tem como público principal outros cientistas.',
          correctAnswer: false,
          correction: 'O texto é de divulgação científica, voltado ao público geral, principalmente jovens leitores.',
        },
      ],
    },
    {
      id: 'ch1_q6',
      type: 'text-input',
      number: 5,
      question: 'O autor de um artigo de divulgação científica utiliza diferentes recursos para convencer o leitor sobre a veracidade do que escreve. Leia o trecho e, em seguida, resolva os itens.',
      subQuestions: [
        {
          letter: 'a',
          question: 'Sublinhe no trecho os recursos utilizados pela autora para demonstrar a confiabilidade das informações apresentadas no artigo.',
          requiresTextSelection: true,
          selectableText: 'O nome que trava a língua vem de um ramo da entomologia (área da ciência que estuda os insetos) que se dedica especialmente à ordem Lepidoptera, composta pelas borboletas e mariposas. "Lepi" significa escama e "ptera", asas. "As asas das borboletas e mariposas são cobertas por minúsculas escamas", conta a lepidopterista Laura Braga, pesquisadora do Instituto Nacional da Mata Atlântica. Ela tem essa e outras informações valiosas a compartilhar sobre esses animais tão encantadores...',
          correctSelections: [
            'entomologia (área da ciência que estuda os insetos)',
            'conta a lepidopterista Laura Braga, pesquisadora do Instituto Nacional da Mata Atlântica',
          ],
        },
        {
          letter: 'b',
          question: 'De que maneira os trechos selecionados contribuem para demonstrar a confiabilidade das informações? Explique sua resposta.',
          placeholder: 'Digite sua resposta aqui...',
          correctAnswer: 'Os trechos demonstram a confiabilidade do artigo ao empregar o argumento de autoridade de maneira estruturada. Primeiro, a autora ancora a informação em um campo científico reconhecido (a entomologia), conferindo base técnica. Depois, atribui a explicação a uma fonte qualificada e nomeada (a lepidopterista Laura Braga), tornando a origem da informação transparente. Por fim, valida essa fonte ao apresentar sua credencial e afiliação a uma instituição de pesquisa (pesquisadora do Instituto Nacional da Mata Atlântica), o que comprova sua especialização e torna o conteúdo fidedigno e verificável.',
        },
      ],
    },
    {
      id: 'ch1_q7',
      type: 'text-input',
      number: 1,
      question: 'Leia os trechos extraídos do Texto II e explique com suas palavras qual foi a estratégia utilizada para facilitar a compreensão das informações científicas pelo leitor.',
      subQuestions: [
        {
          letter: 'a',
          question: '“Já o aparelho bucal das duas é formado por uma espirotromba. O órgão lembra uma língua de sogra, que se desenrola para sugar o néctar das flores e dos frutos.”',
          placeholder: 'Digite sua resposta aqui...',
          correctAnswer: 'As respostas podem variar. O objetivo é que os alunos identifiquem a lógica por trás da escolha. Estratégia principal: comparação com o cotidiano/analogia.',
        },
        {
          letter: 'b',
          question: '“Assim como parentes distantes que compartilham o mesmo sobrenome, borboletas e mariposas são chamadas de lepidópteros. O nome indica aqueles insetos que têm o corpo dividido entre cabeça, tórax e abdômen […].”',
          placeholder: 'Digite sua resposta aqui...',
          correctAnswer: 'As respostas podem variar. O objetivo é que os alunos identifiquem a lógica por trás da escolha. Estratégia principal: definição de termo técnico.',
        },
      ],
    },
    {
      id: 'ch1_q8',
      type: 'alternative',
      number: 1,
      question: 'O objetivo principal do texto <em>Pequenos animais que movem o mundo</em> é',
      options: [
        'listar espécies que vivem no Brasil e em outros países.',
        'explicar o ciclo de vida dos pequenos animais e sua relação com o equilíbrio ambiental.',
        'mostrar como pequenos animais são fundamentais para o equilíbrio ambiental.',
        'ensinar como cuidar de animais de pequeno porte em hortas ou jardins.',
      ],
      correctAnswer: 2,
    },
    {
      id: 'ch1_q9',
      type: 'true-false',
      number: 2,
      question: 'Leia atentamente as afirmações a seguir sobre o Texto III. Depois, marque <strong>V</strong> para o que for verdadeiro e <strong>F</strong> para o que for falso. Quando marcar <strong>F</strong>, explique por que a frase está incorreta.',
      hasCorrectionBox: true,
      correctionPlaceholder: 'Corrija as afirmações falsas aqui...',
      statements: [
        {
          letter: 'a',
          statement: 'O texto apresenta termos científicos complexos e mantidos sem explicação, porque é voltado a leitores especializados.',
          correctAnswer: false,
          correction: 'O texto é voltado para o público leigo e, por isso, explica termos científicos e utiliza linguagem acessível. Não foi escrito para especialistas, mas para jovens leitores interessados em ciência.',
        },
        {
          letter: 'b',
          statement: 'O texto utiliza comparações com situações do cotidiano para tornar o conteúdo mais próximo e compreensível.',
          correctAnswer: true,
        },
        {
          letter: 'c',
          statement: 'A linguagem do texto é acessível, envolvente e produzida para ser entendida por leitores que não são cientistas.',
          correctAnswer: true,
        },
        {
          letter: 'd',
          statement: 'O texto apresenta dados e informações científicas sobre vários animais pequenos e seus papéis na natureza.',
          correctAnswer: true,
        },
      ],
    },
    {
      id: 'ch1_q10',
      type: 'text-input',
      number: 3,
      question: 'Escolha um dos animais citados no texto. No espaço a seguir, escreva duas características que você já conhece e duas informações que gostaria de descobrir sobre ele.',
      placeholder: 'Digite sua resposta aqui...',
      correctAnswer: 'Pessoal.',
    },
  ],
  chapter2: [
    {
      id: 'ch2_q1',
      type: 'alternative',
      number: 1,
      question: 'Qual fato cotidiano inspira o cronista a escrever o texto?',
      options: [
        'Uma discussão filosófica sobre o real significado das palavras.',
        'A dificuldade de ler as letras miúdas nas bulas de remédio.',
        'A lembrança das letras nas cartilhas de alfabetização.',
        'Uma visita à seção de livros infantis de uma biblioteca pública.',
      ],
      correctAnswer: 2,
    },
    {
      id: 'ch2_q2',
      type: 'true-false',
      number: 2,
      question: 'Leia as afirmações sobre as ideias do autor. Assinale <strong>V</strong> para o que for verdadeiro e <strong>F</strong> para o que for falso. Depois, reescreva as frases falsas, corrigindo-as.',
      hasCorrectionBox: true,
      correctionPlaceholder: 'Corrija as afirmações falsas aqui...',
      statements: [
        {
          letter: 'a',
          statement: 'O autor afirma que, na infância, os livros tinham letras grandes porque sua visão era ruim.',
          correctAnswer: false,
          correction: ' O autor afirma que, na infância, sua visão era perfeita, e que as letras grandes talvez nem fossem tão necessárias.',
        },
        {
          letter: 'b',
          statement: 'Segundo a crônica, lemos textos com letras miúdas (jornal, bulas) justamente na fase da vida em que nossa visão já não é mais tão boa.',
          correctAnswer: true,
        },
        {
          letter: 'c',
          statement: 'O autor acredita que palavras como <strong>autóctone</strong> e <strong>seborreia</strong> deveriam estar presentes nas cartilhas infantis para preparar as crianças.',
          correctAnswer: false,
          correction: ' O autor acredita que palavras como <strong>autóctone</strong> e <strong>seborreia</strong> teriam desanimado as crianças e que as cartilhas escondiam os terrores da língua.',
        },
        {
          letter: 'd',
          statement: 'O texto apresenta dados e informações científicas sobre vários animais pequenos e seus papéis na natureza.',
          correctAnswer: true,
        },
      ],
    },
    {
      id: 'ch2_q3',
      type: 'text-input',
      number: 3,
      question: 'Releia o trecho final da crônica, em que o autor reflete sobre uma inversão no ciclo da leitura ao longo da vida, e analise as afirmativas a seguir.',
      subQuestions: [
        {
          letter: 'I.',
          question: 'O autor propõe, de forma irônica e poética, que o aprendizado da leitura deveria ser invertido: textos complexos para as crianças e textos simples para os mais velhos.',
          hideTextInput: true,
        },
        {
          letter: 'II.',
          question: 'Segundo o autor, os adultos perdem a inteligência gradualmente e, por isso, deveriam voltar a ler apenas os livros simples que liam quando eram crianças.',
          hideTextInput: true,
        },
        {
          letter: 'III.',
          question: 'A ideia de que as crianças deveriam ler Hegel se justifica por elas terem a visão perfeita e uma mente mais aberta para temas abstratos.',
          hideTextInput: true,
        },
        {
          letter: 'IV.',
          question: 'Voltar à cartilha quando idoso significaria um prêmio: a chance de se maravilhar com a simplicidade que a pressa da infância e da vida adulta não permite ver',
          hideTextInput: true,
        },
      ],
    },
    {
      id: 'ch2_q4',
      type: 'alternative',
      number: 3,
      question: 'Assinale a alternativa que indica as afirmativas corretas.',
      options: [
        'Apenas I e II estão corretas.',
        'Apenas II e IV estão corretas. ',
        'Apenas I, III e IV estão corretas. ',
        'Todas as afirmativas estão corretas.',
      ],
      correctAnswer: 2,

    },
    {
      id: 'ch2_q5',
      type: 'alternative',
      number: 4,
      question: 'O texto ABC é uma crônica literária. Marque um X nas características que confirmam isso.',
      options: [
        'Tema fantasioso e cheio de ação.',
        'Texto em prosa, leve e reflexivo.',
        'Narrador que escreve com base em uma perspectiva pessoal.',
        'Linguagem simples e próxima da fala.',
        'Descrição objetiva de um grande acontecimento.',
        'Olhar subjetivo e criativo sobre a realidade.',
        'Humor e ironia sobre temas da vida cotidiana.',
      ],
      correctAnswer: [1, 2, 3, 5, 6], // Índices das respostas corretas: b, c, d, f, g
      allowMultiple: true,
    },
    {
      id: 'ch2_q6',
      type: 'ordering',
      number: 5,
      question: 'As crônicas geralmente seguem uma estrutura. Numere os acontecimentos de 1 a 3 para mostrar a ordem em que eles aparecem no texto ABC.',
      items: [
        {
          id: 'item1',
          text: 'O autor desenvolve a ideia, comparando a leitura na infância e na vida adulta, e reflete sobre palavras complexas.',
          correctOrder: 2,
        },
        {
          id: 'item2',
          text: 'O autor apresenta sua reflexão final, uma proposta irônica de inverter a ordem de leitura ao longo da vida.',
          correctOrder: 3,
        },
        {
          id: 'item3',
          text: 'O autor parte de um detalhe do cotidiano: a lembrança das letras grandes na cartilha de alfabetização.',
          correctOrder: 1,
        },
      ],
    },
    {
      id: 'ch2_q7',
      type: 'text-input',
      number: 6,
      question: 'Releia o segundo parágrafo da crônica e destaque:',
      instructions: [
        'um trecho que comprove o uso de uma perspectiva pessoal na narração;',
        'um exemplo de linguagem simples e informal.',
      ],
      requiresTextSelection: true,
      selectableText: '"As letras eram grandes, claro, para que decorássemos a sua forma. Mas não precisavam ser tão grandes. Que eu me lembre, minha visão na época era perfeita. Nunca mais foi tão boa. E no entanto os livros infantis eram impressos com letras graúdas e entrelinhas generosas. E as palavras eram curtas. Para não cansar a vista."',
      correctSelections: [
        'Que eu me lembre, minha visão na época era perfeita.',
        'Para não cansar a vista.',
      ],
    },
    {
      id: 'ch2_q8',
      type: 'text-input',
      number: 7,
      question: 'O autor dá vida às letras usando a personificação. Ele descreve o <strong>R</strong> como alguém que chuta e o <strong>Q</strong> como um <strong>O</strong> com a língua de fora. Seu desafio é fazer o mesmo. Escolha uma letra que não apareceu no texto e crie um pequeno parágrafo descrevendo-a como se ela fosse uma pessoa, com um jeito e uma personalidade próprios.',
      placeholder: 'Digite sua resposta aqui...',
      correctAnswer: 'Pessoal. Sugestão: Se o alfabeto fosse uma cidade, o S seria aquela rua cheia de curvas que todos evitam quando estão com pressa, mas que é a mais bonita para um passeio sem rumo. Ele se recusa a andar em linha reta. Talvez por isso seja o responsável pelos plurais: uma letra que nunca está satisfeita com uma coisa só precisa de caminhos tortuosos para conseguir abraçar todas as outras.',
    },
    {
      id: 'ch2_q9',
      type: 'text-input',
      number: 1,
      question: 'No texto, a narradora lembra objetos que marcaram momentos especiais da infância. Observe o quadro com os objetos e as memórias associadas a eles. Depois, responda às perguntas.',
      table: {
        columns: ['Objeto', 'Memória associada'],
        rows: [
          {
            'Objeto': 'Lancheira roxa',
            'Memória associada': 'Presente da irmã, símbolo da alegria e da expectativa para o primeiro dia na escola.',
          },
          {
            'Objeto': 'Papel almaço',
            'Memória associada': 'A lição caprichada que amassou e a deixou nervosa, mostrando seu cuidado com os estudos.',
          },
          {
            'Objeto': 'Caneta com flores',
            'Memória associada': 'Primeira caneta "de apertar" que pôde usar; também presente da irmã, marcando uma conquista escolar.',
          },
        ],
      },
      subQuestions: [
        {
          letter: 'a',
          question: 'O que esses três objetos têm em comum na história da narradora? Explique com suas palavras.',
          placeholder: 'Digite sua resposta aqui...',
          correctAnswer: 'Todos expressam momentos marcantes e afetivos da vida escolar da narradora. Mais do que objetos, eles representam o apoio da família — especialmente das irmãs — em sua trajetória de aprendizado.',
        },
        {
          letter: 'b',
          question: 'Esses objetos também podem dizer algo sobre o interesse que a própria narradora tem pelos estudos? Justifique sua resposta com base no texto. ',
          placeholder: 'Digite sua resposta aqui...',
          correctAnswer: 'Sim. A narradora demonstra envolvimento e afeto com cada item: ela dorme abraçada com a lancheira, fica nervosa quando amassa a lição, sente orgulho da caneta. Isso mostra que ela valorizava muito sua própria experiência de estudar.',
        },
      ],
    },
    {
      id: 'ch2_q10',
      type: 'text-input',
      number: 2,
      question: 'O texto da crônica apresenta lembranças pessoais marcadas por diferentes sentimentos. Releia e identifique um trecho bem-humorado e outro que revele sensibilidade. Depois, explique sua escolha.',
      subQuestions: [
        {
          letter: 'a',
          question: 'Trecho com humor.',
          placeholder: 'Digite sua resposta aqui...',
          correctAnswer: 'Pessoal. Sugestão: “[…] achei muito curto, parecendo uma tigela”. Explicação: O humor vem da comparação exagerada e da imagem cômica de um cabelo que parece uma tigela, algo típico do descontentamento infantil.',
        },
      ],
    },
    {
      id: 'ch2_q11',
      type: 'text-input',
      question: '',
      subQuestions: [
        {
          letter: 'b',
          question: 'Trecho com sensibilidade.',
          placeholder: 'Digite sua resposta aqui...',
          correctAnswer: 'Pessoal. Sugestão: “[…] aquela que é uma das primeiras palavras que aprendemos a falar, com a letrinha de três pernas, escrevendo com letra de mão”. Explicação: A sensibilidade está na maneira delicada e poética de descrever a escrita da palavra <strong>mamãe</strong>, associando a letra <strong>M</strong> a <strong>três pernas</strong> e valorizando um momento do aprendizado.',
        },
      ],
    },
    {
      id: 'ch2_q12',
      type: 'matching',
      number: 3,
      question: 'O Texto II é uma crônica. Relacione cada característica desse gênero textual ao trecho que melhor a representa.',
      characteristics: [
        {
          letter: 'A',
          text: 'Presença de um olhar pessoal e subjetivo da narradora sobre os fatos.',
        },
        {
          letter: 'B',
          text: 'Narrativa curta baseada na memória de um fato cotidiano.',
        },
        {
          letter: 'C',
          text: 'Linguagem informal, que se aproxima de uma conversa com o leitor.',
        },
        {
          letter: 'D',
          text: 'Mistura de observação detalhada dos fatos com a emoção da narradora.',
        },
      ],
      excerpts: [
        {
          id: 'excerpt1',
          text: '"[...] minha mãe dizia que o prézinho não contava [...]"',
          correctAnswer: 'C',
        },
        {
          id: 'excerpt2',
          text: '"Eu dormi abraçada com a lancheira, como acabei escutando os adultos dizerem [...]"',
          correctAnswer: 'A',
        },
        {
          id: 'excerpt3',
          text: '"Dentro havia um compartimento com uma garrafa, larga, térmica, com tampa de rosquear que servia de caneca e um bico que abria e fechava. Era tão linda aquela garrafa!"',
          correctAnswer: 'D',
        },
        {
          id: 'excerpt4',
          text: '"Lembro tanto das camas e quartos porque a cena mais viva que tenho da lancheira roxa em minhas mãos foi sentada na cama, felicíssima [...]"',
          correctAnswer: 'B',
        },
      ],
    },
    {
      id: 'ch2_q13',
      type: 'alternative',
      number: 4,
      question: 'Qual das afirmações a seguir melhor explica por que os dois textos são considerados crônicas, mesmo sendo diferentes?',
      options: [
        'São narrativas totalmente inventadas com personagens fictícios.',
        'Inspiram-se em um elemento do cotidiano para construir um olhar pessoal e subjetivo sobre a vida. ',
        'Apresentam tramas longas e cheias de ação e aventura.  ',
        'Preocupam-se em informar um fato ao leitor, apresentando detalhes sobre o tema.',
      ],
      correctAnswer: 1,
    },
    {
      id: 'ch2_q14',
      type: 'text-input',
      number: 5,
      question: 'A autora transformou as lembranças de sua lancheira em uma história de memórias. Agora, lembre-se de algum um objeto marcante que você tem ou já teve na infância e escreva algumas informações sobre ele.',
      subQuestions: [
        {
          letter: 'a',
          question: 'Qual é o objeto?',
          placeholder: 'Digite sua resposta aqui...',
          correctAnswer: 'Pessoal.',
        },
        {
          letter: 'b',
          question: 'Como ele é ou era? Descreva as características dele, como cor, formato, cheiro ou textura. ',
          placeholder: 'Digite sua resposta aqui...',
          correctAnswer: 'Pessoal.',
        },
        {
          letter: 'c',
          question: 'Por que o objeto é ou era especial?',
          placeholder: 'Digite sua resposta aqui...',
          correctAnswer: 'Pessoal.',
        },
        {
          letter: 'd',
          question: 'Como esse objeto faz ou fazia você se sentir?',
          placeholder: 'Digite sua resposta aqui...',
          correctAnswer: 'Pessoal.',
        },
        {
          letter: 'e',
          question: 'Quais memórias esse objeto traz para você?',
          placeholder: 'Digite sua resposta aqui...',
          correctAnswer: 'Pessoal.',
        },
      ],
    },
    {
      id: 'ch2_q15',
      type: 'text-input',
      number: 1,
      question: 'Para lidar com o resultado do jogo, o cronista inventa argumentos exagerados e bem-humorados. Cite duas dessas explicações imaginativas que ele cria para a derrota do Brasil.',
      placeholder: 'Digite sua resposta aqui...',
      correctAnswer: 'Sugestões: os zagueiros David Luiz e Dante não se conheciam e só foram se apresentar quando o jogo já estava 5 a 0; o técnico convocou o Fred errado para a partida; os quatro gols sofridos em seis minutos foram uma invasão do sobrenatural e não deveriam contar.',
    },
    {
      id: 'ch2_q16',
      type: 'alternative',
      number: 2,
      question: 'O autor afirma que uma derrota de 10 a 1 teria sido melhor, pois a única reação possível seria uma grande gargalhada. Essa afirmação é um recurso de estilo. Qual das alternativas a seguir descreve melhor a estratégia utilizada pelo autor e seu efeito de sentido?',
      options: [
        'O uso de linguagem literal e direta para criticar de modo objetivo o desempenho dos jogadores.',
        'A utilização da hipérbole (exagero intencional) para criar um efeito de humor e absurdo diante da tragédia.',
        'A criação de um tom sentimental e nostálgico para expressar a profunda tristeza causada pela derrota. ',
        'O emprego de uma linguagem técnica e analítica para avaliar com precisão os erros táticos da partida.',
      ],
      correctAnswer: 1,
    },
    {
      id: 'ch2_q17',
      type: 'text-input',
      number: 3,
      question: 'Na última frase, o cronista afirma: “A esta altura, só nos resta a hipocrisia”. Considerando a rivalidade entre Brasil e Argentina, o que o uso da palavra <strong>hipocrisia</strong> revela sobre o sentimento do torcedor brasileiro naquela final?',
      placeholder: 'Digite sua resposta aqui...',
      correctAnswer: 'Revela o sentimento contraditório de ter que torcer por seu maior rival (Argentina) contra o time que o humilhou (Alemanha). É um apoio, não por irmandade, mas por vingança, o que o cronista define ironicamente como um ato de hipocrisia.',
    },
    {
      id: 'ch2_q18',
      type: 'alternative',
      number: 4,
      question: 'Marque a alternativa que melhor define o estilo da crônica <em>Os seis minutos</em>.',
      options: [
        'Crônica de memória afetiva, focada em lembranças pessoais.',
        'Crônica-ensaio, com uma análise filosófica sobre o futebol. ',
        'Crônica humorística embasada em um fato de repercussão pública. ',
        'Crônica literária fictícia sobre uma situação inventada.',
      ],
      correctAnswer: 2,
    },
    {
      id: 'ch2_q19',
      type: 'true-false',
      number: 5,
      question: 'Analise as afirmações a seguir, que comparam o estilo e a estrutura de cada uma das crônicas do capítulo. Marque <strong>V</strong> para o que for verdadeiro ou <strong>F</strong> para o que for falso e, em seguida, corrija as afirmações falsas.',
      hasCorrectionBox: true,
      correctionPlaceholder: 'Corrija as afirmações falsas aqui...',
      statements: [
        {
          letter: 'a',
          statement: 'Enquanto <em>Os seis minutos</em> parte de uma memória pessoal do autor sobre futebol, as crônicas <em>ABC</em> e <em>A lancheira roxa e o primeiro dia de aula</em> são inspiradas em notícias',
          correctAnswer: false,
          correction: '<em>Os seis minutos</em> se baseia em um fato público e noticiado, enquanto <em>ABC</em> e <em>A lancheira roxa e o primeiro dia de aula</em> foram inspiradas por memórias pessoais e íntimas dos autores.',
        },
        {
          letter: 'b',
          statement: 'Apesar de tratarem de temas diferentes, as crônicas <em>ABC</em> e <em>Os seis minutos</em> se assemelham pela adoção de um tom nostálgico para fazer uma reflexão.',
          correctAnswer: true,
        },
        {
          letter: 'c',
          statement: 'O estilo usado por Elaine Oliveira em <em>A lancheira roxa e o primeiro dia de aula</em> é muito semelhante ao de Verissimo em Os seis minutos, pois os dois autores tratam seus temas de maneira principalmente cômica e exagerada.',
          correctAnswer: false,
          correction: 'O tom dos autores é diferente. Elaine Oliveira usa um tom afetivo, sensível e nostálgico para criar emoção, enquanto Verissimo usa um tom irônico, cômico e exagerado para gerar humor e reflexão crítica.',
        },
        {
          letter: 'd',
          statement: 'Os três textos podem ser chamados de crônica porque apresentam um olhar pessoal e subjetivo do autor sobre um acontecimento, que pode ser uma lembrança ou uma notícia.',
          correctAnswer: true,
        },
      ],
    },
    {
      id: 'ch2_q20',
      type: 'text-input',
      number: 6,
      question: 'Após ler e analisar os três textos com seus diferentes estilos, responda às questões a seguir.',
      subQuestions: [
        {
          letter: 'a',
          question: 'Se você tivesse que explicar para alguém o que é uma crônica, usando os três textos que leu neste capítulo como exemplo, o que você diria? ',
          placeholder: 'Digite sua resposta aqui...',
          correctAnswer: 'Pessoal. Espera-se que os alunos expliquem que uma crônica é um texto que tem origem em algo simples do dia a dia (uma lembrança da escola, um acontecimento inesperado ou uma notícia) para apresentar um olhar pessoal sobre aquilo.',
        },
        {
          letter: 'b',
          question: 'Qual característica principal une todos os textos, mesmo sendo distintos? ',
          placeholder: 'Digite sua resposta aqui...',
          correctAnswer: 'A característica que une os três textos é o ponto de vista subjetivo do autor, que transforma um fato comum em algo novo por meio do humor, da emoção ou da crítica. ',
        },
      ],
    },
    {
      id: 'ch2_q21',
      type: 'text-input',
      number: 7,
      question: 'Leia as cinco manchetes a seguir, que tratam de situações do cotidiano. Escolha aquela que, na sua avaliação, apresenta maior potencial para ser tema de uma crônica. Em seguida, justifique sua escolha.',
      newsItems: [
        {
          headline: 'Vídeo: grupo de búfalos é visto tomando banho no Rio Pinheiros, na região de Santo Amaro, em SP',
          summary: 'O flagrante foi registrado por uma passageira da Linha 5 - Lilás, no sentido Interlagos, na manhã desta segunda-feira (15).',
          source: 'BACKES, Beatriz; FERREIRA, Fernanda. Vídeo: grupo de búfalos é visto tomando banho no Rio Pinheiros, em SP, na região de Santo Amaro. Disponível em: https://gl.globo.com/sp/sao-paulo/noticia/2025/09/15/video-grupo-de-bufalos-e-visto-tomando-banho-no-rio-pinheiros-em-sp-na-regiao-de-santo-amaro.ghtml. Acesso em: 2 out. 2025.',
        },
        {
          headline: 'Estudante cria software de estudo para o Enem em apenas dois dias e vence prêmio global: "Honra enorme"',
          summary: 'Giovanna Moeller, de 24 anos, é graduanda de Sistemas da Informação na Unesp de Bauru (SP). A competição juntou mais de 10 mil pessoas e foi realizada de forma online, em uma plataforma do Google.',
          source: 'MINGRONI, Enzo; SGANZERLA, Clara. Estudante cria software de estudo para o Enem em apenas dois dias e vence prêmio global: "Honra enorme". Disponível em: https://gl.globo.com/sp/bauru-marilia/noticia/2025/08/18/estudante-cria-software-de-estudo-para-o-enem-em-apenas-dois-dias-e-vence-premio-global-honra-enorme.ghtml. Acesso em: 2 out. 2025.',
        },
        {
          headline: 'Outubro Rosa: Fundação Laço Rosa oferece 3 mil mamografias gratuitas; veja como se inscrever',
          summary: 'Caminhão da entidade vai circular pelo Rio e São Paulo; exames são destinados a mulheres a partir de 40 anos e podem ser agendados pelo site.',
          source: 'OUTUBRO Rosa: Fundação Laço Rosa oferece 3 mil mamografias gratuitas; veja como se inscrever. Disponível em: https://gl.globo.com/rj/rio-de-janeiro/noticia/2025/10/01/outubro-rosa-fundacao-laco-rosa-oferece-3-mil-mamografias-gratuitas-veja-como-se-inscrever.ghtml. Acesso em: 2 out. 2025.',
        },
        {
          headline: 'Cidade do Japão limita uso de dispositivos digitais a duas horas por dia',
          summary: 'Lei que entrou em vigor nesta quarta-feira (1º) fará de Toyoake uma das primeiras cidades japonesas a tentar usar a plataforma do governo para fazer com que seus cidadãos desliguem seus celulares.',
          source: 'CIDADE do Japão limita uso de dispositivos digitais a duas horas por dia. Disponível em: https://gl.globo.com/mundo/noticia/2025/10/02/cidade-do-japao-limita-uso-de-dispositivos-digitais-a-duas-horas-por-dia.ghtml. Acesso em: 2 out. 2025.',
        },
        {
          headline: 'Moradores dizem que 5 gansos e 2 patos do Parque Guinle, em Laranjeiras, foram levados por ladrões',
          summary: 'Responsáveis pelo cuidado com as aves contam que, na madrugada de domingo (28), três gansos africanos de grande porte foram levados.',
          source: 'GIL, Letícia. Moradores dizem que 5 gansos e 2 patos do Parque Guinle, em Laranjeiras, foram levados por ladrões. Disponível em: https://gl.globo.com/rj/rio-de-janeiro/noticia/2025/10/02/patos-e-gansos-desaparecem-do-parque-guinle-em-laranjeiras.ghtml. Acesso em: 12 out. 2025.',
        },
      ],
      followUpQuestionWithBullet: 'Qual dessas manchetes você escolheria como ponto de partida para escrever uma crônica? Por quê?',
      placeholder: 'Digite sua resposta aqui...',
      correctAnswer: 'Pessoal. Oriente os alunos a ler cada uma das manchetes com atenção e imaginar que tipo de crônica poderia surgir com base no assunto. O tom adotado seria mais cômico? Reflexivo? Crítico? Essa análise favorecerá a produção final dos estudantes.',
    },
  ],
};
