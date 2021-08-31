<div align='center'>
<br /><br /><br />
<img src='https://raw.githubusercontent.com/mhinz/vim-galore/master/static/images/logo-vim-galore.png' alt='vim-galore logo' />
<br /><br /><br /><br />
<div>
    <a href='https://github.com/mhinz/vim-galore'> 
        <img src='https://img.shields.io/badge/Version:-Original-blue.svg' alt='version: original' /> 
    </a> 
    <a href='https://github.com/wsdjeg/vim-galore-zh_cn'> 
        <img src='https://img.shields.io/badge/Translation:-Chinese-grey.svg' alt='translation: chinese' /> 
    </a> 
    <a href='http://postd.cc/?s=vim-galore'>
        <img src='https://img.shields.io/badge/Translation:-Japanese-grey.svg' alt='tranlsation: japanese' /> 
    </a> 
    <a href='http://givi.olnd.ru/vim-galore/vim-galore-ru.html'>
        <img src='https://img.shields.io/badge/Translation:-Russian-grey.svg' alt='translation: russian' />
    </a>
    <div> 
        <br /> 
        <sub>Licenciado sob <a href='https://creativecommons.org/licenses/by-sa/4.0/deed.pt_BR'>CC BY-SA 4.0<a/>.</sub> 
    </div> 
  </div> 
  <br /><br /> 
</div> 

### [Introdução](#introdução-1)

