function main() {
  var n = parseInt(readLine());
  a = readLine().split(' ');
  a = a.map(Number);
  // Write Your Code Here
  var swaps = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (a[j] > a[j + 1]) {
        let temp;
        temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
        swaps++;
      }
    }
    if (swaps == 0) {
      console.log(`Array is sorted in ${swaps} swaps.`);
      console.log(`First Element: ${a[0]}`);
      console.log(`Last Element: ${a[a.length - 1]}`);
      return;
    }
  }
  console.log(`Array is sorted in ${swaps} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[a.length - 1]}`);
}
