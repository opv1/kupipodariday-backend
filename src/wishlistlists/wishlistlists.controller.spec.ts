import { Test, TestingModule } from '@nestjs/testing';
import { WishlistlistsController } from './wishlistlists.controller';

describe('WishlistlistsController', () => {
  let controller: WishlistlistsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WishlistlistsController],
    }).compile();

    controller = module.get<WishlistlistsController>(WishlistlistsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