- [O que é o Vim?](#o-que-é-o-vim)
- [A filosofia do Vim](#a-filosofia-do-vim)
- [Primeiros passos](#primeiros-passos)
- [Vimrc mínimo](#vimrc-mínimo)
- [Que tipo de Vim eu estou rodando?](#que-tipo-de-vim-eu-estou-rodando)
- [Planilhas de cola](#planilhas-de-cola)

### [O básico](#o-básico-1)

- [Buffers, janelas, abas](#buffers-janelas-abas)
- [Buffers ativos, carregados, listados e nomeados](#buffers-ativos-carregados-listados-e-nomeado)
- [Lista de argumentos](#lista-de-argumento)
- [Mapeamentos](#mapeamentos)
- [A tecla líder](#a-tecla-líder)
- [Registradores](#registradores)
- [Alcances](#alcances)
- [Marcadores](#marcadores)
- [Completar e concluir](#complementar-e-concluir)
- [Movimentos, operadores, objetos de texto](#Movimentos-operadores-objetos-de-texto)
- [Autocmds](#autocmds)
- [Lista de alterações, lista de pulos](#lista-de-alterações-lista-de-pulos)
- [Árvore do desfazer](#árvore-do-desfazer)
- [Listas de conserto rápido e de localização](#listas-de-conserto-rápido-e-de-localização)
- [Macros](#macros)
- [Esquemas de cores](#esquemas-de-cores)
- [Dobraduras](#dobraduras)
- [Sessões](#sessões)
- [Localidade](#localidade)

### [Utilização](#Utilização-1)

- [Conseguir ajuda desconectado](#conseguir-ajuda-desconectado)
- [Conseguir ajuda desconectado (alternativa)](#conseguir-ajuda-desconectado-alternativa)
- [Conseguindo ajuda conectado](#conseguindo-ajuda-conectado)
- [Autocmds na prática](#autocmds-na-prática)
  - [Eventos da usuária](#eventos-da-usuária)
  - [Nested autocmds](#nested-autocmds)
- [Área de transferência](#área-de-transferência)
  - [Utilização da área de transferência (Windows, macOS))](#utilização-da-área-de-transferência-windows-macos)
  - [Utilização da área de transferência (Linux, BSD, ...)](#utilização-da-área-de-transferência-linux-bsd-)
- [Restaurar posição do cursor ao abrir arquivo](#restaurar-posição-do-cursor-ao-abrir-arquivo)
- [Arquivos temporários](#arquivos-temporários)
- [Editando arquivos remotos](#editando-arquivos-remotos)
- [Gerenciando plugins](#gerenciando-plugins)
- [Inserção de bloco](#inserção-de-bloco)
- [Rodando-programas-externos-e-usando-filtros](#rodando-programas-externos-e-usando-filtros)
- [Cscope](#cscope)
- [MatchIt](#matchit)
- [True colors](#true-colors)


### [Dicas](#dicas-1)

- [Comportamento mais saudável para n e N](#comportamento-mais-saudável-para-n-e-N)
- [Comportamento mais saudável para a história da linha de comando](#comportamento-mais-saudável-para-a-história-da-linha-de-comando)
- [CTRL-L com comportamento mais saudável](#CTRL-L-com-comportamento-mais-saudável)
- [Desativar firulas audiovisuais](#desativar-firulas-audiovisuais)
- [Mover a linha atual rapidamente](#mover-a-linha-atual-rapidamente)
- [Adicionar linhas vazias rapidamente](#adicionar-linhas-vazias-rapidamente)
- [Edite seus macros rapidamente](#edite-seus-macros-rapidamente)
- [Pular rapidamente para o arquivo de cabeçalho ou fonte](#pular-rapidamente-para-o-arquivo-de-cabeçalho-ou-fonte)
- [Mudar tamanho da fonte rapidamente na interface gráfica (GUI)](#mudar-tamanho-da-fonte-rapidamente-na-interface-gráfica-(GUI))
- [Mudar o estilo do cursor de acordo com o modo](#mudar-o-estilo-do-cursor-de-acordo-com-o-modo)
- [Não perca a seleção ao se deslocar lateralmente](#não-perca-a-seleção-ao-se-deslocar-lateralmente)
- [Regarregar um arquivo ao salvar](#regarregar-um-arquivo-ao-salvar)
- [Linha do cursor mais inteligente](#linha-do-cursor-mais-inteligente)
- [Completar palavras chave mais rapidamente](#completar-palavras-chave-mais-rapidamente)
- [Mudanças cosméticas a esquemas de cores](#alterações-cosméticas-a-esquemas-de-cores)

### [Comandos](#comandos-1)

- [:global and :vglobal](#global-and-vglobal) - Execute a command on all matching lines.
- [:normal and :execute](#normal-and-execute) - The scripting dream team.
- [:redir e execute()](#redir-e-execute) - Capturar saída de comando.

### [Depuração](#depuração-1)

- [General tips](#general-tips)
- [Verbosity](#verbosity)
- [Profiling startup time](#profiling-startup-time)
- [Profiling at runtime](#profiling-at-runtime)
- [Debugging Vim scripts](#debugging-vim-scripts)
- [Debugging syntax files](#debugging-syntax-files)

### [Diversos](#diversos-1)

- [Additional resources](#additional-resources)
- [Vim distributions](#vim-distributions)
- [Standard plugins](#standard-plugins)
- [Map CapsLock to Control](#map-capslock-to-control)
- [Easter eggs](#easter-eggs)
- [Why hjkl for navigation?](#why-hjkl-for-navigation)

### [Problemas comuns](#problemas-comuns-1)

- [Editing small files is slow](#editing-small-files-is-slow)
- [Editing huge files is slow](#editing-huge-files-is-slow)
- [Colar entre parenteses (ou por que preciso configurar 'paste' o tempo todo?)](#colar-entre-parenteses-ou-por-que-preciso-configurar-paste-o-tempo-todo)
- [Delays when using escape key in terminal](#delays-when-using-escape-key-in-terminal)
- [Function search undo](#function-search-undo)

### [Peculiaridades técnicas](#peculiaridades-técnicas-1)

- [Newline used for NUL](#newline-used-for-nul)

<br>

# Introdução

## O que é o Vim?

[Vim](http://www.vim.org) é um editor de texto com uma longa linha de ancestrais
que vem desde o [qed](https://en.wikipedia.org/wiki/QED_(text_editor)). [Bram
Moolenaar](https://en.wikipedia.org/wiki/Bram_Moolenaar) lançou o Vim em 1991.

O projeto está hospedado na rede em [vim.org](http://www.vim.org/index.php).

Para adquirir o Vim: use o seu gerenciador de pacotes preferido ou visite a 
[página para baixar](http://www.vim.org/download.php) direto da vim.org.

Discussões e questões de uso são melhores se feitas na lista de correio
eletrônico [vim_use](https://groups.google.com/forum/#!forum/vim_use) (*em inglês*) ou usando o IRC ([Freenode](https://freenode.net)) no canal `#vim` (*em inglês*).

O desenvolvimento acontece no [Github](https://github.com/vim/vim), e discussões
na lista de correio eletrônico [vim_dev](https://groups.google.com/forum/#!forum/vim_dev).

Leia [Why, oh WHY, do those #?@! nutheads use
vi?](http://www.viemu.com/a-why-vi-vim.html) (*em inglês*) para ver equívocos
comuns sobre o Vim explicados.

## A filosofia do Vim

O Vim adere a filosofia de edição modal. Isso quer dizer que ele provem
múltiplos modos e a função/significado das teclas muda de acordo com o modo.
Você navega pelos arquivos no _modo normal_, você insere texto no _modo de
inserção_, você seleciona linhas no _modo visual_, você acessa comandos no _modo
de linha de comando_ e assim por diante. Isso pode até parecer complicado à
primeira vista, mas tem uma grande vantagem: você não precisa entortar os dedos
segurando várias teclas ao mesmo tempo, na maioria das vezes você
simplesmente pressiona uma tecla após a outra. Quanto mais comum for a tarefa
menos teclas são necessárias.

Um conceito relacionado que funciona bem com a edição modal são operadores e
movimentos.
_Operadores_ começam uma certa ação, por exemplo mudando, removendo ou
selecionando texto. Logo em seguida você especifíca a região do texto onde a
ação deve ocorrer usando um _movimento_. Para mudar tudo entre os parênteses,
use `ci(` (leia como "mudar dentro dos parênteses", em inglês: _change inner
parentheses_). Para remover todo um parágrafo de texto de uma vez, use `dap`
(leia como "deletar em volta do parágrafo", em inglês: _delete around
paragraph_).

Se você ver usuárias avançadas do Vim trabalhando, você irá reparar que elas
falam a _língua do Vim_ da mesma forma que pianistas tratam seus instrumentos.
Operações complexas são feitas usando apenas alguns pressionamentos de teclas.
Elas nem sequer pensam mais sobre isso já que a [memória muscular](https://en.wikipedia.org/wiki/Muscle_memory) tomou conta. Isso reduz o [esforço cognitivo
](https://pt.wikipedia.org/wiki/Esfor%C3%A7o_cognitivo) e ajuda a focar na verdadeira tarefa.

## Primeiros passos

O pacote do Vim inclui um tutorial interativo que ensina as coisas mais básicas
que você precisa saber a respeito. Você pode iniciar o tutorial direto do
shell:

```
$ vimtutor
```

Não fique adiando o tutorial só porque parece chato, vá e trabalhe através dos
exercícios. Os editores ou IDEs que você já usou antes eram todos provavelmente
não-modais, então trabalhar mudando de modo vai ser um pouco esquisito a
princípio, mas quanto mais você usar o Vim, mais isso vai virar [memória muscular](https://en.wikipedia.org/wiki/Muscle_memory).

O Vim partiu do [Stevie](https://en.wikipedia.org/wiki/Stevie_(text_editor)), 
um clone do [vi](https://pt.wikipedia.org/wiki/Vi), e suporta dois modos
"compatível" e "não-compatível". Usar o Vim em modo compatível quer dizer usar
os padrões do vi para todas as opções, ao contrário dos padrões do Vim. O modo
compátivel é assumido enquanto você ainda não tiver criado um vimrc do usuário 
ou começado o Vim com `vim -N`! Não use o Vim em modo compatível. Simplesmente
não use.


Próximos passos:

1. Crie o seu próprio [vimrc](#vimrc-minimo).
2. Tenha alguma [planilha de cola](#cheatsheets) pronta para as primeiras
   semanas.
3. Leia através da seção [basico](#basics-1) para ter uma ideia do que é
   possível. 
4. Aprenda de acordo com a necessidade! Você nunca termina de aprender o Vim. Se
   você encontrar problemas, basta procurar por ele pela rede. Seu problema já
   foi resolvido antes. O Vim vem com uma documentação ótima e saber como
   navegar por ela é uma obrigação: [conseguindo ajuda desconectado](#getting-help-offline).
5. Dê uma olhada nos [Recursos adicionais](#additional-resources).

Um último conselho: por favor aprenda a usar o Vim apropriadamente antes de
começar a adicionar tudo quanto é tipo de [plugins](#managing-plugins) extravagantes que apenas implementam funcionalidades que o Vim já suporta nativamente.

## Vimrc mínimo

O vimrc do usuário pode ser colocado em `~/.vimrc` ou só para melhor
separar/organizar as coisas em `~/.vim/vimrc`. A última opção deixa fácil
colocar toda a configuração sob controle de versão e enviar ela para onde
esteja, por exemplo no Github.

Você encontra muitos "vimrcs mínimos" por toda a rede, e talvez a minha versão
não seja tão mínima quanto deveria, mas ela provem um bom conjunto de
configurações sãs que julgo serem úteis para começar.


Então, aqui vai: [vimrc-minimo](static/minimal-vimrc.vim)

Caso você esteja interessado, aqui está o [meu vimrc](https://github.com/mhinz/dotfiles/blob/master/.vim/vimrc).

**DICA**: A maioria dos autores de plugins mantêm vários plugins e também
publicam seus próprios vimrc no Github (com frequência em um repositório chamado
de "vim-config" ou "dotfiles"), então quando quer você entre um plugin que você
gosta, dê uma olhada na página do Github do mantenedor e olhe através dos
repositórios.

## Que tipo de Vim eu estou rodando?

Olhar em `:version` irá te dar toda a informação que você precisa saber sobre
como que a versão binária que está rodando atualmente foi compilada.

A primeira linha te diz quando que o binário foi compilado e qual a versão, por
exemplo 7.4. Uma das linhas seguintes irá dizer `Included patches: 1-1051`, que
é o nível do remendo (patch). Portanto, sua versão exata do Vim é 7.4.1051.

Uma outra linha irá colocar algo como `Tiny version without GUI` ("_versão
minúscula sem interface gráfica_") ou `Huge version with GUI` ("_versão enorme com
interface gráfica_"). A informação que tiramos disso é se o seu Vim inclui
interface gráfica ("GUI"), como por exemplo iniciar o `gvim` do shell ou rodar
`:gui` dentro do Vim em um emulador de terminal. A outra informação importante é
o `Tiny` ("_minúscula_") e `Huge` ("_enorme_"). O Vim distingue entre conjuntos 
de funções/características chamados de `tiny` ("_minúcula_"), `small`
("_pequna_"), `normal`, `big` ("_grande_"), e `huge` ("_enorme_"), todas
ativando diferentes subconjuntos de funções/características.

A maioria do resultado que aparece com o `:version` é consumida pela própria
função de listagem mesma. `+clipboard` significa que a função da área de
transferência foi compilada junto, e `-clipboard` significa que não foi compilada.

São poucas as funções que precisam ser compiladas juntamente para funcionar. Por
exemplo, para que `:prof` funcione, você precisa de um Vim com um conjunto
enorme ("_huge_") de funções/características, porque esse conjunto ativa a
função `+profile`.

Se esse não for o caso e você instalou o Vim por um gerenciador de pacotes,
tenha certeza de instalar um pacote chamado `vim-x`, `vim-x11, `vim-gtk`,
`vim-gnome` ou algo parecido, já que esses pacotes normalmente vêm com o
conjunto enorme ("_huge_") de funções.

Você também pode testar programavelmente a versão ou as funcionalidades:

```vim
" Fazer alguma coisa se rodando pelo menos a versão 7.4.42 do Vim com +profile
ativado. 
if (v:version > 704 || v:version == 704 && has('patch42')) && has('profile')
  " fazer algo
endif
```

Ajuda:

```
:h :version
:h feature-list
:h +feature-list
:h has-patch
```

## Planilhas de cola

- http://people.csail.mit.edu/vgod/vim/vim-cheat-sheet-en.png
- https://cdn.shopify.com/s/files/1/0165/4168/files/preview.png
- http://www.nathael.org/Data/vi-vim-cheat-sheet.svg
- http://michael.peopleofhonoronly.com/vim/vim_cheat_sheet_for_programmers_screen.png
- http://www.rosipov.com/images/posts/vim-movement-commands-cheatsheet.png

Ou abra rapidamente uma planilha com cola de dentro do Vim: [vim-cheat40](https://github.com/lifepillar/vim-cheat40).

# O básico

## Buffers, windows, tabs

O Vim é um editor de texto. Toda vez que um texto é mostrado, o texto é parte de
um **buffer**. Cada arquivo será aberto em seu próprio buffer. Plugins mostram
as coisas também em seus próprios buffers e assim por diante.

Os buffers tem muito atributos, por exemplo se o texto que o buffer contém é
modificável ou se o texto está associado com um outro arquivo e portanto precisa
ser sincronizado ao disco na hora de salvar.

**Windows** ou **Janelas** são janelas de exibição _para_ o buffer. Se você
quiser ver vários arquivos ao mesmo tempo ou até mesmo diferentes partes de um
mesmo arquivo, você usa janelas.

E por favor, não as chame de _splits_ ("_divisões_" ou "_partes_"). Você pode
dividir uma janela em duas partes (dois "_splits_"), mas isso não
necessáriamente as transforma em divisões ("_splits_").

Janelas podem ser divididas vertical ou horizontalmente, e as alturas e larguras
das janelas existentes também podem ser alteradas. E é por isso que você pode
rearranjar as janelas como preferir.

Uma **tab page** ou (ou simplesmente "_aba_") é uma coleção/coletânea de janelas.
Por tanto se você quiser ter múltiplos arranjos de janelas, use as abas.

A propósito, a lista de buffers é global e você pode acessar qualquer buffer a
partir de qualquer aba.

## Buffers ativos, carregados, listados e nomeados

Inicie o Vim como `vim arquivo1`. O conteúdo do arquivo será carregado dentro do
buffer. Agora você tem um **buffer carregado** ("_loaded buffer_"). O conteúdo do buffer só será
sincronizado ao disco rígido (salvo no arquivo original) se você salvar de 
dentro do Vim.

Já que o buffer também é mostrado em uma janela, ele também é um **buffer
ativo** ("_active buffer_"). Agora, se você abrir um outro arquivo com 
`e: arquivo2`, o `arquivo1` vai se tornar um **buffer escondido** 
("_hidden buffer_") e o `arquivo2` será o buffer ativo.

Ambos buffers estão também **listados** ("_listed_"), portanto eles serão
listados com a saída do comando `:ls`. Os buffers de plugins, ou os buffers de
ajuda, normalmente são marcados como não-listados ("_unlisted_"), já que eles
não são arquivos regulares, que você normalmente edita com um editor de texto. Tanto
os buffers listados quanto os não-listados são mostrados pelo comando `:ls!`.

**Buffers não-nomeados** ("_unnamed buffers_"), geralmente usados por plugins,
são buffers que não tem um nome de arquivo associado a si. Por exemplo, `:enew`
irá criar um buffer não-nomeado para ser usado como rascunho. Adicione algum
texto e salve o buffer no disco com `:w /tmp/foo`, e ele irá se tornar um buffer
nomeado.

## Lista de argumentos

A [lista de buffers global](#) é uma coisa do Vim. Antes disso, no Vi, costumava
ter apenas a lista de argumentos, que também está disponível no Vim.

Todo nome de arquivo fornecido ao Vim na linha de comando do Shell, é lembrado
na lista de argumentos. Podem existir múltiplas listas de argumentos: por padrão
todos os argumentos são colocados na lista global de argumentos, mas você pode
usar `:arglocal` para criar uma nova lista de argumentos que é local a janela.

Liste os argumentos atuais com `:args`. Alterne entre os arquivos da lista de
argumentos com `:next` ("_próximo_", `:previous` ("_anterior_"), `:first`
("_primeiro_"), `:last` ("_último_") e companhia. Altere  com `:argadd` (para 
"_ad(d)_icionar"), `:argdelete` (para "_delet_ar") ou `args` uma lista de 
arquivos.

Se você deve usar a lista de buffers ou a lista de argumentos, é só uma questão
de preferência. Minha impressão é a maioria das pessoas usa exclusivamente a
lista de buffers.

Mesmo assim, existem uma forte razão para usar a lista de argumentos:
processamento em batch por meio do `:argdo`! Um exemplo simples de
reestruturamento:

```vim
:args **/*.[ch]
:argdo %s/foo/bar/ge | update
```
Isso irá substituir todas as ocorrências de "foo" por "bar" em todas as fontes e
cabeçalhos de todos os arquivos em C do diretório atual e abaixo.

Ajuda: `:h argument-list`

## Mapeamentos

Você pode definir os seus próprios mapas de teclado com a família de comandos `:map`. Cada comando dessa família define o mapeamentos para um conjunto 
específico de modos. Tecnicamente o Vim vem com a enorme quantidade de 12 modos,
e 6 deles podem ser mapeados. Adicionalmente, existem alguns comandos que agem 
em múltiplos modos ao tempo.

| Recursivo | Não-recursivo | Desmapear | Modos                             |
|-----------|---------------|-----------|---------------------------------- |
| `:map`    | `:noremap`    | `:unmap`  | normal, visual, operador-pendendo |
| `:nmap`   | `:nnoremap`   | `:nunmap` | normal                            |
| `:xmap`   | `:xnoremap`   | `:xunmap` | visual                            |
| `:cmap`   | `:cnoremap`   | `:cunmap` | linha de comando                  |
| `:omap`   | `:onoremap`   | `:ounmap` | operador-pendendo                 |
| `:imap`   | `:inoremap`   | `:iunmap` | inserção                          |

Por exemplo, isso aqui irá definir um mapeamento apenas para o modo normal:

```vim
:nmap <space> :echo "foo"<cr>
```

Desmapei novamente usando `:nunmap <space>`.

Para conferir alguns outros modos mais incomuns (ou uma combinação deles), veja
`h map-modes`.

Até agora, tudo sob controle. Mas tem um detalhe que pode ser bem confuso para
iniciantes: `:nmap` é _recursivo_! Ou seja, o lado direito (que é remapeado) 
vai levar outros mapeamentos em conta também.

Então, você definiu um mapeamento que simplesmente ecoa "Foo" ao apertar a tecla
"b":

```vim
:nmap b :echo "Foo"<cr>
```

Mas e se você quiser mapear o comportamento padrão de `b` (voltar uma palavra)
para uma outra tecla?

```vim
:nmap a b
```

Se você apertar <kbd>a</kbd>, esperamos que o cursor volte à uma palavra atrás,
mas ao contrário, "Foo" vai ser impresso de novo na linha de comando! Isso
acontece devido ao fato que a tecla `b`, que fica no lado direito do mapeamento,já tinha sido remapeada para fazer ou ação, que no caso foi a ação de ecoar 
"foo" com `:echo "Foo"<cr>`.

Para resolver esse problema de forma adequada, é preciso usar um mapeamento
_não-recursivo_:

```vim
:nnoremap a b
```
Regra de ouro: Sempre use mapeamentos não-recursivos, a não ser que realmente se
deseje um mapeamento recursivo.

Olhe os seus mapeamentos sem fornecer o lado direito do comando. Por exemplo,
`:nmap` mostra todos os mapeamentos para o modo normal, e `:nmap <leader>`
mostra todos os mapeamentos (para o modo normal) que começam com a tecla-líder.

Se você quiser desativar um mapeamento padrão, o mapei para o caractére especial
`<nop>`, como por exemplo `:noremap <left> <nop>`.

Ajuda:

    :h key-notation
    :h mapping
    :h 05.3

## A tecla-líder

A tecla-líder é uma base de suporte usada com mapeamentos personalizados e por
padrão é configurada para a tecla `\`.

```vim
nnoremap <leader>h :helpgrep<space>
```

Esse mapa é acionado por `\h`. Se você quiser usar a tecla de espaço ao invés da
barra invertida (que é o padrão)

```vim
let mapleader = ' '
nnoremap <leader>h :helpgrep<space>
```

Além disse, existe a `<localleader>` que é a contraparte local de `<leader>` e é
para ser supostamente usada para mapas que são locais ao buffer, como por exemplo plugins para tipos específicos de arquivos. Ela também é por padrão a tecla `\`.

**Nota**: Configure as teclas-líder antes de fazer algum mapeamento! Todos os
mapeamentos que já foram efetuados não mudarão só porquê a tecla-líder foi
alterada. `:nmap <leader>` irá mostrar todos os mapeamentos com a tecla líder
para o modo normal que já estão acionados, então use-o para rechecar os seus
mapeamentos.

Veja `:h mapleader` e `:h maplocalleader` para saber mais.

## Registradores

Registradores (inglês: "_registers_") são lugares que o Vim usa para registrar texto.
Copiar texto para um registrador é chamado de **yanking** e extrair texto de um
registrador é chamado de **pasting** ("_colar_"). 

O Vim provem os seguintes registradores:

| Tipo                | Charactére             | preenchido por? | Apenas de leitura? | Contém texto de? |
|---------------------|------------------------|------------|-----------|---------------------|
| Não nomeado             | `"`                    | vim        | [ ]       | Último puxão ou remoção. (`d`, `c`, `s`, `x`, `y`) |
| Numerado            | `0` to `9`             | vim        | [ ]       | Registrador `0`: último puxão. Registrador `1`: Última remoção. Registrador `2`: Seunda remoção. E assim por diante. Pense nos registradores `1`-`9` como uma [file](https://en.wikipedia.org/wiki/Queue_(abstract_data_type)) com 9 elementos apenas de leitura. |
| Pequena remoção        | `-`                    | vim        | [ ]       | Última remoção que for menor que uma linha.|
| Nomeado               | `a` até `z`, `A` até `Z` | usuário       | [ ]       | Se você empurrar para o registrador `a`, você substitui o texto dele. Se você empurrar para o registrador `A`, você acrescenta ao texto no registrador `a`. |
| apenas leitura           | `:`, `.`, `%`          | vim        | [x]       | `:`: Último comando `.`: Último texto inserido, `%`: Nome do arquivo atual. |
| Buffer alternativo    | `#`                    | vim        | [ ]       | Na maioria das vezes é o último buffer visitado na janela atual. Veja `:h alternate-file` |
| Expressão          | `=`                    | usuário       | [ ]       | Avaliação da expressão em VimL que foi puxada ("yanked"). Por exemplo, faça isso em modo de inserção: `<c-r>=5+5<cr>` e "10" será inserido no buffer. |
| Seleção           | `+`, `*`               | vim        | [ ]       | `*` e `+` são os registradores da área de transferência. [clipboard](#clipboard). |
| Soltar                | `~`                    | vim        | [x]       | Do último arrastas e soltar. |
| Buraco negro          | `_`                    | vim        | [ ]       | Se você não quiser que nenhum outro registrador seja implicitamente afetado. Por exemplo, `"_dd` deleta a linha tual sem afetar os registradores `"`, `1`, `+`, `*`. |
| Último padrão de busca | `/`                    | vim        | [ ]       | Último padrão usado com `/`, `?`, `:global`, etc. |

Cada registrador que não é apenas de leitura pod ser determinado com:

```vim
:let @/ = 'registro'
```

Em seguida <kbd>n</kbd> iria pular para a próxima ocorrência de "registro".

Há várias exceções onde os registradores são implicitamente preenchidos, então
só para ter certeza, confira `:h registers`.

Copie com `y` e cole com `p`/`P`, mas lembre-se que o Vim distingue entre
seleções visuais de caracteres e de linha. Veja `:h linewise`.


**Exemplo: com atenção lineal**

`yy` (ou apenas `Y`) copia a linha atual, mova o cursor para algum outro lugar,
use `p` para colar abaixo da linha em que esteja ou `P` para colar na linha
acima.

**Exemplo: com atenção focada em caracteres**

Copie a primeira palavra com `0yw`, mova para algum outro lugar, cole na linha
em que esteja e após o cursor com `p` e antes do cursor com `P`.

**Exemplo: nomeação explícita de registrador**

`"aY` copia a linha atual para o registrador `a`. Vá para alguma outra linha.
Use `"AY` para acrescentar a linha atual ao registrador `a`.

Sugiro que você dê uma brincada com esses registradores e constantemente olhe em
`:reg`, para que você veja em primeira mão o quê está acontecendo com os
registradores.

**Caso engraçado**: No Emacs, `yaking` quer dizer colar [ou _reinserir texto que anteriormente morto_("_reinserting previously killed text_")] e não copiar.

## Alcances

Os alcances são bem fáceis de entender, mas muitos (Vimmers) não sabem sobre o
potencial que eles possuem.

- Muitos comandos aceitam alcances.
- Um endereço denota uma certa linha.
- Um alcance pode ser tanto um único endereço quanto um par de endereços
  separados tanto por `,` quanto por `;`.
- Os alcances informam os comandos em quais linhas eles devem agir.
- Muitos comandos agem por padrão apenas na linha atual.
- Somente `:write` e `:global` agem em todas as linhas por padrão.

A utilização dos alcances é bem intuitiva, portanto aqui seguem alguns exemplos
(usando `:d` como uma abreviação de `:delete`):

| Comando | Linhas em que age |
|---------|----------------|
| `:d` | Linha atual. |
| `:.d` | Linha atual |
| `:1d` | Primeira linha. |
| `:$d` | Última linha. |
| `:1,$d` | Todas as linhas. |
| `:%d` | Todas as linhas (alívio sintático para `1,$`). |
| `:.,5d` | Da linha atual até a linha 5. |
| `:,5d` | Também a linha atual e até a linha 5. |
| `:,+3d` | Linha atual e as próximas 3 linhas. |
| `:1,+3d` | Da primeira linha até a linha atual + 3. |
| `:,-3d` | Linha atual e as últimas 3 linhas. (O Vim irá lhe perguntar, já que esse é um alcance reverso.) |
| `:3,'xdelete` | Lines 3 to the line marked by [mark](#marks) x. |
| `:/^foo/,$delete` | Da próxima linha que começa com "foo" até o final. |
| `:/^foo/+1,$delete` | Da linha após a linha que começa com "foo" até o final. |

Repare que ao invés de `,`, o `;` também pode ser usado como separador. A
diferença é como `de,para` o _para_ é relativo a linha atual, mas ao usar
`de;para`, o _para_ é relativo ao endereço do _de_! Assumindo que você está na
linha 5, `:1,+1d` deletaria as linhas de 1 a 6, ao mesmo tempo que `:1;+1d`
deletaria apenas as linhas 1 e 2.

O endereço `/` pode ser precedido com outro endereço. Isso permite que você
_empilhe_ padrões, por exemplo:

```vim
:/foo//bar//quux/d
```
Isso iria deletar a primeira linha contendo "quux" após a primeira linha
contendo "bar" depois da primeira linha contendo "foo" depois da linha atual.

As vezes o Vim automaticamente antecipa com um alcance na linha de comando. Por
exemplo, comece uma seleção visual de linha com o `V`, selecione algumas linhas
e digite `:`. A linha linha de comando será povoada com o alcance `'<,'>`, que
significa que o próximo comando irá usar as linhas previamente selecionadas como
um alcance. (Essa também é a razão pela qual as vezes você vê mapeamentos como
`:vnoremap foo :<c-u>command`. Neste caso, `<c-u>` é usado para remover o
alcance, porque o Vim irá jogar um erro quando der um alcance a um comando que
não suporta o tal alcance.).

Outro exemplo é ao usar `!!` em modo normal. Isso irá povoar a linha de comando
com `:.!`. Se seguido por um programa externo, a saída do programa iria
substituir a linha atual. Portanto, você substituiria o parágrafo atual com a
saída do comando ls usando: `:?^$?+1,/^$/-1!ls`. Chique!

Ajuda:

```
:h cmdline-ranges
:h 10.3
```

## Marcadores (marks)

Você usa marcadores para lembrar uma posição em um arquivo, ou seja; número da linha e coluna.

| Marcadores | Determinado pelo... | Uso |
|-------|----------|-------|
| `a` - `z` | Usuário | Local ao arquivo, portanto é apenas válido dentro de um arquivo. Jumping to a lowercase mark, means jumping within the current file. |
| `A` - `Z` | Usuário | Global, portanto válido entre arquivos. Também chamado de _marcador de arquivo_ ("_file marks_"). Pular para um marcador de arquivo pode significar mudar para um outro buffer. |
| `0` - `9` | viminfo | `0` É a posição onde o arquivo viminfo foi sobreescrito (salvo) pela última vez. Na prática, isso quer dizer quando o último processo do Vim foi encerrado. `1` é a posição de quando o penúltimo processo do Vim foi encerrado, e assim por diante. |

Coloque `'`/`g'` ou `` ` ``/`` g` `` na frente de um marcador para formar um
movimento ("_motion_").

Use `mm` para lembrar a posição atual com o marcador "m". Movimente-se pelo
arquivo e pule de volta via `'m` (para o primeiro caractere não-vazio), ou
`` `m `` (para a coluna exata). Marcadores minúsculos serão lembrados após 
sair do Vim apenas se você falar para o seu arquivo viminfo fazer isso, veja 
`:h viminfo-'`. 

Use `mM` para lembrar a posição atual com o marcador de arquivo "M". Mude para
outro buffer e volte de novo com `'M' ou `` `M ``.

Outros movimentos incluem:

| Movimento           | Pular para... |
|---------------------|-----------|
| `'[`, `` `[ ``      | Primeira linha ou caractere do último texto mudado ("`c`") ou puxado/copiado ("`y`"). |
| `']`, `` `] ``      | Última linha ou caractere do último texto mudado ("`c`") ou puxado/copiado ("`y`"). |
| `'<`, `` `< ``      | Começo da linha ou caractere da última seleção visual. |
| `'>`, `` `> ``      | Fim da linha ou caractere da última seleção visual. |
| `''`, ``` `` ```    | Posição antes do último pulo ("_jump_"). |
| `'"`, `` `" ``      | Posição de quando aconteceu a última saída do arquivo (buffer) atual. |
| `'^`, `` `^ ``      | Posição de onde a última inserção parou. |
| `'.`, `` `. ``      | Posição de onde a última mudança foi feita. |
| `'(`, `` `( ``      | Começo da frase atual. |
| `')`, `` `) ``      | Fim da frase atual. |
| `'{`, `` `{ ``      | Começo do parágrafo atual.  |
| `'}`, `` `} ``      | Fim do parágrafo atual. |

Marcadores também podem ser usados em um [alcançador](#Alcançadores). Você
provavelmente já viu isso antes e se perguntou o quê isso significa: Selecione
algum texto em modo visual e aperte `:`, a linha de comando será "antecipada"
com `:'<,'>`, o que significa que o comando que vier em seguida terá o alcance
encoberto pela seleção visual.

Use `:marks` para listar todos os marcadores. Leia tudo que puder em `:h
mark-motions`.

## Completar e concluir

O Vim possui vários tipos de complemento em modo de inserção. Em caso de
múltiplas possibilidades, um menu flutuante irá permitir que você navegue até a
o complemento de sua escolha.

Tipos típicos de complementos são tags, funções de módulos importados ou
bibliotecas, nome de arquivos, dicionários ou simplesmente palavras do buffer
atual.

O Vim também provém um mapeamento de teclado para cada tipo de complementação e
todos eles começam com `<c-x>` (lembre-se de usá-los em modo de inserção).

| Mapeamento | Tipo | Ajuda         |
|---------|------|--------------|
| `<c-x><c-l>` | completa linhas inteiras | `:h i^x^l` |
| `<c-x><c-n>` | palavras chave do arquivo atual | `:h i^x^n` |
| `<c-x><c-k>` | palavras chave da opção de `dicionário` | `:h i^x^k` |
| `<c-x><c-t>` | palavras chave da opção de `'thesaurus'` (sinônimos) | `:h i^x^t` |
| `<c-x><c-i>` | palavras chave do arquivo atual e arquivos incluídos | `:h i^x^i` |
| `<c-x><c-]>` | completa tags | `:h i^x^]` |
| `<c-x><c-f>` | completa nome de arquivos | `:h i^x^f` |
| `<c-x><c-d>` | definições ou macros | `:h i^x^d` |
| `<c-x><c-v>` | comandos do Vim | `:h i^x^v` |
| `<c-x><c-u>` | definido pela usuária (como especificado em `'completefunc'`) | `:h i^x^u` |
| `<c-x><c-o>` | omni complementação (como especificado em `'omnifunc'`) | `:h i^x^o` |
| `<c-x>s`     | sugestões ortográficas | `:h i^Xs` |

As pessoas podem se confundir entre Complementação definida pela usuária e a
omni complementação, mas tecnicamente elas fazem a mesma coisa. Elas pegam uma
função que inspeciona a posição atual (do cursor) e retornam uma lista de sugestões.
Complementações definidas pela usuária são determinadas pela própria pessoa e
para uso pessoal. (Surpresa!) Pode ser qualqer coisa. A Omni Complementação tem
o propósito de ser usada para tipos específicos de arquivos, como complementando
estruturas de membros ou métodos de classes, e é normalmente determinada por
plugins de tipos de arquivo ("_filetype plugins_").

O Vim também permite a complementação de múltiplos tipos de uma vez só, bastando
ativar a opção `'complete'`. Por padrão, essa opção já inclui um bocado de
coisas por si mesma, então tenha certeza de dar uma polida para que fique ao seu
gosto. Você pode ativar essa opção de complementação usando tanto `<c-n>`
(próximo) quanto `<c-p>` (anterior), que por coincidência também são os atalhos
de teclado usados para navegar pelas opções do menu flutuante. Veja `:h i^n` e
`:h 'complete'` para saber mais sobre isso.

Aproveite e confira também `:h 'completeopt'` para configurar o comportamento do
menu flutuante. O padrão até que é bem são, mas eu prefiro adicionar também "noselect" ("_nenhuma seleção_").

Ajuda:

```
:h ins-completion
:h popupmenu-keys
:h new-omni-completion
```

## Movimentos, operadores, objetos de texto

**Movimentos** movem o cursor. Todos você já sabem sobre `h`/`j`/`k`/`l`. Ou
`w` e `b`. Até `/` é um movimento. Eles também aceitam uma conta. `2?the<cr>`
pula para a anti-penúltima ocorrência de "the".

Veja `:h navigation` e tudo que estiver abaixo para todos os movimentos
disponíveis.

**Operadores** agem em uma região do texto, por exemplo `d`, `~`, `gU`, `>` para
mencionar apenas alguns. Eles são usados em dois contextos, ou em modo normal ou
em modo visual. Em modo normal, os operadores vem primeiro seguidos por um
movimento, por exemplo `>j`. Em modo visual, operadores simplesmente agem na
área selecionada, por exemplo `Vjd`.

Assim como os movimentos, os operadores também aceitam uma conta, como por
exemplo `2gUw` que transforma o resto da palavra atual e da próxima palavra em
maiúsculas. Já que movimentos e operadores aceitam contas, `2gU2w` funciona bem
e executa `gU2w` duas vezes.

Veja `:h operator` para conferir todos os operadores disponíveis. Use `:set
tildeop` para fazer com que o til (`~`) funcione como um operador. 

**Objetos de texto** agem na área que os cerca, em oposição aos movimentos que
agem em uma direção específica.  Na verdade eles funcionam em objetos, como por
exemplo uma palavra toda, uma frase inteira, tudo entre parênteses, e assim por
diante.

Objetos de texto não podem ser usados para mover o cursor em modo normal, porque
nem mesmo os cursores mais habilidores dão conta de pular em duas direções ao
mesmo tempo. Entretanto, isso funciona em modo visual, pois que um lado do texto
já está selecionado e o cursor pode simplesmente pular para o outro lado.

Objetos de texto começam ou com um `i` ou `a` seguidos por um caractere que
denota o objeto (`i` pode ser lembrado como "_i_nterno", e `a` como o que
está "_a_o redor"). Com o `i` a ação é executada apenas no objeto em si, com 
o `a` a ação é no objeto e mais os espaçoes (em branco) ao redor do objeto. 
Por exemplo, `diw` deleta a palavra atual e `ci(` altera tudo que estiver entre
os parênteses.

Objetos de texto também aceitam uma conta. Imagine `((( )))` e o cursor no meio
ou nos parênteses mais internos, então `d2a(` irá remover os dois _pares de
parênteses_ mais internos e tudo o que estiver no meio e entre eles.

Veja `:h text-objects` para conferir todos os objetos de texto disponíveis.

## Autocmds

Em muitas ocasiões o Vim emite eventos. Você engancha nesses eventos usando
Autocmds ("_auto comandos_").

Você não usaria o Vim se não houvessem os Autocmds. Eles são usados o tempo
todo, mesmo que você não perceba. Não acredita em mim? Confira `:au`, mas não
deixe que o resultado te assuste. Esses são todos os Autocmds que estão fazendo
efeito agora mesmo.

Veja `:h {event}` para uma ter uma rápida visão geral de todos os eventos
disponíveis e `:h autocmd-events-abc` para mais detalhes.

Um exemplo típico seria determinar configurações de acordo um típo específico de
arquivo:

```vim
autocmd FileType ruby setlocal shiftwidth=2 softtabstop=2 comments-=:#
```
Mas como que um buffer pode saber que ele contém um código em Ruby? Porque um
outro Autocmd detectou isso e configurou o tipo de arquivo de acordo, o que por
sua vez engatilhou o evento `FileType` ("_tipo de arquivo_").

Uma das primeiras coisas que todos adicionam aos seus vimrc é `filetype on`.
Isso simplesmente quer dizer que o `filetype.vim` é lido na inicialização, o que
determina Autocmds para quase todos os tipos de arquivo que existem sob o sol.

Se você tiver coragem, de uma olhada nisto aqui: `:e $VIMRUNTIME/filetype.vim`.
Procure por "Ruby" e você descobrirá que o Vim simplesmente usa a extensão de
arquivo `.rb` para detectar arquivos de Ruby:

**NOTA**: Autocmds do mesmo evento são executados na ordem em que foram criados.
`:au` os mostra na ordem correta.

```vim
au BufNewFile,BufRead *.rb,*.rbw  setf ruby
```

Os eventos `BufNewFile` e `BufRead` nesse caso são codificados manualmente nas
fontes (sources) em C do Vim e são emitidos a cada vez que você abre um arquivo
por meio de `:e` e comandos similares. Em seguida todas as centenas de tipos de
arquivo do `filetype.vim` são testados.

Resumindo, o Vim faz uso pesado de eventos e Autocmds mas também expõe uma
interface limpa para enganchar nesse sistema dirigido por eventos para a
customização.

Ajuda: `:h autocommand`

## Lista de alterações, lista de pulos
### Changelist, jumplist

As posições das últimas 100 alterações são mantidas na **lista de alterações**.
Várias alterações pequenas feitas na mesma linha serão fundidas, mas assim a 
posição será aquela da última mudança (caso você tenha adicionado alguma coisa
no meio da linha).

Cada vez que você pular, a posição de _antes_ do pulo será lembrada na **lista
de pulos**. A lista de pulos tem até 100 registros. Cada janela possui sua
própria lista de pulos. Quando você divide ("_split_") uma janela, a lista de
pulos será copiada.

Um pulo é um dos seguintes comandos: `'`, `` ` ``, `G`, `/`, `?`, `n`, `N`,
`%`, `(`, `)`, `[[`, `]]`, `{`, `}`, `:s`, `:tag`, `L`, `M`, `H` e comandos que
começam a edição de um novo arquivo.

| Lista       | Listar todos os registros | Ir para uma posição anterior | Ir para uma posição posterior |
|------------|------------------|----------------------|----------------------|
| lista de pulos   | `:jumps`         | `[conta]<c-o>`       | `[conta]<c-i>`       |
| lista de alterações | `:changes`       | `[conta]g;`          | `[conta]g,`          |
Quando você listar todos os registros, um marcador `>` será usado para mostrar
qual a posição atual. Normalmente isso estará abaixo da posição 1, a última
posição.

Se você quiser que ambas as listas continuem a existir mesmo após reiniciar o
Vim, você precisará utilizar o arquivo viminfo e `:h viminfo-`.

**NOTA**: A posição antes do último pulo também é mantida como um
[marcador](#marcadores) e pode ser pulada com ``` `` ``` ou `''`.

Ajuda:

```
:h changelist
:h jumplist
```

## Árvore do desfazer

As últimas mudanças do estado do texto são lembradas. Você pode usar o comando
_undo_ ("desfazer") para reverter as mudanças, e o comando _redo_ ("refazer")
para reverter mudanças.

O ponto importante para entender disso; é que a estrutura de dados que mantém as
alterações recentes não é uma
[fila](https://es.wikipedia.org/wiki/Cola_(inform%C3%A1tica)), mas sim uma
[árvore](https://pt.wikipedia.org/wiki/%C3%81rvore_(estrutura_de_dados))! Suas 
alterações são nodos/nós na árvore e cada um deles (com exceção do mais 
superior) possui um nodo antecestral/antecessor. Cada nodo mantém informação
sobre o texto e o tempo da alteração. Um galho (ou ramo) é uma série de nodos
que começam a partir de um nodo e vão até o nodo do topo. Um novo é galho é
criado quando você desfaz uma mudança e insere algo novo.

```
ifoo<esc>
obar<esc>
obaz<esc>
u
oquux<esc>
```

Agora você tem três linhas e a árvore dos desfazares fica mais ou menos assim:

```
     foo(1)
       /
    bar(2)
   /      \
baz(3)   quux(4)
```

A árvore do desfazer possui 4 mudanças. Os números representam o _tempo_ em que
os nodos foram criados.

Agora há duas formas de atravessar essa árvore, podemos dizer que uma é
_conforme o galho_ e a outra é _conforme o tempo_.

Desfazer ("_undo_" ou `u`) e refazer ("_redo_" ou `<c-r>`) funcionam conforme-o-galho. Eles vão para cime e para baixo no galho atual. O `u` irá reverter o
texto ao nodo em que "bar" se encontra. Um outro `u` a mais irá reverter o texto
ainda mais, ao ponto (nodo) em que "foo" se encontra. Agora, ao apertar `<c-r>`
irá voltar ao estado do nodo "bar", e apertar `<c-r>` mais uma vez irá levar ao
nodo "quux". (Não existe mais nenhuma forma de alcançar o nodo "baz" apenas
conforme-o-galho).

Por outro lado, `g-` e `g+` funcionam conforme-o-tempo. Portanto, `g-` não irá
reverter ao estado do nodo "bar", como o `u` faz, mas ao estado cronologicamente
anterior, que no caso é o nodo "baz". Um outro `g-` a mais irá reverter ao
estado em que o nodo "bar" se encontra, e assim por diante. Portanto, `g-` e
`g+` vão e voltam no tempo, respectivamente.

| Comando / Mapeamento | Ação |
|-------------------|--------|
| `[conta]u`, `:undo [conta]` | Desfazer [conta] mudanças. |
| `[conta]<c-r>`, `:redo` | Refazer [conta] mudanças. |
| `U` | Desfazer todas as alterações na linha desde a última mudança (a mais
recente). |
| `[conta]g-`, `:earlier [conta]?` | Ir para o estado anterior do texto tantas vezes quanto a [conta].  A "?" pode ser também "s", "m", "h", "d", ou "f". Por
exemplo, `:earlier 2d` volta o texto ao estado em que estava a 2 dias atrás. `:earlier 1f` irá ao estado em que o texto se encontrava quano foi salvo pela última vez. |
| `[conta]g+`, `:later [conta]?` | Assim como o comando acima, só que na outra
direção. (OBS: em inglês "earlier" quer dizer "_mais cedo_" e "later" quer dizer
"_mais tarde_").|

A árvore com os desfazares é mantida na memória e será perdida quando o Vim for
encerrado. Veja [Manipulando os arquivos de backup, swap, undo, e viminfo](#manipulando-os-arquivos-de-backup-swap-undo-e-viminfo) para saber como ativar permanentemente o desfazer.

Se você está confuso com a árvore do desfazer, o plugin 
[undotree](https://github.com/mbbill/undotree) faz um ótimo trabalho ajudando a
visualizar a árvore.

Ajuda:

```
:h undo.txt
:h usr_32
```

## Listas de conserto rápido e de localização
### Quickfix and location lists

Toda vez que uma ação precisar retornar uma lista de localizações, a _lista de
conserto rápido_ ou a _lista de localização_ podem ser usadas. Neste caso, uma
localização é um arquivo, o número de uma linha e opcionalmente uma coluna.

Exemplos disso seriam erros de compilador montados em uma lista de conserto
rápido, ou os resultados correspontes de ferrementa grep externa montados em uma
lista de localização.

A grande vantagem de usar essas listas ao invés de um buffer vazio é que você
obtem uma boa interface para navegar pelos resultados.

Todo o tempo, existe apenas uma lista de conserto rápido, mas cada janela pode
ter sua própria lista de localização. As duas listas _podem até_ parecerem
iguais, mas usam comandos um pouco diferentes para a navegação.

Comandos mais comuns:

| Ação         | Conserto rápido (Quickfix)     | Localização (Location)     |
|----------------|--------------|--------------|
| abrir janela    | `:copen`     | `:lopen`     |
| fechar janela   | `:cclose`    | `:lclose`    |
| próximo resultado     | `:cnext`     | `:lnext`     |
| resultado anterior | `:cprevious` | `:lprevious` |
| primeiro resultado    | `:cfirst`    | `:lfirst`    |
| resultado anterior     | `:clast`     | `:llast`     |

Veja `:h :cc` e tudo que estiver abaixo para saber todos os comandos.

**Exemplo**:

Vamos usar nosso velho amigo `grep` para pesquisar pelos arquivos do diretório
atual por uma certa informação e colocar os resultados na lista de conserto
rápido.

```vim
:let &grepprg = 'grep -Rn $* .'
:grep! foo
<grep output - hit enter>
:copen
```

Assumindo que algum dos arquivos continha alguma ocorrência de "foo", o mesmo
será mostrado na lista de conserto rápido. 

## Macros

O Vim permite que você _grave_ os caracteres digitados em um
[registrador](#registradores). É um ótimo jeito de automatizar certas tarefas
no meio do trabalho. (Para tarefas mais elaboradas, [Vim
scripting](#Vim-scripting) deve ser usado ao invés de Macros).

- Comece a gravar digitando `q` seguido por um registrador, por exemplo o `q`. (A linha de comando irá assinalar com a mensagem "recording @q".)
- Encerre a gravação digitando `q` novamente.
- Execute o macro digitando `[conta]@q`.
- Repita o último macro com `[count]@@`.

**Exemplo 1:**

Insira uma linha e repita 10 vezes:

```
qq
iabc<cr><esc>
q
10@q
```

(O mesmo poderia ser feito sem macros: `oabc<esc>10.`)

**Exemplo 2:**

Para adicionar o número da linha na frente de todas as linhas, comece na
primeira linha adicione "1. " a ela manualmente. Incremente o número sob o
cursor usando `<c-a>`, mostrado como `^A`.

```
qq
0yf jP0^A
q
1000@q
```

Aqui nós simplesmente esperamos que o arquivo não contenha mais que 1000 linhas
quando usamos `1000@q`, mas também podemos usar um _macro recursivo_, que
executa até que o macro não possa mais ser aplicado a uma linha:

```
qq
0yf jP0^A@q
q
@q
```

(O mesmo poderia ser atingido sem macros: `:%s/^/\=line('.') . '. '`)

Repare que apesar de eu mostrar como conseguir o mesmo resultado sem o uso de
macros, isso só funciona para esses tipos de exemplos simples. Para
automatizações mais complexas, macros são literalmente como uma bomba!

Veja também: [Edite seus macros rapidamente](#edite-seus-macros-rapidamente)

Ajuda:

```
:h recording
:h 'lazyredraw'
```

## Esquemas de cores

Esquemas de cores são o jeito que você pode estilizar o seu Vim. O Vim consiste de vários componentes e cada um deles pode ser customizado com diferentes cores
para o plano de frente, plano de fundo e alguns outros atributos como texto em
negrito etc. Eles podem podem ser determinados desse jeito:

```vim
:highlight Normal ctermbg=1 guibg=red
```

Isso iria colorir o plano de fundo ("_bg_") de vermelho. Veja `:h highlight`
para mais informações.

Então, esquemas de cores são basicamente coleções de comandos `:highlight`.

Na verdade, a maioria dos esquemas de cores são 2 esquemas de cores! O exemplo
acima determina as cores com `cterbg` e `guibg`. A primeira opção (`cterm`)
apenas será usada se o Vim for inicializado em um emulador de terminal, por
exemplo o xterm. A última (`gui*`) será usada em ambientes gráficos como o Gvim
ou o MacVim.

Se alguma vez ocorrer de você usar um esquema de cores no Vim em um terminal e
as cores não se parecerem com as da imagem (screenshot/printscreen),
provavelmente o esquema de cores define apenas as cores a GUI (Interface Gráfica
da Usuária). O oposto também pode acontecer, se você usar um Vim gráfico (como o
Gvim ou o MacVim) e as cores parecerem meio desajustadas, talvez o esquema de
cores esteja definindo apenas as cores para o terminal. 

O último caso pode ser "resolvido" ativando as cores verdadeiras ("_true
colors_") no Neovim ou no Vim a partir da versão 7.4.1830. Isso faz com que o
Vim use as definições de cores para o ambiente gráfico ("_GUI_"), mas isso
também requer que o emulador de terminal em si e todo programa que estiver pelo
meio do caminho (como o tmux) serem capazes de lidar com cores verdadeiras.  ([Essa gist](https://gist.github.com/XVilka/8346728) fornece uma boa visão geral sobre o assunto.)

Ajuda:

- `:h 'termguicolors'`
- [Lista de esquemas de cores](PLUGINS.md#lista-de-esquemas-de-cores-1)
- [Alterações cosméticas a esquemas de cores](#alterações-cosméticas-a-esquemas-de-cores)

## Dobraduras
### Folding

Todo texto (ou código fonte) possui uma certa estrutura. Se você tem uma
estrutura, isso significa que você tem regiões de texto separadas logicamente.
As dobraduras permitem que você "dobre" certa região em uma única linha e
mostrando uma descrição curta. Existem vários comandos que agem nessas regiões
chamadas de _dobras_ ("_folds_"). As dobras também podem ser aninhadas.

O Vim faz distinção entre vários tipos de métodos de dobraduras: 

| 'método de dobra' | Uso |
|--------------|-------|
| diff         | Usado em janelas de diff para dobrar texto não alterado. |
| expr         | Usa `'foldexpr'` para basicamente criar um novo método de dobra. |
| indent       | Dobra baseado na indentação. |
| manual       | Crie dobras você mesma com `zf`, `zF`, e `:fold`. |
| marker       | Dobra baseado nos marcadores no texto (com frequência nos comentários). |
| syntax       | Dobra baseado na sintáxe, como dobrar em blocos de `if`. |


**NOTA**: Dobraduras podem ser computacionalmente intensas! Se você experienciardesvantagens na performance (pequenos atrasos enquanto digita), de uma olhada no
plugin [FastFold](https://github.com/Konfekt/FastFold), que prevem que o Vim 
atualize as dobras quando isso não é necessário.

Ajuda:

```
:h usr_28
:h folds
```

## Sessões
### Sessions

Se você salvar uma **visão** ("_view_", `:h :mkview`), o estado atual da janela
(e as opções e mapeamentos) são salvos para uso posterior (`:h :loadview`).

Uma **sessão** salva as visões de todas as janelas e mais as configurações
globais. Ela basicamente 'tira um retrato' da sua instância atual do Vim e a
salva um um arquivo de sessão. Deixe-me realçar isso: ela salva o estado atual;
tudo que for feito após salvar a sessão não será parte do arquivo de sessão.
Para "atualizar" a sessão, simplesmente salve-a novamente.

Isso é perfeito para salvar os seus _projetos_ e facilita na hora de mudar entre
eles.

Tente fazer isso agora mesmo! Abra algumas janelas e abas e faça `:mksession
Foo.Vim`. Se você omitir o nome do arquivo, o Vim assumirá que é
`Session.vim`. O arquivo será salvo no diretório de trabalho atual, confira qual
o diretório com `:pwd`. Recomece o Vim e faça `:source Foo.vim` e voilà, a lista
de buffers, o leiaute das janelas, os mapeamentos, o diretório atual e etc. tudo
deve ser o mesmo que era quando você salvou a sessão. Faça um pouco mais de
trabalho e atualize a sessão sobreescrevendo o arquivo de sessão que já existe
com `:mksession! Foo.vim`.

Note que um arquivo de sessão não passa de uma coleção de comando do Vim que
supostamente vão restaurar um certo estado de uma instância do Vim, portanto
sinta-se a livre para dar uma olhada nele: `:vs Foo.vim`.

Você pode dizer ao Vim que tipo de coisas devem ser salvas em uma sessão
determinando ("_set_") as opções da sessão `'sessionoptions'`.

Com o próposito de scripts o Vim mantém o nome da última sessão originada
("_sourced_") na variável interna `v:this_session`.

Ajuda:

```
:h Session
:h 'sessionoptions'
:h v:this_session
```

## Localidade
### Locality

Muitos dos conceitos mencionados acima possuem uma contraparte _local_:

| Global | Local | Escopo | Ajuda |
|--------|-------|-------|------|
| `:set`     | `:setlocal`           | buffer ou janela | `:h local-options`    |
| `:map`     | `:map <buffer>`       | buffer           | `:h :map-local`       |
| `:autocmd` | `:autocmd * <buffer>` | buffer           | `:h autocmd-buflocal` |
| `:cd`      | `:lcd`                | janela           | `:h :lcd`             |
| `<leader>` | `<localleader>`       | buffer           | `:h maplocalleader`   |

Variáveis também suportam escopos diferentes, mas isso será explicado em [Vim scripting](#vim-scripting).

# Utilização

## Conseguir ajuda desconectado

O Vim vem com uma ótima documentação no formato de simples arquivos de texto com
um layout especial. O sistema utilizado pelo Vim para acessar certas partes
desses arquivos é baseado em marcas (tags).

Primeiramente, leia isso: `:help :help`. Isso irá abrir o arquivo 
`$VIMRUNTIME/doc/helphelp.txt` em uma nova janela e pular para a marca `:help` 
dentro desse arquivo.

Algumas regras simples:

- opções são colocadas dentro de aspas curvas simples (`'`, e não ``` ` ```),
  como em `:h 'textwidth'` 
- funções de VimL terminam em `()`, como em `:h reverse()`
- comandos começam com `:`, como em `:h :echo`

Você pode usar `<c-d>` (isso quer dizer <kbd>ctrl</kbd>+<kbd>d</kbd>) para
listar todas as marcas ("_tags_") que correspondem com o termo pesquisado em
questão. Por exemplo, `:h tab<c-d>` irá lhe mostrar uma lista de todas as marcas
desde `tab` até `'softtabstop'` e `setting-guitablabel`.

Você quer listar todas as funções de VimL? Simples: `:h ()<c-d>`. Você quer
listar todas as funções de VimL relacionadas as janelas ("_windows_")? `:h
win*()<c-d>`.

Isso rapidamente fica instintivo, mas especialmente no começo, você não sabe nem
sequer uma parte da marca que está procurando. Você apenas pode imaginar algumas
palavras chave que podem estar envolvidas. `:helpgrep` irá salvar!

```
:helpgrep backwards
```

Isso irá procurar por "backwards" em toda a documentação e irá pular para a
primeira ocorrência. As ocorrências serão agrupadas em uma lista de conserto
rápido ("_quickfix list_"). Use `:cn`/`:cp` para pular para a próxima/última 
ocorrência. Ou use `:copen` para abrir a janela de conserto rápido, navegar para
uma ocorrência e apertar `<cr>` para pular para o ocorrência em questão. Veja
`:h quickfix` para conhecer a verdade.

## Conseguindo ajuda desconectado (alternativa)

Esta lista foi compilada por @chrisbra, um dos desenvolvedores mais ativos do
Vim, e foi postada na [vim_dev](https://groups.google.com/forum/#!forum/vim_dev).

Está sendo repostada aqui com algumas poucas alterações.

---

Se você sabe o quê está procurando, é normalmente mais fácil procurar usando o
sistema de ajuda, pois os assuntos seguem um certo guia de estilo.

Outra coisa, o sistema de ajuda tem a vantagem de pertencer à sua versão em
particular do Vim, de modo que tópicos obsoletos ou tópicos que foram
adicionados mais tarde não irão aparecer.

Por isso que é importante aprender a usar o sistema de ajuda e a linguagem que
ele usa. Aqui vão alguns exemplos (não necessariamente completo, e eu devo ter
me esquecido de alguma coisa).

1. Opções são colocadas entre aspas únicas e simples. Então você usaria `:h
   'list'` para ir para o tópico de ajuda para a opção "list". Se você só sabe
   que está procurando por uma certa opção, você também pode fazer `:h
   options.txt` para abrir a página de ajuda que descreve como que todas as
   opções são tratadas, e a partir daí usar expressões regulares, como `/width`.
   Algumas opções possuem nome próprio, como `: h cpo-a`, `:h cpo-A`, `:h
   cpo-b`, e assim por diante.

2. Comandos do modo normal são apenas isso mesmo. Use `:h gt` para ir para a
   página de ajuda do comando "gt".

3. Expressões regulares ("_regexp_") sempre começam com "/", então `:h /\+` leva
   você para a página de ajuda do itém quantificador "\+" nas expressões
   regulares do Vim. Se você precisa aprender alguma coisa sobre expressões
   regulares, comece lendo em `:h pattern.txt`.

4. Combinações de teclas. Elas normalmente começam com uma única letra indicando
   o modo para o qual elas podem ser usadas. Por exemplo, `:h i_CTRL-X` irá
   levar você para a família dos comandos com CTRL-X para o modo de inserção,
   que podem ser usados para autocompletar diferentes coisas. Repare que certas
   chaves serão sempre escritas da mesma maneira, por exemplo Control sempre
   será CTRL. Atenção também para o fato de que para os comandos para o modo
   normal, o "n" é deixado de fora, como em `:h CTRL-A`. Por outro lado, `:h
   c_CTRL-R` irá descrever o quê CTRL-R faz quando estiver escrevendo comandos
   na linha de comando, e `:h g_CTRL-A` fala sobre o comando g<C-A> (portanto
   você precisa apertar "g" e em seguida <Ctrl-A>). Aqui o "g" se refere ao
   comando "g" do modo normal, que sempre espera uma segunda tecla antes de
   fazer alguma coisa, os comandos començando com "z" também agem de forma
   parecida.

5. Registradores sempre começam com "quote", portanto use `:h quote` para saber
   mais sobre o registrador especial ":".

6. Vim script (VimL) está disponível em `:h eval.txt`. Certos aspectos da língua
   estão disponíveis em `:h expr-X` onde 'X' é um caractere único, como em `:h 
   expr-!` que irá lhe levar ao tópico que descreve o (Não) operador '!' para
   VimL. Também importante, veja `:h function-list` para encontrar uma curta
   descrição de todas as funções disponíveis.
   
7. Mapeamentos são encontrados na página de ajuda `:h map.txt`. Use `:h
   mapmode-i` para descobrir mais sobre o comando `:imap`. Use também  `:h
   map-tópico` para saber mais sobre certos subtópicos sobre mapeamentos (como
   em `:h :map-local` para mapeamentos localizados/específicos a um buffer ou
   `:h map_bar` para como lidar com a '|' em mapeamentos.

8. Definições de comandos são encontradas em `:h command-*`, portanto use `:h
   command-bang` para saber sobre o argumento '!' para comandos customizados.

9. Comandos para o gerenciamento de janelas sempre começam com CTRL-W, portanto
   você encontra a ajuda correspondente em `:h CTRL-W_*` (por exemplo `:h
   CTRL-W_p` para mudar a janela acessada anteriormente). Você também pode
   acessar `:h windows.txt` e olhar tudo, caso esteja procurando por um comando
   para lidar com janelas.

10. Comandos Ex sempre começam com ":", portanto `:h :s` cobre o comando ":s".

11. Use CTRL-D após digitar um tópico e deixe o Vim completar com todos os
    tópicos disponíveis.

12. Use `:helpgrep` para fazer uma busca em todas as páginas de ajuda
    (geralmente também inclui as páginas de ajuda instaladas por plugins). Veja
    `:h :helpgrep` para saber como a usar. Uma vez que você tenha buscado por um
    tópico, todos os resultados estarão disponíveis na janela da [lista de
    conserto rápido ou de
    localização](#listas-de-conserto-rápido-e-de-localização) que podem ser
    abertas com `:copen` ou `:lopen`. Uma vez lá, você pode usar `/` para
    filtrar os resultados ainda mais. 

13. `:h helphelp` contém alguma informação sobre como usar a ajuda.

14. O manual do usuário. Ele irá descrever os tópicos de ajuda para iniciantes
    em uma maneira até amigável. Comece em `:h usr_toc.txt` para encontrar a
    tabela de conteúdo. Passe o olho por essa ajuda para encontrar certos
    tópicos, como por exemplo você encontrará uma entrada chamada "Digraphs" e
    "Entering special characters" no capítulo 24 (então use `:h usr_24.txt` para
    ir para a página de ajuda em particular).

15. Grupos de realçamentos ("_Highlighting groups_") sempre iniciam com `hl-*`.
    Por exemplo, `:h hl-WarningMsg` fala sobre o grupo "WarningMsg" de
    realçamento.

16. Realçamento de sintáxe ("_syntax highlighting_") é renomeado para
    ":syn-tópico", como em `:h :syn-conceal` que fala sobre o argumento
    "conceal" para o comando `:syn`.

17. Comandos de conserto rápido ("quickfix") geralmente começam com ":c",
    enquanto que os comandos da lista de localização geralmente começam com
    ":l".

18. A página `:h BufWinLeave` fala sobre o autocmd BufWinLeave ("_deixar a
    janela do buffer_"). Também `:h autocommands-events` fala sobre todos os
    eventos possíveis.

19. Argumentos de inicialização sempre começam com "-", então `:h -f` irá lhe
    levar a página de ajuda do comando "-f" para iniciar o Vim.

20. Funções extras compiladas sempre começam com "+", então `:h +conceal` fala
    sobre o suporte a função "conceal" compilada.

21. Códigos de erro podem ser buscados diretamente na ajuda. `:h E297` irá
    exatamente para a descrição da mensagem do erro. Entretanto algumas vezes,
    esses códigos de erro não estão descritos, mas sim listados no comando do
    Vim que os causa. Como em `:h hE128` que o levará diretamente para o comando
    `:function`.

22. A documentação para arquivos de sintáxe incluídos geralmente estão
    disponíveis em `:h ft-*-syntax`. Por exemplo, `:h ft-c-syntax` fala sobre o
    arquivo de sintáxe C e as opções que ele apresenta. Algumas vezes, seções
    adicionais para a omni autocomplementação (`:h ft-php-omni`) ou plugins de
    tipos de arquivo (`:h ft-tex-plugin`) estão disponíveis.

Também, um linque para a documentação do usuário (que por sua vez descreve
certos comandos mais da perspectiva do usuário e de forma menos detalhada)
serão mencionados no topo das páginas de ajuda caso estejam disponíveis.
Portanto, `:h pattern.txt` menciona os tópicos `:h 03.9` e `:h usr_27` do guia
do usuário.

## Conseguindo ajuda conectado

Caso tenha um problema que não consiga resolver ou precise de uma orientação
geral, veja o grupo de e-mail [vim_use](https://groups.google.com/forum/#!forum/vim_use) (em inglês).
Um outro ótimo recurso é usar o [IRC](https://pt.wikipedia.org/wiki/Internet_Relay_Chat). O canal `#vim` na [Freenode](https://freenode.net) é grande e 
geralmente cheio de gente disposta a ajudar.

Se você quiser reportar um bug no Vim, use a lista de e-mails 
[vim_dev](https://groups.google.com/forum/#!forum/vim_dev).

## Autocmds na prática

Você pode ativar qualquer evento agora mesmo com: `:doautocmd BufRead`.

### Eventos do usuário
#### User events

Especialmente para plugins, vale a pena criar os seus próprios eventos de
usuário:

```vim
function! Aleatoriedade()
  " Um monte de coisa tá acontecendo aqui.
  " E por útlimo...
  doautocmd User AleatoriedadeSaida
endfunction
```

Agora os usuários do seu plugin pode executar qualquer coisa assim que
Aleatoriedade terminar de rodar:

```vim
autocmd User AleatoriedadeSaida call AleatoriedadeCleanup()
```

A propósito, se não houver nenhum comando :autocmd para ser encontrado,
:doautocmd vai jogar uma mensagem irritado "No matching autocommands". É por
isso que muitos plugins usam `silent doautocmd ...`. Mas isso também possui
a desvantagem que você não pode simplesmente usar `echo foo` no :autocmd, você
precisa usar `unsilent echo "foo"`.

É por isso que é melhor checar se ao menos existe o recebimento de um autocmd e
não se incomodar de emitir uma mensagem em caso contrário:

```vim
if exists('#User#AleatoriedadeSaida')
  doautocmd User AleatoriedadeSaida
endif
```

Ajuda: `:h User`

### Autocmds aninhados

Por padrão, autocmds não aninham! Se um autocmd executa um comando, que em
seguida iria geralmente ativar um outro evento, isso não irá acontecer.

Vamos supor que você queira que abrir o seu vimrc automaticamente toda vez que o
Vim for inicializado:

```vim
autocmd VimEnter * edit $MYVIMRC
```

A partir de agora, quando o Vim for inicializado, o seu vimrc será aberto, mas a
primeira coisa que você irá notar é que não haverá nenhum realce que normalmente
haveria.

O problema é que `:edit` no seu autocmd não-aninhado não irá ativar o evento
"BufRead", portanto o tipo de arquivo ("_filetype_") não será configurado para
"vim" e `$VIMRUNTIME/syntax/vim.vim` nunca será originado. Veja `:au BufRead
*.vim`. Use isso ao invés:

```vim
autocmd VimEnter * nested edit $MYVIMRC
```

Ajuda: `:h autocmd-nested`

## Área de transferência
#### Clipboard

Recursos [necessários](#que-tipo-de-vim-eu-estou-rodando): `+Clipboard` e
opcionalmente `+xterm_clipboard` caso queira usar a opção `+clipboard` em um
sistema Unix com o Vim mas que não suporta interface gráfica.

Ajuda:

```
:h 'clipboard'
:h gui-clipboard
:h gui-selections
```

Veja também: [Colar entre parenteses (ou por que preciso configurar 'paste' o
tempo
todo?)](#colar-entre-parenteses-ou-por-que-preciso-configurar-paste-o-tempo-todo)

### Utilização da área de transferência (Windows, macOS)

O Windows vem com [clipboard](https://msdn.microsoft.com/en-us/library/windows/desktop/ms649012(v=vs.85).aspx)
e macOS vem com uma [pasteboard](https://developer.apple.com/library/mac/documentation/Cocoa/Conceptual/PasteboardGuide106/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008100-SW1).

Ambos funcionam mais ou menos como usuários esperariam que funcionassem. Você
copia o texto selecionado com `ctrl+c`/`cmd+c` e cola em um outro aplicativo com `ctrl+v`/`cmd+v`.  

Repare que o texto copiado é naverdade transferido para a área de transferência
("_clipboard_"), e por isso você pode fechar o aplicativo onde copiou o texto
antes de colar em um outro aplicativo sem problemas.

Quando quer que isso aconteça, o registro `*` da área de transferência é
preenchido com a seleção. A partir do Vim, use `"*y"` e `"+p` para copiar e
colar para dentro ou para fora da área de transferência respectivamente.

Se você nem sequer quer ter que especificar o registrador `*` todo o tempo,
coloque isso no seu vimrc:

```vim
set clipboard=unnamed
```

Geralmente todas as operações de copiar/deletar/colocar ("_yank/delete/put_")
preencheriam o registrador `"`, mas agora o registrador `*` é usado para as
mesmas operações, e portanto, simplesmente `y` e `p` serão suficiente.

Deixe-me repetir: usar a opção acima quer dizer que todo e qualquer
copiar/colar, até mesmo quando usado apenas na mesma janela do Vim, todos irão
alterar a área de transferência. Decida por conta própria se isso é útil ou não.

Se você tem preguiça até mesmo de digitar `y`, você pode enviar cada seleção
visual para a área de transferência usando essas configurações:

```vim
set clipboard=unnamed,autoselect
set guioptions+=a
```

Ajuda:

```
:h clipboard-unnamed
:h autoselect
:h 'go_a'
```

### Utilização da área de transferência (Linux, BSD, ...)

Se o seu sistema operacional (SO) faz uso do [X](http://www.x.org/wiki), as
coisas são um pouco diferentes. O X implementa o [Protocolo de Janela de
Sistema X](http://www.x.org/releases/X11R7.7/doc/xproto/x11protocol.html) que
está em na versão principal 11 desde 1987, e por isso o X é normalmente chamado
de X11.

Antes, o X10, [cut buffers](http://www.x.org/releases/X11R7.7/doc/xorg-docs/icccm/icccm.html#Peer_to_Peer_Communication_by_Means_of_Cut_Buffers) foram introduzidos e meio que funcionaram como que uma espécie 
de _área de transferência_ já o texto copiado era na verdade mantido pelo X e
podia ser acessado a partir de outros aplicativos. Esse mecanismo ainda existe
no X, mas o seu uso foi discontinuado e a maioria dos programas não mas faz uso
dele.

Hoje em dia o dado é transferido entre aplicativos pelo meio de [seleções][selections](http://www.x.org/releases/X11R7.7/doc/xorg-docs/icccm/icccm.html#Peer_to_Peer_Communication_by_Means_of_Selections).
Dos 3 _átomos de seleção_ definos, apenas 2 estão em uso na prática: PRIMARY e
CLIPBOARD ("_primário_" e "_área de transferência_" respectivamente).

Grosseiramente falando, as seleções funcionam mais ou menos assim:

```
Programa A: <ctrl+c>
Programa A: assegura a posse da área de transferênci (CLIPBOARD)
Programa B: <ctrl+v>
Programa B: nota que a posse da área de transferência é mantida pelo Programa A
Programa B: pede dado Programa A
Programa A: responde ao pedido e envia o dado ao Programa B
Programa B: recebe dado do Programa A e o insere na janela
```

| Seleção | Quando é usado? | Como colar? | Como acessar pelo Vim? |
|-----------|------------|---------------|-------------------------|
| PRIMÁRIA ("_PRIMARY_")   | Selecionando texto              | `Clicando com o botão do meio do mouse`, `shift+insert` | Registrador `*` |
| Área de transferência ("_CLIPBOARD_") | Selecionando texto e `ctrl+c` | `ctrl+v`                       | Registrador `+` |

**NOTA**: Seleções (não, nem mesmo as seleções da Área de Transferência) não são
nunca mantidas no servidor X! Portanto, você perde o dado copiado com `ctrl+c`
quando o aplicativo é encerrado.

Use `"*p` para colar a seleção PRIMÁRIA ou `"+y1g" para copiar o arquivo inteiro
para a seleção da Área de Transferência.

Caso você se veja tendo que acessar um desses dois registradores o tempo todo,
considere usar:

```vim
set clipboard^=unnamed      " * register
" ou
set clipboard^=unnamedplus  " + register
```

(O `^=` é usado para antecipar para o valor padrão, `:h :set^=`.)

Isso irá fazer com que todo e qualquer copiar/deletar/colocar
("_yank/delete/put_") façam uso do registrador `*` ou do registrador `+`, ao
invés de usar o registrados não nomeado `"` ("_unamed register_"). Em seguida
você pode usar simplemente `y` ou `p` para acessar a seleção do X escolhida.

Ajuda:

```vim
:h clipboard-unnamed
:h clipboard-unnamedplus
```

## Restaurar posição do cursor ao abrir arquivo

Sem isso, você sempre estará na primeira linha ao abrir um arquivo. Com isso,
você estará na posição em que você estava quando partiu anteriormente.

Coloque isso no seu vimrc:

```vim
autocmd BufReadPost *
    \ if line("'\"") > 1 && line("'\"") <= line("$") |
    \   exe "normal! g`\"" |
    \ endif
```

Isso simplesmente faz `` g`" `` (pula para a posição em que você estava quando
você saiu sem alterar a lista de pulos) se a posição ainda existir (o arquivo
pode ter algumas linhas a menos desde que foi alterado por um outro programa).

Isso requer o uso do arquivo vimfile: `:h viminfo-'`.

## Arquivos temporários

Depending on the options, Vim creates up to 4 kinds of working files.

**Arquivos de backup**:

Você pode falar pro Vim manter um arquivo de backup do arquivo original antes de
salvar. Por padrão, Vim o mantém um backup, mas o remove imediatamente, logo
após o arquivo ser salvo com sucesso (`:set writebackup`). Caso você queira que
o último backup persista, `:set backup`. Ou você pode desativar todos os backups
de uma vez, `:set nobackup nowritebackup`.


Vejamos o quê que eu adicionei ao meu vimrc por último...

```
$ diff ~/.vim/vimrc ~/.vim/files/backup/vimrc-vimbackup
390d389
< command! -bar -nargs=* -complete=help H helpgrep <args>
```

Ajuda: `:h backup`

**Arquivos de troca (swap)**:

Você teve uma ideia para o melhor romance de ficção científica de todos os
tempos. Depois de passar horas em um bom ritmo escrevendo várias centenas de
milhares de palavras... acaba a bateria! Esse é o momento em que você se dá
conta que a última vez em que você salvou `~/wicked_alien_invaders_from_outer_space.txt` foi... bem, você nunca tinha salvado.

Mas nem toda a esperança está perdida! Ao editar um arquivo, o Vim cria um
arquivo de troca que contém mudanças que não foram salvas. Tente você mesmo,
abra qualquer arquivo e consiga o arquivo de troca atual usando `:swapname`.
Você também pode desativar arquivos de troca colocando `:set noswapfile` no seu
vimrc.

Por padrão, o arquivo de troca é criado no mesmo diretório que o arquivo editado
e chamado de algo como `.file.swp`, atualizado tanto a cada 200 caractéres ou
quando você não tenha digitado nada por 4 segundos, e deletado quando você pára
de editar o arquivo. Você pode mudar esses números com `:h 'updatecount'` e `:h
updatetime'`.

Por causa da queda de bateria, o arquivo de troca nunca foi deletado. Se você
fizer `vim ~/wicked_alien_invaders_from_outer_space.txt`, o Vim irá te perguntar
se você quer recuperar o arquivo.

Ajuda: `:h swap-file` e `:h usr_11`.

**Arquivos de desfazares (Undo files)**:

A [árvore do desfazer](#árvore-do-desfazer) é mantida em memória e será perdida
quando o Vim for encerrado. Se você quiser que ela persista, `:set undofile`.
Isso irá salvar o arquivo de desfazares para `~/foo.c` em `~/foo.ce.un~`.

Ajuda: `:h 'undofile'` e `:h undo-persistence`

**Arquivo Viminfo**:

Enquanto que os arquivos de backup, de troca, e de desfazer são voltados para o
estado do texto, os arquivos Viminfo são usados para salvar todo o resto, tudo
que seria perdido ao encerrar o Vim. O arquivo viminfo mantém as histórias (da
linha de comando, de buscas, de entrada de dados), registradores, marcadores,
lista de buffer, variáveis globais, etc.

Por padrão, o viminfo é sobreescrito em `~/.viminfo`.

Ajuda: `:h viminfo` e `:h 'viminfo'`.

---

Se você for um pouco parecido comigo, você vai preferir manter todos esses
arquivos no mesmo lugar, como em `~/.vim/files`:

```
set backup
set backupdir   =$HOME/.vim/files/backup/
set backupext   =-vimbackup
set backupskip  =
set directory   =$HOME/.vim/files/swap//
set updatecount =100
set undofile
set undodir     =$HOME/.vim/files/undo/
set viminfo     ='100,n$HOME/.vim/files/info/viminfo
```

O diretório `~/.vim/files` precisa ser criado de antemão, caso contrário o Vim
vai vomitar erros. Se você trabalha com frequência em novos hospedeiros
("_hosts_"), você talvez queira automatizar isso:

```vim
if exists('*mkdir') && !isdirectory($HOME.'/.vim/files')
  call mkdir($HOME.'/.vim/files')
endif
```

NOTA: Se você editar um arquivo em um sistema com múltiplos usuários e o Vim te
falar que um arquivo de troca ("_swap file_") já existe, isso provavelmente
significa que alguém esteja editando o arquivo ao mesmo tempo. Você perde essa
"característica" quando você salva os arquivos de troca no diretório home (~/).

## Editando arquivos remotos

O Vim vêm com o plugin netrw que permite a edição de arquivos remotos. Na
verdade, o plugin transfere o arquivo remoto para um arquivo local temporário
via scp, abre um buffer usando esse arquivo, e sobreescreve as mudanças de volta
para o arquivo remoto ao salvar.

Isso é extremamente útil caso você queira usar as suas configurações locais ao
invés de entrar por meio de ssh em um servidor e usar o quer que o administrador
queira que você use.

```
:e scp://bram@awesome.site.com/.vimrc
```

Se você tiver uma `~/.ssh/fig` já configurada, ela será usada automaticamente:

```
Host maravilhoso
    HostName maravilhoso.site.com
    Port 1234
    User bram
```

Assumindo o conteúdo acima em `~/.ssh/config`, isso também funcionaria do mesmo
jeito:

```
:e scp://maravilhoso/.vimrc
```

Algo similar pode ser feito com um `~/.netrc`, veja `:h netrw-netrc`.

Certifique-se de ler `:h netrw-ssh-hack` e `:h g:netrw_ssh_cmd`.

---

Uma outra possibilidade é usar [sshfs](https://wiki.archlinux.org/index.php/Sshfs)
o qual usa [FUSE](https://en.wikipedia.org/wiki/Filesystem_in_Userspace) para
montar um sistema de arquivos remoto no seu sistema de arquivo local.

## Gerenciando plugins

[Pathogen](https://github.com/tpope/vim-pathogen) foi a primeira ferramenta de
gerenciar plugins que ficou popular. Na verdade, o Pathogen apenas ajusta o
_runtimepath_ (`:h 'rtp'`) para incluir tudo que for colocado em um certo
diretório. Você precisa clonar os repositórios dos plugins para lá por conta
própria.

Os gerenciadores reais de plugins apresentam comandos que te ajudam a instalar e
atualizar plugins de dentro do Vim. Aqui segue uma lista de gerenciadores de
plugins comumente usados:

[Lista de gerenciadores de plugins](PLUGINS.md#gerenciadores-de-plugins)
- [dein](https://github.com/Shougo/dein.vim)
- [plug](https://github.com/junegunn/vim-plug)
- [vim-addon-manager](https://github.com/MarcWeber/vim-addon-manager)
- [vundle](https://github.com/VundleVim/Vundle.vim)

## Inserção de bloco

Essa é uma técnica para inserir o mesmo texto em várias linhas consecutivas ao
mesmo tempo. Veja essa
[demonstração](https://raw.githubusercontent.com/mhinz/vim-galore/master/static/images/content-block_insert.gif).

Passe para o modo de seleção visual de bloco com `<c-v>`. Em seguida vá para
algumas linhas abaixo. Aperte `I` ou `A` e comece a inserir o seu texto.

Isso pode parecer um pouco confuso à primeira vista, mas o text é sempre
inserido na linha atual e somente após terminar a inserção é que o mesmo texto
será aplicado em todas as outras linhas da seleção visual anterior.

Então um exemplo bem simples é `<c-v>3jItext<esc>`.

Se você tiver linhas com larguras diferentes e quiser pendurar o mesmo logo após
o final de cada uma das linhas, faça assim: `<c-v>3j$Atext<esc>`.

Pode acontecer que você precise posicionar o cursor em algum lugar após o final
da linha atual. Você não pode fazer isso por padrão, mas você pode configurar a
opção `virtualedit`:

```vim
set virtualedit=all
```

Em seguida `$10l` ou `90|` irão funcionar mesmo após o final da linha.

Veja `:h blockwise-examples` para mais informações. Pode parecer complicado à primeira vista, mas fica instintivo rapidamente.

Se você quiser ficar realmente chique, dê uma olhada no [multiple-cursors](https://github.com/terryma/vim-multiple-cursors).

## Rodando programas externos e usando filtros

Aviso: O Vim é um programa de linha única - "_single-threaded_", portanto ao rodar um programa externo no plano de fundo irá bloquear tudo o mais. Claro, você pode usar uma das interfaces de programação do Vim, por exemplo Lua, e usar o suporte de linhas dela, mas - mesmo assim - o processo do Vim estará bloqueado enquanto isso. O Neovim consertou isso ao adicionar um API de trabalhos apropriada.

(Aparentemente o Bram está pensando em adicionar controle de trabalhos ("_job
control_") ao Vim também. Case você tenha uma versão bem recente, veja
`:helpgrep startjob`).

Use `:!` para começar um trabalho. Se você quiser listar os arquivos no
diretório de trabalho atual, use `:!ls`. Use `|` para entubar comandos no shell
como normalmente faria: `:!ls -1 | sort | tail -n5`.

Sem um alcance, a saída de `:!` será mostrada em uma janela que pode ser rolada.
Por outro lado, se um alcance for dado, essas linhas serão
[filtradas](https://es.wikipedia.org/wiki/Filtro_(programa)). Isso significa que
elas serão entubadas a entrada padrão
([stdin](https://pt.wikipedia.org/wiki/Fluxos_padr%C3%A3o#Entrada_padr.C3.A3o_.28stdin.29)) do programa de filtragem e após o processamento serão substituídas pela saída padrão ([stdout](https://pt.wikipedia.org/wiki/Fluxos_padr%C3%A3o#Sa.C3.ADda_padr.C3.A3o_.28stdout.29)) do filtro. Por exemplo, para pendurar números nas próximas 5 linhas, use isto:

    :.,+4!nl -ba -w1 -s' '

Mas já que custa tanto adicionar o alcance, o Vim também apresenta algumas
ajudas, só pela conveniência. Com alcances, como sempre, você pode selecionar
linhas no modo visual e então apertar `:`. Há também um operador `!` que aceita
um movimento. Por exemplo, `!ip!sort` irá ordenar as linhas do parágrafo atual.

Um bom caso para fazer filtragem é na [língua Go de
programação](https://lang.org). A indentação é bem arbitrária, tanto que até vem
com um filtro chamado de `gofmt` para indentar código em Go propriamente. Assim
sendo, plugins para Go, normalmente oferecem uma ajuda com comandos chamados de
`:Fmt` que basicamente fazem `:%!gofmt`, e assim indentam todas as linhas no
arquivo.

As pessoas usam com frequência `:r !prog` para colocar a saída do prog abaixo da
linha atual, o que é sem problemas para scripts, mas quando se está no meio da
produção, acho mais fácil usar `!!ls` que substitui a linha atual.

    :h filter
    :h :read!

## Cscope

O [Cscope](http://cscope.sourceforge.net/) faz mais coisas que o 
[ctags](http://ctags.sourceforge.net/), mas suporta apenas C (a C++ e Java até
certo ponto).

Enquanto que um arquivo de tags sabe apenas onde um símbolo foi definido, um
banco de dados do cscope sabe muito mais sobre os seus dados:

- Onde esse símbolo está definido?
- Onde esse símbolo é usado?
- Qual é a definição global desse símbolo?
- Onde que essa variável conseguiu esse valor?
- Onde no código fonte essa função está?
- Quais funções chamam essa função?
- Quais funções são chamadas por essa função?
- De onde que ta vindo a mensagem "out of space"?
- Onde na estrutura de diretório está esse código fonte?
- Quais arquivos incluem esse arquivo de cabeçalho?

### 1. Construa o banco de dados

Faço isso na raíz do seu projeto:


```sh
$ cscope -bqR
```

Isso irá criar 3 arquivos: `cscope{,.in,.po}.out no diretório de trabalho atual.
Pense neles como sendo o seu banco de dados.

Infelizmente o `cscope` analisa por padrão apenas arquivos `*.[c|h|y|l]`.
Entretanto, se você quiser usar o cscope para um projeto em Java, faça assim:

```sh
$ find . -name "*.java" > cscope.files
$ cscope -bq
```

### 2. Adicione o banco de dados

Abra uma conexão ao seu banco de dados que acabou de set construído:

```vim
:cs add cscope.out
```

Verificar se a conexão foi feita:

```vim
:cs show
```

(Sim, você pode adicionar múltiplas conexões.)

### 3. Consulte o banco de dados

```vim
:cs find <kind> <query>
```

Por exemplo `:cs find d foo` irá listar todas as funções que são chamadas por `foo(...)`.

| Tipo | Explicação |
|------|------------|
| s    | **s**ímbolo: encontre todas as referências ao símbolo |
| g    | **g**lobal: encontre a(s) definição(ões) globais do símbolo. |
| c    | **c**hamada: encontre todas as chamadas à função |
| t    | **t**exto: encontre todas as instâncias do texto |
| e    | **e**grep: pesquisa pela palavra com o egrep |
| f    | **f**ile ("_arquivo_"): abrir o nome do arquivo |
| i    | **i**nclui: encontrar arquivos que incluem o nome do arquivo | 
| d    | **d**epende: encontrar funções chamadas por essa função |

Eu sugiro uns atalhos convenientes, como:

```vim
nnoremap <buffer> <leader>cs :cscope find s  <c-r>=expand('<cword>')<cr><cr>
nnoremap <buffer> <leader>cg :cscope find g  <c-r>=expand('<cword>')<cr><cr>
nnoremap <buffer> <leader>cc :cscope find c  <c-r>=expand('<cword>')<cr><cr>
nnoremap <buffer> <leader>ct :cscope find t  <c-r>=expand('<cword>')<cr><cr>
nnoremap <buffer> <leader>ce :cscope find e  <c-r>=expand('<cword>')<cr><cr>
nnoremap <buffer> <leader>cf :cscope find f  <c-r>=expand('<cfile>')<cr><cr>
nnoremap <buffer> <leader>ci :cscope find i ^<c-r>=expand('<cfile>')<cr>$<cr>
nnoremap <buffer> <leader>cd :cscope find d  <c-r>=expand('<cword>')<cr><cr>
```

Então, quando `:tag` (ou `<c-]>`) pula para uma definição do arquivo de tags, `:cstag` faz o mesmo, mas também leva em conta banco de dados de cscope que estejam conectados. A opção `cscopetag` faz com que `:tag` aja como `:cstag` automaticamente. Isso é muito conveniente caso você já tenha atalhos relacionados a tags.

Ajuda: `:h cscope`

## MatchIt

Já que o Vim é escrito em C, muitas características assumem uma sintáxe com a de
C. Por padrão, se o seu cursor estiver em `{` or `#endif`, você pode usar `%`
para pular para o `}` ou `#endif` correspondente, respectivamente.

O Vim já vem empacotado com um plugin chamado matchit.vim que não vem ativado
por padrão. Ele faz com que `%` também circule por tags de HTML, construções de if/else/endif em VimL e etc., e introduz alguns novos comandos.


#### Instalação para Vim 8

```vim
" vimrc
packadd! matchit
```

#### Instalação para Vim 7 e anterior

```vim
" vimrc
runtime macros/matchit.vim
```

Já que a documentação do matchit é bem extensa, eu sugiro faz o seguinte uma
vez:


```vim
:!mkdir -p ~/.vim/doc
:!cp $VIMRUNTIME/macros/matchit.txt ~/.vim/doc
:helptags ~/.vim/doc
```

#### Introdução curta

O plugin está pronto para o uso agora. Veja `:h matchit-intro` para saber os
comandos suportados e `:h matchit-languages` para as línguas suportadas.

Agora, é fácil definir as suas próprias combinações de pares:

```vim
autocmd FileType python let b:match_words = '\<if\>:\<eliffhs\>:\<else\>'
```

Em seguida, você pode circular através dessas 3 declarações em qualquer arquivo
de Python pelo uso de `%` (para frente) ou `g%` (para o anterior).

Ajuda:

```
:h matchit-install
:h matchit
:h b:match_words
```

## True colors

Usar  _true colors_ ("_cores verdadeiras_") em um emulador de terminal que dizer
ser capaz de usar 24 bits para as cores RGB. Isso significa 16777216 (2^24)
cores ao invés das 256 cores usuais.

Como é explicado [aqui](#esquemas-de-cores), esquemas de cores podem na verdade
ser _dois_ esquemas de cores, tendo assim defini;'oes para terminais (xterm) e
para interfaces gráficas ("_GUIs_", como o Gvim). Isso fazia sentido no tempo em
que os emuladores de terminais ainda não tinham apredido sobre _true colors_.

Depois de `:set termguicolors`, Vim começa a emitir sequencias de escape
("_escape sequences_") que só são entendidas por um emulador de terminal com
suporte a _true colors_. Quando as suas cores parecerem esquisitas, é possível
que o seu emulador de terminal não suporte _true colors_ ou que o seu esquema
de cores não tenha cores definidas para interfaces gráficas ("_GUI color_").

Help: `:h 'termguicolors'`

# Dicas

## Comportamento mais saudável para n e N

A direção de `n` e `N` depende se `/` ou `?` foi usado para pesquisar para adiante 
ou para traz respectivamente. Isso é bem confuso para mim.

Se você quiser que o `n` sempre pesquise avançando e o `N` sempre retrocedendo,
use isso:

```vim
nnoremap <expr> n  'Nn'[v:searchforward]
nnoremap <expr> N  'nN'[v:searchforward]
```

## Comportamento mais saudável para a história da linha de comando

Se você for um pouco parecido comigo, você tá acostumado a ir para o próximo
item ou para o anterior via `<c-n>` e `<c-p>` respectivamente. Por padrão, isso
também funciona na linha de comando e relembra a história anterior ou mais
recente da linha de comando.

Até aí tudo bem. Mas `<up>` (a seta pra cima) e `<down>` (seta pra baixo) são 
ainda mais inteligentes! Elas lembram da linha comando que combina com a linha
de comando atual. Por exemplo, `:echo <up>` pode mudar para `:echo "Vim? Uhu!"`.

Claro que eu não to querendo que você precise alcançar as setas, ao invés disso,
remapei:


```vim
cnoremap <c-n>  <down>
cnoremap <c-p>  <up>
```

Eu dependo desse comportamento várias vezes ao dia.

## CTRL-L com comportamento mais saudável

Por padrão, `<c-l>` limpa e redesenha a tela (como em `:redraw!`). O seguinte
mapa faz o mesmo, mas também deseleciona os itens encontrados via `/`, `?` etc.,
além de consertar realce de sintáxe (as vezes o Vim perde o realçamento por
conta de regras complexas de realçamento), e ainda força a atualização do realce
de sintáxe em modo diff:

```vim
nnoremap <leader>l :nohlsearch<cr>:diffupdate<cr>:syntax sync fromstart<cr><c-l>
```

## Desativar firulas audiovisuais

```vim
set noerrorbells
set novisualbell
set t_vb=
```

Veja [Vim Wiki: Disable beeping](http://vim.wikia.com/wiki/Disable_beeping).

## Mover a linha atual rapidamente

As vezes eu preciso de um jeito rápido para mover a linha atual para cima ou
para baixo:

```vim
nnoremap [e  :<c-u>execute 'move -1-'. v:count1<cr>
nnoremap ]e  :<c-u>execute 'move +'. v:count1<cr>
```

Esses mapas também aceitam uma conta, portanto `2]e` move a linha atual duas
linhas abaixo.

## Adicionar linhas vazias rapidamente

```vim
nnoremap [<space>  :<c-u>put! =repeat(nr2char(10), v:count1)<cr>'[
nnoremap ]<space>  :<c-u>put =repeat(nr2char(10), v:count1)<cr>
```

Agora `5[<space>` insere 5 linhas vazias acima da linha atual.

## Edite os seus macros rapidamente

Essa é uma verdadeira gema! O mapa aceita um registrdor (ou `*` por padrão) e o
abre na janela de linha de comando ("_cmdline-window_"). Para configurar o seu
registrador, aperte `<cr>` quando você tiver terminado a edição.

Eu uso isso com frequência para corrigir erros de digitação feitos durante o
registro do macro.

```vim
nnoremap <leader>m  :<c-u><c-r><c-r>='let @'. v:register .' = '. string(getreg(v:register))<cr><c-f><left>
```

Você pode usar como `<leader>m` ou `"q<leader>m`.

Perceba o uso de `<c-r><c-r>` para ter certeza que o `<c-r>` é inserido
literalmente. Veja `:h c_^R^R`.

## Pular rapidamente para o arquivo de cabeçalho ou fonte

Essa técnica provavelmente pode ser aplicada à vários tipos de arquivos
("_filetypes_"). Ela cria _marcadores de arquivo_ ("_file marks_", veja `:h
marks`) ao deixar um arquivo de código fonte ou de cabeçalho ("_header_"), e
assim permite que você pule rapidamente de volta ao último que foi acessado
usando `'C` ou `'H` (veja `:h 'A`).

```vim
autocmd BufLeave *.{c,cpp} mark C
autocmd BufLeave *.h       mark H
```

**NOTA**: A informação é salva em um arquivo viminfo, então tenha certeza que
`:set viminfo?` inclui `:h viminfo-'`.

## Mudar tamanho da fonte rapidamente na interface gráfica (GUI)

Creio que isso aqui saiu da configuração do tpope:

```vim
command! Bigger  :let &guifont = substitute(&guifont, '\d\+$', '\=submatch(0)+1', '')
command! Smaller :let &guifont = substitute(&guifont, '\d\+$', '\=submatch(0)-1', '')
```

## Mudar o estilo do cursor de acordo com o modo

Eu gosto de usar um cursor em formato de bloco para o modo normal, i-beam cursor
no modo de inserção, e cursor sublinhado quando no modo de substituição.

```vim
if empty($TMUX)
  let &t_SI = "\<Esc>]50;CursorShape=1\x7"
  let &t_EI = "\<Esc>]50;CursorShape=0\x7"
  let &t_SR = "\<Esc>]50;CursorShape=2\x7"
else
  let &t_SI = "\<Esc>Ptmux;\<Esc>\<Esc>]50;CursorShape=1\x7\<Esc>\\"
  let &t_EI = "\<Esc>Ptmux;\<Esc>\<Esc>]50;CursorShape=0\x7\<Esc>\\"
  let &t_SR = "\<Esc>Ptmux;\<Esc>\<Esc>]50;CursorShape=2\x7\<Esc>\\"
endif
```

Isso simplemente fala para o Vim imprimir uma certa sequência de caractéres
([sequência de escape](https://pt.wikipedia.org/wiki/Sequ%C3%AAncia_de_escape))
ao entrar/sair do modo de inserção. O terminal subjacente, ou programas como
[tmux](https://tmux.github.io), que se localização entre o Vim e o terminal irão
processar e avaliar.

Entretanto há uma contrapartida: há muitas implementações de emulação de
terminal e nem todos usam as mesmas sequências para fazer as mesma coisas. As
sequências usadas acima podem não funcionar com a sua implementação. A sua
implementação pode talvez nem sequer suportar diferentes estilos de curso.
Confira a documentação.

O exemplo acima funciona com o iTerm2.

## Não perca a seleção ao se deslocar lateralmente

Se você selecionar uma ou mais linhas, você pode usar `<` e `>` para deslocar
lateralmente. Infelizmente, você perde imediatamente a seleção logo em seguida.

Você pode usar `gv` para reselecionar a última seleção (veja `:h gv`), e
portanto você pode contornar a situação assim:

```vim
xnoremap <  <gv
xnoremap >  >gv
```

Agora você pode usar `>>>>>` na sua seleção visual sem nenhum problema.

**NOTA**: O mesmo pode ser atingido usando `.`, que repete a última mudança.

## Regarregar um arquivo ao salvar

Usando [autocmds](#autocmds) você pode fazer qualquer coisa ao salvar um
arquivo, como recarregar o arquivo em caso de algum arquivo escondido, ou rodar
um linter para checar se há erros de sintáxe no seu código fonte.

```vim
autocmd BufWritePost $MYVIMRC source $MYVIMRC
autocmd BufWritePost ~/.Xdefaults call system('xrdb ~/.Xdefaults')
```

## Linha do cursor mais inteligente

Eu amo a linha do cursor, mas eu só preciso usar ela na janela atual e quando
não estando em modo de inserção:

```vim
autocmd InsertLeave,WinEnter * set cursorline
autocmd InsertEnter,WinLeave * set nocursorline
```

## Completar palavras chave mais rapidamente

A compeplementação de palavras chave (`<c-n>`/`<c-p>`) tenta completar o quê
quer que esteja listado na opção `'complete'`. Por padrão, isso também inclui
tags (o que pode ser irritante) e escanear todos os arquivos incluídos ( o que
pode ser bem lento). Se você pode viver sem essas coisas, desative-as:

```vim
set complete-=i   " disable scanning included files
set complete-=t   " disable searching tags
```

## Mudanças cosméticas a esquemas de cores

Sempre usar linha de status ("_`statusline`_") cinza escura, independente do
esquema de cores escolhido:

```vim
autocmd ColorScheme * highlight StatusLine ctermbg=darkgray cterm=NONE guibg=darkgray gui=NONE
```

O mesmo, mas apenas o esquema de cores "lucius" (confira `:echo color_name` que
deveria ser configurado por todos os esquemas de cores válidos):

```vim
autocmd ColorScheme lucius highlight StatusLine ctermbg=darkgray cterm=NONE guibg=darkgray gui=NONE
```

# Comandos

Comandos úteis que são bons de saber. Use `:h :<command name>` para aprender
mais sobre eles, por exemplo `:h :global`.

## :global e :vglobal

Execute um comando em todas as linhas que baterem. Por exemplo `:global /regexp/
print` irá usar `:print` em todas as linhas que conterem "regexp".

Fato engraçado: vocês todos provavelmente conhecem o bom e velho grep, o
programa de filtragem escrito por Ken Thompson. O que ele faz? Ele imprime todas
as linhas que baterem com uma certa expressão regular! Agora tente adivinhar
qual que é a forma abreviada de `:global /regexp/ print`? Isso mesmo! É
`:g/re/p`. Ken Thompson foi inspirado pelo comando `:global` do vi quando ele
escreveu o grep.

Apesar do nome, o `:global` age apenas em todas as linhas por padrão, mas ele
também aceita um alcance. Assumindo que você queira usar `:delete` em todas as
linhas a partir da linha atual até a próxima linha em branco (que bata com a
expressão regular `^$`) e que contenha "foo":

```vim
:,/^$/g/foo/d
```

Para executar comandos em todas as linhas que _não_ batam com um dado padrão,
use `:global!` ou o seu alias `:vglobal` (pense ao invés em _inVerso_).

## :normal e :execute

Esses são comandos usados com frequência em scripts do Vim.

Com `:normal` você pode fazer mapeamentos do modo normal a partir da linha de
comando. Como por exemplo `:normal! 4j` irá fazer com que o cursor vá 4 linhas
para baixo (sem precisar usar nenhum mapeamento personalizado para o "j" por
causa da "!").

Tenha em conte que o `:normal` também aceita um alcance, e portanto `:%norm!
Iabc` iria pendurar "abc" no início de todas as linhas.

Com `:execute` você pode misturar comandos com expressões. Assumindo que você
esteja editando um arquivo de código em C e queira mudar o arquivo de cabeçalho:

```vim
:execute 'edit' fnamemodify(expand('%'), ':r') . '.h'
```

Ambos os comandos são com frequência utilizados em conjunto. Assumindo que você
queira fazer com que o cursor vá "n" linhas para baixo:

```vim
:let n = 4
:execute 'normal!' n . 'j'
```

## :redir e execute()

Muitos comandos imprimem mensagens e `:redir` permite redirecionar essa saída.
Você pode redirecionar para arquivos, [registradores](#registradores) ou
variáveis.

```vim
:redir => var
:reg
:redir END
:echo var
:" For fun let's also put it onto the current buffer.
:put =var
```

No Vim 8 existe um jeito ainda mais curto:

```vim
:put =execute('reg')
```
Ajuda:

```vim
:h :redir
:h :execute()
```

# Debugging

## Dicas gerais 

Se você encontrar um comportamento estranho, tente reproduzir dessa maneira:

```
vim -u NONE -N
```

Isso irá iniciar o vim sem o vimrc (portanto, com as configurações padrões) e no
modo "nocompatiple" ("_não compatível_", o que faz com que o vim use os seus
próprios padrões ao invés dos do Vi). (Veja `:h --noplugin` para outras
combinações do quê carregar ao iniciar.)

Se nesse ponto você ainda puder reproduzir o tal do comportamento estranho, é
bem provável que seja um bug do Vim mesmo! Relate-o a lista de endereços
[vim_dev](https://groups.google.com/forum/#!forum/vim_dev). Na maioria dos
casos, o problema não estará resolvido neste ponto e você terá que avançar na
investigação.

Os plugins com frequência introduzem comportamentos novos/alterados/defeituosos.
Por exemplo, se acontecer na hora de salvar, confira `:verb au BufWritePost`
para conseguir uma lista dos (possíveis) culpados.

Se você estiver usando um gerenciador de plugin, comente os plugins até que você
encontre qual deles é o responsável.

Problema ainda não resolvido? Se não é um plugin, deve ser as suas outras
configurações, talvez as suas opções ou os autocmds etc.

Hora de usar a pesquisa binária. Divida repetidamente o espaço de pesquisa em
dois até encontrar a linha culpada. Por causa da natureza da divisão binária,
isso não ṕrecisará de muitos passos.

Na prática, funciona mais ou menos assim: Coloque o comando `:finish` no meio do
seu vimrc. O Vim irá pular tudo que estiver após ele. Se ainda acontecer, o
problema está na metade superior que ainda está ativa. Mova o `:finish` para o
meio _dessa metade ativa_. Caso contrário, o próblema está na metade inativa
abaixo. Mova o `:finish` para a _metade dessa metade inativa_. E assim por
diante.

## Verbosidade

Um outro jeito útil para observar o quê o Vim está atualmente fazendo é aumentar
o nível de verbosidade. Atualmente o Vim suporta 9 níveis deferentes. Veja `:h
'verbose'` para conferir a lista completa.

```vim
:e /tmp/foo
:set verbose=2
:w
:set verbose=0
```

Isso irá mostrar todos os arquivos são avaliados ("_sourced_"), como por exemplo
o arquivo com os desfazeres ou vários plugins que agem na hora de salvar.

Se você quiser apenas aumentar a verbosidade para um programa, há também
`:verbose`, que é simplesmente colocado em frente a qualquer outro programa. Ele
aceita o nível de verbosidade como um alcance e por padrão refere-se a 1:

```vim
:verb set verbose
"  verbose=1
:10verb set verbose
"  verbose=10
```

Isso com muita frequência usado com o próprio nível de verbosidade (1) que
mostra onde uma opção foi vista pela última vez:

```vim
:verb set ai?
"      Last set from ~/.vim/vimrc
```

Naturalmente, quanto maior o nível de verbosidade, mais sobrecarregado será o
resultado. Mas não precisa ter medo, você pode simplesmente redirecionar o
resultado para um arquivo:

```vim
:set verbosefile=/tmp/foo | 15verbose echo "foo" | vsplit /tmp/foo
```

Você também pode ativar a verbosidade na hora de iniciar o Vim com a opção `-V`.
Ela refere-se por padrão ao nível 10 de verbosidade. Por exemplo, `vim -V5`.

## Analisando o tempo de inicialização

O Vim parece estar inicializando devagar? Hora de conferir alguns números:

```
vim --startuptime /tmp/startup.log +q && vim /tmp/startup.log
```

A primeira coluna é a mais importante já que ela mostra o tempo absoluto
transcorrido. Se houver um grande salto entre duas linhas, a sengunda linha ou é
um arquivo grande ou um arquivo com código VimL defeituoso que vale a pena
investigar.

## Analisando o tempo de execução

[Caractéristica requerida](#Que-tipo-de-Vim-eu-estou-rodando): `+profile`

O Vim apresenta uma capacidade própria de analisar o próprio tempo de execução e
essa é uma boa forma de encontrar código lento no seu ambiente.

O comando `:profile` aceita um bando de sub-comandos para especificar o quê deve
ser analisado.

Se você quiser analisar _tudo_, faça assim:

```
:profile start /tmp/profile.log
:profile file *
:profile func *
<faça alguma coisa no vim>
<encerre o Vim>
```

O Vim mantém a informação analisada na memória e apenas a escreve para o arquivo
de log na hora que for encerrado. (O Neovim consertou isso usando `:profile
dump`).

Dê uma olhada em `/tmp/profile.log`. Todo o código que foi executado durante a
análise será mostrado. Cada linha, com que frequência foi executada e quanto
tempo levou.

Na maioria das vezes, isso será código de plugin que a usuária não está
familiarizada com, mas se você está investigando alguma questão específica, pule
direto para o final do arquivo. Aqui estarão duas sessões diferentes: `FUNCTIONS
SORTED ON TOTAL TIME` ("_funções classificadas pelo tempo total_") e `FUNCTIONS
SORTED ON SELF TIME` ("_funções classificadas pelo tempo prórprio_") que são
puro ouro. Basta bater olho e você poderá ver se uma certa função tá levando
muito tempo.

## Depurando Vim scripts

Se você já usou alguma vez um depurador de linha de comando antes, o `:debug` 
irá rapidamente lhe parecer familiar.

Simplesmente coloque `:debug` antes de qualquer outro comando e você você
entrará no modo de depuração. Isso quer dizer que a execução irá parar na
primeira linha que está para ser executada, e essa linha será mostrada

Veja `:h >cont` e abaixo para ver os 6 comandos de depuração disponíveis e note,
que assim como no gdb e depuradores similares, você também pode usar a forma
curta deles: `c`, `q`, `n`, `s`, `i` e `f`.

Tirando esses, você é livre para usar qualquer comando do Vim, por exemplo
`:echo minhavariavel`, que será executado no context da posição atual no código.

Você basicamente obtém um [REPL](https://es.wikipedia.org/wiki/REPL) pelo simple
uso de `:debug 1`.

Seria muito sofrido se você tivesse que ir passo após passo através de cada
linha, então é claro que você pode definir pontos de interrupção também. (Pontos
de interrupção são chamados de pontos de interrupção - "_breakpoints_" - porque
a execução é parada quando eles são atingidos, e assim você pode simplesmente
pular código que não interessa). Veja `:h :breakadd`, `:h :breakdel`, e `:h
breaklist` para mais detalhes.

Vamos assumir que você queira saber qual código que é rodado toda vez que você
salva um arquivo:

```vim
:au BufWritePost
" signify  BufWritePost
"     *         call sy#start()
:breakadd func *start
:w
" Breakpoint in "sy#start" line 1
" Entering Debug mode.  Type "cont" to continue.
" function sy#start
" line 1: if g:signify_locked
>s
" function sy#start
" line 3: endif
>
" function sy#start
" line 5: let sy_path = resolve(expand('%:p'))
>q
:breakdel *
```

Como você pode ver, usando `<cr>` irá repetir o comando de depuração anterior,
`s` nesse caso.

`:debug` pode ser usado em combinação a opção de [verbosidade](#verbosidade).

## Depurando arquivos de sintáxe

Arquivos de sintáxe são com frequência a causa de lentidões devido a expressões
regulares erradas e/ou complexas. Se a
[característica](#que-tipo-de-vim-eu-estou-rodando) `+profile` foi compilada, o
Vim apresenta o comando `:syntime` que é super útil.

```vim
:syntime on
" hit <c-l> a few times to redraw the window which causes the syntax rules to get applied again
:syntime off
:syntime report
```

A saída desse comando contém medidores importantes. Como por exemplo você pode
ver qual regexp leva muito tempo e deveria ser optimizada ou quais expressões
regulares são usadas todo tempo mais que quase nunca batem.

Veja `:h :syntime`.

# Diversos

## Recursos adicionais

| Recurso | Descrição |
|----------|-------------|
| [Seven habits of effective text editing](http://www.moolenaar.net/habits.html)
| Por Bram Moolenaar, o autor do Vim. |
| [Seven habits of effective text editing 2.0
(PDF)](http://www.moolenaar.net/habits_2007.pdf) | Veja acima. |
| [IBM DeveloperWorks: Scripting the Vim
editor](http://www.ibm.com/developerworks/views/linux/libraryview.jsp?sort_order=asc&sort_by=Title&search_by=scripting+the+vim+editor)
| Série de 5 partes sobre Vimscript. |
| [Learn Vimscript the Hard Way](http://learnvimscriptthehardway.stevelosh.com)
| Construa um plugin para o Vim desde o princípio. |
| [Practical Vim (2nd
Edition)](http://www.amazon.com/Practical-Vim-Edit-Speed-Thought/dp/1680501275/)
| Facilmente o melhor livre sobre o Vim. |
| [Vimcasts.org](http://vimcasts.org/episodes/archive) | Vim screencasts. |
| [wincent's screencasts on YouTube](https://www.youtube.com/channel/UCXPHFM88IlFn68OmLwtPmZA) | Vim screencasts. |
| [Why, oh WHY, do those #?@! nutheads use
vi?](http://www.viemu.com/a-why-vi-vim.html) | Equívocos comuns explicados. |
| [Your problem with Vim is that you don't grok
vi](http://stackoverflow.com/a/1220118) | Conciso, informativo e correto. Uma
verdadeira gema. |

## Distribuições do Vim 

Distribuições do Vim são agrupamentos de configurações personalizadas e plugins
para o Vim.

Usuários mais avançados sabem como configurar o seu editor, por isso
distribuições são mais focadas em iniciantes. Se você pensar sobre o assunto, é
algo paradoxal: fazer ficar ainda mais fácil adicionando ainda mais coisas para
serem aprendidas?

Eu sei que muitas pessoas não querem despediçar horas e mais horas para
personalizar um editor de texto (e na verdade, você nunca pára de customizar o
seu vimrc depois que tiver pegado o jeito da coisa), mais eventualmente você só
ficará eficiente no Vim quando você dedicar o tempo para aprender
apropriadamente.

Repita comigo: "Uma programadora deve conhecer suas ferramentas".

De qualquer forma, se você souber o que você está fazendo, você se inspirar
dando uma olhada em algumas distribuições:

- [cream](http://cream.sourceforge.net)
- [janus](https://github.com/carlhuda/janus.git)
- [spacevim](https://github.com/SpaceVim/SpaceVim)
- [spf13](https://github.com/spf13/spf13-vim)

## Plugins padrões

Para a surpresa de muitos, o  Vim já vem com uma mão cheia de plugins em si
mesmo que são todos carregados por padrão. Confira `:scriptnames` depois que
tiver inicializado o Vim para ver todos os plugins que são carregados por
padrão.

A maioria deles nunca serão usados, portanto desative-os conforme achar melhor.
Eles ainda serão mostrados como carregados, mas apenas as primeiras linhas são
carregadas antes que o Vim comece a resgatar. Nenhum código a mais (mapas,
comandos, lógica) será processado.
Most of them will never get used, so disable them as you see fit. They will
still be shown as sourced, but only the first lines actually get read before Vim
bails out. No further code (mappings, commands, logic) will be processed.

| Plugin     | Desative usando..                   | Ajuda |
|------------|-------------------------------------|------|
| 2html      | `let g:loaded_2html_plugin = 1`     | `:h 2html` |
| getscript  | `let g:loaded_getscriptPlugin = 1`  | `:h pi_getscript` |
| gzip       | `let g:loaded_gzip = 1`             | `:h pi_gzip` |
| logipat    | `let g:loaded_logipat = 1`          | `:h pi_logipat` |
| matchparen | `let g:loaded_matchparen = 1`       | `:h pi_paren` |
| netrw      | `let g:loaded_netrwPlugin = 1`      | `:h pi_netrw` |
| rrhelper   | `let g:loaded_rrhelper = 1`         | `:e $VIMRUNTIME/plugin/rrhelper.vim` |
| spellfile  | `let g:loaded_spellfile_plugin = 1` | `:h spellfile.vim` |
| tar        | `let g:loaded_tarPlugin = 1`        | `:h pi_tar` |
| vimball    | `let g:loaded_vimballPlugin = 1`    | `:h pi_vimball` |
| zip        | `let g:loaded_zipPlugin = 1`        | `:h pi_zip` |

## Remapear o CapsLock para ser um outro Control

O CapsLock faz pare do time das teclas mais inúteis do teclado, por outro lado é
uma tecla muito mais fácil de ser alcançada que a tecle Control, já que está
localizada na [linha
central](https://raw.githubusercontent.com/mhinz/vim-galore/master/static/images/content-homerow.png)
do seu teclado. Remapear o CapsLock para Control é um ótimo jeito de prevenir ou
menos reduzir [lesão por esforço
repetitivo](https://pt.wikipedia.org/wiki/Les%C3%A3o_por_esfor%C3%A7o_repetitivo)
se você programar muito.

Atenção: Quando você se acostumar a isso, você não poderá mais viver sem.

**macOS**:

`System Preferences -> Keyboard -> Keyboard Tab -> Modifier Keys`. Mude
"CapsLock" para "Control".

**Linux**:

Para mudar as teclas no X, coloque isso no seu `~/.xmodmap`:

    remove Lock = Caps_Lock
    keysym Caps_Lock = Control_L
    add Control = Control_L

Em seguida avalie com `$ xmodmap ~/.xmodmap`.

Uma alternativa seria usar o [caps2esc](https://github.com/oblitum/caps2esc) ou
o [xcape](https://github.com/alols/xcape).

**Windows**:

Veja [superuser.com: Map Caps-Lock to Control in Windows
8.1](http://superuser.com/questions/764782/map-caps-lock-to-control-in-windows-8-1).

## Ovos de páscoa

| Comando   | Mensagem |
|-----------|---------|
| `:Ni!` | `Do you demand a shrubbery?` |
| `:h 'sm'` | `NOTE: Use of the short form is rated PG.` |
| `:h 42` | `What is the meaning of life, the universe and everything? Douglas Adams, the only person who knew what this question really was about is now dead, unfortunately.  So now you might wonder what the meaning of death is...` |
| `:h UserGettingBored` | `When the user presses the same key 42 times. Just kidding! :-)` |
| `:h bar` | `Ceci n'est pas une pipe.` |
| `:h holy-grail` | `You found it, Arthur!` |
| `:h map-modes` | `:nunmap can also be used outside of a monastery.` |
| `:help!` | `E478: Don't panic!` (Glitch? When used in a help buffer (`buftype=help`) this works like `:h help.txt` instead.) |
| `:smile` | Try it out yourself. ;-) Added in 7.4.1005. |

## Por que hjkl para navegação?

Quando [Bill Joy](https://pt.wikipedia.org/wiki/Bill_Joy) criou o 
[vi](https://pt.wikipedia.org/wiki/Vi), o predecessor do Vim, ele o fez em um 
[ADM-3A](https://en.wikipedia.org/wiki/ADM-3A) que não tinha nenhuma tecla extra
para movimentar o cursor, e por isso ele usou hjkl, como você já deve ter
adivinhado.

Layout do teclado:
[clique](https://raw.githubusercontent.com/mhinz/vim-galore/master/static/images/content-adm-3a-layout.jpg)

Isso também mostra o porque que `~` é usado para denotar o diretório "home" em
sistemas Unix.

# Problemas comuns

## Edição de arquivos pequenos está lenta

Há duas coisas que podem ter um grande impacto sobre a performance:

1. *Expressões regulares* complexas. Em particular, o arquivo de sintáxe para
Ruby fez com que pessoas experienciassem lentidões no passado. (Veja também
[Depurando arquivos de sintáxe](#Depurando-arquivos-de-sintáxe).)
2. *Redimensionamentos de tela*. Certas características forçam o
redimensionamento de todas as linhas.

| Típico culpado             | Por que?                                                                                                          | Solução?                                                                                              |
|----------------------------|-------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| `:set cursorline`          | Faz com que todas as linhas sejam redimensionadas.                                                                | `:set nocursorline`                                                                                   |
| `:set cursorcolumn`        | Faz com que todas as linhas sejam redimensionadas.                                                                | `:set nocursorcolumn`                                                                                 |
| `:set relativenumber`      | Faz com que todas as linhas sejam redimensionadas.                                                                | `:set norelativenumber`                                                                               |
| `:set foldmethod = syntax` | Se o arquivo de sintáxe já estiver lento, isso fará a coisa ficar ainda pior.                                     | `:set foldmethod=manual`, `:set foldmethod=marker` ou [FastFold](https://github.com/Konfekt/FastFold) |
| `:set synmaxcol  = 3000`   | Devido à representação interna, o Vim em geral tem problemas com linhas longas. Realça colunas até a coluna 3000. | `:set synmaxcol=200`                                                                                  |
| matchparen.vim             | Carregado por padrão. Usa expressões regulares para encontrar o parênteses que faz companhia.                     | Desativar o plugin: `:h matchparen`                                                                   |

**NOTA**: Você só precisa agir assim caso esteja experienciando problemas reais
de performance. Na maioria dos casos, usar alguma das coisas mencionadas acima
é perfeitamente aceitável.

## Edição de arquivos grandes está lenta

O maior problema com arquivos grandes é que o Vim lê o arquivo inteiro de uma
vez. Isso é feito por conta da maneira em que os buffers são representados
internalmente. ([Discussão na vim_dev@](https://groups.google.com/forum/#!topic/vim_dev/oY3i8rqYGD4/discussion))

Se você quer apenas ler, `tail hugefile | vim -`

Se você pode viver sem a sintáxe, configurações e plugins por um momento:

```
$ vim -u NONE -N
```

Isso deveria fazer com que a navegação fique um bocado mais ligeira,
especialmente já que nenhuma expressão regular (custosa) é usada para o realce
de sintáxe. Você deveria também falar pro Vim não usar os arquivos de troca
("_swapfiles_") e os arquivos viminfo para evitar atrados longos ao escrever:

```
$ vim -n -u NONE -i NONE -N
```

Resumindo, evite usar o Vim quando pretender escrever realmente gigantescos. :\

## Colar entre parenteses (ou porque eu tenho que configurar 'paste' o tempo
todo?)

O modo de colar entre parenteses permite que emuladores de terminal possam
distinguir entre texto digitado e texto colado.

Você já tentou alguma vez colar código no Vim e em seguida tudo parecia
bangunçado?

Isso só acontece se você colar via `cmd+v`, `shift-insert`, `middle-click` etc.
porque você está simplesmente jogando texto no emulador de terminal. O Vim não
sabe que você acabou de colar o texto, ele pensa que você é uma digitadora
extremamente veloz. E assim sendo, ele tenta indentar as linhas e acaba
falhando.

Obviamente, isso não é um problema se você colar usando os registradores do Vim,
como `"+p`, pois nesse caso o Vim sabe que você está na verdade colando texto.

Para contornar essa situação, você precisa configurar com `:set paste`, e o
texto será colado como ele é. Veja `:h 'paste'` e `:h 'pastetoggle'`.

Se você está cansado de ficar ativando `'paste'` o tempo todo, dê uma olhada
nesse plugin que faz exatamente isso por você:
[bracketed-paste](https://github.com/ConradIrwin/vim-bracketed-paste).

Leitura adicional (em _inglês_) do mesmo autor do plugin: [aqui](http://cirw.in/blog/bracketed-paste).

**Neovim**: O Neovim tenta fazer tudo isso ficar mais harmonioso e configura a
colagem entre parenteses automaticamente se o emulador de terminal tiver suporte
para ela.

## Atrasos ao usar a tecla de escape no terminal

Se você vive na linha de comando, você provavelmente usa algo chamado _emulador
de terminal_ como o xterm, gnome-terminal, iTerm2, etc. (Ao invés de um 
[terminal real](https://pt.wikipedia.org/wiki/Terminal_(inform%C3%A1tica)).

Assim como os seus ancestrais, emuladores de terminal usam [sequencias de
escape](https://pt.wikipedia.org/wiki/Sequ%C3%AAncia_de_escape) para controlar
coisas como a movimentação do cursor, mudança da cor do texto, etc.
Elas são simplesmente "_strings_" de caractéres de ASCII começando com um
caractére de escape (mostradas em [notação com
circumfléxo](https://pt.wikipedia.org/wiki/Nota%C3%A7%C3%A3o_com_circunflexo)
como `^[`). Quando esse tipo de string chega, o emulador de terminal confere a
ação que acompanha no banco de dados
[terminfo](https://en.wikipedia.org/wiki/Terminfo).

Para deixar o problema mais claro, eu irei primeiro explicar como funciona o
mapeamento do esgotamento de tempo ("_timeouts_"). Eles sempre acontecem quando
existe alguma ambiguidade entre os mapas:

```vim
:nnoremap ,a  :echo 'foo'<cr>
:nnoremap ,ab :echo 'bar'<cr>
```

Ambos os mapas funcionam como esperado, mais ao digitar `,a`, haverá um atraso
de 1 segundo, porque o Vim espera para saber se a usuária irá pressionar um
outro `b` ou não.

Sequências de escape apresentam o mesmo problema:

- `<esc>` é muito usado para retornar ao modo normal ou para terminar uma ação.
- Teclas do cursor são encodificadas usando sequências de escape.
-O Vim o espera que o <kbd>Alt</kbd> (também chamado de _tecla Meta_) envie uma
própria encodificação de 8-bit com o bit alto configurado, mas muitos emuladores
de terminal não suportam isso (ou não ativam isso por padrão) e acabam enviando
uma sequência de escape ao contrário.

Você pode testar isso assim: `vim -u NONE -N` e digitar `i<c-v><left>` e você
verá uma sequência inserida que começa com `^[` que denota o caractére de
escape.

Colocando de outra forma, o Vim na verdade passa por um grande desafio para
distinguir entre um `<esc>` que foi digitado e uma sequência de escape.

Por padrão, o Vim usa `:set timeout timeoutlen=1000`, então quando houver
ambiguidade entre mapas _e_ códigos de tecla ele irá atrasar em 1 segundo. Esse
é um valão saudável para mapas, mas você pode definir o esgotamento de tempo
("_timeout_") para códigos de tecla a parte, que acaba sendo o jeito mais comum
para contornar todo esse problema:

```vim
set timeout           " para mapas
set timeoutlen=1000   " valor padrão
set ttimeout          " para códigos de tecla
set ttimeoutlen=10    " valor pequeno e imperceptível
```

Em `:h ttimeout` você encontrará uma pequena tabela demonstrando a relação entre
essas opções.

Se você estiver usando o tmux entre o Vim e o seu emulador de terminal, coloque
também isso aqui em seu `~/.tmux.conf`:

```tmux
set -sg escape-time 0
```

## Função para desfazer pesquisa
### Function search undo

- Um padrão de pesquisa em um comando (`/`, `:substitute`, ...) muda o "último
  padrão de pesquisa usado". (Ele é salvo no registrador `/`; você pode
  "imprimir" com `:echo @/`).
- Uma mudança simples de texto pode ser refeita com `.`. (Ela é salva no
  registrador `.`; para imprimir use `:echo @.`).

Ambas situações _não são_ o caso se você as fizer a partir de uma função! Por
isso você não pode realçar palavras facilmente a partir de uma função ou refazer
mudanças de texto feitas por uma função.

Ajuda: `:h function-search-undo`

# Caprichos técnicos

## Nova linha usada para NUL

Caractéres NULOS (ou "_NUL characters_", `\0`) em um arquivo, são guardados como uma nova linha (ou "_Newline_", `\n`) na memória e mostrados em um buffer como `^@`.

Veja `man 7 ascii` e `:h NL-used-for-Nul` para mais informação.
