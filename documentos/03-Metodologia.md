# Metodologia

A metodologia de trabalho do projeto foi planejada para abordar o problema de forma eficiente e organizada. Ela abrange a definição das ferramentas, processos e frameworks empregadas pela equipe para a gestão de códigos e outros artefatos, assim como para a organização e coordenação das atividades do projeto.

## Relação de Ambientes de Trabalho

Os artefatos do projeto são desenvolvidos em diferentes plataformas, cada uma com um propósito específico. A tabela abaixo apresenta a relação desses ambientes, detalhando o Ambiente, a Plataforma utilizada, e o Link de Acesso correspondente.

| AMBIENTE                            | PLATAFORMA                         | LINK DE ACESSO                         |
|-------------------------------------|------------------------------------|----------------------------------------|
| Repositório de código fonte         | GitHub                             ||
| Documentos do projeto               | GitHub                             ||
| Gerenciamento do Projeto            | GitHub Projects                    ||

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), com o [Github](https://github.com)
utilizado para hospedagem do repositório.

### Branches
Mesmo que a equipe trabalhe bem e produza código de qualidade, os branches e commits podem se tornar desorganizados sem um padrão definido que todos sigam.

O projeto adota a seguinte convenção para a nomeação de branches, que são estruturadas em três partes:

1. type ou categoria do branch. Os types podem ser os seguintes:

- `docs`: apenas mudanças de documentação;
- `feat`: uma nova funcionalidade;
- `fix`: a correção de um bug;
- `perf`: mudança de código focada em melhorar performance;
- `refactor`: mudança de código que não adiciona uma funcionalidade e também não corrigi um bug;
- `style`: mudanças no código que não afetam seu significado (espaço em branco, formatação, ponto e vírgula, etc);
- `test`: adicionar ou corrigir testes.

2. o que o branch faz em si.

3. Código do requisito. Ex.: RF-01.

Exemplos de alguns nomes de branches que podem existir em nossa aplicação:

- feat-cadastro-usuario-RF-01
- refactor-edicao-colaboradores-RNF-03
- fix-busca-checklists-RF-05

> **Nota:** As convenções de nomeação de branches são baseadas nos padrões de nomenclatura discutidos neste [artigo do Medium](https://medium.com/prolog-app/nossos-padrões-de-nomenclatura-para-branches-e-commits-fade8fd17106).

### Commits

Os commits são fundamentais para manter um histórico claro e organizado das alterações realizadas no código. Eles permitem que a equipe compreenda rapidamente o que foi modificado no trecho de código correspondente.

Cada commit é identificado por uma palavra-chave ou emoji que indica o tipo de alteração realizada, como uma alteração de código, documentação, alteração de visual, teste... Essa identificação padronizada facilita a leitura e o entendimento do histórico de commits.

#### Tipo e descrição

O commit semântico possui os elementos estruturais abaixo (tipos), que informam a intenção do seu commit ao utilizador(a) de seu código.

- `feat`- Commits do tipo feat indicam que seu trecho de código está incluindo um **novo recurso** (se relaciona com o MINOR do versionamento semântico).

- `fix` - Commits do tipo fix indicam que seu trecho de código commitado está **solucionando um problema** (bug fix), (se relaciona com o PATCH do versionamento semântico).

- `docs` - Commits do tipo docs indicam que houveram **mudanças na documentação**, como por exemplo no Readme do seu repositório. (Não inclui alterações em código).

- `test` - Commits do tipo test são utilizados quando são realizadas **alterações em testes**, seja criando, alterando ou excluindo testes unitários. (Não inclui alterações em código)

- `refactor` - Commits do tipo refactor referem-se a mudanças devido a **refatorações que não alterem sua funcionalidade**, como por exemplo, uma alteração no formato como é processada determinada parte da tela, mas que manteve a mesma funcionalidade, ou melhorias de performance devido a um code review.

- `chore` - Commits do tipo chore indicam **atualizações de tarefas** de build, configurações de administrador, pacotes... como por exemplo adicionar um pacote no gitignore. (Não inclui alterações em código)

- `remove` - Commits do tipo remove indicam a exclusão de arquivos, diretórios ou funcionalidades obsoletas ou não utilizadas, reduzindo o tamanho e a complexidade do projeto e mantendo-o mais organizado.

#### Padrões de emojis

<table>
  <thead>
    <tr>
      <th>Tipo do commit</th>
      <th>Emoji</th>
      <th>Palavra-chave</th>
    </tr>
  </thead>
 <tbody>
    <tr>
      <td>Novo recurso</td>
      <td>✨ <code>:sparkles:</code></td>
      <td><code>feat</code></td>
    </tr>
    <tr>
      <td>Adicionando um teste</td>
      <td>✅ <code>:white_check_mark:</code></td>
      <td><code>test</code></td>
    </tr>
    <tr>
      <td>Bugfix</td>
      <td>🐛 <code>:bug:</code></td>
      <td><code>fix</code></td>
    </tr>
    <tr>
      <td>Configuração</td>
      <td>🔧 <code>:wrench:</code></td>
      <td><code>chore</code></td>
    </tr>
    <tr>
      <td>Documentação</td>
      <td>📚 <code>:books:</code></td>
      <td><code>docs</code></td>
    </tr>
    <tr>
      <td>Estilização de interface</td>
      <td>💄 <code>:lipstick:</code></td>
      <td><code>feat</code></td>
    </tr>
    <tr>
        <td>Refatoração</td>
        <td>♻️ <code>:recycle:</code></td>
        <td><code>refactor</code></td>
    </tr>
    <tr>
      <td>Removendo um arquivo</td>
      <td>🗑️ <code>:wastebasket:</code></td>
      <td><code>remove</code></td>
    </tr>
</table>

#### Exemplos

<table>
  <thead>
    <tr>
      <th>Comando Git</th>
      <th>Resultado no GitHub</th>
    </tr>
  </thead>
 <tbody>
    <tr>
      <td>
        <code>git commit -m ":books: docs: Atualização do README"</code>
      </td>
      <td>📚 docs: Atualização do README</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":bug: fix: Loop infinito na linha 50"</code>
      </td>
      <td>🐛 fix: Loop infinito na linha 50</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":sparkles: feat: Página de login"</code>
      </td>
      <td>✨ feat: Página de login</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":lipstick: feat: Estilização CSS do formulário"</code>
      </td>
      <td>💄 feat: Estilização CSS do formulário</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":wastebasket: remove: Removendo arquivos não utilizados do projeto para manter a organização e atualização contínua"</code>
      </td>
      <td>🗑️ remove: Removendo arquivos não utilizados do projeto para manter a organização e atualização contínua</td>
    </tr>
  </tbody>
</table>

> **Nota:** As convenções de commits utilizadas no projeto são baseadas nos padrões discutidos neste [repositório do GitHub](https://github.com/iuricode/padroes-de-commits).

### Versionamento

O versionamento do projeto segue uma estratégia baseada no Git, onde os colaboradores utilizam forks, branches e pull requests para manter o fluxo de desenvolvimento organizado e colaborativo.

#### 1. Fork e Clonagem do Repositório
O primeiro passo é realizar um fork do repositório principal para o GitHub do colaborador. Em seguida, o repositório é clonado localmente para que as modificações possam ser feitas em um ambiente isolado e controlado.

#### 2. Seleção da Tarefa
Cada colaborador seleciona a tarefa no quadro de tarefas, garantindo que apenas as atividades designadas sejam trabalhadas. O quadro de tarefas é mantido atualizado para que o fluxo de trabalho seja claro para todos os envolvidos.

#### 3. Criação de Branch
Após a seleção da tarefa, uma nova branch é criada localmente, seguindo o padrão de nomeação definido anteriormente (categoria, descrição e código do requisito). Isso assegura que o desenvolvimento de cada funcionalidade ou correção de bug ocorra de forma organizada e rastreável.

#### 4. Desenvolvimento e Testes
A implementação é feita na branch específica, garantindo que todas as alterações são realizadas dentro do escopo da tarefa. Durante essa etapa, os testes unitários e de integração são conduzidos para garantir a qualidade e o funcionamento adequado do código.

#### 5. Solicitação de Pull Request
Com a conclusão da tarefa, o colaborador cria uma solicitação de pull request (PR) no repositório remoto principal. O PR passa por uma revisão de código, onde outros membros da equipe podem verificar a consistência, qualidade e integração das alterações. Após a aprovação, o código é integrado ao branch principal e associado a sua perspectiva tarefa no quadro do projeto.

### Issues

Quanto à gestão de issues, o projeto segue a convenção de etiquetas descrita abaixo, acessível na seção [Issues](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-2-e5-proj-empext-t5-pmv-ads-2025-2-e5-proj-revistaacademica/issues) do projeto.

| Etiquetas | Issues |
|----------|----------|
| <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-2-e5-proj-empext-t5-pmv-ads-2025-2-e5-proj-revistaacademica/blob/main/documentos/img/Etiquetas.jpg" alt="Imagem da Sprint 0"> | <video src="https://github.com/user-attachments/assets/0abbea53-f81a-439c-8b58-b5a05d65dc27"/> |

## Gerenciamento de Projeto

### Divisão de Papéis

A equipe utiliza metodologias ágeis, tendo escolhido o Scrum como base para definição do processo de desenvolvimento. A mesma está organizada da seguinte maneira:
- Scrum Master:<br>
  - <b>Riniel Santos</b>
- Product Owner:<br>
  - <b>Leticia Mateus</b>
- Equipe de Desenvolvimento:<br>
  - <b>Alex Bizarria Bezerra</b>
  - <b>Pedro Rosas</b>
  - <b>Felipe Armond</b><br>
  - <b>Ana Beatriz</b><br>

### Processo

Para garantir a gestão eficaz do projeto, foi adotada a metodologia Scrum, um framework ágil que promove a flexibilidade e a entrega incremental de valor. O Scrum foi escolhido por sua capacidade de adaptar-se rapidamente às mudanças e facilitar a organização do trabalho.

O projeto está estruturado em Sprints, cada uma correspondendo a uma Milestone no [GitHub Issues](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-2-e5-proj-empext-t5-pmv-ads-2025-2-e5-proj-revistaacademica/milestones). As Sprints representam períodos curtos de trabalho focado em objetivos específicos e são resumidas a seguir:

**[Sprint 1:](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-2-e5-proj-empext-t5-pmv-ads-2025-2-e5-proj-revistaacademica/milestone/1) Concepção, Proposta de Solução e Início da Elaboração do Projeto da Solução**

**[Sprint 2:](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-2-e5-proj-empext-t5-pmv-ads-2025-2-e5-proj-revistaacademica/milestone/2) Desenvolvimento de uma funcionalidade BackEnd e Frontend**

**[Sprint 3:](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-2-e5-proj-empext-t5-pmv-ads-2025-2-e5-proj-revistaacademica/milestone/3) Desenvolvimento de funcionalidade uma funcionalidade completa: BackEnd e Frontend**

**[Sprint 4:](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-2-e5-proj-empext-t5-pmv-ads-2025-2-e5-proj-revistaacademica/milestone/4) Finalização do desenvolvimento BackEnd e Frontend. Subir projeto para produção e fazer todos os testes.**

**[Sprint 5:](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-2-e5-proj-empext-t5-pmv-ads-2025-2-e5-proj-revistaacademica/milestone/5) Entrega da solução, apresentação e últimos testes.**

<figure> 
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-2-e5-proj-empext-t5-pmv-ads-2025-2-e5-proj-revistaacademica/blob/main/documentos/img/metodologiaPrints.jpg" alt="Milestones">
</figure>

As tarefas foram organizadas em um quadro no [GitHub Projects](https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/2494), dividido em colunas que representam o estado atual de cada tarefa:

- **Backlog:** Tarefas ainda não iniciadas.
- **To do:** Tarefas prontas para começar.
- **In progress:** Tarefas em desenvolvimento.
- **In review:** Tarefas concluídas e em revisão.
- **Done:** Tarefas finalizadas e entregues.

Cada tarefa é atribuída a um membro da equipe conforme suas habilidades e disponibilidade, e está vinculada a uma Milestone específica. Esse método garante uma visão clara do progresso do projeto e facilita a coordenação da equipe.

**Quadro de Tarefas do Projeto:**
<br>
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-2-e5-proj-empext-t5-pmv-ads-2025-2-e5-proj-revistaacademica/blob/main/documentos/img/KabanPrints.jpg" alt="Kanban Board">

**Abaixo você pode ver uma visão geral de algumas Sprints e suas tarefas associadas, Para explorar todos os detalhes e informações completas sobre essas Sprints e Issues, clique [aqui](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-2-e5-proj-empext-t5-pmv-ads-2025-2-e5-proj-revistaacademica/milestones).**
<br>
| Sprint 3 | Sprint 4 |
|----------|----------|
| <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-2-e5-proj-empext-t5-pmv-ads-2025-2-e5-proj-revistaacademica/blob/main/documentos/img/sprint3.jpg" alt="Imagem da Sprint 3"> | <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-2-e5-proj-empext-t5-pmv-ads-2025-2-e5-proj-revistaacademica/blob/main/documentos/img/sprint4.jpg" alt="Imagem da Sprint 4"> |

### Ferramentas

Nesta seção, são listadas as principais ferramentas utilizadas no desenvolvimento do projeto, com uma justificativa para a escolha de cada uma.

#### 1. Editor de Código
- **Ferramenta**:
   - **[VsCode](https://code.visualstudio.com/)**: Para desenvolver o FrontEnd em **React - Next.JS**
   - **[Visual Studio 2022](https://visualstudio.microsoft.com/vs/)**: Para desenvolver o BackEnd em **.Net**

#### 2. Ferramentas de Comunicação
- **Ferramentas**:
  - **[Discord](https://discord.com)**: Escolhido para reuniões em grupo e discussões técnicas, devido à sua simplecidade de acesso, praticidade e personalizações temáticas.
  - **[WhatsApp](https://www.whatsapp.com/?lang=pt_BR)**: Usado para comunicação rápida e informal, facilitando a troca de mensagens instantâneas em qualquer momento.
  - **[Microsoft Teams ou Google Meet](https://www.microsoft.com/pt-br/microsoft-teams/group-chat-software)**: Utilizado para reuniões mais formais, o Teams proporciona um ambiente estruturado para discussões mais detalhadas e planejamento, além de ótimas funcionalidades como a gravação completa da reuinião.

#### 3. Controle de Versão
- **Ferramenta: [Git](https://git-scm.com)**
  - Git foi escolhido como sistema de controle de versão por ser uma ferramenta robusta e amplamente utilizada no desenvolvimento de software. Ele permite rastrear todas as mudanças feitas no código-fonte, facilitar o trabalho colaborativo, e garantir a integridade e a organização do projeto ao longo de seu desenvolvimento.

#### 4. Gerenciamento de Repositório e Organização do projeto
- **Ferramenta: [GitHub](https://github.com)**
  - GitHub foi selecionado como plataforma para o gerenciamento de repositórios devido à sua integração com o Git, permitindo um controle de versão eficiente e colaborativo. Além disso, oferece funcionalidades como a criação de issues, pull requests e páginas wiki, que auxiliam na organização do desenvolvimento, na revisão de código e na documentação do projeto.
  - Utilizamos o GitHub Projects para a organização e gestão do projeto. Ele permite acompanhar o progresso das tarefas, visualizar o status das atividades e gerenciar o backlog. Isso proporciona uma visão clara do andamento das sprints e facilita a colaboração entre os membros da equipe.
