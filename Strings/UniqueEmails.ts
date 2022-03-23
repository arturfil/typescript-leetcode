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