import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Ankit!';
  }

  getAPIResponse():string {
    return 'This is the GET API'
  };

  postAPIResponse():string{
    return 'This is the POST API'
  };
}
