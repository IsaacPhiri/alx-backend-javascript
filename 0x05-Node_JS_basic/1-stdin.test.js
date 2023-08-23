const rl = require('./1-stdin'); // Update the path accordingly

test('User input processing', () => {
  const mockLog = jest.spyOn(console, 'log').mockImplementation();
  rl.emit('line', 'Alice');
  rl.emit('close');
  expect(mockLog).toHaveBeenCalledWith('Your name is: Alice');
  expect(mockLog).toHaveBeenCalledWith('This important software is now closing');
  mockLog.mockRestore();
});
