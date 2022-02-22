import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
// FIX
// export class JwtAuthGuard extends AuthGuard(['jwt', 'jwt-refresh']) {}
