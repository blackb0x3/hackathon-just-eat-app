export interface Request {
    id: number,
    userId: number,
    food: string,
    picture: string,
    comment: string,
    hot: boolean,
    time: string,
    name: string,
    contactNumber: string,
    address: string,
    city: string,
    postcode: string,
    allergies: string[]
}