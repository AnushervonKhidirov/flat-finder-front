import type { FC } from 'react'
import type { IRealEstate } from '@utils/types/url-params'

const RealEstatePage: FC<{ params: IRealEstate }> = ({ params }) => {
    return (
        <div>
            {params.offerType} {params.realEstateType}
        </div>
    )
}

export default RealEstatePage
