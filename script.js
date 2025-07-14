function calculateTip() {
  const bill = parseFloat(document.getElementById('bill').value);
  const tipPercent = parseFloat(document.getElementById('tip').value);
  const people = parseInt(document.getElementById('people').value);

  if (isNaN(bill) || isNaN(tipPercent) || isNaN(people) || people <= 0) {
    alert("Please enter valid values.");
    return;
  }

  const tipAmount = (bill * tipPercent) / 100;
  const totalAmount = bill + tipAmount;
  const eachPays = totalAmount / people;

  document.getElementById('tipAmount').textContent = tipAmount.toFixed(2);
  document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
  document.getElementById('eachPays').textContent = eachPays.toFixed(2);
}
