export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthDate: Date;
  gender: EGender;
  profilePicture?: Buffer;
  mimeType?:string,
  role: ERole;
  nivauxScolaire?: string;
  filiere?:string,
  branche?:string,
  riasec: object
}

export enum EGender {
  MALE = 'male',
  FEMALE = 'female',
}

export enum ERole {
  STUDENT = 'student',
  ADMIN = 'admin',
}
