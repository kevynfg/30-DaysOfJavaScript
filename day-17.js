class Calculator {
  constructor(n, p) {
    this.n = n;
    this.p = p;
  }
  power(n, p) {
    return n < 0 || p < 0 ? 'n and p should be non-negative' : n ** p;
  }
}
