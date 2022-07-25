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
    public created_at: string,
    public updated_at: string
  ) {}
}
