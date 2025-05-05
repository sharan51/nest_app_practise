// src/modules/users/dto/create-user.dto.ts
export class CreateUserDto {
  id?: number;
  firstName: string;
  lastName: string;
  isActive?: boolean;
}
