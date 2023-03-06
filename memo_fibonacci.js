function fibonacci(i, memo = {}) {
    if (i <= 0) {
        return 0;
    }

    if (i < 3) {
        return 1;
    }

    const f1 = memo[i - 2] || fibonacci(i - 2, memo);
    const f2 = memo[i - 1] || fibonacci(i - 1, memo);

    memo[i - 2] = f1;
    memo[i - 1] = f2;

    return f1 + f2;
}

console.log(fibonacci(4))