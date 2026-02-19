const bColar = document.getElementById("bColar");

bColar.onclick = async () => {

    try {
        const texto = await navigator.clipboard.readText();

        echave.value = texto.replace(/[^0-9]/g, '');

        echave.dispatchEvent(new Event("input"));


    } catch (erro) {
        alert("Não foi possível colar o conteúdo");
    }
}




const universalLink = "https://www.nfe.fazenda.gov.br/portal/consultaRecaptcha.aspx?tipoConsulta=resumo&tipoConteudo=7PhJ%20gAVw2g=";
const universalLink2 = "https://meudanfe.com.br/#"


const satLinks = {
    "11": "https://sistemas.sefaz.ro.gov.br/",
    "12": "https://www.sefaz.ac.gov.br/sat/",
    "13": "https://sistemas.sefaz.am.gov.br/nfceweb/formConsulta.do",
    "14": "https://www.sefaz.rr.gov.br/nfc-e",
    "15": "https://app.sefa.pa.gov.br/consulta-nfce/#/consulta",
    "16": "https://www.sefaz.ap.gov.br/sate/seg/SEGf_AcessarFuncao.jsp?cdFuncao=FIS_1261",
    "17": "http://www.sefaz.to.gov.br/nfce/consulta.jsf",
    "21": "http://www.nfce.sefaz.ma.gov.br/portal/consultarnfce.jsp",
    "22": "https://www.sefaz.pi.gov.br/nfce/qrcode",
    "23": "https://cfe.sefaz.ce.gov.br/mfe/servicos#/cupom-fiscal",
    "24": "http://nfce.set.rn.gov.br/consultarNFCe.aspx",
    "25": "https://www.sefaz.pb.gov.br/servirtual/documentos-fiscais/nfc-e/consultar-nfc-e",
    "26": "http://nfe.sefaz.pe.gov.br/nfe-web/consNfe",
    "27": "https://nfce.sefaz.al.gov.br/consultaNFCe.htm",
    "28": "https://nfce.sefaz.se.gov.br/portal/portalNoticias.jsp?jsp=barra-menu/servicos/consultaDANFENFCe.htm",
    "29": "http://nfe.sefaz.ba.gov.br/servicos/nfce/Modulos/Geral/NFCEC_consulta_chave_acesso.aspx",
    "31": "http://nfce.fazenda.mg.gov.br/portalnfce/sistema/consultaarg.xhtml",
    "32": "http://app.sefaz.es.gov.br/ConsultaNFCe/Default.aspx",
    "33": "https://consultadfe.fazenda.rj.gov.br/consultaDFe/paginas/consultaChaveAcesso.faces",
    "35": "https://satsp.fazenda.sp.gov.br/COMSAT/Public/ConsultaPublica/ConsultaPublicaCfe.aspx",
    "41": "https://sped.fazenda.pr.gov.br/NFCe/webservices/sped/nfce/completa",
    "42": "https://sat.sef.sc.gov.br/tax.net/Sat.Dfe.NFCe.Web/Consultas/ConsultaPublicaNFCe.aspx",
    "43": "https://www.sefaz.rs.gov.br/NFE/NFE-NFC.aspx",
    "50": "http://www.dfe.ms.gov.br/nfce/consulta/",
    "51": "https://www.sefaz.mt.gov.br/nfce/consultanfce",
    "52": "https://www.go.gov.br/servicos/servico/consultar-nota-fiscal-eletronica-pela-chave-de-acesso",
    "53": "https://ww1.receita.fazenda.df.gov.br/servicos"
};

