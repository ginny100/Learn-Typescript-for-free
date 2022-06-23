import { Loyalties } from "./enums"

export interface Review {
    name: string;
    stars: number;
    loyaltyUser: Loyalties;
    date: string;
}

export interface Property {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: string;
    };
    contact: [number, string];
    isAvailable: boolean;
}