import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: '28fc4eea-2873-4da8-b0ec-de9fc5f52d74',
  login: 'fbUB!C@qQxj8\\MrsOR\\BGSNAA\\yCyBcys\\-Q0\\Gt3vT7',
};

export const sampleWithPartialData: IUser = {
  id: '9e4d4198-c06d-4098-8611-e17fb196b0fd',
  login: 'cC',
};

export const sampleWithFullData: IUser = {
  id: '8bfdd5ba-fe9e-4e75-81b4-cf02f8fc9dba',
  login: 'l3e@',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
