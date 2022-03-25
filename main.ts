import { MajorityElement } from "./Arrays/MajorityElement";
import { RotateImage } from "./Arrays/RotateImage";
import { UniqueEmails } from "./Strings/UniqueEmails";


class Main {

    main() {
        const matrix1 = [[1,2,3],[4,5,6],[7,8,9]];
        const rt = new RotateImage();
        rt.rotate(matrix1);
    }
}

const mainClass = new Main();
mainClass.main();