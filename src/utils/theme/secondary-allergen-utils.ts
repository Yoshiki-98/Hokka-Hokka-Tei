import { SecondaryAllergen } from 'src/types/secondary-allergen';
import { secondaryAllergens, SecondaryAllergenName } from 'src/data/secondary-allergens';

export function getSecondaryAllergenById(id: number): SecondaryAllergen | undefined {
  return secondaryAllergens.find(allergen => allergen.id === id);
}

export function getSecondaryAllergenByName(name: SecondaryAllergenName): SecondaryAllergen | undefined {
  return secondaryAllergens.find(allergen => allergen.name === name);
}

export const getAllnumbers = (): number[] => 
  secondaryAllergens.map(allergen => allergen.id as number);

export const getAllSecondaryAllergenNames = (): SecondaryAllergenName[] => 
  secondaryAllergens.map(allergen => allergen.name);

export function getSecondaryAllergenNames(ids: number[]): string[] {
  return ids.map(id => getSecondaryAllergenById(id)?.name ?? 'Unknown Secondary Allergen');
}
