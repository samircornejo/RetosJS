// Trading Post Order Calculator

// Write a function calculateOrder that takes an order hour (0-23), a price, a customer's age in years, and their number of previous orders. Return an object with the discounted total, age in days, and loyalty tier.
// Apply a 10% early bird discount if the order hour is before 10. Convert age to days (assume 365 days per year). The loyalty tier is the Nth prime number, where N is the number of previous orders (e.g., if they have 3 previous orders, find the 3rd prime: 5).

function calculateOrder(hour, price, age, previousOrders) {
    let discountedTotal = hour < 10 ? price * 0.9 : price;

    let ageInDays = age * 365;

    function getNthPrime(n) {
        if (n < 1) return null;

        let count = 0;
        let num = 1;

        while (count < n) {
            num++;
            if (isPrime(num)) {
                count++;
            }
        }
        return num;
    }

    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    let loyaltyTier = getNthPrime(previousOrders);

    return {
        discountedTotal,
        ageInDays,
        loyaltyTier
    };
}
