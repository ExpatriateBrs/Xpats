import { UserModel } from "../../stores/User/types"

export interface ProfessionalItemCardProps {
    user: UserModel
    id: number
    name: string
    description: string
    services: string[]
    country: string
    navigation: any
    city: string
    category: string
}

export interface SectionProps {
    heightPercentage?: string
}