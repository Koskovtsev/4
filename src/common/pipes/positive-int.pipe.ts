import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class PositiveIntPipe implements PipeTransform<unknown, number> {
  transform(value: unknown, metadata: ArgumentMetadata): number {
    console.log('RAW VALUE IN PIPE:', value, typeof value);
    const parsed = Number(value);
    if (!Number.isInteger(parsed) || parsed <= 0) {
      throw new BadRequestException(
        `Параметр "${metadata.data}" має бути цілим додатним числом, ви ввели: "${value}"`,
      );
    }
    return parsed;
  }
}
