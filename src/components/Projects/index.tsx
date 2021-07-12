import React from 'react';
import { Container } from '../../styles/home';
import { VideoPlyr } from '../VideoPlyr';
import { ProjectsContent } from './styles';
import { VideoCard } from './VideoCard';

export function ProjectsComponent() {
  return (
    <ProjectsContent>
      <h3 id="projects">Projetos</h3>
      <div className="projects_list">
        <section>
          <VideoPlyr {...{ src: 'deIBIR3sxcU' }} />
          <aside>
            <h4>Bayer</h4>
            <p>
              Projeto realizado pelo Motion Hand para a Huawei, meu papel na
              produção foi criar o setup das composições de cada cena: criando
              os planos 3D dos cenários, rig de todos os personagens, luzes e
              granulados.
            </p>
            <p>
              Softwares: Adobe After Effects, Adobe Photoshop e Adobe
              Illustrator. <br />
              Ferramentas / Scripts: Duik, puppet pin e scripts autorais para
              acelerar o processo de setup de braços, pernas, dedos e luzes das
              cenas.
            </p>
          </aside>
        </section>
        <section>
          <VideoPlyr {...{ src: '6UjcFtj92eU' }} />
          <aside>
            <h4>Huawei</h4>
            <p>
              Projeto realizado pelo Motion Hand para a Huawei, meu papel na
              produção foi bem parecido com o do projeto da Bayer: criar o setup
              das composições de cada cena, montando os planos 3D dos cenários,
              rig de todos os personagens, luzes e granulados. <br />
            </p>
            <p>
              Softwares: Adobe After Effects, Adobe Photoshop e Adobe
              Illustrator. <br />
              Ferramentas / Scripts: Duik, puppet pin e scripts autorais para
              acelerar o processo de setup de braços, pernas, dedos e luzes das
              cenas.
            </p>
          </aside>
        </section>
        <section>
          <VideoPlyr {...{ src: 'j4FyLNfmpM4' }} />
          <aside>
            <h4>Skoland</h4>
            <p>
              Projeto realizado pela F/Nazca, onde fui responsável pelo setup e
              animação do personagem, microfone, criação do 3D e animação das
              latas fantasiadas.
            </p>
            <p>
              Softwares: Adobe After Effects, Autodesk 3dsMax, Adobe Photoshop e
              Adobe Illustrator. <br />
              Ferramentas / Scripts: Ruberhose, Puppet pin e scripts autorais
              para complementar animações das latinhas.
            </p>
          </aside>
        </section>
        <section>
          <VideoPlyr {...{ src: '-pXMLx54Qk0' }} />
          <aside>
            <h4>Hostfiber</h4>
            <p>Texto descritivo sobre o projeto da Hostfiber</p>
          </aside>
        </section>
      </div>
    </ProjectsContent>
  );
}
