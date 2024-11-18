# App

GymPass-style application.

## Functional Requirements (FRs)
- [x] Users should be able to register;
- [x] Users should be able to authenticate;
- [x] Users should be able to retrieve their logged-in profile;
- [x] Users should be able to retrieve the total number of check-ins they have completed;
- [x] Users should be able to view their check-in history;
- [x] Users should be able to search for nearby gyms (within 10 km);
- [x] Users should be able to search for gyms by name;
- [x] Users should be able to check in at a gym;
- [x] Admins should be able to validate a user's check-in;
- [x] Admins should be able to register new gyms.

## Business Rules (BRs)
- [x] Users should not be able to register with duplicate emails;
- [x] Users cannot perform two check-ins on the same day;
- [x] Users cannot check in unless they are within 100 meters of the gym;
- [x] Check-ins can only be validated within 20 minutes of creation;
- [x] Only administrators can validate check-ins;
- [x] Only administrators can register gyms.

## Non-Functional Requirements (NFRs)
- [x] User passwords must be encrypted;
- [x] Application data must be stored in a PostgreSQL database;
- [x] All data lists must be paginated, displaying 20 items per page;
- [x] Users must be identified using a JWT (JSON Web Token);
