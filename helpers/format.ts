export const formatMinDigits = (number: number, minDigits: number = 2) =>
  number.toLocaleString('en-UK', {
    minimumIntegerDigits: minDigits,
  });
