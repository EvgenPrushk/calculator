/* Значение из текстовых   инпутов */
const totalCost = document.getElementById('total-cost'),  
    anInitialFee = document.getElementById('an-initial-fee'), 
    creditTerm = document.getElementById('credit-term');
  
/* Значение из range инпутов */

const totalCostRange = document.getElementById('total-cost-range'),
    anInitialFeeRange = document.getElementById('an-initial-fee-range'),
    creditTermRange = document.getElementById('credit-term-range');

    /* Итоговые значения */
 const totalAmountOfCredit = document.getElementById('amount-of-credit'),
 totalMountlyPayment = document.getElementById('mountly-payment'),
 totalRecommendedIncome = document.getElementById('recommended-income');

    /* Все range  */
 const inputsRange = document.querySelectorAll('.input-range');

    /* Все button %  */
const bankBtns = document.querySelectorAll('.bank');

const assignValue = () => {
    totalCost.value = totalCostRange.value;
    anInitialFee.value = anInitialFeeRange.value;
    creditTerm.value = creditTermRange.value;
}

assignValue();