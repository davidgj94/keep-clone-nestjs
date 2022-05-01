import { model, Schema, Model, HydratedDocument } from 'mongoose';
import { Label } from '../entities/label.entity';

type ILabel = Omit<Label, 'id'> & {
  user: string;
};

export type LabelDocument = HydratedDocument<ILabel>;

interface LabelModel extends Model<ILabel> {
  findUserLabels(userId: string): Promise<LabelDocument[]>;
}

const LabelSchema = new Schema<ILabel, LabelModel>({
  name: { type: String, required: true, unique: true },
  user: {
    type: String,
    index: true,
  },
});

LabelSchema.path('name').validate(async function (
  this: LabelDocument,
  name: string,
) {
  if (!this.isNew && !this.isModified('name')) return true;
  const count = await model(LabelsModelDefinition.name).find({ name }).count();
  if (count) return false;
  return true;
},
"Label's name must be unique");

LabelSchema.statics.findUserLabels = async function (
  this,
  userId: string,
): Promise<LabelDocument[]> {
  return await this.find({ user: userId });
};

LabelSchema.set('toJSON', {
  virtuals: true,
});

const LabelsModelDefinition = { name: 'Labels', schema: LabelSchema };

export default LabelsModelDefinition;
