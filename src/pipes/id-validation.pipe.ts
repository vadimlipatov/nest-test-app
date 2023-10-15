import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class IdValidationPipe implements PipeTransform {
  transform(value: any) {
    if (!Number.isFinite(+value)) {
      throw new BadRequestException('Id must be numeric');
    }
    if (Number(value) < 1) {
      throw new BadRequestException('Id can not be less than 1');
    }
    if (Number(value) > 100) {
      throw new BadRequestException('Id can not be more than 100');
    }

    return value;
  }
}
