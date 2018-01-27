import memoryHistory from 'history/createMemoryHistory';

export default {
  createHistory: memoryHistory,
  logger: {
    debug: jest.fn(),
    error: jest.fn(),
    info: jest.fn(),
    log: jest.fn(),
    warn: jest.fn(),
  },
};
