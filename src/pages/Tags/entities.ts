import {NamedEntity} from '../../shared/entities';

export interface Tag extends NamedEntity {
  bgColorHex: string;
  textColorHex: string;
}
