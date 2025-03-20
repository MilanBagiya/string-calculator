export class Calculator {
    add(numbers: string): number {
        if (!numbers) return 0;

        let delimiter = ",";
        let numberString = numbers;

        if (numbers.startsWith("//")) {
            const parts = numbers.split("\n", 2);
            delimiter = parts[0].substring(2);
            numberString = parts[1];
        }

        const normalizedString: string = numberString.replace(/\n/g, delimiter);

        const numArray: string[] = normalizedString.split(delimiter);

        const parsedNumbers: number[] = numArray.map(num => num).map((num: string) => parseInt(num, 10));

        const negatives = parsedNumbers.filter(num => num < 0);

        const charString: string[] = numArray.filter(num => !Number(num))

        if (charString.length > 0) {
            throw new Error(`${charString.join(', ')} is not allowed`)
        }

        if (negatives.length > 0) {
            throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
        }

        return parsedNumbers.filter(n => n <= 1000).reduce((sum, num) => sum + num, 0);
    }
}
