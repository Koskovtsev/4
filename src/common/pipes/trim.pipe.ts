import { Injectable, PipeTransform } from '@nestjs/common';

function trimDeep(value: unknown): unknown {
  if (typeof value === 'string') {
    return value.trim();
  }

  if (Array.isArray(value)) {
    return value.map((item) => trimDeep(item));
  }

  if (value !== null && typeof value === 'object' && !(value instanceof Date)) {
    const result: Record<string, unknown> = {};
    for (const [key, val] of Object.entries(value)) {
      result[key] = trimDeep(val);
    }
    return result;
  }

  return value;
}

@Injectable()
export class TrimPipe implements PipeTransform {
  transform(value: unknown): unknown {
    return trimDeep(value);
  }
}
