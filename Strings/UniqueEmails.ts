interface Emails {
    [key: string]: number;
}

export class UniqueEmails {
    numUniqueEmails(emails: string[]):number {
        let hashMap: Set<string> = new Set();
        emails.forEach(em => {
            let parts = em.split("@");
            let local = parts[0].split("+")
            hashMap.add(local[0].replace(/\./g,"") + "@" + parts[1]);
        })        
        return hashMap.size;
    }
}

/*
    TESTING
    const test = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
    const unq = new UniqueEmails();
    unq.numUniqueEmails(test);
    process.exit(0);
    
    EXPLANATION
    - you want to first split by the @ and then manipulate the local
    word by getting rid of the dots and everything after the "+" by 
    also spliting the word by the "+"
*/