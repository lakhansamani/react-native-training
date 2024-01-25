import { validateEmail } from './validation';
test('email validation test', () => {
  const wrongEmail = 'adfasdadsfas';
  const wrongEmailRes = validateEmail(wrongEmail);
  expect(wrongEmailRes).toBe(false);
});
