import { Module } from '@nestjs/common'

import { CreateAccountController } from './controllers/create-account.controller'
import { AuthenticateController } from './controllers/authenticate.controller'
import { CreateQuestionController } from './controllers/create-question.controller'

import { PrismaService } from '../database/prisma.service'

@Module({
  controllers: [
    AuthenticateController,
    CreateAccountController,
    CreateQuestionController,
  ],
  providers: [PrismaService],
})
export class HttpModule {}
