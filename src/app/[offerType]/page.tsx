import type { FC } from 'react'
import type { IOfferParams } from '@utils/types/url-params'

const OffersPage: FC<{ params: IOfferParams }> = ({ params }) => {
    return <div>{params.offerType}</div>
}

export default OffersPage
