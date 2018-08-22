const path = require("path"),
stringify = require("json-stringify-pretty-compact"),
fs = require("fs");

module.exports = {
		apply(){
			let pagesJSON = path.join(cogear.options.src, "pages.json")
			// Process hooks here
			cogear.on('build.done',()=>{
				// Write pages to JSON
				fs.writeFileSync(pagesJSON,stringify(cogear.pages));
			})
			cogear.on('clear',()=>{
				del.sync(pagesJSON)
			})
			cogear.on('death',()=>{
				del.sync(pagesJSON)
			})
		}
}
