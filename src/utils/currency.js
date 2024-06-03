const formatter = new Intl.NumberFormat('ru-ru', {currency: 'RUB', style: 'currency'})
export function currency(value) {
    return formatter.format(value)
}