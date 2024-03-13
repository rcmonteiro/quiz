const questions = [
  {
    num: 1,
    title: 'Em que estado brasileiro nasceu a apresentadora Xuxa?',
    level: 'easy',
    correct: 2,
    answers: [
      'RIO DE JANEIRO',
      'RIO GRANDE DO SUL',
      'SANTA CATARINA',
      'GOIÁS',
    ]
  },
  {
    num: 2,
    title: 'Qual é o nome dado ao estado da água em forma de gelo?',
    level: 'easy',
    correct: 2,
    answers: [
      'LÍQUIDO',
      'SÓLIDO',
      'GASOSO',
      'VAPOROSO',
    ]
  },
  {
    num: 3,
    title: 'Qual era o apelido da cantora Elis Regina?',
    level: 'easy',
    correct: 3,
    answers: [
      'GAUCHINHA',
      'PAULISTINHA',
      'PIMENTINHA',
      'ANDORINHA',
    ]
  },
  {
    num: 4,
    title: 'Quem é a namorada do Mickey?',
    level: 'easy',
    correct: 2,
    answers: [
      'MARGARIDA',
      'MINNIE',
      'A PEQUENA SEREIA',
      'OLÍVIA PALITO',
    ]
  },
  {
    num: 5,
    title: 'Qual é o personagem do folclore brasileiro que tem uma perna só?',
    level: 'easy',
    correct: 4,
    answers: [
      'CUCA',
      'NEGRINHO DO PASTOREIO',
      'BOITATÁ',
      'SACI-PERERÊ',
    ]
  },
  {
    num: 6,
    title: 'Fidel Castro nasceu em que país?',
    level: 'easy',
    correct: 2,
    answers: [
      'JAMAICA',
      'CUBA',
      'EL SALVADOR',
      'MÉXICO',
    ]
  },
  {
    num: 7,
    title: 'Quem proclamou a república no Brasil em 1889?',
    level: 'easy',
    correct: 4,
    answers: [
      'DUQUE DE CAXIAS',
      'MARECHAL RONDON',
      'DOM PEDRO II',
      'MARECHAL DEODORO',
    ]
  },
  {
    num: 8,
    title: 'Quem é o patrono do exército brasileiro?',
    level: 'easy',
    correct: 3,
    answers: [
      'MARECHAL DEODORO',
      'BARÃO DE MAUÁ',
      'DUQUE DE CAXIAS',
      'MARQUÊS DE POMBAL',
    ]
  },
  {
    num: 9,
    title: 'Quem era o apresentador que reprovava os calouros tocando uma buzina?',
    level: 'easy',
    correct: 4,
    answers: [
      'RAUL GIL',
      'BOLINHA',
      'FLÁVIO CAVALCANTI',
      'CHACRINHA',
    ]
  },
  {
    num: 10,
    title: 'O que era Frankenstein, de Mary Shelley?',
    level: 'easy',
    correct: 1,
    answers: [
      'MONSTRO',
      'GORILA',
      'PRÍNCIPE',
      'SAPO',
    ]
  },
  {
    num: 11,
    title: 'Qual é o signo do zodíaco de quem nasce no dia do ano-novo?',
    level: 'easy',
    correct: 3,
    answers: [
      'VIRGEM',
      'AQUÁRIO',
      'CAPRICÓRNIO',
      'ÁRIES',
    ]
  },
  {
    num: 12,
    title: 'Quem fundou a fábrica de automóveis Ford?',
    level: 'easy',
    correct: 3,
    answers: [
      'HARRISON FORD',
      'GERALD FORD',
      'HENRY FORD',
      'ANNA FORD',
    ]
  },
  {
    num: 13,
    title: 'Qual é a cor que se associa com os grupos ecológicos?',
    level: 'easy',
    correct: 4,
    answers: [
      'PRETA',
      'VERMELHA',
      'AZUL',
      'VERDE',
    ]
  },
  {
    num: 14,
    title: 'A água ferve a quantos graus centígrados?',
    level: 'easy',
    correct: 3,
    answers: [
      '200',
      '100',
      '170',
      '220',
    ]
  },
  {
    num: 15,
    title: 'Quando é comemorado o dia da independência do Brasil?',
    level: 'easy',
    correct: 3,
    answers: [
      '21 DE ABRIL',
      '12 DE OUTUBRO',
      '7 DE SETEMBRO',
      '25 DE DEZEMBRO',
    ]
  },
  {
    num: 16,
    title: 'Qual lugar é também chamado de Santa Sé?',
    level: 'easy',
    correct: 4,
    answers: [
      'VENEZA',
      'VITÓRIA',
      'VANCOUVER',
      'VATICANO',
    ]
  },
  {
    num: 17,
    title: 'Quem tem por lema a frase: “Sempre alerta”?',
    level: 'easy',
    correct: 2,
    answers: [
      'MÉDICOS',
      'ESCOTEIROS',
      'BOMBEIROS',
      'POLICIAIS',
    ]
  },
  {
    num: 18,
    title: 'Quem foi o grande amor de Julieta?',
    level: 'easy',
    correct: 1,
    answers: [
      'ROMEU',
      'ORFEU',
      'HAMLET',
      'IAGO',
    ]
  },
  {
    num: 19,
    title: 'Quantos signos formam o zodíaco?',
    level: 'easy',
    correct: 4,
    answers: [
      'NOVE',
      'DEZ',
      'ONZE',
      'DOZE',
    ]
  },
  {
    num: 20,
    title: 'Vatapá é uma comida típica de qual estado?',
    level: 'easy',
    correct: 4,
    answers: [
      'PARANÁ',
      'SANTA CATARINA',
      'SÃO PAULO',
      'BAHIA',
    ]
  },
  {
    num: 21,
    title: 'Como se chama o lugar onde são armazenadas as balas de um revólver?',
    level: 'easy',
    correct: 2,
    answers: [
      'CANO',
      'TAMBOR',
      'AGULHA',
      'GATILHO',
    ]
  },
  {
    num: 22,
    title: 'Qual personagem da turma da Mônica tem apenas cinco fios de cabelo?',
    level: 'easy',
    correct: 2,
    answers: [
      'MÔNICA',
      'CEBOLINHA',
      'CASCÃO',
      'MAGALI',
    ]
  },
  {
    num: 23,
    title: 'Qual cantora tinha o apelido de “Ternurinha” na época da jovem guarda?',
    level: 'easy',
    correct: 2,
    answers: [
      'SILVINHA',
      'WANDERLÉIA',
      'GRETCHEN',
      'MARTINHA',
    ]
  },
  {
    num: 24,
    title: 'O churrasco é considerado uma comida típica de qual estado?',
    level: 'easy',
    correct: 2,
    answers: [
      'CEARÁ',
      'RIO GRANDE DO SUL',
      'PARÁ',
      'MARANHÃO',
    ]
  },
  {
    num: 25,
    title: 'Qual cantor é o pai da dupla Sandy e Júnior?',
    level: 'easy',
    correct: 2,
    answers: [
      'LEONARDO',
      'XORORÓ',
      'ZEZÉ DI CAMARGO',
      'CHITÃOZINHO',
    ]
  },
  {
    num: 26,
    title: 'Quem foi o criador dos personagens Pedrinho, Narizinho e Emília?',
    level: 'easy',
    correct: 3,
    answers: [
      'MAURÍCIO DE SOUSA',
      'ZIRALDO',
      'MONTEIRO LOBATO',
      'MACHADO DE ASSIS',
    ]
  },
  {
    num: 27,
    title: 'Quem fundou a Microsoft?',
    level: 'easy',
    correct: 3,
    answers: [
      'SULTÃO DE BRUNEI',
      'AKIO MORITA',
      'BILL GATES',
      'PRÍNCIPE CHARLES',
    ]
  },
  {
    num: 28,
    title: 'Qual é o nome dado ao pneu reserva do carro?',
    level: 'easy',
    correct: 2,
    answers: [
      'CALOTA',
      'ESTEPE',
      'MACACO',
      'CHAVE DE RODA',
    ]
  },
  {
    num: 29,
    title: 'Qual é o nome do cachorro medroso do Salsicha, dos desenhos animados?',
    level: 'easy',
    correct: 4,
    answers: [
      'FLOQUINHO',
      'RIN-TIN-TIN',
      'LASSIE',
      'SCOOBY-DOO',
    ]
  },
  {
    num: 30,
    title: 'Quantas dentições naturais tem o ser humano durante a vida?',
    level: 'easy',
    correct: 2,
    answers: [
      'UMA',
      'DUAS',
      'TRÊS',
      'QUATRO',
    ]
  },
  {
    num: 31,
    title: 'Edinho, filho de Pelé, jogou no Santos em que posição?',
    level: 'easy',
    correct: 2,
    answers: [
      'ZAGUEIRO',
      'GOLEIRO',
      'ATACANTE',
      'ARMADOR',
    ]
  },
  {
    num: 32,
    title: 'Qual é a pedra preciosa mais dura encontrada na natureza?',
    level: 'easy',
    correct: 4,
    answers: [
      'ESMERALDA',
      'RUBI',
      'PÉROLA',
      'DIAMANTE',
    ]
  },
  {
    num: 33,
    title: 'Como se chama o lugar onde se guardam vinhos?',
    level: 'easy',
    correct: 1,
    answers: [
      'ADEGA',
      'BIBLIOTECA',
      'SÓTÃO',
      'SALA',
    ]
  },
  {
    num: 34,
    title: 'Qual cantor ficou conhecido como “o rei do rock”?',
    level: 'easy',
    correct: 3,
    answers: [
      'FRANK SINATRA',
      'LITTLE RICHARD',
      'ELVIS PRESLEY',
      'RICHIE VALENS',
    ]
  },
  {
    num: 35,
    title: 'Quem é o inimigo do Piu-Piu nos desenhos animados?',
    level: 'easy',
    correct: 3,
    answers: [
      'FÉLIX',
      'TOM',
      'FRAJOLA',
      'MINGAU',
    ]
  },
  {
    num: 36,
    title: 'Joana Prado é o nome verdadeiro de qual artista?',
    level: 'easy',
    correct: 2,
    answers: [
      'TIAZINHA',
      'FEITICEIRA',
      'LADY LU',
      'SHEILA MELLO',
    ]
  },
  {
    num: 37,
    title: 'Quantos dias tem um ano bissexto?',
    level: 'easy',
    correct: 3,
    answers: [
      '364',
      '365',
      '366',
      '367',
    ]
  },
  {
    num: 38,
    title: 'Qual é o réptil que muda de cor conforme o lugar em que está?',
    level: 'easy',
    correct: 2,
    answers: [
      'SAPO',
      'CAMALEÃO',
      'LAGARTO',
      'JACARÉ',
    ]
  },
  {
    num: 39,
    title: 'Qual é a duração de cada tempo de uma partida de futebol?',
    level: 'easy',
    correct: 1,
    answers: [
      '45 MINUTOS',
      '90 MINUTOS',
      '120 MINUTOS',
      '150 MINUTOS',
    ]
  },
  {
    num: 40,
    title: 'Onde fica o centro da indústria cinematográfica nos EUA?',
    level: 'easy',
    correct: 4,
    answers: [
      'NOVA YORK',
      'LAS VEGAS',
      'NEW ORLEANS',
      'HOLLYWOOD',
    ]
  },
  {
    num: 41,
    title: 'Qual era o código da identidade secreta de James Bond?',
    level: 'easy',
    correct: 4,
    answers: [
      '7O7',
      '9O7',
      'OO8',
      'OO7',
    ]
  },
  {
    num: 42,
    title: 'Qual é a fruta associada com a cidade de Laranjal?',
    level: 'easy',
    correct: 2,
    answers: [
      'MELANCIA',
      'LARANJA',
      'MAÇÃ',
      'UVA',
    ]
  },
  {
    num: 43,
    title: 'Quantos centavos equivalem a um real?',
    level: 'easy',
    correct: 3,
    answers: [
      'DEZ',
      'MIL',
      'CEM',
      'CINQÜENTA',
    ]
  },
  {
    num: 44,
    title: 'De acordo com a Bíblia, qual era o “fruto proibido”?',
    level: 'easy',
    correct: 2,
    answers: [
      'MAMÃO',
      'MAÇÃ',
      'UVA',
      'ABACAXI',
    ]
  },
  {
    num: 45,
    title: 'Como é conhecida a ponte que liga Rio de Janeiro a Niterói?',
    level: 'easy',
    correct: 2,
    answers: [
      'GOLDEN GATE',
      'RIO-NITERÓI',
      'RIO SÃO FRANCISCO',
      'BROOKLIN',
    ]
  },
  {
    num: 46,
    title: 'Em que ano os portugueses descobriram o Brasil?',
    level: 'easy',
    correct: 2,
    answers: [
      '1450',
      '1500',
      '1550',
      '1400',
    ]
  },
  {
    num: 47,
    title: 'O que é medido por um termômetro?',
    level: 'easy',
    correct: 3,
    answers: [
      'LONGITUDE',
      'UMIDADE',
      'TEMPERATURA',
      'LATITUDE',
    ]
  },
  {
    num: 48,
    title: 'O rio Amazonas pertence a qual continente?',
    level: 'easy',
    correct: 1,
    answers: [
      'AMERICANO',
      'AFRICANO',
      'EUROPEU',
      'ASIÁTICO',
    ]
  },
  {
    num: 49,
    title: 'Quem esculpiu o boneco Pinóquio, no conto de Carlo Lorenzini?',
    level: 'easy',
    correct: 1,
    answers: [
      'GEPETO',
      'FADA',
      'BRUXA',
      'GIGANTE',
    ]
  },
  {
    num: 50,
    title: 'Qual é a moeda oficial dos Estados Unidos?',
    level: 'easy',
    correct: 3,
    answers: [
      'ESCUDO',
      'COROA',
      'DÓLAR',
      'LIBRA',
    ]
  },
  {
    num: 51,
    title: 'Qual foi o placar no final da Copa de 98, quando o Brasil perdeu para a França?',
    level: 'easy',
    correct: 2,
    answers: [
      'DOIS A ZERO',
      'TRÊS A ZERO',
      'QUATRO A ZERO',
      'CINCO A ZERO',
    ]
  },
  {
    num: 52,
    title: 'Quantas folhas tem um trevo da sorte?',
    level: 'easy',
    correct: 2,
    answers: [
      'TRÊS',
      'QUATRO',
      'CINCO',
      'SEIS',
    ]
  },
  {
    num: 53,
    title: 'Qual é a cidade conhecida como “terra da garoa”?',
    level: 'easy',
    correct: 4,
    answers: [
      'RIO DE JANEIRO',
      'PORTO ALEGRE',
      'PIRACICABA',
      'SÃO PAULO',
    ]
  },
  {
    num: 54,
    title: 'Qual ator do cinema brasileiro é conhecido por ter unhas enormes?',
    level: 'easy',
    correct: 2,
    answers: [
      'PENADINHO',
      'ZÉ DO CAIXÃO',
      'ZÉ DO CASARÃO',
      'TONINHO DO DIABO',
    ]
  },
  {
    num: 55,
    title: 'O violoncelo é um tipo de instrumento de?',
    level: 'easy',
    correct: 2,
    answers: [
      'SOPRO',
      'CORDAS',
      'PERCUSSÃO',
      'REPERCUSSÃO',
    ]
  },
  {
    num: 56,
    title: 'Com que fruta a Branca de Neve foi envenenada?',
    level: 'easy',
    correct: 1,
    answers: [
      'MAÇÃ',
      'PÊRA',
      'MELÃO',
      'LARANJA',
    ]
  },
  {
    num: 57,
    title: 'Quem foi técnico da Seleção brasileira de futebol na Copa de 98?',
    level: 'easy',
    correct: 1,
    answers: [
      'ZAGALLO',
      'SCOLARI',
      'LUXEMBURGO',
      'CARPEGIANNI',
    ]
  },
  {
    num: 58,
    title: 'Em que cidade é realizada a corrida de São Silvestre?',
    level: 'easy',
    correct: 3,
    answers: [
      'BELO HORIZONTE',
      'RIO DE JANEIRO',
      'SÃO PAULO',
      'SALVADOR',
    ]
  },
  {
    num: 59,
    title: 'Qual é a área da medicina que trata de crianças?',
    level: 'easy',
    correct: 2,
    answers: [
      'GERIATRIA',
      'PEDIATRIA',
      'INFANTOLOGIA',
      'BIOLOGIA',
    ]
  },
  {
    num: 60,
    title: 'O saquê é uma bebida típica de qual país?',
    level: 'easy',
    correct: 2,
    answers: [
      'ESTADOS UNIDOS',
      'JAPÃO',
      'CORÉIA DO SUL',
      'CHINA',
    ]
  },
  {
    num: 61,
    title: 'O dromedário tem quantas corcovas?',
    level: 'easy',
    correct: 1,
    answers: [
      'UMA',
      'DUAS',
      'TRÊS',
      'QUATRO',
    ]
  },
  {
    num: 62,
    title: 'Um adulto sadio tem quantos dentes na boca?',
    level: 'easy',
    correct: 3,
    answers: [
      '18',
      '24',
      '32',
      '36',
    ]
  },
  {
    num: 63,
    title: 'Qual dos sete anões usa óculos?',
    level: 'easy',
    correct: 4,
    answers: [
      'DUNGA',
      'ZANGADO',
      'DENGOSO',
      'MESTRE',
    ]
  },
  {
    num: 64,
    title: 'Quem é o Homem de Aço das histórias em quadrinhos?',
    level: 'easy',
    correct: 4,
    answers: [
      'BATMAN',
      'HUCK',
      'HE-MAN',
      'SUPER-HOMEM',
    ]
  },
  {
    num: 65,
    title: 'Cavalo, rainha e torre são peças de qual jogo?',
    level: 'easy',
    correct: 2,
    answers: [
      'DAMAS',
      'XADREZ',
      'LUDO',
      'DOMINÓ',
    ]
  },
  {
    num: 66,
    title: 'Turmalina é uma espécie de quê?',
    level: 'easy',
    correct: 3,
    answers: [
      'FLOR',
      'FRUTO',
      'PEDRA',
      'VERDURA',
    ]
  },
  {
    num: 67,
    title: 'Qual é o santo casamenteiro?',
    level: 'easy',
    correct: 4,
    answers: [
      'SÃO PEDRO',
      'SÃO PAULO',
      'SÃO JOÃO',
      'SANTO ANTÔNIO',
    ]
  },
  {
    num: 68,
    title: 'Quem ocupou o cargo de Ministro da Saúde do Brasil no ano de 2000?',
    level: 'easy',
    correct: 2,
    answers: [
      'ADIB JATENE',
      'JOSÉ SERRA',
      'CIRO GOMES',
      'PEDRO MALAN',
    ]
  },
  {
    num: 69,
    title: 'Segundo a Bíblia, quem foi morto por Caim?',
    level: 'easy',
    correct: 3,
    answers: [
      'ADÃO',
      'ISAAC',
      'ABEL',
      'ABRAÃO',
    ]
  },
  {
    num: 70,
    title: 'Qual é o livro dividido em Velho Testamento e Novo Testamento?',
    level: 'easy',
    correct: 1,
    answers: [
      'BÍBLIA',
      'ENCICLOPÉDIA',
      'DICIONÁRIO',
      'ATLAS',
    ]
  },
  {
    num: 71,
    title: 'Qual objeto é usado como arma pelo Pingüim do Batman?',
    level: 'easy',
    correct: 1,
    answers: [
      'GUARDA-CHUVA',
      'CHAPÉU',
      'GALOCHA',
      'CAPA',
    ]
  },
  {
    num: 72,
    title: 'Qual ser mitológico possui o corpo metade mulher e metade peixe?',
    level: 'easy',
    correct: 1,
    answers: [
      'SEREIA',
      'MEDUSA',
      'CLEÓPATRA',
      'SERENA',
    ]
  },
  {
    num: 73,
    title: 'Qual foi o nome dado ao movimento liderado por Tiradentes?',
    level: 'easy',
    correct: 3,
    answers: [
      'REVOLUÇÃO FRANCESA',
      'GUERRA DOS EMBOABAS',
      'INCONFIDÊNCIA MINEIRA',
      'SEGUNDA GUERRA MUNDIAL',
    ]
  },
  {
    num: 74,
    title: 'Qual é o país de origem do vinho champanha?',
    level: 'easy',
    correct: 3,
    answers: [
      'AMÉRICA',
      'HOLANDA',
      'FRANÇA',
      'SUÉCIA',
    ]
  },
  {
    num: 75,
    title: 'Qual destes elementos se forma dentro das ostras?',
    level: 'easy',
    correct: 2,
    answers: [
      'DIAMANTE',
      'PÉROLA',
      'RUBI',
      'ESMERALDA',
    ]
  },
  {
    num: 76,
    title: 'Quando é comemorado o dia da mentira no Brasil?',
    level: 'easy',
    correct: 3,
    answers: [
      '26 DE DEZEMBRO',
      '7 DE SETEMBRO',
      '1 DE ABRIL',
      '15 DE NOVEMBRO',
    ]
  },
  {
    num: 77,
    title: 'Em que estado nasceu a cantora Elba Ramalho?',
    level: 'easy',
    correct: 1,
    answers: [
      'PARAÍBA',
      'CEARÁ',
      'BAHIA',
      'ALAGOAS',
    ]
  },
  {
    num: 78,
    title: 'Quando é comemorado o dia da criança?',
    level: 'easy',
    correct: 1,
    answers: [
      '12 DE OUTUBRO',
      'DE ABRIL',
      '13 DE MAIO',
      '9 DE JULHO',
    ]
  },
  {
    num: 79,
    title: 'De qual lugar o personagem Tarzan era considerado rei?',
    level: 'easy',
    correct: 1,
    answers: [
      'DA SELVA',
      'DA NOITE',
      'DA TASMÂNIA',
      'DAS MULHERES',
    ]
  },
  {
    num: 80,
    title: 'Quem é a mulher do Tarzan?',
    level: 'easy',
    correct: 3,
    answers: [
      'DIANA',
      'LOUIS LAINE',
      'JANE',
      'CHITA',
    ]
  },
  {
    num: 81,
    title: 'Qual é o animal que puxa o trenó do Papai Noel?',
    level: 'easy',
    correct: 2,
    answers: [
      'CAVALO',
      'RENA',
      'TOURO',
      'JUMENTO',
    ]
  },
  {
    num: 82,
    title: 'Capixaba é quem nasce em qual estado brasileiro?',
    level: 'easy',
    correct: 1,
    answers: [
      'ESPÍRITO SANTO',
      'RIO GRANDE DO NORTE',
      'SANTA CATARINA',
      'PARANÁ',
    ]
  },
  {
    num: 83,
    title: 'Quantos titulares possui uma equipe de vôlei?',
    level: 'easy',
    correct: 2,
    answers: [
      'CINCO',
      'SEIS',
      'SETE',
      'OITO',
    ]
  },
  {
    num: 84,
    title: 'Qual é o profissional que conduz o elevador?',
    level: 'easy',
    correct: 3,
    answers: [
      'CONDUTOR',
      'OPERADOR',
      'ASCENSORISTA',
      'RECEPCIONISTA',
    ]
  },
  {
    num: 85,
    title: 'Segundo a Bíblia, quantos apóstolos tinha Jesus Cristo?',
    level: 'easy',
    correct: 3,
    answers: [
      'DEZ',
      'ONZE',
      'DOZE',
      'TREZE',
    ]
  },
  {
    num: 86,
    title: 'Em qual país surgiu a máfia?',
    level: 'easy',
    correct: 3,
    answers: [
      'ESTADOS UNIDOS',
      'INGLATERRA',
      'ITÁLIA',
      'ESPANHA',
    ]
  },
  {
    num: 87,
    title: 'Qual é o profissional que usa o estetoscópio?',
    level: 'easy',
    correct: 3,
    answers: [
      'ENGENHEIRO',
      'MECÂNICO',
      'MÉDICO',
      'AVIADOR',
    ]
  },
  {
    num: 88,
    title: 'Fernando Henrique Cardoso é formado em que área?',
    level: 'easy',
    correct: 4,
    answers: [
      'ADMINISTRAÇÃO',
      'ECONOMIA',
      'DIREITO',
      'SOCIOLOGIA',
    ]
  },
  {
    num: 89,
    title: 'Qual destes é considerado o mês das noivas?',
    level: 'easy',
    correct: 3,
    answers: [
      'SETEMBRO',
      'JUNHO',
      'MAIO',
      'OUTUBRO',
    ]
  },
  {
    num: 90,
    title: 'Quem inventou o telefone?',
    level: 'easy',
    correct: 1,
    answers: [
      'GRAHAM BELL',
      'GEORGE WASHINGTON',
      'THOMAS EDISON',
      'MARCONI',
    ]
  },
  {
    num: 91,
    title: 'Qual é o esporte praticado com pequenos aviões de controle remoto?',
    level: 'easy',
    correct: 3,
    answers: [
      'AUTOMOBILISMO',
      'IATISMO',
      'AEROMODELISMO',
      'ATLETISMO',
    ]
  },
  {
    num: 92,
    title: 'Qual é o significado da frase inglesa “I love you”?',
    level: 'easy',
    correct: 3,
    answers: [
      'BOM-DIA',
      'ATÉ LOGO',
      'EU AMO VOCÊ',
      'ESTOU COM FOME',
    ]
  },
  {
    num: 93,
    title: 'Qual personagem lidera o bando da floresta de Sherwood?',
    level: 'easy',
    correct: 3,
    answers: [
      'ROBIN COOK',
      'ROBIN BANKS',
      'ROBIN HOOD',
      'ROBIN DAYS',
    ]
  },
  {
    num: 94,
    title: 'Qual é a cor da pedra rubi?',
    level: 'easy',
    correct: 4,
    answers: [
      'AZUL',
      'VERDE',
      'AMARELA',
      'VERMELHA',
    ]
  },
  {
    num: 95,
    title: 'Qual é a planta que fortalece o marinheiro Popeye?',
    level: 'easy',
    correct: 2,
    answers: [
      'ALFACE',
      'ESPINAFRE',
      'CENOURA',
      'REPOLHO',
    ]
  },
  {
    num: 96,
    title: 'Quando é comemorado o dia de Santo Antônio?',
    level: 'easy',
    correct: 4,
    answers: [
      '12 DE AGOSTO',
      '11 DE JANEIRO',
      '7 DE SETEMBRO',
      '13 DE JUNHO',
    ]
  },
  {
    num: 97,
    title: 'Qual era a profissão exercida por Lula, antes de ele ser presidente do PT?',
    level: 'easy',
    correct: 4,
    answers: [
      'ENGRAXATE',
      'PEDREIRO',
      'FEIRANTE',
      'METALÚRGICO',
    ]
  },
  {
    num: 98,
    title: 'Quem foi o amor do imperador Marco Antônio?',
    level: 'easy',
    correct: 3,
    answers: [
      'SHERAZADE',
      'LADY GODIVA',
      'CLEÓPATRA',
      'JULIETA',
    ]
  },
  {
    num: 99,
    title: 'Qual estação do ano fica entre o verão e o inverno?',
    level: 'easy',
    correct: 2,
    answers: [
      'VERÃO',
      'OUTONO',
      'INVERNO',
      'PRIMAVERA',
    ]
  },
  {
    num: 100,
    title: 'Como Joana d‘Arc foi morta?',
    level: 'easy',
    correct: 3,
    answers: [
      'ENFORCADA',
      'AFOGADA',
      'QUEIMADA',
      'ASFIXIADA',
    ]
  },
  {
    num: 101,
    title: 'Quantos jogadores um jogo de vôlei reúne na quadra?',
    level: 'medium',
    correct: 4,
    answers: [
      'SEIS',
      'OITO',
      'DEZ',
      'DOZE',
    ]
  },
  {
    num: 102,
    title: 'Qual é o país do tango?',
    level: 'medium',
    correct: 2,
    answers: [
      'URUGUAI',
      'ARGENTINA',
      'PARAGUAI',
      'ESPANHA',
    ]
  },
  {
    num: 103,
    title: 'Que imperador pôs fogo em Roma?',
    level: 'medium',
    correct: 2,
    answers: [
      'TRAJANO',
      'NERO',
      'BRUTUS',
      'CALÍGULA',
    ]
  },
  {
    num: 104,
    title: 'A cidade de Pompéia, que foi soterrada por um vulcão fica em qual desses países?',
    level: 'medium',
    correct: 3,
    answers: [
      'JAPÃO',
      'MÉXICO',
      'ITÁLIA',
      'ESTADOS UNIDOS',
    ]
  },
  {
    num: 105,
    title: 'Como é chamado quem nasce em Milão, na Itália?',
    level: 'medium',
    correct: 4,
    answers: [
      'MILANENSE',
      'MILANOSO',
      'MILISTA',
      'MILANÊS',
    ]
  },
  {
    num: 106,
    title: 'Que profissional usa uma ferramenta chamada formão?',
    level: 'medium',
    correct: 1,
    answers: [
      'CARPINTEIRO',
      'RELOJOEIRO',
      'CONFEITEIRO',
      'BOMBEIRO',
    ]
  },
  {
    num: 107,
    title: 'Em qual estádio Pelé marcou seu milésimo gol?',
    level: 'medium',
    correct: 3,
    answers: [
      'MORUMBI',
      'PACAEMBU',
      'MARACANÃ',
      'MINEIRÃO',
    ]
  },
  {
    num: 108,
    title: 'O que é um oboé?',
    level: 'medium',
    correct: 3,
    answers: [
      'VULCÃO',
      'COMIDA',
      'INSTRUMENTO MUSICAL',
      'TRIBO INDÍGENA',
    ]
  },
  {
    num: 109,
    title: 'Como eram chamados os pilotos suicidas da Segunda Guerra?',
    level: 'medium',
    correct: 1,
    answers: [
      'CAMICASES',
      'SASHIMIS',
      'HARAQUIRIS',
      'SUMÔS',
    ]
  },
  {
    num: 110,
    title: 'O que é gôndola?',
    level: 'medium',
    correct: 1,
    answers: [
      'EMBARCAÇÃO',
      'BRINQUEDO',
      'MÚSICA',
      'SÍMBOLO',
    ]
  },
  {
    num: 111,
    title: 'Sashimi é um prato originário de qual país?',
    level: 'medium',
    correct: 1,
    answers: [
      'JAPÃO',
      'CHINA',
      'ÍNDIA',
      'INDONÉSIA',
    ]
  },
  {
    num: 112,
    title: 'Como é chamada a cantora que representa o papel principal em uma ópera?',
    level: 'medium',
    correct: 3,
    answers: [
      'PRIMEIRA DAMA',
      'DONA-PRIMA',
      'PRIMA-DONA',
      'OBRA-PRIMA',
    ]
  },
  {
    num: 113,
    title: 'Peroba é uma espécie de?',
    level: 'medium',
    correct: 2,
    answers: [
      'INSETO',
      'ÁRVORE',
      'VERME',
      'VERDURA',
    ]
  },
  {
    num: 114,
    title: 'O alpinismo é praticado em que lugar?',
    level: 'medium',
    correct: 2,
    answers: [
      'MAR',
      'MONTANHA',
      'RIO',
      'PRAIA',
    ]
  },
  {
    num: 115,
    title: 'O Coliseu é um monumento histórico de que cidade européia?',
    level: 'medium',
    correct: 3,
    answers: [
      'PARIS',
      'COPENHAGUE',
      'ROMA',
      'LONDRES',
    ]
  },
  {
    num: 116,
    title: 'Qual é o ponto mais alto da Terra?',
    level: 'medium',
    correct: 1,
    answers: [
      'EVEREST',
      'MONTE SINAI',
      'MONTE CASTELO',
      'MONT BLANC',
    ]
  },
  {
    num: 117,
    title: 'Que rio corta a cidade de Londres, na Inglaterra?',
    level: 'medium',
    correct: 1,
    answers: [
      'TÂMISA',
      'SENA',
      'RENO',
      'AUBE',
    ]
  },
  {
    num: 118,
    title: 'Qual é a raça do personagem principal do filme “Beethoven”?',
    level: 'medium',
    correct: 4,
    answers: [
      'FILA',
      'PASTOR ALEMÃO',
      'POODLE',
      'SÃO-BERNARDO',
    ]
  },
  {
    num: 119,
    title: 'Quem foi eleito presidente da África do Sul em 1994?',
    level: 'medium',
    correct: 2,
    answers: [
      'NELSON PIQUET',
      'NELSON MANDELA',
      'NELSON NED',
      'JOHN NELSON',
    ]
  },
  {
    num: 120,
    title: 'Qual cantor ficou conhecido como “O rei da voz”?',
    level: 'medium',
    correct: 3,
    answers: [
      'ORLANDO SILVA',
      'VICENTE CELESTINO',
      'FRANCISCO ALVES',
      'CARLOS GALHARDO',
    ]
  },
  {
    num: 121,
    title: 'Quantos quilates tem o ouro puro?',
    level: 'medium',
    correct: 3,
    answers: [
      '18',
      '20',
      '24',
      '30',
    ]
  },
  {
    num: 122,
    title: 'Qual é a sigla da Organização das Nações Unidas?',
    level: 'medium',
    correct: 1,
    answers: [
      'ONU',
      'FMI',
      'CIA',
      'OTAN',
    ]
  },
  {
    num: 123,
    title: 'De quantos em quantos anos aparece o cometa Halley?',
    level: 'medium',
    correct: 3,
    answers: [
      '57 ANOS',
      '67 ANOS',
      '76 ANOS',
      '79 ANOS',
    ]
  },
  {
    num: 124,
    title: 'Segundo a crença popular, a mula-sem-cabeça é mulher de quem?',
    level: 'medium',
    correct: 2,
    answers: [
      'DO COROINHA',
      'DO PADRE',
      'DO SACRISTÃO',
      'DO BISPO',
    ]
  },
  {
    num: 125,
    title: 'Que atriz protagonizou o filme “Titanic”?',
    level: 'medium',
    correct: 2,
    answers: [
      'CAMERON DIAZ',
      'KATE WINSLET',
      'BRIDGET FONDA',
      'CATHERINE ZETTA JONES',
    ]
  },
  {
    num: 126,
    title: 'Como é chamada a doença que causa perda desigual da melanina?',
    level: 'medium',
    correct: 3,
    answers: [
      'ASTIGMATISMO',
      'TENDINITE',
      'VITILIGO',
      'VITINGA',
    ]
  },
  {
    num: 127,
    title: 'Quem realizou a primeira cirurgia de ponte de safena no Brasil?',
    level: 'medium',
    correct: 3,
    answers: [
      'DR. ZERBINI',
      'DR. FRITZ',
      'DR. JATENE',
      'DR. CALLIGARI',
    ]
  },
  {
    num: 128,
    title: 'No filme, quem era parceiro de crimes da Bonnie?',
    level: 'medium',
    correct: 2,
    answers: [
      'BILL',
      'CLYDE',
      'JAMES',
      'BUTCH',
    ]
  },
  {
    num: 129,
    title: 'Qual é a moeda oficial da Alemanha?',
    level: 'medium',
    correct: 2,
    answers: [
      'LIRA',
      'MARCO',
      'FRANCO',
      'LIBRA',
    ]
  },
  {
    num: 130,
    title: 'Quem foi o assassino de Lee Harvey Oswald?',
    level: 'medium',
    correct: 1,
    answers: [
      'JACK RUBY',
      'JOHN WILKES BOOTH',
      'PAT GARRET',
      'CHARLOTTE CORDAY',
    ]
  },
  {
    num: 131,
    title: 'Quem é o parceiro de aventuras de Dom Quixote?',
    level: 'medium',
    correct: 1,
    answers: [
      'SANCHO PANÇA',
      'GUILHERME TELL',
      'SIGMUND FREUD',
      'LANCELOT',
    ]
  },
  {
    num: 132,
    title: 'Nas histórias do Snoopy, qual é o nome do passarinho?',
    level: 'medium',
    correct: 2,
    answers: [
      'PIU-PIU',
      'WOODSTOCK',
      'CANARINHO',
      'ROUXINOL',
    ]
  },
  {
    num: 133,
    title: 'Que metal avermelhado cria uma camada esverdeada em contato com a umidade?',
    level: 'medium',
    correct: 2,
    answers: [
      'FERRO',
      'COBRE',
      'MERCÚRIO',
      'AÇO',
    ]
  },
  {
    num: 134,
    title: 'Que planta era usada para fabricação de papel no antigo Egito?',
    level: 'medium',
    correct: 1,
    answers: [
      'PAPIRO',
      'EUCALIPTO',
      'OLIVEIRA',
      'MILHO',
    ]
  },
  {
    num: 135,
    title: 'Que país europeu tem como atração a tourada?',
    level: 'medium',
    correct: 1,
    answers: [
      'ESPANHA',
      'ITÁLIA',
      'FRANÇA',
      'ALEMANHA',
    ]
  },
  {
    num: 136,
    title: 'Que humorista, falecido em 1999, foi baterista de Raul Seixas?',
    level: 'medium',
    correct: 2,
    answers: [
      'LILICO',
      'RONI CÓCEGAS',
      'GRANDE OTELO',
      'MAZZAROPI',
    ]
  },
  {
    num: 137,
    title: 'O que os filatelistas colecionam?',
    level: 'medium',
    correct: 3,
    answers: [
      'QUADROS',
      'MOEDAS',
      'SELOS',
      'FIGURINHAS',
    ]
  },
  {
    num: 138,
    title: 'Quem pintou o quadro “La Gioconda”, conhecido como “Mona Lisa”?',
    level: 'medium',
    correct: 1,
    answers: [
      'LEONARDO DA VINCI',
      'TICIANO',
      'RAFAEL',
      'MICHELÂNGELO',
    ]
  },
  {
    num: 139,
    title: 'Em que cidade está situada a famosa Praça Vermelha?',
    level: 'medium',
    correct: 1,
    answers: [
      'MOSCOU',
      'BERLIM',
      'PARIS',
      'ROMA',
    ]
  },
  {
    num: 140,
    title: 'Qual é o nome do vulcão que sepultou cidades na Itália no ano de 79?',
    level: 'medium',
    correct: 2,
    answers: [
      'VÊNUS',
      'VESÚVIO',
      'VARSÓVIA',
      'VENEZA',
    ]
  },
  {
    num: 141,
    title: 'Quando começou e terminou a Primeira Guerra Mundial?',
    level: 'medium',
    correct: 1,
    answers: [
      '1914-1919',
      '1939-1945',
      '1921-1932',
      '1912-1915',
    ]
  },
  {
    num: 142,
    title: 'Qual é a letra do alfabeto que simboliza o número dez em algarismo romano?',
    level: 'medium',
    correct: 4,
    answers: [
      'V',
      'D',
      'L',
      'X',
    ]
  },
  {
    num: 143,
    title: 'Qual é a história que Francis Ford Coppola dirigiu em três partes?',
    level: 'medium',
    correct: 3,
    answers: [
      'TITANIC',
      'SEXTA-FEIRA TREZE',
      'O PODEROSO CHEFÃO',
      'GUERRA NAS ESTRELAS',
    ]
  },
  {
    num: 144,
    title: 'Que animais são criados nas pocilgas?',
    level: 'medium',
    correct: 4,
    answers: [
      'CAMELOS',
      'BÚFALOS',
      'CARNEIROS',
      'PORCOS',
    ]
  },
  {
    num: 145,
    title: 'Quem foi o diretor do filme “A lista de Schindler?',
    level: 'medium',
    correct: 2,
    answers: [
      'CLINT EASTWOOD',
      'STEVEN SPIELBERG',
      'STANLEY KUBRICK',
      'PEDRO ALMODÓVAR',
    ]
  },
  {
    num: 146,
    title: 'Qual é o alimento produzido pela moagem dos grãos de cacau?',
    level: 'medium',
    correct: 3,
    answers: [
      'PARAFINA',
      'AÇÚCAR',
      'CHOCOLATE',
      'CAFÉ',
    ]
  },
  {
    num: 147,
    title: 'Quem introduziu o futebol no Brasil?',
    level: 'medium',
    correct: 3,
    answers: [
      'PELÉ',
      'JOÃO HAVELANGE',
      'CHARLES MILLER',
      'PAULO MACHADO',
    ]
  },
  {
    num: 148,
    title: 'Em que continente se situa o rio Nilo?',
    level: 'medium',
    correct: 1,
    answers: [
      'AFRICANO',
      'EUROPEU',
      'AMERICANO',
      'ASIÁTICO',
    ]
  },
  {
    num: 149,
    title: 'Que colônia britânica foi devolvida à China em 1997?',
    level: 'medium',
    correct: 4,
    answers: [
      'PEQUIM',
      'HANÓI',
      'HIROSHIMA',
      'HONG KONG',
    ]
  },
  {
    num: 150,
    title: 'Nova Delhi é a capital de que país?',
    level: 'medium',
    correct: 1,
    answers: [
      'ÍNDIA',
      'ISLÂNDIA',
      'PAQUISTÃO',
      'MÉXICO',
    ]
  },
  {
    num: 151,
    title: 'O que leva o sangue do coração para o corpo?',
    level: 'medium',
    correct: 3,
    answers: [
      'VEIAS',
      'MÚSCULOS',
      'ARTÉRIAS',
      'OSSOS',
    ]
  },
  {
    num: 152,
    title: 'Como é chamado o objeto falsificado vendido como original?',
    level: 'medium',
    correct: 3,
    answers: [
      'PIRARUCU',
      'PERNETA',
      'PIRATA',
      'PAPAGAIO',
    ]
  },
  {
    num: 153,
    title: 'Em que matéria estuda-se álgebra na escola?',
    level: 'medium',
    correct: 1,
    answers: [
      'MATEMÁTICA',
      'BIOLOGIA',
      'QUÍMICA',
      'FÍSICA',
    ]
  },
  {
    num: 154,
    title: 'Qual é o nome original do filme “O médico e o monstro”?',
    level: 'medium',
    correct: 2,
    answers: [
      'MASTERS E JOHNSON',
      'DR. JEKYLL E MR. HYDE',
      'BONNIE E CLYDE',
      'D. QUIXOTE E SANCHO PANÇA',
    ]
  },
  {
    num: 155,
    title: 'Que atriz casou com Joe Dimaggio e Arthur Miller?',
    level: 'medium',
    correct: 3,
    answers: [
      'GLENDA JACKSON',
      'MARGARET BECKET',
      'MARILYN MONROE',
      'ELIZABETH TAYLOR',
    ]
  },
  {
    num: 156,
    title: 'Quem disse a frase: “Vim, vi e venci”?',
    level: 'medium',
    correct: 1,
    answers: [
      'JÚLIO CÉSAR',
      'CALÍGULA',
      'NERO',
      'MARCO ANTÔNIO',
    ]
  },
  {
    num: 157,
    title: 'Que nome se dá à volta dos cardumes de peixes para a nascente do rio?',
    level: 'medium',
    correct: 4,
    answers: [
      'POROROCA',
      'PERERECA',
      'PIRAPORA',
      'PIRACEMA',
    ]
  },
  {
    num: 158,
    title: 'Qual é o país que participou de todas as copas do mundo de futebol, até 1998?',
    level: 'medium',
    correct: 4,
    answers: [
      'ITÁLIA',
      'URUGUAI',
      'ARGENTINA',
      'BRASIL',
    ]
  },
  {
    num: 159,
    title: 'Quais são os naipes vermelhos do baralho?',
    level: 'medium',
    correct: 1,
    answers: [
      'OUROS E COPAS',
      'COPAS E PAUS',
      'PAUS E OUROS',
      'ESPADAS E PAUS',
    ]
  },
  {
    num: 160,
    title: 'Qual é o nome verdadeiro do Batman?',
    level: 'medium',
    correct: 1,
    answers: [
      'BRUCE WAYNE',
      'DEXTER',
      'CLARK KENT',
      'LEX LUTOR',
    ]
  },
  {
    num: 161,
    title: 'Beirute é a capital de que país?',
    level: 'medium',
    correct: 4,
    answers: [
      'SÍRIA',
      'NEPAL',
      'MONGÓLIA',
      'LÍBANO',
    ]
  },
  {
    num: 162,
    title: 'O que é um contratorpedeiro?',
    level: 'medium',
    correct: 2,
    answers: [
      'TANQUE',
      'NAVIO DE GUERRA',
      'DIRIGÍVEL',
      'AVIÃO DE CAÇA',
    ]
  },
  {
    num: 163,
    title: 'Às margens de que riacho foi proclamada a Independência do Brasil?',
    level: 'medium',
    correct: 3,
    answers: [
      'CAMBUCI',
      'SACOMÃ',
      'IPIRANGA',
      'SÃO FRANCISCO',
    ]
  },
  {
    num: 164,
    title: 'O “super bowl” faz parte de qual esporte?',
    level: 'medium',
    correct: 3,
    answers: [
      'BASEBALL',
      'BASQUETE',
      'FUTEBOL AMERICANO',
      'GOLF',
    ]
  },
  {
    num: 165,
    title: 'Qual é o nome da embarcação típica do litoral nordestino brasileiro?',
    level: 'medium',
    correct: 3,
    answers: [
      'SUBMARINO',
      'JET SKI',
      'JANGADA',
      'LANCHA',
    ]
  },
  {
    num: 166,
    title: 'Em que estado norte-americano fica a cidade de Miami?',
    level: 'medium',
    correct: 3,
    answers: [
      'ALASCA',
      'NOVA YORK',
      'FLÓRIDA',
      'CALIFÓRNIA',
    ]
  },
  {
    num: 167,
    title: 'Qual é a capital do Iraque?',
    level: 'medium',
    correct: 2,
    answers: [
      'BELÉM',
      'BAGDÁ',
      'BEIRUTE',
      'BUDAPESTE',
    ]
  },
  {
    num: 168,
    title: 'Como se chama a máquina usada para compactar o asfalto?',
    level: 'medium',
    correct: 1,
    answers: [
      'ROLO COMPRESSOR',
      'ESCAVADEIRA',
      'TRATOR',
      'LIXADEIRA',
    ]
  },
  {
    num: 169,
    title: 'Em 1991, que esportista americano se afastou do basquete por ser HIV positivo?',
    level: 'medium',
    correct: 2,
    answers: [
      'MICHAEL JORDAN',
      'MAGIC JOHNSON',
      'DENNIS RODMAN',
      'MIKE TYSON',
    ]
  },
  {
    num: 170,
    title: 'Qual é o nome do cachorro de Charlie Brown?',
    level: 'medium',
    correct: 4,
    answers: [
      'PLUTO',
      'FLOQUINHO',
      'BALEIA',
      'SNOOPY',
    ]
  },
  {
    num: 171,
    title: 'Qual presidente dos Estados Unidos foi ator de cinema?',
    level: 'medium',
    correct: 1,
    answers: [
      'RONALD REAGAN',
      'GEORGE BUSH',
      'RICHARD NIXON',
      'BILL CLINTON',
    ]
  },
  {
    num: 172,
    title: 'Como é chamado o templo sagrado dos judeus?',
    level: 'medium',
    correct: 3,
    answers: [
      'IGREJA',
      'CAPELA',
      'SINAGOGA',
      'CATEDRAL',
    ]
  },
  {
    num: 173,
    title: 'A que categoria pertence o cavalo-marinho?',
    level: 'medium',
    correct: 3,
    answers: [
      'MOLUSCO',
      'CRUSTÁCEO',
      'PEIXE',
      'MAMÍFERO',
    ]
  },
  {
    num: 174,
    title: 'O FBI é a polícia federal de qual país?',
    level: 'medium',
    correct: 2,
    answers: [
      'INGLATERRA',
      'ESTADOS UNIDOS',
      'CANADÁ',
      'FRANÇA',
    ]
  },
  {
    num: 175,
    title: 'Em que cidade brasileira fica o Instituto Tecnológico de Aeronáutica?',
    level: 'medium',
    correct: 3,
    answers: [
      'SÃO JOSÉ DO RIO PRETO',
      'SÃO JOSÉ DOS PINHAIS',
      'SÃO JOSÉ DOS CAMPOS',
      'SÃO JOSÉ DOS SANTOS',
    ]
  },
  {
    num: 176,
    title: 'Em que cidade foram realizados os jogos olímpicos de 2000?',
    level: 'medium',
    correct: 2,
    answers: [
      'MUNIQUE',
      'SIDNEY',
      'TÓQUIO',
      'ATLANTA',
    ]
  },
  {
    num: 177,
    title: 'Em que país fica a grande muralha com cerca de 6.400 quilômetros?',
    level: 'medium',
    correct: 2,
    answers: [
      'JAPÃO',
      'CHINA',
      'AFEGANISTÃO',
      'ÍNDIA',
    ]
  },
  {
    num: 178,
    title: 'Qual é o nome do Patriarca da Independência do Brasil?',
    level: 'medium',
    correct: 2,
    answers: [
      'TIRADENTES',
      'JOSÉ BONIFÁCIO',
      'DOM PEDRO II',
      'VASCO DA GAMA',
    ]
  },
  {
    num: 179,
    title: 'O nome América foi associado a qual desses nomes?',
    level: 'medium',
    correct: 3,
    answers: [
      'AMÉRICO DOS REIS',
      'AMÉRICO BRASILIENSE',
      'AMÉRICO VESPÚCIO',
      'JOSÉ AMÉRICO DA SILVA',
    ]
  },
  {
    num: 180,
    title: 'Qual é o médico que mais utiliza o eletrocardiograma?',
    level: 'medium',
    correct: 2,
    answers: [
      'ORTOPEDISTA',
      'CARDIOLOGISTA',
      'DERMATOLOGISTA',
      'ACUPUNTURISTA',
    ]
  },
  {
    num: 181,
    title: 'Qual o significado da sigla “AI”, no AI-5?',
    level: 'medium',
    correct: 2,
    answers: [
      'ATO INTENCIONAL',
      'ATO INSTITUCIONAL',
      'ATO INSPIRADOR',
      'ATO IDEALIZADOR',
    ]
  },
  {
    num: 182,
    title: 'Qual personagem bíblico dividiu as águas do Mar Vermelho?',
    level: 'medium',
    correct: 2,
    answers: [
      'ABRAÃO',
      'MOISÉS',
      'JOSUÉ',
      'ELIAS',
    ]
  },
  {
    num: 183,
    title: 'Qual dessas cobras não é venenosa?',
    level: 'medium',
    correct: 4,
    answers: [
      'URUTU',
      'CASCAVEL',
      'JARARACA',
      'PÍTON',
    ]
  },
  {
    num: 184,
    title: 'Que animal é usado no jogo de pólo?',
    level: 'medium',
    correct: 2,
    answers: [
      'CAMELO',
      'CAVALO',
      'MACACO',
      'CACHORRO',
    ]
  },
  {
    num: 185,
    title: 'Em que ano ocorreu o incêndio do edifício Joelma, na cidade de São Paulo?',
    level: 'medium',
    correct: 4,
    answers: [
      '1971',
      '1972',
      '1973',
      '1974',
    ]
  },
  {
    num: 186,
    title: 'Teresina é a capital de qual estado brasileiro?',
    level: 'medium',
    correct: 2,
    answers: [
      'TOCANTINS',
      'PIAUÍ',
      'ACRE',
      'PARANÁ',
    ]
  },
  {
    num: 187,
    title: 'Sobre qual cidade do Japão foi lançada a primeira bomba atômica?',
    level: 'medium',
    correct: 4,
    answers: [
      'TÓQUIO',
      'NAGASAKI',
      'OSAKA',
      'HIROXIMA',
    ]
  },
  {
    num: 188,
    title: 'O daltônico é deficiente em?',
    level: 'medium',
    correct: 3,
    answers: [
      'SENTIR DOR',
      'SENTIR PALADAR',
      'DIFERENCIAR CORES',
      'SENTIR CHEIRO',
    ]
  },
  {
    num: 189,
    title: 'Qual é o dia da Padroeira do Brasil?',
    level: 'medium',
    correct: 1,
    answers: [
      '12 DE OUTUBRO',
      '12 DE NOVEMBRO',
      '11 DE DEZEMBRO',
      'DE JANEIRO',
    ]
  },
  {
    num: 190,
    title: 'Qual é a capital do Estado de Mato Grosso do Sul?',
    level: 'medium',
    correct: 4,
    answers: [
      'CUIABÁ',
      'VÁRZEA GRANDE',
      'RONDONÓPOLIS',
      'CAMPO GRANDE',
    ]
  },
  {
    num: 191,
    title: 'Quantos são os continentes?',
    level: 'medium',
    correct: 1,
    answers: [
      'CINCO',
      'SETE',
      'TRÊS',
      'QUATRO',
    ]
  },
  {
    num: 192,
    title: 'Por que nome são conhecidas as pessoas do Pólo Ártico?',
    level: 'medium',
    correct: 2,
    answers: [
      'SULISTAS',
      'ESQUIMÓS',
      'NORTISTAS',
      'POLARES',
    ]
  },
  {
    num: 193,
    title: 'Qual é a fórmula química da água?',
    level: 'medium',
    correct: 3,
    answers: [
      'NACL',
      'H2',
      'H2O',
      'CO2',
    ]
  },
  {
    num: 194,
    title: 'Qual era a profissão de Cecília Meirelles?',
    level: 'medium',
    correct: 2,
    answers: [
      'CANTORA',
      'ESCRITORA',
      'ARQUITETA',
      'PIANISTA',
    ]
  },
  {
    num: 195,
    title: 'Em que cidade fica a sede da rede de TV BBC?',
    level: 'medium',
    correct: 1,
    answers: [
      'LONDRES',
      'NOVA YORK',
      'MONTREAL',
      'CALIFÓRNIA',
    ]
  },
  {
    num: 196,
    title: 'Camillo é o sobrenome de qual cantor nascido em Brotas?',
    level: 'medium',
    correct: 3,
    answers: [
      'LEONARDO',
      'CHITÃOZINHO',
      'DANIEL',
      'VINNY',
    ]
  },
  {
    num: 197,
    title: 'Por quantos integrantes era formado o grupo Beatles?',
    level: 'medium',
    correct: 2,
    answers: [
      'TRÊS',
      'QUATRO',
      'CINCO',
      'SEIS',
    ]
  },
  {
    num: 198,
    title: 'Qual foi o último imperador do Brasil?',
    level: 'medium',
    correct: 1,
    answers: [
      'D.PEDRO II',
      'D.PEDRO I',
      'D.JOÃO VI',
      'DEODORO DA FONSECA',
    ]
  },
  {
    num: 199,
    title: 'Quem dirigiu o filme “Central do Brasil”?',
    level: 'medium',
    correct: 4,
    answers: [
      'BRUNO BARRETO',
      'HÉCTOR BABENCO',
      'ARNALDO JABOR',
      'WALTER SALLES JÚNIOR',
    ]
  },
  {
    num: 200,
    title: 'O que significa a expressão e-mail?',
    level: 'medium',
    correct: 2,
    answers: [
      'CORREIO RÁPIDO',
      'CORREIO ELETRÔNICO',
      'CORREIO ELEGANTE',
      'CORREIO DE MÁQUINA',
    ]
  },
  {
    num: 201,
    title: 'Em qual espécie o macho choca os ovos e a fêmea procura alimento?',
    level: 'hard',
    correct: 3,
    answers: [
      'ANDORINHA',
      'PATO SELVAGEM',
      'PINGÜIM',
      'MARRECO',
    ]
  },
  {
    num: 202,
    title: 'Em qual país está localizado o “Muro das lamentações”?',
    level: 'hard',
    correct: 4,
    answers: [
      'ALEMANHA',
      'BRASIL',
      'VENEZUELA',
      'ISRAEL',
    ]
  },
  {
    num: 203,
    title: 'Qual desses países não fica na Ásia?',
    level: 'hard',
    correct: 4,
    answers: [
      'PAQUISTÃO',
      'JAPÃO',
      'TAILÂNDIA',
      'EGITO',
    ]
  },
  {
    num: 204,
    title: 'Qual desses astros de filmes de ação é belga?',
    level: 'hard',
    correct: 4,
    answers: [
      'ARNOLD SCHWARZENEGGER',
      'SYLVESTER STALLONE',
      'STEVEN SEAGAL',
      'JEAN CLAUDE VAN DAMME',
    ]
  },
  {
    num: 205,
    title: 'Onde foi conduzida a vitória das forças aliadas na Segunda Guerra Mundial?',
    level: 'hard',
    correct: 2,
    answers: [
      'CANNES',
      'NORMANDIA',
      'CAPRI',
      'MARSELHA',
    ]
  },
  {
    num: 206,
    title: 'Onde nasceu Van Gogh, o grande pintor impressionista?',
    level: 'hard',
    correct: 4,
    answers: [
      'POLÔNIA',
      'FRANÇA',
      'ITÁLIA',
      'HOLANDA',
    ]
  },
  {
    num: 207,
    title: 'Qual é a primeira letra do alfabeto grego?',
    level: 'hard',
    correct: 3,
    answers: [
      'DELTA',
      'BETA',
      'ALFA',
      'GAMA',
    ]
  },
  {
    num: 208,
    title: 'Qual presidente brasileiro instituiu o AI-5?',
    level: 'hard',
    correct: 1,
    answers: [
      'COSTA E SILVA',
      'ERNESTO GEISEL',
      'JOÃO FIGUEIREDO',
      'ITAMAR FRANCO',
    ]
  },
  {
    num: 209,
    title: 'O que significa literalmente Perestroika?',
    level: 'hard',
    correct: 3,
    answers: [
      'CONVERSÃO',
      'INVOLUÇÃO',
      'REESTRUTURAÇÃO',
      'REGRESSÃO',
    ]
  },
  {
    num: 210,
    title: 'Qual desses quatro pesos é o mais leve?',
    level: 'hard',
    correct: 2,
    answers: [
      '10 ONÇAS',
      '10 GRAMAS',
      '10 QUILOS',
      '10 LIBRAS',
    ]
  },
  {
    num: 211,
    title: 'Brahma é o deus de que religião?',
    level: 'hard',
    correct: 1,
    answers: [
      'HINDUÍSMO',
      'XINTOÍSMO',
      'BUDISMO',
      'ISLAMISMO',
    ]
  },
  {
    num: 212,
    title: 'Os nazistas foram julgados em:',
    level: 'hard',
    correct: 2,
    answers: [
      'BERLIM',
      'NUREMBERGUE',
      'MUNIQUE',
      'PARIS',
    ]
  },
  {
    num: 213,
    title: 'Que ramo da pecuária ocupa-se de bodes e cabras?',
    level: 'hard',
    correct: 2,
    answers: [
      'ASININO',
      'CAPRINO',
      'BUFALINO',
      'MUAR',
    ]
  },
  {
    num: 214,
    title: 'Qual oceano tem o maior volume de água?',
    level: 'hard',
    correct: 2,
    answers: [
      'ATLÂNTICO',
      'PACÍFICO',
      'ÍNDICO',
      'ÁRTICO',
    ]
  },
  {
    num: 215,
    title: 'Qual foi o último presidente militar do Brasil?',
    level: 'hard',
    correct: 2,
    answers: [
      'FERNANDO COLLOR',
      'JOÃO FIGUEIREDO',
      'TANCREDO NEVES',
      'JOÃO GOULART',
    ]
  },
  {
    num: 216,
    title: 'Que conflito ideológico envolveu os EUA e a União Soviética?',
    level: 'hard',
    correct: 1,
    answers: [
      'GUERRA FRIA',
      'GUERRA DO VIETNÃ',
      'GUERRA NAS ESTRELAS',
      'GUERRA DA CORÉIA',
    ]
  },
  {
    num: 217,
    title: 'O trapézio é um músculo que está situado:',
    level: 'hard',
    correct: 2,
    answers: [
      'NO PESCOÇO',
      'NO OMBRO',
      'NA CABEÇA',
      'NO BRAÇO',
    ]
  },
  {
    num: 218,
    title: 'Quem escreveu o livro “A sangue frio” em 1966?',
    level: 'hard',
    correct: 1,
    answers: [
      'TRUMAN CAPOTE',
      'HENRY JAMES',
      'JOHN STEINBECK',
      'TONI MORRISON',
    ]
  },
  {
    num: 219,
    title: 'Quem escreveu “Ulisses” em 1922?',
    level: 'hard',
    correct: 4,
    answers: [
      'ERNEST HEMINGWAY',
      'MARCEL PROUST',
      'T.S. ELLIOT',
      'JAMES JOYCE',
    ]
  },
  {
    num: 220,
    title: 'Qual o símbolo químico do radônio?',
    level: 'hard',
    correct: 3,
    answers: [
      'Rr',
      'Rd',
      'Rn',
      'Ro',
    ]
  },
  {
    num: 221,
    title: 'O que são meninges?',
    level: 'hard',
    correct: 3,
    answers: [
      'CÉLULAS',
      'NERVOS',
      'MEMBRANAS',
      'MÚSCULOS',
    ]
  },
  {
    num: 222,
    title: 'Qual produto gerou guerras e conflitos no século XX?',
    level: 'hard',
    correct: 2,
    answers: [
      'ÁLCOOL',
      'PETRÓLEO',
      'OURO',
      'ALUMÍNIO',
    ]
  },
  {
    num: 223,
    title: 'Como é chamada a bola de gelo e poeira que orbita em torno do sol?',
    level: 'hard',
    correct: 1,
    answers: [
      'COMETA',
      'METEORITO',
      'CAMADA DE OZÔNIO',
      'ESTRELA D’ALVA',
    ]
  },
  {
    num: 224,
    title: 'O confucionismo é uma filosofia de qual nacionalidade?',
    level: 'hard',
    correct: 3,
    answers: [
      'INDIANA',
      'JAPONESA',
      'CHINESA',
      'COREANA',
    ]
  },
  {
    num: 225,
    title: 'Qual a ciência que estuda a distribuição dos animais?',
    level: 'hard',
    correct: 2,
    answers: [
      'ZOOTERAPIA',
      'ZOOGEOGRAFIA',
      'ZODÍACO',
      'ZOOMETRIA',
    ]
  },
  {
    num: 226,
    title: 'A eletrônica é parte de qual ciência?',
    level: 'hard',
    correct: 1,
    answers: [
      'FÍSICA',
      'BIOLOGIA',
      'QUÍMICA',
      'BOTÂNICA',
    ]
  },
  {
    num: 227,
    title: 'A Bélgica é:',
    level: 'hard',
    correct: 2,
    answers: [
      'UMA REPÚBLICA',
      'UMA MONARQUIA CONSTITUCIONAL',
      'UM EMIRADO',
      'UM PRINCIPADO',
    ]
  },
  {
    num: 228,
    title: 'Que parte do corpo humano é infectada pela cólera?',
    level: 'hard',
    correct: 2,
    answers: [
      'GARGANTA',
      'INTESTINO',
      'PULMÕES',
      'RINS',
    ]
  },
  {
    num: 229,
    title: 'Que figura mitológica é conhecida por sua força extraordinária?',
    level: 'hard',
    correct: 4,
    answers: [
      'ÁTILA',
      'MINOTAURO',
      'PERSEU',
      'HÉRCULES',
    ]
  },
  {
    num: 230,
    title: 'A união do espermatozóide com o óvulo origina uma célula chamada:',
    level: 'hard',
    correct: 1,
    answers: [
      'ZIGOTO',
      'BIGOTO',
      'FETO',
      'GAROTO',
    ]
  },
  {
    num: 231,
    title: 'A que país pertence a ilha de Terra Nova?',
    level: 'hard',
    correct: 3,
    answers: [
      'ESTADOS UNIDOS',
      'DINAMARCA',
      'CANADÁ',
      'FRANÇA',
    ]
  },
  {
    num: 232,
    title: 'Em que país você pode gastar rublos?',
    level: 'hard',
    correct: 2,
    answers: [
      'HOLANDA',
      'RÚSSIA',
      'ESPANHA',
      'ÁFRICA DO SUL',
    ]
  },
  {
    num: 233,
    title: 'Na criação do Estado do Tocantins, que estado teve o território reduzido?',
    level: 'hard',
    correct: 1,
    answers: [
      'GOIÁS',
      'MATO GROSSO',
      'PARÁ',
      'MARANHÃO',
    ]
  },
  {
    num: 234,
    title: 'De quem é este verso: “A praça é do povo, como o céu é do condor”?',
    level: 'hard',
    correct: 4,
    answers: [
      'TOBIAS BARRETO',
      'DORIVAL CAIMI',
      'MACHADO DE ASSIS',
      'CASTRO ALVES',
    ]
  },
  {
    num: 235,
    title: 'Que nome recebe a foz de um rio que se abre para o mar?',
    level: 'hard',
    correct: 4,
    answers: [
      'ALAGADO',
      'MANGUEZAL',
      'PÂNTANO',
      'ESTUÁRIO',
    ]
  },
  {
    num: 236,
    title: '“Arábica” e “robusta” são tipos de quê?',
    level: 'hard',
    correct: 2,
    answers: [
      'UVA',
      'CAFÉ',
      'MELÃO',
      'LARANJA',
    ]
  },
  {
    num: 237,
    title: 'Em que ano Ayrton Senna venceu o primeiro campeonato de Fórmula 1?',
    level: 'hard',
    correct: 4,
    answers: [
      '1987',
      '1990',
      '1985',
      '1988',
    ]
  },
  {
    num: 238,
    title: 'Qual é a menor República do mundo?',
    level: 'hard',
    correct: 2,
    answers: [
      'MÔNACO',
      'SAN MARINO',
      'NOVA ZELÂNDIA',
      'CHINA',
    ]
  },
  {
    num: 239,
    title: 'Que símbolo está desenhado no centro da bandeira Argentina?',
    level: 'hard',
    correct: 1,
    answers: [
      'SOL',
      'LUA',
      'ESTRELA',
      'FOICE E MARTELO',
    ]
  },
  {
    num: 240,
    title: 'De quem é a frase ”Penso, logo existo”?',
    level: 'hard',
    correct: 4,
    answers: [
      'PLATÃO',
      'JÚLIO VERNE',
      'ARISTÓTELES',
      'RENÉ DESCARTES',
    ]
  },
  {
    num: 241,
    title: 'Quem construiu o primeiro telescópio astronômico completo?',
    level: 'hard',
    correct: 4,
    answers: [
      'CYRUS MCCORMICK',
      'THOMAS EDISON',
      'MICHELANGELO',
      'GALILEU GALILEI',
    ]
  },
  {
    num: 242,
    title: 'Em que parte do nosso corpo está o úmero?',
    level: 'hard',
    correct: 1,
    answers: [
      'BRAÇO',
      'PERNA',
      'QUADRIL',
      'COLUNA',
    ]
  },
  {
    num: 243,
    title: 'A quem se atribui a frase “Eu sou o Estado”?',
    level: 'hard',
    correct: 1,
    answers: [
      'LUIZ XIV',
      'LUIZ XV',
      'LUIZ XVI',
      'NAPOLEÃO BONAPARTE',
    ]
  },
  {
    num: 244,
    title: 'Qual o nome verdadeiro do jogador de futebol conhecido com Zico?',
    level: 'hard',
    correct: 1,
    answers: [
      'ARTHUR ANTUNES COIMBRA',
      'ARTHUR ALVES PINTO',
      'ARTHUR DA TÁVOLA',
      'ARTHUR DOS SANTOS',
    ]
  },
  {
    num: 245,
    title: 'O que significa deprecar?',
    level: 'hard',
    correct: 4,
    answers: [
      'RENEGAR',
      'SUJEITAR',
      'DESMAIAR',
      'PEDIR',
    ]
  },
  {
    num: 246,
    title: 'Que cidade foi capital do Império Inca?',
    level: 'hard',
    correct: 4,
    answers: [
      'LA PAZ',
      'BUENOS AIRES',
      'BOGOTÁ',
      'CUZCO',
    ]
  },
  {
    num: 247,
    title: 'Com que outro nome é conhecido o Cabo Canaveral?',
    level: 'hard',
    correct: 3,
    answers: [
      'CABO JEFFERSON',
      'CABO LINCOLN',
      'CABO KENNEDY',
      'CABO REAGAN',
    ]
  },
  {
    num: 248,
    title: 'Que significa o prefixo exo?',
    level: 'hard',
    correct: 3,
    answers: [
      'DENTRO DE',
      'DEBAIXO DE',
      'FORA DE',
      'ATRÁS DE',
    ]
  },
  {
    num: 249,
    title: 'Bill Clinton nasceu em que cidade?',
    level: 'hard',
    correct: 3,
    answers: [
      'LOS ANGELES',
      'CHICAGO',
      'HOPE',
      'DALLAS',
    ]
  },
  {
    num: 250,
    title: 'Qual foi o material utilizado na construção do Partenon de Atenas?',
    level: 'hard',
    correct: 1,
    answers: [
      'MÁRMORE',
      'GRANITO',
      'GESSO',
      'QUARTZO',
    ]
  },
  {
    num: 251,
    title: 'Que trópico atravessa o Saara?',
    level: 'hard',
    correct: 3,
    answers: [
      'CAPRICÓRNIO',
      'VIRGEM',
      'CÂNCER',
      'LEÃO',
    ]
  },
  {
    num: 252,
    title: 'Quem foi aluno de Platão e tutor de Alexandre, o Grande?',
    level: 'hard',
    correct: 3,
    answers: [
      'PITÁGORAS',
      'DIDEROT',
      'ARISTÓTELES',
      'GALILEU GALILEI',
    ]
  },
  {
    num: 253,
    title: '“Guernica” é uma tela de qual pintor?',
    level: 'hard',
    correct: 3,
    answers: [
      'MONET',
      'RENOIR',
      'PICASSO',
      'LEONARDO DA VINCI',
    ]
  },
  {
    num: 254,
    title: 'Em que ano foi inaugurada a estátua do Cristo Redentor no Rio de Janeiro?',
    level: 'hard',
    correct: 2,
    answers: [
      '1921',
      '1931',
      '1941',
      '1951',
    ]
  },
  {
    num: 255,
    title: 'Qual é a religião majoritária da Turquia?',
    level: 'hard',
    correct: 2,
    answers: [
      'BUDISTA',
      'ISLÂMICA',
      'CATÓLICA',
      'PROTESTANTE',
    ]
  },
  {
    num: 256,
    title: 'Onde estão os sepulcros de Michelangelo, Maquiavel e Galileu?',
    level: 'hard',
    correct: 2,
    answers: [
      'MILÃO',
      'FLORENÇA',
      'VENEZA',
      'GÊNOVA',
    ]
  },
  {
    num: 257,
    title: 'A que país deve-se viajar para subir o Monte Parnaso?',
    level: 'hard',
    correct: 3,
    answers: [
      'ITÁLIA',
      'FRANÇA',
      'GRÉCIA',
      'TURQUIA',
    ]
  },
  {
    num: 258,
    title: 'A que letra do nosso alfabeto corresponde a letra grega tau?',
    level: 'hard',
    correct: 4,
    answers: [
      'F',
      'H',
      'J',
      'T',
    ]
  },
  {
    num: 259,
    title: 'Em qual guerra lutou Paul Newman pela marinha americana?',
    level: 'hard',
    correct: 4,
    answers: [
      'PRIMEIRA GUERRA MUNDIAL',
      'GUERRA DO VIETNÃ',
      'GUERRA DA CORÉIA',
      'SEGUNDA GUERRA MUNDIAL',
    ]
  },
  {
    num: 260,
    title: 'O que é talude?',
    level: 'hard',
    correct: 3,
    answers: [
      'AVALANCHE DE NEVE',
      'FUNGO',
      'INCLINAÇÃO DE TERRENO',
      'RITO ISLÂMICO',
    ]
  },
  {
    num: 261,
    title: 'Qual destas palavras é sinônimo de cabal?',
    level: 'hard',
    correct: 2,
    answers: [
      'BAIXO',
      'PERFEITO',
      'ATREVIDO',
      'ENFERMO',
    ]
  },
  {
    num: 262,
    title: 'Qual desses poetas foi indicado para o prêmio Nobel de literatura?',
    level: 'hard',
    correct: 4,
    answers: [
      'MÁRIO QUINTANA',
      'MANUEL BANDEIRA',
      'VINÍCIUS DE MORAIS',
      'CARLOS DRUMMOND DE ANDRADE',
    ]
  },
  {
    num: 263,
    title: 'Qual foi a locomotiva a vapor que trafegou na Estrada de Ferro Mauá em 1854?',
    level: 'hard',
    correct: 4,
    answers: [
      'SANTA-FÉ',
      'LOCO-BREQUE',
      'AMERICAN',
      'BARONESA',
    ]
  },
  {
    num: 264,
    title: 'O que é palato?',
    level: 'hard',
    correct: 4,
    answers: [
      'BARRIGA DA PERNA',
      'MENINA DOS OLHOS',
      'LÍNGUA',
      'CÉU DA BOCA',
    ]
  },
  {
    num: 265,
    title: 'O que construía Stradivarius?',
    level: 'hard',
    correct: 2,
    answers: [
      'CASAS',
      'VIOLINOS',
      'ARMAS',
      'ESTRADAS',
    ]
  },
  {
    num: 266,
    title: 'Qual atleta foi desclassificado por uso de doping nas Olimpíadas de 1988?',
    level: 'hard',
    correct: 2,
    answers: [
      'MIKE POWELL',
      'BEN JOHNSON',
      'CARL LEWIS',
      'LINFORD CHRISTIE',
    ]
  },
  {
    num: 267,
    title: 'Qual é o exame que emite ondas sonoras para visualizar os órgãos?',
    level: 'hard',
    correct: 2,
    answers: [
      'XEROGRAFIA',
      'ULTRA-SONOGRAFIA',
      'FOTOGRAFIA',
      'RADIOGRAFIA',
    ]
  },
  {
    num: 268,
    title: 'Qual é a especialidade dos profissionais que analisam os sulcos e marcas de uma bala?',
    level: 'hard',
    correct: 2,
    answers: [
      'BALEAGEM',
      'BALÍSTICA',
      'LOGÍSTICA',
      'IMPRESSÃO DIGITAL',
    ]
  },
  {
    num: 269,
    title: 'Qual metal possui o símbolo Hg?',
    level: 'hard',
    correct: 3,
    answers: [
      'FERRO',
      'AÇO',
      'MERCÚRIO',
      'OURO',
    ]
  },
  {
    num: 270,
    title: 'Qual é o nome dado a um conjunto de sinos?',
    level: 'hard',
    correct: 2,
    answers: [
      'CORRIMÃO',
      'CARRILHÃO',
      'BADALADA',
      'CORSELETE',
    ]
  },
  {
    num: 271,
    title: 'Qual é a altura oficial do aro na cesta no basquete?',
    level: 'hard',
    correct: 1,
    answers: [
      '3,05 METROS',
      '2,97 METROS',
      '3,10 METROS',
      '3,00 METROS',
    ]
  },
  {
    num: 272,
    title: 'Qual é o apelido do time da Ponte Preta?',
    level: 'hard',
    correct: 4,
    answers: [
      'FEITICEIRA',
      'RAPOSA',
      'BRUXA',
      'MACACA',
    ]
  },
  {
    num: 273,
    title: 'Quem foi chamado de Águia de Haia?',
    level: 'hard',
    correct: 3,
    answers: [
      'JORGE AMADO',
      'EÇA DE QUEIROZ',
      'RUI BARBOSA',
      'RAIMUNDO CORRÊA',
    ]
  },
  {
    num: 274,
    title: 'Quem escreveu “Dom Quixote”?',
    level: 'hard',
    correct: 2,
    answers: [
      'ESPINOZA',
      'MIGUEL DE CERVANTES',
      'CARLOS CONTE',
      'ANGEL MORITA',
    ]
  },
  {
    num: 275,
    title: 'Qual a origem da palavra folclore?',
    level: 'hard',
    correct: 2,
    answers: [
      'HOLANDESA',
      'INGLESA',
      'FRANCESA',
      'BRASILEIRA',
    ]
  },
  {
    num: 276,
    title: 'Quem ganhou a 1ª medalha de ouro olímpico para o Brasil?',
    level: 'hard',
    correct: 2,
    answers: [
      'AFRANIO ANTONIO COSTA',
      'GUILHERME PARAENSE',
      'FERNANDO SOLEDADE',
      'SEBASTIÃO WOLF',
    ]
  },
  {
    num: 277,
    title: 'Qual é o quarto planeta do sistema solar?',
    level: 'hard',
    correct: 4,
    answers: [
      'JÚPITER',
      'VÊNUS',
      'TERRA',
      'MARTE',
    ]
  },
  {
    num: 278,
    title: 'Que pintor francês consagrou a mulher taitiana em suas telas?',
    level: 'hard',
    correct: 2,
    answers: [
      'RENOIR',
      'GAUGUIN',
      'CÉZANNE',
      'MONET',
    ]
  },
  {
    num: 279,
    title: 'O que é glicose?',
    level: 'hard',
    correct: 2,
    answers: [
      'AMINOÁCIDO',
      'HIDRATO DE CARBONO',
      'LIPÍDIO',
      'PROTEÍNA',
    ]
  },
  {
    num: 280,
    title: 'Qual destas seleções nunca jogou uma final de copa?',
    level: 'hard',
    correct: 0,
    answers: [
      'HOLANDA',
      'SUÉCIA',
      'HUNGRIA',
      'FRANÇA',
    ]
  },
  {
    num: 281,
    title: 'Qual foi a primeira mulher a entrar no “hall da fama” do rock and roll?',
    level: 'hard',
    correct: 3,
    answers: [
      'JANIS JOPLIN',
      'CAROLE KING',
      'ARETHA FRANKLIN',
      'DIANA ROSS',
    ]
  },
  {
    num: 282,
    title: 'Nova Caledônia faz parte da:',
    level: 'hard',
    correct: 2,
    answers: [
      'MICRONÉSIA',
      'MELANÉSIA',
      'POLINÉSIA',
      'INDONÉSIA',
    ]
  },
  {
    num: 283,
    title: 'Qual é o país que tem uma árvore estampada na bandeira?',
    level: 'hard',
    correct: 3,
    answers: [
      'EGITO',
      'CANADÁ',
      'LÍBANO',
      'MARROCOS',
    ]
  },
  {
    num: 284,
    title: 'O que procurava Juan Ponce de Leon quando descobriu a Flórida?',
    level: 'hard',
    correct: 2,
    answers: [
      'A CIDADE PERDIDA DE OURO',
      'A FONTE DA JUVENTUDE',
      'UNICÓRNIOS',
      'SEU GATO',
    ]
  },
  {
    num: 285,
    title: 'As Ilhas Malvinas também são chamadas de:',
    level: 'hard',
    correct: 4,
    answers: [
      'STANLEY',
      'WEDELLS',
      'MEDANOSA',
      'FALKLAND',
    ]
  },
  {
    num: 286,
    title: 'Qual destes países não se situa no Equador?',
    level: 'hard',
    correct: 3,
    answers: [
      'QUÊNIA',
      'EQUADOR',
      'CHILE',
      'INDONÉSIA',
    ]
  },
  {
    num: 287,
    title: 'Em que país Leonardo da Vinci viveu seus últimos dias?',
    level: 'hard',
    correct: 3,
    answers: [
      'ESPANHA',
      'HOLANDA',
      'FRANÇA',
      'ITÁLIA',
    ]
  },
  {
    num: 288,
    title: 'A que país pertence a Groenlândia?',
    level: 'hard',
    correct: 1,
    answers: [
      'DINAMARCA',
      'INGLATERRA',
      'NORUEGA',
      'ESTADOS UNIDOS',
    ]
  },
  {
    num: 289,
    title: 'Pablo Picasso foi um dos criadores do:',
    level: 'hard',
    correct: 1,
    answers: [
      'CUBISMO',
      'SURREALISMO',
      'IMPRESSIONISMO',
      'REALISMO',
    ]
  },
  {
    num: 290,
    title: 'Como se chama o explorador de grutas e cavernas?',
    level: 'hard',
    correct: 1,
    answers: [
      'ESPELEÓLOGO',
      'AGROSTÓLOGO',
      'PSICÓLOGO',
      'CAMPANÓLOGO',
    ]
  },
  {
    num: 291,
    title: 'Qual o sistema de transporte mais utilizado no Brasil?',
    level: 'hard',
    correct: 4,
    answers: [
      'FERROVIÁRIO',
      'AÉREO',
      'HIDROVIÁRIO',
      'RODOVIÁRIO',
    ]
  },
  {
    num: 292,
    title: 'A baleia está classificada em qual grupo de mamíferos?',
    level: 'hard',
    correct: 1,
    answers: [
      'CETÁCEOS',
      'FELINOS',
      'SIRÊNIOS',
      'CARNÍVOROS',
    ]
  },
  {
    num: 293,
    title: 'Qual é a maior ilha da Europa?',
    level: 'hard',
    correct: 1,
    answers: [
      'GRÃ-BRETANHA',
      'IRLANDA',
      'ISLÂNDIA',
      'SICÍLIA',
    ]
  },
  {
    num: 294,
    title: 'O filme “A noviça rebelde”, premiado com 5 Oscars, foi estrelado por:',
    level: 'hard',
    correct: 3,
    answers: [
      'JUDY GARLAND',
      'SHIRLEY TEMPLE',
      'JULIE ANDREWS',
      'DORIS DAY',
    ]
  },
  {
    num: 295,
    title: 'Qual foi o primeiro presidente do Brasil eleito pelo povo?',
    level: 'hard',
    correct: 2,
    answers: [
      'GETÚLIO VARGAS',
      'PRUDENTE DE MORAES',
      'WASHINGTON LUÍS',
      'TANCREDO NEVES',
    ]
  },
  {
    num: 296,
    title: 'O que o pintor Claude Monet representou em suas telas?',
    level: 'hard',
    correct: 1,
    answers: [
      'OS JARDINS DE GIVERNY',
      'OS BISTRÔS DE PARIS',
      'CENAS DO MOULIN ROUGE',
      'PAISAGENS DA PROVENÇA',
    ]
  },
  {
    num: 297,
    title: 'Miró, Picasso e Salvador Dalí eram pintores:',
    level: 'hard',
    correct: 3,
    answers: [
      'ITALIANOS',
      'PORTUGUESES',
      'ESPANHÓIS',
      'CHILENOS',
    ]
  },
  {
    num: 298,
    title: 'Qual foi o piloto de Fórmula 1 que conquistou o título de campeão mundial cinco vezes?',
    level: 'hard',
    correct: 4,
    answers: [
      'JACQUES STEWART',
      'ALAIN PROST',
      'AYRTON SENNA',
      'J. MANOEL FANGIO',
    ]
  },
  {
    num: 299,
    title: 'Como o rei francês Luis XVI e sua esposa Maria Antonieta morreram?',
    level: 'hard',
    correct: 3,
    answers: [
      'ENFORCADOS',
      'FUZILADOS',
      'GUILHOTINADOS',
      'QUEIMADOS',
    ]
  },
  {
    num: 300,
    title: 'Como é chamada a gravura impressa sobre pranchas de madeira?',
    level: 'hard',
    correct: 3,
    answers: [
      'MATEROGRAFIA',
      'LITOGRAFIA',
      'XILOGRAFIA',
      'SERIGRAFIA',
    ]
  }
]
export default questions