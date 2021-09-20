import IModel from "./IModel";
import IProject from "./IProject";
import ICable from "./ICable";
import IBoxType from "./IBoxType";
import IPole from "./IPole";
import ObjectID from "bson-objectid";

export default interface IBaseBox extends IModel {
	certified: boolean;
	kind: EnumBoxesType;
	project: IProject | ObjectID
	cables: (ICable | ObjectID)[];
	coords: number[];
	name: string;
	history: any[];
	hierarchyLevel: number;
	boxType: ObjectID | IBoxType;
	pole: ObjectID | IPole;
	lat?: number;
	lng?: number;
	implanted: boolean;
}