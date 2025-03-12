export class Calculator {

    add(numbers: string): number {
        if (!numbers) return 0;

        const numArray: number[] = numbers.split(',').map((num: string) => parseInt(num, 10));

        return numArray.reduce((sum, num) => sum + num, 0);
    }

}