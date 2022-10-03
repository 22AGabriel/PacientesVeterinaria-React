export function validarNombre(input){
    if(input.length >=3 && input.length <= 30){
        return true;
    }else{
        return false;
    }
}

export function validarHoraFecha(input){
    if(input.length > 0 ){
        return true;
    }else{
        return false;
    }
}

export function validarSintomas(input){
    if(input.length >=5 && input.length <= 300){
        return true;
    }else{
        return false;
    }
}
