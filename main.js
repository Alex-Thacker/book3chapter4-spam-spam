let emails = customers.map(element => {
    return element.contacts.email.map(email => {
        return email
    })
}
)

console.log(emails)