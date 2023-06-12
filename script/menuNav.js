


const btnlink = document.querySelectorAll('#painel-menu a')
const btnCheck = document.getElementById('inCheck')
const painelNav = document.getElementById('painel-menu')
const btnCheckBar = document.getElementById('btncheckBar')

const btncheckContato = document.getElementById('checkCall')



clickMenuNav(btnlink)

btnCheck.addEventListener('click', () => {
    btnNavMobile()
})



function clickMenuNav(e){

    let tam = e.length

    for (const i of btnlink) {

        i.addEventListener('click', checkEventoNav)
        
        
        
        
    }
    

}

function checkEventoNav(){
     if(btnCheck.checked == true){
        btnCheck.checked = false
     }
}




// função para gerenciar o evento de transição do elemento id=painelContato
function btnPainelCall(){

    btncheckContato.checked = true
    
    btnCheck.checked = false


    /// caso selecionado a opção contato o menu navegação mobile sera fechado
    btnNavMobile()

    
    
}

function btnNavMobile(){
    if(btnCheck.checked == true){
        painelNav.style.right = '0'

    }else{
        painelNav.style.right = '-100' + '%'
    }
}

