const nfceLinks = {
    "11": "https://www.nfce.sefin.ro.gov.br/",
    "12": "https://www.sefaznet.ac.gov.br/nfce/consulta",
    "13": "https://sistemas.sefaz.am.gov.br/nfceweb/formConsulta.do",
    "14": "https://www.sefaz.rr.gov.br/nfce/servlet/wp_consulta_nfce",
    "15": "https://app.sefa.pa.gov.br/consulta-nfce/#/consulta",
    "16": "https://www.sefaz.ap.gov.br/sate/seg/SEGf_AcessarFuncao.jsp?cdFuncao=FIS_1261",
    "17": "http://www.sefaz.to.gov.br/nfce/consulta.jsf",
    "21": "http://www.nfce.sefaz.ma.gov.br/portal/consultarnfce.jsp",
    "22": "https://www.sefaz.pi.gov.br/nfce/qrcode",
    "23": "http://nfce.sefaz.ce.gov.br/pages/consultaNota.jsf",
    "24": "http://nfce.set.rn.gov.br/consultarNFCe.aspx",
    "25": "https://www.sefaz.pb.gov.br/servirtual/documentos-fiscais/nfc-e/consultar-nfc-e",
    "26": "https://nfce.sefaz.pe.gov.br:444/nfce-web/consNfce",
    "27": "https://nfce.sefaz.al.gov.br/consultaNFCe.htm",
    "28": "https://nfce.sefaz.se.gov.br/portal/portalNoticias.jsp?jsp=barra-menu/servicos/consultaDANFENFCe.htm",
    "29": "http://nfe.sefaz.ba.gov.br/servicos/nfce/default.aspx",
    "31": "http://nfce.fazenda.mg.gov.br/portalnfce/sistema/consultaarg.xhtml",
    "32": "http://app.sefaz.es.gov.br/ConsultaNFCe/Default.aspx",
    "33": "https://consultadfe.fazenda.rj.gov.br/consultaDFe/paginas/consultaChaveAcesso.faces",
    "35": "https://www.nfce.fazenda.sp.gov.br/NFCeConsultaPublica/Paginas/ConsultaPublica.aspx",
    "41": "https://sped.fazenda.pr.gov.br/NFCe/webservices/sped/nfce/completa",
    "42": "https://sat.sef.sc.gov.br/tax.net/Sat.Dfe.NFCe.Web/Consultas/ConsultaPublicaNFCe.aspx",
    "43": "https://www.sefaz.rs.gov.br/NFE/NFE-NFC.aspx",
    "50": "http://www.dfe.ms.gov.br/nfce/consulta/",
    "51": "http://www.sefaz.mt.gov.br/nfce/consultanfce",
    "52": "http://nfe.sefaz.go.gov.br/nfeweb/sites/nfe/consulta-completa",
    "53": "https://ww1.receita.fazenda.df.gov.br/servicos"
};


const mesNome = {
    "01": "Jan",
    "02": "Fev",
    "03": "Mar",
    "04": "Abr",
    "05": "Mai",
    "06": "Jun",
    "07": "Jul",
    "08": "Ago",
    "09": "Set",
    "10": "Out",
    "11": "Nov",
    "12": "Dez"
};
const estadoNomes = {
    "11": "Rondônia",
    "12": "Acre",
    "13": "Amazonas",
    "14": "Roraima",
    "15": "Pará",
    "16": "Amapá",
    "17": "Tocantins",
    "21": "Maranhão",
    "22": "Piauí",
    "23": "Ceará",
    "24": "Rio Grande do Norte",
    "25": "Paraíba",
    "26": "Pernambuco",
    "27": "Alagoas",
    "28": "Sergipe",
    "29": "Bahia",
    "31": "Minas Gerais",
    "32": "Espírito Santo",
    "33": "Rio de Janeiro",
    "35": "São Paulo",
    "41": "Paraná",
    "42": "Santa Catarina",
    "43": "Rio Grande do Sul",
    "50": "Mato Grosso do Sul",
    "51": "Mato Grosso",
    "52": "Goiás",
    "53": "Distrito Federal"
};


const echave = document.getElementById("chave");

echave.addEventListener("input", () => {

    verificar();
});



function verificar() {


    document.getElementById("link1").style.display = "none";
    document.getElementById("link2").style.display = "none";
    document.getElementById("botoes1").style.display = "none";
    document.getElementById("botoes2").style.display = "none";
    document.getElementById("mensagem").style.display = "none";
    document.getElementById("resultado").style.display = "none";


    let chave = echave.value.replace(/[^0-9]/g, '');

    if (chave.length < 44) {
        document.getElementById("mensagem").style.display = "none";
        return;
    }

    if (chave.length > 44) {
        escreverMensage("Chave invalida. \n Verifique se os digitos estao corretos e tente novamente.");

        return;
    }

    const uf = chave.slice(0, 2);
    const mes = chave.slice(4, 6);
    const ano = chave.slice(2, 4);
    const cnpj = chave.slice(6, 20);
    const yy = chave.slice(20, 22);
    const sat = chave.slice(22, 25);
    const numero = chave.slice(25, 34);


    let url = '';
    let url2 = ''


    if (Number(mes) < 1 || Number(mes) > 12) {
        escreverMensage("Chave invalida. Digitos 3º e 4º invalidos.");
        document.getElementById("resultado").style.display = "none";
        return;
    }

    if (chave.length === 44 && !estadoNomes[uf]) {
        escreverMensage("Chave invalida. Digitos 1º e 2º, referentes ao estado invalidos.");
        document.getElementById("resultado").style.display = "none";
        return;
    }



    if (yy === "55") {
        url = universalLink;
        url2 = universalLink2;
        document.getElementById("resultado").style.display = "grid";
        document.getElementById("link2").style.display = "flex";
        document.getElementById("botoes2").style.display = "flex";
        link21.href = url;
        link22.href = url2;
        link21.textContent = url;
        link22.textContent = url2;
    } else if (yy === "59") {
        url = satLinks[uf];
        document.getElementById("resultado").style.display = "grid";
        document.getElementById("link1").style.display = "flex";
        document.getElementById("botoes1").style.display = "flex";
        link.href = url;
        link.textContent = url;
    } else if (yy === "65") {
        url = nfceLinks[uf];
        document.getElementById("resultado").style.display = "grid";
        document.getElementById("link1").style.display = "flex";
        document.getElementById("botoes1").style.display = "flex";

        link.href = url;
        link.textContent = url;
    } else if (chave.length === 44) {
        escreverMensage("Chave invalida. Digitos 21º e 22º invalidos.");
        return;
    }



    displayestado.textContent = estadoNomes[uf];
    displaymes.textContent = mes;
    displayano.textContent = "20" + ano;
    displaycnpj.textContent = cnpj;
    displaysat.textContent = sat;
    displaynumero.textContent = numero;



}

