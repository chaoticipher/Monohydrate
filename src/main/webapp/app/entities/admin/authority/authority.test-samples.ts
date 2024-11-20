import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'd9858295-c6aa-44fc-adf4-356417952da7',
};

export const sampleWithPartialData: IAuthority = {
  name: 'df7da08a-f82c-4344-b653-608f7dbca03c',
};

export const sampleWithFullData: IAuthority = {
  name: 'e2ef8f9c-278f-4a51-a5cc-e814344be7e8',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
