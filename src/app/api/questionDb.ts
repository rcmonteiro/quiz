import AnswerModel from "@/model/answer";
import QuestionModel from "@/model/question";

const questions: QuestionModel[] = [
  new QuestionModel(306, 'Qual bicho transmite a Doença de Chagas?', [
    AnswerModel.incorrect('Abelha'),
    AnswerModel.incorrect('Barata'),
    AnswerModel.incorrect('Pulga'),
    AnswerModel.correct('Barbeiro'),
  ]),
  new QuestionModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?', [
      AnswerModel.incorrect('Caju'),
      AnswerModel.incorrect('Côco'),
      AnswerModel.incorrect('Chuchu'),
      AnswerModel.correct('Abóbora'),
  ]),
  new QuestionModel(203, 'Qual é o coletivo de cães?', [
      AnswerModel.incorrect('Manada'),
      AnswerModel.incorrect('Alcateia'),
      AnswerModel.incorrect('Rebanho'),
      AnswerModel.correct('Matilha'),
  ]),
  new QuestionModel(204, 'Qual é o triângulo que tem todos os lados diferentes?', [
      AnswerModel.incorrect('Equilátero'),
      AnswerModel.incorrect('Isóceles'),
      AnswerModel.incorrect('Trapézio'),
      AnswerModel.correct('Escaleno'),
  ]),
  new QuestionModel(205, 'Quem compôs o Hino da Independência?', [
      AnswerModel.incorrect('Castro Alves'),
      AnswerModel.incorrect('Manuel Bandeira'),
      AnswerModel.incorrect('Carlos Gomes'),
      AnswerModel.correct('Dom Pedro I'),
  ]),
  new QuestionModel(206, 'Qual é o antônimo de "malograr"?', [
      AnswerModel.incorrect('Perder'),
      AnswerModel.incorrect('Fracassar'),
      AnswerModel.incorrect('Desprezar'),
      AnswerModel.correct('Conseguir'),
  ]),
  new QuestionModel(207, 'Em que país nasceu Carmen Miranda?', [
      AnswerModel.incorrect('Argentina'),
      AnswerModel.incorrect('Espanha'),
      AnswerModel.incorrect('Brasil'),
      AnswerModel.correct('Portugal'),
  ]),
  new QuestionModel(208, 'Qual foi o último Presidente do período da ditadura militar no Brasil?', [
      AnswerModel.incorrect('Costa e Silva'),
      AnswerModel.incorrect('Emílio Médici'),
      AnswerModel.incorrect('Ernesto Geisel'),
      AnswerModel.correct('João Figueiredo'),
  ]),
  new QuestionModel(209, 'Seguindo a sequência do baralho, qual carta vem depois do dez?', [
      AnswerModel.incorrect('Ás'),
      AnswerModel.incorrect('Nove'),
      AnswerModel.incorrect('Rei'),
      AnswerModel.correct('Valete'),
  ]),
  new QuestionModel(210, 'O adjetivo "venoso" está relacionado a:', [
      AnswerModel.incorrect('Vela'),
      AnswerModel.incorrect('Vento'),
      AnswerModel.incorrect('Vênia'),
      AnswerModel.correct('Veia'),
  ]),
  new QuestionModel(211, 'Que nome se dá à purificação por meio da água?', [
      AnswerModel.incorrect('Abrupção'),
      AnswerModel.incorrect('Abolição'),
      AnswerModel.incorrect('Abnegação'),
      AnswerModel.correct('Ablução'),
  ]),
  new QuestionModel(212, 'Qual montanha se localiza entre a fronteira do Tibet com o Nepal?', [
      AnswerModel.incorrect('Monte Branco'),
      AnswerModel.incorrect('Monte Fuji'),
      AnswerModel.incorrect('Monte Carlo'),
      AnswerModel.correct('Monte Everest'),
  ]),
  new QuestionModel(213, 'Em que parte do corpo se encontra a epiglote?', [
      AnswerModel.incorrect('Estômago'),
      AnswerModel.incorrect('Pâncreas'),
      AnswerModel.incorrect('Rim'),
      AnswerModel.correct('Pescoço'),
  ]),
  new QuestionModel(214, 'A compensação por perda é chamada de...', [
      AnswerModel.incorrect('Déficit'),
      AnswerModel.incorrect('Indexação'),
      AnswerModel.incorrect('Indébito'),
      AnswerModel.correct('Indenização'),
  ]),
  new QuestionModel(215, 'Que personagem do folclore brasileiro tem uma perna só?', [
      AnswerModel.incorrect('Cuca'),
      AnswerModel.incorrect('Curupira'),
      AnswerModel.incorrect('Boitatá'),
      AnswerModel.correct('Saci-pererê'),
  ]),
  new QuestionModel(216, 'Quem é o "patrono" do Exército Brasileiro?', [
      AnswerModel.incorrect('Marechal Deodoro'),
      AnswerModel.incorrect('Barão de Mauá'),
      AnswerModel.incorrect('Marquês de Pombal'),
      AnswerModel.correct('Duque de Caxias'),
  ]),

]

export default questions