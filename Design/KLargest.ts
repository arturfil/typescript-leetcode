export class Klargest {
    numbers;
    k;
    
    constructor(k: number, nums: number[]) {
        nums.sort((a,b) => a - b);
        this.numbers = nums;
        this.k = k;
    }

    add(val: number): number {
        this.numbers.push(val);    
        this.numbers.sort((a,b) => a - b);
        return this.numbers[this.k];
    }
}

/*
    TEST
    let kl = new Klargest(3, [4,5,8,2]);
    kl.add(3);
    kl.add(5);
    kl.add(10);
    kl.add(9);
    kl.add(4);

    You want to design a class that when you use the method "add"
    it returns the k largest number
*/