import { Request, Response } from 'express';

class ExampleController {
  // Example controller method
  static async exampleMethod(req: Request, res: Response): Promise<void> {
    try {
      // Your logic here
      res.status(200).json({ message: 'Example method called successfully' });
    } catch (error) {
      console.error('Error in exampleMethod:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default ExampleController;
