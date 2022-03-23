import { MajorityElement } from "./Arrays/MajorityElement";
import { UniqueEmails } from "./Strings/UniqueEmails";


class Main {

    main() {
        const test = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
        const unq = new UniqueEmails();
        unq.numUniqueEmails(test);
        process.exit(0);
    }
}

const mainClass = new Main();
mainClass.main();