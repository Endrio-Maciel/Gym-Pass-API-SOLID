import { CheckIn } from "@prisma/client";
import { CheckInsRespository } from "@/repositories/check-ins-repository";

interface GetUserMetricsUseCaseRequest {
    userId: string
}

interface GetUserMetricsUseCaseResponse {
    checkInCount: number
}

export class GetUserMetricsUseCase {
    constructor( private checkInsRepository: CheckInsRespository) {}

    async execute({ userId }: GetUserMetricsUseCaseRequest): Promise<GetUserMetricsUseCaseResponse> {

        const checkInCount = await this.checkInsRepository.countByUserId(userId)

        return{
            checkInCount,
        } 
    }
}
