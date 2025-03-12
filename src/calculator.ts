export class Calculator {

    add(numbers: string): number {
        if (!numbers) return 0;

        const normalizedString: string = numbers.replace(/\n/g, ",");

        const numArray: number[] = normalizedString.split(',').map((num: string) => parseInt(num, 10));

        return numArray.reduce((sum, num) => sum + num, 0);
    }

}