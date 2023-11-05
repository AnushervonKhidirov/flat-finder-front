import type { FC } from 'react'
import type { IOffer } from '@utils/types/offer'

import Button from '@components/common/button/Button'

import { offers } from './constant'
import styles from './offer.module.css'

const Offers: FC = () => {
    return (
        <div className={styles.offer_list}>
            {offers.map(offer => (
                <Offer offer={offer} key={offer.id} />
            ))}
        </div>
    )
}

const Offer: FC<{ offer: IOffer }> = ({ offer }) => {
    return (
        <div className={styles.offer}>
            <OfferImage src={offer.image} />
            <OfferInfo offer={offer} />
        </div>
    )
}

const OfferImage: FC<{ src: string }> = ({ src }) => {
    return <div className={styles.offer_image} style={{ backgroundImage: `url(${src})` }} />
}

const OfferInfo: FC<{ offer: IOffer }> = ({ offer }) => {
    return (
        <div className={styles.offer_info}>
            <GeneralInfo offer={offer} />
            <Price price={offer.price} squareFootage={offer.squareFootage} />
            <Description desc={offer.description} />
            <OfferFooter />
        </div>
    )
}

const GeneralInfo: FC<{ offer: IOffer }> = ({ offer }) => {
    return (
        <div className={styles.general_info}>
            <Params squareFootage={offer.squareFootage} rooms={offer.rooms} />
            <Floor cur={offer.floor} total={offer.totalFloors} />
            <Address address={offer.address} />
        </div>
    )
}

const Params: FC<{ squareFootage: number; rooms: number }> = ({ squareFootage, rooms }) => {
    return (
        <div className={styles.params}>
            {squareFootage}м<sup>2</sup>, {rooms}-комнатная квартира
        </div>
    )
}

const Floor: FC<{ cur: number; total: number }> = ({ cur, total }) => {
    return (
        <div className={styles.floor}>
            {cur} этаж из {total}
        </div>
    )
}

const Address: FC<{ address: string }> = ({ address }) => {
    return <div className={styles.address}>{address}</div>
}

const Price: FC<{ price: number; squareFootage: number }> = ({ price, squareFootage }) => {
    return (
        <div className={styles.price_wrapper}>
            <div className={styles.price}>{price}с</div>
            <div className={styles.price_sf}>
                {Math.round(price / squareFootage)}c за м<sup>2</sup>
            </div>
        </div>
    )
}

const Description: FC<{ desc: string }> = ({ desc }) => {
    return <div className={styles.description}>{desc}</div>
}

const OfferFooter: FC = () => {
    return (
        <div className={styles.offer_footer}>
            <Button>Show number</Button>
            <Button>Compare</Button>
        </div>
    )
}

export default Offers
