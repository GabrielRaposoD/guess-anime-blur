import { Prisma } from '@prisma/client';
import { getCurrentCharacter } from '@/services';

type CharacterWithAnime = Prisma.PromiseReturnType<typeof getCurrentCharacter>;

export type { CharacterWithAnime };
