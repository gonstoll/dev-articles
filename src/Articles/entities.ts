import {NamedEntity} from '../entities';

export interface Tag extends NamedEntity {
  bg_color_hex: string;
  text_color_hex: string;
}
