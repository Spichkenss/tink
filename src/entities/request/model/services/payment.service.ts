import { requestRepository } from "../repositories";
import { RequestEntity, RequestId } from "../types";

class PaymentService {
  async confirmPayment(id: RequestId, filePath: string): Promise<RequestEntity> {
    return requestRepository.update({
      where: { id },
      data: { isPaymentConfirmPressed: true, billUrl: filePath },
    });
  }

  async acceptPayment(id: RequestId): Promise<RequestEntity> {
    return requestRepository.update({
      where: { id },
      data: { isAnswered: true, isProcessed: true },
    });
  }

  async rejectPayment(id: RequestId): Promise<RequestEntity> {
    return requestRepository.update({
      where: { id },
      data: {
        isAnswered: true,
        isProcessed: false,
        isPaymentConfirmPressed: false,
      },
    });
  }
}

export const paymentService = new PaymentService();
