import { Area } from 'src/types/area';
import { areas } from 'src/data/areas';

export function getAreaName(code: number): string | undefined {
  return areas.find(area => area.code === code)?.name;
}

export function getAreaCode(name: string): number | undefined {
  return areas.find(area => area.name === name)?.code;
}

export function getPrefecturesInArea(areaCode: number): number[] | undefined {
  return areas.find(area => area.code === areaCode)?.prefectures;
}

export function getAreaByPrefecture(prefectureCode: number): Area | undefined {
  return areas.find(area => area.prefectures.includes(prefectureCode));
}
