let select = document.querySelector('.form-control')

select.addEventListener('change', () => {
    let non = document.querySelector('.non')
    non.textContent = select.value
})

let sm25 = document.querySelector('.sm25')
sm25.addEventListener('change', () => {
    let katta = document.querySelector('.kattasi')
    katta.textContent = sm25.value
})


let sm30 = document.querySelector('.sm30')
sm30.addEventListener('change', () => {
    let katta = document.querySelector('.kattasi')
    katta.textContent = sm30.value
})

let sm35 = document.querySelector('.pitsa35')
sm35.addEventListener('change', () => {
    let katta = document.querySelector('.kattasi')
    katta.textContent = sm35.value
})




let inputA = document.querySelector('#flexCheckDefault')

inputA.addEventListener("click", () => {
    let tomato = $('.tomato')
    if (tomato.textContent == inputA.value) {
        tomato.textContent = ""
    } else {
        tomato.textContent = inputA.value;
    }


})
let inputB = document.querySelector('#flexCheckChecked654')

inputB.addEventListener("click", () => {
    let goshts = $('.gosht')
    if (goshts.textContent == inputB.value) {
        goshts.textContent = ""
    } else {
        goshts.textContent = inputB.value;
    }


})

let inputC = document.querySelector('#flexCheckChecked444')

inputC.addEventListener("click", () => {
    let zaytun = $('.zaytun')
    if (zaytun.textContent == inputC.value) {
        zaytun.textContent = ""

    } else {
        zaytun.textContent = inputC.value;
    }


})

let inputD = document.querySelector('#flexCheckChecked44488')

inputD.addEventListener("click", () => {
    let tuzlangan = $('.tuzlangan')
    if (tuzlangan.textContent == inputD.value) {
        tuzlangan.textContent = ""

    } else {
        tuzlangan.textContent = inputD.value;
    }


})

let inputE = document.querySelector('#flexCheckChecked44477')

inputE.addEventListener("click", () => {
    let qoziqorin = $('.qoziqorin')
    if (qoziqorin.textContent == inputE.value) {
        qoziqorin.textContent = ""
    } else {
        qoziqorin.textContent = inputE.value;
    }

})
let inputF = document.querySelector('#flexCheckChecked1221')

inputF.addEventListener("click", () => {
    let qaziq = $('.qaziq')
    if (qaziq.textContent == inputF.value) {
        qaziq.textContent = ""

    } else {
        qaziq.textContent = inputF.value;
    }
})

let inputG = document.querySelector('#flexCheckCheckedw43')

inputG.addEventListener("click", () => {
    let achiq = $('.achiq')
    if (achiq.textContent == inputG.value) {
        achiq.textContent = ""

    } else {
        achiq.textContent = inputG.value;
    }


})
let inputH = document.querySelector('#flexCheckChecked34')

inputH.addEventListener("click", () => {
    let sosiska = $('.sosiska')
    if (sosiska.textContent == inputH.value) {
        sosiska.textContent = ""

    } else {
        sosiska.textContent = inputH.value;
    }


})

let clicks = $('.clicks')
let closeddd = $('.closeddd')
clicks.addEventListener('click', () => {
    let madalni__akno = $('.madalni__alno')
    madalni__akno.style.transform = 'translate(0%)'
})

closeddd.addEventListener('click', () => {
    let madalni__akno = $('.madalni__alno')
    madalni__akno.style.transform = 'translateY(-150%)'
})




let formInput1 = document.querySelector('.sm25');
let formInput = document.querySelector('.sm30')
let modalText = document.querySelector('.modalText12')
let formInputs = document.querySelector('.sm35')

if (formInput1.value == "25cm") {
    modalText.classList.add("modalText");
  } else if (formInput.value == "30cm") {
    modalText.classList.add("modalText");
  } else if (formInputs.value == "35cm") {
    modalText.classList.add("modalText");
  }

  formInput1.addEventListener("click", () => {
    modalText.classList.add("modalText2");
    modalText.textContent = 'success'
  });

  formInput.addEventListener("click", () => {
    modalText.classList.add("modalText2");
    modalText.textContent = 'success'

  });

  formInputs.addEventListener("click", () => {
    modalText.classList.add("modalText2");
    modalText.textContent = 'success'

  });