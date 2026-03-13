export default function Friend({ friend }) {
    console.log(friend);
    const { name, email, username, phone } = friend;
    return (
        <div className="card">
            <h4>Name: {name} </h4>
            <h5> Enail: {email}</h5>
            <p>Username: {username}</p>
            <p>Phone: {phone}</p>

        </div>
    )
}