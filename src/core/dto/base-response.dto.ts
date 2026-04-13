import { Expose, Transform } from 'class-transformer';

export class BaseResponseDto {
  @Expose()
  @Transform(({ obj }) => obj?.id ?? obj?._id?.toString())
  id: string;
}
