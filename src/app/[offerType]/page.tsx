import type { FC } from 'react'
import type { IOfferParams } from '@utils/types/url-params'

import Offers from '@components/offer/offer'

const OffersPage: FC<{ params: IOfferParams }> = ({ params }) => {
    return (
        <div>
            <Offers />
        </div>
    )
}

export default OffersPage
