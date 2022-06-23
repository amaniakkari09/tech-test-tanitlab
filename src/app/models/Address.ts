import { Geo } from "./Geo";

export class Address {
    street: string;
    city: string;
    suite: string;
    zipcode: number;
    geo: Geo;


    constructor(street: string, city: string, suite: string, zipcode: number, geo: Geo) {
        this.street = street;
        this.city = city;
        this.suite = suite;
        this.zipcode = zipcode;
        this.geo = geo;
    }
}

