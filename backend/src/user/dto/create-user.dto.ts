export class CreateUserDto {
    username: string;
    password: string;
    email: string;
    rank?: string; // Optional
    authenticated?: boolean; // Optional
  }
  