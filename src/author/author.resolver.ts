import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Author } from 'src/models/author.model';
import { AuthorService } from './author.service';

@Resolver((of) => Author)
export class AuthorResolver {
  constructor(
    private authorService: AuthorService,
    // private postsService: PostsService,
  ) {}

  @Query((returns) => Author)
  async author(@Args('id', { type: () => Int }) id: number) {
    return this.authorService.findOneById(id.toString());
  }

  @ResolveField()
  async posts(@Parent() author: Author) {
    const { id } = author;
    // return this.postsService.findAll({ authorId: id });
  }
}
