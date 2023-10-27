export const sendContactForm = async (data) => {
	const { name, lastName, subject, email, message } = data;

	const res = await fetch('/api/contact', {
		method: 'POST',
		body: JSON.stringify({ name, lastName, subject, email, message }),
		headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
	}).then((res) => {
		if (!res.ok) throw new Error('Failed to send message');
		return res.json();
	});
};
