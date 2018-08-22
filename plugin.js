const path = require("path"),
stringify = require("json-stringify-pretty-compact"),
fs = require("fs");

module.exports = {
		apply(){
			// Process hooks here
			cogear.on('build.done',()=>{
				// Write pages to JSON
				let pages = {}
				Object.entries(cogear.pages).map(([file,page])=>{
					pages[page.path.replace('index.html','').replace(/^/,'/')] = {
						title: page.title,
						content: page.content,
					}
				})
				let pagesJSON = path.join(cogear.options.output, "pages.json")
				fs.writeFileSync(pagesJSON,stringify(pages));
				cogear.emit('pages.json',pagesJSON)
			})
			cogear.on('clear',()=>{
				let pagesJSON = path.join(cogear.options.output, "pages.json")
				del.sync(pagesJSON)
			})
			cogear.on('death',()=>{
				let pagesJSON = path.join(cogear.options.output, "pages.json")
				del.sync(pagesJSON)
			})
		}
}
