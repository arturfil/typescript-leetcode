import { ContainerWithMostWater } from "./Arrays/ContainerWithMostWater";
import { MeetingRooms } from "./Arrays/MeetingRooms";
import { BackSpaceStringCompare } from "./Strings/BackSpaceStringCompare";
import { MultiplyStrings } from "./Strings/MultiplyStrings";
import { ValidAnagram } from "./Strings/ValidAnagram";

class Main {

    main() {
        // Kth Largest Element -> min heap
        let m = new MeetingRooms();
        console.log(m.canAttendMeetings([[0,6], [5,10], [15,20]]));

    }
}

const mainClass = new Main();
mainClass.main();