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

export interface Applications {
    id: number
    name: string
    finding: string
    fileName?: string
    userId: number
    createdAt: Date
    status: string
    user: Applicant
    approvedBy: number
    admin?: Admin
    approvedAt: Date
  }