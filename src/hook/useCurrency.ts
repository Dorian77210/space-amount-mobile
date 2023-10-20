import CurrencyList from 'currency-list'

const useCurrency = () => {
    const euro = CurrencyList.get("EUR");
    const usd = CurrencyList.get("USD");

    return [{
        name: euro.name,
        symbol: euro.symbol
    }, {
        name: usd.name,
        symbol: usd.symbol
    }];
};

export default useCurrency;