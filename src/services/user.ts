import {P} from '../types/global'
class ExampleService {
    static async exampleMethod(): P {
      try {
        console.log('Example service method called');
      } catch (error) {
        console.error('Error in exampleMethod:', error);
        throw new Error('Example service error');
      }
    }
  }
  
  export default ExampleService;
  