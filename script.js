<div id="saudacao"></div>

<div id="fraseAgrinho"></div>

<span id="contadorArea"></span>

<span id="contadorParticipacao"></span>

<span id="contadorFecula"></span>

<div id="relogio"></div>
function mostrarResposta(opcao){

    const resposta =
        document.getElementById("respostaQuiz");

    if(opcao === 1){

        resposta.innerHTML = `
        <div style="
            background:#d4edda;
            padding:15px;
            border-radius:10px;
            margin-top:10px;
        ">
            ✅ Resposta Correta!

            <br><br>

            A rotação de culturas melhora a fertilidade do solo,
            reduz a incidência de pragas e ajuda a evitar a erosão,
            sendo uma prática sustentável recomendada para a produção
            de mandioca.
        </div>
        `;

    }else{

        resposta.innerHTML = `
        <div style="
            background:#f8d7da;
            padding:15px;
            border-radius:10px;
            margin-top:10px;
        ">
            ❌ Resposta Incorreta!

            <br><br>

            Queimadas e retirada da vegetação aumentam a erosão,
            empobrecem o solo e prejudicam o meio ambiente.

            A alternativa correta é:
            <strong>Rotação de culturas.</strong>
        </div>
        `;
    }
}