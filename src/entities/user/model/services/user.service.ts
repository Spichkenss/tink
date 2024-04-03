import { Phone, SharedUser, UserId } from "@/shared/domain/user/types";

import { userRepository } from "../repositories/user-repository";

class UserService {
  async getById(id: UserId): Promise<SharedUser | null> {
    return userRepository.findUnique({ where: { id } });
  }

  async getByPhone(phone: Phone): Promise<SharedUser | null> {
    return userRepository.findUnique({ where: { phone } });
  }
}

export const userService = new UserService();
