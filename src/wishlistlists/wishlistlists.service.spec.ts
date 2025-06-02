import { Test, TestingModule } from '@nestjs/testing';
import { WishlistlistsService } from './wishlistlists.service';

describe('WishlistlistsService', () => {
  let service: WishlistlistsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WishlistlistsService],
    }).compile();

    service = module.get<WishlistlistsService>(WishlistlistsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
