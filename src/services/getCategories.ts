import { categories } from "../categories";

export const getLocalCategories = (category: string) => {
    if (!category) return [];
    return categories.filter((categoryName: string) => categoryName.toLowerCase().includes(category.toLowerCase())).filter((_: any, index: number) => index < 5)
}