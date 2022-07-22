export interface Entity {
  id: number;
}

export interface NamedEntity extends Entity {
  name: string;
}

export interface DeletableEntity extends Entity {
  isDeleted: boolean;
}
