document.getElementById('card').style.setProperty('display', 'none', 'important')

function procurar(){
    document.getElementById('card').style.setProperty('display', 'block', 'important')
    let pais = document.getElementById('pais').value
    let finalURL = `https://restcountries.com/v3.1/name/${pais}?fullText=true`
    console.log(finalURL)
    fetch(finalURL)
        .then(function(response){
            return response.json()
        })
        .then(function(data){

            let bandeira = document.getElementById('bandeira')
            let nome = document.getElementById('nome')
            let capital = document.getElementById('capital')
            let populacao = document.getElementById('populacao')
            let cont = document.getElementById('cont')

            nome.innerHTML = pais
            capital.innerHTML = data[0].capital[0]
            populacao.innerHTML = data[0].population
            cont.innerHTML = data[0].continents[0]
            bandeira.src = data[0].flags.svg
        })
}