import { Controller, Get,Param } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger'
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
    constructor(private postService: PostService) {
    }

  @Get()
  @ApiOperation({ summary: 'Receive all the posts' })
  public list() {
    return this.postService.list();
  }
  
  @Get(':id')
  @ApiOperation({ summary: 'Get single post' })
  public get(@Param('id') id:number) {
    return this.postService.get(id);
  }
 
}
