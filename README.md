# Cogear.JS plugin `Pages.JSON`

Simply generates `pages.json` file in the `source` folder with all parsed pages data structure.

May be usefull for implementing in site javascript to creating menus of for async data load with Vue/React.

# Installation

Go to the site folder and install plugin with command:
```bash
yarn add cogear-plugin-pages-json
# or 
npm install cogear-plugin-pages-json
```

Plugin will loads up automatically.

# Usage

Add your own usage implementation on `app.js` (provided by default) or any other script you'll provide.

Listing `app.js`:
```javascript
import pages from './pages.json'

new Vue({
	el: "#menu"
	data(){
		return {
			pages
		}
	}
})
```
