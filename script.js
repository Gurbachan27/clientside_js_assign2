class Smoothie {
    constructor(size, base, fruits, extras) {
        this.size = size;
        this.base = base;
        this.fruits = fruits;
        this.extras = extras;

        // Define prices for different options
        this.sizePrices = { small: 3.00, medium: 4.50, large: 5.50 };
        this.fruitPrice = 0.50;
        this.extraPrice = 1.00;
    }

    calculateTotal() {
        let total = this.sizePrices[this.size];
        total += this.fruits.length * this.fruitPrice;
        total += this.extras.length * this.extraPrice;
        return total;
    }
}