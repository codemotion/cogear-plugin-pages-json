const path = require("path"),
stringify = require("json-stringify-pretty-compact"),
fs = require("fs");

module.exports = {
		apply(cogear){
			let pagesJSON = path.join(cogear.options.src, "pages.json")
			// Process hooks here
			cogear.hooks.build.tap('Build pages.json',()=>{
				// Write pages to JSON
				fs.writeFileSync(pagesJSON,stringify(cogear.pages));
			})
			cogear.hooks.clearBuild.tap('Remove pages.json on clear build',()=>{
				del.sync(pagesJSON)
			})
			cogear.hooks.death.tap('Remove pages.json on exit',()=>{
				del.sync(pagesJSON)
			})
		}
}
