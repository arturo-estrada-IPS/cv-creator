export interface CreateUserModel {
  name: string;
  email: string;
  password: string;
  phoneNumber?: string;
}

export interface LoginUserModel {
  email: string;
  password: string;
}
