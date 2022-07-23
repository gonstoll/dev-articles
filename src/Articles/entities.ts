import {NamedEntity} from '../entities';

export interface Tag extends NamedEntity {
  bgColorHex: string;
  textColorHex: string;
}
