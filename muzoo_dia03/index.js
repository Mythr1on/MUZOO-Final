let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slides img');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    
    slides.forEach((slide, i) => {
        slide.style.display = i === currentSlide ? 'block' : 'none';
    });
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

// Initialize the slider by showing the first slide
showSlide(currentSlide);


// INFO POPUP

function info_popup(){
    window.alert('Um som estridente é um som que causa ruidos agudos e penetrantes.')
}

function info_popup2(){
    window.alert('Aves de rapina são aves predadoras conhecidas por suas habilidades excepcionais de caça. Elas possuem características distintas que as tornam eficientes caçadoras, como garras afiadas e curvadas para agarrar e matar suas presas, bicos fortes e pontiagudos para despedaçar a carne, e uma visão aguçada para localizar suas presas a grandes distâncias. Entre as principais famílias de aves de rapina estão as falconídeos (falcos e falcões), os accipitrídeos (águias, gaviões e milhafres) e os buteonídeos (buzzards e gaviões). Essas aves desempenham um papel importante no equilíbrio ecológico, controlando populações de pequenos mamíferos, aves e insetos.')
}


// Funções de Acessibilidade

        // Aumentar a fonte
        document.getElementById('btnAumentarFonte').addEventListener('click', function () {
            let body = document.querySelector('body'); 
            let estiloAtual = window.getComputedStyle(body, null).getPropertyValue('font-size'); 
            let tamanhoAtual = parseFloat(estiloAtual); body.style.fontSize = (tamanhoAtual + 1) + 'px';
        });

        // Diminuir a fonte
        document.getElementById('btnDiminuirFonte').addEventListener('click', function () {
            let body = document.querySelector('body'); 
            let estiloAtual = window.getComputedStyle(body, null).getPropertyValue('font-size'); 
            let tamanhoAtual = parseFloat(estiloAtual); body.style.fontSize = (tamanhoAtual - 1) + 'px';
        });

        // Inverter cores (modo escuro)
        document.getElementById('btnInverterCores').addEventListener('click', function () {
            document.body.classList.toggle('modo-escuro');
        });



        //leitor de tela
        let synth = window.speechSynthesis; // Armazenando a instância da síntese de fala
        let utterance; // Variável que armazena a fala

        function lerConteudo() {
        // Obtém o conteúdo da página
        const conteudo = document.body.innerText;

        // Verifica se a API de síntese de fala está disponível
        if (synth) {
        utterance = new SpeechSynthesisUtterance(conteudo); // Cria a fala
        utterance.lang = "pt-BR"; // Define o idioma como português do Brasil
        synth.speak(utterance); // Fala o conteúdo
        } else {
        alert("A API de síntese de fala não é suportada neste navegador.");
        }
    }

// Função para parar a leitura
function pararLeitura() {
    // Cancela qualquer leitura em andamento
    if (synth.speaking) {
        synth.cancel();
    }
}


        