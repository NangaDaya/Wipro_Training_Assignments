import java.util.Scanner;

public class MathOperationsMenu {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		char repeat;
		
		do {
			System.out.println("********** MENU **********");
			System.out.println("1. print Table of a Number");
			System.out.println("2. Calculate Factorial");
			System.out.println("3. Check prime Number");
			System.out.println("4. Print Fibonacci Series");
			System.out.println("5. Exit");
			System.out.print("Enter your choice: ");
			int choice = sc.nextInt();
			
			switch (choice) {
				case 1: // Table
					System.out.print("Enter the number: ");
					int tableNum = sc.nextInt();
					System.out.println("Multiplication Table of " + tableNum + ":");
					for (int i = 1; i <= 10; i++) {
						System.out.println(tableNum + "x" + i + "=" + (tableNum * i));
					}
					break;
				case 2: // Factorial
					System.out.print("Enter a number: ");
					int factNum = sc.nextInt();
					long fact = 1;
					for (int i = 1; i <= factNum; i++) {
						fact *= i;
					}
					System.out.println("Factorial of " + factNum + " is " + fact);
					break;
				case 3: // Prime Check
					System.out.print("Enter a number: ");
					int primeNum = sc.nextInt();
					boolean isPrime = true;
					if (primeNum <= 1) {
						isPrime = false;
					} else {
						int i = 2;
						while (i <= primeNum / 2) {
							if (primeNum % i == 0) {
								isPrime = false;
								break;
							}
							i++;
						}
					}
					if (isPrime) {
						System.out.println(primeNum + "is a Prime Number.");
					} else {
						System.out.println(primeNum + "is not a Prime Number.");
					}
					break;
				case 4: // Fibonacci Series
					System.out.print("Enter number of terms: ");
					int n = sc.nextInt();
					int a = 0, b = 1;
					System.out.print("Fibonacci Series: " + a + " " + b);
					for (int i = 2; i < n; i++) {
						int c = a + b;
						System.out.print(" " + c);
						a = b;
						b = c;
					}
					System.out.println();
					break;
				case 5: // Exit
					System.out.println("Exiting program");
					return;
				default:
					System.out.println("Invalid choice! Please try again.");
			}
			System.out.print("Back to Menu? (Y/N): ");
			repeat = sc.next().charAt(0);
		} while (repeat == 'Y' || repeat == 'y');
		sc.close();
		System.out.println("Program Ended.");
	}
}



