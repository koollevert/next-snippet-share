//create prima client

import {PrismaClient} from '@prisma/client';
// import { PrismaClient } from '../prisma/generated/clientPg'

export const db = new PrismaClient();