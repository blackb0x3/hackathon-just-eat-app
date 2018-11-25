import { Account } from '../../models/account';

let accountMocks: Account[] = [
    {
        id: 1,
        name: "Homer Simpson",
        homeAddress: "742 Evergreen Terrace, Springfield",
        phoneNumber: "01234567890",
        email: "pretendemail@example.com",
        profilePictureUrl: "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
        regAsBusiness: false
    },
    {
        id: 2,
        name: "Lisa Simpson",
        homeAddress: "742 Evergreen Terrace, Springfield",
        phoneNumber: "07987654321",
        email: "lisathetreehugger@example.com",
        profilePictureUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Lisa_Simpson.png/220px-Lisa_Simpson.png",
        regAsBusiness: false
    },
    {
        id: 3,
        name: "Flawsome",
        homeAddress: "123 Arhtur Street, Cardiff",
        phoneNumber: "07965438712",
        email: "anotherrandomemail@example.com",
        profilePictureUrl: "https://flawsomedrinks.com/static/media/logo.cb7b1943.svg",
        regAsBusiness: true
    }
];

export default accountMocks;