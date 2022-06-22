export class MaximizeDistanceToClosestPerson {

    maxDistToClosest(seats: number[]): number {
        let maxDist = 0, last = -1;
        for(let i = 0; i < seats.length; i++) {
            if (seats[i] === 1) {
                // if seen, means there's already a seat taken else, no in between yet
                maxDist = last < 0 ? i : Math.max(maxDist, Math.floor((i - last) / 2));
                last = i;
            }
        }
        return Math.max(maxDist, seats.length - last - 1);
    }

    maxDistToClosestAlt(seats: number[]): number {
        let maxDist = 0, count = 0, seen = false;
        for(let i = 0; i < seats.length; i++) {
            
            if (seats[i] === 1) {
                // if seen, means there's already a seat taken else, no in between yet
                maxDist = seen ? Math.ceil(Math.max(maxDist, count/ 2)) : Math.max(maxDist, count)
                seen = true;
                count = 0;
            } else {
                count++;
            }
        }
        return Math.max(count, maxDist)
    }
}

/*
    My plan is to loop through the array, and check if the seat is not occupied
    add one to maxDist and leaving a pointer with the first seat not occupied i.e. 2 pointers
    if I find a seat that is occupied, ptr = seats[i+1];
*/

/*
    TESTING
    let maxDist = new MaximizeDistanceToClosestPerson();
    console.log(maxDist.maxDistToClosest([1,0,0,0,1,0,1],));
    console.log(maxDist.maxDistToClosest([1,0,0,0]));

    let tests = [
        [1,0,0,0,1,0,1],
        [1,0,0,0],
        [0,1]
    ];
*/