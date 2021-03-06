// mport { getAllPostSlugs } from "../../lib/posts";
const { SitemapStream, streamToPromise } = require('sitemap')
const { Readable } = require('stream')

export default sitemap = async (req, res) => {
	try {
		const links = []
		// blog post links in to be implemented
		// getAllPostSlugs().map((post) => {
		//   links.push({
		//     url: `/blog/${post.params.slug}`,
		//     changefreq: "daily",
		//     priority: 0.9,
		//   });
		// });

		// Add other pages
		const pages = [
			'/about-us',
			'/business',
			'/savings',
			'/nob-credit',
			'/developers',
		]
		pages.map((url) => {
			links.push({
				url,
				changefreq: 'daily',
				priority: 0.9,
			})
		})

		// Create a stream to write to
		const stream = new SitemapStream({
			hostname: `https://${req.headers.host}`,
		})

		res.writeHead(200, {
			'Content-Type': 'application/xml',
		})

		const xmlString = await streamToPromise(
			Readable.from(links).pipe(stream),
		).then((data) => data.toString())

		res.end(xmlString)
	} catch (e) {
		console.log(e)
		res.send(JSON.stringify(e))
	}
}
