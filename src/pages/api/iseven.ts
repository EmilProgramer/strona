export async function GET() {
	return new Response(
		JSON.stringify({
			js: 'iseven-js',
			rs: 'iseven-rs',
			py: 'iseven-py'
		})
	);
}
