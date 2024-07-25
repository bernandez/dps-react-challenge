export interface User {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    age: number;
    address: {
      city: string;
    };
    birthDate: string;
    // Add other user properties as needed
  }