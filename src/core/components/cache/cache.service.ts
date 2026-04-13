import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class CacheService {
  private logger = new Logger(CacheService.name);
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) { }

  async getCache(key: string): Promise<any> {
    try {
      return await this.cacheManager.get(key);
    } catch (error) {
      this.logger.error('get cache Error', error);
      return null;
    }
  }

  async setCache(key: string, value: any, ttl?: number): Promise<any> {
    try {
      if (value === null) {
        value = false;
      }
      if (ttl) {
        return await this.cacheManager.set(key, value, { ttl } as any);
      } else {
        return await this.cacheManager.set(key, value);
      }
    } catch (error) {
      this.logger.error('set cache Error', error);
      return null;
    }
  }

  async getWithCache(
    cacheKey: string,
    fetchDataFn: () => Promise<any>,
    ttl = 1800, // TTL mặc định là 30 phút
  ): Promise<any> {
    // Kiểm tra cache trước
    const cacheData = await this.getCache(cacheKey);
    if (cacheData) {
      return cacheData;
    }

    // Nếu không có trong cache, gọi hàm lấy dữ liệu
    const data = await fetchDataFn();

    // Lưu dữ liệu vào cache
    await this.setCache(cacheKey, data, ttl);

    return data;
  }

  // clear all cache in redis when import data success
  async clearCache(listCacheKeys: string[]) {
    this.logger.debug(`start clear cache lists = ${listCacheKeys}`);

    const store = (this.cacheManager as any).stores?.[0];

    for (const cacheKey of listCacheKeys) {
      if (cacheKey.includes('*')) {
        const keys = await store.keys(cacheKey);

        for (const key of keys) {
          await this.cacheManager.del(key);
          this.logger.debug(`clear cache key = ${key} success`);
        }
      } else {
        await this.cacheManager.del(cacheKey);
        this.logger.debug(`clear cache key = ${cacheKey} success`);
      }
    }

    this.logger.debug(`end clear cache lists = ${listCacheKeys}`);
  }
}
