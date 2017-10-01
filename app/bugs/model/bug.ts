export class Bug {
    // constructor easy way to define our class, our model, and also allows this type of object to be created 
    constructor (
        public id: string,
        public title: string,
        public status: number,
        public severity: number,
        public description: string,
        public createdBy: string,
        // not data, but number, because of epoch time, unix time( miliseconds value)
        public createdDate: number,
        // ? optional
        public updatedBy?: string,
        public updatedDate?: number
    ) { }
}