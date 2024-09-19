import { Allergen } from 'src/types/allergen';
import { allergens, AllergenName } from 'src/data/allergens';

export function getAllergenById(id: number): Allergen | undefined {
  return allergens.find(allergen => allergen.id === id);
}

export function getAllergenByName(name: AllergenName): Allergen | undefined {
  return allergens.find(allergen => allergen.name === name);
}

export const getAllnumbers = (): number[] => 
  allergens.map(allergen => allergen.id as number);

export const getAllAllergenNames = (): AllergenName[] => 
  allergens.map(allergen => allergen.name);

export function getAllergenNames(ids: number[]): string[] {
  return ids.map(id => getAllergenById(id)?.name ?? 'Unknown Allergen');
}
