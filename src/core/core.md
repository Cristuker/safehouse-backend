Aqui teremos o core da aplicação o coração do código.
As regras de negócios, use cases e excessões serão implementadas aqui, pois elas dissem diretamente como o núcleo do código deve funcionar, indenpendete do banco que estejamos consultando e independente da forma como estamos sendo acessados.

Pastas:
* domain // classes que serão usadas como base no sistema.
* exception // excessões de que serão usadas no sistema.
* service ou usecase // funções ou classes que implementam APENAS as regras de negócios.
* utils