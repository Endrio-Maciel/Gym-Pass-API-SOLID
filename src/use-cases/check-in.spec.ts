import { expect, describe, it, beforeEach, vi, afterEach } from 'vitest'
import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository'
import { CheckInUseCase } from './check-in'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { Decimal } from '@prisma/client/runtime/library'
import { MaxNumberOfCheckInsError } from './errors/max-number-of-check-ins-error'
import { MaxDistanceError } from './errors/max-distance-error'

let checkInsRepository: InMemoryCheckInsRepository
let gymsRepository: InMemoryGymsRepository

let sut: CheckInUseCase

describe('Check-in Use Case', ()=>{

  beforeEach(async()=> {
    checkInsRepository = new InMemoryCheckInsRepository()
    gymsRepository = new InMemoryGymsRepository
   
    sut = new CheckInUseCase(checkInsRepository, gymsRepository)

    await gymsRepository.create({
        id: 'gym-01',
        title: 'Java Gym',
        description: '',
        phone: '',
        latitude: -30.0968899,
        longitude: -51.1322256,  
    })
    

    vi.isFakeTimers()
  })

  afterEach(()=>{
    vi.useRealTimers()
  })

    it('should be able to check in', async () => {

    const { checkIn } = await sut.execute({
     gymId: 'gym-01',
     userId: 'user-01',
     userLatitude: -30.0968899,
     userLongitude: -51.1322256,
    })

    expect(checkIn.id).toEqual(expect.any(String))
    
    })

     
    it('should not be able to check in twice in the same day', async () => {
   
        vi.setSystemTime(new Date(2024, 10, 15, 8, 0, 0))

        await sut.execute({
         gymId: 'gym-01',
         userId: 'user-01',
         userLatitude: -30.0968899,
         userLongitude: -51.1322256,
        })
        await expect(()=> sut.execute({
        gymId: 'gym-01',
        userId: 'user-01',
        userLatitude: -30.0968899,
        userLongitude: -51.1322256,
           })).rejects.toBeInstanceOf(MaxNumberOfCheckInsError)
        })

    it('should be able to check in twice but in different days', async () => {
   
        vi.setSystemTime(new Date(2024, 10, 15, 8, 0, 0))
    
        await sut.execute({
            gymId: 'gym-01',
            userId: 'user-01',
            userLatitude: -30.0968899,
            userLongitude: -51.1322256,
        
            })

        vi.setSystemTime(new Date(2024, 11, 15, 8, 0, 0))
        
        const {checkIn} = await sut.execute({
            gymId: 'gym-01',
            userId: 'user-01',
            userLatitude: -30.0968899,
            userLongitude: -51.1322256,
        })
        
        expect(checkIn.id).toEqual(expect.any(String))
    })
            
    it('should not be able to check in on distant gym', async () => {

        gymsRepository.items.push({
            id: 'gym-02',
            title: 'Java Gym',
            description: '',
            phone: '',
            latitude: new Decimal(-30.0968899),
            longitude: new Decimal(-51.1322256),
        })

        await expect(() => sut.execute({
         gymId: 'gym-01',
         userId: 'user-01',
         userLatitude: -30.1504153,
         userLongitude: -51.0622623,
        })).rejects.toBeInstanceOf(MaxDistanceError)

        
    
    })

})

