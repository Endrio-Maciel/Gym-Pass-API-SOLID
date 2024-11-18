import { UsersRepository } from "@/repositories/users-repository"
import brcypt from "bcryptjs"
import { UserAlreadyExistsError } from "./errors/user-already-exists-error"
import { Gym, User } from "@prisma/client"
import { GymsRepository } from "@/repositories/gyms-repository"

const hash = brcypt.hash

interface CreateGymUseCaseRequest {
    title: string
    description: string | null
    phone: string | null
    latitude: number
    longitude: number 
}

interface CreateGymUseCaseResponse {
    gym: Gym
}

export class CreateGymUseCase {
  
    constructor(private gymsRepository: GymsRepository){}
    
    async execute(
        {
            title,
            description,
            phone,
            latitude,
            longitude,
         }: CreateGymUseCaseRequest): Promise<CreateGymUseCaseResponse> { 
        
    
        const gym = await this.gymsRepository.create({
            title,
            description,
            phone,
            latitude,
            longitude,
        })
        return {gym}
    }

}