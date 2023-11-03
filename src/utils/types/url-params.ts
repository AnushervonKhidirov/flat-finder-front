export interface IOfferParams {
    offerType: string
}

export interface IRealEstate extends IOfferParams {
    realEstateType: TRealEstate
}

export type TRealEstate = 'apartment' | 'house' | 'room' | 'commercial' | 'plot'
