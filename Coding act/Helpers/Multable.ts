export function printMultiplicationTable(base: number, limit: number) {

    if (limit <= 0) {
        throw new Error('Limit must be greater than 0');
    }

    for (let i = 0; i <= limit; i++) {
        console.log(i, '*', base, '=', i * base);
    }
}
