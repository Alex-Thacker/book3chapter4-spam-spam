let emails = customers.map(element => {
    return element.contacts.email.map(email => {
        return email
    })
}
)
let empty = []
let array = empty.concat.apply(empty, emails)

console.log(array)