document.getElementById("abrirLink").onclick = function () {

    const msg = "Carregando link ...";
    const msgE = "Erro ao abrir apagina";
    document.getElementById("mensagem").style.display = "none";
    escreverMensage(msg);

    if (tempo) {
        clearTimeout(tempo);
    }
    tempo = setTimeout(() => {
        try {
            let chave = echave.value.replace(/[^0-9]/g, '');
            const url = link.href;
            navigator.clipboard.writeText(chave);
            window.open(url, '_blank');

        } catch (E) {
            escreverMensage(msgE);
        }
    }, 1500);

    if (tempo2) {
        clearTimeout(tempo2);
    }
    tempo2 = setTimeout(() => {

    }, 3000);

}





document.getElementById("abrirLink1").onclick = function () {

    const msg = "Carregando link ...";
    const msgE = "Erro ao abrir apagina";
    document.getElementById("mensagem").style.display = "none";
    mensagem.textContent = msg;
    document.getElementById("mensagem").style.display = "block";

    if (tempo) {
        clearTimeout(tempo);
    }
    tempo = setTimeout(() => {
        try {

            let chave = echave.value.replace(/[^0-9]/g, '');
            const url = link21.href;
            navigator.clipboard.writeText(chave);
            window.open(url, '_blank');
            document.getElementById("mensagem").style.display = "none";


        } catch (E) {
            mensagem.textContent = msgE;
            document.getElementById("mensagem").style.display = "block";
        }
    }, 1500);

    if (tempo2) {
        clearTimeout(tempo2);
    }
    tempo2 = setTimeout(() => {

    }, 3000);
}

document.getElementById("abrirLink2").onclick = function () {
    const msg = "Carregando link ...";
    const msgE = "Erro ao abrir apagina";
    document.getElementById("mensagem").style.display = "none";
    mensagem.textContent = msg;
    document.getElementById("mensagem").style.display = "block";

    if (tempo) {
        clearTimeout(tempo);
    }
    tempo = setTimeout(() => {
        try {
            let chave = echave.value.replace(/[^0-9]/g, '');
            const url2 = link22.href;
            navigator.clipboard.writeText(chave);
            window.open(url2, '_blank');
            document.getElementById("mensagem").style.display = "none";
        } catch (E) {
            mensagem.textContent = msgE;
            document.getElementById("mensagem").style.display = "block";
        }
    }, 1500);



    if (tempo2) {
        clearTimeout(tempo2);
    }
    tempo2 = setTimeout(() => {

    }, 3000);

}

let tempo = null;

document.getElementById("copiarChave").onclick = async function () {

    const msg1 = ("Chave copiada com sucesso");
    const msg2 = ("erro ao copiar");
    document.getElementById("mensagem").style.display = "none";

    let chave = echave.value.replace(/[^0-9]/g, '');
    try {
        await navigator.clipboard.writeText(chave);
        mensagem.textContent = msg1;

    } catch (error) {
        mensagem.textContent = msg2;

    }

    document.getElementById("mensagem").style.display = "block";

    if (tempo) {
        clearTimeout(tempo);
    }
    tempo = setTimeout(() => {
        document.getElementById("mensagem").style.display = "none";
    }, 3000);

}


document.getElementById("copiarChave1").onclick = async function () {

    const msg1 = ("Chave copiada com sucesso");
    const msg2 = ("erro ao copiar");
    document.getElementById("mensagem").style.display = "none";
    const echave = document.getElementById("chave");
    let chave = echave.value.replace(/[^0-9]/g, '');
    try {
        await navigator.clipboard.writeText(chave);
        mensagem.textContent = msg1;

    } catch (error) {
        mensagem.textContent = msg2;

    }

    document.getElementById("mensagem").style.display = "block";

    if (tempo) {
        clearTimeout(tempo);
    }
    tempo = setTimeout(() => {
        document.getElementById("mensagem").style.display = "none";
    }, 4000);

}

document.getElementById("pSefaz").onclick = function () {
    document.getElementById("cSefaz").style.display = "flex";
    document.getElementById("cCnpj").style.display = "none";
}


function escreverMensage(msg) {
    let tempoM = null;
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = msg;
    mensagem.style.display = "block";
    if (tempoM) {
        clearTimeout(tempoM);
        tempoM = null;
    }
    tempoM = setTimeout(() => {
        mensagem.style.display = "none";
    }, 8000);
}
