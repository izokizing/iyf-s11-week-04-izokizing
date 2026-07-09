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
   
<script>
for (let i = 0; i < 100; i++) {
    console.log(i);
}
</script>

<script>
    for (let i = 0; i < 100; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
</script>

<script>
    function runFizzBuzz(maxlimit) {
        for (let i = 1; i <= maxlimit; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log("FizzBuzz");
            } else if (i % 3 === 0) {
                console.log("Fizz");
            } else if (i % 5 === 0) {
                console.log("Buzz");
            } else {
                console.log(i);
            }
        }
    }
    runFizzBuzz(100);
</script>
   
<script>
    function printTriangle(rows) {
        for (let i = 1; i <=rows; i++)
    console.log("*".repeat(i));

    }
    printTriangle(5);
</script>

<script>
    function add(a, b) {
        return a + b;
    }
    function subtract(a, b) {
        return a - b;
    }
    function multiply(a, b) {
        return a * b;
    }
    function divide(a, b) {
        if (b === 0) {
            console.log("Error: Division by zero is not allowed.");
            return null;
        }
        return a / b;

    }
    function modulus(a, b) {
        return a % b;
    }
    function power(a, b) {
        return a**b;
    }
    function calculate(num1,operation, num2) {
        switch (operation) {
            case "+":
                return add(num1, num2);
            case "-":
                return subtract(num1, num2);
            case "*":
                return multiply(num1, num2);
            case "/":
                return divide(num1, num2);
            case "%":
                return modulus(num1, num2);
            case "**":
                return power(num1, num2);
            default:
                return null;"Invalid operator.";
                
        }
    }
    console.log(calculate(10, "+", 5)); // Output: 15
    console.log(calculate(10, "-", 5)); // Output: 5
    console.log(calculate(10, "*", 5)); // Output: 50
    console.log(calculate(10, "/", 5)); // Output: 2
    console.log(calculate(10, "%", 3)); // Output: 1
    console.log(calculate(2, "**", 3)); // Output: 8
    console.log(calculate(10, "/", 0)); // Output: Error: Division by zero is not allowed.
</script>

<script>
    const numbers = [1, 2, 3, 4, 5];
     const doubled = numbers.map(num => num * 2);
    console.log(doubled); // Output: [2, 4, 6, 8, 10]
</script>

<script>
   const numbers = [1, 2, 3, 4, 5];
    const evenNumbers = numbers.filter(num => num % 2 === 0);
   console.log(evenNumbers); // Output: [2, 4]
</script>

<script>
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
     const firstGreaterNumber = numbers.find(num => num > 10);
    console.log(firstGreaterNumber); // Output: 11
</script>

<script>
    const numbers = [1, 2, 3, 4, 5];
    const totalProduct = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
    console.log(totalProduct); // Output: 120
</script>

<script>
    const students = [
        { name: "Alice", age: 22 , grade: 85 ,major: "CS"},
        { name: "Bob", age: 20 , grade: 72 ,major: "Math"},
        { name: "Charlie", age: 23 , grade: 90 ,major: "CS"},
        { name: "Diana", age: 21 , grade: 88 ,major: "Physics"},
        { name: "Eve", age: 22 , grade: 95 ,major: "CS"}
    ];
    const names = students.map(student => student.name);
    console.log(names); // Output: ["Alice", "Bob", "Charlie", "Diana", "Eve"]

    const highAchievers = students.filter(student => student.grade > 80);
    console.log(highAchievers); // Output: [{ name: "Alice", age: 22 , grade: 85 ,major: "CS"}, { name: "Charlie", age: 23 , grade: 90 ,major: "CS"}, { name: "Diana", age: 21 , grade: 88 ,major: "Physics"}, { name: "Eve", age: 22 , grade: 95 ,major: "CS"}]

    const charlie = students.find(student => student.name === "Charlie");
    console.log(charlie); // Output: { name: "Charlie", age: 23
    
    const avgGrade = students.reduce((accumulator, student) => accumulator + student.grade, 0) / students.length;
    console.log(avgGrade); // Output: 86

    const csStudents = students.filter(student => student.major === "CS");
    console.log(csStudents); // Output: [{ name: "Alice", age: 22

    const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
    console.log(sortedByGrade); // Output: [{ name: "Eve", age: 22 , grade: 95 ,major: "CS"}, { name: "Charlie", age: 23 , grade: 90 ,major: "CS"}, { name: "Diana", age: 21 , grade: 88 ,major: "Physics"}, { name: "Alice", age: 22 , grade: 85 ,major: "CS"}, { name: "Bob", age: 20 , grade: 72 ,major: "Math"}]

    const hasTopStudent = students.some(student => student.grade > 90);
    console.log(hasTopStudent); // Output: true

    const allPassing = students.every(student => student.grade >= 60);
    console.log(allPassing); // Output: true
</script>

<script>
    const gradeTracker = {
        students: []
        addStudent(name, grade) {
            
        },
        getStudent(name) {
            
        },
        getStudentAverage(name) {
            
        },
        getSubjectAverage(subject) {
            
        },
        getTopStudent() {
            
        },
        getStrugglingStudents() {

        },
        getLetterGrade(score) {
            
        },
        generateReportCard(name) {
            
        }

    }

    gradeTracker.addStudent("Alice",{math: 85, english: 90, science: 78});
    gradeTracker.addStudent("Bob",{math: 72, english: 65, science: 80});
    gradeTracker.addStudent("Charlie",{math: 90, english: 88, science: 92});

    console.log(gradeTracker.getStudentAverage("Alice")); // Output: 84.33
    console.log(gradeTracker.getSubjectAverage("math")); // Output: 82.33  
    console.log(gradeTracker.getTopStudent()); // Output: "Charlie"
    console.log(gradeTracker.getStrugglingStudents()); // Output: ["Bob"]
    console.log(gradeTracker.generateReportCard("Alice")); // Output: {math: "B", english: "A", science: "C"}
</script>



