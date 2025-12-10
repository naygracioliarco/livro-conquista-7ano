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
import ProducaoArtigo from './ProducaoArtigo';
import ProducaoTextoCronica from './ProducaoTextoCronica';
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
import { UnlinkIcon } from 'lucide-react';

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
                  <img src="images/borboletas.png" className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[480px] lg:max-w-[520px] h-auto" />
                  <p className="text-[10px] text-slate-600 mt-2" style={{fontSize: '10px'}}>Ruslan Gilmanshin/Stock.adobe.com
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
                    <p className="text-[10px] text-slate-600 mt-2" style={{fontSize: '10px'}}>David Arruda
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
                    questions={[chapterQuestions.chapter1[3], chapterQuestions.chapter1[4], chapterQuestions.chapter1[5]]}
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
                    <p className="text-[10px] text-slate-600 mt-2" style={{fontSize: '10px'}}>Instituto Butantan
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
                    questions={[chapterQuestions.chapter1[6]]}
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
                    questions={[chapterQuestions.chapter1[7], chapterQuestions.chapter1[8], chapterQuestions.chapter1[9]]}
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
                <ProducaoArtigo />
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
                    EF69LP44, EF69LP49, EF67LP28. Acompanhe a leitura do texto de abertura e incentive os alunos a observar como cenas simples do dia a dia podem virar tema de uma crônica. Em seguida, promova uma conversa mediada com base nas perguntas propostas, valorizando relatos, lembranças e pontos de vista pessoais. Esse momento inicial ajuda a ampliar o olhar sobre o cotidiano e a antecipar o papel do cronista, que transforma observações sobre a vida e o mundo em texto.
                  </p>
                </>
              }

            />
          </div>
          {/* Conteúdo do Capítulo 2 */}
          <Chapter
            id="chapter2"
            number={2}
            title="Crônicas"
            content={
              <>
                <p className="mb-4 indent-6">
                  Era só uma ida comum à padaria, mas algo na maneira como o padeiro empacotava os pães chamou a atenção. Rápido, preciso, como se seguisse uma coreografia. No fundo, o rádio falava de política. No caixa, uma senhora puxava conversa. Do lado de fora, alguém ensaiava passos de dança sob a sombra de uma árvore.
                </p>
                <p className="mb-4 indent-6">
                  Cenas como essas acontecem todos os dias e, muitas vezes, passam despercebidas. Mas, para quem escreve crônicas, são justamente essas situações que viram tema de textos. Às vezes, basta um detalhe: uma lancheira da infância, uma frase ouvida por acaso ou um cachorro dormindo no sofá. Não é preciso apresentar grandes acontecimentos.
                </p>
                <p className="mb-4 indent-6">
                  A crônica é um jeito de transformar o cotidiano em texto. O cronista observa o mundo, faz conexões entre fatos e ideias e compartilha o que percebe para fazer o leitor rir, lembrar-se de alguma coisa ou parar para refletir.
                </p>
                {/* Conteúdo de lista */}
                <ul className="list-disc marker:text-[#BF3154] ml-6">
                  <li>Qual foi a coisa mais engraçada, interessante ou curiosa que aconteceu com você nesta semana?</li>
                  <li>Qual lembrança da sua infância faz você sorrir só de pensar nela?</li>
                  <li>Quais são os pequenos detalhes do seu dia a dia em que você costuma prestar atenção?</li>
                </ul>
                {/* Imagem */}
                <div className="flex flex-col items-center my-6">
                  <img src="images/pag17_img1.png" className='max-w-[100%]' />
                  <p className="text-[10px] text-slate-600 mt-2" style={{fontSize: '10px'}}>David Arruda; WinWin/stock.adobe.com
                  </p>
                </div>
                <Pagination currentPage={18} />
                <div className="my-6">
                  <TeacherButton
                    content={
                      <>
                        <p className="mb-3">
                          EF69LP44, EF69LP49, EF67LP28. Durante a leitura, faça pausas estratégicas para levantar hipóteses sobre o gênero, retomando elementos prévios da abertura do capítulo. Incentive a identificação das principais ideias: origem da crônica, tipos possíveis, uso da primeira pessoa, relação com o tempo presente e liberdade criativa. Finalize esse momento com uma conversa orientada sobre o papel do cronista, a diferença entre contar e interpretar fatos e a importância do ponto de vista na escolha do que narrar e de como narrar. Esse percurso prepara a turma para reconhecer marcações estilísticas e estruturais nas crônicas que serão analisadas a seguir.


                        </p>
                      </>
                    }

                  />
                </div>
                <h3>O que é crônica?</h3>
                <p className="mb-4 indent-6">
                  A crônica é um texto curto que parte de fatos do cotidiano para compartilhar observações, lembranças e comentários sobre a vida. O cronista pode se inspirar em uma cena vista na rua, uma memória de infância, uma conversa, um fato noticiado ou até no comportamento de um animal de estimação.
                </p>
                <p className="mb-4 indent-6">
                  O objetivo não é contar o que aconteceu como em uma notícia. O cronista escolhe um detalhe do cotidiano e organiza o texto com base em seu ponto de vista, destacando o que considera mais interessante ou digno de reflexão. Por isso, é comum que a crônica seja escrita em primeira pessoa, com linguagem simples e próxima da fala do dia a dia, o que aproxima o leitor da experiência contada.
                </p>
                <p className="mb-4 indent-6">
                  Apesar da estrutura flexível, muitas crônicas seguem um caminho parecido:
                </p>

                <ul className="list-disc marker:text-[#BF3154] ml-6">
                  <li>começam com um detalhe comum, como um objeto, uma cena ou um diálogo;</li>
                  <li>desenvolvem uma ideia, uma lembrança ou uma crítica;</li>
                  <li>terminam com uma reflexão, uma surpresa ou um comentário leve, que pode fazer o leitor rir, pensar ou lembrar algo vivido.</li>
                </ul>
                <p className="mb-4 indent-6">
                  A palavra <strong>crônica</strong> vem do grego e significa <strong>tempo</strong>. E foi justamente esse sentido que deu origem a esse gênero: a crônica surgiu nos jornais, como um tipo de texto que registrava acontecimentos do dia a dia, com uma linguagem mais informal e pessoal do que a das notícias.
                </p>
                <p className="mb-4 indent-6">
                  Com o tempo, passou a circular também em revistas, livros, blogs, redes sociais e outros meios, unindo elementos da realidade com imaginação e estilo. Atualmente, muitas crônicas transitam entre o jornalismo e a literatura, e são lidas tanto para informar quanto para entreter ou provocar reflexões.
                </p>
                <p className="mb-4 indent-6">
                  As crônicas refletem o tempo em que foram escritas. Elas costumam tratar de temas atuais e mostram como o autor percebe o mundo, os comportamentos das pessoas e os acontecimentos do presente. Embora possam combinar diferentes formas de abordagem, é possível identificar alguns tipos mais comuns:
                </p>
                <ul className="list-disc marker:text-[#BF3154] ml-6">
                  <li><strong>Crônica jornalística</strong>:  comenta fatos da atualidade, sem compromisso com a neutralidade. Pode ter tom crítico, reflexivo ou afetivo;  </li>
                  <li><strong>Crônica lírica ou literária</strong>: foca sentimentos, memórias e observações sensíveis, com linguagem mais subjetiva e poética;  </li>
                  <li><strong>Crônica humorística</strong>: apresenta situações engraçadas, absurdas ou inesperadas, provocando riso ou surpresa; </li>
                  <li><strong>Crônica-ensaio</strong>: parte de um fato ou uma situação para desenvolver uma ideia mais profunda ou filosófica. </li>
                </ul>
                <p className="mb-4 indent-6">
                  O cronista é alguém que observa com atenção os pequenos acontecimentos e interpreta o mundo ao seu redor. Essa interpretação não é neutra, pois ele escolhe o que contar, como contar e qual tom deseja dar ao texto — mais leve, crítico, nostálgico, engraçado ou reflexivo.
                </p>
                <p className="mb-4 indent-6">
                  Além disso, muitas crônicas estabelecem um tom de conversa com o leitor. É comum encontrar expressões como “você já reparou?” ou “talvez aconteça com você também”, criando uma proximidade intencional com quem lê.
                </p>

                <Pagination currentPage={19} />
                <div className="my-6">
                  <TeacherButton
                    content={
                      <>
                        <p className="mb-3">
                          EF69LP44, EF69LP46, EF69LP47, EF69LP49, EF69LP53, EF69LP54, EF67LP28, EF67LP30, EF67LP37, EF67LP38. Oriente uma leitura expressiva da crônica, destacando o humor e o tom reflexivo do texto. Em seguida, promova uma conversa coletiva sobre as memórias evocadas, incentivando os alunos a relacionar o conteúdo a suas próprias experiências com a linguagem na infância. Durante as atividades, valorize a escuta ativa e estimule a interpretação subjetiva, destacando recursos como a personificação, a linguagem informal e o olhar poético do cronista sobre o cotidiano. Retome os conceitos centrais do gênero e auxilie a turma a identificá-los no texto: subjetividade, brevidade, tom pessoal e conexão com a realidade. Favoreça também a análise das escolhas estilísticas do autor, levando os alunos a perceber como a forma do texto contribui para sua intenção. Essa análise fortalece a leitura crítica e prepara os alunos para reconhecer sua própria voz autoral na escrita de textos criativos.
                        </p>
                      </>
                    }
                  />
                </div>
                <TrilhaTexto />
                <p className="mb-4 indent-6">
                  Agora que você já conhece as características da crônica, é hora de ler um exemplo e perceber como o autor transforma uma experiência pessoal em texto.
                </p>
                <p className="mb-4 indent-6">
                  <strong>Texto I</strong>
                </p>
                <CaixaTexto title=''>
                  <p className="mb-4 indent-6">
                    <strong>ABC</strong>
                  </p>
                  <p className="mb-4 indent-6">
                    Quando a gente aprende a ler, as letras, nos livros, são grandes. Nas cartilhas – pelo menos nas cartilhas do meu tempo – as letras eram enormes. Lá estava o A, como uma grande tenda. O B, com seu grande busto e sua barriga ainda maior. O C, sempre pronto a morder a letra seguinte com a sua grande boca. O D, com seu ar próspero de grão-senhor. Etc. Até o Z, que sempre me parecia estar olhando para trás. Talvez porque não se convencesse que era a última letra do alfabeto e quisesse certificar-se de que atrás não vinha mais nenhuma.
                  </p>
                  <p className="mb-4 indent-6">
                    As letras eram grandes, claro, para que decorássemos a sua forma. Mas não precisavam ser tão grandes. Que eu me lembre, minha visão na época era perfeita. Nunca mais foi tão boa. E no entanto os livros infantis eram impressos com letras graúdas e entrelinhas generosas. E as palavras eram curtas. Para não cansar a vista.
                  </p>
                  <p className="mb-4 indent-6">
                    À medida que a gente ia crescendo, as letras iam diminuindo. E as palavras, aumentando. Quando não se tem mais uma visão de criança é que se começa, por exemplo, a ler jornal, com seus tipos miúdos e linhas apertadas que requerem uma visão de criança. Na época em que começamos a prestar atenção em coisas como notas de pé de página, bulas de remédio e subcláusulas de contrato, já não temos mais metade da visão perfeita que tínhamos na infância, e esbanjávamos nas bolas da Lulu e no corre-corre do Faísca.
                  </p>
                  <p className="mb-4 indent-6">
                    Chegamos à idade de ler grossos volumes em corpo 6 quando só temos olhos para as letras gigantescas, coloridas e cercadas de muito branco dos livros infantis. Quanto mais cansada a vista, mais exigem dela. Alguns recorrem à lente de aumento para <span className="bg-[#fff225] px-1">seccionar</span> as grandes palavras em manejáveis monossílabos infantis. E para restituir às letras a sua individualidade soberana, como tinham na infância.
                  </p>
                  <p className="mb-4 indent-6">
                    O E, que sempre parecia querer distância das outras.
                  </p>
                  <p className="mb-4 indent-6">
                    O R! Todas as letras tinham pé, mas o R era o único que chutava. O V, que aparecia em várias formas: refletido na água (o X), de muletas (o M), com o irmão siamês (o W).
                  </p>
                  <p className="mb-4 indent-6">
                    O Q, que era um O com a língua de fora.
                  </p>
                  <p className="mb-4 indent-6">
                    De tanto ler palavras, nunca mais reparamos nas letras. E de tanto ler frases, nunca mais notamos as palavras, com todo o seu mistério. Por exemplo: pode haver palavra mais estranha do que “esdruxulo”? É uma palavra, sei lá. Esdrúxula. Ainda bem que nunca aparecia nas leituras da infância, senão teria nos desanimado. Eu me recusaria a aprender uma língua, se soubesse que ela continha a palavra “esdrúxulo”. Teria fechado a cartilha e ido jogar bola, para sempre. As cartilhas, com sua alegre simplicidade, serviam para dissimular os terrores que a língua nos reservava. Como <span className="bg-[#fff225] px-1">“esdrúxulo”</span>. Para não falar em <span className="bg-[#fff225] px-1">“autóctone”</span>. Ou, meu Deus, em <span className="bg-[#fff225] px-1">“seborreia”</span>!
                  </p>
                  {/* Glossário */}
                  <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-[13px] mb-4 indent-6"><strong>seccionar </strong>: cortar, dividir em partes.
                    </p>
                    <p className="text-[13px] mb-4 indent-6"><strong>esdrúxulo </strong>: estranho, extravagante, fora do comum ou absurdo.
                    </p>
                    <p className="text-[13px] mb-4 indent-6"><strong>autóctone </strong>: originário do lugar em que se encontra; nativo.
                    </p>
                    <p className="text-[13px] mb-4 indent-6"><strong>seborreia </strong>: excesso de oleosidade na pele, com descamação.
                    </p>

                  </div>
                  <ContinuaProximaPagina />
                </CaixaTexto>

                <Pagination currentPage={20} />
                {/* Conteúdo do botão do professor - Tabela comparativa */}
                <div className="my-6">
                  <TeacherButton
                    content={
                      <>
                        <TeacherAnswers
                          questions={[
                            chapterQuestions.chapter2.find(q => q.id === 'ch2_q1')!,
                            chapterQuestions.chapter2.find(q => q.id === 'ch2_q2')!,
                          ]}
                        />
                      </>
                    }
                  />
                </div>
                <CaixaTexto title=''>
                  <p className="mb-4 indent-6">
                    Na verdade, acho que as crianças deviam aprender a ler nos <span className="bg-[#fff225] px-1">livros do Hegel</span> e em longos tratados de <span className="bg-[#fff225] px-1">metafísica</span>. Só elas têm a visão adequada à densidade do texto, o gosto pela abstração e tempo disponível para lidar com o infinito. E na velhice, com a sabedoria acumulada numa vida de leituras, com as letras ficando progressivamente maiores à medida que nossos olhos se cansavam, estaríamos então prontos para enfrentar o conceito básico de que vovô vê a uva, e viva o vovô.
                  </p>
                  <p className="mb-4 indent-6">
                    Vovô vê a uva! Toda a nossa inquietação, nossa perplexidade e nossa busca terminariam na resolução deste enigma primordial. Vovô. A uva. Eva. A visão.
                  </p>
                  <p className="mb-4 indent-6">
                    Nosso último livro seria a cartilha. E a nossa última aventura intelectual, a contemplação enternecida da letra A. Ah, o A, com suas grandes pernas abertas.
                  </p>
                  {/* Glossário */}
                  <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-[13px] mb-4 indent-6"><strong>livros do Hegel </strong>: obras do filósofo Georg Hegel (1770-1831) sobre razão, espírito, história e contrastes de ideias.
                    </p>
                    <p className="text-[13px] mb-4 indent-6"><strong>metafísica </strong>: estudo do que existe além do mundo físico.
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
                  VERISSIMO, Luis Fernando. <em>Comédias para se ler na escola.</em> 2. ed. Rio de Janeiro: Objetiva, 2001.
                </p>
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


                {/* Botão de download das questões */}
                <div className="my-6">
                  <DownloadQuestionsButton
                    questions={[chapterQuestions.chapter2[0], chapterQuestions.chapter2[1], chapterQuestions.chapter2[2]]}
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
                        <TeacherAnswers
                          questions={[
                            chapterQuestions.chapter2.find(q => q.id === 'ch2_q4')!,
                            chapterQuestions.chapter2.find(q => q.id === 'ch2_q5')!,
                            chapterQuestions.chapter2.find(q => q.id === 'ch2_q6')!,
                            chapterQuestions.chapter2.find(q => q.id === 'ch2_q7')!,
                            chapterQuestions.chapter2.find(q => q.id === 'ch2_q8')!,
                          ]}
                        />
                      </>
                    }
                  />
                </div>
                <QuestionRenderer
                  question={chapterQuestions.chapter2[3]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
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
                <QuestionRenderer
                  question={chapterQuestions.chapter2[7]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                {/* Botão de download das questões */}
                <div className="my-6">
                  <DownloadQuestionsButton
                    questions={[chapterQuestions.chapter2[3], chapterQuestions.chapter2[4], chapterQuestions.chapter2[5], chapterQuestions.chapter2[6], chapterQuestions.chapter2[7]]}
                    userAnswers={userAnswers}
                    title="Questões da Página 21"
                    fileName="questoes-pagina-21.pdf"
                  />
                </div>

                <Pagination currentPage={22} />
                {/* Conteúdo do botão do professor */}
                <div className="my-6">
                  <TeacherButton
                    content={
                      <>
                        <p className="mb-3">
                          EF69LP44, EF69LP46, EF69LP47, EF69LP49, EF69LP53, EF69LP54, EF67LP28, EF67LP30, EF67LP37, EF67LP38. Oriente a leitura expressiva do Texto II destacando o tom afetivo e narrativo. Incentive os alunos a identificar, ao longo da leitura, os objetos, lugares e sentimentos que constroem a memória da narradora. Durante as atividades, estimule análises que vão além da compreensão literal, como a percepção do ponto de vista da infância, o uso de linguagem informal e a presença de elementos simbólicos e emocionais ligados à vida escolar, à família e à identidade. Promova momentos de escuta ativa e compartilhamento de experiências pessoais, criando pontes entre o texto e as lembranças dos estudantes. Em seguida, conduza a comparação com o Texto I, favorecendo a percepção de diferentes modos de narrar lembranças e o reconhecimento da flexibilidade do gênero. Essa etapa amplia o repertório de leitura, aprofunda o olhar dos alunos sobre as crônicas e prepara o grupo para a produção autoral por meio da valorização das memórias individuais.
                        </p>
                      </>
                    }
                  />
                </div>
                <TrilhaTexto />
                <p className="mb-4 indent-6">
                  Agora, leia outra crônica que também resgata memórias da infância, desta vez sobre o primeiro dia de aula.
                </p>
                <p className="mb-4 indent-6">
                  <strong>Texto II</strong>
                </p>
                <CaixaTexto title=''>
                  <p className="mb-4 indent-6">
                    <strong>A lancheira roxa e a alegria do primeiro dia de aula</strong>
                  </p>
                  <p className="mb-4 indent-6">
                    Eu dormi abraçada com a lancheira, como em outras ocasiões de grandes presentes recebidos com muita alegria.
                  </p>
                  <p className="mb-4 indent-6">
                    Os tempos em que minha família se mudou para o apartamento na Cohab 5, em Carapicuíba, coincidiram com o meu primeiro ano na escola, a primeira série.
                  </p>
                  <p className="mb-4 indent-6">
                    O apartamento era bem pequeno e na cama-beliche dormia meu irmão em cima e, embaixo, dividíamos minha sobrinha e eu, como orientava minha mãe na hora de deitar, “uma para cima outra para baixo”. A irmã, que era bem mais velha, dividia o outro quarto com o marido, e minha mãe, que a essa altura já era viúva, ficava na cama de solteiro ao lado do nosso beliche.
                  </p>
                  <p className="mb-4 indent-6">
                    Uma das lembranças do quarto da irmã foi o dia em que entrei lá chorando, pedindo pra Lêla deixar eu usar a tábua e o ferro de passar roupas para tentar desamassar a folha de papel almaço com a minha lição lindinha que já estava pronta e caprichada, mas que sem querer amassou, não lembro como, e aquilo tudo me deixou muito nervosa.
                  </p>
                  <p className="mb-4 indent-6">
                    Lembro tanto das camas e quartos porque a cena mais viva que tenho da lancheira roxa em minhas mãos foi sentada na cama, felicíssima, na noite anterior do primeiro dia de aula. O primeiro dia em que eu iria para a escola de verdade, pois minha mãe dizia que o prézinho não contava, era diferente, que a escola era grande, bem maior do que o sobradinho do pré-I ou a escolinha com casinha de boneca do pré-II.
                  </p>
                  <p className="mb-4 indent-6">
                    A lancheira eu tinha ganhado da outra irmã, que não morava com a gente e trabalhava no banco. Desde a lancheira, vez em quando ela ajudava minha mãe a comprar meu material escolar. Igual quando comprou a primeira caneta que eu pude usar na escola, já lá pela quarta série, uma caneta de tinta preta e por fora era estampada com flores vermelhas… era daquelas canetas de apertar um botão em cima para sair a ponta em baixo, não tinha tampa. Não me esqueço jamais daquela caneta. Foi essa minha irmã quem escolheu para mim
                  </p>
                  <p className="mb-4 indent-6">
                    A lancheira, por sua vez, era de formato quase quadrado, na cor sólida roxa, de plástico, com uma alça comprida amarela, e não me recordo do desenho que a estampava. Dentro havia um compartimento com uma garrafa, larga, térmica, com tampa de rosquear que servia de caneca e um bico que abria e fechava. Era tão linda aquela garrafa! Levava suco de uva, às vezes chá-mate bem adoçado. No espaço que sobrava, minha mãe encaixava o saco dobrado com o pão de milho dentro, recheado de manteiga, que um senhor passava vendendo, de bicicleta. Ele gritava, “olha o sonho!”, e minha mãe comprava às vezes sonho, mas também o pão de milho, que era o que eu levava pra escola.
                  </p>
                  <p className="mb-4 indent-6">
                    O uniforme azul-marinho, a camiseta branca passada, com o bordado circular E.E.P.S.G. Prof. Rebuá. Nome que me lembrava a palavra buááá nas revistinhas em quadrinhos, quando alguém chorava. Eu mesma, porém, nunca chorei para entrar na escola. Choraria se um dia não pudesse mais entrar lá, como minha mãe contou que aconteceu com ela, e da prova que tinha que fazer para poder continuar estudando.
                  </p>

                  <ContinuaProximaPagina />
                </CaixaTexto>


                <Pagination currentPage={23} />
                {/* Conteúdo do botão do professor */}
                <div className="my-6">
                  <TeacherButton
                    content={
                      <>
                        <TeacherAnswers
                          questions={[
                            chapterQuestions.chapter2.find(q => q.id === 'ch2_q9')!,
                            chapterQuestions.chapter2.find(q => q.id === 'ch2_q10')!,
                          ]}
                        />
                      </>
                    }
                  />
                </div>
                <CaixaTexto title=''>
                  <p className="mb-4 indent-6">
                    A Lêla cortou meus cabelos no domingo antes do início das aulas, e eu detestei, pois achei muito curto, parecendo uma tigela. Mas dizia que era melhor assim, para eu não pegar piolhos na escola.
                  </p>
                  <p className="mb-4 indent-6">
                    A ansiedade por estrear a lancheira, a alegria por estar finalmente indo para a escola, me fizeram deixar tudo em ordem para a manhã seguinte, e decidi que o melhor lugar para guardar a lancheira roxa era ali mesmo perto de mim, aos pés da cama, em cima do colchão.
                  </p>
                  <p className="mb-4 indent-6">
                    Eu dormi abraçada com a lancheira, como acabei escutando os adultos dizerem, não só nessa, mas também em outras ocasiões de grandes presentes recebidos com muita alegria.
                  </p>
                  <p className="mb-4 indent-6">
                    Do dia seguinte mesmo, o primeiro dia de aula… nada me lembro, além da imagem viva daquela linda professora negra de cabelos bem curtos e batom vermelho; se chamava Berenice e era um doce de pessoa. Cantava musiquinhas que falavam dos formatos das letras do alfabeto, como a da letra M: “O M tem três pernas, quantas pernas ele tem?”. Sim, me lembro, foi quando escrevemos juntos, na lousa e no caderno, a palavra mamãe.
                  </p>
                  <p className="mb-4 indent-6">
                    E no trabalhinho da data comemorativa de maio, pintamos no sulfite janelas em formato das bandas de um coração, e colamos sobre o papel laminado vermelho que aparecia reluzente quando se abriam as janelinhas, que colori de amarelo, e escrevi em cima aquela que é uma das primeiras palavras que aprendemos a falar, com a letrinha de três pernas, escrevendo com letra de mão.
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
                  OLIVEIRA, Elaine. <em>A lancheira roxa e a alegria do primeiro dia de aula.</em> Disponível em: <a href="https://revistaursula.com.br/educacao/a-lancheira-roxa-e-a-alegria-do-primeiro-dia-de-aula/" target="_blank" rel="noopener noreferrer">https://revistaursula.com.br/educacao/a-lancheira-roxa-e-a-alegria-do-primeiro-dia-de-aula/</a>. Acesso em: 26 set. 2025.
                </p>
                {/* Questão intercalada no conteúdo */}
                <QuestionRenderer
                  question={chapterQuestions.chapter2[8]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                <QuestionRenderer
                  question={chapterQuestions.chapter2[9]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                {/* Botão de download das questões */}
                <div className="my-6">
                  <DownloadQuestionsButton
                    questions={[chapterQuestions.chapter2[8], chapterQuestions.chapter2[9]]}
                    userAnswers={userAnswers}
                    title="Questões da Página 23"
                    fileName="questoes-pagina-23.pdf"
                  />
                </div>


                <Pagination currentPage={24} />
                {/* Conteúdo do botão do professor */}
                <div className="my-6">
                  <TeacherButton
                    content={
                      <>
                        <TeacherAnswers
                          questions={[
                            chapterQuestions.chapter2.find(q => q.id === 'ch2_q11')!,
                            chapterQuestions.chapter2.find(q => q.id === 'ch2_q12')!,
                            chapterQuestions.chapter2.find(q => q.id === 'ch2_q13')!,
                            chapterQuestions.chapter2.find(q => q.id === 'ch2_q14')!,
                          ]}
                        />
                      </>
                    }
                  />
                </div>

                <QuestionRenderer
                  question={chapterQuestions.chapter2[10]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                <QuestionRenderer
                  question={chapterQuestions.chapter2[11]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                <QuestionRenderer
                  question={chapterQuestions.chapter2[12]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                <QuestionRenderer
                  question={chapterQuestions.chapter2[13]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                {/* Botão de download das questões */}
                <div className="my-6">
                  <DownloadQuestionsButton
                    questions={[chapterQuestions.chapter2[10], chapterQuestions.chapter2[11], chapterQuestions.chapter2[12], chapterQuestions.chapter2[13]]}
                    userAnswers={userAnswers}
                    title="Questões da Página 24"
                    fileName="questoes-pagina-24.pdf"
                  />
                </div>
                <Pagination currentPage={25} />
                {/* Conteúdo do botão do professor */}
                <div className="my-6">
                  <TeacherButton
                    content={
                      <>
                        <p className="mb-3">
                          EF69LP07, EF69LP08, EF69LP51, EF67LP30, EF67LP32, EF67LP33, EF67LP36. Retome com a turma o objeto trabalhado na atividade anterior e explique que ele será o ponto de partida para uma crônica autoral. Apresente as quatro maneiras de abordagem e incentive os alunos a escolher a que mais combina com o estilo de cada um. Durante a produção, relembre as características do gênero e incentive um olhar pessoal e criativo. Finalize com o <em>checklist</em>, guiando a revisão com foco em estrutura, linguagem e intenção do texto.
                        </p>
                      </>
                    }
                  />
                </div>
                <MinhaVersao />
                <p className="mb-4 indent-6">
                  Na atividade anterior, você escolheu um objeto que marcou sua infância ou que ainda tem um significado especial para você. Com base nessa lembrança, escreva sua crônica.
                </p>

                <p className="mb-4 indent-6"><strong>Preparação</strong></p>
                <p className="mb-4 indent-6">Escolha uma das maneiras a seguir para escrever sua crônica.
                </p>
                <ul className="list-disc marker:text-[#BF3154] ml-6 mb-4">
                  <li><strong>Crônica de memória pessoal</strong> </li>
                  <p className="mb-4 indent-6">Relembre uma situação importante em que o objeto teve papel marcante. Destaque emoções, detalhes e sensações desse momento.</p>
                  <li><strong>Crônica do ponto de vista do objeto</strong> </li>
                  <p className="mb-4 indent-6">Imagine que o objeto pudesse contar a história. Escreva a crônica como se ele fosse o narrador, revelando o que viu, ouviu ou sentiu.</p>
                  <li><strong>Crônica que mistura realidade e ficção</strong> </li>
                  <p className="mb-4 indent-6">Use uma memória real como ponto de partida, mas adicione elementos inventados. </p>
                  <li><strong>Crônica em dois tempos</strong> </li>
                  <p className="mb-4 indent-6">Mostre como o sentido desse objeto mudou com o tempo. Compare a importância que ele tinha na infância com o que representa para você hoje.</p>
                </ul>

                <p className="mb-4 indent-6"><strong>Produção</strong></p>
                <p className="mb-4 indent-6">Durante a produção, lembre-se de que a crônica, em geral, é escrita em primeira pessoa, inspirada em situações do cotidiano ou em lembranças pessoais. Ela costuma usar uma linguagem simples, próxima da fala, e tem um formato curto, com um final que encerra ou amplia a reflexão. Além disso, pode trazer humor, emoção, surpresa ou um olhar poético sobre o tema abordado.
                </p>
                <p className="mb-4 indent-6"><strong>Avaliação</strong></p>
                <p className="mb-4 indent-6">Antes de finalizar sua crônica, confira o <em>checklist</em> para verificar o que pode ser melhorado.
                </p>
                {/* Tabela de Critérios de Avaliação */}
                <CriteriosAvaliacao
                  instanceId="minha_versao_cronica"
                  criterios={[
                    {
                      id: 'criterio_planejamento',
                      nome: 'Planejamento e proposta',
                      pergunta: 'Foi escolhido um objeto significativo que ajudou a lembrar de uma situação marcante?',
                    },
                    {
                      id: 'criterio_recorte',
                      nome: 'Recorte temático',
                      pergunta: 'O texto apresenta um recorte do cotidiano, com foco em uma situação ou memória específica?',
                    },
                    {
                      id: 'criterio_organizacao',
                      nome: 'Organização do texto',
                      pergunta: 'O texto tem começo, meio e fim, com progressão clara das ideias?',
                    },
                    {
                      id: 'criterio_expressividade',
                      nome: 'Expressividade e tom ',
                      pergunta: 'A narrativa provoca alguma emoção, lembrança ou reflexão no leitor?',
                    },
                    {
                      id: 'criterio_linguagem',
                      nome: 'Linguagem adequada',
                      pergunta: 'O texto apresenta uma sequência lógica de acontecimentos?',
                    },
                    {
                      id: 'autoria_ponto_vista',
                      nome: 'Ponto de vista e autoria',
                      pergunta: 'O texto revela um olhar pessoal sobre a situação?',
                    },
                    {
                      id: 'autoria_criatividade',
                      nome: 'Criatividade',
                      pergunta: 'Foram feitas escolhas criativas para contar a história?',
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
                          EF69LP44, EF69LP46, EF69LP47, EF69LP49, EF67LP27, EF67LP28, EF67LP38. Apresente a notícia sobre o 7 a 1 para contextualizar um evento de grande repercussão pública, principalmente para os alunos que não o vivenciaram. Apresente a crônica como um novo modelo de construção dentro do mesmo gênero, agora com base em um fato noticiado para construir uma leitura bem-humorada e crítica. Durante as atividades, conduza reflexões sobre o tom do texto, as escolhas de linguagem e a maneira criativa que o autor encontrou para reinterpretar um acontecimento real. Incentive a comparação entre os três textos do capítulo, destacando como a crônica pode assumir diferentes estilos, temas e intenções.
                        </p>
                      </>
                    }
                  />
                </div>
                <TrilhaTexto />
                <p className="mb-4 indent-6">
                  Até aqui, você leu duas crônicas relacionadas à memória e à emoção. Agora, vai ler um texto diferente: uma crônica bem-humorada inspirada em um fato, com marcas de ironia e exagero. Antes de ler a crônica, confira uma notícia mais recente que relembra o acontecimento que inspirou o autor a escrevê-la.
                </p>
                <CaixaTexto title='História Hoje: os dez anos do 7 a 1 da Alemanha sobre o Brasil'>
                  <p className="mb-4 indent-6">
                    <strong>Semifinal de 2014: Brasil sofre 4 gols em menos de seis minutos</strong>
                  </p>
                  <p className="mb-4 indent-6">
                    Sete a um. Uma goleada inesquecível da Alemanha contra o Brasil na Copa do Mundo, jogando em território brasileiro. A partida entre as duas seleções em 8 de julho de 2014, no Mineirão,
                    em Belo Horizonte, entrou para a história do futebol brasileiro.
                  </p>
                  <p className="mb-4 indent-6">
                    A Seleção Canarinho chegou invicta à semifinal, mas não entregou nada do que era esperado. A equipe brasileira entrou em campo sem Neymar, que havia sofrido uma lesão na coluna nas quartas-de-final. Logo no início do jogo, a Alemanha começou a mostrar que estava disposta a lutar pela vaga na final.
                  </p>
                  <p className="mb-4 indent-6">
                    No primeiro tempo, o Brasil sofreu quatro gols em menos de seis minutos: Müller, Klose e dois chutes certeiros de Tony Kroos. Parecia replay. Khedira ainda marcou mais um, antes do intervalo.
                  </p>
                  <p className="mb-4 indent-6">
                    No segundo tempo, mais dois gols de Schuerrle e o placar chegou a sete a zero. Oscar fez o gol de honra e a partida terminou em sete a um.
                  </p>
                  <p className="mb-4 indent-6">
                    O resultado foi a maior derrota da história do Brasil em mundiais. Até então, o pior placar em número de gols tinha sido contra a Hungria, quando perdeu por quatro a dois em 1954, na Suíça. E, em 1998, a maior diferença de gols quando a França, jogando em casa, marcou três a zero contra o Brasil na final, em Paris.
                  </p>
                  <p className="mb-4 indent-6">
                    Depois da derrota histórica para a Alemanha, o Brasil jogou contra a Holanda pelo terceiro lugar, em Brasília, e perdeu por três a zero.
                  </p>
                  <p className="mb-4 indent-6">
                    Já a Alemanha disputou a final contra a Argentina, no Estádio do Maracanã, no Rio de Janeiro, venceu por um a zero e levou a taça do mundial de 2014.
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
                  EVARISTO, Beatriz <em>História hoje:</em> os dez anos do 7 a 1 da Alemanha sobre o Brasil. Disponível em: <a href="https://agenciabrasil.ebc.com.br/radioagencia-nacional/esportes/audio/2024-07/historia-hoje-os-dez-anos-do-7-1-da-alemanha-sobre-o-brasil" target="_blank" rel="noopener noreferrer">https://agenciabrasil.ebc.com.br/radioagencia-nacional/esportes/audio/2024-07/historia-hoje-os-dez-anos-do-7-1-da-alemanha-sobre-o-brasil</a>. Acesso em: 1 out. 2025.
                </p>
                <p className="mb-4 indent-6">
                  Depois de conhecer o ocorrido, leia a crônica inspirada nesse fato marcante para a história do futebol brasileiro.
                </p>
                <p className="mb-4 indent-6">
                  <strong>Texto III</strong>
                </p>
                <CaixaTexto title='Os seis minutos'>
                  <p
                    className="mb-2 indent-6"
                    style={{
                      fontSize: '15px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: 'normal',
                    }}
                  >
                    10/07/2014
                  </p>
                  <p className="mb-4 indent-6">
                    A primeira coisa a fazer, já que o Thiago Silva não poderia jogar, era apresentar o David Luiz ao Dante. Os dois conversariam, talvez num jantarzinho, trocariam confidências e fotos das crianças, e combinariam como jogar contra os alemães. Aparentemente, isto não aconteceu. Quando David Luiz e Dante finalmente se conheceram, se apertaram as mãos (“muito prazer”, “muito prazer”, “precisamos nos encontrar!”) já estava cinco a zero para a Alemanha.
                  </p>
                  <ContinuaProximaPagina />
                </CaixaTexto>
                <Pagination currentPage={28} />
                {/* Conteúdo do botão do professor */}
                <div className="my-6">
                  <TeacherButton
                    content={
                      <>
                        <TeacherAnswers
                          questions={[
                            chapterQuestions.chapter2.find(q => q.id === 'ch2_q15')!,
                            chapterQuestions.chapter2.find(q => q.id === 'ch2_q16')!,
                          ]}
                        />
                      </>
                    }
                  />
                </div>
                <CaixaTexto title=''>
                  <p className="mb-4 indent-6">
                    Outra coisa: houve uma confusão nas convocações. O Felipão chamou o Fred do ano passado, um dos melhores jogadores da Copa das Confederações, e quem apareceu foi o Fred deste ano, claramente um impostor. Ninguém se lembrou de checar sua documentação. E o Felipão não poderia saber que tinha convocado o Fred errado.
                  </p>
                  <p className="mb-4 indent-6">
                    Outro azar: a partida ter terminado em 7 a 1. Até os 7 a 1 foi um desastre, um vexame, um escândalo – tudo que saiu nos jornais. Mas ainda estava dentro dos limites do concebível. Era cruel, era difícil de engolir, mas era um escore até com precedentes, inclusive na história das Copas. Mas se os alemães tivessem feito mais três gols, apenas mais três, entraríamos no terreno do fantástico, do inimaginável, da <span className="bg-[#fff225] px-1">galhofa</span> cósmica. A única reação possível a um 10 a 1 seria uma grande gargalhada, que nos salvaria do desespero terminal. Nada mais teria sentido no mundo, portanto nada mais nos afligiria, e todos estariam perdoados, inclusive o Felipão e a CBF, absolvidos pelo ridículo. Mas não tivemos nem a benção de perder de 10.
                  </p>
                  <p className="mb-4 indent-6">
                    Proponho o seguinte consolo: vamos descontar aqueles seis minutos em que os alemães fizeram quatro gols como uma invasão do sobrenatural. Uma espécie de <span className="bg-[#fff225] px-1">catatonia</span> coletiva, de origem desconhecida, que paralisou nosso time. Os quatro gols marcados durante os seis minutos de inconsciência só de um lado, portanto, não valeram. O escore real, livre de qualquer intervenção extrafutebol, foi 3 a 1. Um escore respeitável, com o qual todos poderemos viver.
                  </p>
                  <p className="mb-4 indent-6">
                    <strong>Final</strong>
                  </p>
                  <p className="mb-4 indent-6">
                    E Argentina e Alemanha farão a grande final, no domingo. Todos torcendo pela América contra a Europa, nossos irmãos continentais contra os nossos <span className="bg-[#fff225] px-1">algozes</span>, nossos co-colonizados contra os senhores do mundo etc. A esta altura, só nos resta a hipocrisia.
                  </p>
                  {/* Glossário */}
                  <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-[13px] mb-4 indent-6"><strong>galhofa</strong>: zombaria, escárnio,  deboche.
                    </p>
                    <p className="text-[13px] mb-4 indent-6"><strong>catatonia</strong>: alternância entre agitação intensa e passividade.
                    </p>
                    <p className="text-[13px] mb-4 indent-6"><strong>algozes</strong>: indivíduos cruéis, insensíveis ao sofrimento alheio.
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
                  VERISSIMO, Luis Fernando. <em>Os seis minutos.</em> Disponível em: <a href="https://oglobo.globo.com/cultura/noticia/2025/08/30/leia-10-cronicas-de-luis-fernando-verissimo-publicadas-no-globo.ghtml" target="_blank" rel="noopener noreferrer">https://oglobo.globo.com/cultura/noticia/2025/08/30/leia-10-cronicas-de-luis-fernando-verissimo-publicadas-no-globo.ghtml</a>. Acesso em: 1 out. 2025.
                </p>
                {/* Questão intercalada no conteúdo */}
                <QuestionRenderer
                  question={chapterQuestions.chapter2[14]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                {/* Questão intercalada no conteúdo */}
                <QuestionRenderer
                  question={chapterQuestions.chapter2[15]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />

                {/* Botão de download das questões */}
                <div className="my-6">
                  <DownloadQuestionsButton
                    questions={[chapterQuestions.chapter2[14], chapterQuestions.chapter2[15]]}
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
                        <TeacherAnswers
                          questions={[
                            chapterQuestions.chapter2.find(q => q.id === 'ch2_q17')!,
                            chapterQuestions.chapter2.find(q => q.id === 'ch2_q18')!,
                            chapterQuestions.chapter2.find(q => q.id === 'ch2_q19')!,
                            chapterQuestions.chapter2.find(q => q.id === 'ch2_q20')!,
                          ]}
                        />
                      </>
                    }
                  />
                </div>

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
                {/* Questão intercalada no conteúdo */}
                <QuestionRenderer
                  question={chapterQuestions.chapter2[18]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                {/* Questão intercalada no conteúdo */}
                <QuestionRenderer
                  question={chapterQuestions.chapter2[19]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />

                {/* Botão de download das questões */}
                <div className="my-6">
                  <DownloadQuestionsButton
                    questions={[chapterQuestions.chapter2[16], chapterQuestions.chapter2[17], chapterQuestions.chapter2[18], chapterQuestions.chapter2[19]]}
                    userAnswers={userAnswers}
                    title="Questões da Página 29"
                    fileName="questoes-pagina-29.pdf"
                  />
                </div>

                <Pagination currentPage={30} />
                {/* Conteúdo do botão do professor */}
                <div className="my-6">
                  <TeacherButton
                    content={
                      <>
                        <TeacherAnswers
                          questions={[
                            chapterQuestions.chapter2.find(q => q.id === 'ch2_q21')!,
                          ]}
                        />
                      </>
                    }
                  />
                </div>
                {/* Questão intercalada no conteúdo */}
                <QuestionRenderer
                  question={chapterQuestions.chapter2[20]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  showResults={showTeacherView}
                />
                {/* Botão de download das questões */}
                <div className="my-6">
                  <DownloadQuestionsButton
                    questions={[chapterQuestions.chapter2[20]]}
                    userAnswers={userAnswers}
                    title="Questões da Página 30"
                    fileName="questoes-pagina-30.pdf"
                  />
                </div>
                <Pagination currentPage={31} />
                {/* Conteúdo do botão do professor */}
                <div className="my-6">
                  <TeacherButton
                    content={
                      <>
                        <p className="mb-3">
                          EF69LP07, EF69LP08, EF69LP51, EF67LP30, EF67LP32, EF67LP33, EF67LP36. Oriente os alunos a retomar a notícia selecionada na atividade anterior como base para a construção de sua crônica. Reforce que a proposta envolve transformar fato real em uma narrativa breve, com ponto de vista pessoal, tom definido e linguagem coerente com o gênero. Estimule reflexões prévias com as perguntas da etapa de preparação, ajudando os alunos a organizar ideias, definir intencionalidade e adotar uma abordagem coerente com a escolha. Durante a escrita, relembre as características fundamentais da crônica e incentive a experimentação criativa com liberdade de estilo, sem perder de vista a coesão do texto. Finalize com a revisão orientada pelo <em>checklist</em>, enfatizando tomada de decisão autoral, clareza na estrutura e efeitos de sentido produzidos. Essa produção consolida o aprendizado do gênero ao mesmo tempo que valoriza o protagonismo e a expressão dos alunos em relação aos fatos do mundo.

                        </p>
                      </>
                    }
                  />
                </div>
                <ProducaoFinal />
                <p className="mb-4 indent-6">Você já leu e analisou crônicas sobre memórias, acontecimentos cotidianos e fatos de relevância nacional. Também escolheu uma notícia real que, na sua opinião, pode servir como ponto de partida para escrever uma crônica.
                </p>

                <p className="mb-4 indent-6">Agora é o momento de escrever uma crônica inspirada na notícia escolhida por você. Seu texto deve apresentar uma percepção pessoal sobre o fato, com liberdade criativa para narrar, refletir, criticar ou provocar o riso.
                </p>
                <p className="mb-4 indent-6">Antes de começar a escrever, reflita sobre as perguntas a seguir.
                </p>
                <ul className="list-disc marker:text-[#BF3154] ml-6 mb-4">
                  <li>Que tom deseja dar à sua crônica (humorístico, sensível, reflexivo, crítico etc.)?</li>
                </ul>
                
                {/* Pergunta com bullet vermelho e opções interativas */}
                <div className="mb-4">
                  <ul className="mb-4 question-subitems" style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                    <li style={{ color: '#BF3154' }}>
                      <span style={{ color: 'black' }}>Como pretende transformar esse fato em texto?</span>
                    </li>
                  </ul>
                  
                  <div className="space-y-2 ml-6">
                    {[
                      { id: 'opcao1', text: 'Contando uma história fictícia que envolva o fato.' },
                      { id: 'opcao2', text: 'Exagerando e brincando com a situação.' },
                      { id: 'opcao3', text: 'Fazendo um comentário pessoal sobre o tema.' },
                      { id: 'opcao4', text: 'Outra maneira:', hasInput: true },
                    ].map((opcao) => {
                      // IDs únicos para esta seção específica de crônica
                      const answerId = `cronica_7ano_transformacao_${opcao.id}`;
                      const isChecked = (userAnswers[answerId] as boolean) || false;
                      const inputId = `cronica_7ano_transformacao_${opcao.id}_input`;
                      const inputValue = (userAnswers[inputId] as string) || '';

                      return (
                        <label
                          key={opcao.id}
                          className="flex items-start gap-3 p-2 cursor-pointer hover:bg-gray-50 rounded"
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={(e) => handleAnswerChange(answerId, e.target.checked)}
                            className="mt-1 w-4 h-4"
                          />
                          <span className="flex-1" style={{ color: 'black' }}>
                            {opcao.text}
                            {opcao.hasInput && (
                              <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => handleAnswerChange(inputId, e.target.value)}
                                className="ml-2 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                style={{ minWidth: '200px' }}
                                placeholder="________"
                              />
                            )}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
                <p className="mb-4 indent-6"><strong>Produção</strong></p>
                <p className="mb-4 indent-6">Escreva sua crônica com base nos elementos da preparação. Lembre-se do que caracteriza esse gênero textual, conforme estudado no capítulo.</p>
                <p className="mb-4 indent-6"><strong>Avaliação</strong></p>
                <p className="mb-4 indent-6">Antes de finalizar sua crônica, confira o <em>checklist</em> para verificar o que pode ser melhorado.</p>
                {/* Tabela de Critérios de Avaliação */}
                <CriteriosAvaliacao
                  instanceId="producao_final_pag31_7ano"
                  criterios={[
                    {
                      id: 'criterio_estrutura_cronica',
                      nome: 'Estrutura da crônica',
                      pergunta: 'O texto tem início, desenvolvimento e final bem definidos?',
                    },
                    {
                      id: 'criterio_tema_escolhido',
                      nome: 'Tema escolhido',
                      pergunta: 'A crônica foi construída com base na manchete selecionada na atividade anterior?',
                    },
                    {
                      id: 'criterio_ponto_vista',
                      nome: 'Ponto de vista',
                      pergunta: 'O texto apresenta um olhar pessoal ou um modo criativo de comentar o fato?',
                    },
                    {
                      id: 'criterio_linguagem_adequada',
                      nome: 'Linguagem adequada',
                      pergunta: 'A linguagem é simples, mais informal e próxima da fala, conforme o gênero?',
                    },
                    {
                      id: 'criterio_tom_texto',
                      nome: 'Tom do texto',
                      pergunta: 'O tom adotado ao longo do texto (como humor, crítica, emoção etc.) é coerente?',
                    },
                    {
                      id: 'criterio_criatividade_autoria',
                      nome: 'Criatividade e autoria',
                      pergunta: 'As escolhas para contar a história, dar opinião ou provocar emoções no leitor são pessoais?',
                    },
                    {
                      id: 'criterio_conexao_leitor',
                      nome: 'Conexão com o leitor',
                      pergunta: 'O texto convida o leitor a pensar, sentir ou interpretar de forma diferente o que foi noticiado?',
                    },
                  ]}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                />
                <Pagination currentPage={32} />
                <ProducaoTextoCronica />
              </>
            }
          />
        </div>

        <Footer />
      </div>

      {currentPage > 4 && (
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
