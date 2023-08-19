export class UseCreate {
  public name: string;
  public email: string;
  public password: string;
  public address: string;
  public telephone: string;
  public filePath: string;
  public isBlocked: boolean;
  public unblockDate: Date | string;
  public createdAt: Date | string;

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

  public getUnblockDate(): Date | string {
    return this.unblockDate;
  }

  public setUnblockDate(unblockDate: Date | string): void {
    this.unblockDate = unblockDate;
  }

  public getCreatedAt(): Date | string {
    return this.createdAt;
  }

  public setCreatedAt(createdAt: Date | string): void {
    this.createdAt = createdAt;
  }
}
