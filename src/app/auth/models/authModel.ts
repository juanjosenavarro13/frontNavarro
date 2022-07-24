export class loginResponse {
  constructor(public access_token: string, public token_type: string, public expires_in: number) {}
}

export class usuario {
  constructor(public email: string, public password: string) {}
}
