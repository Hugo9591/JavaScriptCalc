const btn1 = document.querySelector('#btn1');
const resultadoInput = document.querySelector('#resultado');


const agregarResultado = valor => {
    resultadoInput.value += valor;
}

const borrarInput = ()=>{
    resultadoInput.value = '';
}

const operaciones = () =>{
    try{
        let valor = resultadoInput.value;
        let operacionEvaluar = valor.replace(/x/g,'*');
        resultadoInput.value = eval(operacionEvaluar.toString());
    }catch(error){
        resultadoInput.value = 'Error';
    }
}

document.querySelectorAll('.btn').forEach(boton => {
    
    boton.addEventListener('click', function(){
        
        const valor = this.getAttribute('data-value');

        if(valor === 'c'){
            borrarInput();
        }else if(valor === '='){
            operaciones();
        }else{
            agregarResultado(valor);
        }
        
    });
});