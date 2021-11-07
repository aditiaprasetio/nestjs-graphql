import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async create(data: any): Promise<any> {
    return {} as any;
  }

  async findOneById(id: string): Promise<any> {
    return {} as any;
  }

  async findAll(recipesArgs: any): Promise<any[]> {
    return [] as any[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
