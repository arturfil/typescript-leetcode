export class PeakIndexInMountainArray {
    peakIndexInMountainArray(arr: number[]):number {
        let start = 0, end = arr.length-1;

        while (start < end) {
            let mid = Math.floor((start + end) / 2);
            if (arr[mid-1] < arr[mid] && arr[mid] > arr[mid + 1]) {
                return mid;
            }
            if (arr[mid + 1] < arr[mid]) { // right portion is less
                end = mid;
            } else { // left portion is less
                start = mid;
            }
        }
        return 0;
    }
}

/*
    TEST
    let test = [3,4,5,1];
    let test = [24,69,100,99,79,78,67,36,26,19]
    let test = [18,29,38,59,98,100,99,98,90]
    let peak = new PeakIndexInMountainArray();
    console.log(peak.peakIndexInMountainArray(test));
*/