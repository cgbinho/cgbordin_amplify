import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router';
import React from 'react';
import Stripe from 'stripe';
// import { API, graphqlOperation, withSSRContext } from 'aws-amplify';
// import { listProducts } from '../../graphql/queries';
import { useProducts } from '../../hooks/useProducts';
import getStripe from '../../helpers/stripe/stripe-stripejs';
import { useAuth } from '../../contexts/auth';

import Head from 'next/head';

import { AboutComponent } from '../../components/About';
import Layout from '../../components/Layout';
import { ProjectsComponent } from '../../components/Projects';

import { Container } from '../../styles/home';
import Button from '../../components/Form/Button';
import { fetchPostJSON } from '../../helpers/api';
import { VideoCard } from '../../components/Projects/VideoCard';
import { AepzeraLogo } from '../../components/Logos/aepzera_logo';
import { VideoPlyr } from '../../components/VideoPlyr';
import { AepzeraCard, AepzeraContent } from './styles';

interface IPrice extends Stripe.Price {
  product: Stripe.Product;
}

interface IProps {
  prices: IPrice[];
}

const Aepzera = () => {
  const router = useRouter();

  const { user } = useAuth();
  // get list of products from api:
  const {
    data: prices,
    isLoading,
    isError,
  } = useProducts({ currency: 'brl', product: 'Aepzera' });

  const handleClick = async (price) => {
    console.log(price);
    const stripe = await getStripe();

    // const response = await fetch('/api/checkout_session', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     price_id: price.id,
    //     customer_email: user.email,
    //   }),
    // });

    // const session = await response.json();
    const response = await fetchPostJSON('/api/checkout_session', {
      price_id: price.id,
      customer_email: user.email,
    });
    if (response.statusCode === 500) {
      console.error(response.message);
      return;
    }
    // console.log({ session });
    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: response.id,
    });

    if (result.error) {
      console.log(result.error);
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  return (
    <Layout>
      <Head>
        <title>CGBORDIN - Aepzera</title>
      </Head>
      <Container>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error loading products.</p>}
        {prices && (
          <AepzeraCard>
            <AepzeraLogo />
            <VideoPlyr {...{ src: 'ysz5S6PUM-U' }} />
            <aside>
              <p>
                Aepzera ajuda a manter sua pipeline de produção organizada no
                After Effects e agiliza o seu workflow.
              </p>
              <Button
                primary
                width="100%"
                height="1rem"
                padding=".8rem 2rem"
                onClick={() => handleClick(prices)}
              >
                Comprar R$ {((prices?.unit_amount as number) / 100).toFixed(2)}
              </Button>
            </aside>
          </AepzeraCard>
        )}

        <AepzeraContent>
          <h3>Como funciona</h3>
          <p>
            Configure a estrutura de pastas que você está acostumado a utilizar
            em seus projetos e deixe que o Aepzera irá ajudá-lo a trabalhar de
            forma mais rápida, sozinho ou em equipe.
          </p>
          <img
            src="/images/aepzera/aepzera_interface_home.png"
            alt="Aepzera Home Interface"
          />
          <div>
            <section>
              <aside>
                <h3>New Master Aep</h3>
                <p> Crie um novo arquivo aep em 2 opções customizadas:</p>
                <ol>
                  <li>
                    1. Utilizando como base o arquivo que está aberto, porém já
                    criando uma subpasta para este arquivo. Útil para organizar
                    arquivos aep de cenas diferentes em estruturas de pastas
                    próprias.
                  </li>
                  <li>
                    2. Cria o arquivo aep utilizando um arquivo template que
                    você tenha criado.
                  </li>
                </ol>
              </aside>
              <img
                src="/images/aepzera/aepzera_create_master_aep.png"
                alt="Create Master Aep"
              />
            </section>
            <section>
              <img
                src="/images/aepzera/aepzera_save_aep_file.png"
                alt="Save Aep File"
              />
              <aside>
                <h3>Save Aep File</h3>
                <p>
                  Salve o arquivo aep aberto com metadata adicionais ( como
                  username e email). Útil na identificação de quem foi o último
                  usuário da equipe a modificar este aep.
                </p>
              </aside>
            </section>
            <section>
              <aside>
                <h3>Remove Aep Metadata</h3>
                <p>
                  Como o título diz, remove a metadata ( username e email ) do
                  arquivo aep aberto.
                </p>
              </aside>
              <img
                src="/images/aepzera/aepzera_remove_metadata_from_aep.png"
                alt="Remove Aep Metadata"
              />
            </section>
            <section>
              <img
                src="/images/aepzera/aepzera_create_comment_thread.png"
                alt="Create Comment Thread"
              />
              <aside>
                <h3>New Comment Thread</h3>
                <p>
                  Cria um novo arquivo com o seu comentário, em uma pasta de
                  comentários em seu projeto. Útil na comunicação entre os
                  integrantes da equipe.
                </p>
              </aside>
              <img
                src="/images/aepzera/aepzera_comments.png"
                alt="Create Comment"
              />
              <p>
                Você também pode especificar uma prioridade para cada mensagem
                enviada com 'low', 'medium', 'high'.
              </p>
            </section>
            <section>
              <aside>
                <h3>Create Render</h3>
                <p>
                  Esta opção facilita o seu envio de renders para o Adobe Media
                  Encoder. <br />
                  Você especifica um nome do arquivo ( por padrão o Aepzera
                  sugere o nome do aep aberto como nome ) e também escolhe entre
                  as pastas de render comuns de seu projeto. <br />
                  Você também pode optar por incluir no caminho do arquivo uma
                  subpasta com o formato de data 'DD/MM/AA', para melhorar a
                  organização de seus renders.
                </p>
              </aside>
              <img
                src="/images/aepzera/aepzera_create_render.png"
                alt="Create Render"
              />
              <p>
                Por padrão, o Aepzera sugere duas pastas: 'previews' e
                'deliverables', mas você pode configurar o Aepzera com as pastas
                que costuma utilizar. <br />
                Você pode adicionar, modificar e excluir estas configurações de
                pastas em 'Settings {'>'} Render Folders' e também criar
                configurações personalizadas por projeto em 'Home {'>'} Set
                Custom Project Settings'. O Apezera sempre irá procurar estas
                pastas em seus projetos.
              </p>
              <img
                src="/images/aepzera/aepzera_create_render_select.png"
                alt="Create Render Select"
              />
            </section>
            <section>
              <img
                src="/images/aepzera/aepzera_set_custom_folders_aep.png"
                alt="Set Custom Project Folders"
              />
              <aside>
                <h3>Set Custom Project Settings</h3>
                <p>
                  Caso um projeto tenha uma estrutura de pastas diferente da
                  configurada no Aepzera, você pode criar uma configuração nova
                  que será atrelada a apenas este projeto.
                </p>
              </aside>
            </section>
            <section>
              <aside>
                <h3>Projects Navigator</h3>
                <p>
                  Nesta aba você consegue explorar as pastas dos seus projetos
                  de forma mais rápida, sem sair do After Effects. Com ele você
                  pode abrir pastas no Windows Explorer / Finder, abrir aeps,
                  vídeos e comentários criados para o seu projeto.
                </p>
              </aside>
              <img
                src="/images/aepzera/aepzera_projects.png"
                alt="Create Render"
              />
            </section>
            <section>
              <img
                src="/images/aepzera/aepzera_set_custom_folders_aep.png"
                alt="Set Custom Folders Aep"
              />
              <aside>
                <h3>Settings</h3>
                <p>
                  Aqui você configura o Aepzera com o caminho de pastas da sua
                  estrutura de projetos. Indique o caminho para a pasta aep,
                  template (opcional), comentários (opcional) e as pastas de
                  renders que seus projetos utiliza.
                </p>
              </aside>
              <img
                src="/images/aepzera/aepzera_set_custom_folders_renders.png"
                alt="Set Custom Folders Renders"
              />
              <p>
                Construa caminhos dinâmicos utilizando o nome do usuário e
                também o nome do projeto como variáveis, caso necessário. Útil
                para estruturas de pastas que levam o nome do usuário em seu
                caminho. <br />
                Por exemplo: <code>'/previews/[username]'</code>. Para o
                usuario01, o Aepzera automaticamente identificaria o caminho
                como: <code>'/previews/usuario01/'</code>, para o usuario02:
                <code>'/previews/usuario02/'</code>, etc.
              </p>
            </section>
          </div>
        </AepzeraContent>
      </Container>
    </Layout>
  );
};

export default Aepzera;
