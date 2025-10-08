export function toPersianNumber(n: number | string): string {
    const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    return n.toString().replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
  }
  