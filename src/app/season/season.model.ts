import { Operator } from '../operator/operator.model';
import { SiegeMap } from '../map/map.model';

export class Season {
    constructor(
         public _id: String,
         public name: String,
         public description: String,
         public imageLink: String,
         public year: Number,
         public siegeoperator?: Operator,
         public siegemap?: SiegeMap){}
}

export class SeasonPop {
    constructor(
        public _id: String,
        public name: String,
        public description: String,
        public imageLink: String,
        public year: Number,
        public operator: Operator,
        public map: SiegeMap){}
}