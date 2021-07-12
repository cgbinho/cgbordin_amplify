---
title: 'FlippingBook'
excerpt: 'Como eu criei um script que gera um livro em After Effects.'
coverImage: '/images/articles/flippingbook/flippingbook_cover.jpg'
date: '2020-03-16T05:35:07.322Z'
---

Durante a produção [deste vídeo](https://www.youtube.com/watch?v=atW0cztyxso) para o CEJAM, me surgiu a necessidade de criar um livro animado que faria parte da história do vídeo. O conteúdo das páginas foi animado em After Effects, então renderizado a parte e aplicado como textura em um livro 3D.

Durante este processo todo, eu precisei pular de um programa para o outro, lidar com as texturas das páginas, renderizar o 3D, substituir…e logo percebi que para um próximo projeto, teria que pensar uma forma mais eficiente e prática.

Então comecei a estudar uma forma de criar um livro inteiramente no After Effects.

Depois de alguns testes, a melhor forma que encontrei de simular as páginas virando, foi com o efeito **"CC Page Turn"** e o **"Drop Shadow"**, nativos do After Effects.

![alt text](/images/articles/flippingbook/flippingbook_ccpageturn.png "Efeito CC Page Turn e Drop Shadow.")
*Efeito CC Page Turn e Drop Shadow.*

Não fica uma solução igual a uma página 3D, mas é o mais perto que eu consegui chegar. Fiz algumas páginas virando, separei elas em composições, estudei a lógica de como elas são sobrepostas da melhor forma ( o CC Page Turn tem opções de página de frente e verso, etc. ) e depois de uns testes, fiquei com um 'rascunho' de um livro que me deixou satisfeito.

![alt text](/images/articles/flippingbook/flippingbook_test.gif "Página virando com o efeito 'CC Page Turn.")
*Página virando com o efeito 'CC Page Turn*

Com este 'rascunho', comecei a escrever o script que iria automatizar este processo e gerar quantas páginas eu precisar, numa composição principal.

Daí surgiu o **Flipping Book**.

## Flipping Book

![alt text](/images/articles/flippingbook/flippingbook_create.png#width_auto "Flipping Book User Interface")
*Flipping Book User Interface*

Na aba **'Create'**, o usuário escolhe a quantidade de páginas que o livro terá e o recorte de canto de página: reto ou arredondado.

Ao clicar no **'Create'**, uma composição chamada **'Flipping Book'** é criada, bem como as composições de cada página alinhadas, sendo folheadas num intervalo de tempo de 1 segundo.

![alt text](/images/articles/flippingbook/flippingbook_timeline.png "Composição gerada pelo Flipping Book")
*Composição gerada pelo Flipping Book*

Como um livro pode ter várias páginas, fica fácil se perder em meio a tantas composições na timeline, portanto para isso criei uma aba 'Edit' onde o usuário pode aumentar ou diminuir o tempo de duração da página que desejar.

![alt text](/images/articles/flippingbook/flippingbook_edit.png#width_auto "Aba Edit permite ajustar o tempo de duração de cada página")
*Aba Edit permite ajustar o tempo de duração de cada página*

Enfim, foi um desafio interessante criar esta ferramenta, e com ela aprendi a trabalhar melhor alguns aspectos do After Effects. Estou satisfeito com o resultado porque ela pode ser útil em qualquer outro projeto que envolva livro animado.

Sem a preocupação de criar o livro em si, **sobra tempo para melhorar a qualidade do trabalho de animação** dentro de cada página.

Aqui está um exemplo de aplicação que eu montei rapidamente, simulando uma revista em quadrinhos:

<figure class="video_container">
  <iframe class="video_content" src="https://www.youtube.com/embed/Iw-_NJp3neI" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

Espero que tenha aprendido alguma coisa interessante sobre programação para After Effects.

Se você se interessou pelo meu trabalho e quiser conversar comigo, me escreva em *cleber @ cgbordin.com*.