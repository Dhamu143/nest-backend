import { Injectable ,HttpException} from '@nestjs/common';
import * as data from './data/post.json';
@Injectable()
export class PostService {

    constructor() {}

    /* 
    /*This function will return all post
    */
    
    async list(): Promise < any > {
        try {
            if (data.length) {
              return data;
            } else {
              throw new HttpException("posts is not available", 500);
            }
            
        } catch (err) {
            throw new HttpException(err, 500);
        }
    }

    /* 
    /*This function will return sepcific post by its id
    */
    
    async get(id: number): Promise < any > {
        try {
            if (!id) {
                throw new HttpException("post id is required", 500);
            }
            const post = data.find((post) => post.id == id);
            if ( post && post.id) {
                return post;
              } else {
                throw new HttpException("the post is not available", 500);
              }
        } catch (err) {
            throw new HttpException(err, 500);
        }
    }
  }