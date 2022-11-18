/*
Un grupo de ciber criminales están usando mensajes encriptados para comunicarse. El FBI nos ha pedido ayuda para descifrarlos.

Los mensajes son cadenas de texto que incluyen números enteros muy largos y espacios en blanco. Aunque los números no parecen tener sentido... una chica llamada Alice ha descubierto que podrían usar el código ASCII de las letras en minúscula.

Con su método ha conseguido descifrar estos mensajes:

"109105100117" -> midu
"9911110010110998101114" -> codember
"9911110010110998101114 109105100117" -> codember midu
"11210897121 116101116114105115" -> play tetris
Pero han interceptado un mensaje más largo que no han podido y nos han dicho que es muy importante que lo descifremos:

11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101

Pistas
Recuerda que los mensajes son cadenas de texto conformadas por números y espacios en blanco.
Parece que los números tienen algo que ver con el código ASCII.
Los espacios en blanco parece que son simplemente espacios...
*/
/* ascii 97 - 122 */
const codigo = "11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101"
const letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
                'o','p','q','r','s','t','u','v','w','x','y','z']
function decifrarMsj(codigo){
    let mensaje = ""
    let key = "97"
    for(let i=0; i<codigo.length; i++){
        if(codigo.charAt(i) === " "){
            mensaje+=" "
            continue
        }
        if(codigo.charAt(i)==9){
            key = codigo.substring(i,i+2)
            i+=1
        } else {
            key = codigo.substring(i,i+3)
            i+=2
        }
        mensaje += letras[key-97]
    }
    return mensaje
}

//Version 2 usando metodos de arrays y strings

function descifrarMsjV2(codigo) {
    let mensaje = ""
    codigo.split(" ").map(asciiWord => { // separo cada numero como una palabra
        let asciiChars = asciiWord.match(/1\d{2}|9\d{1}/g) // armo un array de chars Ascii
        mensaje += asciiChars.map(ascii => String.fromCharCode(ascii)) // cambio los ascii por sus letras
        .toString().replaceAll(',',"")+" " // convierto el array de chars en un string y elimino las comas
                                           // finalmente se concatena la palabra al mensaje
    })
    return mensaje
}

//console.log(decifrarMsj(codigo))
console.log(descifrarMsjV2(codigo))