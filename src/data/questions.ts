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
      number: 3,
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
      number: 2,
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
      number: 5,
      question: 'Na situação apresentada, que atitude o corvo poderia ter tomado? Como essa atitude mudaria o desfecho da história? Escreva um final diferente para ela e explique qual seria a nova moral com base nas mudanças que você propôs.',
      placeholder: 'Digite sua resposta aqui...',
      correctAnswer: 'Pessoal. Espera-se que os alunos apresentem uma reviravolta na narrativa e identifiquem o novo sentido gerado por essa mudança. Exemplos possíveis: o corvo percebe a intenção da raposa e permanece calado (nova moral: “Nem todo elogio deve ser levado a sério”); o corvo percebe a intenção da raposa, desce da árvore e divide o queijo com ela (nova moral: “Compartilhar é melhor do que competir”).',
    },
    {
      id: 'ch2_q16',
      type: 'true-false',
      number: 6,
      question: 'Com base nas fábulas lidas ao longo do capítulo, analise as afirmativas a seguir e marque <strong>V</strong> para o que for verdadeiro e <strong>F</strong> para o que for falso.',
      hasCorrectionBox: false,
      correctionPlaceholder: 'Corrija as afirmações falsas aqui...',
      statements: [
        {
          letter: 'a',
          statement: ' Em <em>A lebre e a tartaruga</em> e em <em>O leão e o rato</em>, o personagem menos valorizado surpreende ao vencer com esforço ou dedicação.',
          correctAnswer: true,
        },
        {
          letter: 'b',
          statement: 'Em <em>A raposa e o corvo</em>, o personagem mais sensato é quem sai prejudicado no final.',
          correctAnswer: false,
        },
        {
          letter: 'c',
          statement: 'Em <em>A raposa e o corvo</em>, a vantagem é conquistada mais pela esperteza do que pelo esforço.',
          correctAnswer: true,
        },
        {
          letter: 'd',
          statement: 'Nas três fábulas, os personagens atingem seus objetivos por meio da paciência e da humildade.',
          correctAnswer: false,
        },
        {
          letter: 'e',
          statement: 'Em <em>O leão e o rato</em>, o personagem menor salva o maior e muda a expectativa da história.',
          correctAnswer: true,
        },
        {
          letter: 'f',
          statement: 'Em <em>A lebre e a tartaruga</em>, o mais rápido perde por confiar demais em si mesmo.',
          correctAnswer: true,
        },
        {
          letter: 'g',
          statement: 'Em <em>A raposa e o corvo</em>, quem manipula a situação consegue obter o que deseja.',
          correctAnswer: true,
        },
        {
          letter: 'h',
          statement: 'As três fábulas mostram que quem subestima o outro sempre perde.',
          correctAnswer: false,
        },
      ],
    },
    {
      id: 'ch2_q17',
      type: 'text-input',
      number: 7,
      question: 'Compare as três fábulas lidas no capítulo e responda às questões.',
      subQuestions: [
        {
          letter: 'a',
          question: 'Em qual forma cada fábula foi escrita? Prosa ou verso?',
          placeholder: 'Digite sua resposta aqui...',
          correctAnswer: 'O texto I e o texto III foram escritos em prosa; o texto II foi escrito em versos.',
        },
        {
          letter: 'b',
          question: 'Como os diálogos estão presentes nas fábulas? Quais delas têm falas diretas entre os personagens? ',
          placeholder: 'Digite sua resposta aqui...',
          correctAnswer: 'O texto I e o texto III apresentam diálogos diretos; o texto II não apresenta diálogo.',
        },
        {
          letter: 'c',
          question: 'Como a moral é apresentada em cada um dos textos?',
          placeholder: 'Digite sua resposta aqui...',
          correctAnswer: 'No texto I, a moral é implícita, exigindo interpretação com base nas ações dos personagens. No texto II, a moral é explícita e aparece na estrofe final. No texto III, a moral também é explícita, apresentada em uma frase isolada ao final da história.',
        },
      ],
    },
    {
      id: 'ch2_q18',
      type: 'text-input',
      number: 8,
      question: 'Imagine que você vai escrever uma nova versão para uma das fábulas lidas e responda às questões a seguir. ',
      subQuestions: [
        {
          letter: 'a',
          question: 'Qual forma você escolheria: prosa ou versos? Por quê?',
          placeholder: 'Digite sua resposta aqui...',
          correctAnswer: 'Pessoal.',
        },
        {
          letter: 'b',
          question: 'Você usaria diálogos diretos entre os personagens? Justifique. ',
          placeholder: 'Digite sua resposta aqui...',
          correctAnswer: 'Pessoal.',
        },
        {
          letter: 'c',
          question: 'Os personagens teriam comportamentos semelhantes aos das versões originais ou seriam diferentes?',
          placeholder: 'Digite sua resposta aqui...',
          correctAnswer: 'Pessoal.',
        },
        {
          letter: 'd',
          question: 'A moral seria explícita, em uma frase final, ou implícita, para ser interpretada pelo leitor? Por quê?',
          placeholder: 'Digite sua resposta aqui...',
          correctAnswer: 'Pessoal.',
        },
      ],
    },
    {
      id: 'ch2_q10',
      type: 'table-fill',
      number: 1,
      question: '',
      columns: ['Parte da fábula', 'O que vai acontecer?',],
      rows: [
        {
          id: 'row1',
          paragraph: 'Situação inicial',
          text1: '',
        },
        {
          id: 'row2',
          paragraph: 'Conflito',
          text1: '',
        },
        {
          id: 'row3',
          paragraph: 'Desfecho',
          text1: '',
        },
      ],
    },
  ],
};
