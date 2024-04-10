function getFibonacciSequence() {
    let n = parseInt(document.getElementById('numero').value);

    let fibonacciSequence = [0, 1];
    
    // Calcula os próximos números da sequência de Fibonacci
    for (let i = 2; i < n; i++) {
        let nextFibonacciNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        fibonacciSequence.push(nextFibonacciNumber);
    }

    document.getElementById('resultado').innerHTML = `<p>Os primeiros ${n} números de Fibonacci são: ${fibonacciSequence.join(', ')}</p>`;
}
