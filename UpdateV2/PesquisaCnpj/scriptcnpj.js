const estadoNomes = {
    "RO": "Rondônia",
    "AC": "Acre",
    "AM": "Amazonas",
    "RR": "Roraima",
    "PA": "Pará",
    "AP": "Amapá",
    "TO": "Tocantins",
    "MA": "Maranhão",
    "PI": "Piauí",
    "CE": "Ceará",
    "RN": "Rio Grande do Norte",
    "PB": "Paraíba",
    "PE": "Pernambuco",
    "AL": "Alagoas",
    "SE": "Sergipe",
    "BA": "Bahia",
    "MG": "Minas Gerais",
    "ES": "Espírito Santo",
    "RJ": "Rio de Janeiro",
    "SP": "São Paulo",
    "PR": "Paraná",
    "SC": "Santa Catarina",
    "RS": "Rio Grande do Sul",
    "MS": "Mato Grosso do Sul",
    "MT": "Mato Grosso",
    "GO": "Goiás",
    "DF": "Distrito Federal"
};





document.getElementById("btnBrasil").addEventListener("click", async () => {
    const cnpj = document.getElementById("inputCnpj").value.replace(/\D/g, "");
    if (!cnpj) {
        resultado.textContent = "Digite um CNPJ.";
        resultado.style.display = "block";
        return;
    }

    try {
        const resposta = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`);
        if (!resposta.ok) {
            resultado.textContent = "CNPJ não encontrado ou inválido.";
            resultado.style.display = "block";
            return;
        }

        const dados = await resposta.json();
        formatar(dados);



    } catch (erro) {
        resultado.textContent = "Erro ao consultar API.";
        resultado.style.display = "block";
        console.error(erro);
    }
    dadosAdicionais.style.display = "none";
    btnMais.textContent = "Mostrar mais";
});

document.getElementById("limpar").addEventListener("click", () => {
    document.getElementById("resultado").style.display = "none";
    document.getElementById("limpar").style.display = "none";
    dadosAdicionais.style.display = "none";
    btnMais.textContent = "Mostrar mais";
});
function formatar(dados) {
    document.getElementById("resultado").style.display = "block";
    document.getElementById("limpar").style.display = "flex";

    const cnpjResu = document.getElementById("cnpjResu");
    const razaoSocial = document.getElementById("razaoSocial");
    const dataInicio = document.getElementById("dataInicio");

    cnpjResu.textContent = formatarCNPJ(dados.cnpj);
    razaoSocial.textContent = dados.razao_social;
    dataInicio.textContent = formatarData(dados.data_inicio_atividade);

    const nomeFantasia = document.getElementById("nomeFantasia");
    const porte = document.getElementById("porte");

    nomeFantasia.textContent = dados.nome_fantasia || "Não informado";
    porte.textContent = dados.porte;

    const cnaePrincipal = document.getElementById("cnaePrincipal");
    const cnaePrincipalDesc = document.getElementById("cnaePrincipalDesc");

    cnaePrincipal.textContent = dados.cnae_fiscal;
    cnaePrincipalDesc.textContent = dados.cnae_fiscal_descricao;

    const naturezaJuridica = document.getElementById("naturezaJuridica");
    const capitalSocial = document.getElementById("capitalSocial");

    naturezaJuridica.textContent = dados.natureza_juridica;
    capitalSocial.textContent = dados.capital_social.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    const logradouro = document.getElementById("logradouro");
    const numero = document.getElementById("numero");
    const complemento = document.getElementById("complemento");
    const bairro = document.getElementById("bairro");
    const cep = document.getElementById("cep");
    const municipio = document.getElementById("municipio");
    const estado = document.getElementById("estado");

    logradouro.textContent = dados.logradouro;
    numero.textContent = dados.numero;
    complemento.textContent = dados.complemento || "-";
    bairro.textContent = dados.bairro;
    cep.textContent = dados.cep;
    municipio.textContent = dados.municipio;
    estado.textContent = estadoNomes[dados.uf] || dados.uf;

    const email = document.getElementById("email");
    const telefone1 = document.getElementById("telefone1");
    const telefone2 = document.getElementById("telefone2");

    email.textContent = dados.email || "-";
    telefone1.textContent = dados.ddd_telefone_1 || "-";
    telefone2.textContent = dados.ddd_telefone_2 || "-";

    const situacaoCadastral = document.getElementById("situacaoCadastral");
    const descricaoSituacao = document.getElementById("descricaoSituacao");
    const dataSituacao = document.getElementById("dataSituacao");

    situacaoCadastral.textContent = dados.descricao_situacao_cadastral;
    descricaoSituacao.textContent = dados.descricao_motivo_situacao_cadastral;
    dataSituacao.textContent = formatarData(dados.data_situacao_cadastral);

    const cnaesSecundarios = document.getElementById("cnaesSecundarios");
    cnaesSecundarios.innerHTML = "";
    dados.cnaes_secundarios.forEach(cnae => {
        const p = document.createElement("p");
        p.textContent = `${cnae.codigo} - ${cnae.descricao}`;
        cnaesSecundarios.appendChild(p);
    });

    const qsa = document.getElementById("qsa");
    qsa.innerHTML = "";

    dados.qsa.forEach((socio, index) => {
        const div = document.createElement("div");
        div.classList.add("socio");

        div.innerHTML = `
    <p><strong>Sócio ${index + 1}</strong></p>
    <p>Nome: ${socio.nome_socio || "-"}</p>
    <p>Qualificação: ${socio.qualificacao_socio || "-"}</p>
    <p>Faixa Etária: ${socio.faixa_etaria || "-"}</p>
    <p>CPF/CNPJ do Sócio: ${socio.cnpj_cpf_do_socio || "-"}</p>`;

        qsa.appendChild(div);
    });
    // adicionais (são dados menso relevantes que a api tras)

    const descricaoMatrizFilial = document.getElementById("descricaoMatrizFilial");
    const identificadorMatrizFilial = document.getElementById("identificadorMatrizFilial");

    const situacaoCadastralCodigo = document.getElementById("situacaoCadastralCodigo");
    const motivoSituacaoCodigo = document.getElementById("motivoSituacaoCodigo");

    const codigoPorte = document.getElementById("codigoPorte");
    const codigoNaturezaJuridica = document.getElementById("codigoNaturezaJuridica");

    const tipoLogradouro = document.getElementById("tipoLogradouro");

    const codigoMunicipio = document.getElementById("codigoMunicipio");
    const codigoMunicipioIbge = document.getElementById("codigoMunicipioIbge");

    const pais = document.getElementById("pais");
    const codigoPais = document.getElementById("codigoPais");
    const cidadeExterior = document.getElementById("cidadeExterior");

    const fax = document.getElementById("fax");

    const opcaoSimples = document.getElementById("opcaoSimples");
    const dataOpcaoSimples = document.getElementById("dataOpcaoSimples");
    const dataExclusaoSimples = document.getElementById("dataExclusaoSimples");

    const opcaoMei = document.getElementById("opcaoMei");
    const dataOpcaoMei = document.getElementById("dataOpcaoMei");
    const dataExclusaoMei = document.getElementById("dataExclusaoMei");

    const regimeTributario = document.getElementById("regimeTributario");

    const enteFederativo = document.getElementById("enteFederativo");

    const situacaoEspecial = document.getElementById("situacaoEspecial");
    const dataSituacaoEspecial = document.getElementById("dataSituacaoEspecial");


    descricaoMatrizFilial.textContent = dados.descricao_identificador_matriz_filial || "-";
    identificadorMatrizFilial.textContent = dados.identificador_matriz_filial || "-";

    situacaoCadastralCodigo.textContent = dados.situacao_cadastral || "-";
    motivoSituacaoCodigo.textContent = dados.motivo_situacao_cadastral || "-";

    codigoPorte.textContent = dados.codigo_porte || "-";
    codigoNaturezaJuridica.textContent = dados.codigo_natureza_juridica || "-";

    tipoLogradouro.textContent = dados.descricao_tipo_de_logradouro || "-";

    codigoMunicipio.textContent = dados.codigo_municipio || "-";
    codigoMunicipioIbge.textContent = dados.codigo_municipio_ibge || "-";

    pais.textContent = dados.pais || "-";
    codigoPais.textContent = dados.codigo_pais || "-";
    cidadeExterior.textContent = dados.nome_cidade_no_exterior || "-";

    fax.textContent = dados.ddd_fax || "-";

    opcaoSimples.textContent = dados.opcao_pelo_simples ?? "-";
    dataOpcaoSimples.textContent = dados.data_opcao_pelo_simples || "-";
    dataExclusaoSimples.textContent = dados.data_exclusao_do_simples || "-";

    opcaoMei.textContent = dados.opcao_pelo_mei ?? "-";
    dataOpcaoMei.textContent = dados.data_opcao_pelo_mei || "-";
    dataExclusaoMei.textContent = dados.data_exclusao_do_mei || "-";

    

    enteFederativo.textContent = dados.ente_federativo_responsavel || "-";

    situacaoEspecial.textContent = dados.situacao_especial || "-";
    dataSituacaoEspecial.textContent = dados.data_situacao_especial || "-";



}

function formatarData(dataISO) {
    if (!dataISO) return "-";
    const [ano, mes, dia] = dataISO.split("-");
    return `${dia}/${mes}/${ano}`;
}

function formatarCNPJ(cnpj) {
    if (!cnpj) return "-";

    return cnpj
        .replace(/\D/g, "")
        .replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");
}

const btnMais = document.getElementById("btnMais");
const dadosAdicionais = document.getElementById("dadosAdicionais");

btnMais.addEventListener("click", () => {
    if (dadosAdicionais.style.display === "none") {
        dadosAdicionais.style.display = "block";
        btnMais.textContent = "Mostrar menos";
    } else {
        dadosAdicionais.style.display = "none";
        btnMais.textContent = "Mostrar mais";
    }
});
