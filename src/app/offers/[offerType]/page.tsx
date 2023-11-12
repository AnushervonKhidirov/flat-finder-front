import type { FC } from 'react'
import type { OfferParams } from '@utils/types/url-params'

import Offers from '@components/offer/offer'

const OffersPage: FC<{ params: OfferParams }> = ({ params }) => {
    return (
        <div>
            <Offers />
        </div>
    )
}

export default OffersPage
