<script>
   let name = "isaac ndegwa";
   let age = 21;
   let isStudent = true;
   const date= new Date("9 july 2026");

   console.log(typeof name);
   console.log(typeof age);
   console.log(typeof isStudent);
</script>

<script>
   let width = 100;
   let height = 200;
   let area = width * height;
   console.log(typeof area);
   console.log(area);
</script>

<script>
    let celsius = 25;
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(typeof fahrenheit);
    console.log(fahrenheit); 
</script>

<script>
    let number = 10;
    const evenOrOdd = (number % 2 === 0) ? "even" : "odd";
    console.log(typeof evenOrOdd);
    console.log(evenOrOdd);
</script>

<script>
    let name= "isaac ndegwa"
    let parts= name.split(" ");
    let initials= parts.map(word => word.[0].toUpperCase()).join("");
    console.log(initials);
</script>

<script>
    let name ="isaac ndegwa";
    let reversedName =name.split("").reverse().join("");
    console.log(reversedName);
</script>

<script>
    function calculateTip(billAmount, tipPercentage= 15) {
    let tipAmount = billAmount * (tipPercentage / 100);
    let totalAmount = billAmount + tipAmount;
    console.log(`Tip Amount: $${tipAmount.toFixed(2)}`);
    console.log(`Total Amount: $${totalAmount.toFixed(2)}`);
}
</script>


