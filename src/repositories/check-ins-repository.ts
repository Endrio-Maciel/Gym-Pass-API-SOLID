import { CheckIn, Prisma } from "@prisma/client";

export interface CheckInsRespository{
    create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn>
    findManyByUserId(userId: string, page: number): Promise<CheckIn[]>
    findById(id: string): Promise<CheckIn | null>
    countByUserId(userId: string): Promise<number>
    findByUserIdOnDate(userId: string, date: Date): Promise<CheckIn | null> 
    findByUserIdOnDate(userId: string, date: Date): Promise<CheckIn | null> 
    save(checkIn: CheckIn): Promise<CheckIn>
}

