import { Model, Types } from 'mongoose';
import type { FilterQuery } from 'mongoose/lib/query';
import { BaseInterfaceMongoRepository } from './base.interface.repository';

export abstract class BaseAbstractMongoRepository<
  T,
> implements BaseInterfaceMongoRepository<T> {
  protected model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  public async create(data: T): Promise<T> {
    return await this.model.create(data);
  }

  public async findOneById(id: string): Promise<T | null> {
    return (await this.model
      .findOne({ _id: id, deletedAt: null } as any)
      .lean()) as T | null;
  }

  public async findOneByCode(code: string): Promise<T | null> {
    return (await this.model
      .findOne({ code, deletedAt: null } as any)
      .lean()) as T | null;
  }

  public async findOneByCondition(
    filterCondition: FilterQuery<T>,
  ): Promise<T | null> {
    const condition = (filterCondition as any)?.id
      ? {
        _id: (filterCondition as any).id,
        deletedAt: null,
        ...filterCondition,
      }
      : filterCondition;

    return (await this.model.findOne(condition).lean()) as T | null;
  }

  public async findAll(): Promise<T[]> {
    return (await this.model.find().lean()) as T[];
  }

  public async remove(id: string): Promise<any> {
    return await this.model.deleteOne({ _id: id });
  }

  public async findByIdAndUpdate(
    id: string,
    data: Partial<T>,
  ): Promise<T | null> {
    return (await this.model
      .findByIdAndUpdate(id, data, { new: true })
      .lean()) as T | null;
  }

  public async deleteByCondition(condition: FilterQuery<T>): Promise<any> {
    return await this.model.deleteOne(condition);
  }

  public async updateByCondition(
    condition: FilterQuery<T>,
    data: Partial<T>,
  ): Promise<any> {
    return await this.model.updateOne(condition, data);
  }

  public async findAllByCondition(
    condition: FilterQuery<T>,
    sort?: any,
  ): Promise<T[]> {
    const query = this.model.find(condition);
    if (sort) query.sort(sort);
    return (await query.lean()) as T[];
  }

  public async createMany(data: T[]): Promise<T[]> {
    return await this.model.insertMany(data);
  }

  public async softDelete(id: string, userId?: number): Promise<any> {
    return await this.model.findOneAndUpdate(
      { _id: new Types.ObjectId(id), deletedAt: null } as any,
      {
        deletedAt: new Date(),
        deletedBy: userId,
      } as any,
      { new: true },
    );
  }

  public async findAllWithPopulate(
    condition: FilterQuery<T>,
    populate: string | string[],
  ): Promise<T[]> {
    return (await this.model.find(condition).populate(populate).lean()) as T[];
  }

  public async findOneWithPopulate(
    condition: FilterQuery<T>,
    populate: string | string[],
  ): Promise<T | null> {
    return (await this.model
      .findOne(condition)
      .populate(populate)
      .lean()) as T | null;
  }

  public async find(condition?: FilterQuery<T>): Promise<T[]> {
    return (await this.model
      .find({ ...condition, deletedAt: null })
      .lean()) as T[];
  }

  public async count(condition?: FilterQuery<T>): Promise<number> {
    return await this.model.countDocuments(condition || {});
  }

  public async updateManyByCondition(
    condition: FilterQuery<T>,
    dataUpdate: Partial<T>,
  ): Promise<any> {
    return await this.model.updateMany(condition, dataUpdate);
  }

  public async createOrUpdate(dataUpdate: any): Promise<any> {
    return await this.model.findOneAndUpdate(
      { _id: dataUpdate._id },
      dataUpdate,
      { upsert: true, new: true, runValidators: true },
    );
  }

  public async bulkWrite(bulkOps: any): Promise<any> {
    return await this.model.bulkWrite(bulkOps);
  }

  public async deleteMany(condition: FilterQuery<T>): Promise<any> {
    return await this.model.deleteMany(condition);
  }
}
