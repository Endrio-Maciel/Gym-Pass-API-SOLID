import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { RegisterUseCase } from './register'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { CreateGymUseCase } from './create-gym'

let gymsRepository: InMemoryGymsRepository
let sut: CreateGymUseCase


describe('Create Gym Use Case', ()=>{

  beforeEach(()=> {
    gymsRepository = new InMemoryGymsRepository()
    sut = new CreateGymUseCase(gymsRepository)
  })

  it('should be able to create Gym', async () => {
   
    const { gym } = await sut.execute({
    title: 'Java Gym',
    description: null,
    phone: null,
    latitude: -30.0968899,
    longitude: -51.1322256,
    })
    
     expect(gym.id).toEqual(expect.any(String))
      
    }) 

})

