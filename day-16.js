function main() {
  const S = readLine();
  try {
    isNaN(Number(S)) ? error : console.log(S);
  } catch (error) {
    console.log('Bad String');
  }
}
