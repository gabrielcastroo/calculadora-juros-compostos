function jurosCompostos(){

    const capitalInicial = parseFloat(document.getElementById("capital").value)
    const juros = parseFloat((document.getElementById("taxa").value)/100)
    const periodos = parseFloat(document.getElementById("periodo").value)
    const valorMensal = parseFloat(document.getElementById("valorMensal").value)
    var elementos = []
    var montante = capitalInicial
    var valorInvestido = capitalInicial
    var calculo = 0

    for(var i=0; i<periodos; i++){
        calculo = montante*(1+juros)
        montante = valorMensal+calculo
        elementos.push([`Mês ${i+1}`,parseFloat(calculo),parseFloat(valorInvestido)])
        valorInvestido += valorMensal   
    }

    montante = montante.toFixed(2)
    let rendimento = montante - valorInvestido
    rendimento = parseFloat(rendimento.toFixed(2))

    document.querySelector(".resultado").innerHTML = `<p>Valor investido: ${valorInvestido} </p><p>Total em juros: ${rendimento}</p><p>Valor total: ${montante}</p>`
    const descricao = [['Mes', 'Montante', 'Valor investido']]

    const array = descricao.concat(elementos)
    console.log(array)

    function drawChart() {
        const container = document.querySelector('#chart')
        const data = new google.visualization.arrayToDataTable(array)
        const options = {
            title: 'Evolução do Montante',
            height: 400,
            width: 720
        }
        const chart = new google.visualization.LineChart(container)
        chart.draw(data, options)
    }
    google.charts.load('current', { packages: [ 'corechart' ] })
    google.charts.setOnLoadCallback(drawChart)
    console.log(elementos)
}