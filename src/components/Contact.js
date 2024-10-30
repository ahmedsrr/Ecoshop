import React, { useState } from 'react';
const Contact = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [error, setError] = useState('');
const handleSubmit = (e) => {
e.preventDefault();
if (!name || !email || !message) {
setError('Tous les champs sont obligatoires.');
return;
}
// Envoyer le formulaire
console.log({ name, email, message });
setError('');
};
return (
<form onSubmit={handleSubmit}>

<input type="text" placeholder="Nom"
value={name} onChange={(e) =>
setName(e.target.value)} />
<input type="email" placeholder="Email"
value={email} onChange={(e) =>
setEmail(e.target.value)} />
<textarea placeholder="Message"
value={message} onChange={(e) =>
setMessage(e.target.value)} />
<button type="submit">Envoyer</button>
{error && <p>{error}</p>}
</form>
);
};
export default Contact;