// import * as mongoose from 'mongoose';
// import { BaseModel } from '@core/schema/base.schema';
// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import {
//   ActiveEnum,
//   IMobioDeal,
//   IS_SETTLE_DEAL,
// } from './interfaces/mobio.deal.interface';

// @Schema()
// class DealOwner {
//   @Prop({
//     type: String,
//   })
//   dealOwnerId: string;

//   @Prop({
//     type: String,
//   })
//   dealOwnerEmail: string;

//   @Prop({
//     type: String,
//   })
//   userIdHris: string;

//   @Prop({
//     type: String,
//   })
//   codeT24: string;

//   @Prop({
//     type: String,
//   })
//   hubCode: string;

//   @Prop({
//     type: Number,
//   })
//   departmentLevel: number;
// }

// @Schema()
// class Product {
//   @Prop({
//     type: String,
//   })
//   productCode: string;

//   @Prop({
//     type: String,
//   })
//   productName: string;
// }

// @Schema({ collection: 'MobioDeals', timestamps: true })
// export class MobioDealModel extends BaseModel implements IMobioDeal {
//   @Prop({
//     type: String,
//     unique: true,
//     required: true,
//   })
//   dealId: string;

//   @Prop({
//     type: String,
//     required: false,
//   })
//   dealCode: string;

//   @Prop({
//     type: String,
//     required: false,
//   })
//   stateCode: string;

//   @Prop({
//     type: String,
//     required: false,
//   })
//   stateId: string;

//   @Prop({
//     type: Product,
//     required: false,
//   })
//   product: Product; // Product Line - Dòng sản phẩm - Product level 0

//   @Prop({
//     type: String,
//     required: false,
//   })
//   saleProcessId: string;

//   @Prop({
//     type: Number,
//     required: false,
//   })
//   stateRatio: number;

//   @Prop({
//     type: String,
//     required: false,
//   })
//   name: string;

//   @Prop({
//     required: false,
//     type: Date,
//   })
//   statusSuccessAt: Date;

//   @Prop({
//     type: [
//       {
//         type: String,
//       },
//     ],
//     required: false,
//   })
//   createdByDepartments: string[];

//   @Prop({
//     type: String,
//     required: false,
//   })
//   createdByRole: string;

//   @Prop({
//     type: DealOwner,
//     required: false,
//   })
//   dealOwner: DealOwner;

//   @Prop({
//     type: Number,
//     required: false,
//     default: 0,
//   })
//   dealValue: number;

//   @Prop({
//     type: Number,
//     required: false,
//   })
//   createdTime: number;

//   @Prop({
//     type: Number,
//     enum: ActiveEnum,
//     required: false,
//   })
//   status: ActiveEnum;

//   @Prop({
//     type: String,
//   })
//   mPathDepartment: string;

//   @Prop({
//     type: String,
//   })
//   mPathGroupRole: string;

//   @Prop({
//     type: Number,
//   })
//   dealValueInitial: number;

//   @Prop({
//     type: String,
//   })
//   profileId: string;

//   @Prop({
//     type: Number,
//     enum: IS_SETTLE_DEAL,
//     default: IS_SETTLE_DEAL.NO,
//   })
//   isSettle: number;

//   @Prop({
//     type: [String],
//     default: null,
//   })
//   productLevel1?: string[]; // Product Type - Loại sản phẩm - Product level 1

//   @Prop({
//     type: String,
//     default: null,
//   })
//   campaign?: string;

//   @Prop({
//     type: [String],
//     default: null,
//   })
//   products?: string[]; // Tất cả thông tin sản phẩm

//   @Prop({
//     type: mongoose.Schema.Types.Mixed,
//     required: false,
//     default: null,
//   })
//   allFields: any; // save all field for kpi

//   @Prop({
//     type: mongoose.Schema.Types.Mixed,
//     default: null,
//   })
//   updatedField: any;

//   @Prop({
//     type: mongoose.Schema.Types.Mixed,
//     required: false,
//     default: null,
//   })
//   customer: any; // save all field for kpi
// }

// export const MobioDealSchema = SchemaFactory.createForClass(MobioDealModel);
