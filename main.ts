import { KthLargestElements } from "./MinHeaps/KthLargestElement";
import { MeetingRoomsII } from "./MinHeaps/MeetingRoomsII";


class Main {

    main() {
        // Kth Largest Element -> min heap
        let k = new KthLargestElements();
        k.findKthLargest([3,2,1,5,6,4], 2);

    }
}

const mainClass = new Main();
mainClass.main();