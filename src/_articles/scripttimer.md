---
title: 'ScriptTimer'
excerpt: 'Como estimar o tempo de duração do vídeo ainda em fase de roteiro?'
coverImage: '/images/articles/scripttimer/scripttimer_cover.jpg'
date: '2020-03-16T05:35:07.322Z'
---

Ao produzir vídeos explicativos e institucionais para meus clientes, sempre tive a preocupação em alinhar a proposta inicial de produção com o resultado final.

Por exemplo, a proposta inicial do vídeo ter 1 minuto de duração e no final do projeto entregá-lo com o mesmo 1 minuto de duração ou o mais próximo disso possível.

Fica difícil ter esta certeza enquanto um roteiro está sendo editado e ajustado no meio da produção, e não sabemos se será possível cumprir aquela meta estipulada na proposta inicial. Incrementos no roteiro da locução e cenas adicionais acabam transformando a proposta inicial e a demanda de trabalho que estimamos no início.

### Jogo limpo

Caso perceba que o roteiro está ficando mais longo do que o previsto, vale a pena reavaliar o trabalho extra e conversar novamente com o cliente sobre ajustes no orçamento e prazo para comportar essa nova realidade. De preferência, deixe isso explícito em seu primeiro orçamento.

Para evitar ao máximo estes ajustes de orçamento e prazo, eu procuro entender bem o assunto do vídeo para mensurar melhor quanto tempo de vídeo será necessário para cobrir os pontos chaves.
 
### Roteiro de locução

Neste processo, o roteiro de locução é um grande auxiliador em determinar o tempo total do vídeo. Como um guia, o roteiro de locução facilita a quebra das cenas e nos permite ter uma idéia de quanto tempo elas precisam de tela.

Como determinar o tempo em vídeo que é necessário para cobrir o roteiro da locução?

Eu costumo fazer um cálculo de leitura de 3 palavras por segundo. Se o roteiro da locução tem 165 palavras, então <em>165 / 3 = 55</em> segundos, ou seja, a leitura daquele roteiro com um respiro entre uma frase e outra, tem aproximadamente 60 segundos.

Ainda na fase de roteiro, ter esta noção de quanto tempo o vídeo terá de duração é muito vantajoso e dá tranquilidade em negociar qualquer ajuste com o cliente, antecipadamente.

Para me certificar, gravo um teste de leitura do roteiro com meu próprio microfone, para usar de referência na montagem do storyboard. Assim já consigo fazer uma marcação dos tempos de cena na timeline do After Effects.

### ScriptTimer

Com esta lógica de tempo de leitura acertada, escrevi um script chamado ScriptTimer que automatiza este processo dentro do After Effects:

![alt text](/images/articles/scripttimer/scripttimer_interface.png#width_auto "ScriptTimer Interface")
*ScriptTimer Interface*

### Como funciona

Ele pega o roteiro de locução que está em um arquivo de texto e cria uma timeline no After Effects com um layer de texto projetando o tempo de leitura de cada frase, marcando também os inícios com markers.

![alt text](/images/articles/scripttimer/scripttimer_preview.png#width_100% "ScriptTimer Preview")
*ScriptTimer Preview*

![alt text](/images/articles/scripttimer/scripttimer_timeline.png#width_100% "ScriptTimer Timeline")
*Resultado do ScriptTimer na timeline.*

Com esta marcação de tempo já na timeline, fica mais fácil editar o storyboard animado e alinhar este tempo de leitura com o locutor profissional e assim, diminuindo a margem de erro de ajuste de cenas.

Espero futuramente preparar este script para disponibilizá-lo online.

Se você se interessou pelo meu trabalho e quiser conversar comigo, me escreva em *cleber @ cgbordin.com*.
