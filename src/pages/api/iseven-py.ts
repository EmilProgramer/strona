export async function GET() {
	return new Response(
		JSON.stringify({
			name: 'iseven-py',
			nameShown: 'iseven',
			link: ''
		})
	);
}
