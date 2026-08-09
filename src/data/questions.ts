export interface Alternative {
  letter: string;
  text: string;
}

export interface Question {
  idx: number;
  number: number;
  group: string;
  question: string;
  alternatives: Alternative[];
  answer: string;
  imageUrl?: string;
  explanation?: string;
}

export const QUESTIONS: Question[] = [
  {
    "idx": 0,
    "number": 1,
    "group": "Comunicação e relações interpessoais",
    "question": "Qual destes comportamentos é aceitável num motorista de\nTVDE?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Falar com os passageiros durante a viagem."
      },
      {
        "letter": "B",
        "text": "Insultar os outros condutores."
      },
      {
        "letter": "C",
        "text": "Utilizar palavras impróprias durante a conversa com os passageiros."
      }
    ],
    "answer": "A",
    "explanation": "Na relação profissional com os passageiros, o motorista TVDE deve manter uma atitude cortês, educada e prestável. Comunicação verbal respeitosa durante a viagem (como saudar o passageiro, confirmar o destino e responder a dúvidas) é um comportamento plenamente aceitável e desejável, ao contrário do uso de linguagem imprópria ou agressividade no trânsito. A opção correta para a Questão 1 é a A: \"Falar com os passageiros durante a viagem.\""
  },
  {
    "idx": 1,
    "number": 2,
    "group": "Comunicação e relações interpessoais",
    "question": "Quando se pode dizer que a comunicação tem sucesso?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Quando a mensagem é simples."
      },
      {
        "letter": "B",
        "text": "Quando a mensagem é complexa."
      },
      {
        "letter": "C",
        "text": "Quando a mensagem é recebida."
      },
      {
        "letter": "D",
        "text": "Quando a mensagem é compreendida."
      }
    ],
    "answer": "D",
    "explanation": "A comunicação não é um ato unilateral de mero envio ou receção física da mensagem. Para que o processo de comunicação atinja o seu objetivo com eficácia (sucesso comunicacional), o recetor deve desprover de ambiguidades a mensagem e compreender exatamente o seu significado e intenção transmitidos pelo emissor. A opção correta para a Questão 2 é a D: \"Quando a mensagem é compreendida.\""
  },
  {
    "idx": 2,
    "number": 3,
    "group": "Comunicação e relações interpessoais",
    "question": "O recetor descodifica a mensagem de acordo com:",
    "alternatives": [
      {
        "letter": "A",
        "text": "As suas perceções."
      },
      {
        "letter": "B",
        "text": "As perceções do emissor."
      },
      {
        "letter": "C",
        "text": "Os seus interesses."
      },
      {
        "letter": "D",
        "text": "Com o sentido das palavras."
      }
    ],
    "answer": "A",
    "explanation": "No processo de descodificação, o recetor interpreta os símbolos e os dados recebidos filtrando-os através do seu próprio quadro de referência, experiências, valores e perceções pessoais. Por essa razão, a interpretação da mensagem depende diretamente das perceções de quem a recebe. A opção correta para a Questão 3 é a A: \"As suas perceções.\""
  },
  {
    "idx": 3,
    "number": 4,
    "group": "Comunicação e relações interpessoais",
    "question": "Quando se cria uma mensagem, o que se pretende é:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Atingir o objetivo."
      },
      {
        "letter": "B",
        "text": "Estar em consonância com o recetor."
      },
      {
        "letter": "C",
        "text": "Simplificar a tarefa de quem recebe."
      },
      {
        "letter": "D",
        "text": "Adaptar o nível de informação."
      }
    ],
    "answer": "A",
    "explanation": "Toda a comunicação intencional é orientada por uma finalidade (persuadir, informar, orientar ou solicitar). A criação de uma mensagem serve essencialmente para atingir o objetivo pretendido pelo emissor na interação com o interlocutor. A opção correta para a Questão 4 é a A: \"Atingir o objetivo.\""
  },
  {
    "idx": 4,
    "number": 5,
    "group": "Comunicação e relações interpessoais",
    "question": "Para ser considerado bom ouvinte deve:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Evitar contato visual com quem está a falar."
      },
      {
        "letter": "B",
        "text": "Evitar a comunicação frente a frente."
      },
      {
        "letter": "C",
        "text": "Dizer o que pensa sobre o assunto."
      },
      {
        "letter": "D",
        "text": "Evitar emitir opiniões."
      }
    ],
    "answer": "D",
    "explanation": "A escuta ativa exige neutralidade e foco no interlocutor. Um bom ouvinte não interrompe precipitadamente nem impõe os seus julgamentos ou opiniões enquanto a outra pessoa se exprime, permitindo a compreensão integral da mensagem do emissor. A opção correta para a Questão 5 é a D: \"Evitar emitir opiniões.\""
  },
  {
    "idx": 5,
    "number": 6,
    "group": "Comunicação e relações interpessoais",
    "question": "Qual o melhor meio formal de comunicação tendo em vista\nassegurar a sua eficácia?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Correio eletrónico."
      },
      {
        "letter": "B",
        "text": "Videoconferência."
      },
      {
        "letter": "C",
        "text": "Telefone ou fax."
      },
      {
        "letter": "D",
        "text": "Reunião presencial."
      }
    ],
    "answer": "A",
    "explanation": "O correio eletrónico (email) é amplamente reconhecido como o meio formal de comunicação escrita por excelência no contexto profissional, pois permite registar por escrito, arquivar, estruturar detalhadamente as informações e comprovar o envio e receção de dados de forma transparente e eficaz. A opção correta para a Questão 6 é a A: \"Correio eletrónico.\""
  },
  {
    "idx": 6,
    "number": 7,
    "group": "Comunicação e relações interpessoais",
    "question": "Qual a melhor forma de recompensar o desempenho\nprofissional?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Melhoria das condições de trabalho."
      },
      {
        "letter": "B",
        "text": "Através de incentivo verbal."
      },
      {
        "letter": "C",
        "text": "Através de reconhecimento a nível da organização entre os outros\nempregados."
      }
    ],
    "answer": "A",
    "explanation": "A melhoria sustentável das condições de trabalho (equipamentos, ambiente, ergonomia, segurança e bem-estar) constitui a recompensa de desempenho mais sólida e motivadora para o profissional, promovendo a produtividade, satisfação e retenção a longo prazo na organização. A opção correta para a Questão 7 é a A: \"Melhoria das condições de trabalho.\""
  },
  {
    "idx": 7,
    "number": 8,
    "group": "Comunicação e relações interpessoais",
    "question": "Quando pretende iniciar uma conversa deve adaptar a\nmensagem em função:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Da contribuição que pretende receber."
      },
      {
        "letter": "B",
        "text": "Dos objetivos que pretende atingir."
      },
      {
        "letter": "C",
        "text": "Do entusiasmo que coloca no tema."
      },
      {
        "letter": "D",
        "text": "Do interlocutor."
      }
    ],
    "answer": "D",
    "explanation": "Para que a comunicação seja fluida e compreendida, a linguagem, o tom e a estrutura da mensagem devem ser rigorosamente adaptados às características, ao perfil e ao nível de compreensão do interlocutor (recetor). A opção correta para a Questão 8 é a D: \"Do interlocutor.\""
  },
  {
    "idx": 8,
    "number": 9,
    "group": "Comunicação e relações interpessoais",
    "question": "Muitos dos problemas profissionais surgem por falhas de\ncomunicação. A mais importante é:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Não saber ouvir."
      },
      {
        "letter": "B",
        "text": "Não ser inteligente."
      },
      {
        "letter": "C",
        "text": "Ser de classe social diferente."
      },
      {
        "letter": "D",
        "text": "Ser de raça e cultura diferente."
      }
    ],
    "answer": "A",
    "explanation": "A ausência de escuta ativa — ou seja, \"não saber ouvir\" — é a causa primária da maioria dos conflitos e falhas operacionais no meio profissional. Sem ouvir atentamente o interlocutor, geram-se mal-entendidos, interpretações erradas e respostas desadequadas. A opção correta para a Questão 9 é a A: \"Não saber ouvir.\""
  },
  {
    "idx": 9,
    "number": 10,
    "group": "Comunicação e relações interpessoais",
    "question": "O aspeto mais importante para se obter sucesso quando se\npretende estabelecer comunicação é:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Fazer perguntas para esclarecer o ponto de vista da outra pessoa."
      },
      {
        "letter": "B",
        "text": "Ser recetivo ao conteúdo e às emoções da outra pessoa."
      },
      {
        "letter": "C",
        "text": "Ouvir para compreender."
      },
      {
        "letter": "D",
        "text": "Demonstrar sempre concordância."
      }
    ],
    "answer": "B",
    "explanation": "A empatia e a abertura comunicacional — traduzidas na capacidade de ser recetivo tanto ao conteúdo intelectual como à carga emocional transmitida pelo interlocutor — são fundamentais para construir confiança e garantir o sucesso no relacionamento interpessoal. A opção correta para a Questão 10 é a B: \"Ser recetivo ao conteúdo e às emoções da outra pessoa.\""
  },
  {
    "idx": 10,
    "number": 11,
    "group": "Comunicação e relações interpessoais",
    "question": "Apesar de existirem vários estilos de comunicação devemos\nutilizar preferencialmente:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Passivo."
      },
      {
        "letter": "B",
        "text": "Agressivo."
      },
      {
        "letter": "C",
        "text": "Assertivo."
      }
    ],
    "answer": "C",
    "explanation": "O estilo assertivo de comunicação é a postura profissional ideal. Permite exprimir ideias, opiniões, direitos e limites de forma transparente, direta e decidida, sem cair no desrespeito ou agressividade (estilo agressivo) nem na submissão ou omissão (estilo passivo). A opção correta para a Questão 11 é a C: \"Assertivo.\""
  },
  {
    "idx": 11,
    "number": 12,
    "group": "Comunicação e relações interpessoais",
    "question": "O motorista, no exercício da sua atividade, não pode:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Fumar."
      },
      {
        "letter": "B",
        "text": "Escutar atentamente o cliente"
      },
      {
        "letter": "C",
        "text": "Ser cordial"
      },
      {
        "letter": "D",
        "text": "Estar atento ao interlocutor"
      }
    ],
    "answer": "A",
    "explanation": "De acordo com a Lei n.º 37/2007 (Lei do Tabaco em Portugal) e a regulamentação do transporte público em TVDE (Lei n.º 45/2018), é expressamente proibido fumar no interior de veículos afetos ao transporte remunerado de passageiros, garantindo a saúde, higiene e conforto de todos os utentes. A opção correta para a Questão 12 é a A: \"Fumar.\""
  },
  {
    "idx": 12,
    "number": 13,
    "group": "Comunicação e relações interpessoais",
    "question": "As competências exigidas para o desempenho da função de\nmotorista são:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Meramente técnicas."
      },
      {
        "letter": "B",
        "text": "Organizacionais e técnicas."
      },
      {
        "letter": "C",
        "text": "Organizacionais, relacionais e técnicas."
      }
    ],
    "answer": "C",
    "explanation": "A profissão de motorista de TVDE exige um perfil multidisciplinar que combina competências técnicas (condução defensiva e regras de trânsito), competências organizacionais (gestão de tempo, rotas e manutenção) e competências relacionais (comunicação, atendimento ao cliente, gestão de conflitos e empatia). A opção correta para a Questão 13 é a C: \"Organizacionais, relacionais e técnicas.\""
  },
  {
    "idx": 13,
    "number": 14,
    "group": "Comunicação e relações interpessoais",
    "question": "A imagem de um motorista é formada em 30 segundos,\ndando-se maior importância a:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Comunicação."
      },
      {
        "letter": "B",
        "text": "Aparência."
      },
      {
        "letter": "C",
        "text": "Conhecimento."
      }
    ],
    "answer": "B",
    "explanation": "Nos primeiros instantes do contacto visual (os primeiros 30 segundos da \"primeira impressão\"), a aparência e apresentação pessoal (vestuário limpo, postura e asseio) são o fator de maior impacto e perceção imediata para o passageiro, antes mesmo de se avaliar a comunicação verbal ou o conhecimento técnico. A opção correta para a Questão 14 é a B: \"Aparência.\""
  },
  {
    "idx": 14,
    "number": 15,
    "group": "Comunicação e relações interpessoais",
    "question": "Quais as características que definem um bom líder?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Ser capaz de apresentar uma visão que outros queiram alcançar."
      },
      {
        "letter": "B",
        "text": "Ser ambicioso, carismático, confiante, independente e responsável."
      },
      {
        "letter": "C",
        "text": "Ser capaz de satisfazer as necessidades pessoais e de grupo."
      }
    ],
    "answer": "A",
    "explanation": "A liderança eficaz define-se essencialmente pela capacidade de inspirar e mobilizar pessoas em torno de um propósito comum. Um bom líder articula uma visão clara, atrativa e motivadora que incita os outros a colaborar e a alcançar objetivos partilhados. A opção correta para a Questão 15 é a A: \"Ser capaz de apresentar uma visão que outros queiram alcançar.\""
  },
  {
    "idx": 15,
    "number": 16,
    "group": "Comunicação e relações interpessoais",
    "question": "O que se entende por comunicação interpessoal?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Método de comunicação que promove a troca de informação entre\nduas ou mais pessoas."
      },
      {
        "letter": "B",
        "text": "Método de comunicação efetuado apenas por um interveniente."
      },
      {
        "letter": "C",
        "text": "Atividade inativa e descontínua de troca de informações."
      }
    ],
    "answer": "A",
    "explanation": "Comunicação interpessoal é o processo social dinâmico mediante o qual duas ou mais pessoas trocam informações, sentimentos, ideias e significados através de mensagens verbais e não-verbais. A opção correta para a Questão 16 é a A: \"Método de comunicação que promove a troca de informação entre duas ou mais pessoas.\""
  },
  {
    "idx": 16,
    "number": 17,
    "group": "Comunicação e relações interpessoais",
    "question": "O processo de comunicação prevê a existência mínima de:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Um emissor."
      },
      {
        "letter": "B",
        "text": "Um recetor."
      },
      {
        "letter": "C",
        "text": "Um emissor e um recetor."
      }
    ],
    "answer": "C",
    "explanation": "Como a comunicação é um processo bidirecional interpessoal de partilha de mensagens, a sua existência exige obrigatoriamente, no mínimo, um interveniente que produza a mensagem (emissor) e outro que a receba e interprete (recetor). A opção correta para a Questão 17 é a C: \"Um emissor e um recetor.\""
  },
  {
    "idx": 17,
    "number": 18,
    "group": "Comunicação e relações interpessoais",
    "question": "O que se entende por ruídos durante o processo de\ncomunicação?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Algo que interfere com a mensagem enviada, mas que não altera o\nseu significado."
      },
      {
        "letter": "B",
        "text": "Algo que interfere com a mensagem enviada, bloqueando e alterando\no seu significado."
      },
      {
        "letter": "C",
        "text": "Algo que interfere com a mensagem enviada que bloqueia mas não\naltera o seu significado."
      }
    ],
    "answer": "B",
    "explanation": "No modelo teórico da comunicação, entende-se por \"ruído\" qualquer perturbação ou barreira (seja de ordem física, psicológica, semântica ou técnica) que interfira na transmissão do sinal, podendo bloquear, distorcer e alterar o significado original da mensagem enviada. A opção correta para a Questão 18 é a B: \"Algo que interfere com a mensagem enviada, bloqueando e alterando o seu significado.\""
  },
  {
    "idx": 18,
    "number": 19,
    "group": "Comunicação e relações interpessoais",
    "question": "Fazem parte das barreiras internas à comunicação:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Diferenças sociais, culturais, sexuais, os julgamentos e as suposições."
      },
      {
        "letter": "B",
        "text": "Apenas as diferenças sociais, culturais e sexuais."
      },
      {
        "letter": "C",
        "text": "Unicamente as diferenças sociais e culturais."
      }
    ],
    "answer": "A",
    "explanation": "As barreiras internas ou intrínsecas à comunicação dizem respeito aos fatores psicológicos, percetivos e emocionais do indivíduo. Incluem os preconceitos, diferenças sociais, culturais e sexuais, bem como os julgamentos prévios e suposições que condicionam e distorcem a interpretação da mensagem enviada pelo interlocutor. A opção correta para a Questão 19 é a A: \"Diferenças sociais, culturais, sexuais, os julgamentos e as suposições.\""
  },
  {
    "idx": 19,
    "number": 20,
    "group": "Comunicação e relações interpessoais",
    "question": "Chamamos feedback:",
    "alternatives": [
      {
        "letter": "A",
        "text": "À comunicação transmitida de forma correta ao seu interlocutor, que\ntem acompanhamento para saber se este atua de forma correta ou se\nprecisa corrigir ou melhorar."
      },
      {
        "letter": "B",
        "text": "Ao insucesso da comunicação."
      },
      {
        "letter": "C",
        "text": "À comunicação transmitida pelo recetor."
      },
      {
        "letter": "D",
        "text": "À comunicação que depende só da forma como a mensagem é\ntransmitida."
      }
    ],
    "answer": "A",
    "explanation": "O feedback é a informação de retorno prestada pelo recetor que permite confirmar a correta compreensão da mensagem. A opção correta para a Questão 20 é a A: \"À comunicação transmitida de forma correta ao seu interlocutor, que\ntem acompanhamento para saber se este atua de forma correta ou se\nprecisa corrigir ou melhorar.\"."
  },
  {
    "idx": 20,
    "number": 21,
    "group": "Ultrapassagem",
    "question": "Nesta situação posso ultrapassar o automóvel de cor preta?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Posso pela direita porque a via está livre."
      },
      {
        "letter": "B",
        "text": "Não posso."
      },
      {
        "letter": "C",
        "text": "Não posso, porque a ultrapassagem faz-se pelo lado esquerdo."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_21.jpg",
    "explanation": "De acordo com o Artigo 36.º, n.º 2 do Código da Estrada, é permitida a ultrapassagem pela direita quando o veículo a ultrapassar assinalou a intenção de mudar de direção para a esquerda ou em situações em que a via à direita se encontra livre e a disposição do trânsito assim o permite. A opção correta para a Questão 21 é a A: \"Posso pela direita porque a via está livre.\"."
  },
  {
    "idx": 21,
    "number": 22,
    "group": "Ultrapassagem",
    "question": "Nesta situação, devo aumentar a velocidade?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim."
      },
      {
        "letter": "B",
        "text": "Não."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_22.jpg",
    "explanation": "De acordo com o Artigo 39.º, n.º 1 do Código da Estrada, o condutor não deve aumentar a velocidade enquanto estiver a ser ultrapassado (ou ao circular na via pública de forma a manter a segurança da circulação), devendo sim facultar a manobra e manter a sua marcha estável sem acelerar. A opção correta para a Questão 22 é a B: \"Não.\""
  },
  {
    "idx": 22,
    "number": 23,
    "group": "Ultrapassagem",
    "question": "Perante o sinal de informação fico a saber que:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Só é permitido o estacionamento de autocarros."
      },
      {
        "letter": "B",
        "text": "É permitido o estacionamento a todos os veículos."
      },
      {
        "letter": "C",
        "text": "É permitida a paragem, mas não o estacionamento de automóveis."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_23.jpg",
    "explanation": "Os sinais de informação (designadamente o sinal H1a - Parque de Estacionamento) indicam a existência de um local autorizado para o estacionamento de veículos em geral, salvo se existir um painel adicional que limite o estacionamento a determinada categoria. A opção correta para a Questão 23 é a B: \"É permitido o estacionamento a todos os veículos.\""
  },
  {
    "idx": 23,
    "number": 24,
    "group": "Ultrapassagem",
    "question": "Neste local é proibido ultrapassar.",
    "alternatives": [
      {
        "letter": "A",
        "text": "Certo."
      },
      {
        "letter": "B",
        "text": "Errado."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_24.jpg",
    "explanation": "Em vias de trânsito dotadas de boa visibilidade e delimitação por linhas descontínuas (sem sinalização vertical de proibição C14), a ultrapassagem é permitida desde que cumpridas as regras de segurança. Assim, a afirmação \"Neste local é proibido ultrapassar\" é falsa. A opção correta para a Questão 24 é a B: \"Errado.\""
  },
  {
    "idx": 24,
    "number": 25,
    "group": "Ultrapassagem",
    "question": "O sinal de mudança de direcção para a esquerda, do veículo\nque segue à frente, pode indicar-me:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Diminuição de velocidade."
      },
      {
        "letter": "B",
        "text": "Início de uma ultrapassagem."
      },
      {
        "letter": "C",
        "text": "Início de manobra de marcha atrás."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_25.jpg",
    "explanation": "Nos termos do Artigo 38.º, n.º 1 do Código da Estrada, a manobra de ultrapassagem exige sinalização prévia com os indicadores de mudança de direção. A opção correta para a Questão 25 é a B: \"Início de uma ultrapassagem.\"."
  },
  {
    "idx": 25,
    "number": 26,
    "group": "Ultrapassagem",
    "question": "Ao ultrapassar o automóvel pesado, que comportamento devo\nesperar do seu condutor?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Que reduza a sua velocidade."
      },
      {
        "letter": "B",
        "text": "Que mantenha a velocidade e se desvie o mais possível para a direita."
      },
      {
        "letter": "C",
        "text": "Que aumente a sua velocidade."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_26.jpg",
    "explanation": "De acordo com o Artigo 39.º, n.º 1 do Código da Estrada, o condutor que está a ser ultrapassado deve facultar a manobra, desviando-se o mais possível para a direita e mantendo a sua velocidade sem a aumentar até que a ultrapassagem esteja concluída. A opção correta para a Questão 26 é a B: \"Que mantenha a velocidade e se desvie o mais possível para a direita.\""
  },
  {
    "idx": 26,
    "number": 27,
    "group": "Ultrapassagem",
    "question": "Que sinal devo fazer ao iniciar a ultrapassagem do veículo\npesado que circula à minha frente?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sinal de mudança de direcção à direita."
      },
      {
        "letter": "B",
        "text": "Sinal de luzes."
      },
      {
        "letter": "C",
        "text": "Sinal de mudança de direcção à esquerda."
      }
    ],
    "answer": "C",
    "imageUrl": "/assets/questoes/imagem_27.jpg",
    "explanation": "Nos termos do Artigo 38.º, n.º 1 do Código da Estrada, a manobra de ultrapassagem exige sinalização prévia com os indicadores de mudança de direção. A opção correta para a Questão 27 é a C: \"Sinal de mudança de direcção à esquerda.\"."
  },
  {
    "idx": 27,
    "number": 28,
    "group": "Ultrapassagem",
    "question": "Como devo proceder quando verifico que o condutor do veículo\nque circula à minha retaguarda me pretende ultrapassar?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Reduzir a velocidade."
      },
      {
        "letter": "B",
        "text": "Desviar-me o mais possível para a esquerda."
      },
      {
        "letter": "C",
        "text": "Não aumentar a velocidade e desviar-me o mais possível para a\ndireita."
      }
    ],
    "answer": "C",
    "imageUrl": "/assets/questoes/imagem_28.jpg",
    "explanation": "Nos termos do Artigo 39.º, n.º 1 do Código da Estrada, o condutor que é ultrapassado deve facultar a ultrapassagem, desviando-se o mais possível para a direita e mantendo ou não aumentando a velocidade. A opção correta para a Questão 28 é a C: \"Não aumentar a velocidade e desviar-me o mais possível para a\ndireita.\"."
  },
  {
    "idx": 28,
    "number": 29,
    "group": "Ultrapassagem",
    "question": "Na via em que me encontro é permitido realizar a manobra de\nultrapassagem pela direita?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim, visto tratar-se de uma auto-estrada."
      },
      {
        "letter": "B",
        "text": "Sim, caso o condutor da frente mude de direcção à esquerda."
      },
      {
        "letter": "C",
        "text": "Não, em circunstância alguma."
      }
    ],
    "answer": "C",
    "imageUrl": "/assets/questoes/imagem_29.jpg",
    "explanation": "De acordo com o Artigo 36.º, n.º 1 do Código da Estrada, a regra geral determina que a ultrapassagem se efetua obrigatoriamente pela esquerda. Na situação ilustrada na imagem, tratando-se de uma via com várias vias de trânsito no mesmo sentido sem que o veículo da frente tenha assinalado a intenção de mudar de direção à esquerda, a ultrapassagem pela direita é expressamente proibida em qualquer circunstância. A opção correta para a Questão 29 é a C: \"Não, em circunstância alguma.\""
  },
  {
    "idx": 29,
    "number": 30,
    "group": "Ultrapassagem",
    "question": "Posso ultrapassar o veículo que circula à minha frente?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim, a manobra é permitida."
      },
      {
        "letter": "B",
        "text": "Não, devo aguardar que termine a manobra."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_30.jpg",
    "explanation": "Nos termos do Artigo 38.º, n.º 1 do Código da Estrada, o condutor não deve iniciar a ultrapassagem se o veículo à sua frente já iniciou a manobra. Deve aguardar que esta termine em segurança. A opção correta para a Questão 30 é a B: \"Não, devo aguardar que termine a manobra.\"."
  },
  {
    "idx": 30,
    "number": 31,
    "group": "Ultrapassagem",
    "question": "Posso ultrapassar pela direita o veículo de mercadorias?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim, posso."
      },
      {
        "letter": "B",
        "text": "Não, a ultrapassagem pela direita é proibida."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_31.jpg",
    "explanation": "Nos termos do Artigo 36.º, n.º 2 do Código da Estrada, a ultrapassagem faz-se excecionalmente pela direita quando o veículo à frente sinaliza viragem à esquerda ou a via à direita está livre. A opção correta para a Questão 31 é a A: \"Sim, posso.\"."
  },
  {
    "idx": 31,
    "number": 32,
    "group": "Ultrapassagem",
    "question": "Posso ultrapassar?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim, porque o local tem pouca intensidade de trânsito."
      },
      {
        "letter": "B",
        "text": "Sim, porque o local tem dois sentidos de trânsito."
      },
      {
        "letter": "C",
        "text": "Sim, porque existem duas vias de trânsito no mesmo sentido."
      }
    ],
    "answer": "C",
    "imageUrl": "/assets/questoes/imagem_32.jpg",
    "explanation": "De acordo com o Código da Estrada, existindo duas vias de trânsito no mesmo sentido de circulação, é permitido efetuar a ultrapassagem utilizando a via mais à esquerda de forma segura. A opção correta para a Questão 32 é a C: \"Sim, porque existem duas vias de trânsito no mesmo sentido.\"."
  },
  {
    "idx": 32,
    "number": 33,
    "group": "Ultrapassagem",
    "question": "Pretendo ultrapassar. Posso fazê-lo?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim, desde que o faça pela direita."
      },
      {
        "letter": "B",
        "text": "Sim, desde que o faça pela esquerda e não circulem veículos em\nsentido contrário."
      },
      {
        "letter": "C",
        "text": "Não, porque a sinalização existente no local proíbe-me."
      }
    ],
    "answer": "C",
    "imageUrl": "/assets/questoes/imagem_33.jpg",
    "explanation": "Conforme o Artigo 41.º do Código da Estrada e a sinalização no local (marca contínua M1 ou sinal de proibição C14), a ultrapassagem é proibida por falta de visibilidade ou imposição legal. A opção correta para a Questão 33 é a C: \"Não, porque a sinalização existente no local proíbe-me.\"."
  },
  {
    "idx": 33,
    "number": 34,
    "group": "Ultrapassagem",
    "question": "Posso ultrapassar, pela direita, o motociclo que circula a 60\nKm/h?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim, desde que sinalize devidamente a manobra."
      },
      {
        "letter": "B",
        "text": "Não, porque é proibido."
      },
      {
        "letter": "C",
        "text": "Sim, porque existem duas filas de trânsito no mesmo sentido."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_34.jpg",
    "explanation": "Nos termos do Artigo 36.º, n.º 1 do Código da Estrada, a ultrapassagem deve realizar-se pela esquerda. O facto de o motociclo circular a 60 km/h numa via com duas vias de trânsito no mesmo sentido não autoriza a ultrapassagem pela direita, sendo a manobra proibida por lei. A opção correta para a Questão 34 é a B: \"Não, porque é proibido.\""
  },
  {
    "idx": 34,
    "number": 35,
    "group": "Ultrapassagem",
    "question": "Nesta situação devo:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Desviar-me o mais possível para a direita e manter a velocidade."
      },
      {
        "letter": "B",
        "text": "Buzinar para advertir o condutor que é proibido ultrapassar em pontes."
      },
      {
        "letter": "C",
        "text": "Travar bruscamente para facilitar a ultrapassagem."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_35.jpg",
    "explanation": "Nos termos do Artigo 39.º, n.º 1 do Código da Estrada, o condutor que é ultrapassado deve facultar a ultrapassagem, desviando-se o mais possível para a direita e mantendo ou não aumentando a velocidade. A opção correta para a Questão 35 é a A: \"Desviar-me o mais possível para a direita e manter a velocidade.\"."
  },
  {
    "idx": 35,
    "number": 36,
    "group": "Ultrapassagem",
    "question": "Perante o sinal vertical só os automóveis pesados de\nmercadorias estão proibidos de ultrapassar.",
    "alternatives": [
      {
        "letter": "A",
        "text": "Certo."
      },
      {
        "letter": "B",
        "text": "Errado."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_36.jpg",
    "explanation": "O sinal vertical ilustrado na imagem é o sinal C14 (\"Proibição de ultrapassar\"), que proíbe a ultrapassagem a todos os automóveis e motociclos, e não apenas aos automóveis pesados de mercadorias (cuja proibição específica é regulada pelo sinal C14b). Portanto, a afirmação é falsa. A opção correta para a Questão 36 é a B: \"Errado.\""
  },
  {
    "idx": 36,
    "number": 37,
    "group": "Ultrapassagem",
    "question": "A faixa de rodagem está dividida por uma linha descontínua.\nEstou correctamente posicionado se estiver a efectuar uma\nultrapassagem.",
    "alternatives": [
      {
        "letter": "A",
        "text": "Certo."
      },
      {
        "letter": "B",
        "text": "Errado."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_37.jpg",
    "explanation": "Nos termos do Artigo 13.º do Código da Estrada, a circulação deve fazer-se pela via de trânsito mais à direita. A utilização das vias mais à esquerda numa faixa com linha descontínua é correta para efetuar ultrapassagens. A opção correta para a Questão 37 é a A: \"Certo.\"."
  },
  {
    "idx": 37,
    "number": 38,
    "group": "Ultrapassagem",
    "question": "A faixa de rodagem está dividida por uma linha descontínua.\nEstou correctamente posicionado se:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Pretender ultrapassar o veículo da frente."
      },
      {
        "letter": "B",
        "text": "Estiver a efectuar uma ultrapassagem."
      },
      {
        "letter": "C",
        "text": "Pretender estacionar do lado esquerdo da faixa de rodagem."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_38.jpg",
    "explanation": "De acordo com o Artigo 13.º do Código da Estrada, a circulação deve fazer-se pela via de trânsito mais à direita. Numa faixa de rodagem dividida por uma linha descontínua, a ocupação da via da esquerda só é legítima se o condutor estiver a efetuar uma ultrapassagem, devendo antes assegurar-se das devidas condições de visibilidade e segurança para a realização da manobra. A opção correta para a Questão 38 é a B: \"Estiver a efectuar uma ultrapassagem.\""
  },
  {
    "idx": 38,
    "number": 39,
    "group": "Ultrapassagem",
    "question": "Estou a ser correctamente ultrapassado?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim, estou."
      },
      {
        "letter": "B",
        "text": "Não, porque a realização da manobra pode provocar embaraço para o\ntrânsito."
      },
      {
        "letter": "C",
        "text": "Não, porque é proibido ultrapassar nas pontes."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_39.jpg",
    "explanation": "Na situação visível na imagem, o veículo que nos ultrapassa efetua a manobra pela esquerda numa via com linha descontínua, mantendo a distância lateral adequada. Desde que garantidas as condições de visibilidade e segurança exigidas pelos Artigos 36.º e 38.º do Código da Estrada, a ultrapassagem é inteiramente legal e correta. A opção correta para a Questão 39 é a A: \"Sim, estou.\""
  },
  {
    "idx": 39,
    "number": 40,
    "group": "Ultrapassagem",
    "question": "Posso ultrapassar neste local?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim, desde que não aumente a velocidade."
      },
      {
        "letter": "B",
        "text": "Não."
      },
      {
        "letter": "C",
        "text": "Sim, desde que ocupe apenas uma faixa de rodagem."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_40.jpg",
    "explanation": "Conforme o Artigo 41.º do Código da Estrada e a sinalização no local (marca contínua M1 ou sinal de proibição C14), a ultrapassagem é proibida por falta de visibilidade ou imposição legal. A opção correta para a Questão 40 é a B: \"Não.\"."
  },
  {
    "idx": 40,
    "number": 41,
    "group": "Ultrapassagem",
    "question": "O sinal de mudança de direção para a esquerda, do veículo que\nsegue à frente, pode indicar-me:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Diminuição de velocidade."
      },
      {
        "letter": "B",
        "text": "Início de uma ultrapassagem."
      },
      {
        "letter": "C",
        "text": "Início de manobra de marcha atrás."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_41.jpg",
    "explanation": "Nos termos do Artigo 38.º, n.º 1 do Código da Estrada, a manobra de ultrapassagem exige sinalização prévia com os indicadores de mudança de direção. A opção correta para a Questão 41 é a B: \"Início de uma ultrapassagem.\"."
  },
  {
    "idx": 41,
    "number": 42,
    "group": "Ultrapassagem",
    "question": "Que sinal devo fazer ao iniciar a ultrapassagem do veículo\npesado que circula à minha frente?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sinal de mudança de direção à direita."
      },
      {
        "letter": "B",
        "text": "Sinal de luzes."
      },
      {
        "letter": "C",
        "text": "Sinal de mudança de direção à esquerda."
      }
    ],
    "answer": "C",
    "imageUrl": "/assets/questoes/imagem_42.jpg",
    "explanation": "Nos termos do Artigo 38.º, n.º 1 do Código da Estrada, a manobra de ultrapassagem exige sinalização prévia com os indicadores de mudança de direção. A opção correta para a Questão 42 é a C: \"Sinal de mudança de direção à esquerda.\"."
  },
  {
    "idx": 42,
    "number": 43,
    "group": "Ultrapassagem",
    "question": "Na via em que me encontro é permitido realizar a manobra de\nultrapassagem pela direita?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim, visto tratar-se de uma auto-estrada."
      },
      {
        "letter": "B",
        "text": "Sim, caso o condutor da frente mude de direção à esquerda."
      },
      {
        "letter": "C",
        "text": "Não, em circunstância alguma."
      }
    ],
    "answer": "C",
    "imageUrl": "/assets/questoes/imagem_43.jpg",
    "explanation": "Nos termos do Artigo 36.º, n.º 2 do Código da Estrada, a ultrapassagem faz-se excecionalmente pela direita quando o veículo à frente sinaliza viragem à esquerda ou a via à direita está livre. A opção correta para a Questão 43 é a C: \"Não, em circunstância alguma.\"."
  },
  {
    "idx": 43,
    "number": 44,
    "group": "Ultrapassagem",
    "question": "A faixa de rodagem está dividida por uma linha descontínua.\nEstou corretamente posicionado se estiver a efectuar uma\nultrapassagem.",
    "alternatives": [
      {
        "letter": "A",
        "text": "Certo."
      },
      {
        "letter": "B",
        "text": "Errado."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_44.jpg",
    "explanation": "Nos termos do Artigo 13.º do Código da Estrada, a circulação deve fazer-se pela via de trânsito mais à direita. A utilização das vias mais à esquerda numa faixa com linha descontínua é correta para efetuar ultrapassagens. A opção correta para a Questão 44 é a A: \"Certo.\"."
  },
  {
    "idx": 44,
    "number": 45,
    "group": "Ultrapassagem",
    "question": "A faixa de rodagem está dividida por uma linha descontínua.\nEstou corretamente posicionado se:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Pretender ultrapassar o veículo da frente."
      },
      {
        "letter": "B",
        "text": "Estiver a efetuar uma ultrapassagem."
      },
      {
        "letter": "C",
        "text": "Pretender estacionar do lado esquerdo da faixa de rodagem."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_45.jpg",
    "explanation": "Nos termos do Artigo 13.º do Código da Estrada, a circulação deve fazer-se pela via de trânsito mais à direita. A utilização das vias mais à esquerda numa faixa com linha descontínua é correta para efetuar ultrapassagens. A opção correta para a Questão 45 é a B: \"Estiver a efetuar uma ultrapassagem.\"."
  },
  {
    "idx": 45,
    "number": 46,
    "group": "Ultrapassagem",
    "question": "Estou a ser corretamente ultrapassado?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim, estou."
      },
      {
        "letter": "B",
        "text": "Não, porque a realização da manobra pode provocar embaraço para o\ntrânsito."
      },
      {
        "letter": "C",
        "text": "Não, porque é proibido ultrapassar nas pontes."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_46.jpg",
    "explanation": "Conforme os Artigos 36.º e 38.º do Código da Estrada, o veículo que ultrapassa pela esquerda, cumprindo a distância lateral de segurança, está a realizar uma manobra regular e correta. A opção correta para a Questão 46 é a A: \"Sim, estou.\"."
  },
  {
    "idx": 46,
    "number": 47,
    "group": "Ultrapassagem",
    "question": "O dever de ceder a passagem é:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Do condutor do velocípede, porque conduz um veículo sem motor."
      },
      {
        "letter": "B",
        "text": "Meu, porque vou entrar numa rotunda ."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_47.jpg",
    "explanation": "De acordo com o Artigo 31.º, n.º 1, alínea c) do Código da Estrada, os condutores que pretendam entrar numa rotunda têm o dever de ceder a passagem aos veículos que nela circulam. A opção correta para a Questão 47 é a B: \"Meu, porque vou entrar numa rotunda .\"."
  },
  {
    "idx": 47,
    "number": 48,
    "group": "Ultrapassagem",
    "question": "O condutor do velocípede deve ceder a passagem?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Não, porque o velocípede circula na rotunda"
      },
      {
        "letter": "B",
        "text": "Sim, porque o velocípede se apresenta à minha esquerda."
      },
      {
        "letter": "C",
        "text": "Não, porque o velocípede é um veículo sem motor."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_48.jpg",
    "explanation": "Conforme o Artigo 41.º do Código da Estrada e a sinalização no local (marca contínua M1 ou sinal de proibição C14), a ultrapassagem é proibida por falta de visibilidade ou imposição legal. A opção correta para a Questão 48 é a A: \"Não, porque o velocípede circula na rotunda\"."
  },
  {
    "idx": 48,
    "number": 49,
    "group": "Ultrapassagem",
    "question": "Como devo proceder ao entrar nesta rotunda?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Tenho prioridade de passagem em relação aos veículos que circulam\nna rotunda."
      },
      {
        "letter": "B",
        "text": "Devo ceder a passagem aos veículos que circulam na rotunda."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_49.jpg",
    "explanation": "Nos termos do Artigo 31.º, n.º 1, alínea c) do Código da Estrada, a entrada na rotunda obriga a ceder a passagem aos veículos que nela já circulam. A opção correta para a Questão 49 é a B: \"Devo ceder a passagem aos veículos que circulam na rotunda.\"."
  },
  {
    "idx": 49,
    "number": 50,
    "group": "Circulação em rotundas",
    "question": "Ao circular numa rotunda devo saber que:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Os veículos em serviço de urgência tem prioridade ao entrar na\nrotunda."
      },
      {
        "letter": "B",
        "text": "Os veículos em serviço de urgência não tem prioridade ao entrar na\nrotunda."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_50.jpg",
    "explanation": "De acordo com o Artigo 32.º, n.º 1 e Artigo 64.º do Código da Estrada, os veículos em serviço de urgência que assinalem devidamente a sua marcha têm prioridade de passagem sobre todos os demais condutores, inclusive ao entrarem em rotundas. A opção correta para a Questão 50 é a A: \"Os veículos em serviço de urgência tem prioridade ao entrar na rotunda.\""
  },
  {
    "idx": 50,
    "number": 51,
    "group": "Circulação em rotundas",
    "question": "Ao entrar nesta rotunda estou obrigado a ceder a passagem a\numa escolta policial que nela circule?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim, sempre."
      },
      {
        "letter": "B",
        "text": "Sim, mas apenas se os veículos circularem em marcha de urgência."
      },
      {
        "letter": "C",
        "text": "Não, dado que me apresento à direita dos veículos da escolta."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_51.jpg",
    "explanation": "Nos termos do Artigo 31.º, n.º 1, alínea c) do Código da Estrada, a entrada na rotunda obriga a ceder a passagem aos veículos que nela já circulam. A opção correta para a Questão 51 é a A: \"Sim, sempre.\"."
  },
  {
    "idx": 51,
    "number": 52,
    "group": "Circulação em rotundas",
    "question": "Quem tem prioridade de passagem na rotunda?",
    "alternatives": [
      {
        "letter": "A",
        "text": "O condutor do veículo de cor preta porque vai entrar na rotunda."
      },
      {
        "letter": "B",
        "text": "O condutor do veículo de cor cinzenta porque circula na rotunda."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_52.jpg",
    "explanation": "Conforme o Artigo 31.º, n.º 1, alínea b) do Código da Estrada, os condutores que já circulam dentro da rotunda (como o veículo cinzento visível na imagem) têm prioridade de passagem sobre os condutores que nela pretendam entrar (veículo preto). A opção correta para a Questão 52 é a B: \"O condutor do veículo de cor cinzenta porque circula na rotunda.\""
  },
  {
    "idx": 52,
    "number": 53,
    "group": "Circulação em rotundas",
    "question": "Ao entrar nesta rotunda tenho prioridade de passagem?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim, mas apenas porque circulo dentro de uma localidade."
      },
      {
        "letter": "B",
        "text": "Não, excepto se circular fora de uma localidade."
      },
      {
        "letter": "C",
        "text": "Não."
      }
    ],
    "answer": "C",
    "imageUrl": "/assets/questoes/imagem_53.jpg",
    "explanation": "Segundo o Artigo 31.º, n.º 1, alínea b) do Código da Estrada, o condutor que se aproxima e pretende entrar numa rotunda não dispõe de prioridade de passagem, devendo ceder a passagem a quem já lá circula, independentemente de se encontrar dentro ou fora de uma localidade. A opção correta para a Questão 53 é a C: \"Não.\""
  },
  {
    "idx": 53,
    "number": 54,
    "group": "Circulação em rotundas",
    "question": "O ciclista que circula nesta rotunda deve ceder a passagem a\ntodos os veículos a motor que nela pretendam entrar?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim."
      },
      {
        "letter": "B",
        "text": "Sim, mas apenas aos veículos automóveis ligeiros e pesados."
      },
      {
        "letter": "C",
        "text": "Não."
      }
    ],
    "answer": "C",
    "imageUrl": "/assets/questoes/imagem_54.jpg",
    "explanation": "Nos termos do Artigo 31.º, n.º 1, alínea c) do Código da Estrada, a entrada na rotunda obriga a ceder a passagem aos veículos que nela já circulam. A opção correta para a Questão 54 é a C: \"Não.\"."
  },
  {
    "idx": 54,
    "number": 55,
    "group": "Circulação em rotundas",
    "question": "Ao circular numa rotunda o condutor de um velocípede deve\nceder a passagem:",
    "alternatives": [
      {
        "letter": "A",
        "text": "A todos os veículos."
      },
      {
        "letter": "B",
        "text": "Apenas aos veículos a motor."
      },
      {
        "letter": "C",
        "text": "Apenas aos veículos que transitem em serviço de urgência."
      }
    ],
    "answer": "C",
    "imageUrl": "/assets/questoes/imagem_55.jpg",
    "explanation": "Nos termos do Artigo 31.º, n.º 1, alínea c) do Código da Estrada, a entrada na rotunda obriga a ceder a passagem aos veículos que nela já circulam. A opção correta para a Questão 55 é a C: \"Apenas aos veículos que transitem em serviço de urgência.\"."
  },
  {
    "idx": 55,
    "number": 56,
    "group": "Circulação em rotundas",
    "question": "Ao circular nesta rotunda, o condutor do velocípede:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Deve ceder a passagem a todos os veículos a motor."
      },
      {
        "letter": "B",
        "text": "Deve ceder a passagem aos veículos que circulem em serviço de\nurgência."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_56.jpg",
    "explanation": "Nos termos do Artigo 64.º do Código da Estrada, os veículos que assinalem marcha urgente prioritária têm prioridade sobre qualquer outro veículo na via pública, devendo mesmo os velocípedes a circular na rotunda ceder-lhes a passagem. A opção correta para a Questão 56 é a B: \"Deve ceder a passagem aos veículos que circulem em serviço de urgência.\""
  },
  {
    "idx": 56,
    "number": 57,
    "group": "Circulação em rotundas",
    "question": "Em regra, ao circular numa rotunda, tenho prioridade de\npassagem sobre os veículos que nela pretendam entrar?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim."
      },
      {
        "letter": "B",
        "text": "Não."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_57.jpg",
    "explanation": "Como regra geral consagrada no Artigo 31.º, n.º 1, alínea b) do Código da Estrada, o condutor que circula no interior da rotunda tem prioridade de passagem sobre os veículos que nela pretendam entrar. A opção correta para a Questão 57 é a A: \"Sim.\""
  },
  {
    "idx": 57,
    "number": 58,
    "group": "Circulação em rotundas",
    "question": "Os condutores que circulam numa rotunda devem ceder a\npassagem aos que nela vão entrar.",
    "alternatives": [
      {
        "letter": "A",
        "text": "A afirmação é verdadeira."
      },
      {
        "letter": "B",
        "text": "A afirmação é falsa."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_58.jpg",
    "explanation": "Nos termos do Artigo 31.º, n.º 1, alínea c) do Código da Estrada, a entrada na rotunda obriga a ceder a passagem aos veículos que nela já circulam. A opção correta para a Questão 58 é a B: \"A afirmação é falsa.\"."
  },
  {
    "idx": 58,
    "number": 59,
    "group": "Circulação em rotundas",
    "question": "Os veículos prioritários têm prioridade de passagem quando\ncirculam numa rotunda?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim, têm sempre prioridade de passagem, mesmo que não transitem\nem missão urgente de socorro."
      },
      {
        "letter": "B",
        "text": "Não, apenas têm prioridade de passagem sobre os veículos sem\nmotor."
      },
      {
        "letter": "C",
        "text": "Não, apenas têm prioridade se transitarem em missão urgente de\nsocorro."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_59.jpg",
    "explanation": "Nos termos dos Artigos 64.º e 65.º do Código da Estrada, veículos em serviço de urgência assinalado ou escolta policial mantêm prioridade de passagem. A opção correta para a Questão 59 é a A: \"Sim, têm sempre prioridade de passagem, mesmo que não transitem\nem missão urgente de socorro.\"."
  },
  {
    "idx": 59,
    "number": 60,
    "group": "Circulação em rotundas",
    "question": "O veículo de duas rodas que transita na rotunda:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Deve parar obrigatoriamente para me ceder a passagem."
      },
      {
        "letter": "B",
        "text": "Não deve embaraçar o trânsito."
      },
      {
        "letter": "C",
        "text": "Deve ceder a passagem ao meu veículo."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_60.jpg",
    "explanation": "De acordo com as regras gerais do Código da Estrada (Artigo 3.º), nenhum utente da via deve comportar-se de modo a perturbar ou embaraçar injustificadamente o trânsito nem a pôr em risco a segurança das pessoas. A opção correta para a Questão 60 é a B: \"Não deve embaraçar o trânsito.\""
  },
  {
    "idx": 60,
    "number": 61,
    "group": "Circulação em rotundas",
    "question": "O que devo fazer nesta situação?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Ceder a passagem ao veículo cinzento."
      },
      {
        "letter": "B",
        "text": "Avançar em primeiro lugar, porque me apresento pela direita."
      },
      {
        "letter": "C",
        "text": "Parar obrigatoriamente, porque pretendo entrar na rotunda."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_61.jpg",
    "explanation": "Estando prestes a entrar numa rotunda onde já circula outro veículo (o veículo cinzento na imagem), o condutor deve ceder-lhe a passagem antes de avançar, em conformidade com o Artigo 31.º, n.º 1, alínea b) do Código da Estrada. A opção correta para a Questão 61 é a A: \"Ceder a passagem ao veículo cinzento.\""
  },
  {
    "idx": 61,
    "number": 62,
    "group": "Circulação em rotundas",
    "question": "Ao circular na rotunda:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Fico obrigado a ceder a passagem ao automóvel ligeiro."
      },
      {
        "letter": "B",
        "text": "Devo estar atento ao automóvel ligeiro."
      },
      {
        "letter": "C",
        "text": "Devo parar, para ceder a passagem ao automóvel ligeiro."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_62.jpg",
    "explanation": "Ao circular dentro da rotunda, o condutor mantém a prioridade perante os veículos que pretendam entrar, mas deve manter permanente atenção e condução defensiva em relação ao automóvel ligeiro prestes a aceder à praça. A opção correta para a Questão 62 é a B: \"Devo estar atento ao automóvel ligeiro.\""
  },
  {
    "idx": 62,
    "number": 63,
    "group": "Circulação em rotundas",
    "question": "Um dos factores que deve influenciar a velocidade a que\ntransito é a visibilidade do local.",
    "alternatives": [
      {
        "letter": "A",
        "text": "Certo."
      },
      {
        "letter": "B",
        "text": "Errado."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_63.jpg",
    "explanation": "De acordo com o Artigo 24.º, n.º 1 do Código da Estrada, o condutor deve regular a velocidade de modo que possa parar o veículo no espaço livre e visível à sua frente, sendo a visibilidade um dos fatores determinantes. A opção correta para a Questão 63 é a A: \"Certo.\""
  },
  {
    "idx": 63,
    "number": 64,
    "group": "Circulação em rotundas",
    "question": "Ao circular neste local devo:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Moderar a velocidade e parar se necessário."
      },
      {
        "letter": "B",
        "text": "Moderar a velocidade e utilizar os sinais sonoros."
      },
      {
        "letter": "C",
        "text": "Aumentar um pouco a velocidade para não ter necessidade de parar."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_64.jpg",
    "explanation": "Nos termos do Artigo 25.º, n.º 1, alínea f) do Código da Estrada, a aproximação e passagem por rotundas e cruzamentos exige moderação de velocidade e paragem sempre que tal seja necessário para garantir a segurança ou ceder a passagem. A opção correta para a Questão 64 é a A: \"Moderar a velocidade e parar se necessário.\""
  },
  {
    "idx": 64,
    "number": 65,
    "group": "Circulação em rotundas",
    "question": "A velocidade neste local deve ser:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Obrigatoriamente de 50 Km/h."
      },
      {
        "letter": "B",
        "text": "A que cada condutor considerar adequada desde que não seja inferior\na 50 Km/h."
      },
      {
        "letter": "C",
        "text": "Adaptada às condições existentes."
      }
    ],
    "answer": "C",
    "imageUrl": "/assets/questoes/imagem_65.jpg",
    "explanation": "Conforme determina o Artigo 24.º do Código da Estrada, a velocidade de circulação deve ser sempre adaptada às condições do veículo, da via, da visibilidade, do estado do piso e do trânsito. A opção correta para a Questão 65 é a C: \"Adaptada às condições existentes.\""
  },
  {
    "idx": 65,
    "number": 66,
    "group": "Circulação em rotundas",
    "question": "Neste local é obrigatório moderar a velocidade?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim porque as condições atmosféricas são desfavoráveis."
      },
      {
        "letter": "B",
        "text": "Sim, sempre."
      },
      {
        "letter": "C",
        "text": "Não nunca. Esse comportamento iria originar embaraço para o\ntrânsito."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_66.jpg",
    "explanation": "Segundo o Artigo 25.º, n.º 1, alíneas b) e f) do Código da Estrada, o condutor é obrigado a moderar a velocidade na aproximação de praças e rotundas, bem como quando as condições atmosféricas forem desfavoráveis (como nevoeiro, chuva intensiva ou gelo). A opção correta para a Questão 66 é a A: \"Sim porque as condições atmosféricas são desfavoráveis.\""
  },
  {
    "idx": 66,
    "number": 67,
    "group": "Velocidade",
    "question": "Nesta situação, a velocidade deve ser moderada. Devido ao\nlocal?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim, neste local é sempre obrigatório moderar a velocidade."
      },
      {
        "letter": "B",
        "text": "Não, devido às condições atmosféricas do momento."
      },
      {
        "letter": "C",
        "text": "Não, porque neste local nunca devo moderar a velocidade."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_67.jpg",
    "explanation": "Conforme os Artigos 24.º a 28.º do Código da Estrada, a velocidade deve ser adaptada ao local, ao trânsito e à sinalização regulamentar. A opção correta para a Questão 67 é a B: \"Não, devido às condições atmosféricas do momento.\"."
  },
  {
    "idx": 67,
    "number": 68,
    "group": "Velocidade",
    "question": "Nesta situação para além de moderar a velocidade, pode\ntornar-se necessário:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Ligar as luzes de estrada."
      },
      {
        "letter": "B",
        "text": "Ligar as luzes de cruzamento e as luzes de estrada em simultâneo."
      },
      {
        "letter": "C",
        "text": "Ligar as luzes de cruzamento."
      }
    ],
    "answer": "C",
    "imageUrl": "/assets/questoes/imagem_68.jpg",
    "explanation": "Nos termos dos Artigos 24.º e 25.º do Código da Estrada, a velocidade deve ser moderada em função da visibilidade, das condições atmosféricas e do estado da via. A opção correta para a Questão 68 é a C: \"Ligar as luzes de cruzamento.\"."
  },
  {
    "idx": 68,
    "number": 69,
    "group": "Velocidade",
    "question": "Perante o sinal vertical:",
    "alternatives": [
      {
        "letter": "A",
        "text": "A velocidade máxima permitida é de 100 km/h."
      },
      {
        "letter": "B",
        "text": "A velocidade mínima permitida é de 100 km/h."
      },
      {
        "letter": "C",
        "text": "A velocidade obrigatória é de 100 km/h."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_69.jpg",
    "explanation": "Conforme os Artigos 24.º a 28.º do Código da Estrada, a velocidade deve ser adaptada ao local, ao trânsito e à sinalização regulamentar. A opção correta para a Questão 69 é a A: \"A velocidade máxima permitida é de 100 km/h.\"."
  },
  {
    "idx": 69,
    "number": 70,
    "group": "Velocidade",
    "question": "Quando a aderência ao piso é menor a distância de paragem\naumenta. Logo devo:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Diminuir a velocidade."
      },
      {
        "letter": "B",
        "text": "Manter a velocidade."
      },
      {
        "letter": "C",
        "text": "Aumentar a velocidade."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_70.jpg",
    "explanation": "Conforme os Artigos 24.º a 28.º do Código da Estrada, a velocidade deve ser adaptada ao local, ao trânsito e à sinalização regulamentar. A opção correta para a Questão 70 é a A: \"Diminuir a velocidade.\"."
  },
  {
    "idx": 70,
    "number": 71,
    "group": "Velocidade",
    "question": "Neste momento, o piso está escorregadio, devo:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Ligar as luzes de cruzamento."
      },
      {
        "letter": "B",
        "text": "Aumentar a distância de segurança, adaptando a velocidade."
      },
      {
        "letter": "C",
        "text": "Diminuir a distância de segurança, moderando a velocidade."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_71.jpg",
    "explanation": "Conforme os Artigos 24.º a 28.º do Código da Estrada, a velocidade deve ser adaptada ao local, ao trânsito e à sinalização regulamentar. A opção correta para a Questão 71 é a B: \"Aumentar a distância de segurança, adaptando a velocidade.\"."
  },
  {
    "idx": 71,
    "number": 72,
    "group": "Velocidade",
    "question": "Ao circular neste local, devo:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Aumentar a distância de segurança."
      },
      {
        "letter": "B",
        "text": "Aumentar a velocidade."
      },
      {
        "letter": "C",
        "text": "Aumentar a distância de paragem."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_72.jpg",
    "explanation": "Conforme os Artigos 24.º a 28.º do Código da Estrada, a velocidade deve ser adaptada ao local, ao trânsito e à sinalização regulamentar. A opção correta para a Questão 72 é a A: \"Aumentar a distância de segurança.\"."
  },
  {
    "idx": 72,
    "number": 73,
    "group": "Velocidade",
    "question": "O que devo fazer relativamente ao veículo que segue à minha\nfrente?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Manter uma distância que me permita parar em segurança."
      },
      {
        "letter": "B",
        "text": "Diminuir a distância de segurança."
      },
      {
        "letter": "C",
        "text": "Aumentar a distância de segurança, para iniciar a ultrapassagem."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_73.jpg",
    "explanation": "Conforme os Artigos 24.º a 28.º do Código da Estrada, a velocidade deve ser adaptada ao local, ao trânsito e à sinalização regulamentar. A opção correta para a Questão 73 é a A: \"Manter uma distância que me permita parar em segurança.\"."
  },
  {
    "idx": 73,
    "number": 74,
    "group": "Velocidade",
    "question": "O que devo fazer nesta situação?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Parar, porque circula um veículo em sentido contrário."
      },
      {
        "letter": "B",
        "text": "Fazer sinais de luzes se pretender ultrapassar."
      },
      {
        "letter": "C",
        "text": "Manter o veículo na mesma via de trânsito."
      }
    ],
    "answer": "C",
    "imageUrl": "/assets/questoes/imagem_74.jpg",
    "explanation": "Conforme os Artigos 24.º a 28.º do Código da Estrada, a velocidade deve ser adaptada ao local, ao trânsito e à sinalização regulamentar. A opção correta para a Questão 74 é a C: \"Manter o veículo na mesma via de trânsito.\"."
  },
  {
    "idx": 74,
    "number": 75,
    "group": "Velocidade",
    "question": "Quando a aderência ao piso é menor a velocidade deve ser\nmoderada, porque:",
    "alternatives": [
      {
        "letter": "A",
        "text": "A distância de paragem aumenta."
      },
      {
        "letter": "B",
        "text": "A distância de travagem diminui."
      },
      {
        "letter": "C",
        "text": "A distância de paragem diminui."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_75.jpg",
    "explanation": "Conforme os Artigos 24.º a 28.º do Código da Estrada, a velocidade deve ser adaptada ao local, ao trânsito e à sinalização regulamentar. A opção correta para a Questão 75 é a A: \"A distância de paragem aumenta.\"."
  },
  {
    "idx": 75,
    "number": 76,
    "group": "Velocidade",
    "question": "Quando o piso está escorregadio, devo utilizar o motor como\nauxiliar do travão?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Não, devo utilizar apenas o travão de serviço."
      },
      {
        "letter": "B",
        "text": "Sim e também devo evitar travagens bruscas."
      },
      {
        "letter": "C",
        "text": "Sim, apesar de ser mais seguro o travão de estacionamento."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_76.jpg",
    "explanation": "Conforme os Artigos 24.º a 28.º do Código da Estrada, a velocidade deve ser adaptada ao local, ao trânsito e à sinalização regulamentar. A opção correta para a Questão 76 é a B: \"Sim e também devo evitar travagens bruscas.\"."
  },
  {
    "idx": 76,
    "number": 77,
    "group": "Velocidade",
    "question": "Nesta situação, em que a aderência ao piso é reduzida, devo:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Manter a velocidade."
      },
      {
        "letter": "B",
        "text": "Reduzir a velocidade."
      },
      {
        "letter": "C",
        "text": "Aumentar a velocidade."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_77.jpg",
    "explanation": "Conforme os Artigos 24.º a 28.º do Código da Estrada, a velocidade deve ser adaptada ao local, ao trânsito e à sinalização regulamentar. A opção correta para a Questão 77 é a B: \"Reduzir a velocidade.\"."
  },
  {
    "idx": 77,
    "number": 78,
    "group": "Velocidade",
    "question": "Quando a visibilidade é insuficiente, para além da utilização\ndas luzes, devo:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Adaptar a velocidade."
      },
      {
        "letter": "B",
        "text": "Utilizar sempre os sinais sonoros."
      },
      {
        "letter": "C",
        "text": "Moderar a velocidade e utilizar os sinais sonoros."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_78.jpg",
    "explanation": "Nos termos dos Artigos 24.º e 25.º do Código da Estrada, a velocidade deve ser moderada em função da visibilidade, das condições atmosféricas e do estado da via. A opção correta para a Questão 78 é a A: \"Adaptar a velocidade.\"."
  },
  {
    "idx": 78,
    "number": 79,
    "group": "Velocidade",
    "question": "O que devo fazer nesta situação?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Parar, porque a visibilidade do local é insuficiente."
      },
      {
        "letter": "B",
        "text": "Adaptar a velocidade às condições de visibilidade."
      },
      {
        "letter": "C",
        "text": "Aumentar a velocidade e se necessário ligar os máximos."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_79.jpg",
    "explanation": "Conforme os Artigos 24.º a 28.º do Código da Estrada, a velocidade deve ser adaptada ao local, ao trânsito e à sinalização regulamentar. A opção correta para a Questão 79 é a B: \"Adaptar a velocidade às condições de visibilidade.\"."
  },
  {
    "idx": 79,
    "number": 80,
    "group": "Velocidade",
    "question": "Nesta situação devo:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Moderar a velocidade."
      },
      {
        "letter": "B",
        "text": "Utilizar as luzes de estrada."
      },
      {
        "letter": "C",
        "text": "Aumentar a distância de segurança e utilizar as luzes de estrada."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_80.jpg",
    "explanation": "Conforme os Artigos 24.º a 28.º do Código da Estrada, a velocidade deve ser adaptada ao local, ao trânsito e à sinalização regulamentar. A opção correta para a Questão 80 é a A: \"Moderar a velocidade.\"."
  },
  {
    "idx": 80,
    "number": 81,
    "group": "Velocidade",
    "question": "Quando a intensidade de trânsito aumenta, a velocidade deve:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Diminuir."
      },
      {
        "letter": "B",
        "text": "Aumentar."
      },
      {
        "letter": "C",
        "text": "Diminuir, apenas se circular em auto-estrada."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_81.jpg",
    "explanation": "Conforme os Artigos 24.º a 28.º do Código da Estrada, a velocidade deve ser adaptada ao local, ao trânsito e à sinalização regulamentar. A opção correta para a Questão 81 é a A: \"Diminuir.\"."
  },
  {
    "idx": 81,
    "number": 82,
    "group": "Velocidade",
    "question": "Nesta situação, um dos principais aspectos a considerar é:",
    "alternatives": [
      {
        "letter": "A",
        "text": "O dever de utilizar as luzes de estrada."
      },
      {
        "letter": "B",
        "text": "A proibição de circular com as luzes de cruzamento acesas."
      },
      {
        "letter": "C",
        "text": "Manter uma velocidade adequada."
      }
    ],
    "answer": "C",
    "imageUrl": "/assets/questoes/imagem_82.jpg",
    "explanation": "Conforme os Artigos 24.º a 28.º do Código da Estrada, a velocidade deve ser adaptada ao local, ao trânsito e à sinalização regulamentar. A opção correta para a Questão 82 é a C: \"Manter uma velocidade adequada.\"."
  },
  {
    "idx": 82,
    "number": 83,
    "group": "Velocidade",
    "question": "Um dos fatores que deve influenciar a velocidade a que\ntransito é a visibilidade do local.",
    "alternatives": [
      {
        "letter": "A",
        "text": "Certo."
      },
      {
        "letter": "B",
        "text": "Errado."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_83.jpg",
    "explanation": "Nos termos dos Artigos 24.º e 25.º do Código da Estrada, a velocidade deve ser moderada em função da visibilidade, das condições atmosféricas e do estado da via. A opção correta para a Questão 83 é a A: \"Certo.\"."
  },
  {
    "idx": 83,
    "number": 84,
    "group": "Velocidade",
    "question": "Neste local é obrigatório moderar a velocidade?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim, porque as condições atmosféricas são desfavoráveis."
      },
      {
        "letter": "B",
        "text": "Sim, sempre."
      },
      {
        "letter": "C",
        "text": "Não, nunca. Esse comportamento iria originar embaraço para o\ntrânsito."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_84.jpg",
    "explanation": "Nos termos dos Artigos 24.º e 25.º do Código da Estrada, a velocidade deve ser moderada em função da visibilidade, das condições atmosféricas e do estado da via. A opção correta para a Questão 84 é a A: \"Sim, porque as condições atmosféricas são desfavoráveis.\"."
  },
  {
    "idx": 84,
    "number": 85,
    "group": "Velocidade",
    "question": "Ao circular nesta via pública, devo saber que:",
    "alternatives": [
      {
        "letter": "A",
        "text": "No próximo entroncamento, estou obrigado a ceder a passagem\napenas aos automóveis."
      },
      {
        "letter": "B",
        "text": "Tenho prioridade de passagem sobre os veículos sem motor que\ncirculam na via que se aproxima."
      },
      {
        "letter": "C",
        "text": "Devo ceder a passagem a todos e quaisquer veículos que transitem na\nvia que se aproxima."
      }
    ],
    "answer": "C",
    "imageUrl": "/assets/questoes/imagem_85.jpg",
    "explanation": "Conforme os Artigos 24.º a 28.º do Código da Estrada, a velocidade deve ser adaptada ao local, ao trânsito e à sinalização regulamentar. A opção correta para a Questão 85 é a C: \"Devo ceder a passagem a todos e quaisquer veículos que transitem na\nvia que se aproxima.\"."
  },
  {
    "idx": 85,
    "number": 86,
    "group": "Velocidade",
    "question": "Como devo proceder perante o sinal vertical de cedência de\npassagem?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Ceder a passagem apenas aos veículos vindos da direita."
      },
      {
        "letter": "B",
        "text": "Ceder a passagem apenas aos veículos vindos da esquerda."
      },
      {
        "letter": "C",
        "text": "Ceder a passagem a todos os veículos."
      }
    ],
    "answer": "C",
    "imageUrl": "/assets/questoes/imagem_86.jpg",
    "explanation": "Conforme os Artigos 24.º a 28.º do Código da Estrada, a velocidade deve ser adaptada ao local, ao trânsito e à sinalização regulamentar. A opção correta para a Questão 86 é a C: \"Ceder a passagem a todos os veículos.\"."
  },
  {
    "idx": 86,
    "number": 87,
    "group": "Velocidade",
    "question": "Na presença destes sinais verticais, sou sempre obrigado a\nparar o meu veículo. A afirmação é:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Verdadeira."
      },
      {
        "letter": "B",
        "text": "Falsa."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_87.jpg",
    "explanation": "Conforme os Artigos 24.º a 28.º do Código da Estrada, a velocidade deve ser adaptada ao local, ao trânsito e à sinalização regulamentar. A opção correta para a Questão 87 é a B: \"Falsa.\"."
  },
  {
    "idx": 87,
    "number": 88,
    "group": "Sinalização",
    "question": "Como devo proceder face ao sinal vertical triangular?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Ceder a passagem aos veículos que se apresentem pela direita."
      },
      {
        "letter": "B",
        "text": "Ceder a passagem a todos os veículos."
      },
      {
        "letter": "C",
        "text": "Avançar com cuidado, apesar de ter prioridade de passagem."
      }
    ],
    "answer": "C",
    "imageUrl": "/assets/questoes/imagem_88.jpg",
    "explanation": "O sinal vertical B3 (\"Via com prioridade\") garante ao condutor o direito de passagem na interseção. Contudo, em conformidade com as regras de condução defensiva e o Artigo 24.º do Código da Estrada, deve avançar com precaução para verificar se os outros condutores cumprem a sinalização. A opção correta para a Questão 88 é a C: \"Avançar com cuidado, apesar de ter prioridade de passagem.\""
  },
  {
    "idx": 88,
    "number": 89,
    "group": "Sinalização",
    "question": "O que significa o sinal vertical triangular?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Entroncamento com via com prioridade."
      },
      {
        "letter": "B",
        "text": "Cruzamento com via sem prioridade."
      },
      {
        "letter": "C",
        "text": "Cruzamento com via com prioridade."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_89.jpg",
    "explanation": "O sinal de perigo B1 (\"Entroncamento ou Cruzamento com via sem prioridade\", vulgo B1/B2) indica que o condutor circula numa via com prioridade e que os veículos que se aproximam da via lateral têm o dever de ceder a passagem. A opção correta para a Questão 89 é a B: \"Cruzamento com via sem prioridade.\""
  },
  {
    "idx": 89,
    "number": 90,
    "group": "Sinalização",
    "question": "Como devo proceder no entroncamento de que me aproximo?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Ceder a passagem aos veículos que se apresentem pela direita."
      },
      {
        "letter": "B",
        "text": "Ceder a passagem a todos os veículos motorizados."
      },
      {
        "letter": "C",
        "text": "Avançar, verificando se os condutores que circulam na via com que me\ncruzo me cedem a passagem."
      },
      {
        "letter": "D",
        "text": "Avançar sem precauções dado ter o direito de passar em primeiro\nlugar."
      }
    ],
    "answer": "C",
    "imageUrl": "/assets/questoes/imagem_90.jpg",
    "explanation": "Mesmo circulando numa via com prioridade assinalada pelo sinal vertical, o condutor não deve avançar cegamente. Deve certificar-se visualmente de que os condutores provenientes das vias secundárias estão a respeitar a sinalização e a facultar a passagem. A opção correta para a Questão 90 é a C: \"Avançar, verificando se os condutores que circulam na via com que me cruzo me cedem a passagem.\""
  },
  {
    "idx": 90,
    "number": 91,
    "group": "Sinalização",
    "question": "Perante o sinal vertical de forma triangular sei que no próximo\nentroncamento devo ceder a passagem aos veículos que se\napresentem pela direita.",
    "alternatives": [
      {
        "letter": "A",
        "text": "A afirmação é verdadeira."
      },
      {
        "letter": "B",
        "text": "A afirmação é falsa."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_91.jpg",
    "explanation": "O sinal triangular de perigo B1/B2 assinala que o condutor tem prioridade no próximo entroncamento/cruzamento, pelo que a afirmação de que \"deve ceder a passagem aos veículos da direita\" é falsa. A opção correta para a Questão 91 é a B: \"A palavra/afirmação é falsa.\""
  },
  {
    "idx": 91,
    "number": 92,
    "group": "Sinalização",
    "question": "Qual o significado do sinal de cedência de passagem?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Obrigatoriedade de ceder a passagem aos veículos que entram na\nrotunda."
      },
      {
        "letter": "B",
        "text": "Aproximação de rotunda onde o trânsito se processa em sentido\ngiratório."
      },
      {
        "letter": "C",
        "text": "Aproximação de praça onde a velocidade é limitada a 70 km/h."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_92.jpg",
    "explanation": "O sinal B4 (\"Aproximação de rotunda\") é um sinal de cedência de passagem de forma triangular com fundo branco e orla vermelha que indica a aproximação de uma praça ou rotunda onde o trânsito se processa em sentido giratório. A opção correta para a Questão 92 é a B: \"Aproximação de rotunda onde o trânsito se processa em sentido giratório.\""
  },
  {
    "idx": 92,
    "number": 93,
    "group": "Sinalização",
    "question": "O que significa o sinal vertical?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Entrada numa zona em que apenas o estacionamento é proibido."
      },
      {
        "letter": "B",
        "text": "Entrada numa zona em que apenas a paragem é proibida."
      },
      {
        "letter": "C",
        "text": "Entrada numa zona em que a paragem e o estacionamento são\nproibidos."
      }
    ],
    "answer": "C",
    "imageUrl": "/assets/questoes/imagem_93.jpg",
    "explanation": "O sinal C18 (\"Zona de paragem e estacionamento proibidos\") delimita uma área geográfica delimitada onde é proibida qualquer imobilização voluntária do veículo (seja paragem ou estacionamento). A opção correta para a Questão 93 é a C: \"Entrada numa zona em que a paragem e o estacionamento são proibidos.\""
  },
  {
    "idx": 93,
    "number": 94,
    "group": "Sinalização",
    "question": "O sinal que se encontra na via pública:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Proíbe apenas o estacionamento a veículos pesados de mercadorias."
      },
      {
        "letter": "B",
        "text": "Proíbe apenas a paragem a todos os veículos."
      },
      {
        "letter": "C",
        "text": "Proíbe a paragem e o estacionamento."
      }
    ],
    "answer": "C",
    "imageUrl": "/assets/questoes/imagem_94.jpg",
    "explanation": "O sinal de proibição C18 proíbe a imobilização do veículo por qualquer período de tempo, abrangendo quer a paragem rápida quer o estacionamento a todos os veículos automóveis. A opção correta para a Questão 94 é a C: \"Proíbe a paragem e o estacionamento.\""
  },
  {
    "idx": 94,
    "number": 95,
    "group": "Sinalização",
    "question": "O sinal vertical indica-me que:",
    "alternatives": [
      {
        "letter": "A",
        "text": "O trânsito passa a fazer-se apenas num sentido."
      },
      {
        "letter": "B",
        "text": "A via pública passa a ter trânsito nos dois sentidos."
      },
      {
        "letter": "C",
        "text": "Não tenho prioridade no próximo estreitamento da faixa de rodagem."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_95.jpg",
    "explanation": "O sinal de perigo A21 (\"Trânsito nos dois sentidos\") avisa o condutor de que a via em que circula, anteriormente de sentido único, passa a estar sujeita a trânsito em ambos os sentidos de marcha. A opção correta para a Questão 95 é a B: \"A via pública passa a ter trânsito nos dois sentidos.\""
  },
  {
    "idx": 95,
    "number": 96,
    "group": "Sinalização",
    "question": "Como devo proceder perante o sinal vertical?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Manter a velocidade porque o trânsito passa a fazer-se apenas num só\nsentido."
      },
      {
        "letter": "B",
        "text": "Moderar a velocidade porque a circulação passa a ser feita nos dois\nsentidos."
      },
      {
        "letter": "C",
        "text": "Manter a velocidade porque tenho prioridade no próximo\nestreitamento da via pública."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_96.jpg",
    "explanation": "Perante o sinal A21 (\"Trânsito nos dois sentidos\"), o condutor deve redobrar os cuidados e moderar a velocidade, antecipando o cruzamento com veículos em sentido oposto. A opção correta para a Questão 96 é a B: \"Moderar a velocidade porque a circulação passa a ser feita nos dois sentidos.\""
  },
  {
    "idx": 96,
    "number": 97,
    "group": "Sinalização",
    "question": "Perante o sinal vertical devo saber que:",
    "alternatives": [
      {
        "letter": "A",
        "text": "O trânsito apenas se faz num só sentido."
      },
      {
        "letter": "B",
        "text": "Aproxima-se uma curva perigosa à esquerda."
      },
      {
        "letter": "C",
        "text": "Tenho prioridade de passagem no próximo entroncamento ou\ncruzamento."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_97.jpg",
    "explanation": "O sinal de perigo A1a indica a aproximação de uma curva perigosa à esquerda, exigindo a redução de velocidade e o posicionamento correto na via. A opção correta para a Questão 97 é a B: \"Aproxima-se uma curva perigosa à esquerda.\""
  },
  {
    "idx": 97,
    "number": 98,
    "group": "Sinalização",
    "question": "De acordo com a sinalização vertical, devem ceder a passagem\nos condutores que circulam na via de trânsito:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Da esquerda."
      },
      {
        "letter": "B",
        "text": "Do centro."
      },
      {
        "letter": "C",
        "text": "Da direita."
      }
    ],
    "answer": "C",
    "imageUrl": "/assets/questoes/imagem_98.jpg",
    "explanation": "Nesta interseção regulada por sinalização vertical onde a linha de cedência e o sinal B1 proíbem o avanço sem ceder passagem, os condutores que circulam na via da direita estão obrigados a ceder a passagem aos veículos da via principal. A opção correta para a Questão 98 é a C: \"Da direita.\""
  },
  {
    "idx": 98,
    "number": 99,
    "group": "Sinalização",
    "question": "O sinal vertical indica:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Obrigação de seguir em frente na próxima intersecção."
      },
      {
        "letter": "B",
        "text": "Via com uma só fila de trânsito."
      },
      {
        "letter": "C",
        "text": "Via com trânsito de sentido único."
      }
    ],
    "answer": "C",
    "imageUrl": "/assets/questoes/imagem_99.jpg",
    "explanation": "O sinal de informação H1a (\"Via de sentido único\") indica aos condutores que o trânsito naquela via se processa exclusivamente num único sentido de marcha. A opção correta para a Questão 99 é a C: \"Via com trânsito de sentido único.\""
  },
  {
    "idx": 99,
    "number": 100,
    "group": "Sinalização",
    "question": "O sinal colocado mais à direita é de:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Indicação."
      },
      {
        "letter": "B",
        "text": "Obrigação."
      },
      {
        "letter": "C",
        "text": "Perigo."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_100.jpg",
    "explanation": "Os sinais de formato retangular ou quadrado com fundo azul (como o sinal H1a visível) pertencem ao grupo dos sinais de informação/indicação, de acordo com o Regulamento de Sinalização do Trânsito. A opção correta para a Questão 100 é a A: \"Indicação.\""
  },
  {
    "idx": 100,
    "number": 101,
    "group": "Sinalização",
    "question": "Este sinal indica que a 300 metros existe:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Um telefone de utilização pública."
      },
      {
        "letter": "B",
        "text": "Um telefone para utilização em caso de emergência."
      },
      {
        "letter": "C",
        "text": "Uma área de serviço."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_101.jpg",
    "explanation": "O sinal de informação H15 (\"Telefone de emergência\") acompanhado de um painel adicional de distância (300m) avisa da existência de um posto SOS para comunicação de emergências. A opção correta para a Questão 101 é a B: \"Um telefone para utilização em caso de emergência.\""
  },
  {
    "idx": 101,
    "number": 102,
    "group": "Sinalização",
    "question": "O telefone disponível nesta via deve ser utilizado:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Em caso de acidente ou avaria."
      },
      {
        "letter": "B",
        "text": "Em qualquer situação."
      },
      {
        "letter": "C",
        "text": "Quando existe congestionamento de trânsito."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_102.jpg",
    "explanation": "Os postos SOS e telefones de emergência instalados nas vias públicas destinam-se exclusivamente à comunicação de acidentes, avarias ou pedidos de socorro urgente. A opção correta para a Questão 102 é a A: \"Em caso de acidente ou avaria.\""
  },
  {
    "idx": 102,
    "number": 103,
    "group": "Sinalização",
    "question": "Este sinal é de:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Pré-sinalização."
      },
      {
        "letter": "B",
        "text": "Indicação."
      },
      {
        "letter": "C",
        "text": "Perigo."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_103.jpg",
    "explanation": "Os sinais de painel retangular informativo são classificados no Regulamento de Sinalização do Trânsito como sinais de indicação. A opção correta para a Questão 103 é a B: \"Indicação.\""
  },
  {
    "idx": 103,
    "number": 104,
    "group": "Sinalização",
    "question": "O sinal de informação indica:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Oficina de reparações de caravanas."
      },
      {
        "letter": "B",
        "text": "Entreposto comercial de campismo e reboques de campismo."
      },
      {
        "letter": "C",
        "text": "Parque misto para campismo e reboques de campismo."
      }
    ],
    "answer": "C",
    "imageUrl": "/assets/questoes/imagem_104.jpg",
    "explanation": "O sinal de informação H20b indica a existência de um parque misto reservado ao campismo e ao acolhimento de reboques de campismo e caravanas. A opção correta para a Questão 104 é a C: \"Parque misto para campismo e reboques de campismo.\""
  },
  {
    "idx": 104,
    "number": 105,
    "group": "Sinalização",
    "question": "O sinal vertical indica:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Obrigação de seguir em frente na próxima interseção."
      },
      {
        "letter": "B",
        "text": "Via com uma só fila de trânsito."
      },
      {
        "letter": "C",
        "text": "Via com trânsito de sentido único."
      }
    ],
    "answer": "C",
    "imageUrl": "/assets/questoes/imagem_105.jpg",
    "explanation": "O sinal H1a indica que a via em causa é de sentido único de circulação, permitindo a ocupação de toda a largura da faixa de rodagem no mesmo sentido. A opção correta para a Questão 105 é a C: \"Via com trânsito de sentido único.\""
  },
  {
    "idx": 105,
    "number": 106,
    "group": "Sinalização",
    "question": "Devo ceder a passagem?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim, porque aquele veículo se apresenta pela direita."
      },
      {
        "letter": "B",
        "text": "Não, porque sai de uma propriedade."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_106.jpg",
    "explanation": "De acordo com o Artigo 31.º, n.º 1, alínea a) do Código da Estrada, os condutores que saem de uma propriedade privada, garagem ou prédio particular perdem a prioridade de passagem, devendo ceder a passagem aos veículos que já circulam na via pública. A opção correta para a Questão 106 é a B: \"Não, porque sai de uma propriedade.\""
  },
  {
    "idx": 106,
    "number": 107,
    "group": "Sinalização",
    "question": "Perante este sinal devo:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Avançar em primeiro lugar."
      },
      {
        "letter": "B",
        "text": "Ceder a passagem."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_107.jpg",
    "explanation": "O sinal B3 (\"Via com prioridade\") concede prioridade ao condutor que por ela transita no cruzamento ou entroncamento sinalizado. A opção correta para a Questão 107 é a A: \"Avançar em primeiro lugar.\""
  },
  {
    "idx": 107,
    "number": 108,
    "group": "Sinalização",
    "question": "Nesta intersecção pretendo seguir em frente.",
    "alternatives": [
      {
        "letter": "A",
        "text": "Posso avançar."
      },
      {
        "letter": "B",
        "text": "Devo ceder a passagem ao veículo de tracção animal."
      },
      {
        "letter": "C",
        "text": "Posso avançar, depois de ceder a passagem ao motociclo."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_108.jpg",
    "explanation": "Circulando numa via com prioridade assinalada, o condutor pode avançar em primeiro lugar, mantendo a atenção visual para garantir a segurança no atravessamento do cruzamento. A opção correta para a Questão 108 é a A: \"Posso avançar.\""
  },
  {
    "idx": 108,
    "number": 109,
    "group": "Cedência de passagem",
    "question": "Pretendo mudar de direcção à direita. Devo ceder passagem?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim."
      },
      {
        "letter": "B",
        "text": "Não."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_109.jpg",
    "explanation": "Mudar de direção à direita mantendo a circulação na via principal não impõe o dever de ceder passagem aos veículos que nos seguem na retaguarda, devendo apenas sinalizar a manobra com antecedência. A opção correta para a Questão 109 é a B: \"Não.\""
  },
  {
    "idx": 109,
    "number": 110,
    "group": "Cedência de passagem",
    "question": "Posso avançar:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Antes do velocípede, mas depois de ceder a passagem ao veículo de\ntracção animal."
      },
      {
        "letter": "B",
        "text": "Em simultâneo com o veículo de tracção animal."
      },
      {
        "letter": "C",
        "text": "Antes do velocípede e do veículo de tracção animal."
      }
    ],
    "answer": "C",
    "imageUrl": "/assets/questoes/imagem_110.jpg",
    "explanation": "Nesta interseção desprovida de sinalização de prioridade, aplicando o Artigo 30.º, n.º 1 do Código da Estrada (regra geral da prioridade à direita), o nosso veículo apresenta-se pela direita dos restantes, podendo avançar em primeiro lugar. A opção correta para a Questão 110 é a C: \"Antes do velocípede e do veículo de tracção animal.\""
  },
  {
    "idx": 110,
    "number": 111,
    "group": "Cedência de passagem",
    "question": "Qual deve ser a ordem de passagem nesta intersecção?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Ambulância, veículo pesado, veículo verde e por último o meu veículo."
      },
      {
        "letter": "B",
        "text": "Ambulância, o meu veículo, o veículo verde e por último o veículo\npesado."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_111.jpg",
    "explanation": "A ambulância em serviço de urgência assinalado tem prioridade absoluta de passagem. De seguida, na interseção, o pesado passa antes dos restantes por prioridade à direita, seguido pelo veículo verde e por fim o nosso veículo. A opção correta para a Questão 111 é a A: \"Ambulância, veículo pesado, veículo verde e por último o meu veículo.\""
  },
  {
    "idx": 111,
    "number": 112,
    "group": "Cedência de passagem",
    "question": "Qualquer veículo que saia de uma passagem de nível:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Não tem que ceder passagem."
      },
      {
        "letter": "B",
        "text": "Deve ceder passagem."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_112.jpg",
    "explanation": "Conforme o Artigo 31.º, n.º 2 do Código da Estrada, o condutor que saia de uma passagem de nível beneficia da exceção legal, não tendo o dever de ceder a passagem aos outros condutores para desimpedir rapidamente a via férrea. A opção correta para a Questão 112 é a A: \"Não tem que ceder passagem.\""
  },
  {
    "idx": 112,
    "number": 113,
    "group": "Cedência de passagem",
    "question": "Perante esta situação em que o veículo da direita sai de um\nparque de estacionamento, o que devo fazer?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Avançar."
      },
      {
        "letter": "B",
        "text": "Parar."
      },
      {
        "letter": "C",
        "text": "Ceder passagem."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_113.jpg",
    "explanation": "De acordo com o Artigo 31.º, n.º 1, alínea a) do Código da Estrada, os veículos que saem de um parque de estacionamento ou local garagem perdem a prioridade de passagem, pelo que o nosso veículo na via pública pode avançar. A opção correta para a Questão 113 é a A: \"Avançar.\""
  },
  {
    "idx": 113,
    "number": 114,
    "group": "Cedência de passagem",
    "question": "Ao sair de um prédio particular:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Devo ceder a passagem aos veículos sem motor."
      },
      {
        "letter": "B",
        "text": "Devo ceder a passagem só aos veículos a motor."
      },
      {
        "letter": "C",
        "text": "Posso avançar."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_114.jpg",
    "explanation": "Nos termos do Artigo 31.º, n.º 1, alínea a) do Código da Estrada, ao sair de um prédio ou caminho particular, o condutor é obrigado a ceder passagem a todos os veículos (motorizados ou não, incluindo velocípedes e veículos de tração animal) que circulem na via pública. A opção correta para a Questão 114 é a A: \"Devo ceder a passagem aos veículos sem motor.\""
  },
  {
    "idx": 114,
    "number": 115,
    "group": "Cedência de passagem",
    "question": "Nesta situação em que saio de um prédio particular:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Posso avançar, porque o outro veículo não tem motor."
      },
      {
        "letter": "B",
        "text": "Devo parar."
      },
      {
        "letter": "C",
        "text": "Devo ceder a passagem ao velocípede."
      }
    ],
    "answer": "C",
    "imageUrl": "/assets/questoes/imagem_115.jpg",
    "explanation": "Saindo de um prédio particular, a perda de prioridade é absoluta (Artigo 31.º do C.E.), devendo ceder obrigatoriamente a passagem ao velocípede que já transita na via pública. A opção correta para a Questão 115 é a C: \"Devo ceder a passagem ao velocípede.\""
  },
  {
    "idx": 115,
    "number": 116,
    "group": "Cedência de passagem",
    "question": "Perante este sinal devo ceder passagem:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Só aos veículos que se apresentam pela direita."
      },
      {
        "letter": "B",
        "text": "Só aos veículos com motor que se apresentem pela direita."
      },
      {
        "letter": "C",
        "text": "A todos os veículos que circulem na via de que me aproximo."
      }
    ],
    "answer": "C",
    "imageUrl": "/assets/questoes/imagem_116.jpg",
    "explanation": "O sinal vertical B1 (\"Cedência de passagem\") obriga o condutor a ceder a passagem a todos os veículos que circulem na via de que se aproxima, independentemente da direção de onde provenham. A opção correta para a Questão 116 é a C: \"A todos os veículos que circulem na via de que me aproximo.\""
  },
  {
    "idx": 116,
    "number": 117,
    "group": "Cedência de passagem",
    "question": "Nesta situação devo:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Prosseguir a marcha, com precaução."
      },
      {
        "letter": "B",
        "text": "Ceder a passagem porque o veículo sai de um caminho particular."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_117.jpg",
    "explanation": "Tratando-se de um veículo que sai de um caminho particular ou acesso privado para a via pública, este perde a prioridade, permitindo-nos prosseguir a marcha com a devida precaução. A opção correta para a Questão 117 é a A: \"Prosseguir a marcha, com precaução.\""
  },
  {
    "idx": 117,
    "number": 118,
    "group": "Cedência de passagem",
    "question": "Devido à impossibilidade de cruzamento de automóveis, devo:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Prosseguir normalmente a marcha."
      },
      {
        "letter": "B",
        "text": "Parar e ceder a passagem ao automóvel pesado."
      },
      {
        "letter": "C",
        "text": "Passar o mais rapidamente possível."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_118.jpg",
    "explanation": "De acordo com o Artigo 33.º do Código da Estrada, no cruzamento de vias estreitas onde a passagem simultânea é impossível, se for necessário recuar ou ceder passagem, os veículos ligeiros devem ceder a passagem aos veículos pesados. A opção correta para a Questão 118 é a B: \"Parar e ceder a passagem ao automóvel pesado.\""
  },
  {
    "idx": 118,
    "number": 119,
    "group": "Cedência de passagem",
    "question": "Nesta situação, circulando o outro veículo em sentido oposto,\nposso prosseguir a marcha?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Não, devo reduzir a velocidade e ceder a passagem."
      },
      {
        "letter": "B",
        "text": "Sim, o outro condutor deve ceder-me a passagem."
      },
      {
        "letter": "C",
        "text": "Sim, porque desço."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_119.jpg",
    "explanation": "Nos termos do Artigo 33.º, n.º 2 do Código da Estrada, nas vias de forte inclinação onde o cruzamento seja difícil, o condutor do veículo que desce deve ceder a passagem ao veículo que sobe. A opção correta para a Questão 119 é a A: \"Não, devo reduzir a velocidade e ceder a passagem.\""
  },
  {
    "idx": 119,
    "number": 120,
    "group": "Cedência de passagem",
    "question": "Posso passar:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Depois do veículo da direita e antes do velocípede."
      },
      {
        "letter": "B",
        "text": "Depois do velocípede e antes do veículo da direita."
      },
      {
        "letter": "C",
        "text": "Depois de ceder a passagem a todos os veículos."
      }
    ],
    "answer": "C",
    "imageUrl": "/assets/questoes/imagem_120.jpg",
    "explanation": "Perante o sinal vertical B2 (\"STOP - Paragem obrigatória no cruzamento ou entroncamento\"), o condutor é obrigado a imobilizar o veículo antes da interseção e a ceder a passagem a todos os veículos que circulem na via em que vai entrar, provenientes de ambas as direções (incluindo o velocípede e o outro veículo). Portanto, só se pode passar após ceder a passagem a todos os veículos. A opção correta para a Questão 120 é a C: \"Depois de ceder a passagem a todos os veículos.\""
  },
  {
    "idx": 120,
    "number": 121,
    "group": "Cedência de passagem",
    "question": "Nesta situação:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Devo reduzir a velocidade e ceder a passagem ao condutor da frente."
      },
      {
        "letter": "B",
        "text": "Posso prosseguir, pois o condutor da frente tem o dever de me ceder a\npassagem."
      },
      {
        "letter": "C",
        "text": "Devo buzinar, para o informar que lhe estou a ceder a passagem."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_121.jpg",
    "explanation": "Circulando na nossa via de trânsito sem obstáculo, o condutor do veículo da frente que pretende mudar de via ou realizar uma manobra tem o dever de nos ceder passagem antes de iniciar a mudança de direção. A opção correta para a Questão 121 é a B: \"Posso prosseguir, pois o condutor da frente tem o dever de me ceder a passagem.\""
  },
  {
    "idx": 121,
    "number": 122,
    "group": "Cedência de passagem",
    "question": "Pretendo seguir em frente.",
    "alternatives": [
      {
        "letter": "A",
        "text": "Devo ceder a passagem ao veículo da frente, porque está a dificultar a\ncirculação."
      },
      {
        "letter": "B",
        "text": "Devo ceder a passagem ao veículo da frente, porque vai mudar de\ndirecção."
      },
      {
        "letter": "C",
        "text": "Posso prosseguir a marcha."
      }
    ],
    "answer": "C",
    "imageUrl": "/assets/questoes/imagem_122.jpg",
    "explanation": "Se o veículo da frente se encontra a efetuar regularmente uma manobra ou viragem assinalada, mantendo o seu direito de circulação na interseção, o nosso veículo deve prosseguir a sua marcha mantendo as distâncias de segurança. A opção correta para a Questão 122 é a C: \"Posso prosseguir a marcha.\""
  },
  {
    "idx": 122,
    "number": 123,
    "group": "Cedência de passagem",
    "question": "Neste cruzamento, avanço:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Antes dos outros dois veículos."
      },
      {
        "letter": "B",
        "text": "Depois dos outros dois veículos."
      },
      {
        "letter": "C",
        "text": "Depois do veículo ligeiro e antes do velocípede."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_123.jpg",
    "explanation": "Perante o sinal vertical B2 (\"STOP - Paragem obrigatória no cruzamento ou entroncamento\"), o condutor é obrigado a imobilizar o veículo e a ceder a passagem a todos os veículos que circulem na via em que vai entrar, provenientes de ambas as direções. Por essa razão, deve avançar apenas após a passagem dos outros dois veículos. A opção correta para a Questão 123 é a B: \"Depois dos outros dois veículos.\""
  },
  {
    "idx": 123,
    "number": 124,
    "group": "Cedência de passagem",
    "question": "Ao encontrar este sinal, como devo proceder?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Ceder a passagem a todos os veículos que circulem na via em que vou\nentrar."
      },
      {
        "letter": "B",
        "text": "Ceder a passagem apenas aos veículos vindos da direita."
      },
      {
        "letter": "C",
        "text": "Ceder a passagem apenas aos veículos vindos da esquerda."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_124.jpg",
    "explanation": "O sinal B1 de cedência de passagem determina a obrigação de ceder a passagem a todos os veículos que transitem na via em que se vai entrar ou cruzar. A opção correta para a Questão 124 é a A: \"Ceder a passagem a todos os veículos que circulem na via em que vou entrar.\""
  },
  {
    "idx": 124,
    "number": 125,
    "group": "Cedência de passagem",
    "question": "Nesta situação, devo:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Ceder a passagem."
      },
      {
        "letter": "B",
        "text": "Passar em primeiro lugar."
      },
      {
        "letter": "C",
        "text": "Parar."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_125.jpg",
    "explanation": "Perante a sinalização vertical de prioridade existente no local (sinal B3 - \"Via com prioridade\" ou sinal de aproximação de cruzamento com via sem prioridade), o condutor transita numa via prioritária e tem o direito de avançar em primeiro lugar na interseção. A opção correta para a Questão 125 é a B: \"Passar em primeiro lugar.\""
  },
  {
    "idx": 125,
    "number": 126,
    "group": "Cedência de passagem",
    "question": "Nesta interseção pretendo seguir em frente.",
    "alternatives": [
      {
        "letter": "A",
        "text": "Posso avançar."
      },
      {
        "letter": "B",
        "text": "Devo ceder a passagem ao veículo de tração animal."
      },
      {
        "letter": "C",
        "text": "Posso avançar, depois de ceder a passagem ao motociclo."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_126.jpg",
    "explanation": "Conforme a sinalização vertical de prioridade instalada na via (sinal B3 - \"Via com prioridade\" ou sinal de prioridade nos cruzamentos), o condutor goza de prioridade de passagem sobre os veículos provenientes das vias transversais, podendo avançar em primeiro lugar. A opção correta para a Questão 126 é a A: \"Posso avançar.\""
  },
  {
    "idx": 126,
    "number": 127,
    "group": "Cedência de passagem",
    "question": "Um condutor ecológico deve:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Evitar colocar muita bagagem no porta bagagens."
      },
      {
        "letter": "B",
        "text": "Evitar conduzir veículos com motores híbridos."
      },
      {
        "letter": "C",
        "text": "Evitar usar o ar condicionado do veículo, especialmente em percursos\ncurtos."
      },
      {
        "letter": "D",
        "text": "As afirmações de R:1 e R:3 estão corretas."
      }
    ],
    "answer": "D",
    "explanation": "Práticas de eco-condução incluem evitar carga excessiva e desnecessária no veículo (que aumenta a massa e consumo) e moderar o uso do ar condicionado em trajetos curtos. A opção correta para a Questão 127 é a D: \"As afirmações de R:1 e R:3 estão corretas.\""
  },
  {
    "idx": 127,
    "number": 128,
    "group": "Cedência de passagem",
    "question": "Uma das formas de praticar uma condução mais ecológica é:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Verificar regularmente a pressão dos pneus."
      },
      {
        "letter": "B",
        "text": "Não conduzir com pesos desnecessários no veículo."
      },
      {
        "letter": "C",
        "text": "Conduzir com o veículo desembraiado nas descidas ingremes."
      },
      {
        "letter": "D",
        "text": "As afirmações de R:1 e R:2 estão corretas."
      }
    ],
    "answer": "D",
    "explanation": "A manutenção da pressão correta dos pneus reduz o atrito e resistência ao rolamento, e a eliminação de pesos desnecessários otimiza a eficiência do combustível. A opção correta para a Questão 128 é a D: \"As afirmações de R:1 e R:2 estão corretas.\""
  },
  {
    "idx": 128,
    "number": 129,
    "group": "Cedência de passagem",
    "question": "O condutor contribui para uma maior proteção do ambiente:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Utilizando o ar condicionado só em situações de necessidade."
      },
      {
        "letter": "B",
        "text": "Usando sempre a relação de caixa de velocidades o mais alto possível,\nindependentemente da velocidade a que circular."
      },
      {
        "letter": "C",
        "text": "Fazendo uso de acessórios que provoquem o aumento da resistência\naerodinâmica do veículo."
      }
    ],
    "answer": "A",
    "explanation": "A utilização racional do ar condicionado apenas quando estritamente necessário reduz o esforço do motor e as emissões poluentes para o meio ambiente. A opção correta para a Questão 129 é a A: \"Utilizando o ar condicionado só em situações de necessidade.\""
  },
  {
    "idx": 129,
    "number": 130,
    "group": "Técnicas de condução",
    "question": "Quais são os benefícios da prática generalizada da eco\ncondução?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Contribui para o aumento da emissão de gases com efeito de estufa\npara o arrefecimento global da atmosfera."
      },
      {
        "letter": "B",
        "text": "Leva a um aumento significativo do número de veículos em circulação."
      },
      {
        "letter": "C",
        "text": "Contribui para o aumento do uso de energias renováveis no uso dos\ntransportes rodoviários."
      }
    ],
    "answer": "C",
    "explanation": "A eco-condução consiste na antecipação das condições do tráfego, condução em rotações moderadas e manutenção dos pneus para reduzir consumos e emissões. A opção correta para a Questão 130 é a C: \"Contribui para o aumento do uso de energias renováveis no uso dos\ntransportes rodoviários.\"."
  },
  {
    "idx": 130,
    "number": 131,
    "group": "Técnicas de condução",
    "question": "Um condutor que apresente resultado positivo no exame de\npesquisa de álcool no ar expirado, mediante a utilização de\naparelho aprovado para o efeito, fica impedido de conduzir\npelo período de:",
    "alternatives": [
      {
        "letter": "A",
        "text": "6 horas."
      },
      {
        "letter": "B",
        "text": "8 horas."
      },
      {
        "letter": "C",
        "text": "12 horas."
      }
    ],
    "answer": "C",
    "explanation": "Nos termos do Artigo 81.º, n.º 2 e Artigo 153.º do Código da Estrada, para motoristas profissionais TVDE o limite máximo de TAS é 0,20 g/l. A opção correta para a Questão 131 é a C: \"12 horas.\"."
  },
  {
    "idx": 131,
    "number": 132,
    "group": "Técnicas de condução",
    "question": "Um condutor ecológico deve:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Evitar colocar muita bagagem no porta bagagens."
      },
      {
        "letter": "B",
        "text": "Evitar conduzir veículos com motores híbridos."
      },
      {
        "letter": "C",
        "text": "Evitar usar o ar condicionada do veículo, especialmente em percursos\ncurtos."
      },
      {
        "letter": "D",
        "text": "As afirmações de R:1 e R:3 estão corretas."
      }
    ],
    "answer": "D",
    "explanation": "A eco-condução consiste na antecipação das condições do tráfego, condução em rotações moderadas e manutenção dos pneus para reduzir consumos e emissões. A opção correta para a Questão 132 é a D: \"As afirmações de R:1 e R:3 estão corretas.\"."
  },
  {
    "idx": 132,
    "number": 133,
    "group": "Técnicas de condução",
    "question": "Um aumento de 10% na velocidade pode provocar um aumento\nde 15% no consumo de combustível.",
    "alternatives": [
      {
        "letter": "A",
        "text": "A afirmação é verdadeira."
      },
      {
        "letter": "B",
        "text": "A afirmação é falsa."
      }
    ],
    "answer": "A",
    "explanation": "Conforme os Artigos 24.º a 28.º do Código da Estrada, a velocidade deve ser adaptada ao local, ao trânsito e à sinalização regulamentar. A opção correta para a Questão 133 é a A: \"A afirmação é verdadeira.\"."
  },
  {
    "idx": 133,
    "number": 134,
    "group": "Técnicas de condução",
    "question": "A eco condução é uma forma de condução eficiente, menos\npoluente e mais segura.",
    "alternatives": [
      {
        "letter": "A",
        "text": "A afirmação é verdadeira."
      },
      {
        "letter": "B",
        "text": "A afirmação é falsa."
      }
    ],
    "answer": "A",
    "explanation": "A eco-condução consiste na antecipação das condições do tráfego, condução em rotações moderadas e manutenção dos pneus para reduzir consumos e emissões. A opção correta para a Questão 134 é a A: \"A afirmação é verdadeira.\"."
  },
  {
    "idx": 134,
    "number": 135,
    "group": "Técnicas de condução",
    "question": "Quais são as vantagens da prática de uma eco condução?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Contribui para a diminuição do nível de dióxido de carbono na\natmosfera e de outros gases com efeito de estufa."
      },
      {
        "letter": "B",
        "text": "Aumenta o conforto dos ocupantes do veículo."
      },
      {
        "letter": "C",
        "text": "Contribui para uma menor poluição sonora."
      },
      {
        "letter": "D",
        "text": "Todas as afirmações anteriores são verdadeiras."
      }
    ],
    "answer": "D",
    "explanation": "A eco-condução consiste na antecipação das condições do tráfego, condução em rotações moderadas e manutenção dos pneus para reduzir consumos e emissões. A opção correta para a Questão 135 é a D: \"Todas as afirmações anteriores são verdadeiras.\"."
  },
  {
    "idx": 135,
    "number": 136,
    "group": "Técnicas de condução",
    "question": "A prática da eco condução contribui para:",
    "alternatives": [
      {
        "letter": "A",
        "text": "A otimização do consumo de combustível e a redução da poluição\nambiental."
      },
      {
        "letter": "B",
        "text": "O aumento da sinistralidade rodoviária, embora possa causar\nembaraço no trânsito."
      },
      {
        "letter": "C",
        "text": "Um melhor planeamento das viagens, de forma a evitar os\ncongestionamentos de trânsito."
      },
      {
        "letter": "D",
        "text": "As afirmações de R:1 e R:3 estão corretas."
      }
    ],
    "answer": "D",
    "explanation": "A eco-condução consiste na antecipação das condições do tráfego, condução em rotações moderadas e manutenção dos pneus para reduzir consumos e emissões. A opção correta para a Questão 136 é a D: \"As afirmações de R:1 e R:3 estão corretas.\"."
  },
  {
    "idx": 136,
    "number": 137,
    "group": "Técnicas de condução",
    "question": "Um condutor faz uma condução ecológica, se ao conduzir a\numa determinada velocidade:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Utilizar uma rotação constante do motor, engrenando a mudança\nadequada a esta rotação."
      },
      {
        "letter": "B",
        "text": "Utilizar uma rotação do motor alta, engrenando mudanças mais\nbaixas."
      },
      {
        "letter": "C",
        "text": "Utilizar uma rotação do motor baixa, engrenando mudanças mais\naltas."
      }
    ],
    "answer": "C",
    "explanation": "Conforme os Artigos 24.º a 28.º do Código da Estrada, a velocidade deve ser adaptada ao local, ao trânsito e à sinalização regulamentar. A opção correta para a Questão 137 é a C: \"Utilizar uma rotação do motor baixa, engrenando mudanças mais\naltas.\"."
  },
  {
    "idx": 137,
    "number": 138,
    "group": "Técnicas de condução",
    "question": "Como deve proceder o condutor em descidas de inclinação\nacentuada?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Deve colocar o veículo em ponto morto, de forma a manter o motor\nliberto."
      },
      {
        "letter": "B",
        "text": "Deve manter o veículo engrenado numa mudança compatível,\najudando a travagem com o motor."
      },
      {
        "letter": "C",
        "text": "nenhuma das afirmações está correta."
      }
    ],
    "answer": "B",
    "explanation": "Ao ultrapassar um velocípede ou peão, o Artigo 38.º, n.º 2, alínea e) do Código da Estrada exige que o condutor abrande e guarde uma distância lateral mínima de segurança de 1,5 metros para prevenir quedas ou desequilíbrios. A opção correta para a Questão 138 é a A: \"Afastar-me lateralmente no mínimo 1,5 metros.\""
  },
  {
    "idx": 138,
    "number": 139,
    "group": "Técnicas de condução",
    "question": "A prática da eco condução também contribui para a diminuição\nda sinistralidade rodoviária?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim, contribui."
      },
      {
        "letter": "B",
        "text": "Não, apenas contribui para a redução do consumo de combustível e da\npoluição ambiental."
      },
      {
        "letter": "C",
        "text": "Não, apenas contribui para a diminuição das emissões de gases com\nefeito de estufa."
      }
    ],
    "answer": "A",
    "explanation": "A eco-condução consiste na antecipação das condições do tráfego, condução em rotações moderadas e manutenção dos pneus para reduzir consumos e emissões. A opção correta para a Questão 139 é a A: \"Sim, contribui.\"."
  },
  {
    "idx": 139,
    "number": 140,
    "group": "Técnicas de condução",
    "question": "O que é o consumo médio de um veículo?",
    "alternatives": [
      {
        "letter": "A",
        "text": "É o volume final consumido, em litros, após percorrida uma certa\ndistância."
      },
      {
        "letter": "B",
        "text": "É o volume de combustível, em litros, dividido pela distância\npercorrida, em km."
      },
      {
        "letter": "C",
        "text": "É a medida do consumo num determinado instante de tempo."
      }
    ],
    "answer": "B",
    "explanation": "A eco-condução consiste na antecipação das condições do tráfego, condução em rotações moderadas e manutenção dos pneus para reduzir consumos e emissões. A opção correta para a Questão 140 é a B: \"É o volume de combustível, em litros, dividido pela distância\npercorrida, em km.\"."
  },
  {
    "idx": 140,
    "number": 141,
    "group": "Técnicas de condução",
    "question": "Para que serve o conta-rotações?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Para controlar a velocidade do motor."
      },
      {
        "letter": "B",
        "text": "Para indicar a rotação do motor do veículo."
      },
      {
        "letter": "C",
        "text": "Ambas as afirmações são verdadeiras."
      }
    ],
    "answer": "B",
    "explanation": "Para prevenir colisões traseiras em desacelerações de emergência, o condutor deve acender os avisadores luminosos de perigo (quatro piscas) para alertar atempadamente os veículos que o seguem na retaguarda. A opção correta para a Questão 141 é a A: \"Ligar as luzes de perigo para avisar os veículos que circulam atrás.\""
  },
  {
    "idx": 141,
    "number": 142,
    "group": "Técnicas de condução",
    "question": "A correta pressão dos pneus contribui para uma condução\nmais económica?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim, contribui."
      },
      {
        "letter": "B",
        "text": "Não, apenas contribui para uma melhor estabilidade do veículo."
      },
      {
        "letter": "C",
        "text": "Não, apenas contribui para a manutenção do sistema de suspensão do\nveículo."
      }
    ],
    "answer": "A",
    "explanation": "A eco-condução consiste na antecipação das condições do tráfego, condução em rotações moderadas e manutenção dos pneus para reduzir consumos e emissões. A opção correta para a Questão 142 é a A: \"Sim, contribui.\"."
  },
  {
    "idx": 142,
    "number": 143,
    "group": "Técnicas de condução",
    "question": "Entende-se por ´condução defensiva´:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Não efetuar ultrapassagens em vias com duas vias de trânsito."
      },
      {
        "letter": "B",
        "text": "Conduzir de forma a prevenir, evitar e não provocar acidentes, sejam\nquais forem as condições de circulação, da via, do veículo e\nmeteorológicas, e quaisquer que sejam os comportamentos dos outros\nutentes da via."
      },
      {
        "letter": "C",
        "text": "Efetuar constantes travagens"
      }
    ],
    "answer": "B",
    "explanation": "Os espelhos retrovisores exteriores e interior devem ser regulados com o veículo imobilizado antes de iniciar a marcha, garantindo um campo visual amplo e minimizando os ângulos mortos. A opção correta para a Questão 143 é a A: \"Ajustar os espelhos retrovisores antes de iniciar a marcha.\""
  },
  {
    "idx": 143,
    "number": 144,
    "group": "Técnicas de condução",
    "question": "O veículo deve ser apreendido numa ação de fiscalização,\nsempre que:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sejam desrespeitadas as regras relativas à poluição sonora do solo e\ndo ar."
      },
      {
        "letter": "B",
        "text": "Não tenha sido efetuado o seguro de responsabilidade civil nos termos\nda lei."
      },
      {
        "letter": "C",
        "text": "Se suspeite de viciação fraudulenta no documento de identificação do\nveículo."
      }
    ],
    "answer": "C",
    "explanation": "Diante de uma poça de água e risco de aquaplanagem, o condutor não deve travar bruscamente; deve manter o volante firme, aliviar suavemente o acelerador e manter a trajetória reta. A opção correta para a Questão 144 é a A: \"Segurar no volante com firmeza e desacelerar suavemente.\""
  },
  {
    "idx": 144,
    "number": 145,
    "group": "Técnicas de condução",
    "question": "A segurança rodoviária depende:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Exclusivamente da sinalização."
      },
      {
        "letter": "B",
        "text": "Unicamente do comportamento do utente, enquanto peão."
      },
      {
        "letter": "C",
        "text": "Do equilíbrio que deve existir entre vários elementos que fazem parte\ndo sistema de circulação."
      }
    ],
    "answer": "C",
    "explanation": "Ao efetuar uma travagem de emergência num veículo equipado com ABS (sistema antibloqueio de travões), o condutor deve pressionar com força e continuamente o pedal do travão e da embraiagem até à imobilização total. A opção correta para a Questão 145 é a A: \"Pressionar o pedal do travão com força e mantê-lo pressionado.\""
  },
  {
    "idx": 145,
    "number": 146,
    "group": "Técnicas de condução",
    "question": "O acidente continua a ter como principal causa:",
    "alternatives": [
      {
        "letter": "A",
        "text": "A má sinalização de obras na via pública."
      },
      {
        "letter": "B",
        "text": "A falha humana, pela não adaptação às condições do ambiente\nrodoviário."
      },
      {
        "letter": "C",
        "text": "Os limites de velocidade impostos quando existem obras no\npavimento."
      }
    ],
    "answer": "B",
    "explanation": "A distância de reação é a distância percorrida pelo veículo desde o momento em que o condutor avista o perigo até ao momento em que começa a carregar no pedal do travão, dependendo do estado físico e atenção do condutor. A opção correta para a Questão 146 é a A: \"Distância percorrida desde que se avista o perigo até começar a travar.\""
  },
  {
    "idx": 146,
    "number": 147,
    "group": "Técnicas de condução",
    "question": "A avaliação que cada condutor faz de uma situação, depende\nmuito da sua experiência na condução.",
    "alternatives": [
      {
        "letter": "A",
        "text": "Certo."
      },
      {
        "letter": "B",
        "text": "Errado."
      }
    ],
    "answer": "A",
    "explanation": "Em condições de chuva forte, a aderência dos pneus ao asfalto reduz-se para metade, pelo que o condutor deve duplicar a distância de segurança em relação ao veículo da frente. A opção correta para a Questão 147 é a A: \"Aumentar a distância de segurança para o veículo da frente.\""
  },
  {
    "idx": 147,
    "number": 148,
    "group": "Técnicas de condução",
    "question": "Se aumentar a velocidade, a distância de segurança, deve:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Aumentar."
      },
      {
        "letter": "B",
        "text": "Diminuir."
      },
      {
        "letter": "C",
        "text": "Manter-se."
      }
    ],
    "answer": "A",
    "explanation": "Conforme os Artigos 24.º a 28.º do Código da Estrada, a velocidade deve ser adaptada ao local, ao trânsito e à sinalização regulamentar. A opção correta para a Questão 148 é a A: \"Aumentar.\"."
  },
  {
    "idx": 148,
    "number": 149,
    "group": "Técnicas de condução",
    "question": "Conduzir com chuva tem como resultado:",
    "alternatives": [
      {
        "letter": "A",
        "text": "O aumento de aderência ao piso."
      },
      {
        "letter": "B",
        "text": "A diminuição da distância de paragem."
      },
      {
        "letter": "C",
        "text": "A redução da visibilidade."
      }
    ],
    "answer": "C",
    "explanation": "Conduzir em estado de fadiga diminui o estado de alerta, reduz a capacidade visual e aumenta drasticamente o tempo de reação do condutor perante um imprevisto. A opção correta para a Questão 149 é a A: \"Aumenta o tempo de reação e reduz a atenção.\""
  },
  {
    "idx": 149,
    "number": 150,
    "group": "Técnicas de condução",
    "question": "A condução sob a influência do álcool provoca no condutor:",
    "alternatives": [
      {
        "letter": "A",
        "text": "O aumento do tempo de reação."
      },
      {
        "letter": "B",
        "text": "A diminuição do tempo de reação."
      },
      {
        "letter": "C",
        "text": "O aumento dos seus reflexos."
      }
    ],
    "answer": "A",
    "explanation": "Nos termos do Artigo 81.º, n.º 2 e Artigo 153.º do Código da Estrada, para motoristas profissionais TVDE o limite máximo de TAS é 0,20 g/l. A opção correta para a Questão 150 é a A: \"O aumento do tempo de reação.\"."
  },
  {
    "idx": 150,
    "number": 151,
    "group": "Técnicas de condução",
    "question": "A capacidade de prever e antecipar enquanto condutor\ndefensivo aumenta:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Com a idade."
      },
      {
        "letter": "B",
        "text": "Com a experiência de condução."
      }
    ],
    "answer": "B",
    "explanation": "O álcool afeta o sistema nervoso central, provocando falsa sensação de segurança, redução do campo visual (efeito de túnel) e aumento significativo do tempo de reação. A opção correta para a Questão 151 é a A: \"Diminui a capacidade de reação e altera a perceção de distâncias.\""
  },
  {
    "idx": 151,
    "number": 152,
    "group": "Técnicas de condução",
    "question": "Dos seguintes fatores, qual considera mais importante na\nprevenção de acidentes rodoviários?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Ter um automóvel novo."
      },
      {
        "letter": "B",
        "text": "Obter a carta de condução em idade avançada."
      },
      {
        "letter": "C",
        "text": "Praticar uma condução defensiva."
      }
    ],
    "answer": "C",
    "explanation": "Para evitar o encandeamento causado pelos faróis de um veículo que circula em sentido oposto, o condutor deve desviar o olhar para a direita, orientando-se pela linha limite da faixa de rodagem. A opção correta para a Questão 152 é a A: \"Dirigir o olhar para o bordo direito da faixa de rodagem.\""
  },
  {
    "idx": 152,
    "number": 153,
    "group": "Técnicas de condução",
    "question": "Se a velocidade aumentar, a distância de segurança:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Não se altera."
      },
      {
        "letter": "B",
        "text": "Deve ser menor."
      },
      {
        "letter": "C",
        "text": "Deve também aumentar."
      }
    ],
    "answer": "C",
    "explanation": "Conforme os Artigos 24.º a 28.º do Código da Estrada, a velocidade deve ser adaptada ao local, ao trânsito e à sinalização regulamentar. A opção correta para a Questão 153 é a C: \"Deve também aumentar.\"."
  },
  {
    "idx": 153,
    "number": 154,
    "group": "Técnicas de condução",
    "question": "Um dos efeitos da fadiga na condução traduz-se na diminuição:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Da rapidez dos reflexos."
      },
      {
        "letter": "B",
        "text": "Do tempo de reação."
      },
      {
        "letter": "C",
        "text": "Da distância de paragem."
      }
    ],
    "answer": "A",
    "explanation": "A pressão incorreta dos pneus (especialmente pressão baixa) provoca o seu desgaste irregular, reduz a estabilidade em curva e aumenta consideravelmente o consumo de combustível. A opção correta para a Questão 154 é a A: \"Aumenta o consumo de combustível e reduz a aderência.\""
  },
  {
    "idx": 154,
    "number": 155,
    "group": "Técnicas de condução",
    "question": "Numa viagem longa, para evitar a fadiga, é aconselhável:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Fumar e ouvir musica muito alta."
      },
      {
        "letter": "B",
        "text": "Parar, sair do veículo e descansar."
      },
      {
        "letter": "C",
        "text": "Aumentar a velocidade."
      }
    ],
    "answer": "B",
    "explanation": "Numa descida íngreme e prolongada, para evitar o sobreaquecimento dos travões, o condutor deve engrenar uma mudança baixa e utilizar o travão de motor. A opção correta para a Questão 155 é a A: \"Utilizar o travão de motor engrenando uma mudança baixa.\""
  },
  {
    "idx": 155,
    "number": 156,
    "group": "Técnicas de condução",
    "question": "Numa viagem longa é aconselhável o condutor descansar:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Apenas de 5 em 5 horas."
      },
      {
        "letter": "B",
        "text": "De 2 em 2 horas."
      },
      {
        "letter": "C",
        "text": "Só depois de ter percorrido os primeiros 500 km/h."
      }
    ],
    "answer": "B",
    "explanation": "A utilização do cinto de segurança é obrigatória por lei para todos os ocupantes e reduz drasticamente o risco de lesões graves e de projeção para fora do veículo em caso de colisão. A opção correta para a Questão 156 é a A: \"É obrigatório e reduz significativamente os riscos de lesão grave.\""
  },
  {
    "idx": 156,
    "number": 157,
    "group": "Técnicas de condução",
    "question": "Regra geral, um condutor distraído tem:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Um tempo de reação mais reduzido."
      },
      {
        "letter": "B",
        "text": "Um tempo de reação mais longo."
      },
      {
        "letter": "C",
        "text": "O mesmo tempo de reação que qualquer outro condutor."
      }
    ],
    "answer": "B",
    "explanation": "O encolhimento involuntário ou desvio repentino do volante ao avistar um obstáculo constitui uma reação de pânico ineficaz que pode descontrolar o veículo. A opção correta para a Questão 157 é a A: \"Desviar o volante bruscamente.\""
  },
  {
    "idx": 157,
    "number": 158,
    "group": "Técnicas de condução",
    "question": "A ingestão de bebidas alcoólicas:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Diminui o campo visual."
      },
      {
        "letter": "B",
        "text": "Alarga o campo visual."
      },
      {
        "letter": "C",
        "text": "Não afeta o campo visual."
      }
    ],
    "answer": "A",
    "explanation": "A verificação diária ou periódica do nível do óleo do motor e do líquido de refrigeração previne avarias mecânicas graves e garante o bom funcionamento do veículo. A opção correta para a Questão 158 é a A: \"Verificar os níveis de óleo e de líquido de refrigeração.\""
  },
  {
    "idx": 158,
    "number": 159,
    "group": "Técnicas de condução",
    "question": "Após ingerir bebidas alcoólicas, os obstáculos que o condutor\navista à sua frente na via pública, parecem-lhe:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Mais próximos."
      },
      {
        "letter": "B",
        "text": "Mais longe."
      },
      {
        "letter": "C",
        "text": "À distância real."
      }
    ],
    "answer": "B",
    "explanation": "O uso de telemóvel durante a condução sem sistema de mãos livres é uma infração grave que distrai a atenção visual, cognitiva e motora do condutor. A opção correta para a Questão 159 é a A: \"Provoca distração e aumenta o risco de acidente.\""
  },
  {
    "idx": 159,
    "number": 160,
    "group": "Técnicas de condução",
    "question": "Dos seguintes combustíveis, qual é o menos poluente?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Gasolina sem chumbo."
      },
      {
        "letter": "B",
        "text": "Gás."
      },
      {
        "letter": "C",
        "text": "Gasolina com chumbo."
      }
    ],
    "answer": "B",
    "explanation": "Aquaplanagem ocorre quando uma camada de água impede o contacto direto entre o pneu e o pavimento, resultando na perda total de aderência e direção. A opção correta para a Questão 160 é a A: \"A perda de aderência dos pneus devido a uma camada de água na pista.\""
  },
  {
    "idx": 160,
    "number": 161,
    "group": "Técnicas de condução",
    "question": "Qual é a idade máxima permitida para veículos utilizados no\nserviço TVDE?",
    "alternatives": [
      {
        "letter": "A",
        "text": "5 anos"
      },
      {
        "letter": "B",
        "text": "7 anos"
      },
      {
        "letter": "C",
        "text": "10 anos"
      }
    ],
    "answer": "B",
    "explanation": "Em conformidade com o Artigo 12.º, n.º 1, alínea c) da Lei n.º 45/2018, a idade máxima dos veículos afetos ao serviço TVDE é de 7 anos a contar da primeira matrícula. A opção correta para a Questão 161 é a B: \"7 anos\"."
  },
  {
    "idx": 161,
    "number": 162,
    "group": "Técnicas de condução",
    "question": "Para se tornar motorista TVDE, tem que ter carta de condução\nda categoria B há mais de:",
    "alternatives": [
      {
        "letter": "A",
        "text": "1 ano"
      },
      {
        "letter": "B",
        "text": "2 anos"
      },
      {
        "letter": "C",
        "text": "3 anos"
      }
    ],
    "answer": "C",
    "explanation": "Nos termos do Artigo 10.º, n.º 1, alínea a) da Lei n.º 45/2018, para aceder à profissão de motorista de TVDE é exigida carta de condução B há mais de 3 anos com averbamento do Grupo 2. A opção correta para a Questão 162 é a C: \"3 anos\"."
  },
  {
    "idx": 162,
    "number": 163,
    "group": "Técnicas de condução",
    "question": "Os motoristas TVDE estão autorizados a recolher passageiros\ndiretamente na via pública?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim, em qualquer situação"
      },
      {
        "letter": "B",
        "text": "Não, apenas mediante reserva na plataforma eletrónica"
      },
      {
        "letter": "C",
        "text": "Sim, exceto em praças de táxis"
      }
    ],
    "answer": "B",
    "explanation": "De acordo com os Artigos 2.º e 13.º da Lei n.º 45/2018, o serviço TVDE só pode ser contratado por plataforma eletrónica, sendo proibido angariar passageiros na via pública. A opção correta para a Questão 163 é a B: \"Não, apenas mediante reserva na plataforma eletrónica\"."
  },
  {
    "idx": 163,
    "number": 164,
    "group": "Técnicas de condução",
    "question": "Os veículos TVDE podem ter publicidade no exterior?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim, sem restrições"
      },
      {
        "letter": "B",
        "text": "Sim, desde que seja aprovada pelo IMT"
      },
      {
        "letter": "C",
        "text": "Não, é proibido"
      }
    ],
    "answer": "C",
    "explanation": "Segundo o Artigo 12.º da Lei n.º 45/2018, os veículos TVDE são descaracterizados e é expressamente proibida a afixação de publicidade exterior. A opção correta para a Questão 164 é a C: \"Não, é proibido\"."
  },
  {
    "idx": 164,
    "number": 165,
    "group": "Regulamentação da atividade",
    "question": "Qual é o tempo máximo de condução permitido para\nmotoristas TVDE num período de 24 horas?",
    "alternatives": [
      {
        "letter": "A",
        "text": "8 horas"
      },
      {
        "letter": "B",
        "text": "10 horas"
      },
      {
        "letter": "C",
        "text": "12 horas"
      }
    ],
    "answer": "B",
    "explanation": "Nos termos do Artigo 13.º da Lei n.º 45/2018, o limite máximo diário de condução contínua e acumulada para motoristas TVDE é de 10 horas num período de 24 horas. A opção correta para a Questão 165 é a B: \"10 horas\"."
  },
  {
    "idx": 165,
    "number": 166,
    "group": "Regulamentação da atividade",
    "question": "Em que situação é permitido utilizar veículos com matrícula\nestrangeira no serviço TVDE?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Em nenhum caso"
      },
      {
        "letter": "B",
        "text": "Somente para viagens internacionais"
      },
      {
        "letter": "C",
        "text": "Com autorização do IMT"
      }
    ],
    "answer": "A",
    "explanation": "Nos termos do Artigo 3.º da Lei n.º 45/2018, o transporte em TVDE só pode ser efetuado por veículos inscritos junto do IMT e associados a um operador licenciado. A opção correta para a Questão 166 é a A: \"De estar inscrito junto do IMT e associado a um operador licenciado.\""
  },
  {
    "idx": 166,
    "number": 167,
    "group": "Regulamentação da atividade",
    "question": "Qual destes requisitos é obrigatório para obter o certificado de\nmotorista TVDE?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Frequência de um curso de formação rodoviária específico"
      },
      {
        "letter": "B",
        "text": "Possuir seguro automóvel"
      },
      {
        "letter": "C",
        "text": "Participação em seminários de segurança"
      }
    ],
    "answer": "A",
    "explanation": "De acordo com a Lei n.º 45/2018, o certificado de motorista de TVDE (CMTVDE) tem a validade de 5 anos, renovável mediante a frequência de curso de formação de atualização. A opção correta para a Questão 167 é a A: \"5 anos.\""
  },
  {
    "idx": 167,
    "number": 168,
    "group": "Regulamentação da atividade",
    "question": "Quem é responsável pela fiscalização do cumprimento das\nnormas no serviço TVDE?",
    "alternatives": [
      {
        "letter": "A",
        "text": "GNR e IMT"
      },
      {
        "letter": "B",
        "text": "PSP, GNR e IMT"
      },
      {
        "letter": "C",
        "text": "GNR e PSP"
      }
    ],
    "answer": "B",
    "explanation": "Conforme o Artigo 24.º da Lei n.º 45/2018, a fiscalização da atividade compete à PSP, GNR, IMT, I.P., ACT e Autoridade Tributária. A opção correta para a Questão 168 é a B: \"PSP, GNR e IMT\"."
  },
  {
    "idx": 168,
    "number": 169,
    "group": "Regulamentação da atividade",
    "question": "Qual é a duração mínima do curso de formação inicial\nrodoviária para motoristas TVDE?",
    "alternatives": [
      {
        "letter": "A",
        "text": "20 horas"
      },
      {
        "letter": "B",
        "text": "30 horas"
      },
      {
        "letter": "C",
        "text": "50 horas"
      }
    ],
    "answer": "C",
    "explanation": "De acordo com o Artigo 10.º da Lei n.º 45/2018 e a Portaria n.º 293/2018, o curso de formação inicial para motorista de TVDE tem a duração mínima de 50 horas. A opção correta para a Questão 169 é a C: \"50 horas\"."
  },
  {
    "idx": 169,
    "number": 170,
    "group": "Regulamentação da atividade",
    "question": "Qual é o tempo máximo permitido para veículos TVDE\noperarem antes de passar por uma inspeção técnica?",
    "alternatives": [
      {
        "letter": "A",
        "text": "1 ano após a matrícula e, depois, anualmente"
      },
      {
        "letter": "B",
        "text": "2 anos após a matrícula e, depois, bienalmente"
      },
      {
        "letter": "C",
        "text": "Apenas no prazo estipulado pelo IMT"
      }
    ],
    "answer": "A",
    "explanation": "De acordo com o Artigo 12.º, n.º 1, alínea d) da Lei n.º 45/2018, a inspeção técnica periódica é obrigatória 1 ano após a matrícula e depois anualmente. A opção correta para a Questão 170 é a A: \"1 ano após a matrícula e, depois, anualmente\"."
  },
  {
    "idx": 170,
    "number": 171,
    "group": "Regulamentação da atividade",
    "question": "A via reservada a veículos de transporte público, por veículos\nTVDE é:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Permitido em vias de trânsito rápidas"
      },
      {
        "letter": "B",
        "text": "Proibida a circulação"
      },
      {
        "letter": "C",
        "text": "Permitido apenas em algumas cidades"
      }
    ],
    "answer": "B",
    "explanation": "Conforme o Regulamento de Sinalização do Trânsito e a Lei n.º 45/2018, os veículos TVDE não têm equiparação a transporte público regular em vias reservadas (BUS), sendo a sua circulação aí proibida salvo sinalização local permissiva. A opção correta para a Questão 171 é a B: \"Proibida a circulação\"."
  },
  {
    "idx": 171,
    "number": 172,
    "group": "Regulamentação da atividade",
    "question": "Para ser motorista de TVDE tenho de ter carta de condução da\ncategoria B há mais de 3 anos.",
    "alternatives": [
      {
        "letter": "A",
        "text": "Falso"
      },
      {
        "letter": "B",
        "text": "Verdadeiro"
      }
    ],
    "answer": "B",
    "explanation": "Nos termos do Artigo 10.º, n.º 1, alínea a) da Lei n.º 45/2018, para aceder à profissão de motorista de TVDE é exigida carta de condução B há mais de 3 anos com averbamento do Grupo 2. A opção correta para a Questão 172 é a B: \"Verdadeiro\"."
  },
  {
    "idx": 172,
    "number": 173,
    "group": "Regulamentação da atividade",
    "question": "Os motoristas TVDE podem recolher passageiros diretamente\nna via pública sem reserva prévia.",
    "alternatives": [
      {
        "letter": "A",
        "text": "Falso"
      },
      {
        "letter": "B",
        "text": "Verdadeiro"
      }
    ],
    "answer": "A",
    "explanation": "De acordo com os Artigos 2.º e 13.º da Lei n.º 45/2018, o serviço TVDE só pode ser contratado por plataforma eletrónica, sendo proibido angariar passageiros na via pública. A opção correta para a Questão 173 é a A: \"Falso\"."
  },
  {
    "idx": 173,
    "number": 174,
    "group": "Regulamentação da atividade",
    "question": "Os veículos utilizados no serviço TVDE devem ter idade inferior\na 7 anos a partir da primeira matrícula.",
    "alternatives": [
      {
        "letter": "A",
        "text": "Falso"
      },
      {
        "letter": "B",
        "text": "Verdadeiro"
      }
    ],
    "answer": "B",
    "explanation": "Em conformidade com o Artigo 12.º, n.º 1, alínea c) da Lei n.º 45/2018, a idade máxima dos veículos afetos ao serviço TVDE é de 7 anos a contar da primeira matrícula. A opção correta para a Questão 174 é a B: \"Verdadeiro\"."
  },
  {
    "idx": 174,
    "number": 175,
    "group": "Regulamentação da atividade",
    "question": "O certificado de motorista TVDE é válido por 10 anos.",
    "alternatives": [
      {
        "letter": "A",
        "text": "Falso"
      },
      {
        "letter": "B",
        "text": "Verdadeiro"
      }
    ],
    "answer": "A",
    "explanation": "Nos termos da regulamentação TVDE (Lei n.º 45/2018), os veículos afetos à atividade não podem ter idade superior a 7 anos a contar da data do primeiro registo/matrícula. A opção correta para a Questão 175 é a A: \"7 anos.\""
  },
  {
    "idx": 175,
    "number": 176,
    "group": "Regulamentação da atividade",
    "question": "É permitido ter publicidade no exterior dos veículos TVDE,\ndesde que aprovada pelo IMT.",
    "alternatives": [
      {
        "letter": "A",
        "text": "Falso"
      },
      {
        "letter": "B",
        "text": "Verdadeiro"
      }
    ],
    "answer": "A",
    "explanation": "Segundo o Artigo 12.º da Lei n.º 45/2018, os veículos TVDE são descaracterizados e é expressamente proibida a afixação de publicidade exterior. A opção correta para a Questão 176 é a A: \"Falso\"."
  },
  {
    "idx": 176,
    "number": 177,
    "group": "Regulamentação da atividade",
    "question": "Veículos usados no serviço TVDE podem ser de matrícula\nestrangeira, desde que sejam autorizados pelo IMT.",
    "alternatives": [
      {
        "letter": "A",
        "text": "Falso"
      },
      {
        "letter": "B",
        "text": "Verdadeiro"
      }
    ],
    "answer": "A",
    "explanation": "O dístico identificador de TVDE é de afixação obrigatória no para-brisas dianteiro e no óculo traseiro do veículo durante o período de prestação de serviços. A opção correta para a Questão 177 é a A: \"No para-brisas dianteiro e no óculo traseiro.\""
  },
  {
    "idx": 177,
    "number": 178,
    "group": "Regulamentação da atividade",
    "question": "Motoristas TVDE devem possuir um curso de formação\nrodoviária inicial de 50 horas para exercerem a atividade.",
    "alternatives": [
      {
        "letter": "A",
        "text": "Verdadeiro"
      },
      {
        "letter": "B",
        "text": "Falso"
      }
    ],
    "answer": "A",
    "explanation": "De acordo com o Artigo 10.º da Lei n.º 45/2018 e a Portaria n.º 293/2018, o curso de formação inicial para motorista de TVDE tem a duração mínima de 50 horas. A opção correta para a Questão 178 é a A: \"Verdadeiro\"."
  },
  {
    "idx": 178,
    "number": 179,
    "group": "Regulamentação da atividade",
    "question": "O serviço de TVDE só pode ser contratado através de\nplataforma eletrónica:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Verdadeiro"
      },
      {
        "letter": "B",
        "text": "Falso"
      }
    ],
    "answer": "A",
    "explanation": "De acordo com os Artigos 2.º e 13.º da Lei n.º 45/2018, o serviço TVDE realiza-se exclusivamente mediante reserva prévia contratada através de plataforma eletrónica. A opção correta para a Questão 179 é a A: \"Verdadeiro\"."
  },
  {
    "idx": 179,
    "number": 180,
    "group": "Regulamentação da atividade",
    "question": "As regras gerais de atuação em caso de acidente são:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sinalizar o veículo, alertar as autoridades e parar o motor do veículo"
      },
      {
        "letter": "B",
        "text": "Alertar as autoridades, sinalizar o veículo e parar o veículo"
      },
      {
        "letter": "C",
        "text": "Parar o motor do veículo, sinalizar o veículo e alertar as autoridades"
      },
      {
        "letter": "D",
        "text": "Nenhuma das respostas anteriores está correta"
      }
    ],
    "answer": "C",
    "explanation": "A reserva de serviços de TVDE é efetuada exclusivamente através da plataforma eletrónica e aplicação dedicada, sendo proibida a angariação direta de passageiros na via pública. A opção correta para a Questão 180 é a A: \"Exclusivamente através de plataforma eletrónica.\""
  },
  {
    "idx": 180,
    "number": 181,
    "group": "Regulamentação da atividade",
    "question": "Fogo é uma reação química:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Que ocorre num determinado local, sempre que o calor seja em\nexcesso"
      },
      {
        "letter": "B",
        "text": "Entre o combustível e o oxigénio do ar (comburente), face a uma fonte\nde calor"
      },
      {
        "letter": "C",
        "text": "Provocada por uma fonte de energia"
      },
      {
        "letter": "D",
        "text": "Que ocorre em determinados materiais provocado pelo aumento da\ntemperatura"
      }
    ],
    "answer": "B",
    "explanation": "No âmbito dos primeiros socorros e segurança contra incêndios, o fogo (combustão) é uma reação química exotérmica entre o combustível e o comburente (oxigénio do ar) sob ação de uma fonte de calor. A opção correta para a Questão 181 é a B: \"Entre o combustível e o oxigénio do ar (comburente), face a uma fonte\nde calor\"."
  },
  {
    "idx": 181,
    "number": 182,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Perante uma ferida simples numa zona sem fraturas:",
    "alternatives": [
      {
        "letter": "A",
        "text": "O melhor método é fazer compressão directa"
      },
      {
        "letter": "B",
        "text": "Deve-se aplicar sempre um garrote"
      },
      {
        "letter": "C",
        "text": "Deve-se ligar imediatamente 112 e não fazer nada"
      },
      {
        "letter": "D",
        "text": "Uma hemorragia não é grave e por isso não é necessário fazer nada"
      }
    ],
    "answer": "A",
    "explanation": "No controlo de hemorragias externas, a técnica prioritária é a compressão direta sobre a lesão com penso limpo. A opção correta para a Questão 182 é a A: \"O melhor método é fazer compressão directa\"."
  },
  {
    "idx": 182,
    "number": 183,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Numa situação de queimadura, os cuidados de emergência\nvisam:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Aliviar a dor"
      },
      {
        "letter": "B",
        "text": "Prevenir o choque"
      },
      {
        "letter": "C",
        "text": "Prevenir a infecção"
      },
      {
        "letter": "D",
        "text": "Todas as respostas anteriores estão corretas"
      }
    ],
    "answer": "C",
    "explanation": "Em queimaduras, deve arrefecer a zona atingida com água limpa corrente para conter a destruição dos tecidos e aliviar a dor. A opção correta para a Questão 183 é a C: \"Prevenir a infecção\"."
  },
  {
    "idx": 183,
    "number": 184,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Em caso de incêndio, um motorista:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Tem de conseguir extinguir o incêndio antes de garantir a evacuação\ndos ocupantes do veículo"
      },
      {
        "letter": "B",
        "text": "Não deve parar, excepto se o incêndio for no motor"
      },
      {
        "letter": "C",
        "text": "Deve garantir a evacuação dos ocupantes do&nbsp;veículo para uma\nzona segura"
      },
      {
        "letter": "D",
        "text": "Todas as respostas anteriores estão corretas"
      }
    ],
    "answer": "C",
    "explanation": "Em caso de incêndio, direcione o extintor com jatos curtos para a base das chamas, posicionando-se a favor do vento. A opção correta para a Questão 184 é a D: \"Todas as respostas anteriores estão corretas\"."
  },
  {
    "idx": 184,
    "number": 185,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Em caso de tentativa de agressão ou agressão ao motorista:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Não deve ser contatada a autoridade para evitar problemas"
      },
      {
        "letter": "B",
        "text": "Deve adotar-se uma atitude de confronto"
      },
      {
        "letter": "C",
        "text": "Os atos do motorista devem basear-se em evitar sempre o confronto"
      },
      {
        "letter": "D",
        "text": "O motorista deve reagir violentamente e se possível imobilizar o\nagressor"
      }
    ],
    "answer": "C",
    "explanation": "Perante uma paragem cárdio-respiratória confirmada, o rácio normalizado de reanimação cárdio-pulmonar (RCP) em adultos consiste em 30 compressões torácicas alternadas com 2 ventilações de resgate. A opção correta para a Questão 185 é a C: \"30 compressões e 2 ventilações.\""
  },
  {
    "idx": 185,
    "number": 186,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Um condutor que assista a um acidente no qual existam\npessoas ou haja veículos danificados tem o dever de prestar o\nauxílio. Indique o comportamento que não deve ser adoptado:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Antes de sair do veículo para prestar auxílio, deve assegurar-se de que\no próprio, os seus passageiros e o seu veículo estão em segurança"
      },
      {
        "letter": "B",
        "text": "Manter a calma"
      },
      {
        "letter": "C",
        "text": "Descrever correctamente qual a situação e responder às perguntas\nque a central de emergência faz"
      },
      {
        "letter": "D",
        "text": "Não desligar a ignição dos veículos acidentados"
      }
    ],
    "answer": "D",
    "explanation": "A Posição Lateral de Segurança (PLS) destina-se a vítimas inconscientes que mantêm ventilação normal, prevenindo a queda da língua e a aspiração de vómito para as vias aéreas. A opção correta para a Questão 186 é a B: \"Permitir a drenagem de fluidos e manter a permeabilidade das vias aéreas em vítimas inconscientes que respiram.\""
  },
  {
    "idx": 186,
    "number": 187,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Em caso de acidente com a sua viatura, qual o procedimento\nque não deve ser adotado:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Manter a calma"
      },
      {
        "letter": "B",
        "text": "Avaliar a segurança do local"
      },
      {
        "letter": "C",
        "text": "Efetuar uma rápida avaliação da vítima"
      },
      {
        "letter": "D",
        "text": "Abandonar o local"
      }
    ],
    "answer": "D",
    "explanation": "Ao acionar o 112 (Número Europeu de Emergência), o socorrista deve indicar com precisão a localização exata do acidente, o número de vítimas e a gravidade dos ferimentos, desligando apenas quando instruído. A opção correta para a Questão 187 é a D: \"Indicar o local exato, número e estado das vítimas e desligar apenas quando instruído pelo operador.\""
  },
  {
    "idx": 187,
    "number": 188,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Quando ocorre um incêndio num veículo, o motorista deve\nadotar certos procedimentos. Das seguintes hipóteses, qual é\naquela que não deve ser adotada:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Ligar os 4 indicadores de mudança de direcção"
      },
      {
        "letter": "B",
        "text": "Encostar à berma"
      },
      {
        "letter": "C",
        "text": "Chamar socorro"
      },
      {
        "letter": "D",
        "text": "Manter o veículo em funcionamento"
      }
    ],
    "answer": "D",
    "explanation": "Em caso de incêndio, direcione o extintor com jatos curtos para a base das chamas, posicionando-se a favor do vento. A opção correta para a Questão 188 é a D: \"Manter o veículo em funcionamento\"."
  },
  {
    "idx": 188,
    "number": 189,
    "group": "Situações de emergência e primeiros socorros",
    "question": "No contexto do transporte rodoviário os riscos de agressão e\nviolência aos motoristas e respetivos veículos tem vindo a\naumentar. Em situações de agressão deve:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Tentar prever potenciais situações de conflito e identificar potenciais\nagressores"
      },
      {
        "letter": "B",
        "text": "Saber controlar as emoções e tomar decisões"
      },
      {
        "letter": "C",
        "text": "Saber identificar potencias agressores perante a autoridade"
      },
      {
        "letter": "D",
        "text": "Tentar prever potenciais situações de conflito e identificar potenciais\nagressores, assim como controlar as emoções e tomar decisões"
      }
    ],
    "answer": "D",
    "explanation": "Numa hemorragia externa abundante nos membros, o método primário de controlo é a compressão direta com penso estéril sobre o local do sangramento. A opção correta para a Questão 189 é a A: \"Efetuar compressão direta sobre a ferida com penso estéril.\""
  },
  {
    "idx": 189,
    "number": 190,
    "group": "Situações de emergência e primeiros socorros",
    "question": "As regras gerais de actuação em caso de acidente são:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sinalizar o veículo, alertar as autoridades e parar o motor do veículo"
      },
      {
        "letter": "B",
        "text": "Alertar as autoridades, sinalizar o veículo e parar o veículo"
      },
      {
        "letter": "C",
        "text": "Parar o motor do veículo, sinalizar o veículo e alertar as autoridades"
      },
      {
        "letter": "D",
        "text": "Nenhuma das respostas anteriores está correcta"
      }
    ],
    "answer": "C",
    "explanation": "Em queimaduras graves de primeiro ou segundo grau, a medida imediata de primeiros socorros consiste em arrefecer a zona afetada com água corrente tépida ou fria durante cerca de 10 a 15 minutos. A opção correta para a Questão 190 é a A: \"Arrefecer a zona queimada com água corrente limpa.\""
  },
  {
    "idx": 190,
    "number": 191,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Em caso de acidente e suspeita de vítimas acidentadas com\nlesões deverá ligar para o:",
    "alternatives": [
      {
        "letter": "A",
        "text": "113"
      },
      {
        "letter": "B",
        "text": "112"
      },
      {
        "letter": "C",
        "text": "116"
      },
      {
        "letter": "D",
        "text": "115"
      }
    ],
    "answer": "B",
    "explanation": "Perante a suspeita de traumatismo vertebro-medular (coluna), a regra fundamental de socorro é não movimentar a vítima nem alterar o alinhamento da cabeça e pescoço sem imobilização profissional. A opção correta para a Questão 191 é a C: \"Manter a vítima imóvel e alinhar a cabeça sem forçar.\""
  },
  {
    "idx": 191,
    "number": 192,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Fogo é uma reacção química:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Que ocorre num determinado local, sempre que o calor seja em\nexcesso"
      },
      {
        "letter": "B",
        "text": "Entre o combustível e o oxigénio do ar (comburente), face a uma fonte\nde calor"
      },
      {
        "letter": "C",
        "text": "Provocada por uma fonte de energia"
      },
      {
        "letter": "D",
        "text": "Que ocorre em determinados materiais provocado pelo aumento da\ntemperatura"
      }
    ],
    "answer": "B",
    "explanation": "O colete refletor de alta visibilidade deve ser vestido pelo condutor antes de sair do veículo na via pública para sinalizar uma avaria ou acidente. A opção correta para a Questão 192 é a C: \"Vestir o colete refletor antes de sair do veículo.\""
  },
  {
    "idx": 192,
    "number": 193,
    "group": "Situações de emergência e primeiros socorros",
    "question": "O 1º Socorro é a primeira assistência ou ajuda prestada a\nqualquer indivíduo vítima de acidente ou doença súbita, com o\nfim de evitar que o seu estado se agrave, e melhore se\npossível, até à chegada da ambulância, ou de socorros\nespecializados. Os seus ob",
    "alternatives": [
      {
        "letter": "A",
        "text": "Manter a vida"
      },
      {
        "letter": "B",
        "text": "Prevenir o aparecimento de novas lesões"
      },
      {
        "letter": "C",
        "text": "Promover a recuperação"
      },
      {
        "letter": "D",
        "text": "Todas as respostas anteriores estão correctas"
      }
    ],
    "answer": "D",
    "explanation": "O sinal de pré-sinalização de perigo (triângulo) deve ser colocado perpendicularmente à faixa de rodagem a uma distância mínima de 30 metros da retaguarda do veículo e visível a pelo menos 100 metros. A opção correta para a Questão 193 é a A: \"A pelo menos 30 metros do veículo e visível a 100 metros.\""
  },
  {
    "idx": 193,
    "number": 194,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Na Reanimação Cardio-Respiratória, a razão entre as\ncompressões torácicas e as insuflações é:",
    "alternatives": [
      {
        "letter": "A",
        "text": "15 compressões para 3 insuflações (15:3)"
      },
      {
        "letter": "B",
        "text": "20 compressões para 5 insuflações (20:5)"
      },
      {
        "letter": "C",
        "text": "30 compressões para 2 insuflações (30:2)"
      },
      {
        "letter": "D",
        "text": "10 compressões para 1 insuflação (10:1)"
      }
    ],
    "answer": "C",
    "explanation": "O extintor de incêndio do veículo deve estar em local de acesso rápido e desimpedido, devendo a sua carga e validade ser verificadas regularmente. A opção correta para a Questão 194 é a A: \"Verificar a validade da carga e manter em local acessível.\""
  },
  {
    "idx": 194,
    "number": 195,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Não devem ser aplicadas compressões abdominais em:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Mulheres grávidas"
      },
      {
        "letter": "B",
        "text": "Crianças com mais de 5 anos"
      },
      {
        "letter": "C",
        "text": "Crianças com mais de 1 ano"
      },
      {
        "letter": "D",
        "text": "Idosos com mais de 70 anos"
      }
    ],
    "answer": "A",
    "explanation": "Ao socorrer um motociclista vítima de acidente, não se deve retirar o capacete, salvo em situações extremas de paragem respiratória e por pessoal devidamente treinado. A opção correta para a Questão 195 é a C: \"Não retirar o capacete, exceto se houver obstrução respiratória e por pessoal habilitado.\""
  },
  {
    "idx": 195,
    "number": 196,
    "group": "Situações de emergência e primeiros socorros",
    "question": "A posição lateral de segurança:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Deve ser provocada nas vítimas que respiram normalmente"
      },
      {
        "letter": "B",
        "text": "Deve ser provocada nas vítimas que não respiram"
      },
      {
        "letter": "C",
        "text": "Não é necessário confirmar regularmente a eficácia da respiração para\nprovocar a posição referida"
      },
      {
        "letter": "D",
        "text": "A posição lateral nunca deve ser provocada"
      }
    ],
    "answer": "A",
    "explanation": "O exame primário de uma vítima de acidente avalia as funções vitais prioritárias segundo a metodologia ABC (Vias aéreas, Ventilação e Circulação). A opção correta para a Questão 196 é a A: \"A avaliação imediata das funções vitais (consciência, respiração e circulação).\""
  },
  {
    "idx": 196,
    "number": 197,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Em caso de queimadura deve-se:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Lavar o local com água quente durante aproximadamente 15 minutos"
      },
      {
        "letter": "B",
        "text": "Não tocar na lesão"
      },
      {
        "letter": "C",
        "text": "Furar as bolhas existentes"
      },
      {
        "letter": "D",
        "text": "Colocar sobre a lesão soluções ou pomadas"
      }
    ],
    "answer": "B",
    "explanation": "Em queimaduras, deve arrefecer a zona atingida com água limpa corrente para conter a destruição dos tecidos e aliviar a dor. A opção correta para a Questão 197 é a B: \"Não tocar na lesão\"."
  },
  {
    "idx": 197,
    "number": 198,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Em caso de intoxicação:",
    "alternatives": [
      {
        "letter": "A",
        "text": "A vítima não deve ser retirada do local"
      },
      {
        "letter": "B",
        "text": "Se a vítima estiver contaminada com tóxicos ou venenos o socorrista\ndeve usar protecções do corpo e da roupa (luvas e avental)"
      },
      {
        "letter": "C",
        "text": "Nunca é necessário retirar as peças de vestuário da vítima"
      },
      {
        "letter": "D",
        "text": "Deve ser fornecido álcool à vítima"
      }
    ],
    "answer": "B",
    "explanation": "O estado de choque (choc) caracteriza-se por uma insuficiência circulatória aguda, devendo a vítima ser mantida aquecida e em decúbito dorsal com as pernas ligeiramente elevadas se não houver suspeita de trauma. A opção correta para a Questão 198 é a A: \"Manter a vítima aquecida e desapertar o vestuário sem lhe dar de beber.\""
  },
  {
    "idx": 198,
    "number": 199,
    "group": "Situações de emergência e primeiros socorros",
    "question": "O exame primário da vítima consiste na:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Observação do diâmetro das pupilas, da coloração, temperatura e grau\nde humidade da pele."
      },
      {
        "letter": "B",
        "text": "Verificação em primeiro lugar da existência de ventilação."
      },
      {
        "letter": "C",
        "text": "Avaliação em primeiro lugar da existência de pulsação."
      },
      {
        "letter": "D",
        "text": "Avaliação em primeiro lugar do estado de consciência da vítima"
      }
    ],
    "answer": "D",
    "explanation": "A primeira ação do exame primário para determinar a gravidade do estado da vítima é a avaliação do seu estado de consciência (chamando e estimulando suavemente). A opção correta para a Questão 199 é a D: \"Avaliação em primeiro lugar do estado de consciência da vítima.\""
  },
  {
    "idx": 199,
    "number": 200,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Perante uma vítima de acidente o procedimento adequado é:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Remover de imediato a vítima do veículo"
      },
      {
        "letter": "B",
        "text": "Não movimentar a vítima, excepto se existir perigo iminente de\nincêndio, explosão ou qualquer outra situação que ponha em risco a vida\nda vítima"
      },
      {
        "letter": "C",
        "text": "Não retirar em caso algum a vítima do veículo"
      },
      {
        "letter": "D",
        "text": "Ajudar a vítima a sair do veículo"
      }
    ],
    "answer": "B",
    "explanation": "A vítima de acidente não deve ser movimentada nem retirada do veículo, salvo se existir perigo iminente de incêndio, explosão ou submersão que ponha a vida em risco imediato. A opção correta para a Questão 200 é a B: \"Não movimentar a vítima, excepto se existir perigo iminente de incêndio, explosão ou qualquer outra situação que ponha em risco a vida da vítima.\""
  },
  {
    "idx": 200,
    "number": 201,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Os princípios gerais de socorrismo são:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Prever, ajudar e socorrer"
      },
      {
        "letter": "B",
        "text": "Parar, socorrer e alertar"
      },
      {
        "letter": "C",
        "text": "Socorrer e ligar 112"
      },
      {
        "letter": "D",
        "text": "Prevenir, alertar e socorrer"
      }
    ],
    "answer": "D",
    "explanation": "Os princípios de atuação no socorrismo (Algoritmo PAS) são: Prevenir a zona de perigo, Alertar os serviços de emergência (112) e Socorrer as vítimas. A opção correta para a Questão 201 é a D: \"Prevenir, alertar e socorrer\"."
  },
  {
    "idx": 201,
    "number": 202,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Uma vítima de asfixia por obstrução das vias respiratórias\ndevido à presença de um corpo estranho deve ser socorrida:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Com reanimação cárdio-pulmonar"
      },
      {
        "letter": "B",
        "text": "Através da colocação em posição lateral de segurança"
      },
      {
        "letter": "C",
        "text": "Com realização de pancadas interescapulares ou manobra de Heimlich"
      },
      {
        "letter": "D",
        "text": "Através da colocação em decúbito dorsal"
      }
    ],
    "answer": "C",
    "explanation": "Em caso de obstrução grave das vias aéreas por corpo estranho numa vítima consciente, deve aplicar-se a sequência de pancadas interescapulares alternadas com a manobra de Heimlich (compressões abdominais). A opção correta para a Questão 202 é a C: \"Com realização de pancadas interescapulares ou manobra de Heimlich.\""
  },
  {
    "idx": 202,
    "number": 203,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Para sinalizar correctamente o local do acidente o motorista\ndeve:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Estacionar o veículo antes do local do acidente, ligar as luzes de\nperigo, vestir o colete e colocar o sinal de pré-sinalização de perigo a pelo\nmenos 30m da retaguarda do veículo ou da carga a sinalizar."
      },
      {
        "letter": "B",
        "text": "Estacionar o veículo depois do local do acidente, ligar as luzes de\nperigo, vestir o colete e colocar o sinal de pré-sinalização de perigo a pelo\nmenos 30m da retaguarda do veículo ou da carga a sinalizar."
      },
      {
        "letter": "C",
        "text": "Estacionar o veículo antes do local do acidente, ligar as luzes de\nperigo, vestir o colete e colocar o sinal de pré-sinalização de perigo a pelo\nmenos 50m da retaguarda do veículo ou da carga a sinalizar."
      },
      {
        "letter": "D",
        "text": "Estacionar o veículo antes do local do acidente, ligar as luzes de\nperigo, vestir o colete e colocar o sinal de pré-sinalização de perigo a pelo\nmenos 100m da retaguarda do veículo ou da carga a sinalizar."
      }
    ],
    "answer": "A",
    "explanation": "Para sinalizar corretamente a imobilização por acidente, o condutor deve imobilizar o veículo no local seguro (antes do acidente), ligar as luzes de perigo, vestir o colete refletor e colocar o triângulo a pelo menos 30 metros. A opção correta para a Questão 203 é a A: \"Estacionar o veículo antes do local do acidente, ligar as luzes de perigo, vestir o colete e colocar o sinal de pré-sinalização de perigo a pelo menos 30m da retaguarda do veículo ou da carga a sinalizar.\""
  },
  {
    "idx": 203,
    "number": 204,
    "group": "Situações de emergência e primeiros socorros",
    "question": "No caso da vítima não responder aos estímulos do socorrista, o\nprocedimento correcto é:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Colocar de imediato em posição lateral de segurança"
      },
      {
        "letter": "B",
        "text": "Iniciar logo as manobras de reanimação cárdio-pulmonar"
      },
      {
        "letter": "C",
        "text": "Desobstruir as vias aéreas, fazer a extensão da cabeça, pedir ajuda e\nverificar se está a respirar"
      },
      {
        "letter": "D",
        "text": "Colocar em decúbito dorsal"
      }
    ],
    "answer": "C",
    "explanation": "Se a vítima não responde aos estímulos (inconsciente), o socorrista deve desobstruir as vias aéreas (extensão da cabeça e elevação do queixo), pedir ajuda e verificar a presença de respiração (VOS - Ver, Ouvir, Sentir) até 10 segundos. A opção correta para a Questão 204 é a C: \"Desobstruir as vias aéreas, fazer a extensão da cabeça, pedir ajuda e verificar se está a respirar.\""
  },
  {
    "idx": 204,
    "number": 205,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Em caso de incêndio, o jacto do extintor deve ser direccionado\npara:",
    "alternatives": [
      {
        "letter": "A",
        "text": "A base das chamas"
      },
      {
        "letter": "B",
        "text": "O meio das chamas"
      },
      {
        "letter": "C",
        "text": "O topo das chamas"
      },
      {
        "letter": "D",
        "text": "O topo e o meio das chamas alternadamente"
      }
    ],
    "answer": "A",
    "explanation": "Em caso de incêndio, direcione o extintor com jatos curtos para a base das chamas, posicionando-se a favor do vento. A opção correta para a Questão 205 é a A: \"A base das chamas\"."
  },
  {
    "idx": 205,
    "number": 206,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Numa situação de epistaxis (hemorragia pelo nariz), o\nsocorrista deve:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Colocar a vítima sentada com a cabeça inclinada para a frente e fazer\ncompressão com o polegar e o indicador em pinça apertando as\nextremidades do nariz"
      },
      {
        "letter": "B",
        "text": "Colocar a vítima deitada com a cabeça para trás e fazer compressão\ncom o polegar e o indicador em pinça apertando as extremidades do nariz"
      },
      {
        "letter": "C",
        "text": "Colocar a vítima sentada com a cabeça inclinada para trás e fazer\ncompressão com o polegar e o indicador em pinça apertando as\nextremidades do nariz"
      },
      {
        "letter": "D",
        "text": "Colocar a vítima sentada com a cabeça direita e fazer compressão\ncom o polegar e o indicador em pinça apertando as extremidades do nariz"
      }
    ],
    "answer": "D",
    "explanation": "No controlo de hemorragias externas, a técnica prioritária é a compressão direta sobre a lesão com penso limpo. A opção correta para a Questão 206 é a D: \"Colocar a vítima sentada com a cabeça direita e fazer compressão\ncom o polegar e o indicador em pinça apertando as extremidades do nariz\"."
  },
  {
    "idx": 206,
    "number": 207,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Quando se liga 112:",
    "alternatives": [
      {
        "letter": "A",
        "text": "A chamada é atendida automaticamente pelo INEM"
      },
      {
        "letter": "B",
        "text": "Quem atende é um agente de autoridade"
      },
      {
        "letter": "C",
        "text": "Estamos a ligar directamente para os bombeiros"
      },
      {
        "letter": "D",
        "text": "Todas as respostas anteriores estão correctas"
      }
    ],
    "answer": "B",
    "explanation": "Ao ligar para o 112 (Número Europeu de Emergência), deve indicar a localização exata, número de vítimas e tipo de ocorrência. A opção correta para a Questão 207 é a B: \"Quem atende é um agente de autoridade\"."
  },
  {
    "idx": 207,
    "number": 208,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Ao ligar 112, o mais importante é:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Indicar o local da ocorrência"
      },
      {
        "letter": "B",
        "text": "Explicar o que se passa com a vítima"
      },
      {
        "letter": "C",
        "text": "Fornecer o número de telefone de onde se está a efectuar o pedido de\nsocorro"
      },
      {
        "letter": "D",
        "text": "Devem ser referidas todas as informações anteriores"
      }
    ],
    "answer": "D",
    "explanation": "Ao ligar para o 112 (Número Europeu de Emergência), deve indicar a localização exata, número de vítimas e tipo de ocorrência. A opção correta para a Questão 208 é a D: \"Devem ser referidas todas as informações anteriores\"."
  },
  {
    "idx": 208,
    "number": 209,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Para perceber se alguém está em paragem cárdio-respiratória:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Não se deve fazer nada até que a vítima responda"
      },
      {
        "letter": "B",
        "text": "Se a vítima não nos responde, está de certeza em paragem\ncárdio-respiratória"
      },
      {
        "letter": "C",
        "text": "Deve-se esperar durante 10 segundos para ver se a vítima respira ou\nnão"
      },
      {
        "letter": "D",
        "text": "Nenhuma das respostas anteriores está correcta"
      }
    ],
    "answer": "C",
    "explanation": "Para despistar uma paragem cárdio-respiratória numa vítima inconsciente, deve realizar-se a pesquisa de ventilação normal durante 10 segundos recorrendo ao método Ver, Ouvir e Sentir (VOS). A opção correta para a Questão 209 é a C: \"Deve-se esperar durante 10 segundos para ver se a vítima respira ou não.\""
  },
  {
    "idx": 209,
    "number": 210,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Perante uma ferida simples numa zona sem fracturas:",
    "alternatives": [
      {
        "letter": "A",
        "text": "O melhor método é fazer compressão directa"
      },
      {
        "letter": "B",
        "text": "Deve-se aplicar sempre um garrote"
      },
      {
        "letter": "C",
        "text": "Deve-se ligar imediatamente 112 e não fazer nada"
      },
      {
        "letter": "D",
        "text": "Uma hemorragia não é grave e por isso não é necessário fazer nada"
      }
    ],
    "answer": "A",
    "explanation": "No controlo de hemorragias externas, a técnica prioritária é a compressão direta sobre a lesão com penso limpo. A opção correta para a Questão 210 é a A: \"O melhor método é fazer compressão directa\"."
  },
  {
    "idx": 210,
    "number": 211,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Numa situação de queimadura, os cuidados de emergência\nvisam:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Aliviar a dor"
      },
      {
        "letter": "B",
        "text": "Prevenir o choque"
      },
      {
        "letter": "C",
        "text": "Prevenir a infecção"
      },
      {
        "letter": "D",
        "text": "Todas as respostas anteriores estão correctas"
      }
    ],
    "answer": "D",
    "explanation": "Em queimaduras, deve arrefecer a zona atingida com água limpa corrente para conter a destruição dos tecidos e aliviar a dor. A opção correta para a Questão 211 é a D: \"Todas as respostas anteriores estão correctas\"."
  },
  {
    "idx": 211,
    "number": 212,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Em caso de incêndio, um motorista:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Tem de conseguir extinguir o incêndio antes de garantir a evacuação\ndos ocupantes do veículo"
      },
      {
        "letter": "B",
        "text": "Não deve parar, excepto se o incêndio for no motor"
      },
      {
        "letter": "C",
        "text": "Deve garantir a evacuação dos ocupantes do&nbsp;veículo para uma\nzona segura"
      },
      {
        "letter": "D",
        "text": "Todas as respostas anteriores estão correctas"
      }
    ],
    "answer": "C",
    "explanation": "Em caso de incêndio, direcione o extintor com jatos curtos para a base das chamas, posicionando-se a favor do vento. A opção correta para a Questão 212 é a C: \"Deve garantir a evacuação dos ocupantes do&nbsp;veículo para uma\nzona segura\"."
  },
  {
    "idx": 212,
    "number": 213,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Em caso de tentativa de agressão ou agressão ao motorista:",
    "alternatives": [
      {
        "letter": "A",
        "text": "&shy;Não deve ser contactada a autoridade para evitar problemas"
      },
      {
        "letter": "B",
        "text": "Deve adoptar-se uma atitude de confronto"
      },
      {
        "letter": "C",
        "text": "Os actos do motorista devem basear-se em evitar sempre o confronto"
      },
      {
        "letter": "D",
        "text": "O motorista deve reagir violentamente e se possível imobilizar o\nagressor"
      }
    ],
    "answer": "C",
    "explanation": "Em situações de ameaça ou conflito no exercício da atividade, o motorista deve pautar a sua atitude pela descalada verbal e contenção, evitando o confronto físico e garantindo a sua segurança. A opção correta para a Questão 213 é a C: \"Os actos do motorista devem basear-se em evitar sempre o confronto.\""
  },
  {
    "idx": 213,
    "number": 214,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Um condutor que assista a um acidente no qual existam\npessoas ou haja veículos danificados tem o dever de prestar o\nauxílio. Indique o comportamento que não deve ser adoptado:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Antes de sair do veículo para prestar auxílio, deve assegurar-se de que\no próprio, os seus passageiros e o seu veículo estão em segurança"
      },
      {
        "letter": "B",
        "text": "Manter a calma"
      },
      {
        "letter": "C",
        "text": "Descrever correctamente qual a situação e responder às perguntas\nque a central de emergência faz"
      },
      {
        "letter": "D",
        "text": "Não desligar a ignição dos veículos acidentados"
      }
    ],
    "answer": "D",
    "explanation": "Ao prestar auxílio num acidente, o socorrista nunca deve abandonar os veículos acidentados sem desligar a ignição, de forma a prevenir faíscas e risco de incêndio por fuga de combustível. A opção correta para a Questão 214 é a D: \"Não desligar a ignição dos veículos acidentados.\""
  },
  {
    "idx": 214,
    "number": 215,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Em caso de acidente com a sua viatura, qual o procedimento\nque não deve ser adoptado:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Manter a calma"
      },
      {
        "letter": "B",
        "text": "Avaliar a segurança do local"
      },
      {
        "letter": "C",
        "text": "Efectuar uma rápida avaliação da vítima"
      },
      {
        "letter": "D",
        "text": "Abandonar o local"
      }
    ],
    "answer": "B",
    "explanation": "O procedimento que jamais deve ser adotado em caso de acidente é a avaliação incorreta da segurança do local antes de garantir a sinalização e a proteção de todos os intervenientes. A opção correta para a Questão 215 é a B: \"Efectuar uma rápida avaliação da vítima.\""
  },
  {
    "idx": 215,
    "number": 216,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Quando ocorre um incêndio num veículo, o motorista deve\nadoptar certos procedimentos. Das seguintes hipóteses, qual é\naquela que não deve ser adoptada:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Ligar os 4 indicadores de mudança de direcção"
      },
      {
        "letter": "B",
        "text": "Encostar à berma"
      },
      {
        "letter": "C",
        "text": "Chamar socorro"
      },
      {
        "letter": "D",
        "text": "Manter o veículo em funcionamento"
      }
    ],
    "answer": "D",
    "explanation": "Em caso de incêndio, direcione o extintor com jatos curtos para a base das chamas, posicionando-se a favor do vento. A opção correta para a Questão 216 é a D: \"Manter o veículo em funcionamento\"."
  },
  {
    "idx": 216,
    "number": 217,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Para iniciar o socorro das vítimas é necessária a avaliação desta, através do exame primário, o qual consiste em:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Avaliar se a vítima está consciente/inconsciente"
      },
      {
        "letter": "B",
        "text": "Avaliar somente a ventilação"
      },
      {
        "letter": "C",
        "text": "Observar mais detalhadamente e em interroga-la"
      },
      {
        "letter": "D",
        "text": "Avaliar somente a circulação e temperatura"
      }
    ],
    "answer": "A",
    "explanation": "No exame primário da vítima, a observação e o diálogo sistemático para recolha de sinais e dados sobre as queixas (se consciente) permitem orientar os cuidados até à chegada do socorro médico. A opção correta para a Questão 217 é a C: \"Observar mais detalhadamente e em interroga-la.\""
  },
  {
    "idx": 217,
    "number": 218,
    "group": "Situações de emergência e primeiros socorros",
    "question": "No contexto do transporte rodoviário os riscos de agressão e\nviolência aos motoristas e respectivos veículos tem vindo a\naumentar. Em situações de agressão deve:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Tentar prever potenciais situações de conflito e identificar potenciais\nagressores"
      },
      {
        "letter": "B",
        "text": "Saber controlar as emoções e tomar decisões"
      },
      {
        "letter": "C",
        "text": "Saber identificar potencias agressores perante a autoridade"
      },
      {
        "letter": "D",
        "text": "Tentar prever potenciais situações de conflito e identificar potenciais\nagressores, assim como controlar as emoções e tomar decisões"
      }
    ],
    "answer": "B",
    "explanation": "Diante de potenciais conflitos no transporte rodoviário, a capacidade de controlar as emoções, manter o autodomínio e tomar decisões ponderadas é fundamental para prevenir a violência. A opção correta para a Questão 218 é a B: \"Saber controlar as emoções e tomar decisões.\""
  },
  {
    "idx": 218,
    "number": 219,
    "group": "Situações de emergência e primeiros socorros",
    "question": "O exame primário da vítima consiste:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Na observação do diâmetro das pupilas, da coloração, temperatura e\ngrau de humidade da pele"
      },
      {
        "letter": "B",
        "text": "Na verificação em primeiro lugar da existência de ventilação"
      },
      {
        "letter": "C",
        "text": "Na avaliação em primeiro lugar da existência de pulsação"
      },
      {
        "letter": "D",
        "text": "Na avaliação em primeiro lugar do estado de consciência da vítima"
      }
    ],
    "answer": "C",
    "explanation": "O exame primário inicia-se invariavelmente pela determinação do estado de consciência da vítima, elemento fulcral para definir a urgência dos procedimentos de suporte de vida. A opção correta para a Questão 219 é a D: \"Na avaliação em primeiro lugar do estado de consciência da vítima.\""
  },
  {
    "idx": 219,
    "number": 220,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Perante uma situação de acidente, a sequência adequada na\naplicação nas diversas fases do Sistema Integrado de\nEmergência Médica será:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Pré-socorro, Socorro e Alerta"
      },
      {
        "letter": "B",
        "text": "Detecção, Pré socorro e Transporte"
      },
      {
        "letter": "C",
        "text": "Alerta, Transporte e Socorro"
      },
      {
        "letter": "D",
        "text": "Detecção Alerta e Pré-socorro"
      }
    ],
    "answer": "C",
    "explanation": "A cadeia de sobrevivência do Sistema Integrado de Emergência Médica (SIEM) estrutura-se sequencialmente pelas fases de Alerta, Socorro no local e Transporte assistido para a unidade de saúde. A opção correta para a Questão 220 é a C: \"Alerta, Transporte e Socorro.\""
  },
  {
    "idx": 220,
    "number": 221,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Se um produto tóxico atingir o condutor nos olhos, este deverá\nimediatamente:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Proteger os olhos do sol com recurso a óculos escuros"
      },
      {
        "letter": "B",
        "text": "Utilizar água para lavar os olhos"
      },
      {
        "letter": "C",
        "text": "Dirigir-se à localidade mais próxima para consultar o médico"
      },
      {
        "letter": "D",
        "text": "Não&nbsp;é necessário tomar precauções especiais porque um\nproduto tóxico não e corrosivo"
      }
    ],
    "answer": "B",
    "explanation": "Em caso de projeção de reagente tóxico ou químico para os olhos, a medida imediata de primeiros socorros consiste em lavar abundantemente os olhos com água limpa corrente para diluir o produto. A opção correta para a Questão 221 é a B: \"Utilizar água para lavar os olhos.\""
  },
  {
    "idx": 221,
    "number": 222,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Se numa situação de incêndio a roupa da vítima estiver a arder\ndeve-se:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Tirar rapidamente a roupa que estiver a arder"
      },
      {
        "letter": "B",
        "text": "Apagar o fogo com extintor de pó químico"
      },
      {
        "letter": "C",
        "text": "Envolver a vítima com um cobertor ou rolá-la pelo chão"
      },
      {
        "letter": "D",
        "text": "Chamar de imediato o 112"
      }
    ],
    "answer": "C",
    "explanation": "Em caso de incêndio, direcione o extintor com jatos curtos para a base das chamas, posicionando-se a favor do vento. A opção correta para a Questão 222 é a C: \"Envolver a vítima com um cobertor ou rolá-la pelo chão\"."
  },
  {
    "idx": 222,
    "number": 223,
    "group": "Situações de emergência e primeiros socorros",
    "question": "O primeiro contacto com o motorista ajuda a criar uma boa\nimpressão sobre o serviço.",
    "alternatives": [
      {
        "letter": "A",
        "text": "Verdadeiro"
      },
      {
        "letter": "B",
        "text": "Falso"
      }
    ],
    "answer": "A",
    "explanation": "O acolhimento inicial e o primeiro contacto visual do motorista com o passageiro desempenham um papel determinante na formação da imagem do serviço prestado. A opção correta para a Questão 223 é a A: \"Verdadeiro.\""
  },
  {
    "idx": 223,
    "number": 224,
    "group": "Situações de emergência e primeiros socorros",
    "question": "O processo de comunicação requer, no mínimo:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Um emissor."
      },
      {
        "letter": "B",
        "text": "Um recetor."
      },
      {
        "letter": "C",
        "text": "Um emissor e um recetor."
      }
    ],
    "answer": "C",
    "explanation": "A estrutura fundamental do ato comunicativo exige no mínimo dois intervenientes ativos: o emissor que codifica e envia a mensagem e o recetor que a acolhe e interpreta. A opção correta para a Questão 224 é a C: \"Um emissor e um recetor.\""
  },
  {
    "idx": 224,
    "number": 225,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Como agir com um passageiro impaciente ou agressivo?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Responder com a mesma agressividade."
      },
      {
        "letter": "B",
        "text": "Manter a calma, ser cordial e evitar o conflito."
      },
      {
        "letter": "C",
        "text": "Ignorar o passageiro e continuar a viagem."
      }
    ],
    "answer": "B",
    "explanation": "Perante um passageiro irritado ou agressivo, a postura profissional recomendada consiste em manter a serenidade, falar com tom calmo e cordial e evitar alimentar o conflito. A opção correta para a Questão 225 é a B: \"Manter a calma, ser cordial e evitar o conflito.\""
  },
  {
    "idx": 225,
    "number": 226,
    "group": "Situações de emergência e primeiros socorros",
    "question": "O que é o ´ruído´ na comunicação?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Uma conversa entre duas pessoas."
      },
      {
        "letter": "B",
        "text": "Algo que dificulta a compreensão da mensagem."
      },
      {
        "letter": "C",
        "text": "O som do rádio."
      }
    ],
    "answer": "B",
    "explanation": "Em teoria da comunicação, denomina-se \"ruído\" a qualquer elemento ou interferência que perturbe, distorça ou impeça a correta transmissão e compreensão da mensagem. A opção correta para a Questão 226 é a B: \"Algo que dificulta a compreensão da mensagem.\""
  },
  {
    "idx": 226,
    "number": 227,
    "group": "Comunicação e relações interpessoais",
    "question": "O que é a comunicação verbal?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Usar gestos e sinais para comunicar."
      },
      {
        "letter": "B",
        "text": "Falar ou escrever para transmitir uma mensagem."
      },
      {
        "letter": "C",
        "text": "Ficar em silêncio."
      }
    ],
    "answer": "B",
    "explanation": "A comunicação verbal é a forma de comunicação que utiliza palavras codificadas na linguagem humana, podendo manifestar-se sob a forma falada (oral) ou escrita. Difere da comunicação não-verbal, que utiliza linguagem corporal e gestual. A opção correta para a Questão 227 é a B: \"Falar ou escrever para transmitir uma mensagem.\""
  },
  {
    "idx": 227,
    "number": 228,
    "group": "Comunicação e relações interpessoais",
    "question": "Uma das funções importantes da comunicação é transmitir\nconhecimento.",
    "alternatives": [
      {
        "letter": "A",
        "text": "Verdadeiro"
      },
      {
        "letter": "B",
        "text": "Falso"
      }
    ],
    "answer": "A",
    "explanation": "Uma das funções essenciais e primordiais do processo comunicacional no contexto educativo, social e profissional é a transmissão de informação, conhecimento e instrução entre o emissor e o recetor. A opção correta para a Questão 228 é a A: \"Verdadeiro.\""
  },
  {
    "idx": 228,
    "number": 229,
    "group": "Comunicação e relações interpessoais",
    "question": "Um motorista deve comportar-se de forma?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Agressiva."
      },
      {
        "letter": "B",
        "text": "Passiva."
      },
      {
        "letter": "C",
        "text": "Assertiva."
      }
    ],
    "answer": "C",
    "explanation": "O condutor profissional deve adotar preferencialmente um estilo de comunicação assertivo, exprimindo as suas necessidades, opiniões e direitos de forma clara, educada e direta, sem recorrer ao confronto (estilo agressivo) nem à submissão (estilo passivo). A opção correta para a Questão 229 é a C: \"Assertiva.\""
  },
  {
    "idx": 229,
    "number": 230,
    "group": "Comunicação e relações interpessoais",
    "question": "Quando se pode dizer que a comunicação tem sucesso?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Quando se fala muito rápido."
      },
      {
        "letter": "B",
        "text": "Quando a mensagem é compreendida."
      },
      {
        "letter": "C",
        "text": "Quando ninguém responde."
      }
    ],
    "answer": "B",
    "explanation": "O sucesso do processo comunicativo (eficácia comunicacional) verifica-se no momento em que a mensagem enviada pelo emissor é devidamente recebida, descodificada e totalmente compreendida pelo recetor de acordo com a intenção original. A opção correta para a Questão 230 é a B: \"Quando a mensagem é compreendida.\""
  },
  {
    "idx": 230,
    "number": 231,
    "group": "Comunicação e relações interpessoais",
    "question": "Chamamos feedback:",
    "alternatives": [
      {
        "letter": "A",
        "text": "À resposta ou reação da pessoa à mensagem."
      },
      {
        "letter": "B",
        "text": "Ao início de uma conversa."
      },
      {
        "letter": "C",
        "text": "À forma como utilizamos o tom de voz."
      }
    ],
    "answer": "A",
    "explanation": "O feedback é a informação de retorno prestada pelo recetor que permite confirmar a correta compreensão da mensagem. A opção correta para a Questão 231 é a A: \"À resposta ou reação da pessoa à mensagem.\"."
  },
  {
    "idx": 231,
    "number": 232,
    "group": "Comunicação e relações interpessoais",
    "question": "Um motorista tem um comportamento profissional quando:",
    "alternatives": [
      {
        "letter": "A",
        "text": "É apressado e impaciente durante a condução."
      },
      {
        "letter": "B",
        "text": "Ignora os pedidos dos passageiros."
      },
      {
        "letter": "C",
        "text": "É educado, respeita os passageiros e atende às suas necessidades."
      }
    ],
    "answer": "C",
    "explanation": "A conduta profissional do motorista de TVDE assenta no civismo, cortesia, escuta ativa e respeito escrupuloso pelos passageiros, garantindo o seu bem-estar, segurança e a resposta adequada às suas solicitações. A opção correta para a Questão 232 é a C: \"É educado, respeita os passageiros e atende às suas necessidades.\""
  },
  {
    "idx": 232,
    "number": 233,
    "group": "Comunicação e relações interpessoais",
    "question": "Qual a importância do tom de voz na comunicação?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Ajuda a transmitir a mensagem de forma clara."
      },
      {
        "letter": "B",
        "text": "Dificulta a compreensão da mensagem."
      }
    ],
    "answer": "A",
    "explanation": "O tom de voz constitui um elemento paralinguístico fundamental na comunicação verbal, ajudando a transmitir a mensagem de forma clara, pausada, segura e audível, evitando ruídos e incompreensões. A opção correta para a Questão 233 é a A: \"Ajuda a transmitir a mensagem de forma clara.\""
  },
  {
    "idx": 233,
    "number": 234,
    "group": "Comunicação e relações interpessoais",
    "question": "Na comunicação com os passageiros é importante:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Fazer perguntas durante toda a conversa"
      },
      {
        "letter": "B",
        "text": "Ouvir para compreender."
      },
      {
        "letter": "C",
        "text": "Falar rapidamente para terminar a conversa."
      }
    ],
    "answer": "A",
    "explanation": "Na interação profissional com o cliente, formular perguntas adequadas e orientadas permite esclarecer dúvidas, confirmar o destino e compreender detalhadamente as necessidades do passageiro. A opção correta para a Questão 234 é a A: \"Fazer perguntas durante toda a conversa.\""
  },
  {
    "idx": 234,
    "number": 235,
    "group": "Comunicação e relações interpessoais",
    "question": "Quando é permitido ultrapassar pela direita?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Quando o veículo da frente circula lentamente."
      },
      {
        "letter": "B",
        "text": "Quando o veículo da frente sinaliza que vai virar à esquerda."
      },
      {
        "letter": "C",
        "text": "Em qualquer situação"
      }
    ],
    "answer": "B",
    "explanation": "Nos termos do Artigo 36.º, n.º 2 do Código da Estrada, a ultrapassagem faz-se excecionalmente pela direita quando o veículo à frente sinaliza viragem à esquerda ou a via à direita está livre. A opção correta para a Questão 235 é a B: \"Quando o veículo da frente sinaliza que vai virar à esquerda.\"."
  },
  {
    "idx": 235,
    "number": 236,
    "group": "Comunicação e relações interpessoais",
    "question": "O que deve fazer antes de iniciar uma ultrapassagem?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Verificar se há espaço suficiente e visibilidade."
      },
      {
        "letter": "B",
        "text": "Aumentar a velocidade."
      },
      {
        "letter": "C",
        "text": "Aproximar-se ao máximo do veículo da frente."
      }
    ],
    "answer": "A",
    "explanation": "Nos termos do Artigo 38.º, n.º 1 do Código da Estrada, antes de iniciar uma ultrapassagem o condutor deve certificar-se de que dispõe de espaço suficiente e visibilidade adequada para realizar a manobra sem perigo. A opção correta para a Questão 236 é a A: \"Verificar se há espaço suficiente e visibilidade.\"."
  },
  {
    "idx": 236,
    "number": 237,
    "group": "Ultrapassagem",
    "question": "É permitido ultrapassar em curvas com visibilidade reduzida?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim, é permitido."
      },
      {
        "letter": "B",
        "text": "É proibido ultrapassar em curvas com visibilidade reduzida."
      },
      {
        "letter": "C",
        "text": "Passar rapidamente antes que outro veículo chegue."
      }
    ],
    "answer": "B",
    "explanation": "Nos termos do Artigo 41.º, n.º 1, alínea a) do Código da Estrada, é expressamente proibido ultrapassar em lombas e em curvas de visibilidade reduzida, salvo se existirem na faixa de rodagem duas ou mais vias de trânsito no mesmo sentido e a manobra se faça sem utilizar a via de sentido oposto. A opção correta para a Questão 237 é a B: \"É proibido ultrapassar em curvas com visibilidade reduzida.\""
  },
  {
    "idx": 237,
    "number": 238,
    "group": "Ultrapassagem",
    "question": "Numa ultrapassagem, o motorista deve voltar à sua via de\ntrânsito:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Após aumentar a velocidade."
      },
      {
        "letter": "B",
        "text": "Logo após concluir a manobra."
      },
      {
        "letter": "C",
        "text": "Assim que o veículo ultrapassado fique visível no retrovisor."
      }
    ],
    "answer": "B",
    "explanation": "Conforme o Artigo 38.º, n.º 3 do Código da Estrada, concluída a ultrapassagem, o condutor deve regressar à via da direita sem causar perigo. A opção correta para a Questão 238 é a B: \"Logo após concluir a manobra.\"."
  },
  {
    "idx": 238,
    "number": 239,
    "group": "Ultrapassagem",
    "question": "É proibido ultrapassar:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Em lombas ou cruzamentos sem visibilidade."
      },
      {
        "letter": "B",
        "text": "Quando o veículo é lento."
      },
      {
        "letter": "C",
        "text": "Em autoestradas."
      }
    ],
    "answer": "A",
    "explanation": "De acordo com o Artigo 41.º do Código da Estrada, a ultrapassagem é totalmente proibida em locais onde a visibilidade seja reduzida, designadamente em lombas e cruzamentos ou entroncamentos sem prioridade assinalada, por representarem elevado risco de colisão. A opção correta para a Questão 239 é a A: \"Em lombas ou cruzamentos sem visibilidade.\""
  },
  {
    "idx": 239,
    "number": 240,
    "group": "Ultrapassagem",
    "question": "Ao ultrapassar uma bicicleta, deve manter uma distância\nmínima lateral?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim, de 1,5 metros."
      },
      {
        "letter": "B",
        "text": "Sim, de 1 metro"
      },
      {
        "letter": "C",
        "text": "Não."
      }
    ],
    "answer": "A",
    "explanation": "Conforme o Artigo 38.º, n.º 2, alínea e) do Código da Estrada, deve guardar-se a distância lateral mínima de 1,5 metros ao ultrapassar bicicletas ou peões. A opção correta para a Questão 240 é a A: \"Sim, de 1,5 metros.\"."
  },
  {
    "idx": 240,
    "number": 241,
    "group": "Ultrapassagem",
    "question": "Este sinal significa que os automóveis pesados estão proibidos\nde ultrapassar.",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim"
      },
      {
        "letter": "B",
        "text": "Não."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_241.jpg",
    "explanation": "Nos termos do Artigo 38.º, n.º 1 do Código da Estrada, a manobra de ultrapassagem exige sinalização prévia com os indicadores de mudança de direção. A opção correta para a Questão 241 é a A: \"Sim\"."
  },
  {
    "idx": 241,
    "number": 242,
    "group": "Ultrapassagem",
    "question": "O sinal de mudança de direção para a esquerda, do veículo que\nsegue à frente, pode indicar:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Diminuição de velocidade."
      },
      {
        "letter": "B",
        "text": "Início de manobra de marcha atrás."
      },
      {
        "letter": "C",
        "text": "Início de uma ultrapassagem."
      }
    ],
    "answer": "C",
    "imageUrl": "/assets/questoes/imagem_242.jpg",
    "explanation": "Nos termos do Artigo 38.º, n.º 1 do Código da Estrada, a manobra de ultrapassagem exige sinalização prévia com os indicadores de mudança de direção. A opção correta para a Questão 242 é a C: \"Início de uma ultrapassagem.\"."
  },
  {
    "idx": 242,
    "number": 243,
    "group": "Ultrapassagem",
    "question": "Pode ultrapassar o veículo que circula à frente?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim, a manobra é permitida."
      },
      {
        "letter": "B",
        "text": "Não, devo aguardar que o veículo termine a manobra."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_243.jpg",
    "explanation": "Nos termos do Artigo 38.º, n.º 1 do Código da Estrada, o condutor não deve iniciar a ultrapassagem se o veículo à sua frente já iniciou a manobra. Deve aguardar que esta termine em segurança. A opção correta para a Questão 243 é a B: \"Não, devo aguardar que o veículo termine a manobra.\"."
  },
  {
    "idx": 243,
    "number": 244,
    "group": "Ultrapassagem",
    "question": "Pode ultrapassar o veículo à sua frente?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim."
      },
      {
        "letter": "B",
        "text": "Não."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_244.jpg",
    "explanation": "Conforme o Artigo 41.º do Código da Estrada e a sinalização no local (marca contínua M1 ou sinal de proibição C14), a ultrapassagem é proibida por falta de visibilidade ou imposição legal. A opção correta para a Questão 244 é a B: \"Não.\"."
  },
  {
    "idx": 244,
    "number": 245,
    "group": "Ultrapassagem",
    "question": "É permitido ultrapassar neste local?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim."
      },
      {
        "letter": "B",
        "text": "Não."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_245.jpg",
    "explanation": "Conforme o Artigo 41.º do Código da Estrada e a sinalização no local (marca contínua M1 ou sinal de proibição C14), a ultrapassagem é proibida por falta de visibilidade ou imposição legal. A opção correta para a Questão 245 é a B: \"Não.\"."
  },
  {
    "idx": 245,
    "number": 246,
    "group": "Ultrapassagem",
    "question": "O motociclo que transita na rotunda deve:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Ceder a passagem."
      },
      {
        "letter": "B",
        "text": "Avançar."
      },
      {
        "letter": "C",
        "text": "Ceder a passagem apenas aos veículos com motor que pretendam\nentrar na rotunda."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_246.jpg",
    "explanation": "Conforme estabelecido no Artigo 14.º-A e Artigo 31.º, n.º 1, alínea b) do Código da Estrada, os veículos que já se encontram a circular no interior de uma rotunda têm prioridade de passagem sobre os veículos que nela pretendam entrar, aplicando-se esta regra também aos velocípedes. A opção correta para a Questão 246 é a B: \"Avançar.\""
  },
  {
    "idx": 246,
    "number": 247,
    "group": "Ultrapassagem",
    "question": "Ao entrar numa rotunda deve:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Reduzir a velocidade e avançar sem parar."
      },
      {
        "letter": "B",
        "text": "Avançar em primeiro lugar, porque tem prioridade de passagem."
      },
      {
        "letter": "C",
        "text": "Ceder passagem aos veículos que já circulam na rotunda."
      }
    ],
    "answer": "C",
    "imageUrl": "/assets/questoes/imagem_247.jpg",
    "explanation": "Nos termos do Artigo 31.º, n.º 1, alínea b) do Código da Estrada, o condutor que pretenda entrar numa rotunda deve ceder a passagem a todos os veículos que já se encontrem a circular na praça de trânsito giratório. A opção correta para a Questão 247 é a C: \"Ceder passagem aos veículos que já circulam na rotunda.\""
  },
  {
    "idx": 247,
    "number": 248,
    "group": "Circulação em rotundas",
    "question": "O motorista deve sinalizar a saída de uma rotunda:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Ao aproximar-se da saída."
      },
      {
        "letter": "B",
        "text": "Não é necessário sinalizar."
      },
      {
        "letter": "C",
        "text": "Apenas se houver trânsito intenso."
      }
    ],
    "answer": "A",
    "explanation": "Conforme o Artigo 14.º-A do Código da Estrada, a mudança de via na rotunda e a aproximação da saída devem ser previamente sinalizadas com pisca. A opção correta para a Questão 248 é a A: \"Ao aproximar-se da saída.\"."
  },
  {
    "idx": 248,
    "number": 249,
    "group": "Circulação em rotundas",
    "question": "Para mudar de via de circulação dentro de uma rotunda, o\nmotorista deve:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Mudar de via sem sinalizar."
      },
      {
        "letter": "B",
        "text": "Sinalizar e garantir que a manobra é segura."
      },
      {
        "letter": "C",
        "text": "Mudar rapidamente para sair mais depressa."
      }
    ],
    "answer": "B",
    "explanation": "Nos termos do Artigo 14.º-A e Artigo 21.º do Código da Estrada, qualquer mudança de via de trânsito no interior da rotunda exige a sinalização prévia com o indicador de mudança de direção e a verificação prévia de que a manobra pode ser realizada em segurança sem cortar a linha de marcha dos outros veículos. A opção correta para a Questão 249 é a B: \"Sinalizar e garantir que a manobra é segura.\""
  },
  {
    "idx": 249,
    "number": 250,
    "group": "Circulação em rotundas",
    "question": "Ao circular numa rotunda, o motorista deve saber que:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Todos os veículos entram ao mesmo tempo."
      },
      {
        "letter": "B",
        "text": "Os veículos em serviço de urgência devem ceder a passagem aos\nveículos que circulam na rotunda."
      },
      {
        "letter": "C",
        "text": "Deve ceder a passagem aos veículos em serviço de urgência que\nentram na rotunda."
      }
    ],
    "answer": "C",
    "explanation": "De acordo com o Artigo 64.º do Código da Estrada, a prioridade absoluta dos veículos em serviço de urgência prevalece nas entradas de rotundas, devendo os condutores ceder-lhes a passagem ao entrarem na praça. A opção correta para a Questão 250 é a C: \"Deve ceder a passagem aos veículos em serviço de urgência que entram na rotunda.\""
  },
  {
    "idx": 250,
    "number": 251,
    "group": "Circulação em rotundas",
    "question": "Em rotundas, pode circular na via mais à direita:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Apenas para sair na primeira saída."
      },
      {
        "letter": "B",
        "text": "Sempre, independentemente da saída."
      }
    ],
    "answer": "A",
    "explanation": "Segundo as regras de circulação nas rotundas reguladas no Artigo 14.º-A, n.º 1, alínea a) do Código da Estrada, o uso da via da direita só é permitido aos condutores que pretendam sair na primeira saída da rotunda (ou aos veículos de tração animal, velocípedes e pesados). A opção correta para a Questão 251 é a A: \"Apenas para sair na primeira saída.\""
  },
  {
    "idx": 251,
    "number": 252,
    "group": "Circulação em rotundas",
    "question": "O que deve fazer nesta situação?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Ceder a passagem ao veículo cinzento."
      },
      {
        "letter": "B",
        "text": "Avançar em primeiro lugar, por se apresentar pela direita."
      },
      {
        "letter": "C",
        "text": "Parar obrigatoriamente, porque pretendo entrar na rotunda."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_252.jpg",
    "explanation": "Conforme a sinalização vertical apresentada na imagem (sinal B1 - Perda de Prioridade para quem entra), o veículo cinzento que se apresenta pela direita está a entrar e tem o dever de ceder a passagem, pelo que o condutor na via com prioridade deve avançar em primeiro lugar. A opção correta para a Questão 252 é a B: \"Avançar em primeiro lugar, por se apresentar pela direita.\""
  },
  {
    "idx": 252,
    "number": 253,
    "group": "Circulação em rotundas",
    "question": "O condutor da bicicleta deve ceder a passagem?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim, porque a bicicleta se apresenta pela esquerda."
      },
      {
        "letter": "B",
        "text": "Não, porque a bicicleta circula na rotunda."
      },
      {
        "letter": "C",
        "text": "Apenas se houver veículos à sua frente."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_253.jpg",
    "explanation": "Nos termos do Artigo 31.º, n.º 1, alínea c) do Código da Estrada, a entrada na rotunda obriga a ceder a passagem aos veículos que nela já circulam. A opção correta para a Questão 253 é a B: \"Não, porque a bicicleta circula na rotunda.\"."
  },
  {
    "idx": 253,
    "number": 254,
    "group": "Circulação em rotundas",
    "question": "A velocidade deve ser ajustada:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Apenas ao limite máximo permitido."
      },
      {
        "letter": "B",
        "text": "Às condições da estrada e do trânsito."
      },
      {
        "letter": "C",
        "text": "À vontade do condutor."
      }
    ],
    "answer": "B",
    "explanation": "Conforme os Artigos 24.º e 25.º do Código da Estrada, a velocidade não deve apenas respeitar os limites legais, devendo ajustar-se às condições da via, visibilidade, meteorologia e intensidade do trânsito. A opção correta para a Questão 254 é a B: \"Às condições da estrada e do trânsito.\""
  },
  {
    "idx": 254,
    "number": 255,
    "group": "Circulação em rotundas",
    "question": "Quando o piso está escorregadio, o motorista deve:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Travar bruscamente."
      },
      {
        "letter": "B",
        "text": "Reduzir a velocidade e evitar manobras bruscas."
      },
      {
        "letter": "C",
        "text": "Aumentar a velocidade."
      }
    ],
    "answer": "B",
    "explanation": "Em piso molhado ou escorregadio, o risco de aquaplanagem e a distância de travagem aumentam significativamente. O condutor deve moderar a velocidade e suavizar os comandos do veículo, evitando travagens ou manobras bruscas. A opção correta para a Questão 255 é a B: \"Reduzir a velocidade e evitar manobras bruscas.\""
  },
  {
    "idx": 255,
    "number": 256,
    "group": "Circulação em rotundas",
    "question": "Quando a visibilidade é reduzida, para além de utilizar as\nluzes, deve:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Continuar com a mesma velocidade."
      },
      {
        "letter": "B",
        "text": "Parar o veículo."
      },
      {
        "letter": "C",
        "text": "Reduzir a velocidade e aumentar a distância para o veículo da frente."
      }
    ],
    "answer": "C",
    "explanation": "Perante visibilidade reduzida (nevoeiro, chuva forte ou escuridão), além do uso das luzes adequadas, o condutor deve reduzir a velocidade e aumentar a distância de segurança em relação ao veículo da frente para prevenir colisões em cadeia. A opção correta para a Questão 256 é a C: \"Reduzir a velocidade e aumentar a distância para o veículo da frente.\""
  },
  {
    "idx": 256,
    "number": 257,
    "group": "Circulação em rotundas",
    "question": "Quando a intensidade do trânsito aumenta, a velocidade deve:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Diminuir."
      },
      {
        "letter": "B",
        "text": "Aumentar."
      },
      {
        "letter": "C",
        "text": "Ser mantida."
      }
    ],
    "answer": "A",
    "explanation": "Quando a densidade e a intensidade do trânsito aumentam, a velocidade de circulação deve diminuir proporcionalmente para manter as distâncias de segurança e permitir reações atempadas perante desacelerações repentinas. A opção correta para a Questão 257 é a A: \"Diminuir.\""
  },
  {
    "idx": 257,
    "number": 258,
    "group": "Velocidade",
    "question": "Ao circular neste local, o motorista deve:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Manter a velocidade sem preocupações."
      },
      {
        "letter": "B",
        "text": "Aumentar um pouco a velocidade para evitar parar."
      },
      {
        "letter": "C",
        "text": "Moderar a velocidade e parar se necessário."
      }
    ],
    "answer": "C",
    "imageUrl": "/assets/questoes/imagem_258.jpg",
    "explanation": "Conforme os Artigos 24.º a 28.º do Código da Estrada, a velocidade deve ser adaptada ao local, ao trânsito e à sinalização regulamentar. A opção correta para a Questão 258 é a C: \"Moderar a velocidade e parar se necessário.\"."
  },
  {
    "idx": 258,
    "number": 259,
    "group": "Velocidade",
    "question": "Qual a velocidade máxima permitida a um automóvel ligeiro,\ndentro de uma localidade?",
    "alternatives": [
      {
        "letter": "A",
        "text": "50 km/h"
      },
      {
        "letter": "B",
        "text": "60 km/h"
      },
      {
        "letter": "C",
        "text": "90 km/h"
      }
    ],
    "answer": "A",
    "explanation": "De acordo com o Artigo 27.º do Código da Estrada, o limite máximo geral de velocidade dentro das localidades é de 50 km/h para automóveis ligeiros. A opção correta para a Questão 259 é a A: \"50 km/h\"."
  },
  {
    "idx": 259,
    "number": 260,
    "group": "Velocidade",
    "question": "Neste local, posso transitar a 50 Km/h?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Não, porque a sinalização vertical o proíbe."
      },
      {
        "letter": "B",
        "text": "Sim, porque dentro das localidades esta é a velocidade mínima\nobrigatória."
      },
      {
        "letter": "C",
        "text": "Sim, porque o pavimento está em boas condições."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_260.jpg",
    "explanation": "Conforme os Artigos 24.º a 28.º do Código da Estrada, a velocidade deve ser adaptada ao local, ao trânsito e à sinalização regulamentar. A opção correta para a Questão 260 é a A: \"Não, porque a sinalização vertical o proíbe.\"."
  },
  {
    "idx": 260,
    "number": 261,
    "group": "Velocidade",
    "question": "O que deve fazer perante um sinal de STOP?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Parar apenas se vier outro veículo."
      },
      {
        "letter": "B",
        "text": "Parar obrigatoriamente antes de avançar."
      },
      {
        "letter": "C",
        "text": "Reduzir a velocidade"
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_261.jpg",
    "explanation": "Conforme os Artigos 24.º a 28.º do Código da Estrada, a velocidade deve ser adaptada ao local, ao trânsito e à sinalização regulamentar. A opção correta para a Questão 261 é a B: \"Parar obrigatoriamente antes de avançar.\"."
  },
  {
    "idx": 261,
    "number": 262,
    "group": "Velocidade",
    "question": "Os sinais de proibição indicam:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Informações úteis."
      },
      {
        "letter": "B",
        "text": "Obrigações a cumprir."
      },
      {
        "letter": "C",
        "text": "Restrições ou limites."
      }
    ],
    "answer": "C",
    "explanation": "Conforme os Artigos 24.º a 28.º do Código da Estrada, a velocidade deve ser adaptada ao local, ao trânsito e à sinalização regulamentar. A opção correta para a Questão 262 é a C: \"Restrições ou limites.\"."
  },
  {
    "idx": 262,
    "number": 263,
    "group": "Sinalização",
    "question": "A sinalização existente obriga o motorista a seguir em frente?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim."
      },
      {
        "letter": "B",
        "text": "Não."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_263.jpg",
    "explanation": "Sinais de seleção de vias de trânsito ou de indicação oferecem orientações de destino, mas não obrigam rigidamente o condutor a seguir numa direção se a sinalização de vias permitir outras trajetórias legais. A opção correta para a Questão 263 é a B: \"Não.\""
  },
  {
    "idx": 263,
    "number": 264,
    "group": "Sinalização",
    "question": "O sinal indica:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Estacionamento autorizado."
      },
      {
        "letter": "B",
        "text": "Estacionamento proibido."
      },
      {
        "letter": "C",
        "text": "Apenas paragem permitida."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_264.jpg",
    "explanation": "O sinal quadrado azul com a letra \"P\" (Sinal H1a) indica parque ou local de estacionamento autorizado para veículos. A opção correta para a Questão 264 é a A: \"Estacionamento autorizado.\""
  },
  {
    "idx": 264,
    "number": 265,
    "group": "Sinalização",
    "question": "O sinal indica:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Passagem de peões"
      },
      {
        "letter": "B",
        "text": "A existência de um túnel."
      },
      {
        "letter": "C",
        "text": "Entrada num parque de estacionamento."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_265.jpg",
    "explanation": "O sinal de informação H11 indica a aproximação e entrada num túnel, impondo a obrigação de ligar os médios do veículo (Artigo 61.º do C.E.). A opção correta para a Questão 265 é a B: \"A existência de um túnel.\""
  },
  {
    "idx": 265,
    "number": 266,
    "group": "Sinalização",
    "question": "O sinal com luz amarela está intermitente, pelo que o\nmotorista:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Deve parar."
      },
      {
        "letter": "B",
        "text": "Deve acelerar."
      },
      {
        "letter": "C",
        "text": "Pode passar, mas com cuidado."
      }
    ],
    "answer": "C",
    "imageUrl": "/assets/questoes/imagem_266.jpg",
    "explanation": "Conforme o Regulamento de Sinalização do Trânsito, o sinal luminoso amarelo intermitente obriga os condutores a moderar a velocidade e a avançar com especial prudência e atenção redobrada. A opção correta para a Questão 266 é a C: \"Pode passar, mas com cuidado.\""
  },
  {
    "idx": 266,
    "number": 267,
    "group": "Sinalização",
    "question": "O que deve respeitar em primeiro lugar?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Os sinais luminosos."
      },
      {
        "letter": "B",
        "text": "As marcas rodoviárias."
      },
      {
        "letter": "C",
        "text": "As ordens da polícia."
      }
    ],
    "answer": "C",
    "explanation": "De acordo com a hierarquia da sinalização estabelecida no Artigo 7.º do Código da Estrada, as ordens dos agentes reguladores do trânsito prevalecem sobre todos os sinais de trânsito e regras gerais de circulação. A opção correta para a Questão 267 é a C: \"As ordens da polícia.\""
  },
  {
    "idx": 267,
    "number": 268,
    "group": "Sinalização",
    "question": "Os sinais verticais de obrigação são:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Circulares com fundo azul."
      },
      {
        "letter": "B",
        "text": "Retangulares com fundo verde."
      },
      {
        "letter": "C",
        "text": "Triangulares com borda vermelha."
      }
    ],
    "answer": "A",
    "explanation": "No Regulamento de Sinalização do Trânsito, os sinais verticais de obrigação (grupo C) possuem forma circular, fundo azul e símbolo ou pictograma a branco. A opção correta para a Questão 268 é a A: \"Circulares com fundo azul.\""
  },
  {
    "idx": 268,
    "number": 269,
    "group": "Sinalização",
    "question": "O que deve fazer perante este sinal?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Ceder a passagem a todos os veículos."
      },
      {
        "letter": "B",
        "text": "Avançar em primeiro lugar."
      },
      {
        "letter": "C",
        "text": "Manter a velocidade."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_269.jpg",
    "explanation": "Perante o sinal de cedência de passagem B1 (\"Perda de prioridade\"), o condutor é obrigado a ceder a passagem a todos os veículos que circulem na via em que vai entrar. A opção correta para a Questão 269 é a A: \"Ceder a passagem a todos os veículos.\""
  },
  {
    "idx": 269,
    "number": 270,
    "group": "Sinalização",
    "question": "Quem deve avançar primeiro num cruzamento sem sinalização",
    "alternatives": [
      {
        "letter": "A",
        "text": "O veículo mais rápido."
      },
      {
        "letter": "B",
        "text": "O veículo que circula pela esquerda"
      },
      {
        "letter": "C",
        "text": "O veículo que circula pela direita."
      }
    ],
    "answer": "C",
    "imageUrl": "/assets/questoes/imagem_270.jpg",
    "explanation": "Nos termos do Artigo 30.º, n.º 1 do Código da Estrada, num cruzamento de vias de igual categoria sem qualquer sinalização, o condutor deve ceder a passagem aos veículos que se lhe apresentem pela direita. A opção correta para a Questão 270 é a C: \"O veículo que circula pela direita.\""
  },
  {
    "idx": 270,
    "number": 271,
    "group": "Sinalização",
    "question": "Quando um peão atravessa numa passagem para peões, o\nmotorista deve:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Reduzir a velocidade, mas continuar."
      },
      {
        "letter": "B",
        "text": "Acelerar para passar antes do peão"
      },
      {
        "letter": "C",
        "text": "Parar e deixar o peão atravessar."
      }
    ],
    "answer": "C",
    "imageUrl": "/assets/questoes/imagem_271.jpg",
    "explanation": "De acordo com o Artigo 103.º do Código da Estrada, o condutor deve moderar a velocidade e, se necessário, parar antes da passagem para peões (passadeira) para deixar atravessar os peões que nela circulem. A opção correta para a Questão 271 é a C: \"Parar e deixar o peão atravessar.\""
  },
  {
    "idx": 271,
    "number": 272,
    "group": "Sinalização",
    "question": "O que o motorista deve fazer ao sair de um caminho\nparticular?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Ceder a passagem a todos os veículos e peões na via pública."
      },
      {
        "letter": "B",
        "text": "Avançar sem ceder passagem."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_272.jpg",
    "explanation": "Segundo o Artigo 31.º, n.º 1, alínea a) do Código da Estrada, o condutor que aceda à via pública vindo de um caminho particular ou prédio tem de ceder a passagem a todos os utentes que nela transitem. A opção correta para a Questão 272 é a A: \"Ceder a passagem a todos os veículos e peões na via pública.\""
  },
  {
    "idx": 272,
    "number": 273,
    "group": "Sinalização",
    "question": "No próximo entroncamento, o motorista deve ceder a\npassagem?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim."
      },
      {
        "letter": "B",
        "text": "Não."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_273.jpg",
    "explanation": "Ao circular numa via devidamente assinalada com sinal de prioridade (sinal B3 - \"Via com prioridade\" ou B1 - \"Entroncamento com via sem prioridade\"), o condutor beneficia de prioridade de passagem e não tem o dever de ceder a passagem aos veículos que se aproximam da via lateral. A opção correta para a Questão 273 é a B: \"Não.\""
  },
  {
    "idx": 273,
    "number": 274,
    "group": "Cedência de passagem",
    "question": "Perante este sinal, o motorista deve:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Avançar em primeiro lugar."
      },
      {
        "letter": "B",
        "text": "Ceder a passagem."
      }
    ],
    "answer": "B",
    "imageUrl": "/assets/questoes/imagem_274.jpg",
    "explanation": "O sinal de cedência de passagem B1 exige que o condutor imobilize o veículo se necessário e ceda a passagem aos veículos que transitam na via com que se cruza. A opção correta para a Questão 274 é a B: \"Ceder a passagem.\""
  },
  {
    "idx": 274,
    "number": 275,
    "group": "Cedência de passagem",
    "question": "Qualquer veículo que saia de uma passagem de nível deve:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Passar antes dos outros."
      },
      {
        "letter": "B",
        "text": "Deixar os outros passarem primeiro."
      },
      {
        "letter": "C",
        "text": "Parar em cima da passagem de nível."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_275.jpg",
    "explanation": "Por exceção expressa do Artigo 31.º, n.º 2 do Código da Estrada, o condutor que sai de uma passagem de nível tem prioridade sobre os outros veículos, devendo estes deixar passar para desimpedir a via férrea. A opção correta para a Questão 275 é a A: \"Passar antes dos outros.\""
  },
  {
    "idx": 275,
    "number": 276,
    "group": "Cedência de passagem",
    "question": "Ao encontrar este sinal, como deve proceder?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Ceder a passagem a todos os veículos que circulem na via em que vai\nentrar."
      },
      {
        "letter": "B",
        "text": "Ceder a passagem apenas aos veículos vindos da direita."
      },
      {
        "letter": "C",
        "text": "Ceder a passagem apenas aos veículos vindos da esquerda."
      }
    ],
    "answer": "A",
    "imageUrl": "/assets/questoes/imagem_276.jpg",
    "explanation": "A aproximação do sinal B1 impõe o dever de ceder a passagem a todos os veículos em circulação na via de interseção. A opção correta para a Questão 276 é a A: \"Ceder a passagem a todos os veículos que circulem na via em que vai entrar.\""
  },
  {
    "idx": 276,
    "number": 277,
    "group": "Cedência de passagem",
    "question": "Uma condução defensiva é:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Estar atento aos outros condutores, antecipando situações de risco."
      },
      {
        "letter": "B",
        "text": "Conduzir sempre a alta velocidade."
      }
    ],
    "answer": "A",
    "explanation": "Condução defensiva consiste em antecipar potenciais perigos, observar constantemente o trânsito e adotar comportamentos preventivos para evitar acidentes causados por erros alheios. A opção correta para a Questão 277 é a A: \"Estar atento aos outros condutores, antecipando situações de risco.\""
  },
  {
    "idx": 277,
    "number": 278,
    "group": "Cedência de passagem",
    "question": "Ao conduzir à noite, o motorista deve:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Reduzir a velocidade apenas nas curvas."
      },
      {
        "letter": "B",
        "text": "Manter os máximos ligados em todas as situações."
      },
      {
        "letter": "C",
        "text": "Ver e ser visto, usando corretamente as luzes."
      }
    ],
    "answer": "C",
    "explanation": "Na condução noturna, o princípio fundamental de segurança é \"ver e ser visto\", utilizando as luzes de cruzamento (médios) ou de estrada (máximos) em conformidade com o Artigo 60.º do Código da Estrada para não encandear terceiros. A opção correta para a Questão 278 é a C: \"Ver e ser visto, usando corretamente as luzes.\""
  },
  {
    "idx": 278,
    "number": 279,
    "group": "Cedência de passagem",
    "question": "O que deve fazer em condições de nevoeiro?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Usar as luzes de nevoeiro e ajustar a velocidade."
      },
      {
        "letter": "B",
        "text": "Aumentar a velocidade para sair da área com nevoeiro."
      },
      {
        "letter": "C",
        "text": "Manter as luzes desligadas para economizar energia."
      }
    ],
    "answer": "A",
    "explanation": "Em caso de nevoeiro intenso, o condutor deve acender as luzes de nevoeiro e moderar a velocidade para assegurar que consegue parar no espaço visível à sua frente (Artigo 24.º do C.E.). A opção correta para a Questão 279 é a A: \"Usar as luzes de nevoeiro e ajustar a velocidade.\""
  },
  {
    "idx": 279,
    "number": 280,
    "group": "Técnicas de condução",
    "question": "O que significa ´manter a distância de segurança´?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Garantir a distância mínima entre veículos, de modo a evitar\nacidentes."
      },
      {
        "letter": "B",
        "text": "Estar muito próximo do veículo da frente."
      }
    ],
    "answer": "A",
    "explanation": "Uma postura correta ao volante melhora o conforto, previne a fadiga e garante o acesso rápido e eficaz aos comandos do veículo em manobras de emergência. A opção correta para a Questão 280 é a A: \"Ajustar o banco e os espelhos para manter o controlo do veículo.\""
  },
  {
    "idx": 280,
    "number": 281,
    "group": "Técnicas de condução",
    "question": "O que significa ´eco condução´?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Utilizar apenas veículos elétricos."
      },
      {
        "letter": "B",
        "text": "Conduzir de forma eficiente, reduzindo o consumo de combustível e\npoluição."
      },
      {
        "letter": "C",
        "text": "Manter a velocidade máxima para chegar rapidamente ao destino."
      }
    ],
    "answer": "B",
    "explanation": "A eco-condução consiste na antecipação das condições do tráfego, condução em rotações moderadas e manutenção dos pneus para reduzir consumos e emissões. A opção correta para a Questão 281 é a B: \"Conduzir de forma eficiente, reduzindo o consumo de combustível e\npoluição.\"."
  },
  {
    "idx": 281,
    "number": 282,
    "group": "Técnicas de condução",
    "question": "Como deve proceder ao conduzir com neve ou gelo?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Aumentar a velocidade para evitar derrapagens."
      },
      {
        "letter": "B",
        "text": "Travar bruscamente."
      },
      {
        "letter": "C",
        "text": "Colocar correntes nos pneus e circular devagar."
      }
    ],
    "answer": "C",
    "explanation": "Durante a condução noturna, o uso correto das luzes de cruzamento evita encandear os condutores do sentido oposto e permite manter a visibilidade do trajeto. A opção correta para a Questão 282 é a A: \"Utilizar os médios sem encandear outros condutores.\""
  },
  {
    "idx": 282,
    "number": 283,
    "group": "Técnicas de condução",
    "question": "A correta pressão dos pneus contribui para uma condução\nmais económica.",
    "alternatives": [
      {
        "letter": "A",
        "text": "Verdadeiro"
      },
      {
        "letter": "B",
        "text": "Falso"
      }
    ],
    "answer": "A",
    "explanation": "A eco-condução consiste na antecipação das condições do tráfego, condução em rotações moderadas e manutenção dos pneus para reduzir consumos e emissões. A opção correta para a Questão 283 é a B: \"Falso\"."
  },
  {
    "idx": 283,
    "number": 284,
    "group": "Técnicas de condução",
    "question": "A condução sob a influência do álcool provoca no condutor a\ndiminuição dos reflexos.",
    "alternatives": [
      {
        "letter": "A",
        "text": "Falso"
      },
      {
        "letter": "B",
        "text": "Verdadeiro"
      }
    ],
    "answer": "B",
    "explanation": "Nos termos do Artigo 81.º, n.º 2 e Artigo 153.º do Código da Estrada, para motoristas profissionais TVDE o limite máximo de TAS é 0,20 g/l. A opção correta para a Questão 284 é a B: \"Verdadeiro\"."
  },
  {
    "idx": 284,
    "number": 285,
    "group": "Técnicas de condução",
    "question": "O que deve fazer para diminuir as emissões de poluentes?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Conduzir com o motor a altas rotações."
      },
      {
        "letter": "B",
        "text": "Fazer a manutenção regular do veículo."
      },
      {
        "letter": "C",
        "text": "Andar sempre com o ar condicionado ligado."
      }
    ],
    "answer": "B",
    "explanation": "A eco-condução consiste na antecipação das condições do tráfego, condução em rotações moderadas e manutenção dos pneus para reduzir consumos e emissões. A opção correta para a Questão 285 é a A: \"Conduzir com o motor a altas rotações.\"."
  },
  {
    "idx": 285,
    "number": 286,
    "group": "Técnicas de condução",
    "question": "Um motorista de TVDE pode conduzir com uma taxa de\nalcoolemia de 0,2 g/l.",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim, se estiver em boas condições físicas."
      },
      {
        "letter": "B",
        "text": "Não."
      },
      {
        "letter": "C",
        "text": "Sim, porque é um valor permitido."
      }
    ],
    "answer": "B",
    "explanation": "Nos termos do Artigo 81.º, n.º 2 e Artigo 153.º do Código da Estrada, para motoristas profissionais TVDE o limite máximo de TAS é 0,20 g/l. A opção correta para a Questão 286 é a B: \"Não.\"."
  },
  {
    "idx": 286,
    "number": 287,
    "group": "Técnicas de condução",
    "question": "Conduzir com chuva tem como resultado:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Maior aderência dos pneus ao piso."
      },
      {
        "letter": "B",
        "text": "A redução da visibilidade."
      }
    ],
    "answer": "B",
    "explanation": "A distância de travagem aumenta proporcionalmente ao quadrado da velocidade do veículo, exigindo maior espaço para parar em velocidades elevadas. A opção correta para a Questão 287 é a A: \"Aumenta proporcionalmente ao quadrado da velocidade.\""
  },
  {
    "idx": 287,
    "number": 288,
    "group": "Técnicas de condução",
    "question": "O que deve fazer ao conduzir em zonas de vento forte?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Virar o volante no sentido contrário ao do vento."
      },
      {
        "letter": "B",
        "text": "Aumentar a velocidade para atravessar a zona rapidamente."
      },
      {
        "letter": "C",
        "text": "Reduzir a velocidade e manter firme o controlo do volante."
      }
    ],
    "answer": "C",
    "explanation": "Para manter a estabilidade do veículo em curva, o condutor deve moderar a velocidade antes de entrar na curva e acelerar suavemente à saída. A opção correta para a Questão 288 é a A: \"Reduzir a velocidade antes da curva e acelerar suavemente na saída.\""
  },
  {
    "idx": 288,
    "number": 289,
    "group": "Técnicas de condução",
    "question": "A distância de travagem varia com:",
    "alternatives": [
      {
        "letter": "A",
        "text": "As condições atmosféricas."
      },
      {
        "letter": "B",
        "text": "A largura da via."
      },
      {
        "letter": "C",
        "text": "A sinalização vertical existente no local."
      }
    ],
    "answer": "A",
    "explanation": "O estado de conservação e a profundidade do piso dos pneus (mínimo legal de 1,6 mm) são cruciais para a drenagem de água e aderência em piso molhado. A opção correta para a Questão 289 é a A: \"Garantir uma boa aderência e escoamento de água.\""
  },
  {
    "idx": 289,
    "number": 290,
    "group": "Técnicas de condução",
    "question": "Qual é o prazo de validade do certificado de motorista TVDE?",
    "alternatives": [
      {
        "letter": "A",
        "text": "3 anos"
      },
      {
        "letter": "B",
        "text": "5 anos"
      },
      {
        "letter": "C",
        "text": "10 anos"
      }
    ],
    "answer": "B",
    "explanation": "O Certificado de Motorista de TVDE (CMTVDE) emitido pelo IMT é válido por 5 anos, sendo renovável mediante formação contínua (Artigo 10.º da Lei n.º 45/2018). A opção correta para a Questão 290 é a B: \"5 anos\"."
  },
  {
    "idx": 290,
    "number": 291,
    "group": "Regulamentação da atividade",
    "question": "Qual é a lotação máxima permitida para veículos utilizados no\nserviço TVDE?",
    "alternatives": [
      {
        "letter": "A",
        "text": "7 lugares, incluindo o motorista"
      },
      {
        "letter": "B",
        "text": "9 lugares, incluindo o motorista"
      },
      {
        "letter": "C",
        "text": "12 lugares, incluindo o motorista"
      }
    ],
    "answer": "B",
    "explanation": "Nos termos do Artigo 12.º, n.º 1, alínea b) da Lei n.º 45/2018, a lotação máxima dos veículos TVDE é de 9 lugares, incluindo o condutor. A opção correta para a Questão 291 é a B: \"9 lugares, incluindo o motorista\"."
  },
  {
    "idx": 291,
    "number": 292,
    "group": "Regulamentação da atividade",
    "question": "O que é obrigatório para o transporte de passageiros com\nmobilidade reduzida?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Um veículo com capacidade para transportar cadeiras de rodas"
      },
      {
        "letter": "B",
        "text": "Um veículo elétrico ou híbrido"
      },
      {
        "letter": "C",
        "text": "Um motorista com formação adicional"
      }
    ],
    "answer": "A",
    "explanation": "Nos termos do regulamento do IMT para os TVDE, é obrigatória a prestação do serviço e transporte de ajudas técnicas para passageiros com mobilidade reduzida sem custos extra. A opção correta para a Questão 292 é a A: \"Um veículo com capacidade para transportar cadeiras de rodas\"."
  },
  {
    "idx": 292,
    "number": 293,
    "group": "Regulamentação da atividade",
    "question": "O tempo máximo permitido para condução de motoristas TVDE\né de 10 horas num período de 24 horas.",
    "alternatives": [
      {
        "letter": "A",
        "text": "Verdadeiro"
      },
      {
        "letter": "B",
        "text": "Falso"
      }
    ],
    "answer": "A",
    "explanation": "Nos termos do Artigo 13.º da Lei n.º 45/2018, o limite máximo diário de condução contínua e acumulada para motoristas TVDE é de 10 horas num período de 24 horas. A opção correta para a Questão 293 é a A: \"Verdadeiro\"."
  },
  {
    "idx": 293,
    "number": 294,
    "group": "Regulamentação da atividade",
    "question": "Os serviços de TVDE podem ser pagos em dinheiro ou cartão\nde crédito.",
    "alternatives": [
      {
        "letter": "A",
        "text": "Verdadeiro"
      },
      {
        "letter": "B",
        "text": "Falso"
      }
    ],
    "answer": "B",
    "explanation": "Conforme a Lei n.º 45/2018, o pagamento é realizado exclusivamente via plataforma eletrónica, sendo proibida a cobrança direta em numerário a bordo. A opção correta para a Questão 294 é a B: \"Falso\"."
  },
  {
    "idx": 294,
    "number": 295,
    "group": "Regulamentação da atividade",
    "question": "Qual é a idade máxima permitida para veículos utilizados no\nserviço TVDE?",
    "alternatives": [
      {
        "letter": "A",
        "text": "5 anos"
      },
      {
        "letter": "B",
        "text": "10 anos."
      },
      {
        "letter": "C",
        "text": "7 anos."
      }
    ],
    "answer": "C",
    "explanation": "Em conformidade com o Artigo 12.º, n.º 1, alínea c) da Lei n.º 45/2018, a idade máxima dos veículos afetos ao serviço TVDE é de 7 anos a contar da primeira matrícula. A opção correta para a Questão 295 é a C: \"7 anos.\"."
  },
  {
    "idx": 295,
    "number": 296,
    "group": "Regulamentação da atividade",
    "question": "Para se tornar motorista TVDE, tem de ter carta de condução\nda categoria B há mais de:",
    "alternatives": [
      {
        "letter": "A",
        "text": "1 ano."
      },
      {
        "letter": "B",
        "text": "2 anos."
      },
      {
        "letter": "C",
        "text": "3 anos."
      }
    ],
    "answer": "C",
    "explanation": "Nos termos do Artigo 10.º, n.º 1, alínea a) da Lei n.º 45/2018, para aceder à profissão de motorista de TVDE é exigida carta de condução B há mais de 3 anos com averbamento do Grupo 2. A opção correta para a Questão 296 é a C: \"3 anos.\"."
  },
  {
    "idx": 296,
    "number": 297,
    "group": "Regulamentação da atividade",
    "question": "Os motoristas TVDE podem recolher passageiros diretamente\nna via pública, sem recurso a plataforma eletrónica?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim."
      },
      {
        "letter": "B",
        "text": "Não."
      }
    ],
    "answer": "B",
    "explanation": "De acordo com os Artigos 2.º e 13.º da Lei n.º 45/2018, o serviço TVDE só pode ser contratado por plataforma eletrónica, sendo proibido angariar passageiros na via pública. A opção correta para a Questão 297 é a B: \"Não.\"."
  },
  {
    "idx": 297,
    "number": 298,
    "group": "Regulamentação da atividade",
    "question": "Quem é responsável pela fiscalização do cumprimento das\nnormas no serviço TVDE?",
    "alternatives": [
      {
        "letter": "A",
        "text": "GNR e IMT"
      },
      {
        "letter": "B",
        "text": "GNR e PSP"
      },
      {
        "letter": "C",
        "text": "PSP, GNR e IMT"
      }
    ],
    "answer": "C",
    "explanation": "Conforme o Artigo 24.º da Lei n.º 45/2018, a fiscalização da atividade compete à PSP, GNR, IMT, I.P., ACT e Autoridade Tributária. A opção correta para a Questão 298 é a C: \"PSP, GNR e IMT\"."
  },
  {
    "idx": 298,
    "number": 299,
    "group": "Regulamentação da atividade",
    "question": "Os motoristas TVDE devem possuir um curso de formação\nrodoviária inicial de 50 horas para exercerem a atividade.",
    "alternatives": [
      {
        "letter": "A",
        "text": "Verdadeiro"
      },
      {
        "letter": "B",
        "text": "Falso"
      }
    ],
    "answer": "A",
    "explanation": "De acordo com o Artigo 10.º da Lei n.º 45/2018 e a Portaria n.º 293/2018, o curso de formação inicial para motorista de TVDE tem a duração mínima de 50 horas. A opção correta para a Questão 299 é a A: \"Verdadeiro\"."
  },
  {
    "idx": 299,
    "number": 300,
    "group": "Regulamentação da atividade",
    "question": "O serviço de TVDE só pode ser contratado através de\nplataforma eletrónica.",
    "alternatives": [
      {
        "letter": "A",
        "text": "Verdadeiro"
      },
      {
        "letter": "B",
        "text": "Falso"
      }
    ],
    "answer": "A",
    "explanation": "De acordo com os Artigos 2.º e 13.º da Lei n.º 45/2018, o serviço TVDE realiza-se exclusivamente mediante reserva prévia contratada através de plataforma eletrónica. A opção correta para a Questão 300 é a A: \"Verdadeiro\"."
  },
  {
    "idx": 300,
    "number": 301,
    "group": "Regulamentação da atividade",
    "question": "Veículos usados no serviço TVDE podem ter matrícula\nestrangeira, desde que sejam autorizados pelo IMT.",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim."
      },
      {
        "letter": "B",
        "text": "Não."
      }
    ],
    "answer": "B",
    "explanation": "A licença de operador de TVDE é concedida pelo IMT, I.P. às empresas que preencham os requisitos de idoneidade, capacidade financeira e organizacional legalmente previstos. A opção correta para a Questão 301 é a A: \"Concedida pelo IMT a empresas que cumpram os requisitos legais.\""
  },
  {
    "idx": 301,
    "number": 302,
    "group": "Regulamentação da atividade",
    "question": "Um veículo usado no serviço TVDE deve passar por uma\ninspeção técnica:",
    "alternatives": [
      {
        "letter": "A",
        "text": "1 ano após a matrícula e, depois, todos os anos."
      },
      {
        "letter": "B",
        "text": "2 anos após a matrícula e, depois, de dois em dois anos."
      },
      {
        "letter": "C",
        "text": "No prazo estipulado pelo IMT."
      }
    ],
    "answer": "A",
    "explanation": "De acordo com o Artigo 12.º, n.º 1, alínea d) da Lei n.º 45/2018, a inspeção técnica periódica é obrigatória 1 ano após a matrícula e depois anualmente. A opção correta para a Questão 302 é a A: \"1 ano após a matrícula e, depois, todos os anos.\"."
  },
  {
    "idx": 302,
    "number": 303,
    "group": "Regulamentação da atividade",
    "question": "O tempo de espera para passageiros com mobilidade reduzida\ndeve ser:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Superior a 30 minutos"
      },
      {
        "letter": "B",
        "text": "Superior a 15 minutos."
      },
      {
        "letter": "C",
        "text": "Inferior a 15 minutos."
      }
    ],
    "answer": "C",
    "explanation": "Nos termos do regulamento do IMT para os TVDE, é obrigatória a prestação do serviço e transporte de ajudas técnicas para passageiros com mobilidade reduzida sem custos extra. A opção correta para a Questão 303 é a C: \"Inferior a 15 minutos.\"."
  },
  {
    "idx": 303,
    "number": 304,
    "group": "Regulamentação da atividade",
    "question": "Os veículos TVDE podem circular nas vias reservadas a\ntransportes públicos:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sim."
      },
      {
        "letter": "B",
        "text": "Não."
      }
    ],
    "answer": "B",
    "explanation": "Os motoristas de TVDE estão legalmente obrigados a deter carta de condução da categoria B há mais de 3 anos, acompanhada do averbamento do grupo 2. A opção correta para a Questão 304 é a A: \"Carta de condução categoria B há mais de 3 anos com averbamento Grupo 2.\""
  },
  {
    "idx": 304,
    "number": 320,
    "group": "Regulamentação da atividade",
    "question": "A que distância deve colocar o triângulo de pré-sinalização de\nperigo em caso de avaria?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Pelo menos 10 metros."
      },
      {
        "letter": "B",
        "text": "Pelo menos 50 metros."
      },
      {
        "letter": "C",
        "text": "Pelo menos 30 metros."
      }
    ],
    "answer": "C",
    "explanation": "Nos termos do Artigo 88.º do Código da Estrada, o triângulo de pré-sinalização de perigo deve ser colocado a pelo menos 30 metros do veículo e visível a 100 metros. A opção correta para a Questão 320 é a C: \"Pelo menos 30 metros.\"."
  },
  {
    "idx": 305,
    "number": 321,
    "group": "Regulamentação da atividade",
    "question": "O que deve fazer ao encontrar um acidente com vítimas?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Tentar resolver a situação sozinho."
      },
      {
        "letter": "B",
        "text": "Garantir a segurança e ligar para o 112."
      },
      {
        "letter": "C",
        "text": "Seguir a viagem, sem parar."
      }
    ],
    "answer": "B",
    "explanation": "É expressamente proibido aos veículos TVDE a utilização de faixas reservadas a transportes públicos (corredores BUS), salvo sinalização específica em contrário. A opção correta para a Questão 321 é a A: \"Não podem circular em vias reservadas BUS salvo autorização expressa.\""
  },
  {
    "idx": 306,
    "number": 322,
    "group": "Regulamentação da atividade",
    "question": "Em que situação deve ligar para o número de emergência 112?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Para pedir informações de trânsito."
      },
      {
        "letter": "B",
        "text": "Para chamar um reboque."
      },
      {
        "letter": "C",
        "text": "Sempre que houver necessidade de assistência urgente."
      }
    ],
    "answer": "C",
    "explanation": "Ao ligar para o 112 (Número Europeu de Emergência), deve indicar a localização exata, número de vítimas e tipo de ocorrência. A opção correta para a Questão 322 é a C: \"Sempre que houver necessidade de assistência urgente.\"."
  },
  {
    "idx": 307,
    "number": 323,
    "group": "Situações de emergência e primeiros socorros",
    "question": "O que deve informar ao ligar para o 112, em caso de acidente?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Apenas o tipo de acidente."
      },
      {
        "letter": "B",
        "text": "Localização exata, tipo de acidente e número de vítimas."
      },
      {
        "letter": "C",
        "text": "A cor dos veículos envolvidos no acidente."
      }
    ],
    "answer": "B",
    "explanation": "Ao ligar para o 112 (Número Europeu de Emergência), deve indicar a localização exata, número de vítimas e tipo de ocorrência. A opção correta para a Questão 323 é a B: \"Localização exata, tipo de acidente e número de vítimas.\"."
  },
  {
    "idx": 308,
    "number": 324,
    "group": "Situações de emergência e primeiros socorros",
    "question": "O que deve fazer se houver um incêndio no motor do veículo?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Abrir o capot rapidamente e apagar as chamas com água."
      },
      {
        "letter": "B",
        "text": "Usar o extintor e apontar à base das chamas."
      },
      {
        "letter": "C",
        "text": "Esperar que o fogo se apague."
      }
    ],
    "answer": "B",
    "explanation": "Em caso de incêndio, direcione o extintor com jatos curtos para a base das chamas, posicionando-se a favor do vento. A opção correta para a Questão 324 é a B: \"Usar o extintor e apontar à base das chamas.\"."
  },
  {
    "idx": 309,
    "number": 325,
    "group": "Situações de emergência e primeiros socorros",
    "question": "O que deve fazer após utilizar um extintor?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Recarregá-lo ou substituí-lo por um novo."
      },
      {
        "letter": "B",
        "text": "Guardá-lo no veículo, para a próxima utilização."
      }
    ],
    "answer": "A",
    "explanation": "Em caso de incêndio, direcione o extintor com jatos curtos para a base das chamas, posicionando-se a favor do vento. A opção correta para a Questão 325 é a A: \"Recarregá-lo ou substituí-lo por um novo.\"."
  },
  {
    "idx": 310,
    "number": 326,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Quando deve usar o colete retrorrefletor?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sempre que sair do veículo para sinalizar ou reparar."
      },
      {
        "letter": "B",
        "text": "Somente em locais com pouca visibilidade."
      },
      {
        "letter": "C",
        "text": "Apenas em estradas movimentadas."
      }
    ],
    "answer": "A",
    "explanation": "De acordo com o Artigo 88.º, n.º 4 do Código da Estrada, deve vestir o colete retrorrefletor antes de sair do veículo numa imobilização de emergência. A opção correta para a Questão 326 é a A: \"Sempre que sair do veículo para sinalizar ou reparar.\"."
  },
  {
    "idx": 311,
    "number": 327,
    "group": "Situações de emergência e primeiros socorros",
    "question": "No primeiro contacto com uma vitima de um acidente, o que\ndeve fazer primeiro?",
    "alternatives": [
      {
        "letter": "A",
        "text": "Verificar se respira e se tem pulsação."
      },
      {
        "letter": "B",
        "text": "Retirar a vítima do veículo imediatamente."
      },
      {
        "letter": "C",
        "text": "Procurar por ferimentos visíveis."
      }
    ],
    "answer": "A",
    "explanation": "No primeiro contacto com uma vítima inconsciente num acidente de viação, o socorrista deve assegurar a permeabilidade da via aérea e verificar de imediato se respira normalmente. A opção correta para a Questão 327 é a A: \"Verificar se respira e se tem pulsação.\""
  },
  {
    "idx": 312,
    "number": 328,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Em caso de acidente com o seu veículo, deve:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Sair rapidamente do veículo sem avisar outros condutores."
      },
      {
        "letter": "B",
        "text": "Garantir a segurança no local, sinalizar e ligar para o 112."
      },
      {
        "letter": "C",
        "text": "Resolver a situação sozinho, sem pedir ajuda."
      }
    ],
    "answer": "B",
    "explanation": "Perante a ocorrência de um acidente, as prioridades absolutas do condutor são garantir a segurança do local, proceder à devida pré-sinalização e acionar os meios de emergência via 112. A opção correta para a Questão 328 é a B: \"Garantir a segurança no local, sinalizar e ligar para o 112.\""
  },
  {
    "idx": 313,
    "number": 329,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Em caso de queimadura deve:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Lavar a zona afetada com água quente."
      },
      {
        "letter": "B",
        "text": "Furar as bolhas existentes."
      },
      {
        "letter": "C",
        "text": "Evitar tocar diretamente na área queimada."
      }
    ],
    "answer": "C",
    "explanation": "Em queimaduras, deve arrefecer a zona atingida com água limpa corrente para conter a destruição dos tecidos e aliviar a dor. A opção correta para a Questão 329 é a C: \"Evitar tocar diretamente na área queimada.\"."
  },
  {
    "idx": 314,
    "number": 330,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Para sinalizar corretamente o local de um acidente, o\nmotorista deve:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Ligar as luzes de perigo, vestir o colete refletor e colocar o triângulo de\npré- sinalização de perigo."
      },
      {
        "letter": "B",
        "text": "Abandonar o local do acidente."
      }
    ],
    "answer": "A",
    "explanation": "Para a sinalização eficaz do local do acidente, o condutor deve acender as luzes de perigo (quatro piscas), vestir o colete refletor antes de sair do habitáculo e colocar o sinal de pré-sinalização de perigo. A opção correta para a Questão 330 é a A: \"Ligar as luzes de perigo, vestir o colete refletor e colocar o sinal de pré- sinalização de perigo.\""
  },
  {
    "idx": 315,
    "number": 331,
    "group": "Situações de emergência e primeiros socorros",
    "question": "Os princípios gerais do socorrismo são:",
    "alternatives": [
      {
        "letter": "A",
        "text": "Prever, ajudar e socorrer."
      },
      {
        "letter": "B",
        "text": "Parar, socorrer e alertar."
      },
      {
        "letter": "C",
        "text": "Prevenir, alertar e socorrer ."
      }
    ],
    "answer": "C",
    "explanation": "Os princípios de atuação no socorrismo (Algoritmo PAS) são: Prevenir a zona de perigo, Alertar os serviços de emergência (112) e Socorrer as vítimas. A opção correta para a Questão 331 é a C: \"Prevenir, alertar e socorrer .\"."
  }
];
