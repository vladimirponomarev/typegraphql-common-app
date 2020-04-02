import { Query, Resolver } from 'type-graphql';
import { User } from '../../object-types/User';

@Resolver()
export class ProfileResolver {
  @Query(() => User)
  async profile(): Promise<User> {
    return {
      firstName: 'John',
      lastName: 'Doe'
    };
  }
}

