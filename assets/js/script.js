const priceItemFirst = document.querySelectorAll(`.price`)[0];
const priceItemSecond = document.querySelectorAll(`.price`)[1];
const priceItemThird = document.querySelectorAll(`.price`)[2];
const priceItemFourth = document.querySelectorAll(`.price`)[3];

const priceItemFirstNumber = parseInt(priceItemFirst.innerHTML);
const priceItemSecondNumber = parseInt(priceItemSecond.innerHTML);
const priceItemThirdNumber = parseInt(priceItemThird.innerHTML);
const priceItemFourthNumber = parseInt(priceItemFourth.innerHTML);

const totalCost = priceItemFirstNumber + priceItemSecondNumber + priceItemThirdNumber + priceItemFourthNumber;

const finalPrice = document.querySelector(`.final__price`);
const totalCostResult = totalCost;

function calcDiscount() {
	const discountResultFirst = priceItemFirstNumber - (priceItemFirstNumber * 0.2);
	priceItemFirst.textContent = `${discountResultFirst} руб.`;
	const discountResultSecond = priceItemSecondNumber - (priceItemSecondNumber * 0.2);
	priceItemSecond.textContent = `${discountResultSecond} руб.`;
	const discountResultThird = priceItemThirdNumber - (priceItemThirdNumber * 0.2);
	priceItemThird.textContent = `${discountResultThird} руб.`;
	const discountResultFourth = priceItemFourthNumber - (priceItemFourthNumber * 0.2);
	priceItemFourth.textContent = `${discountResultFourth} руб.`;
	const discountResult = totalCostResult - (totalCostResult * 0.2);
	finalPrice.textContent = `${discountResult} руб.`;
}

const button = document.querySelector(`.total__cost-button`);
button.addEventListener(`click`, calcDiscount);