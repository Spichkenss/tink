import { Phone, SharedUser, UserId } from "@/shared/domain/user/types";

import { userRepository } from "../repositories/user-repository";

class UserService {
  async getById(id: UserId): Promise<SharedUser> {
    return userRepository.findUniqueOrThrow({ where: { id } });
  }

  async getByPhone(phone: Phone): Promise<SharedUser | null> {
    return userRepository.findUniqueOrThrow({ where: { phone } });
  }
}

export const userService = new UserService();
