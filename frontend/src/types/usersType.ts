export class UsersType {
    // Result Data
    public data: UserType[] = [];
    public error? = false;
    public errorCode?: any;
    public isLoading? = false;

    constructor(input?: any) {
        if (input) {
            this.data = ((input && input['data']) || []).map((object: any) => new UserType(object));
            this.error = !!(input.error);
            this.errorCode = (input && input.errorCode) || '';
            this.isLoading = !!(input.isLoading);
        }
    }
}

export class UserType {
    id: number = 0;
    name: string = '';
    address: AddressType = new AddressType();

    constructor(user: UserType) {
        this.id = (user && user.id);
        this.name = (user && user.name) || '';
        this.address = new AddressType(user && user.address);
    }
}

export class AddressType {
    street: string = '';
    suite: string = '';
    city: string = '';
    zipcode: string = '';

    format?: Function = () : string => {
        return `${this.suite}, ${this.street}, ${this.city} ${this.zipcode} `;
    }

    constructor(adr?: AddressType) {
        this.street = (adr && adr.street) || '';
        this.suite = (adr && adr.suite) || '';
        this.city = (adr && adr.city) || '';
        this.zipcode = (adr && adr.zipcode) || '';
    }
}