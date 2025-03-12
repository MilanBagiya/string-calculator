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

        const numArray: number[] = normalizedString.split(delimiter).map((num: string) => parseInt(num, 10));

        return numArray.reduce((sum, num) => sum + num, 0);
    }
}
