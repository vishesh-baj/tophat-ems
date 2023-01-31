export interface employees {
    _id: string;
    firstName: string;
    lastName: string;
    primaryContactNumber: string;
    secondaryContactNumber: string;
    primaryAddress: string;
    secondaryAddress: string;
    officialEmail: string;
    personalEmail: string;
    dateOfBirth: Date;
    designation: string;
    department: string;
    experience: string;
    dateOfJoining: Date;
    dateOfReleiving: Date;
    documents: string[];
    role: string;
    _updatedAt: Date;
    _createdAt: Date;
}