import CustomerInfo from './CustomerInfo'
import CheckoutSummary from './CheckoutSummary'
import { useState, useContext } from 'react'
import StripeWrapper from '../StripeWrapper'
import { BasketContext } from '../App'

export const Checkout = () => {
    const [isCardView, setIsCardView] = useState(true)
    const changeView = () => {
        setIsCardView((prevValue) => !prevValue)
    }

    const basket = useContext(BasketContext)

    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [street, setStreet] = useState("")
    const [buildingNumber, setBuildingNumber] = useState("")
    const [apartmentNumber, setApartmentNumber] = useState("")
    const [city, setCity] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [country, setCountry] = useState("")
    const [phone, setPhone] = useState("")

    return (
        <div className="checkout-page">
            {isCardView && <CustomerInfo setEmail={setEmail} email={email} setFirstName={setFirstName} firstName={firstName} setLastName={setLastName} lastName={lastName} setStreet={setStreet} street={street} 
                            setBuildingNumber={setBuildingNumber} buildingNumber={buildingNumber} setApartmentNumber={setApartmentNumber} apartmentNumber={apartmentNumber} setCity={setCity} city={city} setPostalCode={setPostalCode} 
                            postalCode={postalCode} setCountry={setCountry} country={country} setPhone={setPhone} phone={phone}/>}

            {!isCardView && <StripeWrapper addressDetails={{email, firstName, lastName, street, buildingNumber, apartmentNumber, city, postalCode, country, phone}} basket={basket}/>}

            <CheckoutSummary changeView={changeView} isCardView={isCardView}/>
        </div>
    )
}
