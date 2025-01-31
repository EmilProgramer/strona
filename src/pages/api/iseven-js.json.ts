export async function GET() {
	return new Response(
		JSON.stringify({
			name: 'iseven-js',
			nameShown: 'iseven.js',
			link: ''
		})
	);
}
