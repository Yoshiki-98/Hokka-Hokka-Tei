import { prefectures } from 'src/data/prefectures';

export function getPrefName(code: number): string | undefined {
  return prefectures.find(pref => pref.code === code)?.name;
}

export function getPrefCode(name: string): number | undefined {
  return prefectures.find(pref => pref.name === name)?.code;
}
