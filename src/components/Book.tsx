import { useState } from 'react';
import TableOfContents from './TableOfContents';
import Chapter from './Chapter';
import DataTable from './DataTable';
import TeacherButton from './TeacherButton';
import Header from './Header';
import { chapterQuestions } from '../data/questions';
import Pagination from './Pagination';
import TrilhaTexto from './TrilhaTexto';
import MinhaVersao from './MinhaVersao';
import ProducaoTexto from './ProducaoTexto';
import ProducaoFinal from './ProducaoFinal';
import ProducaoTextoNoticia from './ProducaoTextoNoticia';
import ProducaoTextoFabula from './ProducaoTextoFabula';
import CaixaTexto from './CaixaTexto';
import QuestionRenderer from './QuestionRenderer';
import ContinuaProximaPagina from './ContinuaProximaPagina';
import CriteriosAvaliacao from './CriteriosAvaliacao';
import DownloadQuestionsButton from './DownloadQuestionsButton';
import Footer from './Footer';
import { useUserAnswers } from '../hooks/useUserAnswers';
import { usePagination } from '../hooks/usePagination';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { TeacherAnswers } from './TeacherAnswers';

function Book() {
  const { userAnswers, handleAnswerChange } = useUserAnswers();
  const { currentPage, scrollToTop } = usePagination();
  const [showTeacherView, setShowTeacherView] = useState(false);

  // Restaura a posição de scroll salva
  useScrollPosition();

  return (
    <div className="min-h-screen bg-gray-200 w-full">
      <div className="mx-auto bg-white shadow-2xl overflow-hidden w-full md:max-w-[63%]" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <Header />

        <div className="p-8 md:p-12">
          {/* Conteúdo do sumário */}
          <TableOfContents />
          {/* Paginação */}
          <Pagination currentPage={currentPage} />
          {/* Conteúdo do botão do professor */}
          <div className="my-6">
            <TeacherButton
              content={
                <>
                  <p className="mb-3" style={{ fontFamily: 'Ubuntu, sans-serif', color: '#000000', fontSize: '16px' }}>
                    EF67LP23. Após a leitura coletiva da página de abertura, promova uma roda de conversa para explorar as perguntas finais do texto. Incentive os alunos a compartilhar experiências com insetos e a refletir sobre os espaços em que a ciência está presente no cotidiano. Aproveite para reforçar que, embora o texto destaque os insetos, a ciência está em diversas áreas, como tecnologia, saúde e meio ambiente. Estimule a escuta atenta, o respeito aos turnos de fala e a formulação de perguntas relevantes.
                  </p>
                </>
              }

            />
          </div>
          {/* Conteúdo do Capítulo 1 */}
          <Chapter
            id="chapter1"
            number={1}
            title="Artigos de divulgação científica"
            content={
              <>
                <p className="mb-4 indent-6">
                  Tão pequenos e ao mesmo tempo tão diversos. Os insetos exibem cores brilhantes, asas delicadas, antenas curiosas e nomes variados. Mas você já se perguntou por que as borboletas têm tantas formas? Ou como as formigas sabem exatamente para onde ir? E como é possível prever o tempo do dia seguinte?
                </p>
                <p className="mb-4 indent-6">
                  O mundo está repleto de fenômenos curiosos. A ciência nos ajuda a entender muitos  deles, revelando detalhes invisíveis ou aparentemente inexplicáveis.
                </p>
                <p className="mb-4 indent-6">
                  E como aprendemos essas descobertas? Isso acontece por meio dos artigos de divulgação científica, que apresentam os temas da ciência de maneira acessível e relacionada
                  ao cotidiano.
                </p>
                {/* Conteúdo de lista */}
                <ul className="list-disc marker:text-[#BF3154] ml-6">
                  <li>Você já passou por alguma situação curiosa envolvendo um inseto? Como foi?</li>
                  <li>Para que serve a ciência? Dê um exemplo.</li>
                  <li>Entre objetos, dispositivos e invenções que você usa todos os dias, quais deles só existem graças à ciência? Cite um exemplo.</li>
                </ul>
                {/* Imagem */}
                <div className="flex flex-col items-center my-6">
                  <img src="images/borboletas.png" className="max-w-full" />
                  <p className="text-[10px] text-slate-600 mt-2">Ruslan Gilmanshin/Stock.adobe.com
                  </p>
                </div>
                <Pagination currentPage={5} />
                <div className="my-6">
                  <TeacherButton
                    content={
                      <>
                        <p className="mb-3">
                          EF69LP29, EF69LP42. Conduza uma roda de conversa para que os alunos compartilhem onde costumam ter contato com esse tipo de texto, comentando em que suportes o gênero aparece (revistas, sites, vídeos, canais científicos digitais etc.). Explore os objetivos desse tipo de artigo e os recursos utilizados para tornar o conteúdo compreensível. Oriente os alunos na identificação das partes da estrutura apresentada (título, introdução, desenvolvimento e conclusão) e das marcas linguísticas comuns a esse gênero, como o uso do presente e a citação de especialistas.
                        </p>
                      </>
                    }

                  />
                </div>
                <h3>O que é um artigo de divulgação científica?</h3>
                <p className="mb-4 indent-6">
                  O artigo de divulgação científica é um gênero textual que tem como objetivo comunicar informações, ideias e descobertas científicas para um público amplo. Sua função social é aproximar o conhecimento científico do cotidiano das pessoas e despertar o interesse por temas variados.
                </p>
                <p className="mb-4 indent-6">
                  Para cumprir esse papel, o texto utiliza linguagem acessível e evita o uso excessivo de termos técnicos, ou os explica. Além disso, apresenta exemplos cotidianos e comparações que ajudam o leitor a compreender assuntos muitas vezes complexos.
                </p>
                <p className="mb-4 indent-6">
                  A estrutura desse tipo de artigo pode variar, mas geralmente inclui as seguintes partes:
                </p>
                <ul className="list-disc marker:text-[#BF3154] ml-6">
                  <li><strong>Título</strong></li>
                  <p className="mb-4 indent-6">Deve ser curto, chamativo e instigante. Muitas vezes, envolve perguntas ou termos que
                    despertam a atenção do leitor e antecipam o tema do texto.
                  </p>
                  <li><strong>Introdução</strong></li>
                  <p className="mb-4 indent-6">Apresenta o tema principal e a questão que motivou a escrita do artigo, contextualizando o assunto e despertando o interesse do leitor.
                  </p>
                  <li><strong>Desenvolvimento</strong></li>
                  <p className="mb-4 indent-6">Expõe dados, relatos de pesquisas, observações, descobertas e explicações científicas. É comum utilizar verbos no presente do indicativo para conferir objetividade às informações apresentadas.
                  </p>
                  <li><strong>Conclusão</strong></li>
                  <p className="mb-4 indent-6">
                    Retoma os principais pontos discutidos e pode trazer uma síntese, deixar uma reflexão ou enfatizar a importância social do tema.
                  </p>
                </ul>
                <p className="mb-4 indent-6">
                  Esses textos normalmente adotam uma linguagem envolvente e acessível. É comum incluírem curiosidades, dados estatísticos, perguntas instigantes, citações de especialistas, entre outros recursos que tornam a leitura mais interessante e informativa. Ainda que o conteúdo seja complexo, a redação busca facilitar a compreensão, recorrendo a exemplos do cotidiano e evitando termos técnicos não explicados.
                </p>
                <p className="mb-4 indent-6">
                  Os artigos de divulgação científica devem ser embasados em fontes confiáveis, como pesquisas universitárias, estudos de instituições reconhecidas ou entrevistas com especialistas. Isso garante a credibilidade das informações e evita a disseminação de dados incorretos.
                </p>
                <p className="mb-4 indent-6">
                  O autor pode ser um jornalista, um cientista ou um profissional da comunicação. Sua função é interpretar o conteúdo técnico e apresentá-lo sem distorcer o significado original dos dados científicos.
                </p>
                <p className="mb-4 indent-6">O artigo de divulgação científica funciona como uma ponte entre a ciência e a sociedade, ajudando o público a entender como o conhecimento científico se relaciona com a vida cotidiana. Isso contribui para o desenvolvimento do pensamento crítico e a formação de cidadãos bem-informados e conscientes.
                </p>
                <p className="mb-4 indent-6">Além do texto escrito, esses artigos costumam apresentar elementos visuais, como imagens, gráficos, tabelas ou infográficos. Esses recursos facilitam a compreensão dos dados apresentados e tornam a leitura mais interessante.
                </p>
                <Pagination currentPage={6} />
                <div className="my-6">
                  <TeacherButton
                    content={
                      <>
                        <p className="mb-3">
                          EF69LP29, EF69LP34, EF69LP42. Destaque a linguagem acessível, a presença de explicações científicas e o uso de fontes especializadas. As atividades propostas ajudam a consolidar o reconhecimento do gênero por meio da interpretação de texto, da análise de sua linguagem e da validação da informação com base em fontes confiáveis, contribuindo para o desenvolvimento do pensamento crítico e da competência leitora.
                        </p>
                      </>
                    }

                  />
                </div>
                <TrilhaTexto />
                <p className="mb-4 indent-6">
                  Leia um artigo de divulgação científica que apresenta uma área de estudo diferente e, talvez, pouco conhecida.
                </p>
                <p className="mb-4 indent-6">
                  <strong>Texto I</strong>
                </p>
                <CaixaTexto title=''>
                  <p className="mb-4 indent-6">
                    <strong>Lepidopterista!</strong>
                  </p>
                  <p className="mb-4 indent-6">
                    Azuis, laranjas, brancas, amarelas… já reparou na variedade de cores das borboletas? E mariposas, já notou alguma voando por aí? Além de bonito de se ver, o bater de asas de borboletas e mariposas pode nos dizer muito sobre as condições de determinados ambientes, além de dar alertas importantes sobre a conservação de espécies e da natureza em geral. Quem estuda tudo isso são profissionais chamados de lepidopteristas… ou lepidopterologistas!
                  </p>
                  <p className="mb-4 indent-6">
                    O nome que trava a língua vem de um ramo da entomologia (área da ciência que estuda os insetos) que se dedica especialmente à ordem Lepidoptera, composta pelas borboletas e mariposas. “Lepi” significa escama e “ptera”, asas. “As asas das borboletas e mariposas são cobertas por minúsculas escamas”, conta a lepidopterista Laura Braga, pesquisadora do Instituto Nacional da Mata Atlântica. Ela tem essa e outras informações valiosas a compartilhar sobre esses animais tão encantadores…
                  </p>
                  {/* Imagem */}
                  <div className="flex flex-col items-center my-6">
                    <img src="images/pag6_img1.png" className="max-w-[50%]" />
                    <p className="text-[10px] text-slate-600 mt-2">David Arruda
                    </p>
                  </div>
                  <p className="mb-4 indent-6">
                    <strong>Alarme ambiental</strong>
                  </p>
                  <p className="mb-4 indent-6">
                    Borboletas e mariposas têm um papel essencial para os ecossistemas, porque são polinizadoras e fontes de alimento para outros animais. Além disso, são espécies bioindicadoras. Ou seja: elas ajudam a indicar a qualidade dos ambientes. Isso porque são muito sensíveis a alterações de habitat e mudanças climáticas. Então, a ausência desses insetos é um alarme sobre a saúde dos ecossistemas.
                  </p>
                  <p className="mb-4 indent-6">
                    Não por acaso, borboletas e mariposas têm sido muito estudadas em projetos de monitoramento ambiental. “Elas respondem rapidamente a distúrbios ambientais e processos de restauração ambiental. Algumas espécies só ocorrem em ambientes bem preservados. Assim, a lepidopterologia ganhou maior relevância no cenário atual”, diz Laura Braga.
                  </p>
                  <p className="mb-4 indent-6">
                    Muitos lepidopteristas pesquisam como as mudanças climáticas podem afetar as espécies de borboletas e mariposas, porque se sabe que o ciclo de vida desses animais está intimamente relacionado ao clima.
                  </p>
                  <p className="mb-4 indent-6">
                    <strong>Metamorfose e conservação</strong>
                  </p>
                  <p className="mb-4 indent-6">
                    Laura explica que cada espécie é adaptada a determinada condição e depende da oferta de alimento para suas lagartas e para a fase de adulto. As borboletas e mariposas passam por quatro estágios diferentes de vida (ovo, larva, pupa e adulto), um processo biológico chamado metamorfose. Além disso, cada espécie é adaptada a um tipo de ambiente, como, por exemplo, floresta, restinga (vegetação da beira da praia), topo de montanha… E as mudanças climáticas e a crise ambiental ameaçam a existência desses insetos.
                  </p>
                  <p className="mb-4 indent-6">
                    “Nós, lepidopteristas, trabalhamos e pesquisamos para conhecermos melhor a biologia e a ecologia das espécies, e assim traçarmos planos e estratégias para conservarmos tanto elas quanto os habitats em que vivem”, conta a pesquisadora.
                  </p>
                  <p className="mb-4 indent-6">
                    Normalmente, os lepidopteristas se formam em Biologia, Agronomia ou Engenharia Florestal, e depois se especializam em entomologia e no estudo de borboletas e mariposas. Já a rotina da profissão vai depender da área de atuação escolhida.
                  </p>

                  <ContinuaProximaPagina />
                </CaixaTexto>
                <Pagination currentPage={7} />
                {/* Conteúdo do botão do professor */}
                <div className="my-6">
                  <TeacherButton
                    content={
                      <TeacherAnswers
                        questions={[
                          chapterQuestions.chapter1.find(q => q.id === 'ch1_q1')!,
                          chapterQuestions.chapter1.find(q => q.id === 'ch1_q2')!,
                          chapterQuestions.chapter1.find(q => q.id === 'ch1_q3')!,
                        ]}
                      />
                    }
                  />
                </div>
                <CaixaTexto title=''>
                  <p className="mb-4 indent-6">
                    <strong>Delicados insetos</strong>
                  </p>
                  <p className="mb-4 indent-6">
                    Alguns profissionais se dedicam a estudar onde as borboletas e mariposas vivem, em qual época ocorrem, com quais outras espécies interagem na natureza, quais são seus inimigos naturais, quais espécies são bioindicadoras… “O dia a dia envolve uma saída de campo de no mínimo uma semana, uso de rede para captura das borboletas, armadilhas de frutas para borboletas e de luz para atrair mariposas noturnas, montagem e identificação das espécies no laboratório, análise de dados, escrita de artigos e apresentação de trabalhos”, enumera Laura Braga.
                  </p>
                  <p className="mb-4 indent-6">
                    Outros lepidopteristas atuam diretamente no controle de espécies de pragas agrícolas (as lagartas de lavoura) ou estudam espécies de importância médica, como lagartas que queimam. Então, trabalho não falta! A pesquisadora conta que ainda há muito a se descobrir sobre esses insetos, principalmente sobre as mariposas.
                  </p>
                  <p className="mb-4 indent-6">
                    Os profissionais dessa área devem ter curiosidade, olhos atentos, boa memória… e mãos delicadas! “É uma profissão encantadora”, diz Laura, que desde criança queria ser bióloga. “Escolhi ser lepidopterista quando estava no ensino médio, pois acompanhei um ciclo de vida de uma borboleta, me encantei e quis pesquisar estes insetos”, conta. E você, se animou também?
                  </p>
                </CaixaTexto>
                <p
                  className="mt-2 mb-6"
                  style={{
                    fontFamily: 'Ubuntu, sans-serif',
                    color: '#000000',
                    fontSize: '10px',
                  }}
                >
                  MARTINS, Elisa. <em>Lepidopterista!</em> Disponível em: <a href="https://chc.org.br/artigo/lepidopterista/" target="_blank" rel="noopener noreferrer">https://chc.org.br/artigo/lepidopterista/</a>. Acesso em: 14 out. 2025.
                </p>
                {/* Questão intercalada no conteúdo */}
                <QuestionRenderer
                  question={chapterQuestions.chapter1[0]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                {/* Questão intercalada no conteúdo */}
                <QuestionRenderer
                  question={chapterQuestions.chapter1[1]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                {/* Questão intercalada no conteúdo */}
                <QuestionRenderer
                  question={chapterQuestions.chapter1[2]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                {/* Botão de download das questões */}
                <div className="my-6">
                  <DownloadQuestionsButton
                    questions={[chapterQuestions.chapter1[0], chapterQuestions.chapter1[1], chapterQuestions.chapter1[2]]}
                    userAnswers={userAnswers}
                    title="Questões da Página 7"
                    fileName="questoes-pagina-7.pdf"
                  />
                </div>
                <Pagination currentPage={8} />
                {/* Conteúdo do botão do professor */}
                <div className="my-6">
                  <TeacherButton
                    content={
                      <>
                        <TeacherAnswers
                          questions={[
                            chapterQuestions.chapter1.find(q => q.id === 'ch1_q4')!,
                            chapterQuestions.chapter1.find(q => q.id === 'ch1_q5')!,
                            chapterQuestions.chapter1.find(q => q.id === 'ch1_q6')!,
                          ]}
                        />
                      </>
                    }
                  />
                </div>
                {/* Questão intercalada no conteúdo */}
                <QuestionRenderer
                  question={chapterQuestions.chapter1[3]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                {/* Questão intercalada no conteúdo */}
                <QuestionRenderer
                  question={chapterQuestions.chapter1[4]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                {/* Questão intercalada no conteúdo */}
                <QuestionRenderer
                  question={chapterQuestions.chapter1[5]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                {/* Botão de download das questões */}
                <div className="my-6">
                  <DownloadQuestionsButton
                    questions={[chapterQuestions.chapter1[3]]}
                    userAnswers={userAnswers}
                    title="Questões da Página 8"
                    fileName="questoes-pagina-8.pdf"
                  />
                </div>

                <Pagination currentPage={9} />
                {/* Conteúdo do botão do professor */}
                <div className="my-6">
                  <TeacherButton
                    content={
                      <>
                        <p className="mb-3">
                          EF69LP29, EF69LP30, EF69LP34, EF69LP42. Retome com a turma a proposta geral do gênero, destacando que, embora
                          os dois textos abordem o mesmo campo temático(lepidópteros), cada um apresenta um objetivo diferente e emprega estratégias distintas para comunicar o conhecimento científico. Oriente a leitura coletiva ou em duplas, incentivando os alunos a identificar as explicações para termos técnicos, as comparações feitas com situações do cotidiano, o uso de linguagem acessível e o apoio em fonte especializada. Nas atividades que acompanham o texto, promova o contraste entre os dois rtigos, favorecendo a percepção de que, em um mesmo gênero textual, há diversidade temática, estilística e estrutural, o que auxilia no desenvolvimento da leitura crítica. Se possível, sistematize coletivamente as diferenças observadas.

                        </p>
                      </>
                    }

                  />
                </div>
                <TrilhaTexto />
                <p className="mb-4 indent-6">
                  Agora, leia outro artigo de divulgação científica que aborda as semelhanças e diferenças entre borboletas e mariposas.
                </p>
                <p className="mb-4 indent-6">
                  <strong>Texto II</strong>
                </p>
                <CaixaTexto title='Borboleta e mariposa: conheça as diferenças que tornam esses insetos tão distintos'>
                  <p className="mb-4 indent-6">
                    <strong>Antenas finas ou plumosas, asas que estacionam abertas ou fechadas e boca que mais parece uma língua de sogra. Semelhantes e diferentes, os dois insetos são essenciais para o equilíbrio da natureza</strong>
                  </p>
                  <p className="mb-4 indent-6">
                    Como bailarinas voadoras que pousam de flor em flor, as borboletas parecem capturar o olhar quando passam à nossa volta. Sinal de boa sorte para muitos: há quem não dispense a oportunidade de fechar os olhos e fazer um pedido sempre que uma pequenina aparece.
                  </p>
                  <p className="mb-4 indent-6">
                    Mas o que você faz quando uma mariposa cruza o seu caminho? Diferentemente da sua “prima distante”, que flutua levemente durante o dia, muitos veem esse inseto voador como um sinal de mau agouro e até de teimosia, uma vez que é capaz de travar longas batalhas com as lâmpadas elétricas acesas durante a noite. A verdade é que tudo não passa de ilusão.
                  </p>
                  <p className="mb-4 indent-6">
                    “Tanto as borboletas como as mariposas são muito importantes para o equilíbrio da natureza por serem polinizadoras”, conta a bióloga e técnica no Laboratório de Coleções Zoológicas do Butantan, Natália Batista Khatourian. Isso significa que, ao se alimentar do néctar das flores, tanto uma como a outra carregam grãozinhos de pólen por aí, e quando esse tipo de “pó mágico” cai sobre outras flores acaba formando frutos – afinal, dentro do pólen há sempre uma semente, o que garante a reprodução de muitas das plantas existentes no planeta.
                  </p>
                  <p className="mb-4 indent-6">
                    Assim como parentes distantes que compartilham o mesmo sobrenome, borboletas e mariposas são chamadas de lepidópteros. O nome indica aqueles insetos que têm o corpo dividido entre cabeça, tórax e abdômen, possuem um par de antenas, olhos compostos, aparelho bucal sugador e dois pares de asas membranosas compostas por escamas. Além disso, têm seu ciclo de vida dividido em quatro etapas: ovo, larva ou lagarta, pupa ou crisálida e adulta. Estima-se que existam mais de 500 mil espécies de lepidópteros no mundo todo! No Brasil, mais de 25 mil já foram classificadas e ainda há outras 60 mil para serem descobertas.
                  </p>
                  {/* Imagem */}
                  <div className="flex flex-col items-center my-6">
                    <img src="images/pag9_img1.png" className="max-w-[50%]" />
                    <p className="text-[10px] text-slate-600 mt-2">Instituto Butantan
                    </p>
                  </div>
                  <p className="mb-4 indent-6"><strong>Nem tudo são semelhanças</strong></p>
                  <p className="mb-4 indent-6">
                    Uma das diferenças entre mariposas e borboletas aparece logo no estágio pré-metamorfose, quando a lagarta fica toda enroladinha até virar um ser adulto. “Em algumas espécies de mariposas, a pupa fica protegida por um casulo que se fixa em uma folha ou até mesmo no chão. Já as borboletas não têm essa proteção, elas se envolvem na própria seda e ficam penduradas por um fiozinho. Nesta etapa, elas são chamadas de crisálida”, explica Natália.
                  </p>
                  <ContinuaProximaPagina />
                </CaixaTexto>


                <Pagination currentPage={10} />
                {/* Conteúdo do botão do professor - Tabela comparativa */}
                <div className="my-6">
                  <TeacherButton
                    content={
                      <>
                        <p className="mb-3">
                          Respostas:
                        </p>
                        {(() => {
                          const question = chapterQuestions.chapter1.find(q => q.id === 'ch1_q7');
                          if (question && question.type === 'text-input') {
                            // Se tiver subquestões, renderiza cada uma
                            if (question.subQuestions && question.subQuestions.length > 0) {
                              return question.subQuestions.map((subQ) => (
                                <p key={subQ.letter} className="mb-3">
                                  {question.number !== undefined && (
                                    <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
                                  )}
                                  <span style={{ color: '#00776E', fontWeight: 'bold' }}>{subQ.letter}) </span>
                                  <span dangerouslySetInnerHTML={{ __html: subQ.correctAnswer || '' }} />
                                </p>
                              ));
                            }
                            // Se não tiver subquestões, renderiza a resposta direta
                            if (question.correctAnswer) {
                              return (
                                <p className="mb-3">
                                  {question.number !== undefined && (
                                    <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
                                  )}
                                  <span dangerouslySetInnerHTML={{ __html: question.correctAnswer }} />
                                </p>
                              );
                            }
                          }
                          return null;
                        })()}
                      </>
                    }
                  />
                </div>
                <CaixaTexto title=''>
                  <p className="mb-4 indent-6">
                    Mas é quando essa espécie de pacotinho se abre e a mariposa ou borboleta estica as asas que as diferenças entre os dois insetos se tornam mais evidentes – mesmo que, em muitos casos, seja preciso olhar de pertinho. Enquanto as borboletas gostam de voar durante o dia, o negócio das mariposas é bater perna – ou melhor, asas – à noite. O hábito influencia na coloração de cada uma. É por isso que as primeiras tendem a ser coloridas e as outras mais escuras. Também é pensando em se “disfarçar” melhor na natureza que as borboletas pousam com as asas levantadas e fechadas na vertical, enquanto as mariposas param com o seu par de asas aberto na horizontal ou sobre o abdômen. “Assim elas se camuflam e enganam seus predadores. É fácil ver uma mariposa quando ela pousa em uma parede branca, mas no tronco de uma árvore é muito difícil”, brinca a bióloga.
                  </p>
                  <p className="mb-4 indent-6">
                    Enquanto as borboletas têm abdômen afinado e antenas que lembram as pontas da haste de um óculos (clavadas), as mariposas possuem corpo mais avantajado e dois tipos de antenas: finas como um fio (filiforme), no caso das fêmeas, e plumosas, quando são machos. Já o aparelho bucal das duas é formado por uma espirotromba. O órgão lembra uma língua de sogra, que se desenrola para sugar o néctar das flores e dos frutos.
                  </p>
                  <p className="mb-4 indent-6">
                    “Algumas mariposas têm esse aparelho bucal atrofiado e não se alimentam na fase adulta. Portanto, elas comem ferozmente quando lagartas para reter toda a energia necessária para passarem pela metamorfose”, afirma Natália. Depois disso, elas vivem pouco, entre sete e dez dias. O ciclo de vida completo das mariposas e borboletas é curto em relação aos outros animais, podendo durar de um a seis meses, dependendo da espécie.
                  </p>
                  <p className="mb-4 indent-6">
                    Apesar de existirem algumas mariposas capazes de provocar coceira e alergia quando lagarta ou adulta, como a Hylesia, no geral os lepidópteros são inofensivos para nós, humanos, mas muito importantes para a manutenção da vida na Terra. Então, nada de tentar espantá-los com uma vassoura ou coisa parecida! No máximo, abra a janela e apague a luz do ambiente. E, no caso das mariposas, que tal também fazer um pedido da próxima vez que encontrar uma voando ou paradinha por aí?
                  </p>
                </CaixaTexto>
                <p
                  className="mt-2 mb-6"
                  style={{
                    fontFamily: 'Ubuntu, sans-serif',
                    color: '#000000',
                    fontSize: '10px',
                  }}
                >
                  PINELLI, Natasha. <em>Borboleta e mariposa:</em> conheça as diferenças que tornam esses insetos tão distintos. Disponível em: <a href="https://butantan.gov.br/bubutantan/borboleta-e-mariposa-conheca-as-diferencas-que-tornam-esses-insetos-tao-distintos" target="_blank" rel="noopener noreferrer">https://butantan.gov.br/bubutantan/borboleta-e-mariposa-conheca-as-diferencas-que-tornam-esses-insetos-tao-distintos</a>. Acesso em: 24 set. 2025.
                </p>
                {/* Questão intercalada no conteúdo - Tabela comparativa */}
                <QuestionRenderer
                  question={chapterQuestions.chapter1[6]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                {/* Botão de download das questões */}
                <div className="my-6">
                  <DownloadQuestionsButton
                    questions={[chapterQuestions.chapter1[8], chapterQuestions.chapter1[9], chapterQuestions.chapter1[10]]}
                    userAnswers={userAnswers}
                    title="Questões da Página 10"
                    fileName="questoes-pagina-10.pdf"
                  />
                </div>
                <Pagination currentPage={11} />
                {/* Conteúdo do botão do professor */}
                <div className="my-6">
                  <TeacherButton
                    content={
                      <>
                        <p className="mb-3">
                          EF69LP29, EF69LP30, EF69LP32, EF69LP34, EF69LP35, EF69LP36, EF69LP42, EF69LP56, EF67LP20, EF67LP25, EF67LP32, EF67LP33, EF07LP06, EF67LP36. Nesta etapa, os alunos produzem um texto autoral com base em um trecho técnico adaptado de artigo científico, transformando-o em um artigo de divulgação acessível ao público em geral. Oriente a leitura cuidadosa do texto técnico e proponha aos alunos uma discussão guiada sobre os termos mais complexos, as informações essenciais e as possíveis comparações com situações do cotidiano. A proposta fortalece a autoria, o pensamento crítico e a compreensão dos usos sociais da ciência.
                        </p>
                      </>
                    }
                  />
                </div>
                <MinhaVersao />
                <p className="mb-4 indent-6">
                  Você vai transformar um trecho técnico, voltado para especialistas, em um artigo de divulgação científica. Para isso, leia o trecho a seguir com atenção.
                </p>
                <CaixaTexto title=''>
                  <p className="mb-4 indent-6">
                    Os lepidópteros, grupo que inclui borboletas e mariposas, apresentam larvas geralmente herbívoras. Já os adultos de espécies antófilas se alimentam de flores e consomem, principalmente, néctar e, em alguns casos, pólen. De maneira geral, as borboletas são diurnas, enquanto as mariposas têm hábitos noturnos ou crepusculares.
                  </p>
                  <p className="mb-4 indent-6">
                    A maioria dos lepidópteros adultos se alimenta de néctar, que é sua principal fonte de energia para o voo. Em algumas espécies, como as borboletas do gênero <em>Heliconius</em>, a ingestão de pólen fornece nutrientes essenciais para a produção de ovos.
                  </p>
                  <p className="mb-4 indent-6">
                    A polinização ocorre quando os grãos de pólen aderem ao corpo do inseto durante a visita a uma flor e são levados para outras flores da mesma espécie. Esse processo permite que ocorra a fecundação, resultando na formação de frutos e sementes. Muitas espécies vegetais dependem desse mecanismo para completar seus ciclos de vida e vários cultivos agrícolas importantes só existem por conta da atuação de animais polinizadores, como as borboletas e mariposas.
                  </p>
                </CaixaTexto>
                <p
                  className="mt-2 mb-6"
                  style={{
                    fontFamily: 'Ubuntu, sans-serif',
                    color: '#000000',
                    fontSize: '10px',
                  }}
                >
                  OLIVEIRA, Reisla; DUARTE JUNIOR, José A.; RECH, André R. R. <em>et al.</em> Polinização por lepidópteros. In: OLIVEIRA, R.;
                  DUARTE JÚNIOR, J. A.; RECH, A. R.; <em>et. al. Biologia da polinização.</em> Vol. 2. Brasília: Editora Projeto Jardins, 2021. (Adaptado).
                </p>
                <p className="mb-4 indent-6"><strong>Preparação</strong></p>
                <p className="mb-4 indent-6">Reflita sobre o tema que será tratado e faça pesquisas adicionais sobre ele.
                </p>
                <p className="mb-4 indent-6"><strong>Produção</strong></p>
                <p className="mb-4 indent-6">Escolha um título que chame atenção e mostre qual é o tema principal do seu texto. Escreva uma introdução apresentando a pergunta que será respondida no artigo. No desenvolvimento, explique suas ideias com base no texto lido e nas escreva uma conclusão que mostre a importância do tema discutido.
                </p>
                <p className="mb-4 indent-6"><strong>Avaliação</strong></p>
                <p className="mb-4 indent-6">Antes de concluir seu artigo, revise seu texto com base nas perguntas a seguir.
                </p>
                {/* Tabela de Critérios de Avaliação */}
                <CriteriosAvaliacao
                  instanceId="producao_artigo"
                  criterios={[
                    {
                      id: 'criterio_estrutura',
                      nome: 'Estrutura',
                      pergunta: 'O texto apresenta título, introdução, desenvolvimento e conclusão como prevê o gênero?',
                    },
                    {
                      id: 'criterio_exemplos',
                      nome: 'Exemplos e comparações',
                      pergunta: 'O texto traz exemplos do cotidiano ou comparações que facilitam a compreensão do leitor?',
                    },
                    {
                      id: 'criterio_linguagem',
                      nome: 'Linguagem',
                      pergunta: 'O vocabulário é acessível?',
                    },
                    {
                      id: 'criterio_cientifico',
                      nome: 'Foco explicativo e científico',
                      pergunta: 'O texto cumpre a função de divulgar um conteúdo científico de maneira acessível para o público leigo?',
                    },
                    {
                      id: 'criterio_autoria',
                      nome: 'Autoria',
                      pergunta: 'Você usou seu próprio modo de explicar o conteúdo?',
                    },
                  ]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                />
                <Pagination currentPage={12} />
                <ProducaoTexto instanceId="producaoTexto1" />
                <Pagination currentPage={13} />
                {/* Conteúdo do botão do professor */}
                <div className="my-6">
                  <TeacherButton
                    content={
                      <>
                        <p className="mb-3">
                          EF69LP29, EF69LP30, EF69LP42. Oriente a leitura do Texto III de modo coletivo ou em duplas, destacando a linguagem envolvente, a organização em tópicos temáticos e a presença de dados curiosos e confiáveis. Incentive os alunos a identificar os recursos explicativos utilizados para tornar o conteúdo científico acessível ao público geral. No trabalho com as atividades, aprofunde a análise de estrutura, linguagem e uso de fontes, retomando os critérios estudados nas páginas iniciais do capítulo. A proposta da atividade final da sequência prepara os alunos para a etapa de autoria, já mobilizando seleção e organização de informações de interesse.
                        </p>

                      </>
                    }
                  />
                </div>

                <TrilhaTexto />
                <p className="mb-4 indent-6">
                  É hora de ampliar ainda mais seu conhecimento sobre os pequenos seres vivos que desempenham papéis fundamentais no equilíbrio do planeta. No próximo texto, você vai descobrir como formigas e outros insetos, crustáceos e minhocas ajudam a transformar o mundo.
                </p>
                <p className="mb-4 indent-6"><strong>Texto III</strong></p>
                <CaixaTexto title='Pequenos animais que movem o mundo'>
                  <p className="mb-4 indent-6">
                    Um dos biólogos mais famosos do mundo, o norte-americano Edward Wilson, uma vez falou que insetos, caranguejos, minhocas e uma infinidade de pequenos animais movem o mundo. Ele estava chamando a nossa atenção para o valioso papel desses seres miúdos, que mal percebemos, mas que estão o tempo todo polinizando as plantas para que produzam frutos, movendo o solo e ajudando a transformar restos de animais e plantas em adubo. Eles são pequenos no tamanho, mas grandes em importância para a dinâmica da natureza. […]
                  </p>
                  <p className="mb-4 indent-6"><strong>Minhocas terrestres</strong></p>
                  <p className="mb-4 indent-6">
                    Você pensa que minhoca é tudo igual? Não! Essas que vemos nas hortas e jardins formam um grupo de nome bonito, Crassiclitellata, com mais de 6 mil espécies, quase todas terrestres. Só no Brasil são mais de 300 espécies de minhocas diferentes!
                  </p>
                  <p className="mb-4 indent-6">
                    Além da merecida fama de adubar os solos, minhocas são consideradas engenheiras de ecossistemas: escavam túneis, reviram, ventilam a terra e constroem montinhos acima do nível da
                    água, evitando o alagamento da sua morada. Tudo isso é uma baita ajuda para a agricultura!
                  </p>
                  <p className="mb-4 indent-6">
                    Em um quadrado de pouco mais de um metro de lado, cerca de 1.200 minhocas-vermelhas-da-Califórnia conseguem transformar 90  quilos de esterco bovino em 50 quilos de húmus em apenas dois meses, no verão (quando são mais ativas). O húmus é um fertilizante natural superimportante para a natureza.
                  </p>
                  <p className="mb-4 indent-6"><strong>Crustáceos</strong></p>
                  <p className="mb-4 indent-6">
                    Se os 86 tipos de eufausídeos (conhecidos como “camarãozinho krill”) fossem extintos, os oceanos entrariam em colapso por falta de alimentos e muitos peixes, lulas, focas, pinguins e baleias também desapareceriam. Para se ter uma ideia, a biomassa – a matéria que forma os seres vivos – do krill antártico deve pesar mais de 500 milhões de toneladas – isso corresponde a quase o dobro da biomassa de todos os seres humanos. […]
                  </p>
                  <p className="mb-4 indent-6"><strong>Formigas</strong></p>
                  <p className="mb-4 indent-6">
                    As formigas merecem destaque! Apesar de pequenas, elas são tão numerosas que, para cada quatro quilos dos animais que há no mundo, aproximadamente um quilo é de formigas. Os cientistas estimam que haja 21 mil espécies de formigas no mundo. Se fôssemos ver uma foto dessas por dia, levaríamos quase 50 anos para ver todas. Elas são o principal alimento para centenas de animais. Só no Brasil há 45 aves diferentes – chamadas papa-formigas, formigueiro ou papa-taoca (do tupi taóka, formiga-correição) – que sobrevivem comendo formigas. Lagarto-de-chifres-do-Texas e o pangolim também vivem de comer formigas! Já o tamanduá-bandeira pode consumir mais de 30 mil formigas por dia – além de cupins, que ele adora! [...]
                  </p>
                  <ContinuaProximaPagina />
                </CaixaTexto>



                <Pagination currentPage={14} />
                {/* Conteúdo do botão do professor - Tabela comparativa */}
                <div className="my-6">
                  <TeacherButton
                    content={
                      <>

                        <TeacherAnswers
                          questions={[
                            chapterQuestions.chapter1.find(q => q.id === 'ch1_q8')!,
                            chapterQuestions.chapter1.find(q => q.id === 'ch1_q9')!,
                            chapterQuestions.chapter1.find(q => q.id === 'ch1_q10')!,
                          ]}
                        />

                      </>
                    }
                  />
                </div>
                <CaixaTexto title=''>
                  <p className="mb-4 indent-6">
                    Apesar de as formigas-cortadeiras usarem talos, sementes, folhas e flores para o cultivo de fungos, no final da história, as sementes espalhadas mato afora, o solo revolvido e o adubo resultante dessa atividade trazem benefício à vegetação. Inclusive, solos com um formigueiro da saúva-limão têm mais nutrientes e matéria orgânica do que quando não têm formigueiro. A terra que as saúvas escavam e depositam nas aberturas do formigueiro pode até mudar a paisagem. […]
                  </p>
                  <p className="mb-4 indent-6"><strong>Abelhas</strong></p>
                  <p className="mb-4 indent-6">
                    De cada 100 tipos de plantas que produzem frutos ou sementes para consumo humano no mundo, 75 dependem de abelhas ou de outros animais polinizadores. No Brasil, a produção de frutas como melancia, ameixa e maçã diminuiria muito sem as abelhas. Sem as mamangavas, por exemplo, quase não se produz maracujá!
                  </p>
                  <p className="mb-4 indent-6">
                    Jataí, uruçu, mandaçaia e jandaíra são algumas das cerca de 300 espécies de abelhas sociais encontradas no Brasil. Conhecidas por abelhas-sem-ferrão ou indígenas, algumas destas chegam a ter dez mil abelhas numa colmeia. Apenas uma colônia de jataí consegue polinizar 1.500 pés de morango.
                  </p>
                  <p className="mb-4 indent-6">
                    Olhar para os valores dos pequenos seres pode ser a chave para entendermos o quanto somos importantes para eles e eles para nós. Olhar para os detalhes, para seu trabalho quase invisível que move o mundo, nos abre parte do universo da biodiversidade.
                  </p>
                </CaixaTexto>
                <p
                  className="mt-2 mb-6"
                  style={{
                    fontFamily: 'Ubuntu, sans-serif',
                    color: '#000000',
                    fontSize: '10px',
                  }}
                >
                  SOUZA, Paulo R. de; ROQUE, Fábio de O.; DELABIE, Jacques. <em>Pequenos animais que movem o mundo</em> Disponível em:  <a href="https://chc.org.br/artigo/pequenos-animais-que-movem-o-mundo/" target="_blank" rel="noopener noreferrer">https://chc.org.br/artigo/pequenos-animais-que-movem-o-mundo/</a>. Acesso em: 26 set. 2025.
                </p>
                {/* Questão intercalada no conteúdo - Tabela comparativa */}
                <QuestionRenderer
                  question={chapterQuestions.chapter1[7]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                <QuestionRenderer
                  question={chapterQuestions.chapter1[8]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                <QuestionRenderer
                  question={chapterQuestions.chapter1[9]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                {/* Botão de download das questões */}
                <div className="my-6">
                  <DownloadQuestionsButton
                    questions={[chapterQuestions.chapter1[8], chapterQuestions.chapter1[9], chapterQuestions.chapter1[10]]}
                    userAnswers={userAnswers}
                    title="Questões da Página 14"
                    fileName="questoes-pagina-14.pdf"
                  />
                </div>
                <Pagination currentPage={15} />
                {/* Conteúdo do botão do professor */}
                <div className="my-6">
                  <TeacherButton
                    content={
                      <>
                        <p className="mb-3">
                          EF69LP32, EF69LP34, EF69LP35, EF69LP36, EF69LP43, EF69LP56, EF67LP20, EF67LP21, EF67LP32, EF67LP33, EF07LP06,
                          EF67LP36. Nesta etapa, os alunos devem escrever um artigo de divulgação científica autoral com base em uma curiosidade
                          sobre um dos animais apresentados no Texto III. Antes da escrita, oriente-os na pesquisa, ajudando a identificar o foco ático e a selecionar informações confiáveis. Incentive o uso de linguagem clara e envolvente, comparações com o cotidiano e menção a instituições científicas, reforçando a função social do gênero. É importante retomar os elementos estruturais do artigo (título, introdução, desenvolvimento e conclusão), assim como os recursos que tornam o texto compreensível ao público geral. Apoie os alunos na etapa de planejamento, revisão e reescrita por meio do checklist avaliativo, promovendo a metacognição e fortalecendo a autonomia
                          escritora.
                        </p>
                      </>
                    }
                  />
                </div>
                <ProducaoFinal />
                <p className="mb-4 indent-6">
                  Você já leu e analisou artigos de divulgação científica sobre diversas curiosidades do mundo animal. No último texto do capítulo, conheceu as contribuições de alguns pequenos seres vivos para a natureza e a vida humana. Agora, é hora de transformar esse conhecimento em um texto autoral e informativo
                </p>
                <p className="mb-4 indent-6">Sua tarefa será escrever um artigo de divulgação científica inédito com base em uma das curiosidades sobre o animal que você escolheu na atividade anterior.</p>
                <p className="mb-4 indent-6"><strong>Preparação</strong></p>
                <p className="mb-4 indent-6">Aprofunde sua pesquisa sobre o animal escolhido. Para isso, busque informações confiáveis que não estejam no texto lido. Você pode usar vídeos, revistas científicas, siteseducativos, museus digitais ou conteúdos sugeridos pelo professor.
                </p>
                <p className="mb-4 indent-6"><strong>Produção</strong></p>
                <p className="mb-4 indent-6">Use uma linguagem acessível e crie um texto que seja informativo, curioso e envolvente para o leitor. Organize o seu texto de acordo com a estrutura a seguir.
                </p>
                {/* Conteúdo de lista */}
                <ul className="list-disc marker:text-[#BF3154] ml-6">
                  <li>Título: é instigante e relacionado ao tema.</li>
                  <li>Introdução: apresenta o animal escolhido e a curiosidade que você vai explicar.</li>
                  <li>Desenvolvimento: traz explicações, dados, exemplos, comparações com o cotidiano e linguagem acessível.</li>
                  <li>Conclusão: retoma a importância do animal ou deixa uma reflexão final.</li>
                </ul>

                <p className="mb-4 indent-6"><strong>Avaliação</strong></p>
                <p className="mb-4 indent-6">Antes de finalizar, revise seu texto com base no <em>checklist</em> a seguir.
                </p>
                {/* Tabela de Critérios de Avaliação */}
                <CriteriosAvaliacao
                  instanceId="producao_texto_pagina_15"
                  criterios={[
                    {
                      id: 'criterio_titulo',
                      nome: 'TÍTULO',
                      pergunta: 'O título destaca o assunto principal de forma atrativa?',
                    },
                    {
                      id: 'criterio_introducao',
                      nome: 'Introdução',
                      pergunta: 'A introdução apresenta o animal e a curiosidade científica escolhida?',
                    },
                    {
                      id: 'criterio_fontes',
                      nome: 'Fontes confiáveis',
                      pergunta: 'Você citou pelo menos uma fonte confiável usada na sua pesquisa?',
                    },
                    {
                      id: 'criterio_desenvolvimento',
                      nome: 'Desenvolvimento',
                      pergunta: 'As explicações estão organizadas, com linguagem acessível, dados e comparações relevantes?',
                    },
                    {
                      id: 'criterio_conclusao',
                      nome: 'Conclusão',
                      pergunta: 'A conclusão valoriza o tema ou apresenta uma boa reflexão?',
                    },
                    {
                      id: 'criterio_linguagem',
                      nome: 'Linguagem e estilo',
                      pergunta: 'A linguagem facilita a compreensão da ciência, sem usar termos técnicos não explicados?',
                    },
                    {
                      id: 'autoria_criacao',
                      nome: 'AUTORIA E CRIAÇÃO PESSOAL',
                      pergunta: 'Você escreveu com suas próprias palavras, sem copiar trechos?',
                    },
                  ]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                />
                <Pagination currentPage={16} />
                <ProducaoTextoNoticia />
              </>
            }
          />
          <Pagination currentPage={17} />
          {/* Conteúdo do botão do professor */}
          <div className="my-6">
            <TeacherButton
              content={
                <>
                  <p className="mb-3">
                    EF69LP44. Promova uma escuta atenta e engajada, incentivando os alunos a estabelecer relações entre os comportamentos humanos e as situações representadas nas fábulas. O texto de abertura oferece subsídios para que reconheçam, problematizem e discutam valores sociais, culturais e humanos presentes nesse gênero textual. Inicie com uma conversa que recupere experiências anteriores de leitura de fábulas e convide os alunos a compartilhar situações cotidianas que remetam aos provérbios mencionados como “devagar se vai ao longe”. As perguntas sugeridas buscam estimular a troca de pontos de vista e o amadurecimento da escuta argumentativa. Utilize a imagem do lobo em pele de cordeiro como ponto de partida visual para construir hipóteses com a turma sobre aparências, intenções e disfarces.
                  </p>
                </>
              }

            />
          </div>
          {/* Conteúdo do Capítulo 2 */}
          <Chapter
            id="chapter2"
            number={2}
            title="Fábulas"
            content={
              <>
                <p className="mb-4 indent-6">
                  Desde os tempos antigos, as pessoas criam histórias em que animais se comportam como seres humanos, capazes de pensar, falar e tomar decisões. Essas histórias divertem, fazem pensar e ensinam sobre como viver em sociedade.
                </p>
                <p className="mb-4 indent-6">
                  Além de entreter, as fábulas convidam à reflexão sobre a convivência com os outros e sobre valores importantes para todos. Isso acontece por meio de situações simbólicas vividas por personagens como raposas astutas, tartarugas persistentes, lobos em pele de cordeiro ou leões orgulhosos.
                </p>
                <p className="mb-4 indent-6">
                  São histórias curiosas, breves e que quase sempre terminam com uma moral, como “devagar se vai ao longe” ou “mais vale prevenir do que remediar”. Esses dizeres nos ajudam a pensar sobre comportamentos e dilemas comuns do dia a dia.
                </p>
                <p className="mb-4 indent-6">
                  Porém, a moral não precisa ser aceita como verdade absoluta. É possível refletir sobre ela de diferentes maneiras. Dessa forma, as fábulas deixam de ser apenas histórias com lições prontas e passam a ser um convite à crítica, à reflexão e ao diálogo.
                </p>
                {/* Conteúdo de lista */}
                <ul className="list-disc marker:text-[#BF3154] ml-6">
                  <li>Todas as histórias precisam terminar com uma lição explícita?</li>
                  <li>O que torna uma atitude boa ou ruim? Isso depende da intenção?</li>
                  <li>Todos os comportamentos têm consequências? Por quê?</li>
                </ul>
                {/* Imagem */}
                <div className="flex flex-col items-center my-6">
                  <img src="images/lobo.png" className='max-w-[50%]' />
                  <p className="text-[10px] text-slate-600 mt-2" >Hennadii H/Shutterstock
                  </p>
                </div>
                <Pagination currentPage={18} />
                <div className="my-6">
                  <TeacherButton
                    content={
                      <>
                        <p className="mb-3">
                          EEF69LP44, EF69LP47, EF69LP49, EF69LP54. Esta seção tem como objetivo ampliar a compreensão dos alunos sobre o gênero <strong>fábula</strong>, articulando repertório histórico, dimensão simbólica e leitura crítica. Essa leitura inicial não visa à memorização de conceitos, mas ao desenvolvimento de repertório analítico que será usado na leitura dos textos e na produção autoral. Ao final da seção, retome com os alunos a estrutura da fábula como narrativa curta e intencionalmente construída, preparando-os para identificar esses elementos nos textos da sequência

                        </p>
                      </>
                    }

                  />
                </div>
                <h3>O que é fábula?</h3>
                <p className="mb-4 indent-6">
                  As fábulas são histórias curtas, simbólicas e protagonizadas por animais que agem como humanos. Essas narrativas existem há milhares de anos e surgiram da tradição oral de povos antigos, mas ainda hoje fazem sentido porque abordam valores humanos importantes em qualquer época, como honestidade, esperteza e respeito.
                </p>
                <p className="mb-4 indent-6">
                  Esses textos comunicam ideias sobre o mundo e sobre o comportamento das pessoas de maneira indireta. O autor de uma fábula escolhe personagens, situações e desfechos para representar maneiras humanas de agir, pensar e se relacionar.
                </p>
                <p className="mb-4 indent-6">
                  Mais do que ensinar uma lição, a fábula apresenta uma maneira de interpretar a vida por meio de metáforas. Isso significa que o autor não precisa escrever “acho que vaidade é um defeito” ou “as aparências enganam”. Em vez disso, ele cria uma situação simbólica em que essas ideias aparecem nas ações dos personagens.
                </p>
                <p className="mb-4 indent-6">
                  Em muitas fábulas, a moral é apresentada de maneira direta, ao final do texto, por meio de uma frase curta que resume o ensinamento da história. No entanto, nem todas seguem esse formato. Em algumas versões, o ensinamento está apenas sugerido, aparecendo nas escolhas dos personagens, nas ações que eles realizam e nas consequências que enfrentam. Ou seja, nesses casos, o ensinamento fica subentendido.
                </p>
                <p className="mb-4 indent-6">
                  Ao longo do tempo, uma mesma fábula pode ser contada de diferentes maneiras, com finais alternativos e mensagens transformadas. Em uma versão, um personagem é criticado. Em outra, pode ser valorizado. E isso muda completamente a interpretação da história.
                </p>
                <h4>Uma história curta com construção precisa</h4>
                <p className="mb-4 indent-6">
                  Como são textos curtos, as fábulas exigem uma construção narrativa intencional. O tempo é marcado sem descrições longas, a linguagem é direta e carregada de intenção e os desfechos são rápidos e, muitas vezes, surpreendentes. O autor precisa selecionar com cuidado cada elemento da narrativa para transmitir uma mensagem em poucos parágrafos. Normalmente, as fábulas se organizam em três partes principais.
                </p>
                <ul className="list-disc marker:text-[#BF3154] ml-6">
                  <li><strong>Situação inicial</strong>:  apresenta o cenário e os personagens, sugerindo o comportamento de cada um. </li>
                  <li><strong>Conflito</strong>: contém um desafio, uma escolha ou uma situação crítica que leva os personagens a agir. </li>
                  <li><strong>Desfecho</strong>: mostra a consequência direta das ações dos personagens, geralmente com uma surpresa ou inversão de expectativa. </li>

                </ul>
                <p className="mb-4 indent-6">
                  Os verbos são usados no passado, indicando ações concluídas, e os marcadores temporais, como <strong>certo dia, naquela manhã</strong> e <strong>enquanto isso</strong>, ajudam o leitor a acompanhar o avanço da narrativa com agilidade.
                </p>
                <Pagination currentPage={19} />
                <div className="my-6">
                  <TeacherButton
                    content={
                      <>
                        <p className="mb-3">
                          EF69LP44, EF69LP46, EF69LP47, EF69LP49, EF67LP28, EF06LP05, EF67LP37, EF67LP38. Conduza a leitura e análise da fábula <em>A lebre e a tartaruga</em>, um texto clássico com grande potencial para interpretações que vão além da moral tradicionalmente conhecida. Ao longo da leitura guiada e das propostas interpretativas, incentive os alunos a observar como as escolhas narrativas revelam comportamentos simbólicos e constroem possíveis morais implícitas. Esse é um momento oportuno para trabalhar com rodas de conversa, trocas em duplas e valorização de diferentes pontos de vista durante as leituras e as interpretações. Após a realização das atividades, proponha uma conversa com a turma sobre como os comportamentos da lebre (confiança exagerada, falta de constância e descuido) também aparecem em situações do dia a dia. Peça aos alunos que compartilhem exemplos reais e reflitam, de maneira coletiva, sobre as consequências dessas atitudes e como evitá-las.
                        </p>
                      </>
                    }
                  />
                </div>
                <TrilhaTexto />
                <p className="mb-4 indent-6">
                  Leia uma fábula clássica e observe como a estrutura, a linguagem e os personagens contribuem para transmitir uma mensagem.
                </p>
                <p className="mb-4 indent-6">
                  <strong>Texto I</strong>
                </p>
                <CaixaTexto title='A Lebre e a Tartaruga'>
                  <p className="mb-4 indent-6">
                    A Lebre vivia a rir da Tartaruga por
                    causa de sua lentidão.
                  </p>
                  <p className="mb-4 indent-6">
                    — Como consegues ir a algum lugar arrastando-te assim? — zombava
                    ela, entre risos.
                  </p>
                  <p className="mb-4 indent-6">
                    — Posso não correr, mas sei perseverar. Se quiseres, podemos apostar uma corrida. Veremos quem chega primeiro.
                  </p>
                  <p className="mb-4 indent-6">
                    A Lebre, achando a ideia engraçadíssima, aceitou o desafio só para se divertir. A Raposa, respeitada por sua imparcialidade, foi chamada para ser a juíza. Ela marcou o percurso, alinhou os competidores e deu o sinal de partida.
                  </p>
                  <p className="mb-4 indent-6">
                    Num piscar de olhos, a Lebre disparou pelo caminho e logo ficou fora de vista. Já a Tartaruga seguiu em seu ritmo, passo a passo, sem desanimar. Convencida de que venceria com facilidade, a Lebre decidiu descansar um pouco à sombra de uma árvore.
                  </p>
                  <p className="mb-4 indent-6">
                    — Tenho tempo de sobra — pensou — a Tartaruga mal deve ter saído
                    do lugar.
                  </p>
                  <p className="mb-4 indent-6">
                    Mas, enquanto dormia tranquila, a Tartaruga, firme e constante, passou por ela e seguiu em frente, determinada a chegar ao fim.
                  </p>
                  <p className="mb-4 indent-6">
                    Quando despertou, a Lebre levou um susto ao ver a Tartaruga quase cruzando a linha de chegada. Correu com todas as forças, mas já era tarde demais. A lenta Tartaruga venceu a corrida,
                    para surpresa de todos.
                  </p>

                  {/* Imagem */}
                  <div className="flex flex-col items-center my-6">
                    <img src="images/lebreTartaruga.png" className="max-w-[50%]" />
                    <p className="text-[10px] text-slate-600 mt-2">WINTER, Milo. A lebre e a tartaruga. <em>In: AESOP. The Aesop for children. [S.l.]</em>: Project Gutenberg, 2006. Disponível em: <a href="http://www.gutenberg.org/etext/19994" target="_blank" rel="noopener noreferrer">http://www.gutenberg.org/etext/19994</a>. Acesso em: 24 set. 2025.
                    </p>
                  </div>
                </CaixaTexto>
                <p
                  className="mt-2 mb-6"
                  style={{
                    fontFamily: 'Ubuntu, sans-serif',
                    color: '#000000',
                    fontSize: '10px',
                  }}
                >
                  ESOPO. <em>A lebre e a tartaruga</em>. Domínio público. Texto adaptado para fins didáticos. (Tradução nossa).
                </p>
                <Pagination currentPage={20} />
                {/* Conteúdo do botão do professor - Tabela comparativa */}
                <div className="my-6">
                  <TeacherButton
                    content={
                      <>
                        <p className="mb-3">
                          Respostas:
                        </p>
                        {(() => {
                          const question = chapterQuestions.chapter2.find(q => q.id === 'ch2_q1');
                          if (question && question.type === 'table-fill') {
                            return (
                              <>
                                {/* Respostas da tabela */}
                                {question.correctAnswer && (
                                  <>
                                    <p className="mb-2 font-semibold">
                                      {question.number !== undefined && (
                                        <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
                                      )}
                                      Tabela:
                                    </p>
                                    {question.rows.map((row) => {
                                      const correctAnswers = question.correctAnswer!;
                                      // Obtém o primeiro campo da row (primeira coluna)
                                      const firstColumnKey = Object.keys(row).find(key => key !== 'id') || 'paragraph';
                                      const firstColumnValue = row[firstColumnKey] || '';

                                      // Gera os fieldIds para cada coluna (exceto a primeira)
                                      const columnAnswers = question.columns.slice(1).map((columnName, colIndex) => {
                                        const fieldId = `${question.id}_${row.id}_col${colIndex + 1}`;
                                        return {
                                          columnName,
                                          answer: correctAnswers[fieldId] || ''
                                        };
                                      });

                                      return (
                                        <div key={row.id} className="mb-4">
                                          <p className="mb-2 font-semibold" style={{ color: '#0E3B5D' }}>
                                            {question.columns[0]} {firstColumnValue}:
                                          </p>
                                          {columnAnswers.map((colAnswer, idx) => (
                                            <p key={idx} className="mb-1">
                                              <strong>{colAnswer.columnName}:</strong> {colAnswer.answer}
                                            </p>
                                          ))}
                                        </div>
                                      );
                                    })}
                                  </>
                                )}

                              </>
                            );
                          }
                          return null;
                        })()}
                        {(() => {
                          const question = chapterQuestions.chapter2.find(q => q.id === 'ch2_q2');
                          if (question && question.type === 'text-input') {
                            // Se tiver subquestões, renderiza cada uma
                            if (question.subQuestions && question.subQuestions.length > 0) {
                              return question.subQuestions.map((subQ) => (
                                <p key={subQ.letter} className="mb-3">
                                  {question.number !== undefined && (
                                    <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
                                  )}
                                  <span style={{ color: '#00776E', fontWeight: 'bold' }}>{subQ.letter}) </span>
                                  <span dangerouslySetInnerHTML={{ __html: subQ.correctAnswer || '' }} />
                                </p>
                              ));
                            }
                            // Se não tiver subquestões, renderiza a resposta direta
                            if (question.correctAnswer) {
                              return (
                                <p className="mb-3">
                                  {question.number !== undefined && (
                                    <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
                                  )}
                                  <span dangerouslySetInnerHTML={{ __html: question.correctAnswer }} />
                                </p>
                              );
                            }
                          }
                          return null;
                        })()}
                        {(() => {
                          const question = chapterQuestions.chapter2.find(q => q.id === 'ch2_q3');
                          if (question && question.type === 'text-input') {
                            // Se tiver subquestões, renderiza cada uma
                            if (question.subQuestions && question.subQuestions.length > 0) {
                              return question.subQuestions.map((subQ) => (
                                <p key={subQ.letter} className="mb-3">
                                  {question.number !== undefined && (
                                    <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
                                  )}
                                  <span style={{ color: '#00776E', fontWeight: 'bold' }}>{subQ.letter}) </span>
                                  <span dangerouslySetInnerHTML={{ __html: subQ.correctAnswer || '' }} />
                                </p>
                              ));
                            }
                            // Se não tiver subquestões, renderiza a resposta direta
                            if (question.correctAnswer) {
                              return (
                                <p className="mb-3">
                                  {question.number !== undefined && (
                                    <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
                                  )}
                                  <span dangerouslySetInnerHTML={{ __html: question.correctAnswer }} />
                                </p>
                              );
                            }
                          }
                          return null;
                        })()}
                        {(() => {
                          const question = chapterQuestions.chapter2.find(q => q.id === 'ch2_q4');
                          if (question && question.type === 'text-input') {
                            // Se tiver subquestões, renderiza cada uma
                            if (question.subQuestions && question.subQuestions.length > 0) {
                              return question.subQuestions.map((subQ) => (
                                <p key={subQ.letter} className="mb-3">
                                  {question.number !== undefined && (
                                    <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
                                  )}
                                  <span style={{ color: '#00776E', fontWeight: 'bold' }}>{subQ.letter}) </span>
                                  <span dangerouslySetInnerHTML={{ __html: subQ.correctAnswer || '' }} />
                                </p>
                              ));
                            }
                            // Se não tiver subquestões, renderiza a resposta direta
                            if (question.correctAnswer) {
                              return (
                                <p className="mb-3">
                                  {question.number !== undefined && (
                                    <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
                                  )}
                                  <span dangerouslySetInnerHTML={{ __html: question.correctAnswer }} />
                                </p>
                              );
                            }
                          }
                          return null;
                        })()}
                      </>
                    }
                  />
                </div>
                {/* Questão intercalada no conteúdo - Tabela comparativa */}
                <QuestionRenderer
                  question={chapterQuestions.chapter2[0]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                <QuestionRenderer
                  question={chapterQuestions.chapter2[1]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                <QuestionRenderer
                  question={chapterQuestions.chapter2[2]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                <QuestionRenderer
                  question={chapterQuestions.chapter2[3]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                {/* Botão de download das questões */}
                <div className="my-6">
                  <DownloadQuestionsButton
                    questions={[chapterQuestions.chapter2[0], chapterQuestions.chapter2[1], chapterQuestions.chapter2[2], chapterQuestions.chapter2[3]]}
                    userAnswers={userAnswers}
                    title="Questões da Página 21"
                    fileName="questoes-pagina-21.pdf"
                  />
                </div>
                <Pagination currentPage={21} />
                <div className="my-6">
                  <TeacherButton
                    content={
                      <>
                        <p className="mb-3">
                          EF69LP44, EF69LP46, EF69LP47, EF69LP49, EF69LP54, EF67LP27, EF67LP28, EF06LP05, EF67LP37, EF67LP38. Neste segundo momento da sequência didática, o objetivo é ampliar a compreensão do gênero fábula por meio da leitura de um novo texto, agora em versos. A fábula O leão e o rato mantém as características do gênero, como personagens simbólicos, estrutura narrativa concisa e mensagem final,mas adota uma linguagem poética e rítmica que convida os alunos a observar com mais atenção as intenções do autor. Ao conduzir a leitura, oriente os alunos a interpretar as ações e os comportamentos dos personagens com base nos valores humanos que representam, como gratidão, humildade e reconhecimento. As atividades propostas favorecem a análise da estrutura do gênero, o uso do tempo verbal no passado, a identificação de marcadores temporais e a construção da moral – agora explícita. Faça comparações com a fábula anterior para que os alunos reconheçam o que se mantém e o que muda entre os textos.
                        </p>
                      </>
                    }
                  />
                </div>
                <TrilhaTexto />
                <p className="mb-4 indent-6">
                  Agora, leia uma fábula que está organizada em versos. Apesar dessa diferença no modo de contar a história, os elementos principais do gênero continuam presentes.
                </p>
                <p className="mb-4 indent-6">
                  <strong>Texto II</strong>
                </p>
                <CaixaTexto title='O leão e o rato' backgroundColor="white" columns={2}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center" style={{ textAlign: 'center' }}>
                    <div>
                      <p className="mb-4">
                        Saiu o rato correndo, <br />
                        assustado e distraído, <br />
                        e foi logo recebido <br />
                        por um leão, sem entender. <br />
                      </p>
                      <p className="mb-4">
                        Entre as garras tremeu, <br />
                        mas foi surpreendido então. <br />
                        O leão o protegeu <br />
                        e poupou-lhe a punição. <br />
                      </p>
                      <p className="mb-4">
                        Dias passaram ligeiros, <br />
                        e o leão, rei altaneiro, <br />
                        por entre folhas entrou, <br />
                        mas a selva o enganou. <br />
                        Preso em rede traiçoeira, <br />
                        gritou com força certeira, <br />
                        mas sua luta foi em vão. <br />
                        Ficou preso, o valentão. <br />
                      </p>
                    </div>
                    <div>
                      <p className="mb-4">
                        O ratinho, sem demora, <br />
                        chega e começa a agir. <br />
                        Rói as cordas, uma hora, <br />
                        e outra, sem desistir. <br />
                        Fino dente, ação constante, <br />
                        vai abrindo a prisão; <br />
                        com esforço perseverante, <br />
                        liberta, enfim, o leão. <br />
                      </p>
                      <p className="mb-4">
                        Pagou o bem que recebera, <br />
                        com coragem e humildade, <br />
                        e ensinou que a vida inteira <br />
                        vale a boa gratidão. <br />
                        Ser gentil não custa nada, <br />
                        e a lição dessa jornada, <br />
                        é que até o mais singelo <br />
                        pode ser forte e belo. <br />
                      </p>
                    </div>
                  </div>
                  {/* Imagem */}
                  <div className="flex flex-col items-center my-6">
                    <img src="images/leao.png" className="max-w-[60%]" />
                    <p className="text-[10px] text-slate-600 mt-2">tada/stock.adobe.com
                    </p>
                  </div>
                </CaixaTexto>
                <p
                  className="mt-2 mb-6"
                  style={{
                    fontFamily: 'Ubuntu, sans-serif',
                    color: '#000000',
                    fontSize: '10px',
                  }}
                >
                  LA FONTAINE. O leão e o rato. Domínio público. Texto adaptado para fins didáticos. (Tradução nossa).
                </p>
                <Pagination currentPage={22} />
                {/* Conteúdo do botão do professor */}
                <div className="my-6">
                  <TeacherButton
                    content={
                      <>
                        <p className="mb-3">
                          Respostas:
                        </p>
                        {(() => {
                          const question = chapterQuestions.chapter2.find(q => q.id === 'ch2_q5');
                          if (question && question.type === 'text-input') {
                            // Se tiver subquestões, renderiza cada uma
                            if (question.subQuestions && question.subQuestions.length > 0) {
                              return question.subQuestions.map((subQ) => {
                                // Se tiver subItems, renderiza com bullets
                                if (subQ.subItems && subQ.subItems.length > 0) {
                                  return (
                                    <div key={subQ.letter} className="mb-4">
                                      <p className="mb-2">
                                        {question.number !== undefined && (
                                          <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
                                        )}
                                        <span style={{ color: '#00776E', fontWeight: 'bold' }}>{subQ.letter}) </span>
                                        <span style={{ color: 'black' }}>{subQ.question}</span>
                                      </p>
                                      <ul className="question-subitems" style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                                        {subQ.subItems.map((subItem, index) => (
                                          <li key={index} className="mb-2">
                                            <p className="mb-1">
                                              <span style={{ color: 'black' }}>{subItem.label}: </span>
                                              <span dangerouslySetInnerHTML={{ __html: subItem.correctAnswer || '' }} />
                                            </p>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  );
                                }
                                // Se não tiver subItems, renderiza normalmente
                                return (
                                  <p key={subQ.letter} className="mb-3">
                                    {question.number !== undefined && (
                                      <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
                                    )}
                                    <span style={{ color: '#00776E', fontWeight: 'bold' }}>{subQ.letter}) </span>
                                    <span dangerouslySetInnerHTML={{ __html: subQ.correctAnswer || '' }} />
                                  </p>
                                );
                              });
                            }
                            // Se não tiver subquestões, renderiza a resposta direta
                            if (question.correctAnswer) {
                              return (
                                <p className="mb-3">
                                  {question.number !== undefined && (
                                    <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
                                  )}
                                  <span dangerouslySetInnerHTML={{ __html: question.correctAnswer }} />
                                </p>
                              );
                            }
                          }
                          return null;
                        })()}
                        {(() => {
                          const question = chapterQuestions.chapter2.find(q => q.id === 'ch2_q6');
                          if (question && question.type === 'alternative' && question.options) {
                            const correctOption = question.options[question.correctAnswer];
                            const correctLetter = String.fromCharCode(97 + question.correctAnswer); // a, b, c, d...
                            return (
                              <p className="mb-3">
                                {question.number !== undefined && (
                                  <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
                                )}
                                <span style={{ color: '#00776E', fontWeight: 'bold' }}>{correctLetter}) </span>
                                <span dangerouslySetInnerHTML={{ __html: correctOption || '' }} />
                              </p>
                            );
                          }
                          return null;
                        })()}
                        {(() => {
                          const question = chapterQuestions.chapter2.find(q => q.id === 'ch2_q7');
                          if (question && question.type === 'text-input') {
                            // Se tiver subquestões, renderiza cada uma
                            if (question.subQuestions && question.subQuestions.length > 0) {
                              return question.subQuestions.map((subQ) => (
                                <p key={subQ.letter} className="mb-3">
                                  {question.number !== undefined && (
                                    <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
                                  )}
                                  <span style={{ color: '#00776E', fontWeight: 'bold' }}>{subQ.letter}) </span>
                                  <span dangerouslySetInnerHTML={{ __html: subQ.correctAnswer || '' }} />
                                </p>
                              ));
                            }
                            // Se não tiver subquestões, renderiza a resposta direta
                            if (question.correctAnswer) {
                              return (
                                <p className="mb-3">
                                  {question.number !== undefined && (
                                    <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
                                  )}
                                  <span dangerouslySetInnerHTML={{ __html: question.correctAnswer }} />
                                </p>
                              );
                            }
                          }
                          return null;
                        })()}
                      </>
                    }
                  />
                </div>
                {/* Questão intercalada no conteúdo - Tabela comparativa */}
                <QuestionRenderer
                  question={chapterQuestions.chapter2[4]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                <QuestionRenderer
                  question={chapterQuestions.chapter2[5]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                <QuestionRenderer
                  question={chapterQuestions.chapter2[6]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                {/* Botão de download das questões */}
                <div className="my-6">
                  <DownloadQuestionsButton
                    questions={[chapterQuestions.chapter2[4], chapterQuestions.chapter2[5], chapterQuestions.chapter2[6]]}
                    userAnswers={userAnswers}
                    title="Questões da Página 22"
                    fileName="questoes-pagina-22.pdf"
                  />
                </div>

                <Pagination currentPage={23} />
                {/* Conteúdo do botão do professor */}
                <div className="my-6">
                  <TeacherButton
                    content={
                      <>
                        <p className="mb-3">
                          Respostas:
                        </p>
                        {(() => {
                          const question = chapterQuestions.chapter2.find(q => q.id === 'ch2_q8');
                          if (question && question.type === 'text-input') {
                            // Se tiver subquestões, renderiza cada uma
                            if (question.subQuestions && question.subQuestions.length > 0) {
                              return question.subQuestions.map((subQ) => (
                                <p key={subQ.letter} className="mb-3">
                                  {question.number !== undefined && (
                                    <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
                                  )}
                                  <span style={{ color: '#00776E', fontWeight: 'bold' }}>{subQ.letter}) </span>
                                  <span dangerouslySetInnerHTML={{ __html: subQ.correctAnswer || '' }} />
                                </p>
                              ));
                            }
                            // Se não tiver subquestões, renderiza a resposta direta
                            if (question.correctAnswer) {
                              return (
                                <p className="mb-3">
                                  {question.number !== undefined && (
                                    <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
                                  )}
                                  <span dangerouslySetInnerHTML={{ __html: question.correctAnswer }} />
                                </p>
                              );
                            }
                          }
                          return null;
                        })()}
                        {(() => {
                          const question = chapterQuestions.chapter2.find(q => q.id === 'ch2_q9');
                          if (question && question.type === 'text-input') {
                            // Se tiver subquestões, renderiza cada uma
                            if (question.subQuestions && question.subQuestions.length > 0) {
                              return question.subQuestions.map((subQ) => (
                                <p key={subQ.letter} className="mb-3">
                                  {question.number !== undefined && (
                                    <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
                                  )}
                                  <span style={{ color: '#00776E', fontWeight: 'bold' }}>{subQ.letter}) </span>
                                  <span dangerouslySetInnerHTML={{ __html: subQ.correctAnswer || '' }} />
                                </p>
                              ));
                            }
                            // Se não tiver subquestões, renderiza a resposta direta
                            if (question.correctAnswer) {
                              return (
                                <p className="mb-3">
                                  {question.number !== undefined && (
                                    <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
                                  )}
                                  <span dangerouslySetInnerHTML={{ __html: question.correctAnswer }} />
                                </p>
                              );
                            }
                          }
                          return null;
                        })()}
                        <p className="mb-4 indent-6" style={{ textAlign: 'left' }}>
                          Esta atividade tem como objetivo consolidar o conhecimento sobre o gênero <strong>fábula</strong> e avançar na autonomia autoral dos alunos. Ao propor a mudança de forma (de prosa para verso ou de verso para prosa) e a modificação de pelo menos um dos elementos estruturais do enredo (situação inicial, conflito ou desfecho), a atividade convida os alunos a refletir criticamente sobre as escolhas narrativas e a relação entre estrutura e mensagem. O foco não está apenas em recontar, mas em recriar com intenção, construindo uma nova moral baseada nos personagens e em novos caminhos de ação.
                        </p>
                        <p className="mb-4 indent-6" style={{ textAlign: 'left' }}>
                          Minha versão: É importante orientar os alunos a manter os elementos essenciais do gênero, como personagens simbólicos e sequência narrativa, mesmo ao optar por mudanças criativas. A etapa de preparação pode ser realizada individualmente ou em dupla. Atue como mediador, oferecendo exemplos, esclarecendo dúvidas sobre o uso de versos ou a organização de parágrafos e estimulando discussões sobre diferentes valores possíveis. A atividade proporciona um espaço de autoria seguro, permitindo que alunos com diferentes níveis de proficiência se envolvam no processo criativo.

                        </p>
                      </>
                    }
                  />
                </div>
                {/* Questão intercalada no conteúdo - Tabela comparativa */}
                <QuestionRenderer
                  question={chapterQuestions.chapter2[7]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                <QuestionRenderer
                  question={chapterQuestions.chapter2[8]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                {/* Botão de download das questões */}
                <div className="my-6">
                  <DownloadQuestionsButton
                    questions={[chapterQuestions.chapter2[7], chapterQuestions.chapter2[8]]}
                    userAnswers={userAnswers}
                    title="Questões da Página 23"
                    fileName="questoes-pagina-23.pdf"
                  />
                </div>
                <MinhaVersao />
                <p className="mb-4 indent-6">Você já leu e analisou duas fábulas clássicas: A lebre e a tartaruga e O leão e o rato. Agora, sua tarefa será fazer uma reescrita criativa de uma dessas histórias, mas você terá dois desafios.</p>
                <ol className="list-decimal marker:text-[#BF3154] ml-6 mb-4">
                  <li><strong>Mude a forma do texto</strong>: se a fábula escolhida era em prosa, será reescrita em versos; se era em versos, será reescrita em prosa.
                  </li>
                  <li><strong>Modifique algum elemento da narrativa</strong> (a situação inicial, o conflito ou o desfecho): com o objetivo de alterar a moral da história.
                  </li>
                </ol>
                <p className="mb-4 indent-6">Sua produção deve manter os personagens da fábula, mas apresentar uma nova versão do enredo que leve o leitor a refletir sobre uma lição diferente daquela da história original.
                </p>

                <Pagination currentPage={24} />
                {/* Conteúdo do botão do professor */}
                <div className="my-6">
                  <TeacherButton
                    content={
                      <>
                        <p className="mb-3">
                          Respostas:
                        </p>
                        <p className="mb-4 indent-6" style={{ textAlign: 'left' }}>
                          Pessoal.
                        </p>
                      </>
                    }
                  />
                </div>
                <p className="mb-4 indent-6"><strong>Preparação</strong></p>
                <p className="mb-4 indent-6">Antes de escrever, siga os passos abaixo para planejar sua nova versão da fábula.</p>
                <ol className="list-decimal marker:text-[#BF3154] ml-6 mb-4">
                  <li><strong>Mude a forma do texto</strong>: se a fábula escolhida era em prosa, será reescrita em versos; se era em versos, será reescrita em prosa.
                  </li>
                  <li><strong>Modifique algum elemento da narrativa</strong> (a situação inicial, o conflito ou o desfecho): com o objetivo de alterar a moral da história.
                  </li>
                </ol>
                <QuestionRenderer
                  question={chapterQuestions.chapter2[9]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                {/* Botão de download das questões */}
                <div className="my-6">
                  <DownloadQuestionsButton
                    questions={[chapterQuestions.chapter2[9]]}
                    userAnswers={userAnswers}
                    title="Questões da Página 24"
                    fileName="questoes-pagina-24.pdf"
                  />
                </div>
                <Pagination currentPage={25} />
                <p className="mb-4 indent-6"><strong>Produção</strong></p>
                <p className="mb-4 indent-6">Agora é hora de escrever sua fábula. Durante a produção, preste atenção aos seguintes pontos:
                </p>
                <ol className="list-decimal marker:text-[#BF3154] ml-6 mb-4">
                  <li>Mesmo com as mudanças, sua história deve manter os três elementos principais da estrutura da fábula: situação inicial, conflito e desfecho. </li>
                  <li>Use os mesmos personagens da história original, mas mude o que acontece com eles para construir uma nova lição de moral. </li>
                  <li>Se estiver escrevendo em versos, lembre-se das rimas, do ritmo e da sonoridade do texto. </li>
                  <li>Se estiver escrevendo em prosa, organize o texto em parágrafos bem estruturados. </li>
                  <li>Use uma linguagem objetiva, expressiva e coerente com o gênero. </li>
                  <li>Seja criativo: pense em valores importantes para você, para sua turma ou para o mundo atual. Como sua fábula pode provocar uma nova reflexão? </li>

                </ol>

                <p className="mb-4 indent-6"><strong>Avaliação</strong></p>
                <p className="mb-4 indent-6">Antes de finalizar a sua versão da fábula, confira o <em>checklist</em> a seguir para aprimorá-la.
                </p>
                {/* Tabela de Critérios de Avaliação */}
                <CriteriosAvaliacao
                  instanceId="minha_versao_fabulas"
                  criterios={[
                    {
                      id: 'criterio_titulo',
                      nome: 'Forma do texto',
                      pergunta: 'Você transformou sua fábula de prosa para verso ou de verso para prosa?',
                    },
                    {
                      id: 'criterio_linha_fina',
                      nome: 'Estrutura completa',
                      pergunta: 'Sua fábula tem situação inicial, conflito e desfecho bem definidos?',
                    },
                    {
                      id: 'criterio_lide',
                      nome: 'Mudança no enredo',
                      pergunta: 'Você alterou pelo menos um dos elementos do enredo de maneira coerente com a nova moral?',
                    },
                    {
                      id: 'criterio_corpo',
                      nome: 'Nova moral ',
                      pergunta: 'Sua fábula tem uma moral diferente da moral original?',
                    },
                    {
                      id: 'criterio_linguagem',
                      nome: 'Coerência e coesão',
                      pergunta: 'O texto apresenta uma sequência lógica de acontecimentos?',
                    },
                    {
                      id: 'criterio_foco',
                      nome: 'Expressividade',
                      pergunta: 'As ações e os comportamentos dos personagens representam atitudes humanas e ajudam a transmitir a nova mensagem da fábula?',
                    },
                    {
                      id: 'autoria_criacao',
                      nome: 'Autoria e criatividade',
                      pergunta: 'Você fez escolhas inéditas e criativas, usando sua própria forma de contar a história?',
                    },
                  ]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                />
                <Pagination currentPage={26} />
                <ProducaoTexto instanceId="producaoTexto2" />
                <Pagination currentPage={27} />
                <div className="my-6">
                  <TeacherButton
                    content={
                      <>
                        <p className="mb-3">
                          EF69LP44, EF69LP46, EF69LP47, EF69LP49, EF67LP28, EF67LP37, EF67LP38. Nesta etapa, o objetivo é consolidar a compreensão da estrutura do gênero <strong>fábula</strong> e aprofundar a percepção dos alunos sobre as diferentes formas de construção da moral. A fábula <em>A raposa e o corvo</em> retoma os elementos principais trabalhados ao longo do capítulo, mas introduz um enunciado de moral explicitamente separado do corpo do texto. Esse recurso permite aos alunos que comparem essa estratégia com as anteriores e reflitam sobre seus efeitos. As atividades propostas favorecem múltiplos níveis de leitura: da compreensão literal à análise crítica dos comportamentos simbólicos dos personagens. Incentive a análise da figura da raposa como manipuladora e do corvo como símbolo da vaidade, relacionando esses papéis a situações contemporâneas e a possíveis excessos de confiança ao julgar a opinião dos outros. Essa etapa conclui a sequência interpretativa e prepara os alunos para a produção autoral, que será orientada pela escolha de uma moral e pela construção de uma narrativa original com estrutura e intenção definidas.
                        </p>
                      </>
                    }
                  />
                </div>
                <TrilhaTexto />
                <p className="mb-4 indent-6">
                  Leia mais uma fábula. Agora, há moral explícita ao final do texto.
                </p>
                <p className="mb-4 indent-6">
                  <strong>Texto III</strong>
                </p>
                <CaixaTexto title='A raposa e o corvo'>
                  <p className="mb-4 indent-6">
                    Em certa manhã ensolarada, um corvo pousou num alto galho com um belo pedaço de queijo no bico. Estava satisfeito com seu achado e já se preparava para apreciar seu lanche, quando apareceu uma raposa astuta caminhando logo abaixo.
                  </p>
                  <p className="mb-4 indent-6">
                    Ao ver o corvo com o queijo, a raposa parou e pensou consigo: “Não é justo deixá-lo com essa iguaria! Preciso encontrar maneira de fazê-lo largar o queijo, mas sem assustá-lo.” Então, com os olhos brilhando de esperteza, parou sob a árvore, ergueu o focinho em direção ao galho e exclamou:
                  </p>
                  <p className="mb-4 indent-6">
                    — Que criatura esplêndida és tu! Nunca vi penas tão brilhantes!
                    Que elegância, que porte majestoso! Aposto que tens uma voz encantadora, digna de um verdadeiro rei das aves. Se cantasses agora, certeza teríamos de coroar-te soberano do céu!
                  </p>
                  <p className="mb-4 indent-6">
                    Lisonjeado, o corvo sentiu-se honrado com tantos elogios. Envaidecido, pensou: “Ora, por que não mostrar à senhorita minha
                    bela voz?” E, sem pensar nas consequências, abriu o bico para cantar.
                  </p>
                  <p className="mb-4 indent-6">
                    — Cróóó!
                  </p>
                  <p className="mb-4 indent-6">
                    No mesmo instante, o queijo caiu direto no chão. A raposa, sem
                    perder tempo, agarrou-o com os dentes e se afastou tranquilamente. Antes de sumir entre os arbustos, ainda se virou e disse:
                  </p>
                  <p className="mb-4 indent-6">
                    — Cante o quanto quiser, meu caro. De beleza e voz você pode
                    até entender. Mas de inteligência… Ah, ainda lhe falta muito!
                  </p>
                  <p className="mb-4 indent-6">
                    <strong>Moral da história</strong>: Cuidado com os que elogiam demais.
                  </p>


                  {/* Imagem */}
                  <div className="flex flex-col items-center my-6">
                    <img src="images/raposa.png" className="max-w-[50%]" />
                    <p className="text-[10px] text-slate-600 mt-2">Saenkova Iuliia/stock.adobe.com
                    </p>
                  </div>
                </CaixaTexto>
                <p
                  className="mt-2 mb-6"
                  style={{
                    fontFamily: 'Ubuntu, sans-serif',
                    color: '#000000',
                    fontSize: '10px',
                  }}
                >
                  ESOPO. <em>A raposa e o corvo</em>. Domínio público. Texto adaptado para fins didáticos. (Tradução nossa).
                </p>
                <Pagination currentPage={28} />
                {/* Conteúdo do botão do professor */}
                <div className="my-6">
                  <TeacherButton
                    content={
                      <>
                        <p className="mb-3">
                          Respostas:
                        </p>
                        {(() => {
                          const question = chapterQuestions.chapter2.find(q => q.id === 'ch2_q11');
                          if (question && question.type === 'true-false' && question.statements) {
                            return question.statements.map((stmt) => {
                              // Se tiver correção, mostra V/F primeiro e depois a correção. Se não, mostra apenas V ou F
                              const correctAnswerText = stmt.correctAnswer ? 'Verdadeiro (V)' : 'Falso (F)';
                              const answerText = stmt.correction
                                ? `${correctAnswerText}. ${stmt.correction}`
                                : correctAnswerText;

                              return (
                                <p key={stmt.letter} className="mb-3">
                                  {question.number !== undefined && (
                                    <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
                                  )}
                                  <span style={{ color: '#00776E', fontWeight: 'bold' }}>{stmt.letter}) </span>
                                  <span dangerouslySetInnerHTML={{ __html: answerText }} />
                                </p>
                              );
                            });
                          }
                          return null;
                        })()}
                        {(() => {
                          const question = chapterQuestions.chapter2.find(q => q.id === 'ch2_q12');
                          if (question && question.type === 'text-input') {
                            // Se tiver subquestões, renderiza cada uma
                            if (question.subQuestions && question.subQuestions.length > 0) {
                              return question.subQuestions.map((subQ) => (
                                <p key={subQ.letter} className="mb-3">
                                  {question.number !== undefined && (
                                    <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
                                  )}
                                  <span style={{ color: '#00776E', fontWeight: 'bold' }}>{subQ.letter}) </span>
                                  <span dangerouslySetInnerHTML={{ __html: subQ.correctAnswer || '' }} />
                                </p>
                              ));
                            }
                            // Se não tiver subquestões, renderiza a resposta direta
                            if (question.correctAnswer) {
                              return (
                                <p className="mb-3">
                                  {question.number !== undefined && (
                                    <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
                                  )}
                                  <span dangerouslySetInnerHTML={{ __html: question.correctAnswer }} />
                                </p>
                              );
                            }
                          }
                          return null;
                        })()}
                        {(() => {
                          const question = chapterQuestions.chapter2.find(q => q.id === 'ch2_q13');
                          if (question && question.type === 'text-input') {
                            // Se tiver subquestões, renderiza cada uma
                            if (question.subQuestions && question.subQuestions.length > 0) {
                              return question.subQuestions.map((subQ) => (
                                <p key={subQ.letter} className="mb-3">
                                  {question.number !== undefined && (
                                    <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
                                  )}
                                  <span style={{ color: '#00776E', fontWeight: 'bold' }}>{subQ.letter}) </span>
                                  <span dangerouslySetInnerHTML={{ __html: subQ.correctAnswer || '' }} />
                                </p>
                              ));
                            }
                            // Se não tiver subquestões, renderiza a resposta direta
                            if (question.correctAnswer) {
                              return (
                                <p className="mb-3">
                                  {question.number !== undefined && (
                                    <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
                                  )}
                                  <span dangerouslySetInnerHTML={{ __html: question.correctAnswer }} />
                                </p>
                              );
                            }
                          }
                          return null;
                        })()}
                        {(() => {
                          const question = chapterQuestions.chapter2.find(q => q.id === 'ch2_q14');
                          if (question && question.type === 'text-input') {
                            // Se tiver subquestões, renderiza cada uma
                            if (question.subQuestions && question.subQuestions.length > 0) {
                              return question.subQuestions.map((subQ) => (
                                <p key={subQ.letter} className="mb-3">
                                  {question.number !== undefined && (
                                    <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
                                  )}
                                  <span style={{ color: '#00776E', fontWeight: 'bold' }}>{subQ.letter}) </span>
                                  <span dangerouslySetInnerHTML={{ __html: subQ.correctAnswer || '' }} />
                                </p>
                              ));
                            }
                            // Se não tiver subquestões, renderiza a resposta direta
                            if (question.correctAnswer) {
                              return (
                                <p className="mb-3">
                                  {question.number !== undefined && (
                                    <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
                                  )}
                                  <span dangerouslySetInnerHTML={{ __html: question.correctAnswer }} />
                                </p>
                              );
                            }
                          }
                          return null;
                        })()}
                        {(() => {
                          const question = chapterQuestions.chapter2.find(q => q.id === 'ch2_q15');
                          if (question && question.type === 'text-input') {
                            // Se tiver subquestões, renderiza cada uma
                            if (question.subQuestions && question.subQuestions.length > 0) {
                              return question.subQuestions.map((subQ) => (
                                <p key={subQ.letter} className="mb-3">
                                  {question.number !== undefined && (
                                    <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
                                  )}
                                  <span style={{ color: '#00776E', fontWeight: 'bold' }}>{subQ.letter}) </span>
                                  <span dangerouslySetInnerHTML={{ __html: subQ.correctAnswer || '' }} />
                                </p>
                              ));
                            }
                            // Se não tiver subquestões, renderiza a resposta direta
                            if (question.correctAnswer) {
                              return (
                                <p className="mb-3">
                                  {question.number !== undefined && (
                                    <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
                                  )}
                                  <span dangerouslySetInnerHTML={{ __html: question.correctAnswer }} />
                                </p>
                              );
                            }
                          }
                          return null;
                        })()}

                      </>
                    }

                  />
                </div>
                {/* Questão intercalada no conteúdo */}
                <QuestionRenderer
                  question={chapterQuestions.chapter2[10]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                {/* Questão intercalada no conteúdo */}
                <QuestionRenderer
                  question={chapterQuestions.chapter2[11]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                {/* Questão intercalada no conteúdo */}
                <QuestionRenderer
                  question={chapterQuestions.chapter2[12]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                {/* Questão intercalada no conteúdo */}
                <QuestionRenderer
                  question={chapterQuestions.chapter2[13]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                {/* Questão intercalada no conteúdo */}
                <QuestionRenderer
                  question={chapterQuestions.chapter2[14]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                {/* Botão de download das questões */}
                <div className="my-6">
                  <DownloadQuestionsButton
                    questions={[chapterQuestions.chapter2[10], chapterQuestions.chapter2[11], chapterQuestions.chapter2[12], chapterQuestions.chapter2[13], chapterQuestions.chapter2[14]]}
                    userAnswers={userAnswers}
                    title="Questões da Página 28"
                    fileName="questoes-pagina-28.pdf"
                  />
                </div>

                <Pagination currentPage={29} />
                {/* Conteúdo do botão do professor */}
                <div className="my-6">
                  <TeacherButton
                    content={
                      <>
                        <p className="mb-3">
                          Respostas:
                        </p>
                        {(() => {
                          const question = chapterQuestions.chapter2.find(q => q.id === 'ch2_q16');
                          if (question && question.type === 'true-false' && question.statements) {
                            return question.statements.map((stmt) => {
                              // Se tiver correção, mostra V/F primeiro e depois a correção. Se não, mostra apenas V ou F
                              const correctAnswerText = stmt.correctAnswer ? 'Verdadeiro (V)' : 'Falso (F)';
                              const answerText = stmt.correction
                                ? `${correctAnswerText}. ${stmt.correction}`
                                : correctAnswerText;

                              return (
                                <p key={stmt.letter} className="mb-3">
                                  {question.number !== undefined && (
                                    <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
                                  )}
                                  <span style={{ color: '#00776E', fontWeight: 'bold' }}>{stmt.letter}) </span>
                                  <span dangerouslySetInnerHTML={{ __html: answerText }} />
                                </p>
                              );
                            });
                          }
                          return null;
                        })()}
                        {(() => {
                          const question = chapterQuestions.chapter2.find(q => q.id === 'ch2_q17');
                          if (question && question.type === 'text-input') {
                            // Se tiver subquestões, renderiza cada uma
                            if (question.subQuestions && question.subQuestions.length > 0) {
                              return question.subQuestions.map((subQ) => (
                                <p key={subQ.letter} className="mb-3">
                                  {question.number !== undefined && (
                                    <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
                                  )}
                                  <span style={{ color: '#00776E', fontWeight: 'bold' }}>{subQ.letter}) </span>
                                  <span dangerouslySetInnerHTML={{ __html: subQ.correctAnswer || '' }} />
                                </p>
                              ));
                            }
                            // Se não tiver subquestões, renderiza a resposta direta
                            if (question.correctAnswer) {
                              return (
                                <p className="mb-3">
                                  {question.number !== undefined && (
                                    <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
                                  )}
                                  <span dangerouslySetInnerHTML={{ __html: question.correctAnswer }} />
                                </p>
                              );
                            }
                          }
                          return null;
                        })()}
                        {(() => {
                          const question = chapterQuestions.chapter2.find(q => q.id === 'ch2_q18');
                          if (question && question.type === 'text-input') {
                            // Se tiver subquestões, renderiza cada uma
                            if (question.subQuestions && question.subQuestions.length > 0) {
                              return question.subQuestions.map((subQ) => (
                                <p key={subQ.letter} className="mb-3">
                                  {question.number !== undefined && (
                                    <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
                                  )}
                                  <span style={{ color: '#00776E', fontWeight: 'bold' }}>{subQ.letter}) </span>
                                  <span dangerouslySetInnerHTML={{ __html: subQ.correctAnswer || '' }} />
                                </p>
                              ));
                            }
                            // Se não tiver subquestões, renderiza a resposta direta
                            if (question.correctAnswer) {
                              return (
                                <p className="mb-3">
                                  {question.number !== undefined && (
                                    <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
                                  )}
                                  <span dangerouslySetInnerHTML={{ __html: question.correctAnswer }} />
                                </p>
                              );
                            }
                          }
                          return null;
                        })()}

                      </>
                    }

                  />
                </div>
                {/* Questão intercalada no conteúdo */}
                <QuestionRenderer
                  question={chapterQuestions.chapter2[15]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                {/* Questão intercalada no conteúdo */}
                <QuestionRenderer
                  question={chapterQuestions.chapter2[16]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                {/* Questão intercalada no conteúdo */}
                <QuestionRenderer
                  question={chapterQuestions.chapter2[17]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                {/* Botão de download das questões */}
                <div className="my-6">
                  <DownloadQuestionsButton
                    questions={[chapterQuestions.chapter2[15], chapterQuestions.chapter2[16], chapterQuestions.chapter2[17]]}
                    userAnswers={userAnswers}
                    title="Questões da Página 29"
                    fileName="questoes-pagina-29.pdf"
                  />
                </div>

                <Pagination currentPage={30} />
                <ProducaoFinal />
                <p className="mb-4 indent-6">
                  Chegou o momento de criar sua própria fábula. Desenvolva uma narrativa original, curta e intencional. Os personagens devem ser animais que representem comportamentos humanos, e o enredo deve conduzir o leitor a refletir sobre um ensinamento, apresentado de maneira direta ou indireta.
                </p>
                <p className="mb-4 indent-6">
                  <strong>Preparação</strong>
                </p>
                <p className="mb-4 indent-6">
                  Siga os passos a seguir para organizar o seu texto.
                </p>
                <ol className="list-decimal marker:text-[#BF3154] ml-6 mb-4">
                  <li><strong>Escolha a moral da sua fábula</strong>
                  </li>
                  <p className="mb-4 indent-6">
                    A moral é a mensagem que a sua história vai transmitir. Por isso, ela precisa ser escolhida logo no início do planejamento. Você pode criar a sua própria moral ou escolher uma das
                    sugestões listadas a seguir.
                  </p>
                  <ul className="list-disc marker:text-[#BF3154] ml-6 mb-4">
                    <li>"Nem todo elogio é sincero."</li>
                    <li>"A pressa é inimiga da perfeição."</li>
                    <li>"Gentileza gera gentileza."</li>
                    <li>"Quem pouco ouve, muito erra."</li>
                    <li>"Só se colhe o que se planta."</li>
                    <li>"Às vezes, o menor gesto faz a maior diferença."</li>
                  </ul>
                  <li><strong>Defina os personagens simbólicos</strong></li>
                  <p className="mb-4 indent-6">
                    Toda fábula tem personagens que simbolizam ideias, atitudes e sentimentos humanos. Esses personagens geralmente são animais, mas também podem ser objetos ou outros seres com papel secundário na história. Portanto, reflita: Qual animal vai representar cada comportamento humano na sua fábula?
                  </p>
                  <li><strong>Planeje o enredo da sua fábula</strong></li>
                  <p className="mb-4 indent-6">
                    Use o quadro abaixo para organizar o que vai acontecer no início, no meio e no fim da sua fábula. Lembre-se de que a moral precisa estar conectada ao que acontece na história. Ela pode ser escrita de maneira direta no final do texto ou apenas sugerida pelas atitudes dos personagens.
                  </p>
                  {/* Questão intercalada no conteúdo */}
                  <QuestionRenderer
                    question={chapterQuestions.chapter2[18]}
                    userAnswers={userAnswers}
                    onAnswerChange={handleAnswerChange}
                    showResults={showTeacherView}
                  />

                </ol>
                {/* Botão de download das questões */}
                <div className="my-6">
                  <DownloadQuestionsButton
                    questions={[chapterQuestions.chapter2[18]]}
                    userAnswers={userAnswers}
                    title="Questões da Página 30"
                    fileName="questoes-pagina-30.pdf"
                  />
                </div>
                <Pagination currentPage={31} />
                <p className="mb-4 indent-6">É hora de escrever sua fábula. Produza um texto original que apresente:</p>
                <ul className="list-disc marker:text-[#BF3154] ml-6 mb-4">
                  <li>enredo curto com começo, meio e fim;</li>
                  <li>personagens simbólicos que se comportam como seres humanos;</li>
                  <li>problema ou desafio que dá origem ao conflito da história;</li>
                  <li>lição apresentada no final do texto ou sugerida pelas atitudes dos personagens.</li>
                </ul>
                <p className="mb-4 indent-6">Para isso, use:</p>
                <ul className="list-disc marker:text-[#BF3154] ml-6 mb-4">
                  <li>verbos no passado para contar as ações concluídas;</li>
                  <li>marcadores temporais que organizem a narrativa, como “um dia”, “então” e “enquanto isso”;</li>
                  <li>linguagem expressiva e coerente com o gênero.</li>
                </ul>
                <p className="mb-4 indent-6">Represente seu texto com imagens. Você pode:</p>
                <ul className="list-disc marker:text-[#BF3154] ml-6 mb-4">
                  <li>fazer um desenho dos personagens principais em um momento importante da história;</li>
                  <li>criar uma cena que destaque o conflito ou a moral da história;</li>
                  <li>produzir uma colagem com recortes ou buscar imagens <em>on-line</em> que combinem com o que você escreveu.</li>
                </ul>
                <p className="mb-4 indent-6"><strong>Avaliação</strong></p>
                <p className="mb-4 indent-6">Antes de finalizar a sua fábula, confira o <em>checklist</em> a seguir para aprimorá-la.</p>
                {/* Tabela de Critérios de Avaliação */}
                <CriteriosAvaliacao
                  instanceId="producao_final_pag31"
                  criterios={[
                    {
                      id: 'criterio_titulo',
                      nome: 'Estrutura do gênero',
                      pergunta: 'O texto tem uma situação inicial, um conflito e um desfecho?',
                    },
                    {
                      id: 'criterio_linha_fina',
                      nome: 'Personagens simbólicos',
                      pergunta: 'Os personagens representam atitudes ou sentimentos humanos reconhecíveis?',
                    },
                    {
                      id: 'criterio_lide',
                      nome: 'Coerência narrativa',
                      pergunta: 'As ações fazem sentido? A consequência final está conectada com o que veio antes?',
                    },
                    {
                      id: 'criterio_corpo',
                      nome: 'Expressividade',
                      pergunta: 'A história provoca reflexão ou emoção? Os pensamentos e as ações dos personagens geram sentido simbólico?',
                    },
                    {
                      id: 'criterio_linguagem',
                      nome: 'Linguagem e clareza',
                      pergunta: 'O texto está bem escrito, com vocabulário e pontuação adequados?',
                    },
                    {
                      id: 'criterio_foco',
                      nome: 'Ilustração como parte da criação',
                      pergunta: 'A ilustração escolhida representa os personagens ou uma cena importante da fábula?',
                    },
                    {
                      id: 'autoria_criacao',
                      nome: 'Originalidade',
                      pergunta: 'A história tem ideias inéditas?',
                    },
                    {
                      id: 'moral',
                      nome: 'Moral',
                      pergunta: 'A moral da história está presente, ainda que de maneira implícita',
                    },
                  ]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                />
                <Pagination currentPage={32} />
                <ProducaoTextoFabula />
              </>
            }
          />
        </div>

        <Footer />
      </div>

      {currentPage >= 5 && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-16 right-4 z-40 p-3 hover:scale-110 transition-all"
          title="Voltar ao início do livro"
        >
          <img src="images/setaTopo.png" alt="Voltar ao início do livro" />
        </button>
      )}
    </div>
  );
}

export default Book;
