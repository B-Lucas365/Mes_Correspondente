var mes
function  verificar() {

    mes = parseInt(document.getElementById("mes").value)
    switch(mes){
        case 1: document.formcalend.f_nomemes.value = 'Janeiro'; break;
        case 2: document.formcalend.f_nomemes.value = 'Fevereiro'; break;
        case 3: document.formcalend.f_nomemes.value = 'Março'; break;
        case 4: document.formcalend.f_nomemes.value = 'Abril'; break;
        case 5: document.formcalenf.f_nomemes.value = 'Maio'; break;
        case 6: document.formcalend.f_nomemes.value = 'Junho'; break;
        case 7: document.formcalend.f_nomemes.value = 'Julho'; break;
        case 8: document.formcalend.f_nomemes.value = 'Agosto'; break;
        case 9: document.formcalend.f_nomemes.value = 'Setembro'; break;
        case 10: document.formcalend.f_nomemes.value = 'Outubro'; break;
        case 11: document.formcalend.f_nomemes.value = 'Novembro';break;
        case 12: document.formcalend.f_nomemes.value = 'Dezembro';break;
        default: document.formcalend.f_nomemes.value = 'Mês Invalido!';break;
    }
    
}
/*neste exemplo criamos 12 casos posiveis, onde selecionamos os valores que correspondem ao mes do ano.
a espreção do codigo se lê da seguinte maneira. no documento, em formcalendo, o input com nome f_nomemes, em seu valor recebera...
desta forma estamos inserindo no inpute os valores que descrevemos caso uma determinada linha de codigo seja verdadeira*/ 