export class UseCreate {
  private id: number;
  private name: string;
  private email: string;
  private password: string;
  private address: string;
  private telephone: string;
  private filePath: string;
  private isBlocked: boolean;
  private unblockDate: number;
  private createdAt: number;

  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public getPassword(): string {
    return this.password;
  }

  public setPassword(password: string): void {
    this.password = password;
  }

  public getAddress(): string {
    return this.address;
  }

  public setAddress(address: string): void {
    this.address = address;
  }

  public getTelephone(): string {
    return this.telephone;
  }

  public setTelephone(telephone: string): void {
    this.telephone = telephone;
  }

  public getFilePath(): string {
    return this.filePath;
  }

  public setFilePath(filePath: string): void {
    this.filePath = filePath;
  }

  public isIsBlocked(): boolean {
    return this.isBlocked;
  }

  public setIsBlocked(isBlocked: boolean): void {
    this.isBlocked = isBlocked;
  }

  public getUnblockDate(): number {
    return this.unblockDate;
  }

  public setUnblockDate(unblockDate: number): void {
    this.unblockDate = unblockDate;
  }

  public getCreatedAt(): number {
    return this.createdAt;
  }

  public setCreatedAt(createdAt: number): void {
    this.createdAt = createdAt;
  }
}
