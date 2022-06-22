export class NextClosestTime {
    nextClosestTime(time: string): string {
        let tArr = time.replace(":", "").split("").sort((a:any,b:any) => a - b);
        
        // for single minutes
        for(let i = 0; i < 4; i++) {
            const char = tArr[i];
            const prevMin = parseInt(time.substring(3));
            const newMin = parseInt(time.charAt(3) + char);
            if (newMin < 60 && newMin > prevMin) {
                return time.substring(0, 3) + time.charAt(3) + char;
            }
        }

        // for 10s of minutes
        for (let i = 0; i < 4; i++) {
            const char = tArr[i];
            const prevMin = parseInt(time.substring(3));
            const newMin = parseInt(char + time.substring(4));
            if (newMin < 60 && newMin > prevMin) {
                return time.substring(0,3) + char + tArr[0];
            }
        }

        // for the single hours unit
        for (let i = 0; i < 4; i++) {
            const char = tArr[i];
            const prevHour = parseInt(time.substring(0,2));
            const newHour = parseInt(time.charAt(0) + char);
            if (newHour < 24 && newHour > prevHour) {
                return time.charAt(0) + char + ":" + tArr[0] + tArr[0];
            }
        }

        // the 10's of hours
        for (let i = 0; i < 4; i++) {
            const char = tArr[i];
            const prevHour = parseInt(time.substring(0,2));
            const newHour = parseInt(char + time.charAt(1));
            if (newHour < 24 && newHour > prevHour) {
                return char + tArr[0] + ":" + tArr[0] + tArr[0];
            }
        }

        return tArr[0] + tArr[0] + ":" + tArr[0] + tArr[0];
    }
}

/*
    TESTING
    let n = new NextClosestTime();
    console.log(n.nextClosestTime("19:39"));

*/