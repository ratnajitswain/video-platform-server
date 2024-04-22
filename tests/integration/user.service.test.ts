import ExampleService from '../../src/services/user';

describe('Example Service', () => {
  it('should execute example method without error', async () => {
    await expect(ExampleService.exampleMethod()).resolves.not.toThrow();
  });
});
