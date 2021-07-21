function functionName(fun) {
  var ret = fun.toString();
  ret = ret.substr('function '.length);
  ret = ret.substr(0, ret.indexOf('('));
  return ret;
}

function explanationAboutFunction(
  event,
  text,
  requeriment,
  h2Text = 'Como o desafio foi feito?'
) {
  event.target.classList.add('pre-animation-left');
  event.target.parentElement.children[0].classList.add('pre-animation-right');
  event.target.parentElement.children[1].classList.add('pre-animation-right');
  setTimeout(function () {
    event.target.classList.remove('pre-animation-left');
    event.target.parentElement.children[0].classList.remove(
      'pre-animation-right'
    );
    event.target.parentElement.children[1].classList.remove(
      'pre-animation-right'
    );
    event.target.innerText = text;
    event.target.parentElement.children[0].innerText = h2Text;
    event.target.parentElement.children[1].innerText = requeriment;
  }, 500);
}

function generateFunctionsInView({
  div,
  challengerNumber,
  functionTopass,
  requeriment,
  text,
}) {
  let name = `${challengerNumber} - ${functionName(functionTopass)}`;
  let functionString = functionTopass.toString();

  let section = document.createElement('section');
  section.innerHTML = text;

  let h2 = document.createElement('h2');
  h2.innerHTML = name;

  let h3 = document.createElement('h3');
  h3.innerHTML = requeriment;

  section.classList.add('codeAndExplanation');
  section.addEventListener('mouseenter', (e) => {
    explanationAboutFunction(e, functionString, requeriment);
  });
  section.addEventListener('mouseout', (e) => {
    explanationAboutFunction(e, text, requeriment, name);
  });

  document.querySelector(div).appendChild(h2);
  document.querySelector(div).appendChild(h3);
  document.querySelector(div).appendChild(section);
}

function generateResultsView({ button, callback, result, inputs }) {
  document.querySelector(button).addEventListener('click', () => {
    const values = inputs.map((input) =>
      JSON.parse(document.querySelector(input).value)
    );
    const resultFromFunction = callback(...values);
    document.querySelector(result).innerHTML =
      JSON.stringify(resultFromFunction);
  });
}

