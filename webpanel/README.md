# WEBPANEL (v1)
Este documento foi criado com base nos critérios para o desenvolvolvimento do WEBPANEL - Gerenciador de conteúdos da INNSERE

### Internacionalização
Formato de dados para estrutura do banco de dados

##### Comentários
Formato de bloco de comentários para o arquivo, funcões e métodos e inline

```
TOPO DO ARQUIVO
/**********************************************
Criado por: Nome do Autor
DESCRIÇÃO:
Descrição da funcionalidade do arquivo
***********************************************/

/**********************************************
NOME DA FUNCAO/METODO
Retorno: descrição do retorno esperado da função
***********************************************/

//COMENTÁRIOS GERAIS DE VARIÁVEIS/OBJETOS...
```

### Nomenclaturas
Formato de dados para nomenclaturas de variáveis, métodos e funções

##### Variáveis
Tipo | Abreviatura | Nome da Variável | Resultado
------------ | -------------  | -------------  | -------------
string | str | Nome | strNome
date | dt | Nascimento | dtNascimento
integer | int | Unidades | intUnidades
boolean | bl | Ativo | blAtivo
float | fl | Numero | flNumero
array | ar | ListaUsuarios | arListaUsuarios
double | do | VlrDecimal | dlVlrDecimal
object | obj | Usuario | objUsuario
character | cht | Empresa | chtEmpresa
datetime | dtm | DtCadastro | dtmDtCadastro

##### Métodos
Tipo |  Nome do Método | Resultado
------------ | -------------  | -------------
get | Users | getUsers
post | Users | postUser
put | Users | putUser
delete | Users | deleteUser

##### Funções
Ação | Abreviatura | Nome da Função | Resultado
------------ | -------------  | -------------  | -------------
Cadastrar | cad | User | cadUser
Editar | edit | User | editUser
Listar | list | User | listUsers
Deletar | del | User | delUser