import Head from 'next/head';
import React from 'react';
import Stripe from 'stripe';
import Button from '../../components/Form/Button';
import Layout from '../../components/Layout';
import { AepzeraLogo } from '../../components/Logos/aepzera_logo';
import { VideoPlyr } from '../../components/VideoPlyr';
import { useAuth } from '../../contexts/auth';
import { fetchPostJSON } from '../../helpers/api';
import getStripe from '../../helpers/stripe/stripe-stripejs';
import { useProducts } from '../../hooks/useProducts';
import { AepzeraCard, AepzeraContent } from '../../styles/aepzera';
import { Container } from '../../styles/home';

interface IPrice extends Stripe.Price {
  product: Stripe.Product;
}

interface IProps {
  prices: IPrice[];
}

const Aepzera = ({ content, currency }) => {
  const { user } = useAuth();
  // get list of products from api:
  const {
    data: prices,
    isLoading,
    isError,
  } = useProducts({ currency, product: 'Aepzera' });

  const handleClick = async (price) => {
    const stripe = await getStripe();

    // const session = await response.json();
    const response = await fetchPostJSON('/api/checkout_session', {
      price_id: price.id,
      customer_email: user.email,
      product_name: 'Aepzera',
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
              <p>{content.description}</p>
              <Button
                primary
                width="100%"
                height="1rem"
                padding=".8rem 2rem"
                onClick={() => handleClick(prices)}
              >
                {content.action_button}
                {((prices?.unit_amount as number) / 100).toFixed(2)}
              </Button>
            </aside>
          </AepzeraCard>
        )}

        <AepzeraContent>
          <h3>{content.how_it_works.title}</h3>
          <p>{content.how_it_works.description}</p>
          <img
            src="/images/aepzera/aepzera_interface_home.png"
            alt="Aepzera Home Interface"
          />
          <div>
            <section>
              <aside>
                <h3>{content.new_master_aep.title}</h3>
                <p>{content.new_master_aep.description_01}</p>
                <ol>
                  <li>{content.new_master_aep.description_02}</li>
                  <li>{content.new_master_aep.description_03}</li>
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
                <h3>{content.save_aep_file.title}</h3>
                <p>{content.save_aep_file.description_01}</p>
              </aside>
            </section>
            <section>
              <aside>
                <h3>{content.remove_aep_metadata.title}</h3>
                <p>{content.remove_aep_metadata.description_01}</p>
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
                <h3>{content.new_comment_thread.title}</h3>
                <p>{content.new_comment_thread.description_01}</p>
              </aside>
              <img
                src="/images/aepzera/aepzera_comments.png"
                alt="Create Comment"
              />
              <p>{content.new_comment_thread.description_02}</p>
            </section>
            <section>
              <aside>
                <h3>{content.new_aep_render.title}</h3>
                <p>{content.new_aep_render.description_01}</p>
                <br />
                <p>{content.new_aep_render.description_02}</p>
                <br />
                <p>{content.new_aep_render.description_03}</p>
              </aside>
              <img
                src="/images/aepzera/aepzera_create_render.png"
                alt="Create Render"
              />
              <aside>
                <p>{content.new_aep_render.description_04}</p>
                <br />
                <p>{content.new_aep_render.description_05}</p>
              </aside>
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
                <h3>{content.set_custom_project_settings.title}</h3>
                <p>{content.set_custom_project_settings.description_01}</p>
              </aside>
            </section>
            <section>
              <aside>
                <h3>{content.projects_navigator.title}</h3>
                <p>{content.projects_navigator.description_01}</p>
              </aside>
              <img
                src="/images/aepzera/aepzera_projects.png"
                alt="Projects Navigator"
              />
            </section>
            <section>
              <img
                src="/images/aepzera/aepzera_set_custom_folders_aep.png"
                alt="Set Custom Folders Aep"
              />
              <aside>
                <h3>{content.settings.title}</h3>
                <p>{content.settings.description_01}</p>
              </aside>
              <img
                src="/images/aepzera/aepzera_set_custom_folders_renders.png"
                alt="Set Custom Folders Renders"
              />
              <aside>
                <p>{content.settings.description_02}</p>
                <br />
                <p>
                  Ex: <code>'/previews/[username]'</code>.
                </p>
                <p>
                  {content.settings.description_03}
                  <br />
                  <code>'/previews/john/'</code>,<code>'/previews/mary/'</code>,
                  etc.
                </p>
              </aside>
            </section>
          </div>
        </AepzeraContent>
      </Container>
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  // get the locale text for the selected language:
  const contentAepzera = (await import(`../../locales/${locale}/aepzera.js`))
    .default;

  const currency = locale !== 'pt-BR' ? 'usd' : 'brl';

  return {
    props: {
      content: contentAepzera,
      currency,
    },
  };
}

export default Aepzera;
