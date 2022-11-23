function findPassword() {
    let cont=0
    let index=0
    const regex = new RegExp(/55/)
    for(let i=11098; i<56000; i++){
        if(!regex.test(i)) continue
        if(i.toString().split('').sort().join('') != i) continue
        if(cont == 55) index=i
        cont++
    }
    return cont+'-'+index
}
findPassword()