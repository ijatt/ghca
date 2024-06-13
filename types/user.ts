import type { applicant } from "@prisma/client";

export interface User{
    id: number;
    email: string;
    role: "APPLICANT" | "ADMIN";
    applicant?: Applicant
    admin?: Admin
}

interface Applicant {
    name: string;
    contactNumber?: string;
    icNumber?: string;
    address?: string;
    city?: string;
    postcode?: string;
    occupation?: string;
    universityName?: string;
}

interface Admin {
    name: string;
    department: string;
}