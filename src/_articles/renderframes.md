---
title: 'RenderFrames'
excerpt: 'Como salvar vários frames de uma composição de uma só vez.'
coverImage: '/images/articles/renderframes/renderframes_cover.jpg'
date: '2020-03-16T05:35:07.322Z'
---

Para salvar um frame da sua composição, você precisa deixar a agulha da timeline no ponto em que deseja, e então acessar o menu '**Composition > Save Frame As > File**' ou simplesmente usar o atalho '**Ctrl + Alt + S**'. Fazendo isto, o Render Queue se abre, e nele você pode escolher onde salvar o frame e então renderizá-lo.

![alt text](/images/articles/renderframes/renderframes_save.png "Efeito CC Page Turn e Drop Shadow.")
*Caminho para salvar um frame da composição.*

Este processo é simples e prático, caso precise salvar apenas 1 ou 2 frames da composição.

Para salvar vários frames de uma composição eu percebi que perdia muito tempo nesse processo repetitivo, salvando cada um manualmente.

Sentei um dia que estava mais tranquilo e escrevi o script RenderFrames para automatizar esse processo.

### RenderFrames

O script RenderFrames salva vários frames de forma rápida e simples.

![alt text](/images/articles/renderframes/renderframes_interface.png#width_auto "RenderFrames interface.")
*RenderFrames interface.*

### Como funciona

Crio um null layer e posiciono markers nos tempos em que preciso salvar os frames.

![alt text](/images/articles/renderframes/renderframes_layer.png "Null Layer com os markers posicionados onde preciso dos frames.")
*Null Layer com os markers posicionados onde preciso dos frames.*

Escrevo o nome do arquivo e seleciono então, no botão “...” uma pasta onde eu quero salvar estes frames.

Caso nenhuma pasta customizada seja selecionada, por padrão os frames são salvos numa pasta “../Frames” próxima ao arquivo .aep do projeto aberto. Assim fica mais prático também e atende ao meu workflow.

Ao apertar o botão '**Render**', o script percorre todos os markers do null layer selecionado, salvando os frames de uma só vez, em formato .png.

Dessa forma economizo tempo e evito salvar frames errados, com nomes diferentes, enfim, diminuindo a chance de erro que eu teria fazendo o processo de forma manual. 

Espero futuramente preparar este script para disponibilizá-lo online.

Se você se interessou pelo meu trabalho e quiser conversar comigo, me escreva em *cleber @ cgbordin.com*.