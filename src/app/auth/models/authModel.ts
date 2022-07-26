export class loginResponse {
  constructor(public access_token: string, public token_type: string, public expires_in: number) {}
}

export class usuario {
  constructor(public email: string, public password: string) {}
}

export class meResponse {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public role: string,
    public created_at: string,
    public updated_at: string
  ) {}
}

export class tokenModel {
  constructor(public access_token: string, public token_type: string, public expires_in: number) {}
}

export class registroModel {
  constructor(
    public email: string,
    public password: string,
    public password_confirmation: string,
    public name: string
  ) {}
}

export class registroResModel {
  constructor(
    public user: {
      id: number;
      name: string;
      email: string;
      role: string;
      created_at: string;
      updated_at: string;
    }
  ) {}
}
