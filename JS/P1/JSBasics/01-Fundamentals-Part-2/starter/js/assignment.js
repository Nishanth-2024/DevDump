console.group(`Arrays Assignment - 1`)
{
  // tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
  const calcTip = bill => {
    if (bill >= 50 && bill<= 300) {
        return bill*0.15
    }
    return bill*0.2
  }

  const bills = [125, 555, 44]
  const tips = []
  const totals = bills.map(bill => {
      const tip = calcTip(bill)
      tips.push(tip)
      return bill + tip
  })
  console.log(bills)
  console.log(tips)
  console.log(totals)
}
console.groupEnd()
