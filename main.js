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

const banks = [{
        name: 'alfa',
        precents: 8.7,
    },
    {
        name: 'sberbank',
        precents: 8.4,
    },
    {
        name: 'pochta',
        precents: 7.9,
    },
    {
        name: 'tinkoff',
        precents: 9.2,
    },
];

let currentPrecent = banks[0].precents;

for (let bank of bankBtns) {
    bank.addEventListener('click', () => {
        for (let item of bankBtns) {
            item.classList.remove('active');
        }
        bank.classList.add('active');
        takeActiveBank(bank);
    });
}

const takeActiveBank = currentActive => {
    const dataAttrValue = currentActive.dataset.name;
    const currentBank = banks.find(bank => bank.name === dataAttrValue);
    currentPrecent = currentBank.precents;
    calculation(totalCost.value, anInitialFee.value, creditTerm.value);
};

for (let input of inputsRange) {
    input.addEventListener('input', () => {
        assignValue();
        calculation(totalCost.value, anInitialFee.value, creditTerm.value);
    });

}
const calculation = (totalCost = 0, anInitialFee = 100000, creditTerm = 1) => {
    /*
    ЕП = Ежемесечный платеж
    РК - Размер кредита
    ПС - Процентная ставка
    КМ - колличество месяцев
    ЕП =(РК +(((РК / 100) * ПС) / 12 * КМ) / КМ
    */

    let mountlyPayment; // ежемесячный платеж 
    let lounAmount = totalCost - anInitialFee; // размер кредита
    let interestRate = currentPrecent; // процентная ставка
    let numberOfYears = creditTerm; // Колличество лет
    let numberOfMonths = 12 * numberOfYears; // колличество месяцев  

    mountlyPayment = (lounAmount + (((lounAmount / 100) * interestRate) / 12) * numberOfMonths) / numberOfMonths;
    const mountlyPaymentAround = Math.round(mountlyPayment);
    console.log(mountlyPaymentAround);
    if (mountlyPaymentAround < 0) {
        return false;
    } else {
        totalAmountOfCredit.innerHTML = `${lounAmount} Р`;
        totalMountlyPayment.innerHTML = `${mountlyPaymentAround} Р`;
        totalRecommendedIncome.innerHTML = `${mountlyPaymentAround + ((mountlyPaymentAround/ 100) * 35)} Р`;
    }
}