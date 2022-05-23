export class MeetingRooms {
    canAttendMeetings(intervals: number[][]): boolean {
        intervals.sort((a,b) => a[0] - b[0]);
        for (let i = 0; i < intervals.length-1; i++) {
            if (intervals[i][1] > intervals[i+1][0])
                return false;
        }
        return true
    }
}

/* 
    EXPLANATION
    - You want to sort the array by meetins that have a earlyer starting time
    - Ones the are sorted you just have to check the current meeting ending time
    and the next meeting starting time.
    - If the current ending time is larger then the next starting time ->
    return false, otherwise there is no overlapse.

    TESTING:
    let m = new MeetingRooms();
    console.log(m.canAttendMeetings([[0,6], [5,10], [15,20]]));
*/