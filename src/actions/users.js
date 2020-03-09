export const RECEIVE_USERS = 'RECEIVE_USERS';

export function receiveUsers(Users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}
