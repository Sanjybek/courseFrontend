const firstValue = document.getElementById('first_value')
const secondValue = document.getElementById('second_value')
const result = document.getElementById('result')
const errorMessage = document.getElementById('error')
const ok_Btn = document.getElementById('ok')
const opValue = (operator) => {
        if(operator === '+'  && firstValue.value !== '' && secondValue.value !== '') {
            const res = +firstValue.value + +secondValue.value 
            result.value = res  
        } else if (operator === '-' && firstValue.value && secondValue.value) {
            const res = firstValue.value - secondValue.value 
            result.value = res
        } else if (operator === '/' && firstValue.value && secondValue.value) {
            const res = firstValue.value / secondValue.value
            result.value = res
            if(secondValue.value == 0) {
                errorMessage.innerText = 'на ноль делить нельзя!'
                ok_Btn.style.display = 'flex'
                errorMessage.style.display = 'flex'
            }
        } else if(operator === '*' && firstValue.value && secondValue.value) {
            const res = firstValue.value * secondValue.value
            result.value = res
        } else {
                errorMessage.innerText = 'Введите числа'
                ok_Btn.style.display = 'flex'
                errorMessage.style.display = 'flex'      
        } 
}
ok_Btn.addEventListener('click', () => {
    errorMessage.style.display = 'none'
    ok_Btn.style.display = 'none'
})
const clearInputs = () => {
    firstValue.value = ''
    secondValue.value = ''
    result.value = ''
}
const root = document.getElementById('root')
const btn = document.getElementById('calculator')
const closeBtn = document.getElementById('close')
btn.addEventListener('click', () => {
    root.style.display = 'block'
    btn.style.display = 'none'
})
closeBtn.addEventListener('click', () => {
    root.style.display = 'none'
    btn.style.display = 'block'
   
})