export class usuariosResModel {
  constructor(
    public current_page: number,
    public data: usuarioModel[],
    public first_page_url: string,
    public from: number,
    public last_page: number,
    public last_page_url: string,
    public next_page_url: string,
    public path: string,
    public per_page: number,
    public prev_page_url: string,
    public to: number,
    public total: number
  ) {}
}

export class usuarioModel {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public role: string,
    public created_at: string,
    public updated_at: string
  ) {}
}
