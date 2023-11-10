export type OfferParams = {
    offerType: string
}

export type Estate = OfferParams & {
    estateType: EstateTypes
}

export type EstateTypes = 'apartment' | 'house' | 'room' | 'commercial' | 'plot'
