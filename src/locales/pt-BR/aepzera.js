export default {
  description:
    'Aepzera ajuda a manter sua pipeline de produção organizada no After Effects e agiliza seu workflow.',
  action_button: 'Comprar R$',
  learn_more: 'Saiba mais',
  alert_to_register: `Cadastre-se / Entre para comprar este produto.`,
  how_it_works: {
    title: 'Como funciona',
    description:
      'Configure a estrutura de pastas que você está acostumado a utilizar em seus projetos e deixe que o  aepzera irá ajudá-lo a trabalhar de forma mais rápida, sozinho ou em equipe.',
  },
  new_master_aep: {
    title: 'New Master Aep',
    description_01: 'Crie um novo arquivo aep em 2 opções customizadas:',
    description_02:
      '1. Utilizando como base o arquivo que está aberto, porém já criando uma subpasta para este arquivo. Útil para organizar arquivos aep de cenas diferentes em estruturas de pastas próprias.',
    description_03:
      '2. Cria o arquivo aep utilizando um arquivo template que você tenha criado.',
  },
  save_aep_file: {
    title: 'Save Aep File',
    description_01:
      'Salve o arquivo aep aberto com metadata adicionais ( como username e email). Útil na identificação de quem foi o último usuário da equipe a modificar este aep.',
  },
  remove_aep_metadata: {
    title: 'Remove Aep Metadata',
    description_01:
      'Como o título diz, remove a metadata ( username e email ) do arquivo aep aberto.',
  },
  new_comment_thread: {
    title: 'New Comment Thread',
    description_01:
      'Cria um novo arquivo com o seu comentário, em uma pasta de comentários em seu projeto. Útil na comunicação entre os integrantes da equipe.',
    description_02: `Você também pode especificar uma prioridade para cada mensagem enviada com 'low', 'medium', 'high'.`,
  },
  new_aep_render: {
    title: 'New Aep Render',
    description_01:
      'Esta opção facilita o seu envio de renders para o Adobe Media Encoder.',
    description_02:
      'Você especifica um nome do arquivo ( por padrão o Aepzera sugere o nome do aep aberto como nome ) e também escolhe entre as pastas de render comuns de seu projeto.',
    description_03: `Você também pode optar por incluir no caminho do arquivo uma subpasta com o formato de data 'DD/MM/AA', para melhorar a organização de seus renders.`,
    description_04: `Por padrão, o Aepzera sugere duas pastas: 'previews' e 'deliverables', mas você pode configurar o Aepzera com as pastas
    que costuma utilizar.`,
    description_05: `Você pode adicionar, modificar e excluir estas configurações de pastas em 'Settings > Render Folders' e também criar configurações personalizadas por projeto em 'Home > Set Custom Project Settings'. O Apezera sempre irá procurar estas pastas em seus projetos.`,
  },
  set_custom_project_settings: {
    title: 'Set Custom Project Settings',
    description_01:
      'Caso um projeto tenha uma estrutura de pastas diferente da configurada no Aepzera, você pode criar uma configuração nova que será atrelada a apenas este projeto.',
  },
  projects_navigator: {
    title: 'Projects Navigator',
    description_01:
      'Nesta aba você consegue explorar as pastas dos seus projetos de forma mais rápida, sem sair do After Effects. Com ele você pode abrir pastas no Windows Explorer / Finder, abrir aeps,vídeos e comentários criados para o seu projeto.',
  },
  settings: {
    title: 'Settings',
    description_01:
      ' Aqui você configura o Aepzera com o caminho de pastas da sua estrutura de projetos. Indique o caminho para a pasta aep, template (opcional), comentários (opcional) e as pastas de renders que seus projetos utiliza.',
    description_02:
      'Construa caminhos dinâmicos utilizando o nome do usuário e também o nome do projeto como variáveis, caso necessário. Útil para estruturas de pastas que levam o nome do usuário em seu caminho.',
    description_03:
      ' Para o John e Mary, o Aepzera automaticamente identificaria o caminho como:',
  },
};
