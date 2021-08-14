function jurosCompostos(){
    let capital = document.getElementById("capital").value
    let juros = (document.getElementById("taxa").value)/100
    let periodos = document.getElementById("periodo").value

    let montante = capital*(1+juros)**periodos
    let rendimento = montante - capital
    montante = montante.toFixed(2)
    rendimento = rendimento.toFixed(2)
    document.querySelector(".resultado").innerHTML = `<p>Valor investido: ${capital} </p><p>Rendimento dos Juros: ${rendimento}</p><p>Valor Total: ${montante}</p>`

}