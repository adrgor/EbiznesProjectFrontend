const CustomerInfo = (props) => {
    return (
        <div className="customer-info" style={{width: "40%", padding: "1em"}}>
            <form style={{display:"flex", flexDirection: "column"}}>
                <input value={props.email} required placeholder="Email address * " onChange={(e) => props.setEmail(e.target.value)}></input>
                <input value={props.repeatEmail} required placeholder="Confirm email address * " onChange={(e) => props.setRepeatEmail(e.target.value)}></input>
                <input value={props.firstName} required placeholder="First name * " onChange={(e) => props.setFirstName(e.target.value)}></input>
                <input value={props.lastName} required placeholder="Last name * " onChange={(e) => props.setLastName(e.target.value)}></input>
                <input value={props.street} required placeholder="Street * " onChange={(e) => props.setStreet(e.target.value)}></input>
                <input value={props.buildingNumber} type="number" required placeholder="Building number * " onChange={(e) => props.setBuildingNumber(e.target.value)}></input>
                <input value={props.apartmentNumber} type="number" required placeholder="Apartment number" onChange={(e) => props.setApartmentNumber(e.target.value)}></input>
                <input value={props.city} required placeholder="City * " onChange={(e) => props.setCity(e.target.value)}></input>
                <input value={props.postalCode} required placeholder="Postal code * " onChange={(e) => props.setPostalCode(e.target.value)}></input>
                <input value={props.country} required placeholder="Country * " onChange={(e) => props.setCountry(e.target.value)}></input>
                <input value={props.phone} type="number" required placeholder="Phone number * " onChange={(e) => props.setPhone(e.target.value)}></input>
            </form>
        </div>
    )
}

export default CustomerInfo