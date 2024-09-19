import { prefsWithCities } from 'src/data/prefs-with-cities';

export function getCityName(cityCode: number): string | undefined {
  return prefsWithCities.flatMap(pref => pref.cities)
    .find(city => city.code === String(cityCode))?.name;
}

export function getCityCode(name: string): string | undefined {
  return prefsWithCities.flatMap(pref => pref.cities)
    .find(city => city.name === name)?.code;
}
