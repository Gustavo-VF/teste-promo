# 🔗 Link SEFAZ

Aplicação web desenvolvida para **simplificar consultas em sistemas da SEFAZ** a partir de uma única chave de acesso.

O sistema trata automaticamente a entrada do usuário, valida a chave e identifica o tipo de documento fiscal, direcionando para o portal correto de consulta.

---

## 🎯 Objetivo

Facilitar o acesso às consultas de documentos fiscais eletrônicos (NF-e, NFC-e e SAT), evitando que o usuário precise identificar manualmente o site correto da SEFAZ de cada estado.

Este projeto foi desenvolvido como **estudo prático**, aplicando conhecimentos de lógica de programação aprendida na faculdade e tecnologias web aprendida de forma autodidata.

---

## ⚙️ Funcionalidades

* Campo único para inserção da chave de acesso
* Limpeza automática da entrada (remoção de caracteres não numéricos)
* Validação do tamanho da chave (44 dígitos)
* Identificação automática de:

  * Estado (UF)
  * Ano e mês de emissão
  * Tipo de documento fiscal
* Redirecionamento para o portal correto da SEFAZ
* Cópia automática da chave para a área de transferência
* Feedback visual ao usuário (mensagens de erro e carregamento)

---

## 🧹 Limpeza automática da chave

A aplicação aceita a chave de acesso mesmo quando ela contém pontos, traços ou texto adicional.

Antes de qualquer validação, o sistema remove automaticamente todos os caracteres que não sejam numéricos.

### Exemplos de entradas aceitas:

* `1234.5678.9123....`
* `1234-5678-9123-...`
* `1234 5678 9123 ...`
* `texto1234 : wifjew: 5678dfg9123...`

Todas as entradas acima são tratadas e convertidas automaticamente para:

```
123456789123...
```

Isso reduz erros de digitação e melhora a experiência do usuário.

---

## 🧠 Lógica de identificação

A chave de acesso segue um padrão oficial de 44 dígitos. A aplicação utiliza partes específicas da chave para identificar o documento:

| Posição | Descrição                  |
| ------- | -------------------------- |
| 1–2     | Código do estado (UF)      |
| 3–4     | Ano de emissão             |
| 5–6     | Mês de emissão             |
| 21–22   | Modelo do documento fiscal |

### Modelos identificados:

* **55** → NF-e
* **59** → SAT
* **65** → NFC-e

Com base nessas informações, o sistema define automaticamente qual portal de consulta deve ser utilizado.

---

## 🛠️ Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Clipboard API
* Manipulação de DOM

---

## ▶️ Como usar

1. Acesse a aplicação pelo navegador
2. Cole ou digite a chave de acesso no campo indicado
3. O sistema fará automaticamente:

   * limpeza da entrada
   * validação da chave
   * identificação do documento
   * exibição do link correto para consulta

🌐 Aplicação online (GitHub Pages):

[https://gustavo-vf.github.io/link-sefaz](https://gustavo-vf.github.io/link-sefaz)

---

## ⚠️ Observações importantes

* Este projeto **não realiza consultas diretas a APIs da SEFAZ**
* O sistema apenas redireciona para os portais oficiais
* As URLs de consulta podem mudar conforme decisões das SEFAZ estaduais
* Não se trata de um sistema oficial

---

## 📚 Motivação

O projeto surgiu da necessidade de **agilizar um processo operacional real**, que exigia múltiplos acessos manuais a diferentes portais da SEFAZ.

Mesmo não atuando na área de sistemas da empresa, a ferramenta passou a ser utilizada por colegas de trabalho, validando sua utilidade prática.

---

## 🤝 Contribuições

Sugestões, melhorias e correções são bem-vindas.
Sinta-se à vontade para abrir uma *issue* ou um *pull request*.

---

## 👤 Autor

**Gustavo Vaz Ferreira**
GitHub: [https://github.com/gustavo-vf](https://github.com/gustavo-vf)