const functionsInformations = [
  {
    leftSideInformation: {
      div: '#desafio1',
      challengerNumber: 1,
      functionTopass: compareTrue,
      requeriment: 'Crie uma função usando o operador &&',
      text: 'Função para comparar dois booleanos',
    },
    rightSideResults: {
      button: '#enviarDesafio1',
      callback: compareTrue,
      result: '#desafio1__result',
      inputs: ['#inputBooleanOne_desafio1', '#inputBooleanTwo_desafio1'],
    },
  },
  {
    leftSideInformation: {
      div: '#desafio2',
      challengerNumber: 2,
      functionTopass: calcArea,
      requeriment: ' Crie uma função que calcule a área do triângulo',
      text: 'Função para calcular a área do triângulo',
    },
    rightSideResults: {
      button: '#enviarDesafio2',
      callback: calcArea,
      result: '#desafio2__result',
      inputs: ['#inputChallengeTwo_Base', '#inputChallengeTwo_Height'],
    },
  },
  {
    leftSideInformation: {
      div: '#desafio3',
      challengerNumber: 3,
      functionTopass: splitSentence,
      requeriment: 'Crie uma função que divida a frase',
      text: 'Função para dividir uma frase',
    },
    rightSideResults: {
      button: '#enviarDesafio3',
      callback: splitSentence,
      result: '#desafio3__result',
      inputs: ['#inputChallengeThree_Text'],
    },
  },
  {
    leftSideInformation: {
      div: '#desafio4',
      challengerNumber: 4,
      functionTopass: concatName,
      requeriment: 'Crie uma função que use concatenação de strings',
      text: 'Função que faz concatenação de strings',
    },
    rightSideResults: {
      button: '#enviarDesafio4',
      callback: concatName,
      result: '#desafio4__result',
      inputs: ['#inputChallengeFour_Text'],
    },
  },
  {
    leftSideInformation: {
      div: '#desafio5',
      challengerNumber: 5,
      functionTopass: footballPoints,
      requeriment:
        'Crie uma função que calcule a quantidade de pontos no futebol',
      text: 'Crie uma função que calcule a quantidade de pontos no futebol',
    },
    rightSideResults: {
      button: '#enviarDesafio5',
      callback: footballPoints,
      result: '#desafio5__result',
      inputs: ['#inputChallengeFive_Wins', '#inputChallengeFive_Ties'],
    },
  },
  {
    leftSideInformation: {
      div: '#desafio6',
      challengerNumber: 6,
      functionTopass: highestCount,
      requeriment: 'Crie uma função que calcule a repetição do maior número',
      text: ' Crie uma função que calcule a repetição do maior número',
    },
    rightSideResults: {
      button: '#enviarDesafio6',
      callback: highestCount,
      result: '#desafio6__result',
      inputs: ['#inputChallengeSix_Numbers'],
    },
  },
  {
    leftSideInformation: {
      div: '#desafio7',
      challengerNumber: 7,
      functionTopass: catAndMouse,
      requeriment: 'Crie uma função de Caça ao Rato',
      text: ' Crie uma função que calcule a repetição do maior número',
    },
    rightSideResults: {
      button: '#enviarDesafio7',
      callback: catAndMouse,
      result: '#desafio7__result',
      inputs: [
        '#inputChallengeSeven_Mouse',
        '#inputChallengeSeven_Cat1',
        '#inputChallengeSeven_Cat2',
      ],
    },
  },
  {
    leftSideInformation: {
      div: '#desafio8',
      challengerNumber: 8,
      functionTopass: fizzBuzz,
      requeriment:
        'Crie uma função chamada fizzBuzz que receba uma array de números e retorne uma array com fizz, buzz ou fizzbuzz',
      text: ' Crie uma função que calcule a repetição do maior número',
    },
    rightSideResults: {
      button: '#enviarDesafio8',
      callback: fizzBuzz,
      result: '#desafio8__result',
      inputs: ['#inputChallengeEight_Numbers'],
    },
  },
  {
    leftSideInformation: {
      div: '#desafio9_encode',
      challengerNumber: 9,
      functionTopass: encode,
      requeriment:
        'Crie uma função chamada fizzBuzz que receba uma array de números e retorne uma array com fizz, buzz ou fizzbuzz',
      text: ' Crie uma função que calcule a repetição do maior número',
    },
    rightSideResults: {
      button: '#enviarDesafio9Encode',
      callback: encode,
      result: '#desafio9__resultEncode',
      inputs: ['#inputChallengeNineEncode_String'],
    },
  },
  {
    leftSideInformation: {
      div: '#desafio9_decode',
      challengerNumber: 9,
      functionTopass: decode,
      requeriment:
        'Crie uma função chamada fizzBuzz que receba uma array de números e retorne uma array com fizz, buzz ou fizzbuzz',
      text: ' Crie uma função que calcule a repetição do maior número',
    },
    rightSideResults: {
      button: '#enviarDesafio9Decode',
      callback: decode,
      result: '#desafio9__resultDecode',
      inputs: ['#inputChallengeNineDecode_String'],
    },
  },
  {
    leftSideInformation: {
      div: '#desafio10',
      challengerNumber: 10,
      functionTopass: techList,
      requeriment:
        'Crie uma função chamada fizzBuzz que receba uma array de números e retorne uma array com fizz, buzz ou fizzbuzz',
      text: ' Crie uma função que calcule a repetição do maior número',
    },
    rightSideResults: {
      button: '#enviarDesafio10',
      callback: techList,
      result: '#desafio10__result',
      inputs: ['#inputChallengeTen_List', '#inputChallengeTen_Name'],
    },
  },
  {
    leftSideInformation: {
      div: '#desafio11',
      challengerNumber: 11,
      functionTopass: generatePhoneNumber,
      requeriment:
        'Crie uma função chamada fizzBuzz que receba uma array de números e retorne uma array com fizz, buzz ou fizzbuzz',
      text: ' Crie uma função que calcule a repetição do maior número',
    },
    rightSideResults: {
      button: '#enviarDesafio11',
      callback: generatePhoneNumber,
      result: '#desafio11__result',
      inputs: ['#inputChallengeTen_List', '#inputChallengeTen_Name'],
    },
  },
  {
    leftSideInformation: {
      div: '#desafio12',
      challengerNumber: 12,
      functionTopass: triangleCheck,
      requeriment:
        'Crie uma função chamada fizzBuzz que receba uma array de números e retorne uma array com fizz, buzz ou fizzbuzz',
      text: ' Crie uma função que calcule a repetição do maior número',
    },
    rightSideResults: {
      button: '#enviarDesafio12',
      callback: triangleCheck,
      result: '#desafio12__result',
      inputs: ['#inputChallengeTwelve_01', '#inputChallengeTwelve_02', '#inputChallengeTwelve_03'],
    },
  },
  {
    leftSideInformation: {
      div: '#desafio13',
      challengerNumber: 13,
      functionTopass: hydrate,
      requeriment:
        'Crie uma função chamada fizzBuzz que receba uma array de números e retorne uma array com fizz, buzz ou fizzbuzz',
      text: ' Crie uma função que calcule a repetição do maior número',
    },
    rightSideResults: {
      button: '#enviarDesafio13',
      callback: hydrate,
      result: '#desafio13__result',
      inputs: ['#inputChallengeThirteen_Phrase'],
    },
  },
];


functionsInformations.forEach((fi) => {
  generateFunctionsInView(fi.leftSideInformation);
  generateResultsView(fi.rightSideResults);
});
